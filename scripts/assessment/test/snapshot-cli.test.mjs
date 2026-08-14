import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const cli = path.join(here, '..', 'snapshot-agent-config.mjs');
const collectCli = path.join(here, '..', 'collect.mjs');
const fixture = path.join(here, 'fixtures', 'sample-project');

function run(args, env = {}) {
  return spawnSync(process.execPath, [cli, ...args], {
    encoding: 'utf8',
    env: { ...process.env, ...env },
  });
}

// The stub API server lives in this process, so the CLI under test
// must run with an async spawn: spawnSync would block the event loop
// and deadlock the child against a server that can never answer.
function runAsync(args, env = {}) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [cli, ...args], {
      env: { ...process.env, ...env },
    });
    let stderr = '';
    child.stderr.on('data', (chunk) => {
      stderr += chunk;
    });
    child.on('close', (status) => resolve({ status, stderr }));
  });
}

function withServer(status, body) {
  const server = http.createServer((req, res) => {
    res.writeHead(status, { 'content-type': 'application/json' });
    res.end(body);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve({
        base: `http://127.0.0.1:${server.address().port}`,
        close: () => new Promise((done) => server.close(done)),
      });
    });
  });
}

test('snapshot rejects a flag consumed as another flag value', () => {
  const r = run(['--repo', 'cncf/techdocs', '--out', '--repo']);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /--out/);
});

test('snapshot success replaces a stale error record and joins the manifest', async () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-snap-'));
  const collect = spawnSync(
    process.execPath,
    [collectCli, '--repo', fixture, '--out', out],
    { encoding: 'utf8' },
  );
  assert.equal(collect.status, 0, collect.stderr);
  fs.writeFileSync(path.join(out, 'agent-config.error.json'), '{"old":1}\n');

  const server = await withServer(200, '{"is_firewall_enabled":true}');
  const r = await runAsync(['--repo', 'o/r', '--out', out], {
    GITHUB_API_URL: server.base,
  });
  await server.close();
  assert.equal(r.status, 0, r.stderr);

  assert.ok(fs.existsSync(path.join(out, 'agent-config.json')));
  assert.ok(!fs.existsSync(path.join(out, 'agent-config.error.json')));
  const verify = spawnSync(
    process.execPath,
    [collectCli, 'verify', '--out', out],
    { encoding: 'utf8' },
  );
  assert.equal(verify.status, 0, verify.stderr);
});

test('snapshot failure replaces a stale success record and joins the manifest', async () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-snap-'));
  fs.writeFileSync(path.join(out, 'agent-config.json'), '{"old":1}\n');

  const server = await withServer(500, '{}');
  const r = await runAsync(['--repo', 'o/r', '--out', out], {
    GITHUB_API_URL: server.base,
  });
  await server.close();
  assert.equal(r.status, 0, r.stderr);

  assert.ok(fs.existsSync(path.join(out, 'agent-config.error.json')));
  assert.ok(!fs.existsSync(path.join(out, 'agent-config.json')));
  const verify = spawnSync(
    process.execPath,
    [collectCli, 'verify', '--out', out],
    { encoding: 'utf8' },
  );
  assert.equal(verify.status, 0, verify.stderr);
});
