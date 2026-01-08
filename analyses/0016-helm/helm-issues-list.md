---
title: Helm Umbrella Issue and Issues List
tags: [helm]
---

## Overview

> AUTHOR NOTES:
>
> - Provide an outline or high-level description of the recommended changes.
>   Note any general patterns that occur throughout the documentation, such as a
>   lack of step-by-step procedures.
>
> -Items might be disjoint and unrelated; that's OK. If there are high-level
> items that must be broken down into smaller issues, use the high-level items
> to organize the issues in this plan. Otherwise, list issues in order from the
> analysis document. This is an improvement plan, not a legal brief.
>
> - The following is boilerplate language to include in the umbrella issue in
>   the repo:

## Umbrella issue

> AUTHOR NOTE: Link to the umbrella issue in the project's documentation repo

TO DO: Create umbrella issue in helm-www repo with the following boilerplate:

This issue tracks recommended changes resulting from an analysis of the Helm
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0016-helm`.

## Issues

This is a list of issues representing the recommended work on the Helm website
and technical documentation.

TO DO: Create the GitHub issues in helm-www repo and add links here

### Issue: Reorganize the sidebar

> AUTHOR NOTE: Summarize the documentation changes prescribed by this issue. Use
> enough detail to estimate the scope of the issue. Fine-grained detail can go
> in the issue itself. In the GitHub umbrella issue, link to the sub-issue using
> a Markdown checkbox as shown below.

Reorganize the sidebar (using the proposed sidebar in `helm-implementation.md`
as a guide) by creating new folders for each category and moving files
accordingly. Add redirects and update links as needed. Needs to be done for each
locale for v4 only.

### Issue: Add a technical/conceptual overview of Helm

Use existing content in
[Helm Architecture](https://helm.sh/docs/topics/architecture) to add a
high-level Helm overview page. See the proposed sidebar in
`helm-implementation.md` for instruction on where to put it.

### Issue: Prune out-of-date content

Review each of these pages/section to see if their content can be redistributed
or deleted:

- "FAQs" https://helm.sh/docs/faq/installing and
  https://helm.sh/docs/faq/uninstalling

- Best practices section: https://helm.sh/docs/chart_best_practices/

- Tips and tricks: https://helm.sh/docs/howto/charts_tips_and_tricks

Alternatively, if the content is still important and doesn't fit well elsewhere
in the docs, make the necessary updates so that it is up-to-date and accurate.

### Issue: Document all the new features released with Helm 4

Make sure that all the Helm 4 features, improvements, and fixes are documented.
Use the full changelog for Helm 4 as a reference.

### Issue: Update pages with "This page has not yet been updated for Helm 4"

Search the Helm v4 docs for the "This page has not yet been updated for Helm 4."
warning, which appears on several pages. Review the content on these pages and
remove or update any details that are out-of-date as of v4.

### Issue: Rewrite tasks as step-by-step procedures

Reformat or rewrite all tasks should to use numbered steps. For example, each of
the headings in https://helm.sh/docs/howto/chart_repository_sync_example could
be converted to a numbered step in an ordered list.

### Issue: Create and publish a process for triaging issues/PRs

The CNCF docs team has share the following guidance that the OpenTelemetry
project uses for localizing their docs:
https://opentelemetry.io/docs/contributing/localization/

The Helm docs maintainers should review these guidelines and make a plan for
rolling out similar processes.

### Issue: Create and publish a clear process for triaging the issue backlog and reviewing PRs

Similar to above, agree on and publish clearer processes for triaging issues and
reviewing/merging PRs.
