---
title: Split the Disks and Volumes and Interfaces and Networks pages #9050
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Two guide pages are far longer than readers can scan.
`docs/storage/disks_and_volumes.md` runs to about 2,160 lines and
`docs/network/interfaces_and_networks.md` to about 900 lines. Readers have to
scroll through a long right-hand table of contents to find one volume type or
binding method, and links to sections break when headings change.

Split both pages into sub-pages:

- **Disks and Volumes:** keep an overview page with the disk and volume concepts
  and a table linking to one sub-page per volume type, for example
  `docs/storage/volumes/`.
- **Interfaces and Networks:** separate the interface binding methods from the
  network attachment content, each in its own page, and keep an overview page
  that links to both.

For each split:

1. Move the content without rewriting it.
2. Update `docs/storage/.nav.yml` and `docs/network/.nav.yml`.
3. Add an entry to the `redirects` map in `mkdocs.yml` for any moved anchor or
   page so existing links keep working.
4. Fix internal links with `grep` for the old paths.

## What you expected

Each resulting page is a manageable length, the overview pages guide readers to
the right sub-page, and existing URLs keep resolving.

## URL

- https://kubevirt.io/user-guide/storage/disks_and_volumes/
  (`docs/storage/disks_and_volumes.md`)
- https://kubevirt.io/user-guide/network/interfaces_and_networks/
  (`docs/network/interfaces_and_networks.md`)

## Additional context

Related: #9051 splits the Live Migration and Release Notes pages, and #9009 adds
landing pages to the Storage and Network sections. Coordinate navigation edits
with those issues.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
