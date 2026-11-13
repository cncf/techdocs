---
title: Convert shell code blocks to fenced blocks #9007
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Many pages use indented code blocks with a `$` prompt, for example
`$ kubectl create -f vmi.yaml`. Readers cannot paste these commands without
removing the prompt, indented blocks get no syntax highlighting, and the copy
button does not skip the prompt. Long lines also force horizontal scrolling on
mobile devices and are hard for screen readers to navigate.

Convert the blocks in this order, one pull request per group:

1. The new-user path: Installation, `virtctl`, Basic Use, and Lifecycle.
2. The longest reference pages: Disks and Volumes and Export API.

For each block:

- Replace the indented block with a fenced block with the `shell` language tag
  and remove the `$` prompt.
- Move example output to a separate block, or add a `title="Output"` annotation.
- Break commands longer than 100 characters over several lines with `\`
  continuations so they do not need horizontal scrolling.

## What you expected

Commands on the converted pages paste directly into a terminal, and output is
visibly separate from commands. No command line requires horizontal scrolling on
a phone.

## URL

- https://kubevirt.io/user-guide/cluster_admin/installation/
- https://kubevirt.io/user-guide/user_workloads/virtctl_client_tool/
- https://kubevirt.io/user-guide/user_workloads/basic_use/
- https://kubevirt.io/user-guide/user_workloads/lifecycle/
- https://kubevirt.io/user-guide/storage/disks_and_volumes/
- https://kubevirt.io/user-guide/storage/export_api/
- Matching files under `docs/cluster_admin/`, `docs/user_workloads/`, and
  `docs/storage/`

## Additional context

If #9002, #9004, or #9005 are in progress, convert those pages as part of the
rewrite to avoid merge conflicts. Enabling the copy button is tracked in #9006.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
