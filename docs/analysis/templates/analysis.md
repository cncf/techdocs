---
title: _PROJECT_ Documentation Analysis
tags: _PROJECT_
created: YYYY-MM-DD
modified: YYYY-MM-DD
author: _NAME_ (@_HANDLE_)
---

<!-- TO USE THIS TEMPLATE: Search and replace:
_PROJECT_           with the project name
YYYY-MM-DD          with the creation and modification dates of the analysis document
_NAME_              with the name of the analysis author
@_HANDLE_           with the GitHub handle of the analysis author
_PROJECT-WEBSITE_   with the landing page of the project's information website
_PROJECT-DOC-URL_   with the main page of the technical documentation for the current project revision; this might be on the main website server, for example as _PROJECT-WEBSITE_/doc
_PROJECT-DOC-REPO_  with the repository where the project technical documentation is stored; this might be its own repo or a directory in the project main repo

See howto.md for a discussion of the analysis procedure.

-->

# Introduction

This document analyzes the effectiveness and completeness of the
[_PROJECT_][project-website] open source software (OSS) project's documentation
and website. It is funded by the CNCF Foundation as part of its overall effort
to incubate, grow, and graduate open source cloud native software projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

## Purpose

This document was written to analyze the current state of _PROJECT_
documentation. It aims to provide project leaders with an informed understanding
of potential problems in current project documentation. A second document,
`_PROJECT_-impementation.md`, outlines an actionable plan for improvement. A
third document, `_PROJECT_-issues.md`, enumerates a backlog of issues to be
added to the project documentation repository. These issues can be taken up by
contributors to improve the documentation.

This document:

- Analyzes the current _PROJECT_ technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

## Scope of analysis

The documentation discussed here includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the
_PROJECT_ GitHub repository.

The _PROJECT_ website and documentation are written in [Markdown,
ReStructured Text, other] and are compiled using the [Hugo, Docusaurus,
Sphynx, other] static site generator with the [Docsy, other] theme and served from
[the Netlify platform, other]. The site's code is stored on the _PROJECT_ GitHub
repo.

**In scope:**

- Website: _PROJECT-WEBSITE_
- Documentation: _PROJECT-DOC-URL_
- Website repo: _PROJECT-DOC-REPO_
- _[Other; might include a demo server, governance site, or other relevant repositories]_

**Out of scope:**

- Other _PROJECT_ repos: _[In general, do not include sub-projects or
  related "ecosystem" projects]_

## How this document is organized

This document is divided into three sections that represent three major areas of
concern:

- **Project documentation:** concerns documentation for users of the _PROJECT_
  software, aimed at people who intend to use the project software
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the _PROJECT_ OSS project
- **Website:** concerns the mechanics of publishing the documentation, and
  includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate
[criteria][criteria-doc] for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help _PROJECT_ users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

An accompanying document, [`_PROJECT_-implementation.md`][implementation-doc],
breaks the recommendations down into concrete actions that can be implemented by
project contributors. Its focus is on drilling down to specific, achievable work
that can be completed in constrained blocks of time. Ultimately, the
implementation items are decomposed into a series of [issues][issues-doc] and
entered as GitHub [issues][project-doc-website]/issues.

## How to use this document

Readers interested only in actionable improvements should skip this document and
read the [implementation plan][implementation-doc] and [issues
list][issues-doc].

Readers interested in the current state of the documentation and the reasoning
behind the recommendations should read the section of this document pertaining
to their area of concern:

- [Project documentation][project-heading]
- [Contributor documentation][contributor-heading]
- [Website and documentation infrastructure][website-heading]

Examples of CNCF documentation that demonstrate the analysis criteria are linked
from the [criteria][criteria-doc] specification.

### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards,
and suggests possible improvements. In most cases there is more than one way to
do things. Few recommendations here are meant to be prescriptive. Rather, the
recommended implementations represent the reviewers' experience with how to
apply documentation best practices. In other words, borrowing terminology from
the lexicon of [RFCs][rfc-spec], the changes described here should be understood
as "recommended" or "should" at the strongest, and "optional" or "may" in many
cases. Any "must" or "required" actions are clearly denoted as such, and pertain
to legal requirements such as copyright and licensing issues.

# Project documentation

<!-- Pick the CNCF maturity level of the project: -->

_PROJECT_ is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria-doc] standards for documentation.

<!-- or -->

_PROJECT_ is an **incubating** project of CNCF. This means that the project
should be [_developing_][criteria-doc] professional-quality documentation
alongside the project code.

| Criterion                  | Rating (1-5)   |
| -------------------------- | -------------- |
| Information architecture   | (rating value) |
| New user content           | (rating value) |
| Content maintainability    | (rating value) |
| Content creation processes | (rating value) |
| Inclusive language         | (rating value) |

<!-- Rating values:
1 - not present
2 - needs improvement
3 - meets standards
4 - meets or exceeds standards
5 - exemplary
-->

## Comments

<!--
Make any overall comments about the Project Documentation here.
-->

The following sections contain brief assessments of each element of the Project
Documentation rubric.

<!-- For each heading below, discuss how well the in-scope items, and especially the technical documentation, meet these criteria. (Criteria are copied from criteria.md) -->

### Information architecture

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

### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

- Is “getting started” clearly labeled? (“Getting started”, “Installation”,
  “First steps”, etc.)
- Is installation documented step-by-step?
- If needed, are multiple OSes documented?
- Do users know where to go after reading the getting started guide?
- Is your new user content clearly signposted on your site’s homepage or at the
  top of your information architecture?
- Is there easily copy-pastable sample code or other example content?

### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens, particularly if you don’t plan for them.

We evaluate on the following:

- Is your documentation searchable?
- Are you planning for localization/internationalization with regards to site
  directory structure? Is a localization framework present?
- Do you have a clearly documented method for versioning your content?

### Content creation processes

Documentation is only as useful as it is accurate and well-maintained, and
requires the same kind of review and approval processes as code.

We evaluate on the following:

- Is there a clearly documented (ongoing) contribution process for
  documentation?
- Does your code release process account for documentation creation & updates?
- Who reviews and approves documentation pull requests?
- Does the website have a clear owner/maintainer?

### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evaluate on the following:

- Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?
- Does the project use language like "simple", "easy", etc.?

## Recommendations

<!-- Write general recommendations based on the comments from the previous section. -->

### Information architecture

### New user content

### Content maintainability & site mechanics

### Content creation processes

### Inclusive language

# Contributor documentation

<!-- Pick the CNCF maturity level of the project: -->

_PROJECT_ is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria-doc] standards for documentation.

<!-- or -->

_PROJECT_ is an **incubating** project of CNCF. This means that the project
should be [_developing_][criteria-doc] professional-quality documentation
alongside the project code.

| Criterion                                 | Rating (1-5)   |
| ----------------------------------------- | -------------- |
| Communication methods documented          | (rating value) |
| Beginner friendly issue backlog           | (rating value) |
| “New contributor” getting started content | (rating value) |
| Project governance documentation          | (rating value) |

<!-- Rating values:
1 - not present
2 - needs improvement
3 - meets standards
4 - meets or exceeds standards
5 - exemplary
-->

## Comments

<!--
Make any overall comments about the Contributor Documentation here.
-->

The following sections contain brief assessments of each element of the
Contributor Documentation rubric.

<!-- For each heading below, discuss how well the in-scope items meet these criteria. Keep in mind that much of the contributor documentation might be contained in the documentation repository. (Criteria are copied from criteria.md) -->

### Communication methods documented

One of the easiest ways to attract new contributors is making sure they know how
to reach you.

We evaluate on the following:

- Is there a Slack/Discord/Discourse/etc. community and is it prominently linked
  from your website?
- Is there a direct link to your GitHub organization/repository?
- Are weekly/monthly project meetings documented? Is it clear how someone can
  join those meetings?
- Are mailing lists documented?

### Beginner friendly issue backlog

We evaluate on the following:

- Are docs issues well-triaged?
- Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a “good first issue” label)?
- Are issues well-documented (i.e., more than just a title)?
- Are issues maintained for staleness?

### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

We evaluate on the following:

- Do you have a community repository or section on your website?
- Is there a document specifically for new contributors/your first contribution?
- Do new users know where to get help?

### Project governance documentation

One of the CNCF’s core project values is open governance.

We evaluate on the following:

- Is project governance clearly documented?

## Recommendations

<!-- Write general recommendations based on the comments from the previous section. -->

### Communication methods documented

### Beginner friendly issue backlog

### New contributor getting started content

### Project governance documentation

# Website and infrastructure

<!-- Pick the CNCF maturity level of the project: -->

_PROJECT_ is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria-doc] standards for documentation.

<!-- or -->

_PROJECT_ is an **incubating** project of CNCF. This means that the project
should be [_developing_][criteria-doc] professional-quality documentation
alongside the project code.

| Criterion                                   | Rating (1-5)   |
| ------------------------------------------- | -------------- |
| Single-source for all files                 | (rating value) |
| Meets min website req. (for maturity level) | (rating value) |
| Usability, accessibility, and design        | (rating value) |
| Branding and design                         | (rating value) |
| Case studies/social proof                   | (rating value) |
| SEO, Analytics, and site-local search       | (rating value) |
| Maintenance planning                        | (rating value) |
| A11y plan & implementation                  | (rating value) |
| Mobile-first plan & impl.                   | (rating value) |
| HTTPS access & HTTP redirect                | (rating value) |
| Google Analytics 4 for production only      | (rating value) |
| Indexing allowed for production server only | (rating value) |
| Intra-site / local search                   | (rating value) |
| Account custodians are documented           | (rating value) |

<!-- Rating values:
1 - not present
2 - needs improvement
3 - meets standards
4 - meets or exceeds standards
5 - exemplary
-->

## Comments

<!--
Make any overall comments about the Website and documentation infrastructure here.
-->

The following sections contain brief assessments of each element of the Website
and documentation infrastructure rubric.

<!-- For each heading below, discuss how well the in-scope items meet these criteria. Keep in mind that much of the website infrastructure criteria depend on the tools (static site generator, website framework and hosting, analytics tools, etc.) and processes (project CI, release procedures, goverance, etc.) used to produce the documentation. (Criteria are copied from criteria.md) -->

### Single-source requirement

Source files for _all website pages_ should reside in a single repo. Among other
problems, keeping source files in two places:

- confuses contributors
- requires you to keep two sources in sync
- increases the likelihood of errors
- makes it more complicated to generate the documentation from source files

Ideally, all website files should be in the **website repo** itself.
Alternatively, files should be brought into the website repo via [git
submodules][git-submodules].

If a project chooses to keep source files in multiple repos, they need a clearly
documented strategy for managing mirrored files and new contributions.

### Minimal website requirements

Listed here are the minimal website requirements for projects based on their
[maturity level][maturity-level], either incubating or graduated. (These are the
only two levels for which a tech docs analysis can be requested.)

| Criterion                                | Incubating Requirement                                  | Graduated Requirement                     |
| ---------------------------------------- | ------------------------------------------------------- | ----------------------------------------- |
| [Website guidelines][website-guidelines] | All guidelines satisfied                                | All guidelines satisfied                  |
| [Docs analysis][analysis-doc] (this)     | Requested through CNCF [service desk][cncf-servicedesk] | All follow-up actions addressed           |
| **Project doc**: stakeholders            | Roles identified and doc needs documented               | All stakeholder need identified           |
| **Project doc**: hosting                 | Hosted directly                                         | Hosted directly                           |
| **Project doc**: user docs               | Comprehensive, addressing most stakeholder needs        | Fully addresses needs of key stakeholders |

[git-submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[website-guidelines]: ../../website-guidelines-checklist.md
[maturity-level]:
  https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations
[cncf-servicedesk]: https://servicedesk.cncf.io

### Usability, accessibility and devices

Most CNCF websites are accessed from mobile and other non-desktop devices at
least 10-20% of the time. Planning for this early in your website's design will
be much less effort than retrofitting a desktop-first design.

- Is the website usable from mobile?
- Are doc pages readable?
- Are all / most website features accessible from mobile -- such as the top-nav,
  site search and in-page table of contents?
- Might a [mobile-first] design make sense for your project?

[mobile-first]:
  https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first

Plan for suitable [accessibility][] measures for your website. For example:

- Are color contrasts significant enough for color-impaired readers?
- Are most website features usable using a keyboard only?
- Does text-to-speech offer listeners a good experience?

It is up to each project to set their own guidelines.

[accessibility]: https://developer.mozilla.org/en-US/docs/Web/Accessibility

### Branding and design

CNCF seeks to support enterprise-ready open source software. A key aspect of
this is branding and marketing.

We evaluate on the following:

- Is there an easily recognizable brand for the project (logo + color scheme)
  clearly identifiable?
- Is the brand used across the website consistently?
- Is the website’s typography clean and well-suited for reading?

### Case studies/social proof

One of the best ways to advertise an open source project is to show other
organizations using it.

We evaluate on the following:

- Are there case studies available for the project and are they documented on
  the website?
- Are there user testimonials available?
- Is there an active project blog?
- Are there community talks for the project and are they present on the website?
- Is there a logo wall of users/participating organizations?

### SEO, Analytics and site-local search

SEO helps users find your project and it's documentation, and analytics helps
you monitor site traffic and diagnose issues like page 404s. Intra-site search,
while optional, can offer your readers a site-focused search results.

We evaluate on the following:

- Analytics:
  - Is analytics enabled for the production server?
  - Is analytics disabled for all other deploys?
  - If your project used Google Analytics, have you migrated to GA4?
  - Can Page-not-found (404) reports easily be generated from you site
    analytics? Provide a sample of the site's current top-10 404s.
- Is site indexing supported for the production server, while disabled for
  website previews and builds for non-default branches?
- Is local intra-site search available from the website?
- Are the current custodian(s) of the following accounts clearly documented:
  analytics, Google Search Console, site-search (such as Google CSE or Algolia)

### Maintenance planning

Website maintenance is an important part of project success, especially when
project maintainers aren’t web developers.

We evaluate on the following:

- Is your website tooling well supported by the community (i.e., Hugo with the
  Docsy theme) or commonly used by CNCF projects (our recommended tech stack?)
- Are you actively cultivating website maintainers from within the community?
- Are site build times reasonable?
- Do site maintainers have adequate permissions?

### Other

- Is your website accessible via HTTPS?
- Does HTTP access, if any, redirect to HTTPS?

## Recommendations

<!-- Write general recommendations based on the comments from the previous section. -->

### Single-source requirement

### Minimal website requirements

### Usability, accessibility and devices

### Branding and design

### Case studies/social proof

### SEO, Analytics and site-local search

### Maintenance planning

### Other

<!--- References --->

[project-website]: #?_PROJECT-WEBSITE_
[project-doc-website]: #?_PROJECT-DOC-URL_
[criteria-doc]: ../criteria.md
[implementation-template]: ./implementation.md
[issues-template]: ./issue-template.md
[umbrella-template]: ./umbrella-issue.md
[implementation-doc]: #?_PROJECT_-implementation.md
[issues-doc]: #?_PROJECT_-issues.md
[project-heading]: #project-documentation
[contributor-heading]: #contributor-documentation
[website-heading]: #website
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[website-guidelines]: ../../website-guidelines-checklist.md
