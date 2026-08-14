import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  buildManifest,
  upsertOutput,
  verifyManifest,
  writeCollection,
} from '../lib/manifest.mjs';

function tmpDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-manifest-'));
}

const meta = {
  commands: ['collect.mjs --repo sample'],
  repos: [{ path: 'sample', sha: null }],
  sites: [],
};

test('buildManifest hashes every output', () => {
  const m = buildManifest({
    ...meta,
    outputs: { 'inventory.json': '{}\n', 'links.json': '{}\n' },
  });
  assert.deepEqual(m.commands, meta.commands);
  assert.deepEqual(Object.keys(m.outputs), ['inventory.json', 'links.json']);
  for (const entry of Object.values(m.outputs)) {
    assert.match(entry.sha256, /^[0-9a-f]{64}$/);
    assert.ok(entry.bytes > 0);
  }
});

test('writeCollection then verifyManifest passes', () => {
  const dir = tmpDir();
  writeCollection(dir, {
    ...meta,
    outputs: { 'inventory.json': '{"a":1}\n', 'nested/links.json': '{}\n' },
  });
  const result = verifyManifest(dir);
  assert.deepEqual(result, {
    ok: true,
    mismatched: [],
    missing: [],
    unexpected: [],
  });
});

test('verifyManifest flags a tampered output', () => {
  const dir = tmpDir();
  writeCollection(dir, { ...meta, outputs: { 'inventory.json': '{}\n' } });
  fs.writeFileSync(path.join(dir, 'inventory.json'), '{"edited":true}\n');
  const result = verifyManifest(dir);
  assert.equal(result.ok, false);
  assert.deepEqual(result.mismatched, ['inventory.json']);
});

test('verifyManifest flags a missing output', () => {
  const dir = tmpDir();
  writeCollection(dir, { ...meta, outputs: { 'inventory.json': '{}\n' } });
  fs.rmSync(path.join(dir, 'inventory.json'));
  const result = verifyManifest(dir);
  assert.equal(result.ok, false);
  assert.deepEqual(result.missing, ['inventory.json']);
});

test('verifyManifest flags files the manifest does not list', () => {
  const dir = tmpDir();
  writeCollection(dir, { ...meta, outputs: { 'inventory.json': '{}\n' } });
  fs.mkdirSync(path.join(dir, 'sites'));
  fs.writeFileSync(path.join(dir, 'sites/stale.body'), 'left over');
  const result = verifyManifest(dir);
  assert.equal(result.ok, false);
  assert.deepEqual(result.unexpected, ['sites/stale.body']);
});

test('upsertOutput seeds a manifest when none exists', () => {
  const dir = tmpDir();
  upsertOutput(dir, {
    command: 'snapshot-agent-config.mjs --repo o/r',
    name: 'agent-config.json',
    content: '{"config":true}\n',
  });
  const result = verifyManifest(dir);
  assert.deepEqual(result, {
    ok: true,
    mismatched: [],
    missing: [],
    unexpected: [],
  });
  const manifest = JSON.parse(
    fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'),
  );
  assert.deepEqual(manifest.commands, ['snapshot-agent-config.mjs --repo o/r']);
  assert.ok(manifest.outputs['agent-config.json']);
});

test('upsertOutput extends an existing manifest and removes stale names', () => {
  const dir = tmpDir();
  writeCollection(dir, { ...meta, outputs: { 'inventory.json': '{}\n' } });
  fs.writeFileSync(path.join(dir, 'agent-config.error.json'), '{"old":1}\n');
  upsertOutput(dir, {
    command: 'snapshot-agent-config.mjs --repo o/r',
    name: 'agent-config.json',
    content: '{"config":true}\n',
    remove: ['agent-config.error.json'],
  });
  assert.ok(!fs.existsSync(path.join(dir, 'agent-config.error.json')));
  const result = verifyManifest(dir);
  assert.deepEqual(result, {
    ok: true,
    mismatched: [],
    missing: [],
    unexpected: [],
  });
  const manifest = JSON.parse(
    fs.readFileSync(path.join(dir, 'manifest.json'), 'utf8'),
  );
  assert.deepEqual(manifest.commands, [
    'collect.mjs --repo sample',
    'snapshot-agent-config.mjs --repo o/r',
  ]);
});

test('upsertOutput run twice leaves byte-identical manifests', () => {
  const dir = tmpDir();
  const change = {
    command: 'snapshot-agent-config.mjs --repo o/r',
    name: 'agent-config.json',
    content: '{"config":true}\n',
    remove: ['agent-config.error.json'],
  };
  upsertOutput(dir, change);
  const first = fs.readFileSync(path.join(dir, 'manifest.json'));
  upsertOutput(dir, change);
  const second = fs.readFileSync(path.join(dir, 'manifest.json'));
  assert.ok(first.equals(second));
});
