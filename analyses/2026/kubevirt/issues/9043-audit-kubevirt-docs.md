---
title: Audit kubevirt/kubevirt docs for user-facing content #9043
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The `docs/` directory in `kubevirt/kubevirt` contains pages that the user guide
links to instead of hosting itself. Readers who follow those links leave the
guide, lose its navigation and search, and read content that may not be
maintained for end users.

Audit the `kubevirt/kubevirt` repository and consolidate user-facing content in
the guide:

1. Start with the files the user guide already links to: `getting-started.md`,
   `architecture.md`, and `cloud-init.md`.
2. For each file, decide whether it is user-facing or a design or developer
   note.
3. Move the user-facing portions into the matching pages in
   `kubevirt/user-guide`, for example `docs/architecture/architecture.md` and
   the cloud-init page under `docs/user_workloads/`.
4. Replace each original file in `kubevirt/kubevirt` with a one-line pointer to
   the new guide page so search results and old links still resolve.
5. Update the user guide links that point at the old files.

Open the pull requests in both repositories. Ask the maintainers whether a file
that mixes user and developer content should be split or left in place.

## What you expected

The guide hosts the user-facing content for these three topics, and the files in
`kubevirt/kubevirt/docs` point readers to the guide.

## URL

- https://kubevirt.io/user-guide/architecture/architecture/
  (`docs/architecture/architecture.md`)
- https://github.com/kubevirt/kubevirt/tree/main/docs

## Additional context

Depends on the content boundary decision in #9041. Related: #9044 applies the
same audit to the CDI documentation.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
