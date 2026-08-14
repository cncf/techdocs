import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildInventory, markdownPaths } from '../lib/inventory.mjs';

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

test('buildInventory excludes a named subtree', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-inv-'));
  fs.mkdirSync(path.join(root, 'collected', 'sites'), { recursive: true });
  fs.writeFileSync(path.join(root, 'collected', 'manifest.json'), '{}\n');
  fs.writeFileSync(path.join(root, 'collected', 'sites', 'a.body'), 'x\n');
  fs.writeFileSync(path.join(root, 'kept.md'), 'kept\n');
  const inv = buildInventory(root, { exclude: ['collected'] });
  assert.deepEqual(
    inv.files.map((f) => f.path),
    ['kept.md'],
  );
});

test('buildInventory records symlinks without following them', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-inv-'));
  fs.mkdirSync(path.join(root, 'docs'));
  fs.writeFileSync(path.join(root, 'docs', 'real.md'), '# real\n');
  fs.symlinkSync('docs/real.md', path.join(root, 'alias.md'));
  fs.symlinkSync('/etc', path.join(root, 'escape'));
  const inv = buildInventory(root);
  assert.deepEqual(
    inv.files.map((f) => f.path),
    ['docs/real.md'],
  );
  assert.deepEqual(
    inv.symlinks.map((s) => [s.path, s.target]),
    [
      ['alias.md', 'docs/real.md'],
      ['escape', '/etc'],
    ],
  );
  for (const s of inv.symlinks) {
    assert.match(s.sha256, /^[0-9a-f]{64}$/);
    assert.equal(s.bytes, Buffer.byteLength(s.target));
  }
  assert.equal(inv.totals.fileCount, 1);
  assert.equal(inv.totals.symlinkCount, 2);
});

test('markdownPaths never includes symlinked markdown', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'aiaa-inv-'));
  fs.writeFileSync(path.join(root, 'real.md'), '# real\n');
  fs.symlinkSync('real.md', path.join(root, 'alias.md'));
  assert.deepEqual(markdownPaths(buildInventory(root)), ['real.md']);
});
