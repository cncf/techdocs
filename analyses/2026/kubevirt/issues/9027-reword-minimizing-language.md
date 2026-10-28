---
title: Reword minimizing language and cancel terminology #9027
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Many pages use minimizing words such as "simply", "just", "of course",
"obviously", "easy", and "easily". These words add nothing and can discourage
readers who find a step difficult. The Live Migration page also says migrations
"can be easily cancelled" without saying how, and uses "abort" where readers
expect "cancel".

Edit the pages with the most occurrences first:

- `docs/compute/live_migration.md`
- `docs/user_workloads/windows_virtio_drivers.md`
- `docs/compute/node_assignment.md`
- `docs/compute/vsock.md`
- `docs/storage/disks_and_volumes.md`

Delete the minimizing word where the sentence works without it. Replace "easy"
or "easily" with what the step requires. For example, change "can be easily
cancelled" to "can be cancelled by deleting the migration object".

On the Live Migration page, prefer "cancel" in prose. Keep field names such as
`Abort Requested` and `Abort Status` exactly as `kubectl` prints them.

## What you expected

The listed pages contain no minimizing words, and the Live Migration page uses
"cancel" consistently in prose while still showing the real field names.

## URL

- https://kubevirt.io/user-guide/compute/live_migration/
- https://kubevirt.io/user-guide/compute/windows_virtio_drivers/
- https://kubevirt.io/user-guide/compute/node_assignment/
- https://kubevirt.io/user-guide/storage/disks_and_volumes/

## Additional context

Question for the API maintainers: Are the `Abort Requested` and `Abort Status`
fields in the VirtualMachineInstanceMigration status candidates for a "cancel"
alias in a future API version?

Related: #9021 (style guide rule on minimizing language) and #9028 (automated
check to prevent regressions).

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
