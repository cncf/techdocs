---
title: LitmusChaos Documentation Analysis
tags: LitmusChaos
created: 2024-08-02
modified: 2024-10-09
author: Dave Welsch (@dwelsch-esi)
---

<!-- markdownlint-enable line-length -->
<!-- cSpell:ignore Docusaurus rfc OSes pastable impl servicedesk md -->

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document analyzes the effectiveness and completeness of the
[LitmusChaos][project-website] open source software (OSS) project's
documentation and website. It is funded by the CNCF Foundation as part of its
overall effort to incubate, grow, and graduate open source cloud native software
projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

### Purpose

This document was written to analyze the current state of LitmusChaos
documentation. It aims to provide project leaders with an informed understanding
of potential problems in current project documentation. A second
[implementation] document outlines an actionable plan for improvement. A third
document is an [issues list] of issues to be added to the project documentation repository.
These issues can be taken up by contributors to improve the documentation.

This document:

- Analyzes the current LitmusChaos technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

### Scope of analysis

The documentation discussed here includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the
LitmusChaos GitHub repository.

The LitmusChaos website is generated using a Next/React framework. It is stored
on the LitmusChaos GitHub repo.

The documentation page is written in Markdown and is compiled using the
Docusaurus static site generator. The site's code is stored on the LitmusChaos
GitHub repo.

#### In scope

- Website: <https://litmuschaos.io/>
- Website repo: <https://github.com/litmuschaos/litmus-website-2>
- Documentation repo: <https://github.com/litmuschaos/litmus-docs/>
- Main project repo (for governance and contributor docs):
  <https://github.com/litmuschaos/litmus>

#### Out of scope

- Other LitmusChaos repos: <https://github.com/litmuschaos/>\*
- Litmus Software (a completely unrelated company and product based in
  Massachusetts): https://litmus.com/*

### How this document is organized

This document is divided into three sections that represent three major areas of
concern:

- **Project documentation:** concerns documentation for users of the LitmusChaos
  software, aimed at people who intend to use the project software
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the LitmusChaos OSS project
- **Website:** concerns the mechanics of publishing the documentation, and
  includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate
[criteria] for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help LitmusChaos users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

The accompanying [implementation] document breaks the recommendations down into
concrete actions that can be implemented by project contributors. Its focus is
on drilling down to specific, achievable work that can be completed in
constrained blocks of time. Ultimately, the implementation items are decomposed
into a series of [issues] and entered as
[GitHub issues](https://github.com/litmuschaos/litmus-docs/issues).

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the **[implementation] plan** and **[issues] list**.

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

LitmusChaos is an **incubating** project of CNCF, applying to be a **graduated**
project. This means that the project should have [_very high_][criteria]
standards for documentation.

| Criterion                  |                      |
| -------------------------- | -------------------- |
| Information architecture   | 2. Needs improvement |
| New user content           | 2. Needs improvement |
| Content maintainability    | 2. Needs improvement |
| Content creation processes | 2. Needs improvement |
| Inclusive language         | 2. Needs improvement |

### Comments

The following sections contain brief assessments of each element of the Project
Documentation rubric.

Organization of the [doc page](https://docs.litmuschaos.io/) at the top level is
unconventional. The Documentation tab in the banner menu has several graphically
displayed options. The main one leads to a documentation main page that has
tiled options organized in groups:

- Explore using Litmus
- Litmus for Advanced Users
- More Resources

There is also a Versions drop-down on the doc main page. Selecting the most
recent version (3.91) brings up the "What is Litmus" page (the first page in the
first ToC heading).

#### Information architecture

There is high level, conceptual “About” content. This content is split between
at least two sections, "Introduction" and "Concepts".

The main documentation site seems feature-complete. However, the documentation
resides on several websites. The tutorials have their own site

The documentation for the [API][api-site] is on its own website and is
maintained from the main project repository. The API documentation is
incomplete, containing very sparse semantic information about the API endpoints,
objects, and actions.

There are step-by-step instructions for most important functionality, including
installation, configuration, and running a "first-time" experiment.

- Formatting and organization of the instructions is inconsistent.
- Some minor functionality does not have complete step-by-step instructions. For
  example, a link in the instructions to connect an external delegate in
  _Schedule a chaos scenario_ point to the `litmusctl` reference. While
  relevant, this is not the same as explicit instructions for connecting to a
  delegate.

<!-- markdownlint-enable line-length -->

The "happy path" seems well documented, but disorganized. This includes a basic
Getting Started workflow ("Installation" and "Run Your First Chaos Scenario")
and components of setting up and using a test program.

The Overview to the User Guide section provides minimal guidance. Instead, it
presents a bucket of tasks under the apparent assumption that the user will know
what to do with them. The individual tasks are atomic and well documented.

There are escalation paths in the documentation, including a FAQ, a
Troubleshooting section, and a link to the
[Issues](https://github.com/litmuschaos/litmus/issues) section in the project
main GitHub repo. There is also a Community section in the table of contents
that describes the Slack channel, community meetings, events, and so on.

The content seems up to date. There is a version selection drop-down that
contains the latest release of the product.

#### New user content

New users will be confused as to where to start. There are at least four
"getting started" links on the website.

- There is a "Get Started" button in the product website menu that links to the
  GitHub repo.
- There is a clearly labeled "Getting Started" button on the main documentation
  page that clicks through to the "What is Litmus?" introduction page.
- There is also a "Getting Started" heading in the table of contents. This
  contains "Resources" (first) and "Installation" (second).
- There is a completely separate tutorials website (based on a separate GitHub
  repo) that contains a "getting started" tutorial.

Installation is documented in both self-hosted and hosted (beta) forms.
Self-hosted installation is further divided into Helm- and YAML-based (kubectl)
processes. The last step of the kubectl install process has two options, basic
and advanced. The advanced option takes the user to yet another install page,
"ChaosCenter Advanced Installation".

The advanced install page is a duplicate of the main install page, with
duplicate Helm install instructions and verification procedure; the only
difference is a few lines in the kubectl install procedure. The duplication is
confusing and seems unnecessary.

Installation of the CLI (litmusctl) is documented for Mac and Windows. No
explicit mention is made of what OS the standalone server runs on, or if
litmusctl can be run on Linux.

The various installation and setup pages each have a "Learn more" section at the
end containing several links to next steps. The various paths available are not
explained and overall do not constitute a getting-started workflow.

Installation CLI commands and config file sample contents are provided where
appropriate and are presented in copyable text window widgets. Apparently these
are inserted by `embedmd`.

#### Content maintainability & site mechanics

The documentation is searchable. However, search does not seem to be limited to
the current version. For example, searching on "Advanced Installation" brings up
results for the current (3.91) version, the previous (3.90) version, and the
upcoming (3.92) version.

Documentation is entirely in English, and in fact there is an
[open issue](https://github.com/litmuschaos/litmus-docs/issues/271) to add
support for other languages.

Previous versions of the documentation are archived and are available on the
website via a pull-down menu. There is an automatic versioning command
documented in the documentation repo.

#### Content creation processes

The documentation build process is documented in README files on the doc GitHub
repo; it consists of brief descriptions of the commands needed to build the
documentation locally. There don't seem to be deployment instructions.
Instructions for contributing doc changes are in the CONTRIBUTING.md file in the
docs repo.

There is nothing in the main release process about documentation. There is a
wikiin the main project repo. One of the things it contains is a list of SIGs
and one of the SIGs is documentation. However, the SIG document has not been
edited since early 2021.

There are documentation maintainers and reviewers listed in the main repo
MAINTAINERS.md file.

#### Inclusive language

There are a few examples of non-recommended words as documented by the
[Inclusive Naming Initiative](https://inclusivenaming.org) website. Some of
these cannot be summarily changed because they appear in pathnames, commands,
and as parameter names.

The project also uses terms like "simple", "easy", and so on in what could be
considered ableist context in a few instances.

### Recommendations

#### Information architecture

Consolidate the conceptual information into a single technical overview.

Create and maintain a site map that describes the components of the
documentation set. Consolidate the documentation so that, to the extent
possible, it is maintained in a single repo.

Add semantic information and examples to the API reference. Current API
documentation is mostly skeletal, containing no guidance on how to use the API
elements.

Write tasks and procedures as step-by-step instructions. Ensure that tasks are
complete. For complex procedures, it's OK to link to sub-procedures or (usually
better) put preliminary tasks in the Prerequisites section.

Ensure that installation, setup, and verification have a clear, linked path for
each user role. See [New user content](#New-user-content) below.

Organize the User Guide by task. Some of the tasks will align with the current
function-based organization, but some will not. If necessary, split it into two
or more guides, one for each distinct user role. Describe the use case for each
user role at the top of the guide.

#### New user content

Make all "Getting Started" links point to the same place. This should be a
landing page that describes the main user roles or user scenarios and links to a
separate getting-started workflow for each one. For example, self-hosted and
hosted installs are probably appropriate for developer and admin user roles,
respectively. Explain the usage scenario at the top of each procedure.

Rather than duplicating information in different scenarios (basic vs. advanced
install, for example), write single sub-procedures and link to them from the
main procedure or include them as prereqs.

Explicitly call out the operating system for every install procedure.

Rename "Learn more" at the end of procedures and tasks to "Next steps". Explain
who would want to do each item and why in a short paragraph.

#### Content maintainability & site mechanics

Limit on-site search to the current version of the documentation.

#### Content creation processes

Add documentation as a step in the project release process. Link to the
CONTRIBUTING.md doc in the docs repo.

Update the wiki in the main project repo to indicate that the documentation SIG
is no longer active, and provide a link so that users can find monthly meetings
or whatever the closest replacement is.

Ensure that the documentation maintainers listed in the MAINTAINERS.md file in
the main project repo are up to date.

#### Inclusive language

Audit the documentation and replace instances of non-recommended words from the
[Inclusive Naming Initiative](https://inclusivenaming.org) website, especially
tier 1 and tier 2 words, where possible. Similarly, audit the site for words and
phrases like "simple", "easy", and "just have to ..." where they imply actions
that might be difficult for disabled users.

## Contributor documentation

LitmusChaos is an **incubating** project of CNCF, applying to be a **graduated**
project. This means that the project should have [_very high_][criteria]
standards for documentation.

| Criterion                                 |                               |
| ----------------------------------------- | ----------------------------- |
| Communication methods documented          | 4. Meets or exceeds standards |
| Beginner friendly issue backlog           | 2. Needs improvement          |
| “New contributor” getting started content | 3. Meets standards            |
| Project governance documentation          | 3. Meets standards            |

### Comments

The following sections contain brief assessments of each element of the
Contributor Documentation rubric.

#### Communication methods documented

There is a link to a
[community resources page](https://litmuschaos.io/community) in the website
banner menu. There are links to the Slack channel in the banner menu and the
footer of the documentation pages.

Likewise, there are links to the GitHub repositories, especially the main
project repo.

Monthly community meetings are documented in the main GitHub repo README.md
file. Interested parties can fill out a form to be invited to the meeting.

There is a Meetup group for Litmus Chaos, apparently based in Bangalore, India.
Besides local events, there are virtual events scheduled in the group.

#### Beginner friendly issue backlog

Documentation issues seem to be triaged by maintainers in a timely manner.

There is a "good first issue" label for documentation issues, though it has been
applied to only one currently open issue.

Quality of documentation issues is inconsistent. Some are thoroughly described,
some are skeletal.

There does not seem to be a process for retiring stale issues. Of the 21 issues
in the doc repo at the time of this writing, 16 are over two years old.

#### New contributor getting started content

There is a clearly marked Community link on the documentation website.

The CONTRIBUTING.md file in the documentation repo explains how to start
contributing documentation and invites newcomers to community meetings and the
SIG group. This information seems out of date, however, and the SIG group seems
to have gone dormant.

New contributors probably end up going to the Litmus Slack channel and asking
for help getting started.

#### Project governance documentation

Project governance is documented in the GOVERNANCE.md document on the main
project GitHub repository. The document includes maintainer responsibilities and
reference to the project's Code of Conduct. The document references sub-project
repositories.

The documentation repository does not have its own explicit governance document.
Its CONTRIBUTING.md file does not address governance.

### Recommendations

#### Communication methods documented

No recommendations.

#### Beginner friendly issue backlog

Make sure documentation issues are fully described. Flag and retire stale
issues.

#### New contributor getting started content

Update the CONTRIBUTING.md file to reflect current community practices.

#### Project governance documentation

No recommendations.

## Website and infrastructure

LitmusChaos is an **incubating** project of CNCF, applying to be a **graduated**
project. This means that the project should have [_very high_][criteria]
standards for documentation.

| Criterion                                   |                               |
| ------------------------------------------- | ----------------------------- |
| Single-source for all files                 | 2. Needs improvement          |
| Meets min website req. (for maturity level) | 2. Needs improvement          |
| Usability, accessibility, and design        | 2. Needs improvement          |
| Branding and design                         | 2. Needs improvement          |
| Case studies/social proof                   | 4. Meets or exceeds standards |
| SEO, Analytics, and site-local search       | 2. Needs improvement          |
| Maintenance planning                        | 2. Needs improvement          |
| A11y plan & implementation                  | 1. Not present                |
| Mobile-first plan & impl.                   | 4. Meets or exceeds standards |
| HTTPS access & HTTP redirect                | 4. Meets or exceeds standards |
| Google Analytics 4 for production only      | 1. Not present                |
| Indexing allowed for production server only | 1. Not present                |
| Intra-site / local search                   | 3. Meets standards            |
| Account custodians are documented           | 2. Needs improvement          |

### Comments

The Litmus web presence seems uncoordinated and sporadically maintained.

The following sections contain brief assessments of each element of the Website
and documentation infrastructure rubric.

#### Single-source requirement

Litmus has separate websites for its documentation and for its project website.

The project website has been replaced:

The [new project repo](https://github.com/litmuschaos/litmus-website-2) seems to
be currently maintained and was last touched in May of 2024.

An obsolete website named "website-litmuschaos: is archived at the same GitHub
URL and was last updated three years ago. The archived repo is listed on the
project page. Aside from a "Public archive" badge in the repo directory, there
is no indication that the old website repo is inactive, nor is there a link in
the archive to the current repo.

There is a dedicated repository for the LitmusChaos documentation. However, the
following documentation is maintained separately, in different locations:

- The **tutorials** do not seem to have been provided beyond release 2. The menu
  item for Tutorials is missing from v3.0 and later. The tutorial directory and
  repository are separate from those for the main documentation site.
- The **API** for the control center is separate from the main documentation and
  seems to be served from GitHub.

The API seems to be documented from the main code repo. There is no hint that
this is the API documentation (unless you're aware that the `mkdocs` directory
is for the API). There does not seem to be a documented strategy for updating
the API or linking the API to the documentation website.

#### Minimal website requirements

Listed here are the minimal website requirements for projects at graduated
[maturity level][maturity-level].

<!-- markdownlint-disable line-length -->

| Criterion                     | Graduated Requirement                     | Met? |
| ----------------------------- | ----------------------------------------- | ---- |
| [Website guidelines]          | All guidelines satisfied                  | No   |
| **Docs analysis** (this)      | All follow-up actions addressed           | No   |
| **Project doc**: stakeholders | All stakeholder need identified           | No   |
| **Project doc**: hosting      | Hosted directly                           | TODO |
| **Project doc**: user docs    | Fully addresses needs of key stakeholders | No   |

[maturity-level]:
  https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations

<!-- markdownlint-enable line-length -->

#### Usability, accessibility and devices

**Mobile**:

The website is very usable from mobile.

- Pages are readable
- Menus and site search work
- The table of contents is available in a hamburger menu

A mobile-first design probably does not make sense for this project, but the
mobile version works very well.

**Accessibility**:

Lavender and light blue text might not have enough contrast for vision-impaired
readers.

Keyboard control of website features is awkward and does not work as labeled.
For example, cmd-K does not enable search, at least in MacOS.

There is no text-to-speech option available on the site.

#### Branding and design

Branding seems inconsistent.

There is a recognizable logo and color scheme for most of the sites. However,
sites that are built from other repos (the API, the experiment library) have
different color schemes and font choices. For example, the font used in the logo
is different between the project website and the documentation website.

Page design uses different layouts on different pages. The documentation layout
is a single column, with graphics in-line, which is appropriate. The project
landing page, the API page, and the tutorial page all use different layouts.

The brand's base font is a legible sans-serif font. The tutorial site landing
page uses similar fonts but the tutorials themselves have a completely different
look and feel, with a serif font and an outdated left-justified single frame
presentation.

Several of the project pages, including the blog and the ChaosHub page, use a
tiled layout. However, the tiles are of very different sizes so the feel of
these pages is not consistent.

Many of the graphical elements on the project landing page seem like they should
link to further information, but don't. For example, the list of features
contains a tile with a link to "View more features", but the specific feature
tiles on the page ("ChaosHub", "Litmus Experiments") are not clickable.

#### Case studies/social proof

There is a page of case studies available from the Community drop-down in the
main page banner menu. It contains links to six case studies.

There is a carousel of testimonials, with links to four case studies, on the
project landing page; however, it is far down the page.

There is a blog for Litmus, available from the banner menu on the project
website. The blog does not seem active. The last post is from about a year ago,
and there is at least one broken link.

An announcement features prominently in the Community drop-down from the banner
menu. The announcement is about Litmus becoming a CNCF incubator project and
dates from January of 2022.

There is a carousel of community links far down the project landing page. Two of
the links are to videos. The main project contains a list of videos in the
README.md file.

There is a Litmus Chaos channel on YouTube featuring how-to videos and
recordings of community meetings. Only a few community meetings are posted;
either the monthly meeting schedule is not being kept or the recordings are not
being posted regularly.

There is a logo wall of 70 organizations that use Litmus on the project landing
page. None of the logos link to anything.

#### SEO, Analytics and site-local search

- Analytics:
  - Analytics is not enabled for the site.
- Is site indexing supported for the production server, while disabled for
  website previews and builds for non-default branches?
- Local intra-site search is not available from the website, though it is
  available on the documentation subsite.
- The current custodian(s) of the following accounts are not yet clearly
  documented: analytics, Google Search Console, site-search (such as Google CSE
  or Algolia)

#### Maintenance planning

As far as I can tell, here is the website tooling for each of the various Litmus
websites:

<!-- markdownlint-disable line-length -->

| Site                                                  | Repository                                               | Tool or Stack            |
|-------------------------------------------------------|----------------------------------------------------------|--------------------------|
| [Project website](https://litmuschaos.io/)            | https://github.com/litmuschaos/litmus-website-2          | React/Next/Tailwind/SCSS |
| [Documentation website](https://docs.litmuschaos.io/) | https://github.com/litmuschaos/litmus-docs/              | Docusaurus/Netlify       |
| Tutorials                                             | https://github.com/litmuschaos/tutorials                 | Google Codelab?          |
| [APIs][api-site]                                      | https://github.com/litmuschaos/litmus/tree/master/mkdocs | MkDocs                   |

<!-- markdownlint-enable line-length -->

Instructions for maintaining the website are given in the CONTRIBUTORS.md file
in the doc repo. There seems to be an active mentorship program for the project,
but not necessarily for documentation.

The site build time is probably reasonable, though maintaining separate builds
for the site, docs, tutorials, and the API adds complexity and takes time.

Site maintainers presumably have adequate permissions to clone the doc repo(s)
and submit PRs.

#### Other

All the Litmus Chaos sites use HTTPS. All the Litmus sites automatically
redirect HTTP to HTTPS.

### Recommendations

#### Single-source requirement

Combine all the website pages into a single repo. Ideally, this includes:

- The project website
- The documentation
- The API
- Tutorials

Use a single website technology stack for the entire site.

If it's not possible to consolidate these sites immediately, at least document
the satellite repos and provide links to them in the README.md file for the
project website.

#### Minimal website requirements

Update the website to meet the following [Website guidelines]:

- Update notice on the project page to "We are a CNCF Graduated Project" when
  that happens.
- Mention CNCF on the documentation pages, not just the project landing page.
- Include the trademark usage info and link on all pages, not just the project
  landing page.

Describe the project stakeholders (user roles) and direct website users to
documentation specific to each role. It might be that there is only one primary
user role for Litmus, a DevOps or test engineer. If this is so, spell out the
use cases for this user and make sure to direct readers to tasks for each use
case.

#### Usability, accessibility and devices

Consider revising the site look and feel to include more contrasting color
choices.

Either fix the command-K search functionality or remove the command-K icon from
the search input.

#### Branding and design

Audit the look and feel so that the logo, colors, fonts, and layouts are
consistent throughout the project, community, blog, and doc websites.

Consider adding links from the graphic elements on the project landing page.

#### Case studies/social proof

Fix the broken link on the blog page.

Update or remove the CNCF announcement in the banner menu Community drop-down.

#### SEO, Analytics and site-local search

No analytics setup. Recommend adding LitmusChaos to the CNCF Google Analytics
account.

Search is available for documentation, but it doesn't appear available for other
parts of the website (like the blog or community pages.)

#### Maintenance planning

Build all websites from the same repo using the same tech stack. See
[Single-source requirement](#single-source-requirement).

#### Other

No recommendations.

#### References and notes

##### Rating values

The numeric rating values used in this document are as follows:

1. Not present
2. Needs improvement
3. Meets standards
4. Meets or exceeds standards
5. Exemplary

[api-site]: https://litmuschaos.github.io/litmus/graphql/v2.0.0/api.html
[criteria]: ../../docs/analysis/criteria.md
[implementation]: ./litmuschaos-implementation.md
[issues]: ./litmuschaos-implementation.md
[issues list]: ./litmuschaos-implementation.md
[project-website]: https://litmuschaos.io/
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[website guidelines]: ../../docs/website-guidelines-checklist.md
