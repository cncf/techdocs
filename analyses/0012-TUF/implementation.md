---
title: Implementing TUF Doc Improvements
tags: TUF
---

## Introduction

This document provides actionable suggestions for improving the
**theUpdateframework (TUF)** technical documentation.

For an analysis and general discussion of recommendations on TUF technical
documentation, see [analysis](./analysis.md).

### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards and
suggests possible improvements. In most cases, there is more than one way to do
things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. The recommended implementations represent the reviewers' experience
with how to apply those best practices. In other words, borrowing terminology
from the lexicon of [RFCs][rfc-keywords], the changes described here should be
understood as "recommended" or "should" at the strongest, and "optional" or
"may" in many cases. Any "must" or "required" actions are denoted as such and
pertain to legal requirements such as copyright and licensing issues.

The top-level documentation recommendations for this project are:

- **Reorganize documentation**

  - Introduce a docs section and place some sections like **Getting started**
    under it to avoid repetition
  - Structure 'Getting started' according to user roles
  - Add instructional material to the website and repo documentation to make it
    easier to find.

- **Introduce instructional documentation**

  - Identify TUF user roles (personas)
  - Develop task-based material i.e How-tos for user roles
  - Develop quick start and contribution guides for new users

- **Content maintainability and creation process**
  - Add search functionality to the website to make it easier to find content
  - Identify maintainers for the website repo
  - Add labels to the website repo
  - Add a README to the website repo with information about the project
    including links to important project repos
  - Develop a contributors' guideline for new users
  - Create procedural material for developing the website locally
  - Include communication channels on the website repo README
  - Provide information about project meetings e.g a meeting link and calendar
    on both the website and repo

## Implementation

## Reorganize documentation

### Align information in related sections

Some sections listed on the menu bar have unrelated sub-sections. This structure
makes information hard to find and can be confusing to new users. Much of the
information on the website can go under a _Docs_ section. Consider the following
structure:

- **Home page**
- **Documentation**: Overview of TUF

  - Getting started: Adopters and contributors
  - Project :Tap,History,Timeline
  - Metadata
  - Adoptions
  - Implementations
  - Security audits
  - Enhancement proposals
  - Best practices
  - FAQ

- **Community**: You can have two sections.

  - Learn and connect: Includes all community communication channels including
    social media, mailing lists, calendars, Slack, etc.
  - Develop and Contribute: Information about how to contribute to TUF
    components and documentation.
  - Code of conduct

- **Resources**:
  - News
  - Videos
  - Publications and press

### Consolidate some pages

The specification index is referenced several times on the website despite
having a sub-section.

You can have a **docs section** with information tailored to the user roles of
the three project components.

### Add user roles to the Getting Started section

Structure the _Getting Started_ section according to user roles under a _Docs_
section. The perceived user roles for this project are Adopters and
Contributors:

- **Adopters**: Integrate TUF security properties into new and existing content
  delivery systems. Adopters can be classified into two categories:

  - _Client maintainers_: depend on repository maintainers, to provide a TUF
    repo. And they can choose from multiple TUF client implementations
    (python-tuf, go-tuf, etc.) Typically, they will pick the language their
    client is written in.
  - _Repository maintainers_: Use either an existing TUF repository
    implementation (tuf-on-ci, RSTUF), or roll their own (typically using a tuf
    repository library such as python-tuf, go-tuf, etc.)

- **Contributors**: want to contribute either to the spec or documentation.
  - Spec contributors
  - Docs contributors

## Introduce Instructional Material

- Identify user roles in the documentation and what can be achieved by each
- Create instructional material in the _Getting Started_ section for each user
  role i.e how-to guides and tutorials
- Include links to the GitHub repos associated with the role.

## Content maintainability and creation process

### Add README to website repo

Add a README to the website repo with information about the project. I suggest
the following information: Overview of the project, components, project repos,
communication channels and links a contributors' guide.

### Add search functionality to website

Consider adding a search functionality to the website to make it easier for
users to do intra-site searching. Hugo does not have such functionality so I
suggest using a plugin or migrating to a theme that has search functionality.

### Identify maintainers for website repo

Identify maintainers for the website repo both on the website and repo to make
it easier for contributors to contact them.

### Add labels to the website repo

Include labels to issues in the website repo. These include labels such as
_#docs \#Goodfirstissue_ to make it easier for contributors to get started.

### Develop a guidelines for new users and contributors

Develop contributor guides to assist new contributors to get started.

### Create procedures for developing the website locally

Develop procedures for developing the docs site locally i.e. cloning, building,
and serving the documentation. You can also provide information about the tools
used to build and maintain the site. When such information is available it helps
contributors know how to improve the website. You might get some good
suggestions.

### Provide project meeting links and calendar

Provide information about project meetings and a calendar on both the website
and repo. Makes it easier for contributors to sync with their calendars and get
notifications about meetings. I like how the
[**Meshery**](https://github.com/layer5io/layer5) project has implemented this.

[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
