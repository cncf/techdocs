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

- **Reorganize documentation**
  - Introduce a docs section and place some pages under it to avoid repetition
  - Structure 'Getting started' according to user roles
  - Add instructional material to website and repo documentation
    to make it easier to find.

- **Introduce instructional documentation**
  - Identify TUF user roles (personas)
  - Develop task-based material i.e How-tos for user roles
  - Document TUF installation procedures in a separate page(At the moment it's
    in the spec doc)
  - Develop quick start and contribution guides for new users

- **Content maintanability and creation process**
  - Rename the website repo to a recognizable name e.g _TUF-ReadTheDocs_ or similar
  - Add search functionality to website to make it easier to find content
  - Identify maintainers for the website repo
  - Add labels to the website repo
  - Add a README to the website repo with information about the project including
    links to important project repos
  - Develop a contributors' guideline for new users
  - Create procedure for developing the website locally
  - Include communication channels on the website repo README
  - Provide information about project meetings e.g a meeting link and calendar
    on both the website and repo
  - Add the [TUF blog](https://theupdateframework.github.io/python-tuf) to the
    website.

## Implementation

## Reorganize documentation

### Align information in related sections

Some sections listed on the menu bar have unrelated sub-sections. This structure
makes information hard to find and can be confusing to new users. Much of the information on the website can go under a *Docs* section. Consider the following structure: 

- **About**: Overview of TUF project
- **Documentation**:
- Introduction to TUF
- TUF project components
- Getting started: TUF Specification, Standardization, reference implementation,
  and documentation. You can include installation guides for each component in
  this section
- Tutorials
- Implementations
- Best practises
- Contribution guidelines

- **Community**: You can have two sections.

  - Learn and connect: Includes all community communication channels including
    social media, mailing lists,calendar,Slack etc.
  - Develop and Contribute : Information about how to contribute to TUF
    components and documentation.
  - Code of conduct

- **Resources**:
  - Blog
  - News
  - Videos
- **Contact**:
  - Maintainer info and TUF contact information

### Consolidate some pages

The specification index is referenced several times on the website despite
having its own sub-section.

You can have a docs section with information tailored to the user roles of the
three project components.

### Add user roles to Getting started section

Structure the _Getting started_ section according to user roles under a *Docs* section. The percieved user roles for this project
are:

- **TUF specification**: Uses TUF metadata to download and verify targets
- **TUF proposals contributor** : Proposes major changes to the specification,
  including new features made as TUF Augmentation Proposals (TAPs)
- **TUF implementation/Developers** : Develops software with the TUF Python
  reference implementation
- **TUF docs**: Contributes to documentation

Each role may have accompanying documentation and instructional
material/tutorial to help users set up and start using TUF.

## Introduce Instructional Material

- Clearly identify user roles in the documentation and what can be achieved by
  each
- Create instructional material in the _Getting started_ section for each user
  role i.e How-to guides and tutorials
- Document installation guides for each user role in a separate page. At the
  moment all the information for
  [TUF Specification](https://theupdateframework.github.io/specification/latest)
  file.
- Include links to the github repos associated with the role.

## Content maintainability and creation process

### Rename the website Github repo

Rename the website repo to a recognizable name e.g _TUF-website_ or similar to
make it easier to find. At the moment, the repo is named _theupdateframework.io_
which is too broad as it only contains docs and not all information about TUF
projects

### Add README to docs repo

Add a README to the website repo with information about the project. I suggest the
following information: Overview of the project, components, project repos,
communication channels and links a contributors' guide.

### Add search functionality to website

Consider adding a search functionality to website to make it easier for users to
do intra-site searching. Hugo does not have such functionality so I advice using
a plugin.

### Identify maintainers for website repo

Identify maintainers for the website repo both on the website and repo to make it
easier for contributors to contact them.

### Add labels to the docs repo

Include labels to issues in the website repo. These includes labels such as _#docs
\#Goodfirstissue_ to make it easier for contributors to get started.

### Develop a contributors' guideline for new users

Develop contributor guides to assist new contributors to get started.

### Create procedures for developing the docs site locally

Develop procedures for developing the docs site locally i.e cloning, building
and serving the documentation. You can also provide information about the tools
used to build and maintain the site. When such information is available it helps
contributors know how to improve the website. You might get some good
suggestions.

### Provide project meeting links and calendar

Provide information about project meetings and a calendar on both the website
and repo. Makes it easier for contributors to sinc with their calendars and get
notifications about meetings. I like how the
[**Meshery**](https://github.com/layer5io/layer5) project has implemented this.

### Include the TUF blog to website

Add the [TUF blog](https://theupdateframework.github.io/python-tuf) to the
website. It has more visibility there than where it's located currently on the
**Python/TUF repo**

[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
