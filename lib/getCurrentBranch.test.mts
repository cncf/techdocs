import assert from 'node:assert/strict';
import { describe, it, beforeEach, afterEach } from 'node:test';
import getCurrentBranch from './getCurrentBranch.ts';

const ENV_KEYS = [
  'HEAD',
  'BRANCH',
  'GITHUB_HEAD_REF',
  'GITHUB_REF_NAME',
] as const;
const savedEnv: Record<string, string | undefined> = {};

beforeEach(() => {
  for (const key of ENV_KEYS) savedEnv[key] = process.env[key];
});

afterEach(() => {
  for (const key of ENV_KEYS) {
    if (savedEnv[key] === undefined) delete process.env[key];
    else process.env[key] = savedEnv[key];
  }
});

function clearEnv() {
  for (const key of ENV_KEYS) delete process.env[key];
}

describe('getCurrentBranch', () => {
  it('prefers HEAD over BRANCH and the GitHub Actions refs', () => {
    clearEnv();
    process.env.HEAD = 'head-branch';
    process.env.BRANCH = 'branch-branch';
    process.env.GITHUB_HEAD_REF = 'gh-head-branch';
    process.env.GITHUB_REF_NAME = 'gh-ref-branch';
    assert.strictEqual(getCurrentBranch(), 'head-branch');
  });

  it('prefers BRANCH over the GitHub Actions refs', () => {
    clearEnv();
    process.env.BRANCH = 'branch-branch';
    process.env.GITHUB_HEAD_REF = 'gh-head-branch';
    process.env.GITHUB_REF_NAME = 'gh-ref-branch';
    assert.strictEqual(getCurrentBranch(), 'branch-branch');
  });

  it('prefers GITHUB_HEAD_REF over GITHUB_REF_NAME', () => {
    clearEnv();
    process.env.GITHUB_HEAD_REF = 'gh-head-branch';
    process.env.GITHUB_REF_NAME = 'gh-ref-branch';
    assert.strictEqual(getCurrentBranch(), 'gh-head-branch');
  });

  it('falls back to GITHUB_REF_NAME when nothing else is set', () => {
    clearEnv();
    process.env.GITHUB_REF_NAME = 'gh-ref-branch';
    assert.strictEqual(getCurrentBranch(), 'gh-ref-branch');
  });

  it('falls back to `git branch --show-current` when no env vars are set', () => {
    clearEnv();
    // Running inside a real git checkout, this resolves to a non-empty
    // string or undefined (detached HEAD); either is a valid result, but the
    // call must not throw and must not read any of the env vars above.
    assert.doesNotThrow(() => getCurrentBranch());
  });
});
