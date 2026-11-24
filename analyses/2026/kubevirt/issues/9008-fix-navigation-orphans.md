---
title: Fix orphaned pages and Release Notes placement in navigation #9008
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Three navigation problems make content hard to find or confusing:

- `docs/cluster_admin/plugins.md` is not listed in
  `docs/cluster_admin/.nav.yml`, so the Plugins page is reachable only from the
  deprecated Hook Sidecar page.
- `docs/compute/windows_virtio_drivers.md` is an unlisted duplicate of
  `docs/user_workloads/windows_virtio_drivers.md`. Verify the files are
  identical (for example with `diff`).
- Release Notes sits in the middle of the top-level list in `docs/.nav.yml`,
  between Storage and Contributing, which breaks the progression from concepts
  through administration, workloads, and infrastructure.

Make these changes:

1. Add `plugins.md` to `docs/cluster_admin/.nav.yml`.
2. Delete `docs/compute/windows_virtio_drivers.md` and add a redirect in
   `mkdocs.yml` to the User Workloads page if the old URL was ever published.
3. Move Release Notes to the end of the list in `docs/.nav.yml`, or expose it as
   a top-bar link.

## What you expected

Every page in `docs/` is reachable from the navigation, no duplicate page
exists, and the top-level sections read in a logical order with Release Notes at
the end.

## URL

- https://kubevirt.io/user-guide/cluster_admin/plugins/
- https://kubevirt.io/user-guide/user_workloads/windows_virtio_drivers/
- https://kubevirt.io/user-guide/release_notes/
- `docs/.nav.yml`, `docs/cluster_admin/.nav.yml`,
  `docs/compute/windows_virtio_drivers.md`, `mkdocs.yml`

## Additional context

This work is a quick win. Check the deployed site to see whether
`/compute/windows_virtio_drivers/` was ever served before you decide on the
redirect.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
