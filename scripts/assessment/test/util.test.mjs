import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sha256Hex, stableStringify } from '../lib/util.mjs';

test('stableStringify sorts object keys at every depth', () => {
  const out = stableStringify({ b: 1, a: { d: 2, c: [3, { z: 4, y: 5 }] } });
  assert.equal(
    out,
    JSON.stringify({ a: { c: [3, { y: 5, z: 4 }], d: 2 }, b: 1 }, null, 2),
  );
});

test('stableStringify preserves array order', () => {
  assert.equal(stableStringify([2, 1]), JSON.stringify([2, 1], null, 2));
});

test('sha256Hex matches a known vector', () => {
  assert.equal(
    sha256Hex('abc'),
    'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
  );
});
