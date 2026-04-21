# `remarkRewriteLinks`

Remark plugin that rewrites Markdown link destinations so files authored for
GitHub also resolve on our Docusaurus site.

## What it handles

Source files use GitHub-relative links. Docusaurus resolves most natively; we
cover three gaps:

1. **Cross-plugin links** (`(../)+docs|analyses/...`). `analyses/` is a separate
   `plugin-content-docs` instance, so Docusaurus's `resolveMarkdownLinks` can't
   follow these. We map them to site-absolute `/docs|analyses/...`, stripping
   `.md` and adding `/` for `trailingSlash: true`.
2. **Unbundled data assets** (default: `.csv`). MDX loader bundles only
   images/video/audio/PDF; others leak as filesystem paths. We rewrite to
   `<assetBaseUrl>/<repo-relative-path>` (= GitHub blob URL).
3. **Site-absolute `.md` in imported Markdown** (e.g. `README.md` imported by
   `src/pages/index.mdx`). Handled by a one-line global `markdown.preprocessor`
   in `docusaurus.config.ts` (the imported file is outside any plugin's remark
   scope). The plugin also handles this case as defense-in-depth for direct
   `rewriteHref` callers.

Everything else (same-plugin `.md`, images, externals, fragments) is left to
Docusaurus.

## Wiring gotcha: `beforeDefaultRemarkPlugins`, not `remarkPlugins`

Docusaurus's `resolveMarkdownLinks` and `transformImage` run as default remark
plugins. `remarkPlugins` runs **after** them — too late; they'll have already
warned on our cross-plugin URLs. Use `beforeDefault...` so we rewrite first and
the defaults bundle what's left (images get content hashes).

Registered under `presets.classic.docs`, `presets.classic.pages`, and the
`analyses` plugin.

## Design

- AST, not regex: code fences, titles, angle brackets, ref-style links handled
  by the parser.
- `rewriteHref(href, sourceFile, opts)` is a pure function, exported and
  unit-testable without the pipeline.
- Minimal scope — only rewrites what Docusaurus can't handle itself.

## Adding asset types (`.zip`, `.xlsx`, ...)

Config-only, no code change:

```ts
[
  remarkRewriteLinks,
  {
    assetBaseUrl: `${repo}/blob/main`,
    assetExtensions: ['.csv', '.zip', '.xlsx', '.tsv'],
  },
];
```

Guidelines:

- Don't add extensions Docusaurus already bundles (images/video/audio/PDF) —
  you'd lose local bundling and content hashing.
- Don't add `.md` / `.mdx` (handled elsewhere).
- `assetBaseUrl` defaults to the GitHub blob URL, which renders `.csv` / `.tsv`
  as tables and previews `.xlsx` / `.zip`. For large downloads use a CDN
  instead.

If you want a file **bundled** rather than linked out to GitHub, add a webpack
`asset/resource` rule via `configureWebpack` in a small Docusaurus plugin —
separate, larger change.

## Tests

`npm run test:unit` — covers both `rewriteHref` and full parse → plugin →
stringify integration.
