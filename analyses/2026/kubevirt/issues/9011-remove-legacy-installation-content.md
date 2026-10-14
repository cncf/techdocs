---
title: Remove or archive legacy installation content #9011
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Installation page keeps instructions for platforms and tools that may no longer be supported, and its OKD instructions link to OpenShift 4.10 documentation, which is out of date. Readers cannot tell whether these paths still work.

Review these sections of `docs/cluster_admin/installation.md` with the maintainers:

- "From Service Catalog as an APB" under "Installing KubeVirt on OKD": Is the OKD Service Catalog APB path still supported?
- "Installing KubeVirt on k3OS": Is k3OS still a supported platform?
- The OpenShift 4.10 links, including the SCC link: Which current version should the page link to, or is a version-independent URL available?

Then act on the answers. Delete unsupported sections, or move them to an "Archived" page with a clear notice that they are not maintained. Update the OpenShift links to the current version or a version-independent URL. Verify that every remaining link in the page resolves.

## What you expected

The Installation page describes only paths that KubeVirt supports today, and every external link points to current documentation.

## URL

- https://kubevirt.io/user-guide/cluster_admin/installation/
- `docs/cluster_admin/installation.md`

## Additional context

The maintainers must answer the support questions before you delete content. This work overlaps with the restructure in #9004, which moves the same sections; agree on the order of the two pull requests to avoid conflicts.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
