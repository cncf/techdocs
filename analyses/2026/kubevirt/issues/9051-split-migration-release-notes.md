---
title: Split the Live Migration and Release Notes pages #9051
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

`docs/compute/live_migration.md` has about 650 lines and `docs/release_notes.md`
has about 3,050 lines. Both are too long to navigate, and the Release Notes tab
opens at the top of the page, which is the oldest-first or the longest scroll
for readers who want the newest release.

### Live Migration

Keep the overview and basic procedure on the Live Migration page. Move the
migration strategies and the migration network configuration to sub-pages under
`docs/compute/` and link them from the overview.

### Release Notes

Split the page into one page per minor release, or paginate it. Create an index
page that lists the releases newest first. Set the Release Notes tab in
`docs/.nav.yml` so it opens the newest release.

For both pages:

1. Move the content without rewriting it.
2. Update `docs/compute/.nav.yml` and `docs/.nav.yml`.
3. Add old paths and anchors to the `redirects` map in `mkdocs.yml`.
4. Fix internal links to the moved sections.

Copilot noted: Reserve the redirects map for removed or renamed pages and
require old anchor IDs to remain with links to the moved sections, or specify a
fragment-aware redirect mechanism. Verify representative old section links after
each split.

## What you expected

Each page is a manageable length, the Release Notes tab opens the newest
release, and existing links still resolve.

## URL

- https://kubevirt.io/user-guide/compute/live_migration/
  (`docs/compute/live_migration.md`)
- https://kubevirt.io/user-guide/release_notes/ (`docs/release_notes.md`)

## Additional context

Related: #9050 splits the Disks and Volumes and Interfaces and Networks pages,
and #9008 changes where Release Notes sits in the navigation. Coordinate
`docs/.nav.yml` edits with #9008.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
