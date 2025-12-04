---
title: Implementing _PROJECT_ Doc Improvements
tags: [_PROJECT_]
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document provides actionable suggestions for improving the _PROJECT_
technical documentation.

For an analysis and general discussion of recommendations on _PROJECT_ technical
documentation, see [analysis.md](analysis.md).

### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards and
suggests possible improvements. In most cases there is more than one way to do
things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. The recommended implementations represent the reviewers' experience
with how to apply those best practices. In other words, borrowing terminology
from the lexicon of [RFCs][rfc-keywords], the changes described here should be
understood as "recommended" or "should" at the strongest, and "optional" or
"may" in many cases. Any "must" or "required" actions are clearly denoted as
such, and pertain to legal requirements such as copyright and licensing issues.

The top-level documentation recommendations for this project are:

> AUTHOR NOTE: Provide a summary or outline of the recommendations. Depending on
> the analysis findings, recommended actions might be organized into two or
> three high-level items that contain multiple actions, or might just be a list
> of independent changes. For examples, see a completed implementation plan such
> as 0008-Backstage or 0010-etcd.

## Reorganize the main docs sidebar

Here is a proposed sidebar:

- Docs Home
- Helm 4
  - What's New? (https://helm.sh/docs/overview)
  - [Full Changelog](https://helm.sh/docs/changelog)
- Introduction
  - Overview (A new Helm Overview page. Use the existing content in [Helm Architecture](https://helm.sh/docs/topics/architecture) and add content from [Three Big Concepts](https://helm.sh/docs/intro/using_helm#three-big-concepts) in _Using Helm_)
  - Installing Helm
  - Kubernetes Distribution Guide
  - Glossary
- Install and Use Charts
  - Quickstart
  - Using Helm
  - [Cheat Sheet](https://helm.sh/docs/intro/CheatSheet)
  - [Advanced Helm Techniques](https://helm.sh/docs/topics/advanced)
  - Configure Storage Backends (from https://helm.sh/docs/topics/advanced#storage-backends)
  - Permissions management for SQL storage backend
  - [Helm Provenance and Integrity](https://helm.sh/docs/topics/provenance)
  - Role-based Access Control
- Develop Charts
  - Charts (eventually, this page could be broken out into smaller pages)
  - Library Charts
  - Chart Values and Templates
    - [most of the existing pages under [Chart Template Guide](https://helm.sh/docs/chart_template_guide/)]
  - Chart Hooks
  - Chart Tests
  - Chart Releaser Action to Automate GitHub Page Charts
  - [The .helmignore file](https://helm.sh/docs/chart_template_guide/helm_ignore_file)
  - [Creating a NOTES.txt File](https://helm.sh/docs/chart_template_guide/notes_files)
  - Chart Development Best Practices
    - [Chart Development Tips and Tricks](https://helm.sh/docs/howto/charts_tips_and_tricks)
    - [other existing bets practices pages]
- Use Chart Repositories
  - The Chart Repository Guide
  - Use OCI-based registries
  - Syncing Your Chart Repository
- Use and Develop Plugins
  - Overview
  - Using Plugins
  - Developing Plugins
- Helm Commands
- Go SDK
- Policies
  - Release Schedule Policy 
  - Helm Version Support Policy

## Add a technical/conceptual overview of Helm

Put architecture, operating principles, and other conceptual explanations in the technical overview.

## Prune out-of-date content

There are several pages in the docs that are likely out-of-date or otherwise no longer relevant. For example:
- "FAQs" https://helm.sh/docs/faq/installing and https://helm.sh/docs/faq/uninstalling
- Best practices section: https://helm.sh/docs/chart_best_practices/
- Tips and tricks: https://helm.sh/docs/howto/charts_tips_and_tricks

For each of these pages/section, if possible, prefer distributing the content across other existing pages so that these pages might be deleted. For example, could the RBAC best practices listed at https://helm.sh/docs/chart_best_practices/rbac be instead incorporated into the existing page on [Role-Based Access Control](https://helm.sh/docs/topics/rbac)?

Alternatively, if the content is still important and doesn't fit well elsewhere in the docs, make the necessary updates so that it is up-to-date and accurate. 

## Finish the Helm v4 docs

### Document all the new features, improvements, and fixes released with Helm 4

### Review and update all the pages with the "This page has not yet been updated for Helm 4" warning

This warning was added to several pages in the Helm 4 docs to indicate that they've not yet been updated:

"This page has not yet been updated for Helm 4. Some of the content might be inaccurate or not applicable to Helm 4. For more information about the Helm 4 new features, improvements, and breaking changes, see Helm 4 Overview."

## Rewrite tasks as step-by-step procedures

CNCF strongly recommends that tasks and procedures are written as step-by-step instructions. For example:

```mdx
To do [task]:
1. Do the first step.
1. Do the second step.
```

This is also an industry-standard for technical documentation (See the Google Developer Docs style guide https://developers.google.com/style/procedures)

The Helm docs tend not to use step-by-step instructions for tasks and procedures. This is not ideal because it can cause conpetual/procedural/reference content to be inadvertently blended together, which makes information less findable to users. For users looking to accomplish a task, it can be challenging to weed through paragraphs.

To improve the docs user experience, all tasks that are documented in the Helm docs should be reformatted or rewritten so that they use numbered steps. For example, each of the headings in https://helm.sh/docs/howto/chart_repository_sync_example could be converted to a numbered step in an ordered list. Assigning numbers to each item would make it immediately clearer that this is a prcedure that can be followed in order.

## Improve docs contribution processes

### Create and publish a clear process for adding and maintaining localized documentation

### Create and publish a clear process for triaging the issue backlog and reviewing PRs

### Incorporate documentation into the code change workflow

[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
