import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildInventory } from '../lib/inventory.mjs';

const fixture = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'fixtures',
  'sample-project',
);

test('buildInventory lists files sorted by posix path with hashes', () => {
  const inv = buildInventory(fixture);
  assert.deepEqual(
    inv.files.map((f) => f.path),
    ['README.md', 'assets/sample.png', 'docs/guide.md'],
  );
  for (const f of inv.files) {
    assert.match(f.sha256, /^[0-9a-f]{64}$/);
    assert.ok(f.bytes > 0);
  }
});

test('buildInventory totals count files, bytes, and extensions', () => {
  const inv = buildInventory(fixture);
  assert.equal(inv.totals.fileCount, 3);
  assert.equal(inv.totals.markdownCount, 2);
  assert.deepEqual(inv.totals.byExtension, { '.md': 2, '.png': 1 });
  assert.equal(
    inv.totals.byteCount,
    inv.files.reduce((n, f) => n + f.bytes, 0),
  );
});

test('buildInventory skips .git and node_modules directories', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-inv-'));
  fs.mkdirSync(path.join(root, '.git'));
  fs.mkdirSync(path.join(root, 'node_modules', 'pkg'), { recursive: true });
  fs.writeFileSync(path.join(root, '.git', 'HEAD'), 'ref\n');
  fs.writeFileSync(path.join(root, 'node_modules', 'pkg', 'i.js'), '1\n');
  fs.writeFileSync(path.join(root, 'kept.md'), 'kept\n');
  const inv = buildInventory(root);
  assert.deepEqual(
    inv.files.map((f) => f.path),
    ['kept.md'],
  );
});

test('buildInventory is deterministic across runs', () => {
  const a = JSON.stringify(buildInventory(fixture));
  const b = JSON.stringify(buildInventory(fixture));
  assert.equal(a, b);
});
