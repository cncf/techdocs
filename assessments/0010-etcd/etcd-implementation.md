---
title: Implementing etcd Doc Improvements
tags: etcd
---

# Introduction

This document provides actionable suggestions for improving the etcd technical documentaiton.  

For an analysis and general discussion of recommendations on etcd technical documentation, see [etcd-analysis.md][etcd-analysis].

## Recommendations, requirements, and best practices

Notwithstanding the fact that this analysis measures documentation against CNCF project maturity standards, in most cases there is more than one way to do things. Few recommendations here are meant to be prescriptive. Rather, recommendations are based on documentation best practices as understood by the reviewers. The recommended implementations represent the reviewers' experience with how apply those best practices. In other words, borrowing terminology from the lexicon of [RFCs][rfc-keywords], the changes described here should be understood as "recommended" or "should" at the strongest, and "optional" or "may" in many cases. Any "must" or "required" actions are clearly denoted as such, and pertain to legal requirements such as copyright and licensing issues. 

The top-level documentation recommendations for this project are:

- Complete documentation for important use cases, such as Kubernetes installation.
- Rename the "Learning" section to something more descriptive such as "Technical Overview", and move reference information (APIs and Glossary) to a reference-specific section.
- Reorganize the documentation to make instructional documentation (tasks and procedures) easier to find. 


# Implementation: Complete documentation for important use cases

We recommend that the project audit the documentation to ensure that instructions exist for all tasks required for mainstream use cases. This includes "getting started" tasks such as installation, configuration, and server tuning; maintenance tasks such as cluster reconfiguration and upgrades and dependency management; product use, including configuration with popular products; and development, especially integrating key storage and retrieval with new products using existing APIs. For example, "Installation as part of Kubernetes installation" is entirely missing ("TBD–Help wanted") on the Installation page. 


## Administrator

The following artifacts should be written and made findable for administrators.

1. A server installation and setup guide for administrators. Provide clear, step-by-step instructions for downloading and deploying etcd to an organization. 

    Instructions can also be provided for installing a local, group-level, or test deployment, but these instructions should be separate and clearly labeled as non-production. 

1. An Administrator Guide, with instructions on how to do such things as:
    - Start and stop the etcd server
    - Install and configure etcd plugins
    - Manage the many software dependencies for etcd and its plugins
    - Maintain the etcd database
    - Upgrade and downgrade the etcd release verison
    - Troubleshoot common problems
    - Tune server performance

## Developer

The following artifacts should be written and made findable for developers.

1. A getting started guide for developers. Provide a clear work path that describes how to:
    1. Downloead and install any necessary software components
    1. Integrate etcd with an existing development environment

1. A User Guide for developers. Provide clear instructions for these tasks:
    - Adding an existing product to etcd
    - Creating a new product in etcd
    - Updating a product in etcd
    - Documenting a product in etcd
    - Deprecating and retiring a product from etcd
    - Searching for a component in etcd


## Integrator

There are a dizzying array of issues with writing, modifying, and maintaining plugins in etcd. This is not a detailed recipe for documenting those issues. For integrators, at a high level, a program should be undertaken to:

1. Organize integrator tasks from most basic and common (write a simple plugin; decide between backend and frontend plugin) to more complex (integrate with external systems; use a proxy; implement authentication).
2. Where possible, using the exisitng documentation as a starting point, write step-by-step procedures for discrete integration tasks (starting with how to write a basic plugin).
3. Organize existing reference and conceptual information (such as API references and architecture discussions) into supporting documentation, referenced from the integration tasks.


## Contributor

For a plugin-dependent project like etcd, it's vital that community members contribute plugins, for two reasons:

1. To expand the base functionality of etcd by covering common use cases
2. To provide complete examples of how plugins are structured, written, and added to the project

Contributor documentation should be in Markdown files in the etcd GitHub repo and should be limited to how to contribute software to the product. "How to write a plugin" documentation should be included in the website-based doc as described above.

# Organize and "signpost" documentation

Right now different types of documentation (conceptual/architectural; instructional; reference) for different user roles are intermixed throughout the documentation site.

Below is a proposed organization for Backspace by user role, based on a fairly typical documentation set for developer-oriented software. Using exactly this organization is not important. What is important, again, is to document use cases, broken down into tasks, by user role. The documentation should reflect the needs of each user role and be organized such that any user has a clear path to learning the software and becoming proficient as quickly as possible.

Some documents are used by more than one user role. These docs are listed first under the heading **Common**.

## Common

| Document | Description |
| --- | --- |
| Technical overview | A discussion of what the product is and what problems it solves. Ideally, the discussion starts with a summary and provides explanations of increasing depth to address different audiences (evaluator -> developer -> contributor, e.g.). |
| Release notes | Release-specific information, including: new features; performance improvements; bugs and known issues; deprecated features; software dependency changes; and experimental or beta features. |
| Glossary | A dictionary of product-specific terms. Also commonly includes domain- and industry-specific terms that are necessary to understanding the product. |
| Knowledge base | An encyclopedic collection of related background, conceptual, and reference information that doesn't fit elsewhere in the documentation. Similar to a FAQ, but more structured, more searchable and, therefore, more useful. |


## Evaluator

| Document | Description |
| --- | --- |
| Logo wall | Not a technical document, but a *de rigeur* feature on a product website these days. The logo wall shows at a glance an instantly recognizable selection of organizations that use the product. The logos typically link to testimonials or to the organizations' own websites. |
| Case studies | Another element on a product website that is as much marketing as technical material, a case study nonetheless helps an evaluator decide whether to adopt the product. A handful of well written case studies is sufficient. |

## Administrator

| Document | Description |
| --- | --- |
| CLI reference | An indexed reference to the command-line interface. The etcd CLI does a wide variety of tasks and is used both the administrator and by developers. |
| Installation and configuration guide | A guide to downloading, installing, and configuring an organization-wide etcd instance ("app"). |
| Administrator guide | Contains all tasks the administrator needs to maintain the etcd app: onboarding developers; installing plugins; starting, stopping, upgrading, and troubleshooting the app; using containers; evaluating and tuning server performance.  |


## Developer

| Document | Description |
| --- | --- |
| Getting started guide | A document that usually walks a developer through setting up a development environment (for a language or API). In the case of etcd, this is more of an integration with their existing environment. Nonetheless, this should explain how to configure all the tools the developer needs to begin using etcd. |
| Developer guide | Contains all tasks that the developer needs to use the etcd app under normal circumstances: adding products ("catalog population"), modifying, and searching for products; writing documentation; using templates. |
| CLI reference | An indexed reference to the command-line interface. The etcd CLI does a wide variety of tasks and is used both the administrator and by developers. |
| Tutorials | Tasks that are good candidates for tutorials are difficult, often-used tasks that must be mastered to use the product effectively. Many of these are probably in daily use by developers. |
| Cookbooks | There might be specialized tasks required of developers by an organization that should be documented, especially if they are performed infrequently. |


## Integrator

| Document | Description |
| --- | --- |
| Technical overview | Same as the common technical overview, but an integrator will need more detail about the plugin architecture. |
| Cookbooks | The integrator will need to write plugins. This encompasses a large body of task knowledge. The best way to document these is as a collection of tasks or procedures explaining how to complete each task. Even with a comprehensive collection of task documents, some creativity is probably needed by the integrator, since every new plugin by definition is solving a new problem. | 


## Contributor

| Document | Description |
| --- | --- |
| GitHub Instructions | Contributing a plugin to etcd is essentially an exercise in creating and shepherding a pull request through the etcd community process. This can be documented entirely in GitHub, or it can be a separate section in the etcd documentation. Regardless, the contributing instructional material should be separate from the integration/"How to write a plugin" material.  |


# Website and documentation infrastructure


## Single-source repo

Move the etcd documentation out of the [etcd repo][etcd-github-project] and into its own repo within the [etcd project][etcd-etcd]. Write explicit instructions for contributing to documentation and place them in the repo README. 

In the meantime, put references to the documentation contributing and build instructions alongside the project code instructions in the contributor documentation in the etcd repo.


## Case studies/social proof

Implement a **logo wall** of participating organizations, with links to testimonials or the organizations' websites. Write or solicit a handful of representative case studies and link them from the website. 



## SEO, Analytics and site-local search

Add documentation and website custodians to the project maintainer lists in `OWNERS.md` and wherever else project maintainers are documented.


## Maintenance planning

Add a prominent call for website and documentation maintainers in the project introduction alongside the call for code maintainers.


## Accessibility

Improve compliance in these areas:
- **Images** should have alternative text.
- **Links** should have discernible text.


<!--- References --->

[etcd-analysis]: ./etcd-analysis.md
[etcd-etcd]: https://github.com/etcd-io/etcd
[etcd-github-project]: https://github.com/etcd-io
[user-roles]: #user-roles

[etcd-io]: https://etcd.io
[cncf-doc-criteria]: ../criteria.md
[proj-doc]: ../criteria.md#project-documentation
[contributor-doc]: ../criteria.md/#contributor-documentation
[website]: ../criteria.md/#website
[etcd-issues]: ./etcd-issues.md
[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
[inclusive-naming]: https://inclusivenaming.org
[install-check]: https://etcd.io/docs/v3.5/install/#installation-check
[website-min-reqs]: https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations
[assess-howto]: https://github.com/cncf/techdocs/blob/main/assessments/howto.md
[website-guidelines]: https://github.com/cncf/techdocs/blob/main/docs/website-guidelines-checklist.md
[cncf-servicedesk]: https://servicedesk.cncf.io
[archiving-repo]: https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories
[etcd-community]: https://etcd.io/community/
[etcd-howtocontrib]: https://github.com/etcd-io/etcd/blob/main/CONTRIBUTING.md
[etcd-git-discuss]: https://github.com/etcd-io/etcd/discussions
[etcd-govern]: https://github.com/etcd-io/etcd/blob/main/GOVERNANCE.md
