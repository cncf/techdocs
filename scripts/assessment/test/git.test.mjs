import { test } from 'node:test';
import assert from 'node:assert/strict';
import { resolveHeadSha } from '../lib/git.mjs';

const SHA = 'a'.repeat(40);

test('resolveHeadSha returns the trimmed sha from git', () => {
  const calls = [];
  const exec = (cmd, args) => {
    calls.push([cmd, ...args]);
    return `${SHA}\n`;
  };
  assert.equal(resolveHeadSha('/some/dir', exec), SHA);
  assert.deepEqual(calls, [['git', '-C', '/some/dir', 'rev-parse', 'HEAD']]);
});

test('resolveHeadSha returns null when git fails', () => {
  const exec = () => {
    throw new Error('not a repository');
  };
  assert.equal(resolveHeadSha('/some/dir', exec), null);
});

test('resolveHeadSha returns null on malformed output', () => {
  assert.equal(
    resolveHeadSha('/some/dir', () => 'HEAD\n'),
    null,
  );
});
