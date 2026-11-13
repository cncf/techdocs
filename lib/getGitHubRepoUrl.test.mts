import assert from 'node:assert/strict';
import { describe, it, beforeEach, afterEach } from 'node:test';
import getGitHubRepoUrl from './getGitHubRepoUrl.ts';

const ENV_KEYS = ['REPOSITORY_URL'] as const;
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

describe('getGitHubRepoUrl', () => {
  it('normalizes an HTTPS REPOSITORY_URL', () => {
    process.env.REPOSITORY_URL = 'https://github.com/cncf/techdocs';
    assert.strictEqual(getGitHubRepoUrl(), 'https://github.com/cncf/techdocs');
  });

  it('normalizes an HTTPS REPOSITORY_URL with a .git suffix', () => {
    process.env.REPOSITORY_URL = 'https://github.com/cncf/techdocs.git';
    assert.strictEqual(getGitHubRepoUrl(), 'https://github.com/cncf/techdocs');
  });

  it('normalizes an SSH REPOSITORY_URL', () => {
    process.env.REPOSITORY_URL = 'git@github.com:cncf/techdocs.git';
    assert.strictEqual(getGitHubRepoUrl(), 'https://github.com/cncf/techdocs');
  });

  it('normalizes an SSH REPOSITORY_URL without a .git suffix', () => {
    process.env.REPOSITORY_URL = 'git@github.com:cncf/techdocs';
    assert.strictEqual(getGitHubRepoUrl(), 'https://github.com/cncf/techdocs');
  });

  it('falls back to the git remote when REPOSITORY_URL is unset', () => {
    delete process.env.REPOSITORY_URL;
    // The checkout's origin remote points at some fork or upstream of
    // techdocs on GitHub; don't hard-code the owner, which varies by fork/CI.
    assert.match(
      getGitHubRepoUrl() ?? '',
      /^https:\/\/github\.com\/[^/]+\/techdocs$/,
    );
  });

  it('falls back to the git remote when REPOSITORY_URL does not parse', () => {
    process.env.REPOSITORY_URL = 'not-a-github-url';
    assert.match(
      getGitHubRepoUrl() ?? '',
      /^https:\/\/github\.com\/[^/]+\/techdocs$/,
    );
  });

  it('returns undefined for a non-existent remote', () => {
    delete process.env.REPOSITORY_URL;
    assert.strictEqual(getGitHubRepoUrl('does-not-exist'), undefined);
  });
});
