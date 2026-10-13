---
title: Add a user-facing Troubleshooting page
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

<!-- Make sure that you visit our User Guide at https://kubevirt.io/user-guide.
-->

## Description

The guide has no page a user can turn to when something goes wrong. The Virtualization Debugging section is written for developers who need to attach `gdb` or `strace` to QEMU, and the troubleshooting notes that do exist for users are embedded in unrelated pages such as Accessing Virtual Machines and Memory Dump.

Add a Troubleshooting page, separate from Virtualization Debugging, that lists common symptoms with likely causes and links to the fix. Start with these symptoms:

- A VirtualMachineInstance stuck in `Scheduling` or `Pending`.
- A failed live migration.
- Console or VNC connection errors.
- Missing `qemu-guest-agent` data.

For each symptom, give the `kubectl` or `virtctl` command that reveals the cause, the two or three most likely causes, and a link to the page that explains the fix. Move the troubleshooting notes from Accessing Virtual Machines and Memory Dump onto this page, or link to them from it. Add the page to `docs/.nav.yml` near Virtualization Debugging and link to it from the Getting Started page.

## What you expected

A user who hits a common failure can find a symptom-oriented page in the guide that leads them to the cause and the fix without reading the developer debugging section.

## URL

- https://kubevirt.io/user-guide/debug_virt_stack/debug/ (`docs/debug_virt_stack/debug.md`)
- https://kubevirt.io/user-guide/user_workloads/accessing_virtual_machines/ (`docs/user_workloads/accessing_virtual_machines.md`)
- https://kubevirt.io/user-guide/compute/memory_dump/ (`docs/compute/memory_dump.md`)

## Additional context

Keep the first version small. Four symptoms with accurate causes are more useful than a long list; the page can grow as users report more.
