// cSpell:ignore extensionless howto keda litmuschaos
import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm, unlink, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import url from 'node:url';

function currentGitBranch(cwd) {
  return execFileSync('git', ['branch', '--show-current'], {
    cwd,
    encoding: 'utf8',
  }).trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Docusaurus serializes href attributes as HTML, so characters valid in a
// branch name (e.g. `&`) are entity-encoded in the rendered output (`&amp;`).
// Decode the handful of entities HTML attribute serialization can produce
// before comparing against the raw branch name, otherwise a correct build
// fails the assertion for any branch containing one of these characters.
function decodeHtmlEntities(value) {
  // Decode &amp; last: decoding it first would turn a literal "&lt;" (encoded
  // as "&amp;lt;") into "&lt;", which the &lt; replacement below would then
  // incorrectly decode a second time into "<".
  return value
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');
}

function currentGitHubRemote(cwd) {
  const remoteUrl = execFileSync('git', ['remote', 'get-url', 'origin'], {
    cwd,
    encoding: 'utf8',
  }).trim();
  const ssh = remoteUrl.match(/^git@github\.com:([^/]+\/[^/]+?)(?:\.git)?$/);
  if (ssh) return `https://github.com/${ssh[1]}`;
  const https = remoteUrl.match(
    /^https:\/\/github\.com\/([^/]+\/[^/]+?)(?:\.git)?$/,
  );
  if (https) return `https://github.com/${https[1]}`;
  throw new Error(`unexpected origin remote URL: ${remoteUrl}`);
}

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');

describe('decodeHtmlEntities', () => {
  it('decodes &amp; last so a literal "&lt;" sequence is not double-decoded', () => {
    // A branch literally named "&lt;foo" is serialized by HTML attribute
    // encoding as "&amp;lt;foo". Decoding &amp; before &lt; would turn that
    // into "&lt;foo" and then incorrectly decode it again into "<foo".
    assert.equal(decodeHtmlEntities('&amp;lt;foo'), '&lt;foo');
  });

  it('still decodes a genuine &amp; to a literal ampersand', () => {
    assert.equal(decodeHtmlEntities('foo &amp; bar'), 'foo & bar');
  });
});

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

  // `lib/remarkRewriteLinks/index.test.mts` unit-tests the "bare
  // extensionless cross-plugin link with no sub-path" branch (no `.md`
  // extension, visited as a `definition` node) in isolation. The existing
  // cross-plugin e2e assertion above only exercises a `.md`-suffixed
  // `link` node, so a regression confined to the extensionless-or-definition
  // combination would pass every existing e2e assertion. `howto.md`'s
  // `[analyses]: ../../analyses` reference-style definition exercises both
  // gaps at once.
  it('rewrites a bare extensionless cross-plugin reference link to a trailing slash', async () => {
    const html = await readFile(
      path.join(outDir, 'docs/analysis/howto/index.html'),
      'utf-8',
    );
    assert.match(html, /href="\/analyses\/">analyses</);
  });

  // The keda assertion above only exercises inline `[text](url)` links,
  // which the remark plugin rewrites via its `link` visitor. Reference-style
  // links (`[text][ref]` resolved through a separate `[ref]: url` line, as
  // litmuschaos/analysis.md uses) are resolved by the same plugin's
  // `definition` visitor instead - a distinct branch that
  // lib/remarkRewriteLinks/index.test.mts already unit-tests in isolation
  // ("rewrites inline, reference, image and angle-bracketed destinations")
  // but that no e2e assertion had exercised against a real build, so a
  // regression confined to the `definition` branch would pass every
  // existing suite while still shipping broken reference-style links.
  it('rewrites a reference-style cross-plugin analyses -> docs .md link', async () => {
    const html = await readFile(
      path.join(outDir, 'analyses/2024/litmuschaos/analysis/index.html'),
      'utf-8',
    );
    assert.match(html, /href="\/docs\/analysis\/criteria\/"/);
  });

  // `lib/remarkRewriteLinks/index.test.mts` already unit-tests the `image`
  // visitor branch in isolation ("leaves cross-plugin image assets
  // untouched", asserted both directly against rewriteHref() and through the
  // full remark pipeline): rewriteHref() returns a cross-plugin `.png` image
  // href unchanged because only `.md`/`.mdx`/extensionless cross-plugin
  // paths get rewritten, leaving non-Markdown assets to Docusaurus's own
  // asset resolver. A regression in that rewrite logic would already be
  // caught by those unit tests. What no suite had asserted is that this real
  // analyses/2021/kubernetes-gateway-api/analysis.md image actually resolves
  // in a real build: the remark plugin's `link` and `definition` node
  // handling is already e2e-asserted elsewhere in this file, but the `image`
  // node the visitor also walks was not. This test verifies the Docusaurus
  // integration and hashed-asset resolution end-to-end, not a rewrite
  // regression the unit tests would miss.
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
      /href="https:\/\/github\.com\/cncf\/techdocs\/tree\/main\/analyses\/2023\/backstage\/index\.md"/,
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

// The deploy-preview suite above always pins GITHUB_REF_NAME and
// REPOSITORY_URL, so getCurrentBranch() and getGitHubRepoUrl() only ever
// take their env-var branches during a real build. Both helpers'
// `execSync('git ...')` fallbacks (reached only when every relevant env var
// is unset) are 100% unit-covered in isolation
// (lib/getCurrentBranch.test.mts, lib/getGitHubRepoUrl.test.mts), but no
// build in this suite ever wires that fallback output into a rendered page.
// This suite clears every env var the two helpers check and asserts the
// rewritten .csv link reflects this checkout's real branch and remote, so a
// regression confined to the git-fallback branches fails here even when
// the env-var unit tests still pass in isolation.
describe('deploy-preview build falls back to real git branch/remote detection when no env vars are set', () => {
  let outDir;
  let expectedBranch;
  let expectedRepo;

  before(async () => {
    // getBuildContext.ts falls back to 'main' when getCurrentBranch()
    // returns undefined, which is what happens on a detached-HEAD checkout
    // (git branch --show-current prints ''). Mirror that fallback here so
    // this test also passes on detached-HEAD CI checkouts.
    expectedBranch = currentGitBranch(repoRoot) || 'main';
    expectedRepo = currentGitHubRemote(repoRoot);
    outDir = await mkdtemp(path.join(tmpdir(), 'techdocs-e2e-git-fallback-'));
    execFileSync('npx', ['docusaurus', 'build', '--out-dir', outDir], {
      cwd: repoRoot,
      env: {
        ...process.env,
        BUILD_ENV: 'deploy-preview',
        DEPLOY_PRIME_URL: 'https://deploy-preview-1--cncf-techdocs.netlify.app',
        // Clear every env var getCurrentBranch()/getGitHubRepoUrl() check so
        // both fall through to their `execSync('git ...')` branches instead
        // of an env-provided value.
        HEAD: '',
        BRANCH: '',
        GITHUB_HEAD_REF: '',
        GITHUB_REF_NAME: '',
        REPOSITORY_URL: '',
      },
      stdio: 'inherit',
    });
  });

  after(async () => {
    if (outDir) await rm(outDir, { recursive: true, force: true });
  });

  it("rewrites the .csv asset link to this checkout's real git branch and remote", async () => {
    const html = decodeHtmlEntities(
      await readFile(
        path.join(outDir, 'analyses/2023/backstage/index.html'),
        'utf-8',
      ),
    );
    assert.match(
      html,
      new RegExp(
        `${escapeRegExp(expectedRepo)}/blob/${escapeRegExp(expectedBranch)}/analyses/2023/backstage/backstage-doc-survey\\.csv`,
      ),
    );
  });
});

// `lib/remarkRewriteLinks/index.test.mts` unit-tests the `.mdx`-specific
// stripping branches in isolation ("maps (../)+docs/.../foo.mdx to
// /docs/.../foo/" and "strips .mdx from site-absolute /docs/.../foo.mdx"),
// but no suite asserted either branch against a real build: this repo's
// docs/analyses content is entirely `.md`, so every other e2e build in this
// file only exercises the `.md` half of `isCrossPage`'s and
// `SITE_ABSOLUTE_MD_RE`'s branches. A regression confined to the `.mdx`
// stripping logic (e.g. an `endsWith('.mdx')` check that silently fell
// through to the `.md` slice length) would pass every existing suite. This
// suite writes temporary `.mdx` fixtures into the real content tree so the
// genuine Docusaurus build picks them up, removing them afterward so no
// content change survives the test run.
describe('production build rewrites .mdx link destinations end-to-end', () => {
  const crossPluginFixture = path.join(
    repoRoot,
    'analyses/2024/keda/e2e-mdx-fixture.mdx',
  );
  const siteAbsoluteFixture = path.join(
    repoRoot,
    'docs/analysis/e2e-mdx-fixture.mdx',
  );
  let outDir;

  before(async () => {
    await writeFile(
      crossPluginFixture,
      [
        '---',
        'title: E2E .mdx cross-plugin fixture',
        '---',
        '',
        '# E2E .mdx cross-plugin fixture',
        '',
        'See [criteria](../../docs/analysis/criteria.mdx) for details.',
        '',
      ].join('\n'),
    );
    await writeFile(
      siteAbsoluteFixture,
      [
        '---',
        'title: E2E .mdx site-absolute fixture',
        '---',
        '',
        '# E2E .mdx site-absolute fixture',
        '',
        'See [criteria](/docs/analysis/criteria.mdx) for details.',
        '',
      ].join('\n'),
    );
    outDir = await mkdtemp(path.join(tmpdir(), 'techdocs-e2e-mdx-'));
    execFileSync('npx', ['docusaurus', 'build', '--out-dir', outDir], {
      cwd: repoRoot,
      env: { ...process.env, BUILD_ENV: 'dev', DEPLOY_PRIME_URL: '' },
      stdio: 'inherit',
    });
  });

  after(async () => {
    await unlink(crossPluginFixture).catch(() => {});
    await unlink(siteAbsoluteFixture).catch(() => {});
    if (outDir) await rm(outDir, { recursive: true, force: true });
  });

  it('maps a cross-plugin .mdx link to a trailing slash without the extension', async () => {
    const html = await readFile(
      path.join(outDir, 'analyses/2024/keda/e2e-mdx-fixture/index.html'),
      'utf-8',
    );
    assert.match(
      html,
      /<a class="" href="\/docs\/analysis\/criteria\/">criteria<\/a>/,
    );
  });

  it('strips .mdx from a site-absolute /docs link to a trailing slash', async () => {
    const html = await readFile(
      path.join(outDir, 'docs/analysis/e2e-mdx-fixture/index.html'),
      'utf-8',
    );
    assert.match(
      html,
      /<a class="" href="\/docs\/analysis\/criteria\/">criteria<\/a>/,
    );
  });
});
