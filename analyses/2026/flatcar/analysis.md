---
title: Flatcar Documentation Analysis
tags: [Flatcar]
created: 2026-02-26
modified: 2026-04-04
author: Bruce Hamilton (@iRaindrop)
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document is an analysis of the effectiveness and completeness of the
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
problems in current project documentation. A second **implementation** document
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
using the Hugo generator with the Flatcar theme and served from a GitHub
repository. The site's code is stored on the Flatcar GitHub repo.

#### In scope

- Website: https://www.flatcar.org
- Documentation: https://www.flatcar.org/docs/latest
- Website repo: https://github.com/flatcar/flatcar-website

#### Out of scope

Any Flatcar content that is not accessed by the documentation URL,
https://www.flatcar.org/docs/latest,is outside the scope of this analysis. The
FAQ and Blog are outside the scope, however an argument can be made to keep an
up-to-date FAQ in the core documentation.

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
- [Contributor documentation](#contributor-documentation)
- [Website and documentation infrastructure](#website-and-infrastructure)

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
| Information architecture   | 3              |
| New user content           | 3              |
| Content maintainability    | 3              |
| Content creation processes | 4              |
| Inclusive language         | 4              |

### Comments

The following sections contain brief assessments of each element of the project
documentation.

The current Flatcar documentation table of contents defines the needed areas of
knowledge to install and provision Flatcar, but it does not readily show the
different paths for new users depending on their environment.

The following comments regard the top-tier nodes in the current table of
contents:

- The top "Flatcar Container Linux" page contains references and links that
  appear to an alternate version of the table of contents. While its good to
  provide quick links, the user wonders whether the TOC node reference the same
  content, or if the links in the overview are supplemental.
- The "Installing" node contains the large "Cloud Providers" node, that might be
  better as top tier node, same with "Bare Metal". The team agrees that
  "Community supported platforms" could be merged into the "Cloud Providers"
  node.
- The installation node should address all the new user paths, providing an
  installation roadmap or strategy. The "Learning Series" node, introduced into
  the documentation recently, outlines the key steps for installing,
  configuring, and managing Flatcar conveying the life cycle. It would be good
  for the top nodes to have a similar flow.
- The "Provisioning Tools" title is descriptive, but its unclear how other areas
  of the docs relate to this section.
- The "Nebraska" node is about updates, but a top node should convey the
  functionality rather than a product name.
- The "Setup and Operations" node casts too much of a wide net in its title. How
  does "setup" differ from installation? The node contains several important
  content areas that should be more discoverable, for instance:
  - "Managing Clusters" might be better at a higher level because it's an
    initial evaluation in deploying Flatcar.
  - The Storage and Security nodes are typically at a higher level.
  - The systemd is about core OS management, which should be reflected in its
    title.
- The "Container Runtimes" node is expected to focus on containers and clusters.
  An argument could be made to elevate "Getting Started with Kubernetes" and
  "High Availability Kubernetes" to its own node, as Flatcar has its
  optimization benefits for Kubernetes deployment.
- The "Migrating from CoreOS" node might be better placed earlier or within an
  Installation node, as it is an installation scenario.
- The "Reference" node contains expected look-up information such as "Constants
  and IDs" and "Supply chain security mechanisms" but the following sections
  could have better placement:
  - "Integrations" could be incorporated into the Cloud Providers documentation.
  - "Developer Guides" contains conceptual content typically not found in a
    Reference section, so "Developer Guides" or something more descriptive like
    "Flatcar Development Guides" should be a top-tier node.
- The "How to Contribute" node is well-placed and has the expected content.

The documentation also includes an FAQ, accessible from the top banner of the
home page. This FAQ has some content that would be prudent to verify that it's
also in the docs, such as historical context and how images are updated.
Conversely, there should be a few top-of-mind installation and support FAQ items
derived from the docs.

Code blocks are different from other documentation sets as they are not
bordered, don't have a different fill background, don't have a copy button, and
the language is not indicated.

New users might not be sure of the context for a given block of code. Is the
Linux prompt in a VM, in a client computer, or in a CLI session with a cloud
provider? Normally this can be deduced by the narrative, such as starting a
procedure with "In the VM window, use the following command to ..." or similar
guidance.

In pages with code examples the narrative follows a casual and conversational
flow, introducing the steps such as "First do this", show a block of code,
followed by "Now do this", followed by the next block of code. While at first
this tone may seem refreshing from sterile nature of technical documentation, it
inhibits learning because it inhibits scanning and the ability to reference the
exact steps. It's easier to go back a numbered step in a procedure that to read
the narrative again to find that step.

Essentially, the pertinent areas of knowledge to install and run Flatcar have
been identified and documented. They just need to be better organized. The next
step is to structure the documentation so that it meets these objectives:

- The node and topic titles provide expected guidance, such as "Getting
  Started", with nodes and sections organized for precise purposes, rather than
  headings that serve as broad categories such as "Setup and Operations".
- The structure provides the expected flow and orientation so that users can
  identify a pathway for learning about and deploying Flatcar efficiently and
  optimally.
- The structure provides effective navigation and identification of the tools
  and technologies so that users can identify the ones they need to learn about
  and use.

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
  and capabilities would be readily documented. Those features and areas need to
  be continuously updated.

- **Are there step-by-step instructions (tasks, tutorials) documented for
  features?**

  Procedures, mainly invoking bash commands, are introduced informally and do
  not follow the typical style of numbered steps that read "Use the following
  command to ..." verbiage. It would be easy to rewrite for meet that
  conformity.

- **Are there any key features which are documented but missing task
  documentation?**

  Not so much regarding features, but there are tasks in using provisioning
  tools where step-by-step guidance would be appreciated.

- **Are tasks clearly named according to user goals providing a happy path for
  users to get their tasks accomplished?**

  Not currently. The content areas are established and just need to be
  coordinated into a "Flatcar installation roadmap" for most user paths.

- **If the documentation does not suffice, is there a clear escalation path for
  users needing more help? (FAQ)**

  The current FAQ does not provide this information.

- **If the product exposes an API, is there a complete reference?**

  There is a Developer Guide for building Flatcar Container Linux from source
  and/or in modifying the OS. The SDK is not an API with function calls, but
  rather a kit of scripts and tools.

##### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

- **Is “getting started” or similar clearly labeled?**

  The "Learning Series" is a well-documented getting started guide. There is a
  Heading 3 heading "Getting started" in the overview.

- **Is installation documented step-by-step?**

  Procedures are not formal step-by-steps, but rather sufficient descriptions of
  the purpose and result of running the provided code example.

  Even if the new user does not know anything about the technologies, the
  guidance still works but would be helped greatly with numbered steps.

- **If needed, are multiple OSes documented?**

  Users are typically running a Linux machine, or a Virtual Machine running on
  Windows or macOS. It would be beneficial to acquaint the user with any
  specific client guidance, particularly when installing tools and images. For
  example, brew may not install all components one gets from directly installing
  binaries.

- **Do users know where to go after reading the getting started guide?**

  Intuitively perhaps, as the Learning Services provides sufficient content to
  get Flatcar instances running. It would be good to have listings of next steps
  for the various deployment scenarios.

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

  The team regularly updates content as the project is incubating.

- **Who reviews and approves documentation pull requests?**

  Maintainers delegate doc approval to experienced code contributors.

- **Does the website have a clear owner/maintainer?**

  Yes.

##### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evaluate on the following:

- **Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?**

The 175 hits were "master", "disable", "abort", and "man in the middle". Of
those only "abort" would necessitate a fix on eight occurrences.

- **Does the project use language like "simple", "easy", etc.?**

  Yes, there are about 53 hits of "easy" to replace. The word "simple" is used,
  but the context is a simpler piece of code or process rather than a task being
  simple.

### Recommendations

The Flatcar documentation is naturally evolving into comprehensive and
understandable guidance. Technical savvy readers are well suited to gather the
information they need. New users can still find their path, but they need more
context of the technologies and tools involved, why they're needed, and the
environments they're used in.

#### Information architecture

The high-level recommendations follow a three tier approach to Flatcar
documentation. The first tier (node) should be a Getting Started, followed by
several nodes devoted to operations that span several categories organized by
functionality, and the last tier or group will be related content such as the
Reference and Contributor Documentation. These recommendations are designed to
be malleable.

- Create a Getting Started node with the following sections:
  - Create an "Installation roadmap" page for users that enables them to
    determine how they want to deploy containers with Flatcar. The starting
    points for the discussion are whether the user comes from an on-prem or
    cloud environment and many users will use both. This purpose of this page is
    to provide users with a procedure for installation.
  - Prerequisites regarding client operating systems including running VMs from
    macOS and Windows.
  - Prerequisites for the Quickstart.
  - Any guidance on installing binaries directly or using programs like brew.
  - Create a "Configuration and Provisioning" page that covers the YAML coding,
    using Butane and employing other configurations. Link this page from the
    "Installation roadmap".
  - Create a "Deployment" page, covering scenarios for Kubernetes, clustering
    and distributed systems. Cover on-prem and cloud. Link from the
    "Installation roadmap".

- For the middle functional nodes of the table of contents, devise the
  categories of tools, technologies, products, and terms pertinent areas for
  Flatcar. While these could be under a broader umbrella, such as Operations,
  nine or headings in the navigation bar is not too much, and speeds up
  discovery. Given a list of about 60 tools, technologies, etc., Copilot devised
  the following categories:
  - Virtualization and Hypervisors
  - Cloud and Hosting Platforms
  - Bare Metal Booting and Installation
  - Security and Compliance
  - File systems
  - System Services and OS Internals
  - Provisioning Configuration and Automation
  - Container and Orchestration

  Work with the team to devise the categories and keep to it!

- Update the top Overview page to accommodate an introduction to the overall
  documentation to guide users into determining their happy path to accomplish
  their Flatcar objectives.

- Add at least one architectural diagram to top overviews that depict a
  container, a container with Flatcar, and perhaps nodes and clusters.

#### Content maintainability and site mechanics

- Edit each procedural topic, page with code examples, into a semiformal How-to
  topic with numbered steps. While the conversational flow is inviting, it
  inhibits scanning, predictability, and troubleshooting when needed to
  reference a particular code block. No need to go granular, but at least have
  then main steps numbered.

- For most, but not every, code block make sure the user has the right context
  of where the code is being run. Preceded each step with clauses such as the
  following:
  - On your local machine, use the following command to...
  - Inside the Flatcar instance, ...
  - SSH into the instance and then run ...

- Reformat all code blocks to have a copy button. Having to manually select code
  can pick up unwanted characters and is also more difficult on mobile devices.

#### Inclusive language and tone

- Consider replacing the eight occurrences of "abort".
- Remove occurrences of "easy" where it's implied that a task is easy.

## Contributor documentation

Flatcar is an **incubating** project of CNCF. This means that the project should
be developing professional-quality documentation alongside the project code.

| Criterion                                 | [Rating (1-5)] |
| ----------------------------------------- | -------------- |
| Communication methods documented          | 4              |
| Beginner friendly issue backlog           | 4              |
| “New contributor” getting started content | 4              |
| Project governance documentation          | 4              |

### Comments

The following sections contain brief assessments of each element of the
Contributor Documentation rubric.

#### Communication methods documented

One of the easiest ways to attract new contributors is making sure they know how
to reach you.

The Flatcar teams cast a wide net for gathering feedback and contributions in the following areas:

- Documentation: Guides, tutorials, API docs
- Code: New features, bug fixes, builds, CI/CD
- Community: Issue triage, answering questions on Slack/Matrix/Mailing Lists
- Flatcar Apps: Create reference implementations for running services on Flatcar
- Outreach: blog posts, talks, presentations, workshops
- Coordination: Release management, Upstream project coordination
- Events: Bug fixing days, doc writing days, devrooms, meetups, conferences
- Design: Web design, maintaining the Flatcar website

The team provides links to aggregated GitHub issues for newcomers and advanced users to work on.

We evaluate on the following:

- **Is there a Slack or similar resource and is it linked from your website?**

  Yes, however these chat and social media links are on the README file of the
  [Flatcar GitHub repository](https://github.com/flatcar/Flatcar).

  Chats:
  - Matrix: https://app.element.io/#/room/#flatcar:matrix.org
  - Slack: https://kubernetes.slack.com/archives/C03GQ8B5XNJ Social media:
  - Mastodon: https://hachyderm.io/@flatcar
  - X: https://x.com/flatcar

- **Is there a direct link to your GitHub organization/repository?**

  Not from the website.

- **Are weekly/monthly project meetings documented? Is it clear how someone can
  join those meetings?**

  Yes. Office Hours are promoted and scheduled monthly.

  When: 2nd Wednesday of every month at 2:30pm UTC
  Where: https://meet.flatcar.org/OfficeHours
  Agenda: https://github.com/flatcar/Flatcar/discussions/categories/flatcar-office-hours

  There are also Developer Syncs.

  When: 4th Wednesday of every month at 2:30pm UTC
  Where: https://meet.flatcar.org/OfficeHours
  Agenda: Developer Sync Discussions

- **Are mailing lists documented?**

  Yes, in the README of the
  [Flatcar GitHub repository](https://github.com/flatcar/Flatcar/tree/main?tab=readme-ov-file#mailing-lists)
  these mailing lists are noted:

  Flatcar Users: https://groups.google.com/g/flatcar-linux-user Flatcar
  Developers: https://groups.google.com/g/flatcar-linux-dev

#### Beginner-friendly issue backlog

We evaluate on the following:

- **Are docs issues well-triaged?**

  Yes, this URL shows doc issues being tracked in GitHub:
  https://github.com/flatcar/Flatcar/issues?q=state%3Aopen%20label%3Akind%2Fdocs

- **Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a “good first issue” label)?**

Label	Description
good first issue	Extra guidance to help you make your first contribution
help wanted	Issues suitable for non-core maintainers

  Each page has these two links at the bottom:
  - An `Edit this page` link opens the page for editing in GitHub if a fork
    exists, otherwise shows the option to fork the repository.
  - A `File documentation issue` link opens a new GitHub issue.

- **Are issues well-documented (i.e., more than just a title)?**

  Yes, most issues are thoroughly described with detailed proposed solutions.

- **Are issues maintained for staleness?**

  Generally, yes.

#### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

We evaluate on the following:

- **Do you have a community repository or section on your website?**

  Not currently.

- **Is there a document specifically for new contributors/your first
  contribution?**

  Yes. There is a
  [How to contribute](https://www.flatcar.org/docs/latest/contribute/) node at
  the bottom of the navigation tree, and contains guidance on making pull
  requests in the Flatcar GitHub repository. Also included is guidance style and
  formatting with links to style guides.

  In addition to the website, there is guidance for contributors on the README
  page of the Flatcar GitHub repository, in
  [Participate and Contribute](https://github.com/flatcar/Flatcar/tree/main?tab=readme-ov-file#participate-and-contribute)
  section.

- **Do new users know where to get help?**

  That would be Flatcar's Slack and Matrix chat channels.

  - Matrix (preferred): #flatcar:matrix.org
  - Slack: #flatcar (Kubernetes Slack)
  - GitHub Discussions: flatcar/Flatcar/discussions
  - Mailing List (Users): flatcar-linux-user

#### Project governance documentation

One of the CNCF’s core project values is open governance.

We evaluate on the following:

- **Is project governance clearly documented?**

  Yes,
  [Flatcar Project Governance](https://github.com/flatcar/Flatcar/blob/main/governance.md)
  is well documented.

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
