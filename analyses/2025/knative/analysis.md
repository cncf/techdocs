---
title: Knative Documentation Analysis
tags: Knative
created: 2025-07-25
modified: 2025-07-25
author: Dave Welsch (@dwelsch-esi)
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document analyzes the effectiveness and completeness of the
[Knative][project-website] open source software (OSS) project's documentation
and website. It is funded by the CNCF Foundation as part of its overall effort
to incubate, grow, and graduate open source cloud native software projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

### Purpose

This document was written to analyze the current state of Knative documentation.
It aims to provide project leaders with an informed understanding of potential
problems in current project documentation. A second document is a list of
[issues] to be added to the project documentation repository. These issues can
be taken up by contributors to improve the documentation.

This document:

- Analyzes the current Knative technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

### Scope of analysis

The documentation discussed here includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the
Knative GitHub repository.

The Knative website and documentation are written in Markdown and are compiled
using the mkdocs static site generator with the Material theme. The site's code
is stored on the knative/docs GitHub repo.

#### In scope

- Website: https://knative.dev/docs/ (not an error; identical to the
  Documentation site)
- Documentation: https://knative.dev/docs/
- Website repo: https://github.com/knative/docs
- https://github.com/knative/eventing (The Knative Eventing API is built from
  this repo)
- https://github.com/knative/community (Community and governance for the
  project)
- https://github.com/knative/client (`kn`, a Knative CLI)
- https://github.com/knative/func (`func`, another CLI)
- https://github.com/knative/serving (a major component of Knative)

#### Out of scope

- Other Knative repos: https://github.com/knative/\<repo\>, for any \<repo\> not
  listed in "In scope".

### How this document is organized

This document is divided into three sections that represent three major areas of
concern:

- **Project documentation:** concerns documentation for users of the Knative
  software, aimed at people who intend to use the project software
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the Knative OSS project
- **Website:** concerns the mechanics of publishing the documentation, and
  includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate
[criteria] for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help Knative users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

The accompanying [issues] document contains actionable improvements for
inclusion in [project-doc-website]/issues.

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the **[issues] list**.

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
the lexicon of [RFCs][rfc-spec], the changes described here should be understood
as "recommended" or "should" at the strongest, and "optional" or "may" in many
cases. Any "must" or "required" actions are clearly denoted as such, and pertain
to legal requirements such as copyright and licensing issues.

## Project documentation

Knative is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

| Criterion                  | [Rating (1-5)]        |
| -------------------------- | --------------------- |
| Information architecture   | 2 - Needs improvement |
| New user content           | 2 - Needs improvement |
| Content maintainability    | 3 - Meets standards   |
| Content creation processes | 3 - Meets standards   |
| Inclusive language         | 5 - Exemplary         |

### Comments

Project documentation overall is very good. There's room for improvement mostly
around organization and the new user experience.

Following are general comments that don't address specific CNCF criteria.

The project main landing page also serves as the documentation landing page,
mixing marketing and technical information. It's helpful to users if there's a
clear separation between technical documentation and other information. The
technical documentation is goal-driven and should be factual, specific, and
purposeful.

The technical documentation outline in the banner headings is good from a
organizational perspective: Concepts, Tutorial, and Installing, then
instructional information, then reference information. See notes below on the
Left-hand sidebar (LHS) table of contents. Some other notes:

- The "Home" item is unnecessary for the project landing page. By convention the
  upper-left logo links to the site landing page.
- The "Concepts" section is a brief introduction. Instead, it should contain a
  complete technical overview that's accessible to a new user.
- "Installing" does a good job of providing complete installation instructions
  for all user roles. Some additional "road signs" would help to guide users to
  the correct installation for their role, OS, and so on.
- "Serving" and "Eventing" organize the instructional information by functional
  component, and by user role within the component. The alternative is to flip
  this and organize by user role first:
  - Admin Guide
    - Eventing
    - Serving
  - Developer Guide
    - Eventing
    - Serving
- Knative CLI - The title implies a dedicated Knative CLI. There are two Knative
  CLIs documented here, `kn` and `func`. As well, `kubectl` is the first CLI
  documented on the page.

The `kn` CLI is documented in the knative/client repo, with a link from here.
The reference to the repo-based documentation is OK, but why is the not
documented here? Its installation is documented on the site; this seems
inconsistent.

**_Table of contents_**

The table of contents (TOC) in the LHS is hard to navigate. Some issues:

1.  The LHS contains only one technical documentation section at a time (see
    previous comment about the banner menu). It's more usual for the LHS to
    contain the entire TOC and to not change between pages (except for expanding
    and collapsing headings).
2.  The expand/collapse items in the TOC are navigational only; they do not
    bring up information pages. This isn't uncommon, but it's tedious to
    navigate multi-level topics. It's also less efficient than displaying the
    overview or introduction with the top-level entry.
3.  There are singleton sub-headings in the TOC. For example, see [Concepts >
    Resources > Serving Resources > Revisions]
    (https://knative.dev/development/concepts/serving-resources/revisions/).
    Especially with the navigation-only expand/collapse items, these represent
    extra mouse clicks for the user with no added benefit.
4.  There are multiple entry points to the same documentation in the TOC. _And_
    there are duplicate information sections. For example: Installing > Install
    the Knative CLI sends you to the `Knative CLI` page. This completely changes
    the left-hand TOC but the banner menu is not set up to highlight
    `Knative CLI`, so are no cues as to where you were just teleported
    (violating the [principle of least astonishment]
    (https://en.wikipedia.org/wiki/Principle_of_least_astonishment)).

**_New user experience_**

The blurb under "Need to know more?" on the landing page sounds like it's going
to an information resource; the button says "Explore Knative". Instead it goes
to the Quickstart tutorials. It sounds more like it should go to "Serving
Architecture".

**_Graphics_**

In many places, large graphics are placed before any explanatory text. Also,
many graphics, especially in the E2E tutorial (incidentally, "end-to-end" should
be spelled out), provide no information but serve to distract, clutter, and take
up valuable screen space.

**_Headings and titles_**

Tasks are for the most part well named using appropriate verbs.

TOC titles that don't agree with page titles confuse the reader.

The following subsections address individual items in the CNCF criteria for
Project Documentation.

#### Information architecture

**_Is there high level conceptual content?_**

The "Concepts" document at the top of the website is a brief introduction to two
of the components of Knative. It does not introduce the overall architecture or
explain how it works.

There is other high-level conceptual information about Knative scattered
throughout the website. The existing conceptual information seems to assume that
you're already familiar with Kubernetes and with the problems that Knative is
intended to solve.

**_Is every product feature documented?_**

The documentation seems a little behind being feature-complete, based on open
Github issues requesting feature documentation. See for example issues
[6216](https://github.com/knative/docs/issues/6216) and
[5331](https://github.com/knative/docs/issues/5331).

Every component section (Eventing, Serving) is organized differently. This
requires extra cognitive work from the readers.

**_Does the documentation define all user roles (personas) for the product?_**

The "Audiences information" in Community is a good description of user roles.
This information is reflected in subsections of the "Eventing" and "Serving"
sections in the division between Developer and Admin topics.

**_Are there instructions (tasks, tutorials) documented for features?_**

Tasks are documented for most features.

**_Are there instructions for all major use cases for each user role?_**

Tasks are covered for different user roles; it's unknown whether this coverage
is complete.

**_Are tasks organized by user role and use case?_**

The documentation is organized by the key components. Tasks for each component
seem to be present, but could be more clearly written and better labeled.

**_Does instructional content demonstrate atomicity_** Are individual tasks
clearly named according to their goals?

For the most part tasks seem separate and well named.

**_Are tasks written as numbered step-by-step instructions?_**

Tasks are broken down into steps. In most cases steps are not numbered. Some
procedures have embedded subtasks. Numbering of tasks and subtasks is
inconsistent.

**_Are task descriptions in headings and the TOC described with a verb
phrase?_**

Most task headings accurately describe the task.

**_Is the documentation free of features that lack task documentation?_**

Task documentation seems to exist for key features. It is sometimes difficult to
locate.

**_Is the “happy path” — the most common use case — documented?_**

The "Happy Path" seems to be building and running a simple service using all
three of the Knative components. This is documented in the "E2E" tutorial.

**_Is there a clear escalation path for users needing more help?_**

In general, Knative help and community support are strong throughout the
documentation and repositories. Troubleshooting could provide clearer
instructions and be more closely linked to the tasks it supports. Readers will
probably eventually find their way to help through the community via a Slack
channel.

There is a FAQ for Eventing. It contains only one question.

There are troubleshooting instructions for various components within the
documentation. The troubleshooting steps are little more than command examples
showing the non-exception case output. In some cases the output is cryptic and
it's not clear what to do.

**_If the product exposes an API, is there a complete reference?_**

There is a reference for the Eventing API. It contains no explanatory or
introductory text, and many descriptions of functions and fields are missing,
rudimentary, or tautological.

**_If the product has CLIs, are there complete references?_**

There are references for the two CLIs, `kn` and `func`. The references are
contained in their respective repos, not in the technical documentation.

**_Is content up to date and accurate?_**

The content seems up to date based on the versioning and release mechanisms.

**_Does the doc separate conceptual, instructional, and reference info?_**

Individual topics are separated by information type.

#### New user content

**\*Is “getting started” clearly labeled?** (“Getting started”, “Installation”,
“First steps”, or the equivalent.)

There is no clearly labeled "Getting Started" page. There is a "Quickstart"
tutorial, with an accompanying plugin, that serves (primarily) as a beginner
getting-started procedure.

**_Is there a “getting started” path for all user roles?_**

The "Quickstart" tutorial does not discuss roles. It acknowledges that the
exercise does a simplified local installation and directs the reader to YAML or
Operator-based installs for production server installation.

**_Is installation documented step-by-step?_**

Installation is thoroughly documented. Instructions are step-by-step and well
organized. That said, I could not install using the Quickstart tutorial because
I ran into an error that was not documented. the Install pages link to the
Release Notes pages for binary downloads. This was confusing. Downloading the
binary from the release page is not straightforward. The download links are
under "Assets", far down the page.

**_Are different types of installation documented if necessary?_** (development,
test, production)

The Quickstart tutorial documents a local install. Other (server) installs are
documented in the Install section.

**_If needed, are multiple OSes documented?_**

Installs for multiple OSes are documented implicitly (for example, the install
binaries are characteristic of their respective OSes). A discussion of OSes up
front in the prerequisite section would be appropriate.

**_Do users know where to go after reading the getting started guide?_**

Next steps are documented at the end of the quickstart and some other sections.

**_Is new user content clearly signposted on the site’s homepage?_**

There is no clearly labeled new user content available from the landing page.
The closest is the Quickstart tutorial.

**_Is there easily copy-paste sample code or other example content?_**

There are code samples available in "Code samples", organized by Knative
component.

#### Content maintainability and site mechanics

**_Is your documentation searchable?_**

The documentation is searchable. The Search function does not truncate results.
For example, the "Puppet" entry when searching "getting started" displays the
page's entire 900 words.

**_Are you planning for localization/internationalization?_**

**_Is a localization framework present?_**

Apparently not. There is no evident localization or mechanism for localization.

**_Do you have a clearly documented method for versioning your content?_**

Content is versioned up to the most recent release using branches in the
knative/docs Github repo. The process is documented in the contribute-to-docs
directory in the repo. The version drop-down contains the latest three releases
plus pre-release. No older archived versions are offered on the site.

**_Is release-specific information documented in release notes?_**

The repo contains appropriate release notes.

**_Is the documentation free of duplicate sections of information?_**

Duplicated information is present in the doc. It is deliberately included from a
collection of reusable doc snippets.

**_Do informational graphics add value by providing information?_**

Graphics are large and contain little new information, especially in the E2E
tutorial. Some of the conceptual diagrams (component diagrams, flow charts) are
helpful.

**_Will graphics require modifications?_** For example, due to software changes,
GUI updates, or translation?

Graphics are unlikely to require frequent updates; for example, there are no
screen shots.

#### Content creation processes

**_Is there a clearly documented contribution process for documentation?_**

The documentation contribution process is well documented in the repo.

**_Does the code release process include documentation creation & updates?_**

Documentation releases are controlled by the release process. The contribution
process documents how to update previous versions of the documentation, if
necessary.

**_Who reviews and approves documentation pull requests?_**

**_Does the website have a clear owner/maintainer?_**

Review and approval of documentation releases is role-based and is controlled by
the OWNERS and OWNER_ALIASES files in the repo. A steering committee is among
the leadership identified in these files.

#### Inclusive language

**_Are there customer-facing utilities, endpoints, class names, or features_**
that use non-recommended words as documented by the Inclusive Naming Initiative
website?

The documentation contains few non-recommended words as documented by the
[Inclusive Naming Initiative](https://inclusivenaming.org) website.

**_Does the project use language like "simple", "easy", etc.?_**

The Knative documentation avoids ableist language. The Knative style guide
explicitly discourages language that assumes a level of understanding ("just",
"easily", "simply").

### Recommendations

#### Organization

The simplest solution to untangling the documentation from the landing page is
probably to:

- Add a "Documentation" tab on the right alongside "Blog," "About," and
  "Community"
- Move the tech docs items from the banner to the left-hand sidebar (LHS)

Other suggestions:

- Remove the "Home" item.
- Write a comprehensive "Concepts" section using conceptual material from the
  rest of the documentation.
- Rename "Tutorial" to "Tutorials".
- Add navigational cues to the "Installation" section to better guide users to
  the right instructions and downloads for their user role, OS, and use case.
- Rename "Developer Topics" and "Admin Topics" to "Developer Tasks" and "Admin
  Tasks" to cue readers. These are effectively user guides and need to be
  recognizable as such by users.
- Rename Eventing - "Knative Eventing - The Event-driven application platform
  for Kubernetes". This is technical documentation. The marketing stuff goes
  elsewhere.
- In the "Eventing" section, move "Event Mesh" under "Concepts".
- Rename "Knative CLI" to "CLI tools". Include the `kn` CLI documentation on the
  documentation site.
- In "Reference": Rewrite at the top of the page: "This page describes Knative
  security and disclosure information." to "This page describes how to validate
  code and report security vulnerabilities in Knative. For a complete
  description of the Knative threat model, see the [Knative security working
  group repo]
  (https://github.com/knative/community/blob/main/working-groups/security/threat-model.md)."
  Then change headings: "Verifying code signature" and "Reporting a
  vulnerability."
- Move Release Notes out of Reference to be a top-level TOC item.
- Make the "Explore Knative" button the landing page link to the conceptual
  overview. Or, change the button label to "Quick Start".
- Remove the Eventing FAQ. Its (single) response is documented elsewhere.
- Add a glossary in the Reference section.
- Reevaluate each graphic on the site. Is it adding value? If not, eliminate it.
  Does it take up so much page space that it forces unnecessary scrolling?
  Reduce the size. Especially in the E2E tutorial, get rid of the large
  graphics. Their only purpose here is to cue the user to the type of task. Make
  them 32x32 icons, or get rid of them. In the text, tell the user what the
  graphic is before they see it, and make sure the picture is adding value, or
  else delete it.
- Make TOC titles agree with page titles. Rename "About" in the banner to
  something more descriptive: "Why Knative?", "Testimonials and Case Studies",
  or "Endorsements".
- Revise to conform to the style guide:
  - Rewrite "please" requests to straightforward instructions. For example:
    "Please see XYZ" to "See XYZ".
  - Remove "About" from headings. For example: "About the Prometheus Stack" to
    "The Prometheus Stack".
  - Spell out words to avoid abbreviations. For example: Replace "E2E" with "end
    to end".

#### Information architecture

**_Conceptual overview_**

Update the "Concepts" section to be a complete overview of the Knative system.
Start with an explanation of Knative's purpose that's understandable to new
users and to readers who are only passingly familiar with containerized
software.

Include a complete explanation of Knative's components and how they're related.
This is a good short explanation of the Knative components (though a little
marketing-ish) that's on the CNCF website:

Knative is a developer-focused serverless application layer which is a great
complement to the existing Kubernetes application constructs. Knative consists
of three components: an HTTP-triggered autoscaling container runtime called
“Knative Serving”, a CloudEvents-over-HTTP asynchronous routing layer called
“Knative Eventing”, and a developer-focused function framework which leverages
the Serving and Eventing components, called "Knative Functions".

None of the instructional material is going to make sense without an
understanding of the Knative architecture.

Some specifics:

Rewrite: "The documentation in this section explains commonly referenced Knative
concepts and abstractions, and helps to provide you with a better understanding
of how Knative works." as "This documentation explains what Knative is for and
how it works."

**_Escalation path_**

Expand or eliminate the FAQ. My preference is to eliminate it.

Organize the Troubleshooting procedures by symptom (within component). Or at
least expand the explanations in the Troubleshooting sections to describe what
each command is intended to diagnose.

Expand the Eventing API reference to include meaningful explanations of every
field and function. Add a short introduction to the API reference.

**_New user content_**

Add a "Getting Started" page at the top level of the documentation. This page
should map a reader's user role and goals to content that helps them install,
evaluate, or learn about the product, depending on their goal. For example,
direct new users to the Quickstart tutorial, evaluators or potential buyers to
the conceptual overview, and so on.

Currently a user who clicks in the install section to get an install file
download has to scroll through a lot of release notes before they reach the
downloads list. Move the install download links to the top of the Release Notes
or clearly link to them from the top of the Release Notes. Or, put them on their
own Downloads page.

**_Content maintainability & site mechanics_**

Configure the Search to truncate results after 100 characters or so. Displaying
the entire page text of each result hinders users' ability to find their result.

Address localization. If you have no intention to localize the documentation,
say so in the introduction.

## Contributor documentation

Knative is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

| Criterion                                 | [Rating (1-5)]                 |
| ----------------------------------------- | ------------------------------ |
| Communication methods documented          | 5 - Exemplary                  |
| Beginner friendly issue backlog           | 3 - Meets standards            |
| “New contributor” getting started content | 3 - Meets standards            |
| Project governance documentation          | 4 - Meets or exceeds standards |

### Comments

#### Communication methods documented

**_Is there a Slack/Discord or equivalent community linked from your website?_**

**_Is there a direct link to your GitHub project or repository?_**

**_Can users find and join periodic project meetings, if applicable?_**

**_Are mailing lists documented?_**

The site lists community resources that include:

- A number of general and subtopic-specific Slack channels
- A link to the Github doc repository
- An up-to-date published meeting schedule
- A Stack Overflow topic
- A Google Groups mailing list

#### Beginner friendly issue backlog

**_Are docs issues well-triaged?_**

Doc issues are well triaged; there are tags classifying changes according to
size and status.

**_Is there a clearly marked way for new contributors to make contributions?_**
(A “good first issue” label?)

There is a "good first issue" label in the issues list.

**_Are issues well-documented (i.e., more than just a title)?_**

Issue descriptions are uneven. Many issues are well documented, but some lack
basic information.

**_Are issues maintained for staleness?_**

There is a archiving bot for stale doc issues, but there are issues as old as
four years in the repo.

#### New contributor getting started content

**_Do you have a community repository or section on your website?_**

There is a separate [community repo](https://github.com/knative/community) in
the Knative project.

**_Is there a document welcoming new contributors?_** And documenting a first
contribution process?

There is ample documentation for contributors but no documentation specifically
for new contributors.

**_Can new users find where to get help?_**

There are ample resources for new users to get support from the community.

#### Project governance documentation

**_Is project governance clearly documented?_**

Project
[governance](https://github.com/knative/community/blob/main/GOVERNANCE.md) is
documented in the [community repo](https://github.com/knative/community) in the
Knative project.

### Recommendations

No recommendations.

#### Communication methods documented

#### Beginner friendly issue backlog

#### New contributor getting started content

#### Project governance documentation

## Website and infrastructure

> **TBD**

Knative is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

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
| Mobile-first plan & impl.                   | [rating (1-5)] |
| HTTPS access & HTTP redirect                | [rating (1-5)] |
| Google Analytics 4 for production only      | [rating (1-5)] |
| Indexing allowed for production server only | [rating (1-5)] |
| Intra-site / local search                   | [rating (1-5)] |
| Account custodians are documented           | [rating (1-5)] |

### Comments

#### Single-source requirement

The project website and documentation are contained in a single repo.

Every code repo in the project has its own `docs` folder.

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
| **Project doc**: hosting      | Hosted directly                                         | Hosted directly                           |
| **Project doc**: user docs    | Comprehensive, addressing most stakeholder needs        | Fully addresses needs of key stakeholders |

<!-- markdownlint-enable line-length -->

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
- Is the website’s typography clean and well-suited for reading?

Footer: "Knative is a Cloud Native Computing Foundation incubation project".
Should be "incubating".

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

#### Maintenance planning

Website maintenance is an important part of project success, especially when
project maintainers aren’t web developers.

We evaluate on the following:

- Is your website tooling well supported by the community (i.e., Hugo with the
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
[project-doc-website]: https://knative.dev/docs/
[project-website]: https://knative.dev/docs/
[Rating (1-5)]: #rating-values
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[website guidelines]: ../../website-guidelines-checklist.md
