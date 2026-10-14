---
title: Standardize the feature-state admonition #9017
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Feature pages mark their maturity with a `**FEATURE STATE:**` line, but the
format varies. Some pages state a version only (`KubeVirt v0.43`), some add a
stage (`v1.9.0: Beta`, `(Alpha)`, `(experimental support)`), and some leave the
value empty or use a heading (`### **FEATURE STATE:**`). The guide publishes
only one version, so readers rely on these markers to know whether a feature
exists in their release and how mature it is.

Define one admonition format that states the version introduced and the current
stage (Alpha, Beta, GA, or Deprecated), and apply it to every page that has a
feature-state marker:

- `docs/compute/live_migration.md`, `numa.md`,
  `persistent_tpm_and_uefi_state.md`, and `dra_gpu.md`
- `docs/cluster_admin/confidential_computing.md`
- `docs/user_workloads/vm_templates.md`, `deploy_common_instancetypes.md`,
  `presets.md`, and `instancetypes.md`

Use the existing `admonition` extension, for example `!!! info "Feature state"`
followed by a line such as `Introduced in KubeVirt v1.9 (Alpha)`. Fill in the
empty markers using the release notes. Ask the maintainers for the current stage
of any feature you cannot confirm. Add the chosen format, with an example, to
`CONTRIBUTING.md` so new pages follow it.

## What you expected

Every feature page shows the same admonition with the introduced version and
stage, and contributors know how to write it for new pages.

## URL

- https://kubevirt.io/user-guide/compute/live_migration/
- https://kubevirt.io/user-guide/compute/numa/
- https://kubevirt.io/user-guide/compute/dra_gpu/
- https://kubevirt.io/user-guide/cluster_admin/confidential_computing/
- https://kubevirt.io/user-guide/user_workloads/instancetypes/
- The `docs/` files listed above and `CONTRIBUTING.md`

## Additional context

The feature-gate table in #9015 reports the same stages; keep the two
consistent. Contributor guide additions are tracked in #9020.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
