import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {
  buildManifest,
  verifyManifest,
  writeCollection,
} from '../lib/manifest.mjs';

function tmpDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-manifest-'));
}

const meta = {
  command: 'collect.mjs --repo sample',
  repos: [{ path: 'sample', sha: null }],
  sites: [],
};

test('buildManifest hashes every output', () => {
  const m = buildManifest({
    ...meta,
    outputs: { 'inventory.json': '{}\n', 'links.json': '{}\n' },
  });
  assert.equal(m.command, meta.command);
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
  assert.deepEqual(result, { ok: true, mismatched: [], missing: [] });
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
