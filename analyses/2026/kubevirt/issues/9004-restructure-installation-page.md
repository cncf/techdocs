---
title: Restructure the Installation page around the core procedure #9004
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Installation page buries the core install procedure among platform-specific and historical material. It covers AppArmor, kernel and user-land compatibility, SELinux, OKD, k3OS, daily developer builds, deploying from source, network plugins, and node placement. It also keeps notes about behavior before v0.20.0 and v0.34.2. A new user cannot tell which steps are required.

Restructure `docs/cluster_admin/installation.md`:

- Put the core procedure first: Requirements, the four-command operator install, verification, and the emulation fallback.
- Move the topics listed above under a "Platform-specific and advanced installation" heading, or split them into separate pages in `docs/cluster_admin/` and add them to `docs/cluster_admin/.nav.yml`.
- Remove the historical notes about v0.20.0 and v0.34.2, or move them to a footnote. Does any supported upgrade path still require them?
- End the page with a "Next steps" section that links to installing `virtctl`, Creating VirtualMachines by using virtctl, and Accessing Virtual Machines.

## What you expected

The first screen of the page contains the steps needed to install KubeVirt and verify the result. Advanced and platform-specific topics are clearly separated, and the page ends with links to the next tasks.

## URL

- https://kubevirt.io/user-guide/cluster_admin/installation/
- `docs/cluster_admin/installation.md`, `docs/cluster_admin/.nav.yml`

## Additional context

The "Next steps" link to installing `virtctl` targets the page created in #9005. Coordinate with #9011, which removes legacy installation content from the same page.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
