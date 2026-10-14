---
title: Create a new-user getting started path #9061
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Umbrella Issue

A new user cannot go from a working cluster to a running VirtualMachine without
piecing together the Installation, `virtctl`, Basic Use, and Lifecycle pages.
The sub-issues below add a single Getting Started page, rewrite Basic Use around
VirtualMachine, put the core installation procedure first, and make the commands
on those pages easy to copy. Start with the code-copy change, then work the
pages in the order a new user reads them.

This umbrella issue tracks recommended changes resulting from an analysis of the
KubeVirt documentation commissioned by
[CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is
tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).

## Sub-issues

- [Enable code copy features #9006](9006-enable-code-copy-search.md)
- [Restructure Install page #9004](9004-restructure-installation-page.md)
- [Create Install virtctl page #9005](9005-create-installing-virtctl-page.md)
- [Add a Getting Started page #9001](9001-add-getting-started-page.md)
- [Rewrite Basic Use #9002](9002-rewrite-basic-use.md)
- [Add a Start here link #9003](9003-fix-welcome-page-links.md)
- [Convert shell code blocks #9007](9007-convert-shell-code-blocks.md)
