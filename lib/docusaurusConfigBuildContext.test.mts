import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import url from 'node:url';

// docusaurus.config.ts is excluded from the c8 coverage gate (it can't be
// imported into a running test process without reloading its top-level
// `getBuildContext(repo)` call for each env combination), so its three
// `isProd`-dependent fields (`url`, and the `editUrl` on both the docs
// preset and the analyses plugin) have no unit coverage at all. Exercise
// them here via a fresh child process per env combination, using the same
// test-only harness pattern as docusaurusConfigPreprocessor.test.mts.
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');
const harness = path.join(__dirname, 'testHelpers', 'printConfigBuildUrls.mjs');

function readConfigUrls(env: Record<string, string>) {
  const result = spawnSync(
    process.execPath,
    ['--experimental-strip-types', harness],
    {
      cwd: repoRoot,
      encoding: 'utf-8',
      env: { ...process.env, ...env },
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
  };
}

describe('docusaurus.config.ts (isProd-dependent branches)', () => {
  it('uses the production site URL and GitHub editUrl links when BUILD_ENV=production', () => {
    const {
      url: siteUrl,
      docsEditUrl,
      analysesEditUrl,
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
  });

  it('falls back to DEPLOY_PRIME_URL and omits editUrl for non-production deploy previews', () => {
    const {
      url: siteUrl,
      docsEditUrl,
      analysesEditUrl,
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
  });

  it('falls back to localhost when neither production nor DEPLOY_PRIME_URL is set', () => {
    const { url: siteUrl } = readConfigUrls({
      BUILD_ENV: 'development',
      DEPLOY_PRIME_URL: '',
    });

    assert.equal(siteUrl, 'http://localhost:3000');
  });
});
