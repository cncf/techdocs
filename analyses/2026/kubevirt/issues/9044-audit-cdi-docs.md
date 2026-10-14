---
title: Audit CDI documentation for storage pages #9044
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Six pages in the guide's storage content link out to the `doc/` directory of the Containerized Data Importer (CDI) repository, `kubevirt/containerized-data-importer`. Readers lose the guide's navigation and search when they follow those links, and the guide never explains why this content lives elsewhere.

Triage the CDI pages that the guide links to and pick one outcome for each page:

- Move the page into the guide's `docs/storage/` section and add it to `docs/storage/.nav.yml`, leaving a one-line pointer in the CDI repository.
- Keep the page in CDI and list it on a new "CDI reference documentation" page in `docs/storage/`. The page explains why the remaining CDI content stays in its own repository and links each page with a one-sentence summary.

Start by listing the six storage pages with their CDI links, for example in `docs/storage/containerized_data_importer.md`. Ask the CDI maintainers which pages they prefer to keep.

## What you expected

Every CDI link in the storage section either leads to a page hosted in the guide or to a clearly described reference page that explains why the content lives in the CDI repository.

## URL

- https://kubevirt.io/user-guide/storage/containerized_data_importer/ (`docs/storage/containerized_data_importer.md`)
- https://github.com/kubevirt/containerized-data-importer/tree/main/doc

## Additional context

Depends on the content boundary decision in #9041. Related: #9043 applies the same audit to `kubevirt/kubevirt/docs`.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
