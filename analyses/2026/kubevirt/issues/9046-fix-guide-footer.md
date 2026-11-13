---
title: Bring the user guide footer into compliance #9046
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide footer does not carry the copyright, CNCF, and trademark text
that the main website footer shows. The two properties therefore read as
separate projects, and the guide lacks the legal links the project footer should
include.

Update the guide footer in `kubevirt/user-guide`:

- Set `copyright: "Copyright © KubeVirt a Series of LF Projects, LLC"` in
  `mkdocs.yml`.
- Add `overrides/partials/copyright.html` (or a `footer.html` override) and set
  `theme.custom_dir: overrides` in `mkdocs.yml`.
- In the override, append the sentence "We are a Cloud Native Computing
  Foundation incubating project", the CNCF logo linked to `https://www.cncf.io`,
  and a link to `https://lfprojects.org/policies/` for trademark and terms.
- Copy the wording and links from `_includes/footer.html` in
  `kubevirt/kubevirt.github.io` so both footers match.

Build the site locally with `mkdocs serve` and check the footer in both the
light and dark schemes.

## What you expected

Every guide page shows the same copyright line, CNCF statement and logo, and LF
Projects policies link as the main website.

## URL

- https://kubevirt.io/user-guide/ (footer on every page)
- `mkdocs.yml`
- https://github.com/kubevirt/kubevirt.github.io/blob/main/_includes/footer.html

## Additional context

Related: #9047 fixes the website footer, and #9032 adds repository and social
links to the guide footer. Edit the same override file in both issues.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
