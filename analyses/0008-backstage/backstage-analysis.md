---
title: Backstage Documentation Analysis
tags: backstage
created: 2023-09-01
modified: 2023-11-28
author: Dave Welsch (@dwelsch-esi)
---

# Introduction

This document analyzes the effectiveness and completeness of the
[Backstage][backstage-io] open source software (OSS) project's documentation and
website. It is funded by the CNCF Foundation as part of its overall effort to
incubate, grow, and graduate open source cloud native software projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

## Purpose

This document was written to analyze the current state of Backstage
documentation. It aims to provide project leaders with an informed understanding
of their project documentation and to outline an actionable plan for
improvement.

This document:

- Analyzes the current Backstage technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

## Scope of analysis

The documentation discussed here includes the entire contents of the website
(which contains the technical docs), as well as documentation for contributors
and users on the Backstage GitHub repository. The analysis does not include
Spotify's Backstage website at https://backstage.spotify.com/.

The Backstage website and documentation are written in Markdown and are compiled
using the Docusaurus static site generator. The site's code is stored on the
Backstage GitHub repo.

**In scope:**

- Website: https://backstage.io
- Documentation: https://backstage.io/docs
- Contributor documentation:
  - https://github.com/backstage/backstage/README.md
  - https://github.com/backstage/backstage/CONTRIBUTING.md
- Website configuration (Docusaurus):
  https://github.com/backstage/backstage/microsite
- Website content: https://github.com/backstage/backstage/docs

**Out of scope:**

- Backstage plugins: https://backstage.spotify.com/

## How this document is organized

This document is divided into three sections that represent three major areas of
concern:

- **Project documentation:** concerns documentation for users of the Backstage
  software, aimed at people who intend to use it
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the Backstage OSS project
- **Website:** concerns the mechanics of publishing the documentation, and
  includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate
[criteria][cncf-doc-criteria] for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help Backstage users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

An accompanying document, [backstage-implementation.md][implementation-doc],
breaks the recommendations down into concrete actions that can be implemented by
project contributors. Its focus is on drilling down to specific, achievable work
that can be completed in constrained blocks of time. Ultimately, the
implementation items should be tracked as a series of Github
[issues][backstage-issues].

## How to use this document

Readers interested only in actionable improvements should skip this document and
read [backstage-implementation.md][implementation-doc].

Readers interested in the current state of the documentation and the reasoning
behind the recommendations should read this document or the section pertaining
to their area of concern:

- [Project documentation][proj-doc]
- [Contributor documentation][contributor-doc]
- [Website and documentation infrrastructure][website]

Examples of CNCF documentation that demonstrates the analysis criteria are
linked from the [Criteria][cncf-doc-criteria] specification.

### Recommendations, requirements, and best practices

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

# Project documentation

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| -------------------------- | --- | --- | --- | --- | --- |
| Information architecture   |     | ✔︎ |     |     |     |
| New user content           |     |     |     | ✔︎ |     |
| Content maintainability    |     |     | ✔︎ |     |     |
| Content creation processes |     |     | ✔︎ |     |     |
| Inclusive language         |     |     |     | ✔︎ |     |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

## Comments: project documentation

Backstage is a platform for organizing and managing software projects. This
complicates the documentation, because it can be difficult to distinguish among
several levels of involvement with Backstage:

1. Use of Backstage as an organizational contributor (coder, DevOp, tech writer)
   to catalog, create, or document software.
2. Administration of a Backstage instance ("app" in Backstage nomenclature),
   including installation, deployment, software upgrades, configuration, and
   customization using plugins.
3. Extending a Backstage app, including writing plugins and modifying existing
   plugins.
4. Modification or extension of the Backstage platform.

This complexity necessitates clear definitions of roles so that use cases can be
documented, indexed, found, and used. The four levels described above suggest
that documentation should be organized under at least four roles:

1. Using Backstage for software development: end user.
2. Installing and maintaining a Backstage app for an organization: Backstage
   admin.
3. Extending a Backstage app: DevOp or internal tooling developer.
4. Extending the Backstage platform: contributing developer.

### Overall Issues

The main issues with the Backstage documentation are:

1. Lack of organization around user roles, and
2. Lack of instructional content that defines tasks for each role and provides
   explicit instructions to accomplish these tasks.

For example, the [Overview][backstage-io-overview] contains valuable high-level
conceptual information, including a list of
[benefits][backstage-io-overview-benefits] to particular user roles (engineering
managers, developers, platform engineers). This demonstrates awareness of user
roles that needs to be extended throughout the documentation.

There are installation and configuration instructions in [Getting
Started][backstage-doc-getting-started]. However:

1. The instructions describe a local installation.
2. The user documentation, for the most part, lacks procedural information.

The following sections contain brief analyses of each element of the Project
Documentation rubric.

### Information architecture

**Conceptual content** is abundant throughout the Backstage documentation. This
is good, because using Backstage effectively requires a thorough understanding
of its information model.

The documentation seems **feature complete**. All software features are
documented.

**Instructional content** is a weakness of the Backstage docs. In many cases,
tasks required of each role are missing, as are instructions for completing
these tasks. Instructional material for the most common use cases (**"happy
path"**) should support learning (tutorials) as well as doing (procedures).
Where instructional content exists, it is often:

- Not aimed at a defined user,
- Not clearly identified as instructional content, or
- Intermingled or confused with reference information (for example, many
  configuration "how-tos" are in the form of a list of YAML properties).

**Escalation** options (FAQs, Troubleshooting docs) exist for most Backstage
functionality. As well, the contributor community provides robust support
(GitHub [issues][backstage-issues] and discussion channels).

**Reference information** exists, including for **APIs**, but is scattered
throughout the documentation.

**Organizing individual pages**: A [survey of the existing
documentation][doc-survey] suggests a general issue with many individual pages:
trying to include too much information on one page. Often a task is mixed with
reference information or with more conceptual information than is necessary to
support the task. Effective documentation focuses on one type of information per
page, especially when presenting instructional content: the page should present
only what information is necessary to do the task, and nothing else. Examples of
information that should be on a different (but linked) page: Explanations of the
task's purpose; command references (except the exact commands needed to complete
the task); and examples, such as config file entries (again, except as
necessary).

It's not clear that the documentation is completely **up to date**, although
[release notes][backstage-doc-rn] exist and are easily findable.

### New user content

**New user** content is present and findable ("**signposted**"), including
**installation** instructions for all applicable **OSes**. However, the [Getting
Started][backstage-doc-getting-started] instructions don't distinguish between
administrator and developer end-user roles.
[Deployment][backstage-doc-deployment] describes various scenarios for
administrators, but doesn't provide end-to-end instructions. There is no clear
workflow **path** after installation.

There is **example content** available, including tutorials for a variety of
tasks and a very nice [demo server][backstage-demo].

### Content maintainability & site mechanics

The documentation is **searchable**. There does not seem to be a
**localization** framework. There doesn't currently seem to be any kind of
localization effort.

There does not seem to be any mechanism for **versioning** documentation
content.

### Content creation processes

The procedures for duplicating the documentation locally and for contributing
documentation are [documented][backstage-microsite] but are [not easily
findable][backstage-doc-contrib].

These procedures are presumably included in any updates to (and subsequent
**release** of) the project code (since the doc is in the same GitHub repo).
**Reviewers and approvers** are presumably the Backstage OSS community at large.
It would be nice if this situation were made clear explicitly.

The website does not have a clear individual **owner or maintainer**.

### Inclusive language

I found no content that uses non-recommended words as documented by the
[Inclusive Naming Initiative][inclusive-naming] website.

The website makes occasional use of words like "simple" and "easy", but avoids
explicitly ableist language.

## Recommendations: project documentation

The following sections contain recommendations for improvements to the Backstage
project documentation. These recommendations are for broad improvements that
would greatly increase documentation effectiveness. For details, see
[Implementation][implementation].

### Clarify user roles and objectives

Any systemic improvement to the Backstage documentation hinges on clearly
defining and documenting user roles. This is a first step in defining any
documentation set, but the nature of Backstage makes it especially important
here.

The example roles given in the [comments][proj-doc-comments] have been carried
over to the [Implementation][implementation] section. Contributors with a
greater understanding of how Backstage is used should feel free to modify this
list if it serves the needs of the project, keeping in mind that the purpose of
the user roles is to organize the task-based documentation.

### Develop instructional documentation

Most of the Backstage documentation seems to have evolved from architecture and
design documentation. This makes it very rich in conceptual material and
reference documentation, but weak in user-oriented instructional documentation.

"Instructional documentation" is a broad category that includes such traditional
documentation artifacts as tutorials; getting started guides; procedural recipes
or "cookbooks"; runbooks; and how-to guides.

For every user role:

**Define use cases**

Define the common use cases for each role. Some typical examples:

_Administrator_: Installation; deployment; configuration; maintenance; upgrades;
extension (plugins); disaster recovery.

_User (developer)_: Development environment setup; Adding an existing element;
creating a new element; creating a template; viewing projects; searching;
creating documentation; CI/CD; deploying; reverting a deployment.

**Write procedures**

For each use case, develop instructional content, including: "happy path"
procedures that can be followed by anyone familiar with the product generally;
examples; troubleshooting guides; and for new users, tutorials.

**Support procedures with conceptual and reference topics**

Much of the existing documentation can and should be re-used when possible.
Existing documentation pages should be analyzed by type of content (this
analysis has already been done; see the [documentation survey][doc-survey]).
Pages should be rewritten so that each page serves one purpose: conceptual,
task, or reference. In some cases this will mean that two pages are extracted
from a single existing page. Conversely, some pages may prove to be redundant.
The new, more focused pages can then be reorganized as described below.

### Reorganize the documentation site

Right now different types of documentation (conceptual/architectural;
instructional; reference) for different user roles are intermixed throughout the
documentation site.

**Organize by role and task**

The site should be reorganized based on an overarching principle of grouping
together documentation needed by a particular user role for a particular set of
tasks. This sounds daunting, but it's the schema behind a traditional developer
documentation suite, which can be used as a model. For an example of such a doc
suite, see [this blog post][esi-doc-suite]. Or [this one][esi-doc-spec] on how
to think about a doc specification. [This survey of the existing Backstage doc
pages][doc-survey] suggests where each page might fit if the doc were
reorganized in this manner.

**Provide adequate navigation signals**

Reorganizing the site will make the documentation more usable. Not to be
overlooked is the companion task of making the documentation _findable_. This
involves creating adequate tables of contents (TOCs), indexes, and a glossary to
help navigate the site. Much of this is automated by the static site generator
(currently _Docusaurus_), but it's the writer's responsibility to assure that
these navigation aids are adequate.

# Contributor documentation

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ----------------------------------------- | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     |     | ✔︎ |     |
| Beginner friendly issue backlog           |     |     |     | ✔︎ |     |
| “New contributor” getting started content |     |     | ✔︎ |     |     |
| Project governance documentation          |     |     |     |     | ✔︎ |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

## Comments: contributor documentation

A unique feature of Backstage is that user and contributor roles exist on a
spectrum; plugins designed or modified to serve a particular organization can be
contributed to the Backstage project, or can originate there in anticipation of
a particular organization's need. As a result, documentation for project
contributors is intermingled, and easily confused, with instructions for admin
users trying to expand functionality by modifying or adding code, especially
plugins.

### Communication methods documented

Communication channels are clearly documented on the
[Community][backstage-community] page of the website, including **message
channels**, **newsletters** and **adoption meetings**. There is some minor
conflation of commercially sponsored content on the community page.

The **[GitHub][backstage-backstage] repository** is directly linked from the
main menu. There are 22 related repositories listed on the [Backstage project
page][backstage-github-project]. A little digging is required to suss out the
purpose of some of these projects.

### Beginner friendly issue backlog

The backlog is robustly **triaged** and documented. A **"good first issue"**
label is available and prominently recommended. Issues are **well documented**
with complete descriptions.

There are quite a few **stale backlog items** open in the backlog list. Many,
perhaps a majority, of these seem to be plugin requests.

### New contributor getting started content

The Backstage OSS **community** is visible and accessible on a [community
page][backstage-community] reached via a top-level menu item on the website.
There is an active [Discussions][backstage-discussion] board in the GitHub repo.

**[Contributor guidelines][backstage-contrib]** are provided.

**Help** is available in any of the discussion groups and through a [community
page][backstage-github-community] on GitHub. Help resources are not linked from
the Getting Started documentation.

Backstage is listed in the [Clotributor][clotributor] tool.

### Project governance documentation

Governance is clearly documented in [GOVERNANCE.md][backstage-governance].

## Recommendations: contributor documentation

As an open source project, Backstage looks healthy and well run.

The only recommendation here is to disentangle the contributor documentation
from the product documentation, as described in the [Information architecture
recommendations][info-arch-recommend].

# Website

| Criteria                                    | 1   | 2   | 3   | 4   | 5   |
| ------------------------------------------- | --- | --- | --- | --- | --- |
| Single source for all files                 |     |     | ✔︎ |     |     |
| Meets min website req. (for maturity level) |     | ✔︎ |     |     |     |
| Branding and design                         |     |     |     | ✔︎ |     |
| Case studies/social proof                   |     |     | ✔︎ |     |     |
| SEO, Analytics, and site-local search       |     |     |     |     | ✔︎ |
| Maintenance planning                        |     |     | ✔︎ |     |     |
| A11y plan & implementation                  |     |     |     | ✔︎ |     |
| Mobile-first plan & impl.                   |     |     | ✔︎ |     |     |
| HTTPS access & HTTP redirect                |     |     |     |     | ✔︎ |
| Google Analytics 4 for production only      |     |     |     |     | ✔︎ |
| Indexing allowed for production server only |     |     |     |     | ✔︎ |
| Intra-site / local search                   |     |     |     |     | ✔︎ |
| Account custodians are documented           | ✔︎ |     |     |     |     |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

## Comments: website

### Single-source requirement

The source files for the website and technical documentation reside in two
separate directories of the Backstage GitHub repo, built as a single unit by
_Docusaurus_. There is no separate **website repo**.

The strategy for **generating the docs** is documented but obscure.

### Minimal website requirements

Listed and acknowledged below are the (cumulative) _minimal_ website
requirements for projects based on their [maturity level][cncf-maturity-stages]:
sandbox, incubating, graduated and archived.

| Maturity   | Requirement                                                                          | Met? |
| ---------- | ------------------------------------------------------------------------------------ | ---- |
| Sandbox    | Majority of [Website guidelines][cncf-website-guidelines] satisfied                  | yes  |
| Sandbox    | [Docs analysis][cncf-docs-howto] [submitting a request][cncf-servicedesk] completed. | yes  |
| Incubating | All [Website guidelines][cncf-doc-criteria] satisfied                                | no   |
| Incubating | Request docs (re-)analysis through CNCF [service desk][cncf-servicedesk]             | yes  |
| Incubating | **Project doc**: stakeholders (roles) identified and doc needs documented            | no   |
| Incubating | **Project doc**: Hosted directly                                                     | yes  |
| Incubating | **Project doc**: Comprehensive, addressing most stakeholder needs                    | no   |
| Graduated  | [Docs analysis][cncf-docs-howto]: all analysis follow-through actions are complete   | no   |
| Graduated  | **Project doc** fully addresses needs of key stakeholders                            | no   |
| Archived   | The website repo is in an [archived state][github-archiving]                         | n/a  |
| Archived   | Archived status of the project is obvious to site visitors                           | n/a  |
| Archived   | Link to successor project website and/or migration documentation (if it exists)      | n/a  |

### Branding and design

The Backstage **brand** is easily recognizable through the logo and color
scheme. The scheme is **used consistently** across the website and docs.

The website **typography** is easy to read.

### Case studies/social proof

**Case studies** and **testimonials** are not prominent and are not readily
findable from the website. There is no **logo wall** of participating
organizations.

The project has an **active blog**. **Community discussions** are available on
the website.

### SEO, Analytics and site-local search

**Analytics**

- **Analytics** is enabled for the production server using **GA4**.
- Analytics is **disabled for all other deploys**.
- **Page-not-found (404) reports** are easily generated from the site.

**Site indexing**

**Indexing** is supported for the **production server**. Indexing is **disabled
for previews** and **non-default builds** automatically with `plugin-sitemap`.

**Search**

Local intra-site **search** is available from the website.

**Custodians**

The current **custodian(s)** of the following accounts are **not** clearly
documented: analytics, Google Search Console, site-search (such as Google CSE or
Algolia).

### Maintenance planning

The **website tooling** (Docusaurus static site build) is well supported.

**Cultivation of website maintainers** from within the community is inadequate.

I tested the instructions for using `yarn` to build the website. The **site
build time** was under 30 seconds for a local build on a Mac M1. Maintainers
have sufficient **permissions** to download and build the doc. Checking in the
doc requires a PR and approval from a project maintainer.

### Usability, accessibility and devices

Backstage.io is partially conformant with [WCAG 2.1 level
AA][wcag-understanding] with respect to **accessibility**.

## Recommendations: website

### Single-source repo

The documentation is isolated from the code by virtue of being in its own
directories; however, its location and build instructions are hard to find.
Write explicit instructions for contributing to documentation. Make these
instructions prominent in the contributor guidelines. Emphasize the importance
of keeping the documentation directories separate from code.

An even better plan would be to extract the Docusaurus configurations and
website documentation to their own repository. The Backstage project already has
many repositories. Creating one more for documentation would make the project
organization cleaner and make it easier to contribute to the project
documentation.

### Minimum website requirements for maturity level

To meet the maturity level standards for a graduated project, the following
aspects should be updated as described in [Project documentation][proj-doc]:

- Identify the project and product stakeholder roles.
- Analyze stakeholder needs.
- Update and reorganize the documentation with respect to user orientation and
  task-based support of use cases.

### Case studies/social proof

Implement a **logo wall** of participating organizations, with links to
testimonials and/or case studies.

### SEO, Analytics and site-local search

Add documentation and website custodians to the project maintainer lists in
`OWNERS.md` and wherever else project maintainers are documented.

### Maintenance planning

Add a prominent call for website and documentation maintainers in the project
introduction alongside the call for code maintainers.

### Accessibility

Improve compliance in these areas:

- **Images** should have alternative text.
- **Links** should have discernible text.

<!--- References --->

[backstage-backstage]: https://github.com/backstage/backstage
[backstage-community]: https://backstage.io/community
[backstage-contrib]: https://github.com/backstage/backstage/CONTRIBUTING.md
[backstage-demo]:
  https://demo.backstage.io/catalog?filters%5Bkind%5D=component&filters%5Buser%5D=owned
[backstage-discussion]: https://github.com/backstage/backstage/discussions
[backstage-doc-contrib]:
  https://backstage.io/docs/getting-started/getting-involved#write-documentation-or-improve-the-website
[backstage-doc-deployment]: https://backstage.io/docs/deployment/
[backstage-doc-getting-started]: https://backstage.io/docs/getting-started/
[backstage-doc-rn]: https://backstage.io/docs/releases/v1.17.0
[backstage-github-community]: https://github.com/backstage/community
[backstage-github-project]: https://github.com/backstage
[backstage-governance]:
  https://github.com/backstage/backstage/blob/master/GOVERNANCE.md
[backstage-insights-summary]: ./backstage-insights-summary.md
[backstage-issues]: https://github.com/backstage/backstage/issues
[backstage-io-overview-benefits]:
  https://backstage.io/docs/overview/what-is-backstage#benefits
[backstage-io-overview]: https://backstage.io/docs/overview/what-is-backstage
[backstage-io]: https://backstage.io
[backstage-microsite]:
  https://github.com/backstage/backstage/tree/master/microsite
[clotributor]: https://clotributor.dev/
[cncf-doc-criteria]: ../criteria.md
[cncf-doc-criteria]:
  https://github.com/cncf/techdocs/blob/main/assessments/criteria.md
[cncf-docs-howto]:
  https://github.com/cncf/techdocs/blob/main/assessments/howto.md
[cncf-maturity-stages]:
  https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations
[cncf-servicedesk]: https://servicedesk.cncf.io
[cncf-website-guidelines]: ../../docs/website-guidelines-checklist.md
[dwelsch-esi-github]: https://github.com/dwelsch-esi/
[esi-doc-spec]:
  https://expertsupport.com/library/quick-and-easy-document-specifications/
[esi-doc-suite]:
  https://expertsupport.com/library/the-ideal-documentation-suite-for-software-developers/
[github-archiving]:
  https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories
[implementation-doc]: ./backstage-implementation.md
[inclusive-naming]: https://inclusivenaming.org
[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
[wcag-understanding]: https://www.w3.org/WAI/WCAG21/Understanding/

<!--- internal refs --->

[contrib-doc-rec]: #recommendations-contributor-documentation
[contributor-doc]: #contributor-documentation
[doc-survey]: ./Backstage%20doc%20survey.csv
[implementation]: #implementation
[info-arch-recommend]: #recommendations
[proj-doc-comments]: #comments-project-documentation
[proj-doc-rec]: #recommendations-project-documentation
[proj-doc]: #project-documentation
[user-roles]: #user-roles
[website-rec]: #recommendations-website
[website]: #website
