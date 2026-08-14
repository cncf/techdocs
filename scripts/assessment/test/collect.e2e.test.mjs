import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const cli = path.join(here, '..', 'collect.mjs');
const fixture = path.join(here, 'fixtures', 'sample-project');

function run(args) {
  return spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' });
}

function collectInto(dir) {
  return run(['--repo', fixture, '--out', dir]);
}

function readTree(dir) {
  const files = {};
  const walk = (rel) => {
    for (const entry of fs
      .readdirSync(path.join(dir, rel), { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name))) {
      const relPath = rel ? `${rel}/${entry.name}` : entry.name;
      if (entry.isDirectory()) walk(relPath);
      else files[relPath] = fs.readFileSync(path.join(dir, relPath));
    }
  };
  walk('');
  return files;
}

test('collect twice produces byte-identical outputs', () => {
  const base = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-collect-'));
  const out1 = path.join(base, 'out1');
  const out2 = path.join(base, 'out2');
  for (const out of [out1, out2]) {
    const r = collectInto(out);
    assert.equal(r.status, 0, r.stderr);
  }
  const tree1 = readTree(out1);
  const tree2 = readTree(out2);
  assert.deepEqual(Object.keys(tree1), Object.keys(tree2));
  assert.ok(Object.keys(tree1).includes('inventory.json'));
  assert.ok(Object.keys(tree1).includes('links.json'));
  assert.ok(Object.keys(tree1).includes('manifest.json'));
  for (const name of Object.keys(tree1)) {
    assert.ok(tree1[name].equals(tree2[name]), `differs: ${name}`);
  }
});

test('verify passes on untouched outputs and fails after tampering', () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-verify-'));
  assert.equal(collectInto(out).status, 0);
  assert.equal(run(['verify', '--out', out]).status, 0);
  const target = path.join(out, 'inventory.json');
  fs.writeFileSync(target, fs.readFileSync(target, 'utf8') + ' ');
  const failed = run(['verify', '--out', out]);
  assert.equal(failed.status, 1);
  assert.match(failed.stderr, /inventory\.json/);
});

test('collect refuses unknown flags and missing arguments', () => {
  assert.notEqual(run(['--repo', fixture]).status, 0);
  assert.notEqual(run(['--bogus']).status, 0);
});

test('collect rejects a flag consumed as another flag value', () => {
  const r = run(['--repo', fixture, '--out', '--check-links']);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /--out/);
  const trailing = run(['--repo', fixture, '--out']);
  assert.equal(trailing.status, 2);
  assert.match(trailing.stderr, /--out/);
});

test('collect rejects an output directory at the repository root', () => {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-root-'));
  fs.writeFileSync(path.join(repo, 'README.md'), '# r\n');
  const r = run(['--repo', repo, '--out', repo]);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /repository root/);
});

test('an unreachable site is recorded as evidence, not a crash', () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-badsite-'));
  const r = run(['--repo', fixture, '--site', 'not-a-url', '--out', out]);
  assert.equal(r.status, 0, r.stderr);
  const fetches = JSON.parse(
    fs.readFileSync(path.join(out, 'site-fetches.json'), 'utf8'),
  );
  assert.equal(fetches.sites.length, 1);
  assert.equal(fetches.sites[0].url, 'not-a-url');
  assert.equal(fetches.sites[0].status, null);
  assert.ok(fetches.sites[0].error);
  assert.equal(run(['verify', '--out', out]).status, 0);
});

test('rerunning into an in-repository output stays byte-identical', () => {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-inrepo-'));
  fs.cpSync(fixture, repo, { recursive: true });
  const out = path.join(repo, 'collected');
  const first = spawnSync(
    process.execPath,
    [cli, '--repo', repo, '--out', out],
    { encoding: 'utf8' },
  );
  assert.equal(first.status, 0, first.stderr);
  const tree1 = readTree(out);
  const second = spawnSync(
    process.execPath,
    [cli, '--repo', repo, '--out', out],
    { encoding: 'utf8' },
  );
  assert.equal(second.status, 0, second.stderr);
  const tree2 = readTree(out);
  assert.deepEqual(Object.keys(tree1), Object.keys(tree2));
  for (const name of Object.keys(tree1)) {
    assert.ok(tree1[name].equals(tree2[name]), `differs: ${name}`);
  }
  const inventory = JSON.parse(tree2['inventory.json'].toString());
  const paths = inventory.repos[0].files.map((f) => f.path);
  assert.ok(!paths.some((p) => p.startsWith('collected')), paths.join(','));
  assert.equal(run(['verify', '--out', out]).status, 0);
});
