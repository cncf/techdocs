---
title: Flatcar Documentation Analysis
tags: [Flatcar]
created: 2026-02-26
modified: 2026-02-31
author: Bruce Hamilton (@iRaindrop)
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document is an analysis the effectiveness and completeness of the
[Flatcar](https://www.flatcar.org/docs/latest) open source software (OSS)
project's documentation and website. It is funded by the CNCF Foundation as part
of its overall effort to incubate, grow, and graduate open source cloud native
software projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

### Purpose

This document was written to analyze the current state of Flatcar documentation.
It aims to provide project leaders with an informed understanding of potential
problems in current project documentation. A second **implementation** document,
outlines an actionable plan for improvement. A third document is an **issues
list** of issues to be added to the project documentation repository. These
issues can be taken up by contributors to improve the documentation.

This document:

- Analyzes the current Flatcar technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

### Scope of analysis

The documentation discussed here includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the
Flatcar GitHub repository.

The Flatcar website and documentation are written in Markdown and are compiled
using the "static site" generator with the "theme" and served from "platform".
The site's code is stored on the Flatcar GitHub repo.

#### In scope

- Website: https://www.flatcar.org
- Documentation: https://www.flatcar.org/docs/latest
- Website repo: https://github.com/flatcar/flatcar-website

#### Out of scope

Other Flatcar besides the flatcar-website:
https://github.com/flatcar/flatcar-website.

### How this document is organized

This document is divided into three sections that represent three major areas of
concern:

- **Project documentation:** concerns documentation for users of the Flatcar
  software, aimed at people who intend to use the project software
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the Flatcar OSS project
- **Website:** concerns the mechanics of publishing the documentation, and
  includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate
criteria for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help Flatcar users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

The accompanying implementation document breaks the recommendations down into
concrete actions that can be implemented by project contributors. Its focus is
on drilling down to specific, achievable work that can be completed in
constrained blocks of time. Ultimately, the implementation items are decomposed
into a series of issues and entered as GitHub project-doc-website/issues.

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the **implementation plan** and **issues list**.

Readers interested in the current state of the documentation and the reasoning
behind the recommendations should read the section of this document pertaining
to their area of concern:

- [Project documentation](#project-documentation)
- Contributor documentation
- Website and documentation infrastructure

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

Flatcar is an **incubating** project of CNCF. This means that the project should
be developing professional-quality documentation alongside the project code.

| Criterion                  | [Rating (1-5)] |
| -------------------------- | -------------- |
| Information architecture   | [rating (1-5)] |
| New user content           | [rating (1-5)] |
| Content maintainability    | [rating (1-5)] |
| Content creation processes | [rating (1-5)] |
| Inclusive language         | [rating (1-5)] |

### Comments

The following sections contain brief assessments of each element of the project
documentation.

The current Flatcar documentation table of contents defines the needed areas of
knowledge to install and provision Flatcar, but it does not readily show the
different paths for new users depending on their environment.

The following comments regard the top-tier nodes in the current table of
contents:

- The top overview page contains headings with short paragraphs and links that
  provide additional views and categorization of Flatcar topics. These links are
  not necessarily parallel with the table of contents hierarchy.
- The "Installing" node Overview page introduces the needed guidance for the
  provisioning and configuration of Flatcar, but it also contains getting
  started code for a VM installation. That content is better served by a Getting
  Started node or the Learning Series node.
- The "Installing" node contains the large "Cloud Providers" node, that might be
  better as top tier node, same with "Bare Metal". The team agrees that
  "Community supported platforms" could be merged into the Cloud Providers node.
  The installation node should be primarily addressing all the new user paths,
  providing an installation roadmap or strategy. The "Learning Series" node,
  introduced into the documentation recently, outlines the key steps for
  installing, configuring, and managing Flatcar conveying the life cycle. It
  would be good for the top nodes to have a similar flow.
- The "Provisioning Tools" title is descriptive, but its unclear how other areas
  of the docs relate to this section.
- The "Nebraska" node is about updates, but it should convey the functionality
  and its location is unusual prominence.
- The "Setup and Operations" node is too much of a wide net in its title. How
  does "setup" differ from installation? The node contains several important
  content areas that should be more discoverable, for instance:
  - "Managing Clusters" might be better at a higher level because it's an
    initial evaluation of whether to deploy Flatcar.
  - The Storage and Security nodes are typically at a higher level.
  - The systemd is about core OS management.
- The "Container Runtimes" node is an expected node focused on containers and
  clusters. An argument could be made to elevate "Getting Started with
  Kubernetes" and "High Availability Kubernetes" to its own node, as Flatcar has
  its optimization benefits for Kubernetes deployment.
- The "Migrating from CoreOS" node might be better placed earlier or within an
  Installation node, as it is an installation scenario.
- The "Reference" node contains expected look-up information such as "Constance
  and IDs" and "Supply chain security mechanisms" but these sections could have
  better placement:
  - "Integrations" could be incorporated into the Cloud Providers documentation.
  - "Developer Guides" contains conceptual content typically not found in a
    Reference section, so "Developer Guides" or something more descriptive like
    "Flatcar Development Guides" should be a top-tier node.
- The "How to Contribute" node is well-placed has the expected content.

The documentation also includes an FAQ, accessible from the top banner of the
home page. It has some content that would be good to verify that its in the main
docs, such as historical context and how images are updated. Conversely, there
should be a few top-of-mind installation and support FAQ items derived from the
docs.

Code blocks are different from other documentation sets as they are not bordered
or have a different fill background, don't have a copy button, and the language
is not noted.

New users might not be sure of the context for a given block of code. Is the
Linux prompt in a VM, in a client computer, or in a CLI session with a cloud
provider? Normally this can be deduced by the narrative, but starting a
procedure with "In the VM window, use the following command to ..." or similar
guidance.

It should be noted that a new proposed structure is proposed by the team, with
the top nodes as follows:

Flatcar Concepts and Quick Start Configuration and Provisioning Deploying to
Public Cloud, Private Cloud, and Bare Metal Kubernetes In-place updates and
roll-backs The Nebraska update server Customizing and Extending the OS image
Troubleshooting Developer Guides Legacy Information

Essentially all the pertinent areas of knowledge to install and run Flatcar have
been identified and documented. Then just need to be better organized. The next
step is to structure the documentation so that it meets these objectives:

- The node and topic titles provide expected guidance, such as "Getting
  Started", with nodes and sections organized for precise purposes, rather than
  headings that serve as broad categories such as "Setup and Operations".
- The structure provides the expected flow and orientation of users so that they
  can identify a pathway for learning about and deploying Flatcar efficiently
  and optimally.
- The structure provides effective navigation and identification of the tools
  and technologies so that users efficiently learn about the ones they need to
  use.

#### Information architecture

The overall structure (pages/subpages/sections/subsections) of your project
documentation. We evaluate on the following:

##### Is there high-level conceptual or About content?

The current content is comprehensive on the key concepts needed for
understanding the processes and technologies involved. It's just a matter of
organizing discussion of the concepts to map to the user the path for installing
and configuring Flatcar.

- **Is the documentation feature complete?**

  Yes, given that Flatcar is essentially an operating system and new features
  and capabilities will be apparent and easily referenced.

- **Are there step-by-step instructions (tasks, tutorials) documented for
  features?**

  Procedures, mainly invoking bash commands, are introduced informally and do
  not have the typical Microsoft style of numbered steps that read "Use the
  following command to ..." verbiage. It would be easy to rewrite for meet that
  conformity.

- **Are there any key features which are documented but missing task
  documentation?**

  Not so much regarding features, but there are tasks in using provisioning
  tools where step-by-step guidance would be appreciated.

- **Are tasks clearly named according to user goals providing a happy path for
  users to get their tasks accomplished?**

  Not currently. But the needed content areas are established and just need to
  be coordinated into a "Flatcar installation roadmap" for most paths.

- **If the documentation does not suffice, is there a clear escalation path for
  users needing more help? (FAQ)**

  There is an FAQ that needs updating.

- **If the product exposes an API, is there a complete reference?**

  There is a Developer Guide for building Flatcar Container Linux from source
  and/or in modifying the OS. The SDK is a containerized Software Development
  Kit that enables developers to customize and build their own Flatcar Container
  Linux OS images.

  The SDK is not an API with function calls, but rather a kit of scripts and
  tools.

##### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

- **Is “getting started” or similar clearly labeled?**

The "Learning Series" is a well-documented getting started guide. There is a
Heading 3 heading "Getting started" in the overview.

- **Is installation documented step-by-step?**

Procedures are not formal step-by-steps, but rather sufficient descriptions of
the purpose and result of running the provided code example.

Even if the new user does not know anything about the technologies, it can still
be logical and understandable by looking up terms.

- **If needed, are multiple OSes documented?**

Users are typically running a Linux machine, or a VM running on Windows or
MacOS. It would be beneficial to acquaint the user with any client OS guidance,
particularly when installing tools and images.

- **Do users know where to go after reading the getting started guide?**

Intuitively perhaps, as the Learning Services provides sufficient content to get
Flatcar instances running. It would be good to have listings of next steps for
the various deployment scenarios.

- **Is your new user content clearly signposted on your site’s homepage or at
  the top of your information architecture?**

Other than being a top level node in the table of contents, no.

- **Is there sample code or other example content that can easily be
  copy-pasted?**

Yes, most pages have code samples, but currently the UI does not show code
example blocks with copy buttons. The code is simply in a different font.

##### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens, particularly if you don’t plan for them.

We evaluate on the following:

- **Is your documentation searchable?**

Yes, the home page has a search bar where any results populate a dropdown for
selection.

- **Are you planning for localization/internationalization?**

There are currently no plans for localization.

- **Do you have a clearly documented method for versioning your content?**

Being an incubating project, the content is not versioned at this time.

##### Content creation processes

Documentation is only as useful as it is accurate and well-maintained, and
requires the same kind of review and approval processes as code.

We evaluate on the following:

- **Is there a clearly documented (ongoing) contribution process for
  documentation?**

Yes. There is a 'How to contribute' node with guidance for using the GitHub
repository, formatting, and style.

- **Does your code release process account for documentation creation &
  updates?**

Supported, but not a formalized process at this time.

- **Who reviews and approves documentation pull requests?**

Team members are determined.

- **Does the website have a clear owner/maintainer?**

Team members are determined.

##### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evaluate on the following:

- **Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?**

The 175 hits were "master", "disable", "abort", and "man in the middle". Of
those only "abort" would necessitate a fix on eight occurrences.

- **Does the project use language like "simple", "easy", etc.?**

No, the complexity of the content is a given, and the content assumes a level of
sophistication where such verbiage would be suspicious.

### Recommendations

#### Information architecture

#### New user content

#### Content maintainability & site mechanics

#### Content creation processes

#### Inclusive language

## Contributor documentation

Flatcar is an **incubating** project of CNCF. This means that the project should
be developing professional-quality documentation alongside the project code.

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

#### Beginner-friendly issue backlog

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

#### Beginner-friendly issue backlog

#### New contributor getting started content

#### Project governance documentation

## Website and infrastructure

> AUTHOR NOTE: Pick the CNCF maturity level of the project:

Flatcar is an **incubating** project of CNCF. This means that the project should
be developing professional-quality documentation alongside the project code.

| Criterion                                   | [Rating (1-5)] |
| ------------------------------------------- | -------------- |
| Single-source for all files                 | [rating (1-5)] |
| Meets min website req. (for maturity level) | [rating (1-5)] |
| Usability, accessibility, and design        | [rating (1-5)] |
| Branding and design                         | [rating (1-5)] |
| Case studies/social proof                   | [rating (1-5)] |
| SEO, Analytics, and site-local search       | [rating (1-5)] |
| Maintenance planning                        | [rating (1-5)] |
| A11y plan & implementation                  | [rating (1-5)] |
| Mobile-first plan & implementation          | [rating (1-5)] |
| HTTPS access & HTTP redirect                | [rating (1-5)] |
| Google Analytics 4 for production only      | [rating (1-5)] |
| Indexing allowed for production server only | [rating (1-5)] |
| Within site / local search                  | [rating (1-5)] |
| Account custodians are documented           | [rating (1-5)] |

### Comments

> AUTHOR NOTE: make any overall comments about the Website and documentation
> infrastructure here.

The following sections contain brief assessments of each element of the Website
and documentation infrastructure rubric.

> AUTHOR NOTE: for each heading below, discuss how well the in-scope items meet
> these criteria. Keep in mind that much of the website infrastructure criteria
> depend on the tools (static site generator, website framework and hosting,
> analytics tools, etc.) and processes (project CI, release procedures,
> governance, etc.) used to produce the documentation. (Criteria are copied from
> criteria.md)

#### Single-source requirement

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

#### Minimal website requirements

Listed here are the minimal website requirements for projects based on their
[maturity level][maturity-level], either incubating or graduated. (These are the
only two levels for which a tech docs analysis can be requested.)

<!-- markdownlint-disable line-length -->

| Criterion                     | Incubating Requirement                                  | Graduated Requirement                     |
| ----------------------------- | ------------------------------------------------------- | ----------------------------------------- |
| [Website guidelines]          | All guidelines satisfied                                | All guidelines satisfied                  |
| **Docs analysis** (this)      | Requested through CNCF [service desk][cncf-servicedesk] | All follow-up actions addressed           |
| **Project doc**: stakeholders | Roles identified and doc needs documented               | All stakeholder need identified           |
| **Project doc**: hosting      | Hosted directly                                         | All Hosted directly                       |
| **Project doc**: user docs    | Comprehensive, addressing most stakeholder needs        | Fully addresses needs of key stakeholders |

<!-- markdownlint-enable line-length -->

[git-submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[maturity-level]:
  https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations
[cncf-servicedesk]: https://servicedesk.cncf.io

#### Usability, accessibility and devices

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

#### Branding and design

CNCF seeks to support enterprise-ready open source software. A key aspect of
this is branding and marketing.

We evaluate on the following:

- Is there an easily recognizable brand for the project (logo + color scheme)
  clearly identifiable?
- Is the brand used across the website consistently?
- The website’s typography clean and well-suited for reading?

#### Case studies/social proof

One of the best ways to advertise an open source project is to show other
organizations using it.

We evaluate on the following:

- Are there case studies available for the project and are they documented on
  the website?
- Are there user testimonials available?
- Is there an active project blog?
- Are there community talks for the project and are they present on the website?
- Is there a logo wall of users/participating organizations?

#### SEO, Analytics and site-local search

SEO helps users find your project, and it's documentation, and analytics helps
you monitor site traffic and diagnose issues like page 404s. Intra-site search,
while optional, can offer your readers a site-focused search results.

We evaluate on the following:

- Analytics:
  - Is analytics enabled for the production server?
  - Is analytics disabled for all other deploys?
  - If your project used Google Analytics, have you migrated to GA4?
  - Can Page-not-found (404) reports easily be generated from your site
    analytics? Provide a sample of the site's current top-10 404s.
- Is site indexing supported for the production server, while disabled for
  website previews and builds for non-default branches?
- Is local intra-site search available from the website?
- Are the current custodian(s) of the following accounts clearly documented:
  analytics, Google Search Console, site-search (such as Google CSE or Algolia)

#### Maintenance planning

Website maintenance is an important part of project success, especially when
project maintainers aren’t web developers.

We evaluate on the following:

- Is your website tooling well-supported by the community (i.e., Hugo with the
  Docsy theme) or commonly used by CNCF projects (our recommended tech stack?)
- Are you actively cultivating website maintainers from within the community?
- Are site build times reasonable?
- Do site maintainers have adequate permissions?

#### Other

- Is your website accessible via HTTPS?
- Does HTTP access, if any, redirect to HTTPS?

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Single-source requirement

#### Minimal website requirements

#### Usability, accessibility and devices

#### Branding and design

#### Case studies/social proof

#### SEO, Analytics and site-local search

#### Maintenance planning

#### Other

#### References and notes

##### Rating values

The numeric rating values used in this document are as follows

1. Not present
2. Needs improvement
3. Meets standards
4. Meets or exceeds standards
5. Exemplary

[criteria]: ../criteria.md
[implementation]: ./implementation.md
[issues list]: ./issues-list.md
[project-website]: _PROJECT-WEBSITE_
[Rating (1-5)]: #rating-values
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[website guidelines]: ../../website-guidelines-checklist.md
