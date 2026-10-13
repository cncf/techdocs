---
title: Apply low-effort mkdocs.yml and build configuration improvements
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

Several one-line configuration changes in `mkdocs.yml` and `netlify.toml` would
noticeably improve the guide: copyable code blocks, better search, social links
in the header and footer, correct logo alt text, reproducible builds, and no
indexing of preview deploys. None requires content changes. Each sub-issue is a
single pull request of configuration edits plus a local build (`mkdocs serve`)
to confirm the result.

## Sub-issues

### Enable code copy and search features in the theme

Under `theme.features` in `mkdocs.yml`, add:

- `content.code.copy`, which adds a copy button to every code block.
- `search.suggest`, `search.highlight`, and `search.share`, which improve search
  usability.

Done when: a copy button appears on code blocks and search shows suggestions and
highlights terms.

### Add repository and social links to every page

In `mkdocs.yml`, set `repo_url` to the `kubevirt/user-guide` repository and add
an `extra.social` block with the project's GitHub, Slack, mailing list, and
`kubevirt.io` links. These appear in the header and footer on every page instead
of only in the "Getting help" list on the Welcome page.

Done when: the header shows the repository link and the footer shows the social
icons.

### Set the logo alt text and remove unused configuration and assets

- Set the logo alt text to "KubeVirt" by adding `extra.homepage` or a custom
  `overrides/partials/logo.html`.
- Remove the unsupported top-level `site_favicon` key from `mkdocs.yml`; MkDocs
  ignores it and the active favicon is already set under `theme.favicon`.
- Remove the unused legacy assets `asciibinder-logo-horizontal.png`,
  `asciibinder_web_logo.svg`, and `book_pages_bg.jpg` from `docs/assets`.

Done when: the logo has alt text, `mkdocs build --strict` reports no unknown
keys, and `docs/assets` contains only current brand assets.

### Make preview builds reproducible and non-indexable

- Pin the MkDocs package versions in `netlify.toml`, or add a
  `requirements.txt`, so preview builds match the Prow image.
- Remove the obsolete `sed` line in `netlify.toml` that rewrites
  `site_url: https://kubevirt.io/docs`; `mkdocs.yml` already sets `site_url` to
  `https://kubevirt.io/user-guide`.
- Emit `X-Robots-Tag: noindex` for non-production deploys from a `_headers` file
  or a `[context.deploy-preview]` and `[context.branch-deploy]` section in
  `netlify.toml`, rather than relying on Netlify defaults.

Done when: a deploy preview builds with pinned versions and returns the
`noindex` header.
