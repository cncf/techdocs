// cSpell:ignore howto knative mdast remark unified vfile vitess extensionless gapi kubernetes gateway api passthroughs unrooted

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { VFile } from 'vfile';
import remarkRewriteLinks, { rewriteHref } from './index.ts';

const ASSET_BASE = 'https://github.com/cncf/techdocs/blob/main';

function dedent(s: string): string {
  return s.replace(/^ +/gm, '').trim();
}

/** Run a single Markdown source through the plugin and return the rendered output. */
async function run(
  md: string,
  filePath: string,
  opts: Parameters<typeof remarkRewriteLinks>[0] = { assetBaseUrl: ASSET_BASE },
): Promise<string> {
  const file = new VFile({ value: md, path: filePath });
  const out = await unified()
    .use(remarkParse)
    .use(remarkRewriteLinks, opts)
    .use(remarkStringify)
    .process(file);
  return String(out).trim();
}

describe('rewriteHref (cross-plugin links)', () => {
  it('maps (../)+docs/.../foo.md to /docs/.../foo/', () => {
    assert.strictEqual(
      rewriteHref('../../docs/analysis/criteria.md', 'analyses/2025/x/a.md'),
      '/docs/analysis/criteria/',
    );
  });

  it('maps (../)+analyses/.../foo.md to /analyses/.../foo/', () => {
    assert.strictEqual(
      rewriteHref(
        '../../analyses/2025/knative/analysis.md',
        'docs/analysis/howto.md',
      ),
      '/analyses/2025/knative/analysis/',
    );
  });

  it('maps (../)+docs/.../foo.mdx to /docs/.../foo/', () => {
    assert.strictEqual(
      rewriteHref('../../docs/analysis/criteria.mdx', 'analyses/2025/x/a.md'),
      '/docs/analysis/criteria/',
    );
  });

  it('adds a trailing slash to extensionless cross-plugin pages', () => {
    assert.strictEqual(
      rewriteHref(
        '../../analyses/2025/knative/analysis',
        'docs/analysis/howto.md',
      ),
      '/analyses/2025/knative/analysis/',
    );
  });

  it('preserves cross-plugin trailing slash', () => {
    assert.strictEqual(
      rewriteHref('../../analyses/', 'docs/analysis/howto.md'),
      '/analyses/',
    );
  });

  it('preserves #fragment after the rewritten path', () => {
    assert.strictEqual(
      rewriteHref(
        '../../docs/analysis/criteria.md#website',
        'analyses/2023/etcd/etcd-analysis.md',
      ),
      '/docs/analysis/criteria/#website',
    );
  });

  it('strips .md from site-absolute /docs/.../foo.md and /analyses/.../foo.md', () => {
    assert.strictEqual(
      rewriteHref('/docs/analysis/criteria.md', 'analyses/2025/x/a.md'),
      '/docs/analysis/criteria/',
    );
    assert.strictEqual(
      rewriteHref('/analyses/2024/keda/keda-analysis.md', 'docs/howto.md'),
      '/analyses/2024/keda/keda-analysis/',
    );
  });
});

describe('rewriteHref (asset links)', () => {
  it('rewrites a relative .csv against the asset base URL', () => {
    assert.strictEqual(
      rewriteHref('backstage-doc-survey.csv', 'analyses/2023/backstage/x.md', {
        assetBaseUrl: ASSET_BASE,
      }),
      `${ASSET_BASE}/analyses/2023/backstage/backstage-doc-survey.csv`,
    );
  });

  it('leaves .csv links untouched when no assetBaseUrl is provided', () => {
    assert.strictEqual(
      rewriteHref('data.csv', 'analyses/2023/backstage/index.md'),
      'data.csv',
    );
  });

  it('normalizes an absolute filesystem sourceFile against projectRoot', () => {
    const root = '/Users/me/repo';
    assert.strictEqual(
      rewriteHref(
        'data.csv',
        '/Users/me/repo/analyses/2023/backstage/index.md',
        { assetBaseUrl: ASSET_BASE, projectRoot: root },
      ),
      `${ASSET_BASE}/analyses/2023/backstage/data.csv`,
    );
  });
});

describe('rewriteHref (passthroughs)', () => {
  const source = 'docs/analysis/howto.md';

  it('leaves absolute, protocol-relative, mailto and fragment URLs untouched', () => {
    for (const href of [
      'https://example.com/a.md',
      'mailto:foo@example.com',
      '//cdn.example.com/a.md',
      '#section',
    ]) {
      assert.strictEqual(rewriteHref(href, source), href);
    }
  });

  it('leaves unrooted same-plugin .md links to Docusaurus', () => {
    assert.strictEqual(rewriteHref('./foo.md', source), './foo.md');
    assert.strictEqual(rewriteHref('../foo.md', source), '../foo.md');
  });

  it('leaves cross-plugin image assets untouched', () => {
    assert.strictEqual(
      rewriteHref(
        '../../../docs/images/gapi_info_arch.png',
        'analyses/2021/kubernetes-gateway-api/analysis.md',
      ),
      '../../../docs/images/gapi_info_arch.png',
    );
  });
});

describe('remarkRewriteLinks (full pipeline)', () => {
  it('rewrites inline, reference, image and angle-bracketed destinations', async () => {
    const md = dedent(`
      See [criteria](../../docs/analysis/criteria.md) and [survey].

      [survey]: backstage-doc-survey.csv
      [angle]: <../../docs/analysis/criteria.md>

      ![arch](../../../docs/images/gapi_info_arch.png)
    `);
    const out = await run(md, 'analyses/2023/backstage/backstage-analysis.md');
    assert.match(out, /\[criteria\]\(\/docs\/analysis\/criteria\/\)/);
    assert.match(
      out,
      new RegExp(
        `\\[survey\\]: ${ASSET_BASE.replace(/\//g, '\\/')}` +
          `\\/analyses\\/2023\\/backstage\\/backstage-doc-survey\\.csv`,
      ),
    );
    assert.match(out, /\[angle\]: \/docs\/analysis\/criteria\//);
    assert.match(
      out,
      /!\[arch\]\(\.\.\/\.\.\/\.\.\/docs\/images\/gapi_info_arch\.png\)/,
    );
  });

  it('does not touch URL-like text inside fenced code blocks', async () => {
    const md = dedent(`
      \`\`\`
      [criteria](../../docs/analysis/criteria.md)
      \`\`\`
    `);
    const out = await run(md, 'analyses/2023/backstage/x.md');
    assert.match(out, /criteria\]\(\.\.\/\.\.\/docs\/analysis\/criteria\.md/);
  });

  it('preserves inline link titles', async () => {
    const md = '[x](../../docs/analysis/criteria.md "a title")';
    const out = await run(md, 'analyses/2023/backstage/x.md');
    assert.strictEqual(out, '[x](/docs/analysis/criteria/ "a title")');
  });
});
