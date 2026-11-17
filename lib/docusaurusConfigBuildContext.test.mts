import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import url from 'node:url';

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
    });

    assert.equal(siteUrl, 'https://cncf-techdocs.netlify.app');
    assert.equal(docsEditUrl, 'https://github.com/cncf/techdocs/tree/main');
    assert.equal(
      analysesEditUrl,
      'https://github.com/cncf/techdocs/tree/main/analyses',
    );
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
    });

    assert.equal(
      siteUrl,
      'https://deploy-preview-1--cncf-techdocs.netlify.app',
    );
    assert.equal(docsEditUrl, undefined);
    assert.equal(analysesEditUrl, undefined);
    // No branch/repo override is given here, so getCurrentBranch()/
    // getGitHubRepoUrl() fall back to this checkout's real 'main' branch
    // and 'cncf/techdocs' origin remote.
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
});
