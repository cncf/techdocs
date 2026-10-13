---
title:
  Create a new-user Getting Started path from installation to a running
  VirtualMachine
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

A new user who arrives at the user guide cannot follow one path from "I have a
cluster" to "I have a running VM." The Installation page buries the four-command
install under platform-specific material, the `virtctl` page covers only one
binary, Basic Use centers on VirtualMachineInstance rather than VirtualMachine,
Lifecycle references a `vmi.yaml` that is never defined, and nothing on the
Welcome page tells a newcomer where to start.

The sub-issues below add a single Getting Started page and reshape the pages it
links to so each one hands the reader to the next. Complete the sub-issues in
order where possible; the later ones link to pages created by the earlier ones.

## Sub-issues

### Add a Getting Started page after Architecture

Create `docs/getting_started.md` and add it to `docs/.nav.yml` immediately after
Architecture. On one page, walk a reader from a working cluster to a running VM:

1. Install KubeVirt with the four `kubectl` commands from the Installation page.
2. Install `virtctl`.
3. Create a VirtualMachine from a provided minimal manifest or
   `virtctl create vm`.
4. Start it, connect with `virtctl console`, and stop it.

Link to the detailed page at each step rather than repeating its content.
Consider folding the current Quickstarts page into this page as a "Try it in a
sandbox" section.

Done when: a reader can complete the page in under 30 minutes on a fresh cluster
and every step links to the page that explains it.

### Point newcomers at the Getting Started page from Welcome and Quickstarts

On the Welcome page (`docs/index.md`), add a one-line "New to KubeVirt? Start
here" link at the top that points to the Getting Started page.

On the Quickstarts page (`docs/quickstarts.md`), add a one-paragraph
introduction that states the prerequisites (a laptop with virtualization
enabled, or a browser for Killercoda), the expected time, and what the reader
will have at the end. Add a closing link to the Getting Started page.

Done when: both pages link to Getting Started and the Quickstarts page states
its prerequisites.

### Rewrite Basic Use as and fix the Lifecycle manifest reference

Rewrite `docs/user_workloads/basic_use.md` into a short page that presents
VirtualMachine as the primary object and VirtualMachineInstance as the running
instance it manages. Include:

- A complete minimal `vm.yaml` that uses a public containerDisk image.
- The `kubectl apply`, `virtctl start`, `virtctl console`, and `virtctl stop`
  commands.
- Explicit links to the next pages (Creating VirtualMachines, Accessing Virtual
  Machines, Lifecycle).

Update `docs/user_workloads/lifecycle.md` to reference that `vm.yaml` manifest
instead of the undefined `vmi.yaml`.

Done when: Basic Use and Lifecycle use the same manifest and a reader can run
both pages end to end.

### Restructure the Installation page so the core procedure comes first

Reorder `docs/cluster_admin/installation.md` so the first screen covers
Requirements, the four-command operator install, verification, and the emulation
fallback. Move the following below a "Platform-specific and advanced
installation" heading, or onto separate pages: AppArmor, kernel and user-land
compatibility, SELinux, OKD, k3OS, daily developer builds, deploying from
source, network plugins, and node placement.

Remove, or move to a footnote, the historical notes about behavior before
v0.20.0 and v0.34.2. Ask the maintainers whether any supported upgrade path
still requires them.

Done when: the standard install is complete before the first platform-specific
heading.

### End the Installation page with a Next steps section

Add a "Next steps" section to the end of `docs/cluster_admin/installation.md`
that links to Installing virtctl, Creating VirtualMachines by using virtctl, and
Accessing Virtual Machines.

Done when: the Installation page no longer ends on an advanced topic.

### Expand the virtctl page and rename it "Installing virtctl"

Expand `docs/user_workloads/virtctl_client_tool.md` to cover every published
client binary. Use the Material theme's content tabs for Linux, macOS, and
Windows on both amd64 and arm64, and include the `chmod +x` and `PATH` steps.
Rename the page title to "Installing virtctl". Either move the page next to
Installation in the navigation or link to it from Installation's Next steps.

Done when: a user on any supported platform can install `virtctl` from this page
alone.

## Related

The virtctl command reference and the Troubleshooting page are tracked
separately; link to them from Getting Started when they exist.
