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
      env: { ...process.env, BUILD_ENV: 'dev' },
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
});
