---
title: Enable code copy and search features in mkdocs.yml #9006
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The guide is command-heavy, but code blocks have no copy button and the search
box has no suggestions, highlighting, or sharing. The `mkdocs-material` theme
provides these as feature flags, and they are not enabled in `mkdocs.yml`.

Add the following entries to the `theme.features` list in `mkdocs.yml`:

- `content.code.copy` adds a copy button to every code block.
- `search.suggest` shows completion suggestions while the reader types.
- `search.highlight` highlights matched terms on the destination page.
- `search.share` adds a button that shares a link to the current search.

Build the site locally with `mkdocs serve` and confirm that the copy button
appears on a code block and that search suggests and highlights terms.

## What you expected

Every code block has a copy button, and search suggests terms, highlights
matches on the result page, and offers a shareable link.

## URL

- https://kubevirt.io/user-guide/ (all pages)
- `mkdocs.yml`

## Additional context

The copy button works best once the shell prompt characters are removed from
code blocks (see #9007). This is a small change and a good first contribution.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
