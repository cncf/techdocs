---
title: Fill feature and reference coverage gaps #9063
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Umbrella Issue

Several v1.9 features appear only in the release notes, the guide has no
`virtctl` command reference or feature-gate table, and users have no
troubleshooting page. The sub-issues below add the missing feature documentation
and the reference and troubleshooting pages readers look for first. The
`virtctl` reference and feature-gate table can link to the feature pages, so
write those pages first.

This umbrella issue tracks recommended changes resulting from an analysis of the
KubeVirt documentation commissioned by
[CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is
tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).

## Sub-issues

- [Doc VirtualMachineBackup #9012](9012-document-virtualmachinebackup-api.md)
- [Doc CrossArchitectureVirtualization #9013](9013-document-v19-features.md)
- [Create a virtctl command reference #9014](9014-create-virtctl-reference.md)
- [Add a feature-gate table #9015](9015-add-feature-gate-table.md)
- [Add user-facing Troubleshooting #9016](9016-add-troubleshooting-page.md)
