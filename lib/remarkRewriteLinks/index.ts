// cSpell:ignore cncf mdast unist vfile

import path from 'node:path';
import { visit } from 'unist-util-visit';
import type { Definition, Image, Link, Root } from 'mdast';
import type { Plugin } from 'unified';
import type { VFile } from 'vfile';

/**
 * Remark plugin that rewrites Markdown link destinations so source files
 * authored for GitHub also resolve correctly on our Docusaurus site.
 *
 * Two cases are handled here; everything else is left to Docusaurus:
 *
 *  1. **Cross-plugin links** like `(../)+docs|analyses/...` don't resolve
 *     because `analyses/` is its own `plugin-content-docs` instance. They
 *     are mapped to site-absolute `/docs|analyses/...`. If they end in
 *     `.md`, the extension is stripped and a trailing `/` is appended
 *     (Docusaurus's own `.md` resolver only fires for unrooted same-plugin
 *     links).
 *
 *  2. **Unbundled data assets** (default: `.csv`) get rewritten to
 *     `<assetBaseUrl>/<repo-relative-path>` so they work on both GitHub and
 *     the site. (Docusaurus's MDX loader only bundles a fixed set of asset
 *     extensions — images, video, audio, PDF.)
 *
 * Same-plugin `.md` links and image paths are intentionally left untouched:
 * Docusaurus's built-in remark plugins resolve them natively against the
 * filesystem, which works across plugin boundaries for non-Markdown assets.
 */

export interface Options {
  /**
   * Base URL for unbundled data-asset files. Typically the repo's canonical
   * blob URL, e.g. `https://github.com/<owner>/<repo>/blob/<branch>`.
   * If unset, asset links are left untouched.
   */
  assetBaseUrl?: string;

  /** Asset extensions to rewrite (lower-case, with leading dot). */
  assetExtensions?: readonly string[];

  /**
   * Absolute project root, used to resolve `vfile.path` to a repo-relative
   * path for asset URL construction. Defaults to `process.cwd()`.
   */
  projectRoot?: string;
}

const CROSS_PLUGIN_RE = /^(?:\.\.\/)+(docs|analyses)(\/.*)?$/;
const SITE_ABSOLUTE_MD_RE = /^\/(docs|analyses)\/.+\.mdx?$/i;
const DEFAULT_ASSET_EXTENSIONS: readonly string[] = ['.csv'];

/** Split an href into its path and its query/fragment suffix. */
function splitHref(href: string): { path: string; suffix: string } {
  const i = href.search(/[?#]/);
  return i < 0
    ? { path: href, suffix: '' }
    : { path: href.slice(0, i), suffix: href.slice(i) };
}

/** True for scheme (`http:`, `mailto:`, ...) or protocol-relative URLs. */
function isAbsoluteUrl(href: string): boolean {
  if (href.startsWith('//')) return true;
  try {
    new URL(href);
    return true;
  } catch {
    return false;
  }
}

/**
 * Rewrite a single link destination. Returns the input unchanged when no
 * rewrite applies (absolute URLs, fragments, same-plugin `.md`, images, ...).
 *
 * Exported for unit testing; also reusable from non-remark contexts.
 */
export function rewriteHref(
  href: string,
  sourceFile: string,
  options: Options = {},
): string {
  if (!href || href.startsWith('#') || isAbsoluteUrl(href)) return href;

  const { path: original, suffix } = splitHref(href);
  if (!original) return href;

  const ext = path.posix.extname(original).toLowerCase();
  const cross = original.match(CROSS_PLUGIN_RE);
  const assetExts = options.assetExtensions ?? DEFAULT_ASSET_EXTENSIONS;
  const isAsset = !!options.assetBaseUrl && assetExts.includes(ext);

  // Cross-plugin page links: rewrite only `.md` and extensionless paths.
  // Asset paths (`.png`, `.csv`, ...) under `docs/`/`analyses/` are left for
  // Docusaurus's native asset resolver, which crosses plugin boundaries.
  const isCrossPage = !!cross && (!ext || ext === '.md' || ext === '.mdx');
  if (isCrossPage) {
    let p = `/${cross![1]}${cross![2] ?? ''}`;
    if (p.toLowerCase().endsWith('.mdx')) {
      p = `${p.slice(0, -'.mdx'.length)}/`;
    } else if (p.toLowerCase().endsWith('.md')) {
      p = `${p.slice(0, -'.md'.length)}/`;
    } else if (!p.endsWith('/')) p += '/';
    return `${p}${suffix}`;
  }

  // Site-absolute `.md` page links — Docusaurus's native resolver only fires
  // for unrooted same-plugin paths, so strip `.md` ourselves.
  if (SITE_ABSOLUTE_MD_RE.test(original)) {
    const stripped = original.toLowerCase().endsWith('.mdx')
      ? original.slice(0, -'.mdx'.length)
      : original.slice(0, -'.md'.length);
    return `${stripped}/${suffix}`;
  }

  if (isAsset) {
    const root = (options.projectRoot ?? process.cwd()).replace(/\\/g, '/');
    const raw = sourceFile.replace(/\\/g, '/');
    const source = path.posix.isAbsolute(raw)
      ? path.posix.relative(root, raw)
      : raw;
    const repoPath = path.posix.normalize(
      path.posix.join(path.posix.dirname(source), original),
    );
    const base = options.assetBaseUrl!.replace(/\/+$/, '');
    return `${base}/${repoPath}${suffix}`;
  }

  return href;
}

/**
 * The remark plugin. Visits `link`, `image`, and `definition` nodes and
 * applies {@link rewriteHref} to their `url`. `linkReference` nodes are
 * resolved through their corresponding `definition`, so they're covered too.
 */
const remarkRewriteLinks: Plugin<[Options?], Root> = (options = {}) => {
  return (tree, file: VFile) => {
    const sourceFile = file.path ?? '';
    visit(tree, ['link', 'image', 'definition'], (node) => {
      const n = node as Link | Image | Definition;
      const next = rewriteHref(n.url, sourceFile, options);
      if (next !== n.url) n.url = next;
    });
  };
};

export default remarkRewriteLinks;
