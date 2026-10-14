---
title: Fix navigation gaps and reorganize information architecture #9062
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Umbrella Issue

Some pages are unreachable from the navigation, the Release Notes sit in the
middle of the section list, section headings give no overview, and several page
titles name an API instead of a reader goal. The sub-issues below fix the broken
navigation first, then add landing pages, rename titles, remove legacy content,
and split the longest pages. Most changes touch the same `.nav.yml` files and
`mkdocs.yml` redirects, so work them in order to avoid merge conflicts.

This umbrella issue tracks recommended changes resulting from an analysis of the
KubeVirt documentation commissioned by
[CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is
tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).

## Sub-issues

- [Fix orphaned pages and Release Notes #9008](9008-fix-navigation-orphans.md)
- [Add an API reference entry #9042](9042-add-api-reference-link.md)
- [Remove legacy install #9011](9011-remove-legacy-installation-content.md)
- [Add landing pages #9009](9009-add-section-landing-pages.md)
- [Rename API-centric titles #9010](9010-rename-api-page-titles.md)
- [Split the Disks and Volume #9050](9050-split-disks-networks-pages.md)
- [Split the Live Migration #9051](9051-split-migration-release-notes.md)
