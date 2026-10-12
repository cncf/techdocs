---
title: Document v1.9 features and add feature-gate and virtctl reference pages
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

Several features shipped in KubeVirt v1.9 appear only in the release notes, so users cannot find how to use them. The guide also lacks two reference pages that readers expect: a list of feature gates with their stage and version, and a list of `virtctl` subcommands. Feature pages that do state a stage use an informal `FEATURE STATE:` block whose format varies.

The sub-issues below add the missing feature documentation, create the two reference pages, and standardize the feature-state banner so future pages follow one pattern.

## Sub-issues

### Document the VirtualMachineBackup API

Add a page under `docs/storage/` that explains the `VirtualMachineBackup` API introduced in v1.9: what it backs up, the required feature gate, a minimal manifest, how to check status, and how it relates to the snapshot and export features. Add it to `docs/storage/.nav.yml` and link it from the release notes entry.

Done when: a user can create and verify a backup by following the page.

### Document the CrossArchitectureVirtualization feature gate

Add a section or page, under `docs/compute/` or `docs/cluster_admin/`, for the `CrossArchitectureVirtualization` feature gate: what it enables, the supported architecture combinations, how to enable it, and known limitations. Link it from the Arm64 pages where relevant.

Done when: the gate is documented somewhere other than the release notes.

### Document masquerade PortRanges and MigrationPolicy compression

- In Interfaces and Networks (`docs/network/interfaces_and_networks.md`), add a subsection on masquerade `PortRanges` with a manifest example.
- In Migration Policies (`docs/cluster_admin/migration_policies.md`), add a subsection on MigrationPolicy compression with a manifest example and guidance on when to enable it.

Done when: both features are documented on the page where users configure them.

### Create a virtctl command reference

Create a `virtctl` command reference page, or expand `docs/user_workloads/virtctl_client_tool.md` beyond installation, that lists each subcommand with a one-line description and a link to the feature page that explains it in context. Generate the subcommand list from `virtctl --help` for the current release so it is complete.

Done when: every `virtctl` subcommand appears with a description and a link.

### Add a feature-gate table to the feature gates page

On Activating and Deactivating Feature Gates (`docs/cluster_admin/activating_feature_gates.md`), add a table that lists each feature gate, its stage (Alpha, Beta, GA, Deprecated), the version it was introduced or graduated, and a link to its documentation. Ask the maintainers whether this table can be generated from the `kubevirt/kubevirt` source to avoid drift; if so, document the generation step.

Done when: every feature gate in the current release appears in the table.

### Standardize the feature-state admonition and apply it to every feature page

Define a standard feature-state admonition that states the version introduced and the current stage (Alpha, Beta, GA, Deprecated). Document its format in `CONTRIBUTING.md`. Replace the existing `FEATURE STATE:` blocks on the pages that have them and add the admonition to feature pages that have none.

Done when: every feature page opens with the same admonition format.
