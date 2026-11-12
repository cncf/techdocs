import assert from 'node:assert/strict';
import { describe, it, beforeEach, afterEach } from 'node:test';
import getBuildContext from './getBuildContext.ts';

const ENV_KEYS = [
  'BUILD_ENV',
  'DEPLOY_PRIME_URL',
  'HEAD',
  'BRANCH',
  'GITHUB_HEAD_REF',
  'GITHUB_REF_NAME',
  'REPOSITORY_URL',
] as const;
const savedEnv: Record<string, string | undefined> = {};

beforeEach(() => {
  for (const key of ENV_KEYS) savedEnv[key] = process.env[key];
  for (const key of ENV_KEYS) delete process.env[key];
});

afterEach(() => {
  for (const key of ENV_KEYS) {
    if (savedEnv[key] === undefined) delete process.env[key];
    else process.env[key] = savedEnv[key];
  }
});

describe('getBuildContext', () => {
  it('defaults to production when BUILD_ENV is unset', () => {
    const ctx = getBuildContext('https://github.com/cncf/techdocs');
    assert.strictEqual(ctx.buildEnv, 'production');
    assert.strictEqual(ctx.isProd, true);
    assert.strictEqual(ctx.isDeployPreview, false);
    assert.strictEqual(ctx.assetBranch, 'main');
    assert.strictEqual(ctx.assetRepo, 'https://github.com/cncf/techdocs');
    assert.strictEqual(
      ctx.assetBaseUrl,
      'https://github.com/cncf/techdocs/blob/main',
    );
  });

  it('is not a deploy preview when BUILD_ENV is non-production but DEPLOY_PRIME_URL is unset', () => {
    process.env.BUILD_ENV = 'dev';
    const ctx = getBuildContext('https://github.com/cncf/techdocs');
    assert.strictEqual(ctx.isProd, false);
    assert.strictEqual(ctx.isDeployPreview, false);
    assert.strictEqual(ctx.assetBranch, 'main');
    assert.strictEqual(ctx.assetRepo, 'https://github.com/cncf/techdocs');
  });

  it('builds a deploy-preview context from the current branch and repo', () => {
    process.env.BUILD_ENV = 'dev';
    process.env.DEPLOY_PRIME_URL =
      'https://deploy-preview-1--example.netlify.app';
    process.env.HEAD = 'my-feature-branch';
    process.env.REPOSITORY_URL = 'https://github.com/someone/techdocs-fork';
    const ctx = getBuildContext('https://github.com/cncf/techdocs');
    assert.strictEqual(ctx.buildEnv, 'dev');
    assert.strictEqual(ctx.isProd, false);
    assert.strictEqual(ctx.isDeployPreview, true);
    assert.strictEqual(ctx.assetBranch, 'my-feature-branch');
    assert.strictEqual(
      ctx.assetRepo,
      'https://github.com/someone/techdocs-fork',
    );
    assert.strictEqual(
      ctx.assetBaseUrl,
      'https://github.com/someone/techdocs-fork/blob/my-feature-branch',
    );
  });

  it('falls back to main/repo arg in deploy-preview mode when branch/remote cannot be resolved', () => {
    process.env.BUILD_ENV = 'dev';
    process.env.DEPLOY_PRIME_URL =
      'https://deploy-preview-1--example.netlify.app';
    // No HEAD/BRANCH/GITHUB_* env vars, no REPOSITORY_URL: getCurrentBranch()
    // and getGitHubRepoUrl() fall back to git plumbing, which may or may not
    // resolve in this environment, so assetBranch/assetRepo must still be
    // non-empty strings built from the '|| fallback' defaults.
    const ctx = getBuildContext('https://github.com/cncf/techdocs');
    assert.strictEqual(ctx.isDeployPreview, true);
    assert.ok(
      typeof ctx.assetBranch === 'string' && ctx.assetBranch.length > 0,
    );
    assert.ok(typeof ctx.assetRepo === 'string' && ctx.assetRepo.length > 0);
    assert.strictEqual(
      ctx.assetBaseUrl,
      `${ctx.assetRepo}/blob/${ctx.assetBranch}`,
    );
  });
});
