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

  // `lib/remarkRewriteLinks/index.test.mts` unit-tests the `image` visitor
  // branch in isolation ("leaves cross-plugin image assets untouched"):
  // rewriteHref() returns a cross-plugin `.png` image href unchanged because
  // only `.md`/`.mdx`/extensionless cross-plugin paths get rewritten, leaving
  // non-Markdown assets to Docusaurus's own asset resolver. No suite had
  // asserted that this real analyses/2021/kubernetes-gateway-api/analysis.md
  // image actually resolves in a real build: the remark plugin's `link` and
  // `definition` node handling is already e2e-asserted elsewhere in this
  // file, but the `image` node the visitor also walks was not. A regression
  // that made the plugin rewrite (and thereby break) cross-plugin image
  // hrefs would pass every unit test while still producing a broken `<img>`
  // src in the real site.
  it('leaves a cross-plugin image href untouched so Docusaurus resolves it to a hashed asset URL', async () => {
    const html = await readFile(
      path.join(
        outDir,
        'analyses/2021/kubernetes-gateway-api/analysis/index.html',
      ),
      'utf-8',
    );
    assert.match(html, /src="\/assets\/images\/gapi_info_arch-[0-9a-f]+\.png"/);
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

// The production build above always resolves to the `main` branch/repo
// because `BUILD_ENV=dev` + a cleared `DEPLOY_PRIME_URL` keeps
// getBuildContext() out of deploy-preview mode. getCurrentBranch() and
// getGitHubRepoUrl() are 100% unit-covered in isolation
// (lib/getCurrentBranch.test.mts, lib/getGitHubRepoUrl.test.mts), but no
// suite asserted that docusaurus.config.ts's assetBaseUrl actually wires
// their deploy-preview output into the rewritten .csv link during a real
// build. This suite exercises exactly that path with deterministic env
// vars, so a regression in that wiring fails here even when the unit
// tests for each helper still pass in isolation.
describe('deploy-preview build wires branch/repo detection into the rewritten .csv link', () => {
  let outDir;

  before(async () => {
    outDir = await mkdtemp(path.join(tmpdir(), 'techdocs-e2e-preview-'));
    execFileSync('npx', ['docusaurus', 'build', '--out-dir', outDir], {
      cwd: repoRoot,
      env: {
        ...process.env,
        BUILD_ENV: 'deploy-preview',
        DEPLOY_PRIME_URL: 'https://deploy-preview-1--cncf-techdocs.netlify.app',
        // Clear the higher-priority inputs getCurrentBranch() checks
        // (HEAD, BRANCH, GITHUB_HEAD_REF) so this pinned GITHUB_REF_NAME
        // can't be overridden by the inherited environment, e.g. a real
        // GitHub Actions pull-request job setting GITHUB_HEAD_REF to the
        // actual PR branch. Matches the pattern used by the config
        // integration harness (docusaurusConfigBuildContext.test.mts).
        HEAD: '',
        BRANCH: '',
        GITHUB_HEAD_REF: '',
        GITHUB_REF_NAME: 'e2e-preview-branch',
        REPOSITORY_URL: 'https://github.com/example-org/example-repo',
      },
      stdio: 'inherit',
    });
  });

  after(async () => {
    if (outDir) await rm(outDir, { recursive: true, force: true });
  });

  it('rewrites the .csv asset link to the preview branch and repo, not main', async () => {
    const html = await readFile(
      path.join(outDir, 'analyses/2023/backstage/index.html'),
      'utf-8',
    );
    assert.match(
      html,
      /https:\/\/github\.com\/example-org\/example-repo\/blob\/e2e-preview-branch\/analyses\/2023\/backstage\/backstage-doc-survey\.csv/,
    );
    assert.doesNotMatch(html, /\/blob\/main\//);
  });
});
