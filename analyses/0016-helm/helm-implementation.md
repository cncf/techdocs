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

As is, it is difficult for users to find information in the main docs sidebar. Some of the categories seek to group information by content type (How-To and Topics), while other categories group content by the specific product area (Chart Template Guide and Plugins). This inconsistency makes it difficult to intuit where the info you want might be located. It also makes it harder for docs contributors to decide where to situate a new page.

The overall organization could be much improved by following a more consistent pattern:
- Include clearly labeled intro/new user content at the top
- At the highest level, group content by product area (for example, some product areas might be plugins, charts, and chart repositories)
- Within each product area, add concepts and tasks for the different user personas/use cases. For example, for charts, there need to be docs for users installing and using charts, as well as for users developing and releasing charts
- Consider pulling out reference material like CLI docs or info about policies to the top level, unassociated with a specific product area

Here is a proposed sidebar based on the above (note that this proposal attempts to keep existing pages intact as much as possible to make this easier to implement):

- [Docs Home](https://helm.sh/docs/)
- Helm 4
  - What's New? (https://helm.sh/docs/overview)
  - [Full Changelog](https://helm.sh/docs/changelog)
- Introduction
  - Overview (A new Helm Overview page. Use the existing content in [Helm Architecture](https://helm.sh/docs/topics/architecture) and add content from [Three Big Concepts](https://helm.sh/docs/intro/using_helm#three-big-concepts) in _Using Helm_)
  - [Quickstart](https://helm.sh/docs/intro/quickstart)
  - [Installing Helm](https://helm.sh/docs/intro/install)
  - [Kubernetes Distribution Guide](https://helm.sh/docs/topics/kubernetes_distros)
  - [Glossary](https://helm.sh/docs/glossary/)
- Install and Use Charts
  - [Using Helm](https://helm.sh/docs/intro/using_helm)
  - [Cheat Sheet](https://helm.sh/docs/intro/CheatSheet)
  - Post Rendering (from https://helm.sh/docs/topics/advanced#post-rendering. Recommend breaking up "Advanced Helm Techniques" into two pages: Post-Rendering and Configure Store Backends. The title "Advanced Helm Techniques" makes it hard for users to guess what might be in it)
  - Configure Storage Backends (from https://helm.sh/docs/topics/advanced#storage-backends)
  - [Permissions management for SQL storage backend](https://helm.sh/docs/topics/permissions_sql_storage_backend)
  - [Helm Provenance and Integrity](https://helm.sh/docs/topics/provenance)
  - [Role-based Access Control](https://helm.sh/docs/topics/rbac)
- Develop Charts
  - [Charts](https://helm.sh/docs/topics/charts) (eventually, this page could probably be broken out into smaller pages)
  - [Chart Hooks](https://helm.sh/docs/topics/charts_hooks)
  - [Chart Tests](https://helm.sh/docs/topics/chart_tests)
  - [Library Charts](https://helm.sh/docs/topics/library_charts)
  - Chart Values and Templates
    - [most of the existing pages under [Chart Template Guide](https://helm.sh/docs/chart_template_guide/)]
  - [The .helmignore file](https://helm.sh/docs/chart_template_guide/helm_ignore_file)
  - [Creating a NOTES.txt File](https://helm.sh/docs/chart_template_guide/notes_files)
  - Chart Development Best Practices
    - [Chart Development Tips and Tricks](https://helm.sh/docs/howto/charts_tips_and_tricks)
    - [other existing bets practices pages]
- Release Charts
  - [The Chart Repository Guide](https://helm.sh/docs/topics/chart_repository)
  - [Use OCI-based registries](https://helm.sh/docs/topics/registries)
  - [Syncing Your Chart Repository](https://helm.sh/docs/howto/chart_repository_sync_example)
  - [Chart Releaser Action to Automate GitHub Page Charts](https://helm.sh/docs/howto/chart_releaser_action)
- Use and Develop Plugins
  - [Overview](https://helm.sh/docs/plugins/overview)
  - [Using Plugins](https://helm.sh/docs/plugins/user/)
  - [Developing Plugins](https://helm.sh/docs/plugins/developer/)
    - [existing tutorials]
- [Helm Commands](https://helm.sh/docs/helm/)
- [Go SDK](https://helm.sh/docs/sdk/)
- Policies
  - [Release Schedule Policy](https://helm.sh/docs/topics/release_policy) 
  - [Helm Version Support Policy](https://helm.sh/docs/topics/version_skew)

## Add a technical/conceptual overview of Helm

Put architecture, operating principles, and other conceptual explanations in a high-level technical overview.

There is some existing content in the site that can probably be used to build this overview, particularly in [Helm Architecture](https://helm.sh/docs/topics/architecture). The goal of this new overview would be to give new users a good foundation to get started with Helm, including an understanding of the most common use cases, the typical user personas, and the primary concepts/terms to know.

## Prune out-of-date content

There are several pages in the docs that are likely out-of-date or otherwise no longer relevant. For example:
- "FAQs" https://helm.sh/docs/faq/installing and https://helm.sh/docs/faq/uninstalling
- Best practices section: https://helm.sh/docs/chart_best_practices/
- Tips and tricks: https://helm.sh/docs/howto/charts_tips_and_tricks

For each of these pages/section, if possible, prefer distributing the content across other existing pages so that these pages might be deleted. For example, could the RBAC best practices listed at https://helm.sh/docs/chart_best_practices/rbac be instead incorporated into the existing page on [Role-Based Access Control](https://helm.sh/docs/topics/rbac)?

Alternatively, if the content is still important and doesn't fit well elsewhere in the docs, make the necessary updates so that it is up-to-date and accurate. 

## Finish the Helm v4 docs

### Document all the new features released with Helm 4

Make sure that all the Helm 4 features, improvements, and fixes are documented. For example:
- kstatus watcher needs to be documented in the SDK docs and likely some user-facing docs needed outside of the SDK docs as well (https://github.com/helm/helm/pull/13604)
- OCI install with digest (https://github.com/helm/helm-www/pull/1629)
- Multi document values files (https://github.com/helm/helm/pull/13655)
- Allow signing multiple charts with single passphrase from stdin (https://github.com/helm/helm/pull/30718)
- Allow post-renderer to process hooks (https://github.com/helm/helm/pull/13154)

### Review and update all the pages with the "This page has not yet been updated for Helm 4" warning

This warning was added to several pages in the Helm 4 docs to indicate that they've not yet been updated:

"This page has not yet been updated for Helm 4. Some of the content might be inaccurate or not applicable to Helm 4. For more information about the Helm 4 new features, improvements, and breaking changes, see Helm 4 Overview."

Review all the pages where this warning appears, and review them to make any necessary updates. Then, remove the warning.

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

There is not currently a process for adding a new locale to the docs, maintaining/tracking drift in existing locales, or reviewing PRs to localized content.

This has led to several locales which are minimally translated and are lacking a plan or committment from community members for ongoing maintenance. It has also led to several localization PRs and issues sitting open and unreviewed indefinitely, without contributors understanding what they need to do to get them merged.

The CNCF docs team has share the following guidance that the OpenTelemetry project uses for localizing their docs: https://opentelemetry.io/docs/contributing/localization/

The Helm docs maintainers should review these guidelines and make a plan for rolling out similar processes.

### Create and publish a clear process for triaging the issue backlog and reviewing PRs

Similar to above, the helm-www repo should have clearer processes for triaging issues and reviewing/merging PRs. As is, there are dozens of open issues and PRs that are not regularly reviewed for freshness or otherwise responded to by maintainers. Agreeing on and publishing a set of processes could make it easier for maintainers and contributors to understand how to review issues/PRs, and how long it should take for issues/PRs to be reviewed.

[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
