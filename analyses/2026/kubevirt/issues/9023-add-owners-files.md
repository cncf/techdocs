---
title: Add per-directory OWNERS files #9023
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

All documentation reviews in the user guide route through the root `OWNERS`
file. Pull requests on networking, storage, or compute pages therefore wait for
general approvers instead of subject-matter experts, which adds to the open pull
request backlog.

Add `OWNERS` files in the topic directories and reference the existing aliases
in `OWNERS_ALIASES`:

- `docs/network/OWNERS` with the `sig-network-*` aliases.
- `docs/storage/OWNERS` with the `sig-storage-*` aliases.
- `docs/compute/OWNERS` with the `sig-compute-*` aliases.

Keep the root `OWNERS` approvers for site-wide changes such as `mkdocs.yml` and
`.nav.yml`. Use `reviewers` for the SIG aliases, and decide whether they should
also be `approvers`. Verify the alias names against `OWNERS_ALIASES` before
writing the files. If an alias does not exist, ask the maintainers whether to
add it.

## What you expected

A pull request that changes only `docs/network/` requests review from networking
experts, while root approvers still approve site-wide changes.

## URL

- Repository: https://github.com/kubevirt/user-guide
- `OWNERS` and `OWNERS_ALIASES` in the repository root
- New files: `docs/network/OWNERS`, `docs/storage/OWNERS`, `docs/compute/OWNERS`
- Guide sections: https://kubevirt.io/user-guide/network/,
  https://kubevirt.io/user-guide/storage/,
  https://kubevirt.io/user-guide/compute/

## Additional context

Related: #9024 (a documentation reviewer role or SIG home) and #9026
(`MAINTAINERS.md` and emeritus review of `OWNERS_ALIASES`). Ask the maintainers
whether SIG members want to receive documentation review requests.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
