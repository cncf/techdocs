---
title: Create a virtctl command reference #9014
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The `virtctl` page covers only downloading and installing the client. No page
lists the subcommands, so users must read many feature pages, or run
`virtctl --help`, to learn what the tool does.

Create a `docs/user_workloads/virtctl_reference.md` page, or expand the existing
`virtctl` page beyond installation, and add it to
`docs/user_workloads/.nav.yml`. The page lists each `virtctl` subcommand in a
table with:

- The command name, in code formatting.
- A one-line description.
- A link to the feature page that explains it in context, for example
  `virtctl console` to Accessing Virtual Machines and `virtctl vmexport` to the
  Export API page.

Group the commands by task, such as VM lifecycle, access, storage, and
diagnostics. Generate the command list from `virtctl --help` of a current
release, and ask the maintainers whether the list can be produced automatically
from the `kubevirt/kubevirt` source to avoid drift.

## What you expected

A reader finds every `virtctl` subcommand in one table and can follow a link to
learn how to use it.

## URL

- https://kubevirt.io/user-guide/user_workloads/virtctl_client_tool/
- `docs/user_workloads/virtctl_client_tool.md`, `docs/user_workloads/.nav.yml`

## Additional context

If #9005 renames the `virtctl` page to "Installing virtctl", keep installation
and reference content on separate pages and link them to each other.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
