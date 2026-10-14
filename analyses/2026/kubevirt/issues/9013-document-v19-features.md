---
title: Document the CrossArchitectureVirtualization gate, PortRanges, and migration compression #9013
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Three v1.9 features appear only in `docs/release_notes.md`, so users cannot find them in the feature pages. Add a section for each:

- **`CrossArchitectureVirtualization` feature gate** (Alpha): Add a section to a Compute page or to `docs/cluster_admin/activating_feature_gates.md`. Explain that VMs can run on nodes with a different architecture through QEMU software emulation (TCG), that the scheduler prefers native-architecture nodes and falls back to emulation, and how to enable the gate.
- **Masquerade `PortRanges`** (Alpha, guarded by the `PortRangesSpec` feature gate): Add a section to `docs/network/interfaces_and_networks.md` that shows how to define port ranges on a masquerade interface, with an example and the gate to enable.
- **MigrationPolicy compression**: Add a section to `docs/cluster_admin/migration_policies.md` that explains the `.spec.experimental.compression` field. It compresses the live migration data stream, and only the `zstd` algorithm is supported. Include an example MigrationPolicy.

Use the release notes entries as the starting point. Ask the feature authors to confirm limitations, and phrase unconfirmed details as questions.

## What you expected

Each feature is documented next to related content with an example manifest, the required feature gate, and its maturity stage.

## URL

- https://kubevirt.io/user-guide/release_notes/
- https://kubevirt.io/user-guide/network/interfaces_and_networks/
- https://kubevirt.io/user-guide/cluster_admin/migration_policies/
- https://kubevirt.io/user-guide/cluster_admin/activating_feature_gates/
- `docs/network/interfaces_and_networks.md`, `docs/cluster_admin/migration_policies.md`, `docs/cluster_admin/activating_feature_gates.md`

## Additional context

The feature-gate table in #9015 should list these gates. The Backup API is covered separately in #9012.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
