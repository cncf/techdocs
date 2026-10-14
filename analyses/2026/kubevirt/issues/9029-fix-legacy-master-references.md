---
title: Fix legacy master links and the node-name example #9029
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The guide still uses the legacy `master` branch name in several places.

- Fourteen links point to `kubevirt.io/api-reference/master/...`. Replace them with the `/main/` path, or with a versioned path such as `/v1.9.0/` where the page documents a specific release. Find them with `grep -rn "api-reference/master" docs`. The links appear in these files:
    - `docs/compute/virtual_hardware.md`
    - `docs/storage/disks_and_volumes.md`
    - `docs/debug_virt_stack/debug.md`
    - `docs/cluster_admin/migration_policies.md`
    - `docs/cluster_admin/installation.md`
    - `docs/cluster_admin/customize_components.md`
    - `docs/network/interfaces_and_networks.md`
- `docs/user_workloads/presets.md` uses `kubevirt.io/nodeName: master` in an example. Replace the value with a neutral name such as `node01`, or remove the example, because the page documents a deprecated feature.
- Links to upstream projects such as libvirt, cri-tools, vhost-md, and kubevirt-ansible may also use a default branch name that those projects have since changed. Prefer tagged or permalink URLs for them so the branch name does not appear in the guide.

Run `make check_links` after the edits.

## What you expected

No link or example in the guide uses `master` as a branch or node name, and all edited links resolve.

## URL

- https://kubevirt.io/user-guide/user_workloads/presets/ (`docs/user_workloads/presets.md`)
- https://kubevirt.io/user-guide/cluster_admin/installation/ (`docs/cluster_admin/installation.md`)
- Other files listed above under `docs/`

## Additional context

Question for the maintainers: Should API reference links track `/main/` or the latest released version?

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
