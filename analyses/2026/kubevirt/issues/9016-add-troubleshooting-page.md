---
title: Add a user-facing Troubleshooting page #9016
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Troubleshooting content is scattered. The Virtualization Debugging section targets developers (`strace`, `gdb`, `virsh`), while user-level notes sit inside Accessing Virtual Machines and Memory Dump. A user whose VirtualMachineInstance does not start has no obvious place to look.

Add `docs/user_workloads/troubleshooting.md` and list it in `docs/user_workloads/.nav.yml`. Structure the page by symptom. For each symptom, list likely causes and link to the fix:

- A VirtualMachineInstance stuck in `Scheduling` or `Pending`.
- A failed live migration.
- Console or VNC connection errors.
- Missing `qemu-guest-agent` data.

Consolidate the troubleshooting notes now embedded in `docs/user_workloads/accessing_virtual_machines.md` and `docs/compute/memory_dump.md` into the new page, or link to them from it. Link the new page from the Virtualization Debugging introduction as the first stop before the developer-level guides. Confirm causes and fixes with maintainers, and phrase uncertain items as questions.

## What you expected

A user who sees a failure finds the symptom on one page, learns the likely causes, and follows a link to the fix.

## URL

- https://kubevirt.io/user-guide/user_workloads/accessing_virtual_machines/
- https://kubevirt.io/user-guide/compute/memory_dump/
- https://kubevirt.io/user-guide/debug_virt_stack/debug/
- `docs/user_workloads/accessing_virtual_machines.md`, `docs/compute/memory_dump.md`, `docs/debug_virt_stack/debug.md`

## Additional context

Start with the four symptoms above and leave room to grow. Ask maintainers for the most frequent support questions from the Slack channel and issue tracker to prioritize further entries.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
