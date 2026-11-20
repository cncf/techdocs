---
title: Add an adopters page and link CNCF case studies #9053
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

This issue affects the main website, `kubevirt/kubevirt.github.io`. KubeVirt has
two published CNCF case studies (NTT Docomo Business and Swisscom), but
`kubevirt.io` does not link to them. The landing page shows an End Users logo
wall, and evaluators have no single page that shows adoption evidence.

Make two changes in `kubevirt/kubevirt.github.io`:

1. Add a "Case Studies" block beneath the End Users logo wall on the landing
   page that links to the two CNCF case studies. The content already exists, so
   this change needs no new writing.
2. Create an `/adopters/` (or `/case-studies/`) page that renders the full
   adopters table with the columns type, name, since, and use case, and links to
   the CNCF case studies. Add the page to `_data/site_nav_pages.yml`.

Build the table from `_data/adopters.yml` rather than copying data by hand.
Extend `_data/adopters.py` to preserve both the Since and Use-Case columns from
`kubevirt/kubevirt/ADOPTERS.md`, regenerate the YAML, and then render the table.
Coordinate these shared generator changes with #9054.

## What you expected

An evaluator reaches the two case studies from the landing page and finds all
adopters on one page that is listed in the site navigation.

## URL

- https://kubevirt.io/ (End Users logo wall)
- https://github.com/kubevirt/kubevirt.github.io/blob/main/_data/site_nav_pages.yml
- https://github.com/kubevirt/kubevirt.github.io/blob/main/_data/adopters.yml

## Additional context

Related: #9054 adds the use-case text and KubeVirt-specific vendor links to the
same data and page.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
