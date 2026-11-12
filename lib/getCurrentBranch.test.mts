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

  it('returns undefined instead of throwing when `git branch --show-current` fails', async () => {
    clearEnv();
    const { mkdtemp } = await import('node:fs/promises');
    const { tmpdir } = await import('node:os');
    const path = await import('node:path');
    const dir = await mkdtemp(path.join(tmpdir(), 'getCurrentBranch-'));
    const originalCwd = process.cwd();
    // Outside any git repository, `git branch --show-current` exits non-zero
    // and execSync throws; the function must swallow that and return
    // undefined rather than propagating the error.
    process.chdir(dir);
    try {
      assert.strictEqual(getCurrentBranch(), undefined);
    } finally {
      process.chdir(originalCwd);
    }
  });

  it('returns undefined instead of an empty string when HEAD is detached', async () => {
    clearEnv();
    const { mkdtemp } = await import('node:fs/promises');
    const { tmpdir } = await import('node:os');
    const path = await import('node:path');
    const { execFileSync } = await import('node:child_process');
    const dir = await mkdtemp(path.join(tmpdir(), 'getCurrentBranch-'));
    const originalCwd = process.cwd();
    // In detached-HEAD state, `git branch --show-current` succeeds but
    // prints an empty string; the function must normalize that falsy result
    // to undefined rather than returning ''.
    execFileSync('git', ['init', '-q'], { cwd: dir });
    execFileSync('git', ['config', 'user.email', 'test@example.com'], {
      cwd: dir,
    });
    execFileSync('git', ['config', 'user.name', 'Test'], { cwd: dir });
    await import('node:fs/promises').then(({ writeFile }) =>
      writeFile(path.join(dir, 'f.txt'), 'hi'),
    );
    execFileSync('git', ['add', '.'], { cwd: dir });
    execFileSync('git', ['commit', '-q', '-m', 'init'], { cwd: dir });
    execFileSync('git', ['checkout', '-q', '--detach', 'HEAD'], { cwd: dir });
    process.chdir(dir);
    try {
      assert.strictEqual(getCurrentBranch(), undefined);
    } finally {
      process.chdir(originalCwd);
    }
  });
});
