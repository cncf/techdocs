---
title: Rename API-centric titles and group legacy workload pages #9010
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Several page titles name an API instead of the task the reader wants to do, and
the User Workloads "Workloads" group mixes current and legacy mechanisms.

Rename these titles, changing the first H1 in each file and the `.nav.yml`
entry:

<!-- markdownlint-disable MD013 -->

| Current title | Proposed title |
| --- | --- |
| Clone API (`docs/storage/clone_api.md`) | Cloning VirtualMachines |
| Export API (`docs/storage/export_api.md`) | Exporting VirtualMachines and volumes |
| Snapshot Restore API (`docs/storage/snapshot_restore_api.md`) | Snapshotting and restoring VirtualMachines |
| Migration Controller (`docs/storage/migration_controller.md`) | A title that states what the reader accomplishes |

<!-- markdownlint-disable MD013 -->

Choose the last title after reading the page; ask the maintainers if the 
purpose is unclear. If you rename a file, add a redirect in `mkdocs.yml`
and update inbound links.

Then reorder the "Workloads" group in `docs/user_workloads/.nav.yml`. List
current mechanisms (instance types, VirtualMachine Templates, pools) first.
Place legacy or deprecated pages (presets, OpenShift Templates, Hook Sidecar)
under a clearly labeled "Legacy" heading, or at the end of the group.

## What you expected

Titles tell readers what they can accomplish, and the Workloads group leads with
current mechanisms while legacy pages are labeled as such.

## URL

- https://kubevirt.io/user-guide/storage/clone_api/
- https://kubevirt.io/user-guide/storage/export_api/
- https://kubevirt.io/user-guide/storage/snapshot_restore_api/
- https://kubevirt.io/user-guide/storage/migration_controller/
- https://kubevirt.io/user-guide/user_workloads/instancetypes/
- `docs/storage/.nav.yml`, `docs/user_workloads/.nav.yml`, `mkdocs.yml`

## Additional context

Prefer keeping file names unchanged to avoid broken inbound links, unless the
rename adds clear value.

This issue tracks recommended changes resulting from an analysis of the 
KubeVirt documentation commissioned by 
[CNCF](https://www.cncf.io/projects/kubevirt/).

The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
