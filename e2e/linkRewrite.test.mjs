// cSpell:ignore keda litmuschaos
import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');

// Unit tests (lib/docusaurusConfigPreprocessor.test.mts,
// lib/remarkRewriteLinks/index.test.mts) cover the pure rewrite functions in
// isolation. Neither one proves the rewrites actually survive being wired
// into Docusaurus's real build pipeline (plugin registration, option
// shape, remark plugin ordering). This suite runs the genuine
// `docusaurus build` against this repo's own content and asserts the
// known-affected pages render the rewritten links, so a wiring regression
// fails here even when the unit tests still pass.
describe('production build applies the link-rewrite plugins end-to-end', () => {
  let outDir;

  before(async () => {
    outDir = await mkdtemp(path.join(tmpdir(), 'techdocs-e2e-build-'));
    execFileSync('npx', ['docusaurus', 'build', '--out-dir', outDir], {
      cwd: repoRoot,
      // Clear DEPLOY_PRIME_URL so an inherited value from the invoking
      // environment can't flip getBuildContext into deploy-preview mode,
      // which would make the csv assertion target the current branch
      // instead of the asserted `blob/main` canonical URL.
      env: { ...process.env, BUILD_ENV: 'dev', DEPLOY_PRIME_URL: '' },
      stdio: 'inherit',
    });
  });

  after(async () => {
    if (outDir) await rm(outDir, { recursive: true, force: true });
  });

  it('strips .md from a site-absolute /docs link imported from README.md', async () => {
    const html = await readFile(path.join(outDir, 'index.html'), 'utf-8');
    assert.match(html, /href="\/docs\/assistance\/"/);
  });

  it('rewrites a cross-plugin analyses -> docs .md link to a trailing slash', async () => {
    const html = await readFile(
      path.join(outDir, 'analyses/2024/keda/analysis/index.html'),
      'utf-8',
    );
    assert.match(html, /href="\/docs\/analysis\/criteria\/"/);
  });

  it('rewrites an unbundled .csv asset link to its GitHub blob URL', async () => {
    const html = await readFile(
      path.join(outDir, 'analyses/2023/backstage/index.html'),
      'utf-8',
    );
    assert.match(
      html,
      /https:\/\/github\.com\/cncf\/techdocs\/blob\/main\/analyses\/2023\/backstage\/backstage-doc-survey\.csv/,
    );
  });

  // `lib/docusaurusConfigBuildContext.test.mts` unit-tests the
  // "neither production nor deploy-preview" branch of getBuildContext()'s
  // isProd/isDeployPreview fields (localhost `url`, omitted `editUrl`) in
  // isolation via a child-process harness, but no build in this suite
  // asserted that the real Docusaurus build output above (BUILD_ENV=dev)
  // actually wires those fields into the rendered pages. This build already
  // runs with BUILD_ENV=dev, so a regression that started emitting an
  // edit-this-page link or a non-localhost og:url in that build would pass
  // the unit tests while still failing here.
  it('omits the edit-this-page link for a docs page in a non-production, non-preview build', async () => {
    const html = await readFile(
      path.join(outDir, 'docs/assistance/index.html'),
      'utf-8',
    );
    assert.doesNotMatch(
      html,
      /href="https:\/\/github\.com\/cncf\/techdocs\/tree\/main\/docs\/assistance\.md"/,
    );
  });

  it('sets og:url to the localhost fallback in a non-production, non-preview build', async () => {
    const html = await readFile(path.join(outDir, 'index.html'), 'utf-8');
    assert.match(html, /property="og:url" content="http:\/\/localhost:3000\/"/);
  });
});

// `lib/docusaurusConfigBuildContext.test.mts` unit-tests the
// BUILD_ENV=production branch of `getBuildContext()`/`docusaurus.config.ts`
// (production site `url`, and `editUrl` set on both docs plugins) in
// isolation, but no build anywhere in the suite above actually runs with
// `BUILD_ENV=production` — the real Netlify production context
// (`npm run build:production` -> `npm run _build`, which never sets
// BUILD_ENV, so `getBuildContext.ts` defaults to 'production'). This build
// reproduces that context so a wiring regression (e.g. editUrl silently
// omitted, or url pointing at the wrong domain) fails here instead of only
// surfacing on the live site.
describe('production build wires isProd-dependent editUrl/url end-to-end', () => {
  let outDir;

  before(async () => {
    outDir = await mkdtemp(path.join(tmpdir(), 'techdocs-e2e-prod-build-'));
    execFileSync('npx', ['docusaurus', 'build', '--out-dir', outDir], {
      cwd: repoRoot,
      env: { ...process.env, BUILD_ENV: 'production', DEPLOY_PRIME_URL: '' },
      stdio: 'inherit',
    });
  });

  after(async () => {
    if (outDir) await rm(outDir, { recursive: true, force: true });
  });

  it('renders the GitHub edit-this-page link for a docs page', async () => {
    const html = await readFile(
      path.join(outDir, 'docs/assistance/index.html'),
      'utf-8',
    );
    assert.match(
      html,
      /href="https:\/\/github\.com\/cncf\/techdocs\/tree\/main\/docs\/assistance\.md"/,
    );
  });

  it('renders the GitHub edit-this-page link for an analyses page', async () => {
    const html = await readFile(
      path.join(outDir, 'analyses/2023/backstage/index.html'),
      'utf-8',
    );
    assert.match(
      html,
      /href="https:\/\/github\.com\/cncf\/techdocs\/tree\/main\/analyses\/analyses\/2023\/backstage\/index\.md"/,
    );
  });

  it('sets og:url to the production site domain', async () => {
    const html = await readFile(path.join(outDir, 'index.html'), 'utf-8');
    assert.match(
      html,
      /property="og:url" content="https:\/\/cncf-techdocs\.netlify\.app\/"/,
    );
  });
});
