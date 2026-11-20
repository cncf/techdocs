---
title: Document the VirtualMachineBackup API #9012
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The `VirtualMachineBackup` API, introduced in v1.9, appears only in
`docs/release_notes.md`. Users who read the Storage section find snapshots and
export but no mention of backup, so they cannot discover or use the feature.

Add a section to an existing Storage page, or a new `docs/storage/` page added
to `docs/storage/.nav.yml`, that covers:

- What a VirtualMachineBackup does and how it differs from a
  VirtualMachineSnapshot and a VMExport.
- A minimal VirtualMachineBackup manifest and the `kubectl` commands to create
  it and watch its progress.
- The conditions a backup reports (`Progressing`, `Complete`, and `Failed`) and
  what each means.
- Prerequisites, such as feature gates and storage requirements. Ask the
  maintainers which gates and requirements apply.
- Links to the Snapshot Restore API and Export API pages.

Take the facts from the release notes entries for VirtualMachineBackup and
confirm technical details with the feature author. Phrase anything you cannot
confirm as a question to the maintainers.

## What you expected

A user can find the Backup API from the Storage section and run a first backup
by following the page.

## URL

- https://kubevirt.io/user-guide/storage/snapshot_restore_api/
- https://kubevirt.io/user-guide/release_notes/
- `docs/storage/.nav.yml` and a new or edited file in `docs/storage/`

## Additional context

Related v1.9 documentation gaps are in #9013. If a Storage landing page exists
(#9009), link the new content from it.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
