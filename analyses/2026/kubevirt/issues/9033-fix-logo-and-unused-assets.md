---
title: Fix logo alt text and remove unused assets and config #9033
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Three small problems affect the guide's branding and repository hygiene.

- **Logo alt text.** Set the header logo image's alternative text to "KubeVirt"
  using a custom `partials/logo.html` in the theme overrides. Configure
  `theme.custom_dir` in `mkdocs.yml` if needed, and verify the rendered image's
  `alt` attribute.
- **Unused legacy assets.** Delete `asciibinder-logo-horizontal.png`,
  `asciibinder_web_logo.svg`, and `book_pages_bg.jpg` from `docs/assets`.
  Confirm with `grep -rn` that nothing references them first.
- **Unsupported config key.** Remove the top-level
  `site_favicon: assets/favicon.ico` key from `mkdocs.yml`. MkDocs ignores it,
  and the active favicon is already set under `theme.favicon`.

Build the site and confirm the logo, favicon, and pages still render.

## What you expected

The header logo reads as "KubeVirt" to a screen reader, `docs/assets` contains
only current brand assets, and `mkdocs.yml` has no ignored keys.

## URL

- https://kubevirt.io/user-guide/ (header logo)
- `docs/assets/` and `mkdocs.yml` in https://github.com/kubevirt/user-guide

## Additional context

Related: #9049 (table captions and Architecture diagram, covering the other
accessibility fixes) and #9048 (contrast). The `theme.favicon` setting should
stay as is.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
