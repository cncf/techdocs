---
title: Add a feature-gate table #9015
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Activating and Deactivating Feature Gates page explains the Alpha, Beta, and
GA stages but does not list the gates themselves. Readers must search the guide
and the release notes to learn which gates exist, their maturity, and where they
are documented.

Add a table to `docs/cluster_admin/activating_feature_gates.md` with one row per
feature gate and these columns:

- Gate name, in code formatting.
- Stage: Alpha, Beta, GA, or Deprecated.
- Version in which the gate was introduced or graduated.
- Link to the page that documents the feature.

Source the rows from the `kubevirt/kubevirt` feature gate definitions and the
release notes. Ask the maintainers whether this table can be generated from the
`kubevirt/kubevirt` source to avoid drift, and if so, describe the generation
step in the page's source comments or in `CONTRIBUTING.md`. If gates have no
documentation, leave the link empty and note it in the pull request.

## What you expected

A reader finds every feature gate, its stage, and its documentation in one
table, and the table has a defined way to stay current.

## URL

- https://kubevirt.io/user-guide/cluster_admin/activating_feature_gates/
- `docs/cluster_admin/activating_feature_gates.md`

## Additional context

Include the gates documented in #9013 (`CrossArchitectureVirtualization` and
`PortRangesSpec`). The Arm64 page
`docs/cluster_admin/feature_gate_status_on_Arm64.md` is a separate topic; link
to it rather than merging it.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
