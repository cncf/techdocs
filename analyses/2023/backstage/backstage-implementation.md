---
title: Implementing Backstage Doc Improvements
tags: [backstage]
cSpell:ignore: rigeur runbooks toolkits
---

# Introduction

This document provides actionable suggestions for improving the Backstage
technical documentation.

For an analysis and general discussion of recommendations on Backstage technical
documentation, see [backstage-analysis.md][backstage-analysis]].

## Recommendations, requirements, and best practices

Notwithstanding the fact that this analysis measures documentation against CNCF
project maturity standards, in most cases there is more than one way to do
things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. The recommended implementations represent the reviewers' experience
with how apply those best practices. In other words, borrowing terminology from
the lexicon of [RFCs][rfc-keywords], the changes described here should be
understood as "recommended" or "should" at the strongest, and "optional" or
"may" in many cases. Any "must" or "required" actions are clearly denoted as
such, and pertain to legal requirements such as copyright and licensing issues.

The top-level documentation recommendations for this project are:

- Fill gaps in instructional documentation for all stakeholder roles, including
  project contributors.
- Organize and "signpost" documentation by role and task so that stakeholders
  can find documentation that supports their roles' activities.

# Definitions

These implementations rely on the following definitions.

## Organization

It is assumed that Backstage is adopted by a medium-to-large _organization_
(_org_) made up of a number of _groups_.

## Group

A group is defined by its responsibility for one or more software _products_
that are manageable in Backstage.

## Product

Products can include but are not limited to: internal and external toolkits and
APIs; components; databases; and web-based and standalone applications.

A group needs 1) visibility into the org's entire corpus of products, and 2) to
publicize its own software products to the org.

## Developer

Members of a group can have various functional and organizational roles,
including: software engineer; dev-op; QA engineer; software architect; network
engineer; engineering manager; and many others. These implementations refer to a
group member generically as a _developer_ (_dev_).

## Contributor

The org has ties to the Backstage open source software (OSS) project through
developers who contribute to the project and who participate in discussions,
newsgroups, and other community forums. These OSS participants, regardless of
their employer or job function, are called _contributors_.

# User Roles

The only distinctions among Backstage users relevant to this implementation
discussion are among _user roles_. User roles are defined to organize
documentation recommendations. The following table summarizes the user roles
that have been identified for that purpose.

| User Role     | Use Cases                                                                                                                                                                                                                                                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Evaluator     | Someone who is trying to decide whether to adopt Backstage into an organization.                                                                                                                                                                                                                                                              |
| Administrator | An IT or DevOps professional responsible for standing up and maintaining an organization's instance of Backstage (the _Backstage app_).                                                                                                                                                                                                       |
| Developer     | The Backstage "end user". A developer, part of a group within an organization. Typically but not always a technical contributor, the developer uses Backstage to learn about and use software components within the org and to publish and document their group's software.                                                                   |
| Integrator    | A developer who modifies an org's Backstage app (typically by writing or modifying a plugin) to add functionality required by the org. This modification might or might not then be contributed back to the Backstage OSS project.                                                                                                            |
| Contributor   | A developer who supplies a work product (code or documentation, e.g.) to the Backstage open-source project, or who volunteers to participate by providing services (reviews, discussion, or committee membership, e.g.). Much of the contributor documentation is specifically for integrators who contribute plugins or code to the project. |

**A note about adoption champions**: A survey of Backstage adopters entitled
"Backstage Insights" was undertaken by Spotify. The survey is summarized briefly
in [this document][backstage-insights-summary]. Backstage Insights identifies
another role, the _Champion_. Due to the complexity and level of commitment
needed to adopt Backstage, Backstage Insights deems the champion necessary for
an organization to successfully adopt Backstage. Adoption and the champion role
are not addressed in the Backstage documentation and are beyond the scope of
this analysis. They are important considerations, however, that should be
addressed by any organization and for which further exploration and
documentation would be valuable.

# Implementation: Fill gaps in instructional documentation

"Instructional documentation" is a broad category that includes such traditional
documentation artifacts as tutorials; getting started guides; procedural recipes
or "cookbooks"; runbooks; and how-to guides. We recommend that the project first
ensure that basic task documentation is covered, then build out tutorials,
cookbooks, and more specialized documentation.

Broadly, the recommendation here is to do this:

1. For every [user role][user-roles], define the common use cases for each role.
2. For each use case, develop instructional content, including:
   - "Happy path" procedures that can be followed by anyone familiar with the
     product generally
   - examples
   - troubleshooting guides
   - for new users, tutorials

There is already some instructional content in the Backstage documentation. In
many cases, it is intermingled with conceptual and reference information. A
common example of this is in configuration instructions. Many configurations are
embodied in YAML files, and the documentation web page for the configuration
amounts to an explanation of the contents of a particular config file. In such
cases, the page should be rewritten as two or three distinct pages: a
step-by-step explanation (not just of the file contents, but where to put it,
how to load it, and so on); a configuration reference that exhaustively lists
all elements that the file can contain; and if necessary an introduction
explaining what the configuration controls.

The sections below give recommendations for the most important instructional
documentation improvements to Backstage for each user role.

## Administrator

The following artifacts should be written and made findable for administrators.

1. A server installation and setup guide for administrators. Provide clear,
   step-by-step instructions for downloading and deploying Backstage to an
   organization.

   Instructions can also be provided for installing a local, group-level, or
   test deployment, but these instructions should be separate and clearly
   labeled as non-production.

1. An Administrator Guide, with instructions on how to do such things as:
   - Start and stop the Backstage server
   - Install and configure Backstage plugins
   - Manage the many software dependencies for Backstage and its plugins
   - Maintain the Backstage database
   - Upgrade and downgrade the Backstage release version
   - Troubleshoot common problems
   - Tune server performance

## Developer

The following artifacts should be written and made findable for developers.

1. A getting started guide for developers. Provide a clear work path that
   describes how to:
   1. Download and install any necessary software components
   1. Integrate Backstage with an existing development environment

1. A User Guide for developers. Provide clear instructions for these tasks:
   - Adding an existing product to Backstage
   - Creating a new product in Backstage
   - Updating a product in Backstage
   - Documenting a product in Backstage
   - Deprecating and retiring a product from Backstage
   - Searching for a component in Backstage

## Integrator

There are a dizzying array of issues with writing, modifying, and maintaining
plugins in Backstage. This is not a detailed recipe for documenting those
issues. For integrators, at a high level, a program should be undertaken to:

1. Organize integrator tasks from most basic and common (write a simple plugin;
   decide between backend and frontend plugin) to more complex (integrate with
   external systems; use a proxy; implement authentication).
2. Where possible, using the existing documentation as a starting point, write
   step-by-step procedures for discrete integration tasks (starting with how to
   write a basic plugin).
3. Organize existing reference and conceptual information (such as API
   references and architecture discussions) into supporting documentation,
   referenced from the integration tasks.

## Contributor

For a plugin-dependent project like Backstage, it's vital that community members
contribute plugins, for two reasons:

1. To expand the base functionality of Backstage by covering common use cases
2. To provide complete examples of how plugins are structured, written, and
   added to the project

Contributor documentation should be in Markdown files in the Backstage GitHub
repo and should be limited to how to contribute software to the product. "How to
write a plugin" documentation should be included in the website-based doc as
described above.

# Organize and "signpost" documentation

Right now different types of documentation (conceptual/architectural;
instructional; reference) for different user roles are intermixed throughout the
documentation site.

Below is a proposed organization for Backspace by user role, based on a fairly
typical documentation set for developer-oriented software. Using exactly this
organization is not important. What is important, again, is to document use
cases, broken down into tasks, by user role. The documentation should reflect
the needs of each user role and be organized such that any user has a clear path
to learning the software and becoming proficient as quickly as possible.

Some documents are used by more than one user role. These docs are listed first
under the heading **Common**.

## Common

| Document           | Description                                                                                                                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Technical overview | A discussion of what the product is and what problems it solves. Ideally, the discussion starts with a summary and provides explanations of increasing depth to address different audiences (evaluator -> developer -> contributor, e.g.). |
| Release notes      | Release-specific information, including: new features; performance improvements; bugs and known issues; deprecated features; software dependency changes; and experimental or beta features.                                               |
| Glossary           | A dictionary of product-specific terms. Also commonly includes domain- and industry-specific terms that are necessary to understanding the product.                                                                                        |
| Knowledge base     | An encyclopedic collection of related background, conceptual, and reference information that doesn't fit elsewhere in the documentation. Similar to a FAQ, but more structured, more searchable and, therefore, more useful.               |

## Evaluator

| Document     | Description                                                                                                                                                                                                                                                                     |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Logo wall    | Not a technical document, but a _de rigeur_ feature on a product website these days. The logo wall shows at a glance an instantly recognizable selection of organizations that use the product. The logos typically link to testimonials or to the organizations' own websites. |
| Case studies | Another element on a product website that is as much marketing as technical material, a case study nonetheless helps an evaluator decide whether to adopt the product. A handful of well written case studies is sufficient.                                                    |

## Administrator

| Document                             | Description                                                                                                                                                                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLI reference                        | An indexed reference to the command-line interface. The Backstage CLI does a wide variety of tasks and is used both the administrator and by developers.                                                                                     |
| Installation and configuration guide | A guide to downloading, installing, and configuring an organization-wide Backstage instance ("app").                                                                                                                                         |
| Administrator guide                  | Contains all tasks the administrator needs to maintain the Backstage app: onboarding developers; installing plugins; starting, stopping, upgrading, and troubleshooting the app; using containers; evaluating and tuning server performance. |

## Developer

| Document              | Description                                                                                                                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Getting started guide | A document that usually walks a developer through setting up a development environment (for a language or API). In the case of Backstage, this is more of an integration with their existing environment. Nonetheless, this should explain how to configure all the tools the developer needs to begin using Backstage. |
| Developer guide       | Contains all tasks that the developer needs to use the Backstage app under normal circumstances: adding products ("catalog population"), modifying, and searching for products; writing documentation; using templates.                                                                                                 |
| CLI reference         | An indexed reference to the command-line interface. The Backstage CLI does a wide variety of tasks and is used both the administrator and by developers.                                                                                                                                                                |
| Tutorials             | Tasks that are good candidates for tutorials are difficult, often-used tasks that must be mastered to use the product effectively. Many of these are probably in daily use by developers.                                                                                                                               |
| Cookbooks             | There might be specialized tasks required of developers by an organization that should be documented, especially if they are performed infrequently.                                                                                                                                                                    |

## Integrator

| Document           | Description                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Technical overview | Same as the common technical overview, but an integrator will need more detail about the plugin architecture.                                                                                                                                                                                                                                                                           |
| Cookbooks          | The integrator will need to write plugins. This encompasses a large body of task knowledge. The best way to document these is as a collection of tasks or procedures explaining how to complete each task. Even with a comprehensive collection of task documents, some creativity is probably needed by the integrator, since every new plugin by definition is solving a new problem. |

## Contributor

| Document            | Description                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GitHub Instructions | Contributing a plugin to Backstage is essentially an exercise in creating and shepherding a pull request through the Backstage community process. This can be documented entirely in GitHub, or it can be a separate section in the Backstage documentation. Regardless, the contributing instructional material should be separate from the integration/"How to write a plugin" material. |

# Website and documentation infrastructure

## Single-source repo

Move the Backstage documentation out of the [Backstage
repo][backstage-github-project] and into its own repo within the [Backstage
project][backstage-backstage]. Write explicit instructions for contributing to
documentation and place them in the repo README.

In the meantime, put references to the documentation contributing and build
instructions alongside the project code instructions in the contributor
documentation in the Backstage repo.

## Case studies/social proof

Implement a **logo wall** of participating organizations, with links to
testimonials or the organizations' websites. Write or solicit a handful of
representative case studies and link them from the website.

## SEO, Analytics and site-local search

Add documentation and website custodians to the project maintainer lists in
`OWNERS.md` and wherever else project maintainers are documented.

## Maintenance planning

Add a prominent call for website and documentation maintainers in the project
introduction alongside the call for code maintainers.

## Accessibility

Improve compliance in these areas:

- **Images** should have alternative text.
- **Links** should have discernible text.

<!--- References --->

[backstage-analysis]: ./backstage-analysis.md
[backstage-backstage]: https://github.com/backstage/backstage
[backstage-github-project]: https://github.com/backstage
[backstage-insights-summary]: ./backstage-insights-summary.md
[user-roles]: #user-roles
