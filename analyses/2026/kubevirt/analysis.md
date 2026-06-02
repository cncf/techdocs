---
title: KubeVirt Documentation Analysis
created: 2026-05-24
modified: 2026-05-31
author: iRaindrop
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document is an analyzes the effectiveness and completeness of the
[KubeVirt](https://KubeVIRT.io) open source software (OSS) project's
documentation and website. It is funded by the Cloud Native Computing Foundation
(CNCF) Foundation as part of its overall effort to incubate, grow, and graduate
open source cloud native software projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

### Purpose

This document was written to analyze the current state of KubeVirt
documentation. It aims to provide project leaders with an informed understanding
of potential problems in current project documentation. A second
[implementation](implementation.md) document outlines an actionable plan for
improvement. A third document is an [issues list](issues-list.md) of issues to
be added to the project documentation repository. These issues can be taken up
by contributors to improve the documentation.

This document:

- Analyzes the current KubeVirt technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

### Scope of analysis

The documentation discussed here includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the
KubeVirt GitHub repository.

The KubeVirt website and documentation are written in Markdown and are compiled
using the [Hugo, Docusaurus, Sphinx, other] static site generator with the
[Docsy, other] theme and served from [the Netlify platform, other]. The site's
code is stored on the KubeVirt GitHub repo.

#### In scope

- Website: https://KubeVIRT.io
- Documentation: https://KubeVIRT.io/user-guide
- Website repo: https://github.com/KubeVIRT/user-guide

#### Out of scope

- Other KubeVirt GitHub repositories besides `user-guide`.

### How this document is organized

This document is divided into two sections that represent two major areas of
concern:

- **Project documentation:** concerns documentation for users of the KubeVirt
  software, aimed at people who intend to use the project software.
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the KubeVirt OSS project.

Each section begins with summary ratings based on a rubric with appropriate
[criteria] for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help KubeVirt users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

The accompanying [implementation](implementation.md) document breaks the
recommendations down into concrete actions that can be implemented by project
contributors. Its focus is on drilling down to specific, achievable work that
can be completed in constrained blocks of time. Ultimately, the implementation
items are decomposed into a series of issues and entered on GitHub
`https://github.com/KubeVirt/KubeVIRT/issues`.

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the [implementation](implementation.md) plan and
[issues list](./issues-list.md).

Readers interested in the current state of the documentation and the reasoning
behind the recommendations should read the section of this document pertaining
to their area of concern:

- [Project documentation](#project-documentation)
- [Contributor documentation](#contributor-documentation)

Examples of CNCF documentation that demonstrate the analysis criteria are linked
from the [criteria] specification.

#### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards,
and suggests possible improvements. In most cases there is more than one way to
do things. Few recommendations here are meant to be prescriptive. Rather, the
recommended implementations represent the reviewers' experience with how to
apply documentation best practices. In other words, borrowing terminology from
the lexicon of RFCs, the changes described here should be understood as
"recommended" or "should" at the strongest, and "optional" or "may" in many
cases. Any "must" or "required" actions are clearly denoted as such, and pertain
to legal requirements such as copyright and licensing issues.

## Project documentation

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                  | [Rating (1-5)] |
| -------------------------- | -------------- |
| Information architecture   | [rating (1-5)] |
| New user content           | [rating (1-5)] |
| Content maintainability    | [rating (1-5)] |
| Content creation processes | [rating (1-5)] |
| Inclusive language         | [rating (1-5)] |

### Comments

> AUTHOR NOTE: make any overall comments about the Project Documentation here.

The following sections contain brief assessments of each element of the Project
Documentation rubric.

> AUTHOR NOTE: For each heading below, discuss how well the in-scope items, and
> especially the technical documentation, meet these criteria. (Criteria are
> copied from criteria.md)

#### Information architecture

The overall structure (pages/subpages/sections/subsections) of your project
documentation. We evaluate on the following:

- Is there high level conceptual/“About” content? Is the documentation feature
  complete? (i.e., each product feature is documented)
- Are there step-by-step instructions (tasks, tutorials) documented for
  features?
- Are there any key features which are documented but missing task
  documentation?
- Is the “happy path”/most common use case documented? Does task and tutorial
  content demonstrate atomicity and isolation of concerns? (Are tasks clearly
  named according to user goals?)
- If the documentation does not suffice, is there a clear escalation path for
  users needing more help? (FAQ, Troubleshooting)
- If the product exposes an API, is there a complete reference?
- Is content up to date and accurate?

#### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

- Is “getting started” clearly labeled? (“Getting started”, “Installation”,
  “First steps”, etc.)
- Is installation documented step-by-step?
- If needed, are multiple OSes documented?
- Do users know where to go after reading the getting started guide?
- Is your new user content clearly signposted on your site’s homepage or at the
  top of your information architecture?
- Is there sample code or other example content that can easily be copy-pasted?

#### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens, particularly if you don’t plan for them.

We evaluate on the following:

- Is your documentation searchable?
- Are you planning for localization/internationalization with regards to site
  directory structure? Is a localization framework present?
- Do you have a clearly documented method for versioning your content?

#### Content creation processes

Documentation is only as useful as it is accurate and well-maintained, and
requires the same kind of review and approval processes as code.

We evaluate on the following:

- Is there a clearly documented (ongoing) contribution process for
  documentation?
- Does your code release process account for documentation creation & updates?
- Who reviews and approves documentation pull requests?
- Does the website have a clear owner/maintainer?

#### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evaluate on the following:

- Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?
- Does the project use language like "simple", "easy", etc.?

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Information architecture

#### New user content

#### Content maintainability & site mechanics

#### Content creation processes

#### Inclusive language

## Contributor documentation

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                                 | [Rating (1-5)] |
| ----------------------------------------- | -------------- |
| Communication methods documented          | [rating (1-5)] |
| Beginner friendly issue backlog           | [rating (1-5)] |
| “New contributor” getting started content | [rating (1-5)] |
| Project governance documentation          | [rating (1-5)] |

### Comments

> AUTHOR NOTE: make any overall comments about the Contributor Documentation
> here.

The following sections contain brief assessments of each element of the
Contributor Documentation rubric.

> AUTHOR NOTE: For each heading below, discuss how well the in-scope items meet
> these criteria. Keep in mind that much of the contributor documentation might
> be contained in the documentation repository. (Criteria are copied from
> criteria.md)

#### Communication methods documented

One of the easiest ways to attract new contributors is making sure they know how
to reach you.

We evaluate on the following:

- Is there a Slack/Discord/Discourse/etc. community and is it prominently linked
  from your website?
- Is there a direct link to your GitHub organization/repository?
- Are weekly/monthly project meetings documented? Is it clear how someone can
  join those meetings?
- Are mailing lists documented?

#### Beginner friendly issue backlog

We evaluate on the following:

- Are docs issues well-triaged?
- Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a “good first issue” label)?
- Are issues well-documented (i.e., more than just a title)?
- Are issues maintained for staleness?

#### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

We evaluate on the following:

- Do you have a community repository or section on your website?
- Is there a document specifically for new contributors/your first contribution?
- Do new users know where to get help?

#### Project governance documentation

One of the CNCF’s core project values is open governance.

We evaluate on the following:

- Is project governance clearly documented?

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Communication methods documented

#### Beginner friendly issue backlog

#### New contributor getting started content

#### Project governance documentation
