---
title: Add landing pages to Compute, Network, and Storage #9009
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Compute, Network, and Storage sections each hold 10 to 20 pages with no
introduction. Readers see a flat list and cannot tell which page matches their
task.

Add a short landing page to each section, `docs/compute/index.md`,
`docs/network/index.md`, and `docs/storage/index.md`, and list it first in the
section's navigation. Each page explains in two or three sentences what the
section covers, then groups its pages by task with a one-line description per
link. For example, the Storage page uses these groups:

- Provisioning disks
- Importing images
- Snapshots and backup
- Moving data between clusters

Propose equivalent task groups for Compute (for example CPU and memory, live
migration, devices) and Network (for example interfaces, services, binding
plugins). Ask a maintainer to confirm the groupings.

## What you expected

Selecting a section shows a page that explains its scope and points to the right
page for each common task.

## URL

- `https://kubevirt.io/user-guide/compute/`
- `https://kubevirt.io/user-guide/network/`
- `https://kubevirt.io/user-guide/storage/`
- New files `docs/compute/index.md`, `docs/network/index.md`,
  `docs/storage/index.md`; the existing `.nav.yml` files in each directory

## Additional context

Page renames in #9010 change some link titles, so write the landing pages with
the final titles or update them afterward.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
