import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import url from 'node:url';
import getCurrentBranch from './getCurrentBranch.ts';
import getGitHubRepoUrl from './getGitHubRepoUrl.ts';

// docusaurus.config.ts is excluded from the c8 coverage gate (it can't be
// imported into a running test process without reloading its top-level
// `getBuildContext(repo)` call for each env combination), so its
// `isProd`/`isDeployPreview`-dependent fields (`url`, the `editUrl` on both
// the docs preset and the analyses plugin, and the rewrite plugin's
// `assetBaseUrl` option) have no unit coverage at all. Exercise them here
// via a fresh child process per env combination, using the same test-only
// harness pattern as docusaurusConfigPreprocessor.test.mts.
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');
const harness = path.join(__dirname, 'testHelpers', 'printConfigBuildUrls.mjs');

// getCurrentBranch()/getGitHubRepoUrl() also read these env vars (and, absent
// those, real `git` state from repoRoot), so every case below must pin them
// explicitly to stay deterministic regardless of the branch/CI env this test
// itself runs under.
const BRANCH_AND_REPO_ENV = {
  HEAD: '',
  BRANCH: '',
  GITHUB_HEAD_REF: '',
  GITHUB_REF_NAME: '',
  REPOSITORY_URL: '',
};

function readConfigUrls(env: Record<string, string>) {
  const result = spawnSync(
    process.execPath,
    ['--experimental-strip-types', harness],
    {
      cwd: repoRoot,
      encoding: 'utf-8',
      env: { ...process.env, ...BRANCH_AND_REPO_ENV, ...env },
    },
  );

  assert.equal(
    result.status,
    0,
    `harness exited with ${result.status}:\n${result.stderr}`,
  );

  return JSON.parse(result.stdout) as {
    url: string;
    docsEditUrl?: string;
    analysesEditUrl?: string;
    assetBaseUrl: string;
  };
}

describe('docusaurus.config.ts (isProd-dependent branches)', () => {
  it('uses the production site URL and GitHub editUrl/asset links when BUILD_ENV=production', () => {
    const {
      url: siteUrl,
      docsEditUrl,
      analysesEditUrl,
      assetBaseUrl,
    } = readConfigUrls({
      BUILD_ENV: 'production',
      DEPLOY_PRIME_URL: '',
      // Pinned (rather than left to fall back to this checkout's real
      // `origin` remote) so the test is deterministic on a fork clone, not
      // only a checkout whose `origin` is cncf/techdocs.
      REPOSITORY_URL: 'https://github.com/cncf/techdocs.git',
    });

    assert.equal(siteUrl, 'https://cncf-techdocs.netlify.app');
    assert.equal(docsEditUrl, 'https://github.com/cncf/techdocs/tree/main');
    assert.equal(analysesEditUrl, 'https://github.com/cncf/techdocs/tree/main');
    assert.equal(assetBaseUrl, 'https://github.com/cncf/techdocs/blob/main');
  });

  it('falls back to DEPLOY_PRIME_URL, omits editUrl, and keeps the main-branch asset URL for non-preview, non-production builds', () => {
    const {
      url: siteUrl,
      docsEditUrl,
      analysesEditUrl,
      assetBaseUrl,
    } = readConfigUrls({
      BUILD_ENV: 'deploy-preview',
      DEPLOY_PRIME_URL: 'https://deploy-preview-1--cncf-techdocs.netlify.app',
      // Pinned explicitly (rather than left to fall back to this checkout's
      // real branch/remote) so the test is deterministic on any contributor
      // checkout, not only a detached-HEAD CI checkout of cncf/techdocs' 'main'.
      GITHUB_REF_NAME: 'main',
      REPOSITORY_URL: 'https://github.com/cncf/techdocs.git',
    });

    assert.equal(
      siteUrl,
      'https://deploy-preview-1--cncf-techdocs.netlify.app',
    );
    assert.equal(docsEditUrl, undefined);
    assert.equal(analysesEditUrl, undefined);
    assert.equal(assetBaseUrl, 'https://github.com/cncf/techdocs/blob/main');
  });

  it('falls back to localhost when neither production nor DEPLOY_PRIME_URL is set', () => {
    const { url: siteUrl } = readConfigUrls({
      BUILD_ENV: 'development',
      DEPLOY_PRIME_URL: '',
    });

    assert.equal(siteUrl, 'http://localhost:3000');
  });

  it('wires getCurrentBranch() into the rewrite plugin asset URL for a real deploy preview build', () => {
    const { assetBaseUrl } = readConfigUrls({
      BUILD_ENV: 'deploy-preview',
      DEPLOY_PRIME_URL: 'https://deploy-preview-42--cncf-techdocs.netlify.app',
      GITHUB_REF_NAME: 'my-feature-branch',
      // Pinned (see the production/deploy-preview cases above) so this
      // assertion of a hardcoded cncf/techdocs URL stays deterministic on a
      // fork clone, whose real `origin` remote getGitHubRepoUrl() would
      // otherwise fall back to.
      REPOSITORY_URL: 'https://github.com/cncf/techdocs.git',
    });

    assert.equal(
      assetBaseUrl,
      'https://github.com/cncf/techdocs/blob/my-feature-branch',
    );
  });

  it('wires getGitHubRepoUrl() into the rewrite plugin asset URL for a forked deploy preview build', () => {
    const { assetBaseUrl } = readConfigUrls({
      BUILD_ENV: 'deploy-preview',
      DEPLOY_PRIME_URL: 'https://deploy-preview-42--cncf-techdocs.netlify.app',
      GITHUB_REF_NAME: 'my-feature-branch',
      REPOSITORY_URL: 'https://github.com/some-fork/techdocs.git',
    });

    assert.equal(
      assetBaseUrl,
      'https://github.com/some-fork/techdocs/blob/my-feature-branch',
    );
  });

  // Every case above pins HEAD/BRANCH/GITHUB_HEAD_REF/GITHUB_REF_NAME and
  // REPOSITORY_URL, which the production code (and getCurrentBranch()/
  // getGitHubRepoUrl()) treat as equivalent to "unset" because it checks
  // truthiness, not key presence. That keeps every case above deterministic
  // by skipping the real `git branch --show-current` / `git remote get-url
  // origin` fallbacks. Those fallbacks are 100% unit-covered in isolation
  // (lib/getCurrentBranch.test.mts, lib/getGitHubRepoUrl.test.mts), but no
  // suite asserted they're actually wired into docusaurus.config.ts's
  // assetBaseUrl when a deploy-preview build runs with those vars cleared,
  // e.g. a bare `netlify build` outside CI. A regression that stopped
  // passing their return values through to assetBaseUrl would pass every
  // unit test above while still breaking that real build.
  it('wires the real git branch/remote into the asset URL for a deploy-preview build with branch/repo env vars cleared', (t) => {
    const keys = [
      'HEAD',
      'BRANCH',
      'GITHUB_HEAD_REF',
      'GITHUB_REF_NAME',
      'REPOSITORY_URL',
    ] as const;
    const saved: Record<string, string | undefined> = {};
    for (const key of keys) {
      saved[key] = process.env[key];
      delete process.env[key];
    }

    let realBranch: string | undefined;
    let realRepo: string | undefined;
    const savedCwd = process.cwd();
    try {
      // readConfigUrls spawns the harness with cwd: repoRoot, so the real
      // `git` fallback it exercises reads repoRoot's git state. Match that
      // here (rather than this process's own cwd) so both sides agree
      // regardless of where the test runner was invoked from.
      process.chdir(repoRoot);
      // Computed via the same already-unit-tested helpers docusaurus.config.ts
      // calls, not reimplemented here: this test proves the *wiring*, not the
      // helpers' own git-fallback correctness.
      realBranch = getCurrentBranch();
      realRepo = getGitHubRepoUrl();
    } finally {
      process.chdir(savedCwd);
      for (const key of keys) {
        if (saved[key] === undefined) delete process.env[key];
        else process.env[key] = saved[key];
      }
    }

    // If this environment can't produce a real branch/remote (detached HEAD,
    // no origin, no .git directory), both getCurrentBranch()/
    // getGitHubRepoUrl() and docusaurus.config.ts collapse to the same
    // hardcoded defaults, so the assertion below would pass vacuously
    // without ever exercising the git fallback. Skip rather than claim a
    // pass that proves nothing.
    if (!realBranch || !realRepo) {
      t.skip(
        'no real git branch/remote available in this environment; cannot prove the fallback wiring here',
      );
      return;
    }

    const { assetBaseUrl } = readConfigUrls({
      BUILD_ENV: 'deploy-preview',
      DEPLOY_PRIME_URL: 'https://deploy-preview-1--cncf-techdocs.netlify.app',
      HEAD: '',
      BRANCH: '',
      GITHUB_HEAD_REF: '',
      GITHUB_REF_NAME: '',
      REPOSITORY_URL: '',
    });

    assert.equal(assetBaseUrl, `${realRepo}/blob/${realBranch}`);
  });
});
