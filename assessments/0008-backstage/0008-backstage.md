# Backstage Docs Analysis

Prepared by: Dave Welsch ([@dwelsch-esi][dwelsch-esi-github])<br>
Date: 2023-09-01
Most recent update: 10/22/2023

## Introduction

This analysis evaluates the website and technical documentation for the [Backstage][backstage-io]  open source software (OSS), a project of the Cloud Native Computing Foundation (CNCF). 

### Scope of analysis

The documentation discussed here includes the entire contents of the website at https://backstage.io (which contains the technical docs at https://backstage.io/docs), as well as documentation for contributors and users on the Backstage GitHub repository at https://github.com/backstage/backstage. The analysis does not include Spotify's Backstage website at https://backstage.spotify.com/.

The Backstage website and documentation are written in Markdown and are compiled using the Docusaurus static site generator. The site's code is stored on the Backstage GitHub repo.

### Purpose

This document:

- Measures existing documentation quality against the CNCF’s standards
- Provides examples of great documentation as a reference
- Recommends a program of key improvements with the largest return on investment
- Provides guidance to making the recommended improvements actionable


## What this document contains

The document has two parts, *Analysis and recommendations*, and *Implementation*.

### Analysis and recommendations

First is an analysis of the existing documentation. The analysis is divided into three sections that represent three major areas of concern:

- **Project documentation:** concerns documentation for users of the Backstage software, aimed at people who intend to use it
- **Contributor documentation:** concerns documentation for new and existing contributors to the Backstage OSS project
- **Website:** concerns the mechanics of publishing the documentation; includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate [criteria][cncf-doc-criteria] for the section, then proceeds to:
- **Comments**: observations about the existing documentation, with a focus on how it does or does not help Backstage users achieve their goals.
- **Recommndations**: suggested changes that would improve the effectiveness of the documentation.

### Implementation

The second part of this document, [Implementation][implementation], is an attempt to break the recommendations down into concrete actions that can be implemented by project contributors. Focus here is on drilling down to specific, achievable work that can be completed in constrained blocks of time. Ultimately, the implementaiton items should be tracked as a series of Github [issues][backstage-issues].

## How to use this document

Readers interested only in actionable improvements can skip to the [implementation][recs-implementation] recommendations.

For more context, read the recommendations for each of the three areas of analysis:

- [Project documentation][proj-doc-rec]
- [Contributor documentation][contrib-doc-rec]
- [Website][website-rec]

Readers interested in the current state of the documenation and the reasoning behind the recommendations should start with the analyses:

- [Project documentation][proj-doc]
- [Contributor documentation][def]
- [Website][website]


## Project documentation

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| ---                        | --- | --- | --- | --- | --- |
| Information architecture   |     |  ✔︎  |  |     |     |
| New user content           |     |     |     |  ✔︎  |     |
| Content maintainability    |     |   |  ✔︎  |     |     |
| Content creation processes |     |     |  ✔︎  |     |     |
| Inclusive language         |     |     |     |  ✔︎  |     |

Scale:
- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

Backstage is a platform for organizing and managing software projects. This complicates the documentation, because it can be difficult to distinguish among several levels of involvement with Backstage:

1. Use of Backstage as an organizational contributor (coder, DevOp, tech writer) to catalog, create, or document software.
2. Administation of a Backstage instance ("app" in Backstage nomenclature), including installation, deployment, software upgrades, configuration, and customization using plugins.
3. Extending a Backstage app, including writing plugins and modifying existing plugins.
4. Modification or extension of the Backstage platform.

This complexity necessitates clear definitions of roles so that use cases can be documented, indexed, found, and used. The four levels described above suggest that documentation should be organized under at least four roles:

1. Using Backstage for software development: end user.
2. Installing and maintaining a Backstage app for an organization: Backstage admin.
3. Extending a Backstage app: DevOp or internal tooling developer.
4. Extending the Backstage platform: contributing developer.

#### Overall Issues

The main issues with the Backstage documentation are:
1. Lack of organization around user roles, and
2. Lack of instructional content that defines tasks for each role and provides explicit instructions to accomplish these tasks.

For example, the [Overview][backstage-io-overview] contains valuable high-level conceptual information, including a list of [benefits][backstage-io-overview-benefits] to particular user roles (engineering managers, developers, platform engineers). This demonstrates awareness of user roles that needs to be extended throughout the documentation.

There are installation and configuration instructions in [Getting Started][backstage-doc-getting-started]. However:
1. The instructions describe a local installation.
2. The user documentation, for the most part, lacks procedural information.

The following sections contain brief analyses of each element of the Project Documentation rubric.

#### Information architecture

**Conceptual content** is abundant throughout the Backstage documentation. This is good, because using Backstage effectively requires a thorough understanding of its information model.

The documentation seems **feature complete**. All software features are documented.

**Instructional content** is a weakness of the Backstage docs. In many cases, tasks required of each role are missing, as are instructions for completing these roles. Instructional material for the most common use cases (**"happy path"**) should support learning (tutorials) as well as doing (procedures). Where instructional content exists, it is often:

- Not aimed at a defined user,
- Not clearly identified as instructional content, or
- Intermingled or confused with reference information (for example, many configuration "how-tos" are in the form of a list of YAML properties).

**Escalation** options (FAQs, Troubleshooting docs) exist for most Backstage functionality. As well, the contributor community provides robust support (GitHub [issues][backstage-issues] and discussion channels).

**Reference information** exists, including for **APIs**, but is scattered throughout the documentation.

**Organizing individual pages**: A [survey of the existing documentation][doc-survey] suggests a general issue with many individual pages: trying to include too much information on one page. Often a task is mixed with reference information or with more conceptual information than is necessary to support the task. It's usually a good idea to focus on one type of information per page, especially when presenting instructional content: the page should present only what information is necessary to do the task, and nothing else. Examples of information that should be on a different (but linked) page: Explanations of the task's purpose; command references (except the exact commands needed to complete the task); and examples, such as config file entries (again, except as necessary). 

It's not clear that the documentation is completely **up to date**, although [release notes][backstage-doc-rn] exist and are easily findable.

Examples:

* https://prometheus.io/docs/introduction/overview/
* https://kubernetes.io/docs/home/


#### New user content

**New user** content is present and findable ("**signposted**"),  including **installation** instructions for all applicable **OSes**. However, the [Getting Started][backstage-doc-getting-started] instructions don't distinguish between administrator and developer end-user roles. [Deployment][backstage-doc-deployment] describes various scenarios for administrators, but doesn't provide end-to-end instructions. There is no clear workflow **path** after installation.

There is **example content** available, including tutorials for a variety of tasks and a very nice [demo server][backstage-demo].

Examples:

* https://falco.org/docs/getting-started/
* https://prometheus.io/docs/introduction/first_steps/


#### Content maintainability & site mechanics

The documentation is **searchable**. There does not seem to be a **localization** framework. There doesn't currently seem to be any kind of localization effort.

There does not seem to be any mechanism for **versioning** documentation content.

Examples:

* https://github.com/kubernetes/website


#### Content creation processes

The procedures for duplicating the documentation locally and for contributing documentation are [documented][backstage-microsite] but are [not easily findable][backstage-doc-contrib].

These procedures are presumably included in any updates to (and subsequent **release** of) the project code (since the doc is in the same GitHub repo). **Reviewers and approvers** are presumably the Backstage OSS community at large. It would be nice if this situation were made clear explicitly.

The website does not have a clear individual **owner or maintainer**.

Examples:

* https://github.com/nats-io/nats-site/blob/master/MAINTAINERS.md (clearly documented maintainers)
* https://thanos.io/tip/contributing/how-to-contribute-to-docs.md/


#### Inclusive language

I found no content that uses non-recommended words as documented by the [Inclusive Naming Initiative][inclusive-naming] website.

The website makes occasional use of words like "simple" and "easy", but avoids explicitly ableist language.


### Recommendations: project documentation

The following sections contain recommendations for improvements to the Backstage project documentation. These recommendations are for broad improvements that would greatly increase documentation effectiveness. For details, see [Implementation][implementation]


#### Clarify user roles and objectives

Any systemic improvement to the Backstage documentation hinges on clearly defining and documenting user roles. This is a first step in defining any documentation set, but nature of Backstage makes it especially important here.

The example roles given in the [comments][proj-doc-comments] have been carried over to the [Implementation][implementation] section. Contributors with a greater understanding of how Backstage is used should feel free to modify this list if it serves the needs of the project, keeping in mind that the purpose of the user roles is to organize the task-based documentation.


#### Develop instructional documentation

Most of the Backstage documentation seems to have evolved from architecture and design documentation. This makes it very rich in conceptual material and reference documentation, but weak in user-oriented instructional documentation.

"Instructional documentation" is a broad category that includes such traditional documentation artifacts as tutorials; getting started guides; procedural recipes or "cookbooks"; runbooks; and how-to guides.

For every user role:

**Define use cases**: Define the common use cases for each role. Some typical examples:

*Administrator*: Installation; deployment; configuration; maintenance; upgrades; extension (plugins); disaster recovery.

*User (developer)*: Development environment setup; Adding an existing element; creating a new element; creating a template; viewing projects; searching; creating documentation; CI/CD; deploying; reverting a deployment.

**Write procedures**: For each use case, develop instructional content, including: "happy path" procedures that can be followed by anyone familiar with the product generally; examples; troubleshooting guides; and for new users, tutorials.

#### Reorganize the documentation site

Right now different types of documentation (conceptual/architectural; instructional; reference) for different user roles are intermixed throughout the documentation site.

**Organize by role and task**

The site should be reorganized based on an overarching principle of grouping together documentation needed by a particular user role for a particular set of tasks. This sounds daunting, but it's the schema behind a traditional developer documentation suite, which can be used as a model. For an example of such a doc suite, see [this blog post][esi-doc-suite]. Or [this one][esi-doc-spec] on how to think about a doc specification.

**Provide adequate navigation signals**

Reorganizing the site will make the documentation more usable. Not to be overlooked is the companion task of making the documentation *findable*. This involves creating adequate tables of contents (TOCs), indexes, and a glossary to help navigate the site. Much of this is automated by the static site generator (currently *Docusaurus*), but it's the writer's responsibility to assure that these navigation aids are adequate.


## Contributor documentation

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ---                                       | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     |     |  ✔︎  |    |
| Beginner friendly issue backlog           |     |     |     |  ✔︎  |     |
| “New contributor” getting started content |     |     |  ✔︎  |     |     |
| Project governance documentation          |     |     |     |     |  ✔︎  |

Scale:
- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

A unique problem with Backstage is that user and contributor roles exist on a spectrum; plugins designed or modified to serve a particular organization can be contributed to the Backstage project, or can originate there in anticipation of a particular organization's need. As a result, documentation for project contributors is intermingled, and easily confused, with instructions for admin users trying to expand functionality by modifying or adding code, especially plugins.


#### Communication methods documented

Communication channels are clearly documented on the [Community][backstage-community] page of the website, including **message channels**, **newsletters** and **adoption meetings**. There is some minor conflation of commercially sponsored content on the community page.

The **[GitHub][backstage-backstage] repository** is directly linked from the main menu. There are 22 related repositories listed on the [Backstage project page][backstage-github-project]. A little digging is required to suss out the purpose of some of these projects.

Examples:
https://kubernetes.io/community/


#### Beginner friendly issue backlog

The backlog is robustly **triaged** and documented. A **"good first issue"** label is available and prominently recommended. Issues are **well documented** with complete descriptions.

There are quite a few **stale backlog items** open in the backlog list. Many, perhaps a majority, of these seem to be plugin requests.

#### New contributor getting started content

The Backstage OSS **community** is visible and accessible on a [community page][backstage-community] reached via a top-level menu item on the website. There is an active [Discussions][backstage-discussion] board in the GitHub repo.

**[Contributor guidelines][backstage-contrib]** are provided.

**Help** is available in any of the discussion groups and through a [community page][backstage-github-community] on GitHub. Help resources are not linked from the Getting Started documentation.

Backstage is listed in the [Clotributor][clotributor] tool.

Examples:

* https://github.com/helm/community
* https://github.com/backstage/community

#### Project governance documentation

Goverance is clearly documented in [GOVERNANCE.md][backstage-governance].

Examples:

* https://github.com/kubernetes/steering


### Recommendations: contributor documentation

As an open source project, Backstage looks healthy and well run.

The only recommendation here is to disentagle the contributor documentation from the product documentation, as described in the [Information architecture recommendations][info-arch-recommend].


## Website

| Criteria                                    | 1   | 2   | 3   | 4   | 5   |
| ---                                         | --- | --- | --- | --- | --- |
| Single source for all files                 |     |     |  ✔︎   |     |     |
| Meets min website req. (for maturity level) |     |  ✔︎   |     |     |     |
| Branding and design                         |     |     |     |  ✔︎   |     |
| Case studies/social proof                   |     |     |  ✔︎   |     |     |
| SEO, Analytics, and site-local search       |     |     |     |     |  ✔︎   |
| Maintenance planning                        |     |     |   ✔︎  |     |     |
| A11y plan & implementation                  |     |     |     |   ✔︎  |     |
| Mobile-first plan & impl.                   |     |     |  ✔︎  |     |     |
| HTTPS access & HTTP redirect                |     |     |     |     |  ✔︎   |
| Google Analytics 4 for production only      |     |     |     |     |  ✔︎    |
| Indexing allowed for production server only |     |     |     |     |  ✔︎    |
| Intra-site / local search                   |     |     |     |     |  ✔︎    |
| Account custodians are documented           |  ✔︎     |  |     |     |     |

Scale:
- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

#### Single-source requirement

The source files for the website and technical documentation reside in two separate directories of the Backstage GitHub repo, built as a single unit by *Docusaurus*. There is no separate **website repo**. 

The strategy for **generating the docs** is documented but obscure. 

#### Minimal website requirements

Listed and acknowledged below are the (cumulative) _minimal_ website requirements for projects based on their [maturity level][cncf-maturity-stages]: sandbox, incubating, graduated and archived.

| Maturity | Requirement | Met? |
| ---      | ---         | --- |
| Sandbox  | Majority of [Website guidelines][cncf-website-guidelines] satisfied | yes |
| Sandbox | [Docs analysis][cncf-docs-howto] [submitting a request][cncf-servicedesk] completed. | yes |
| Incubating | All [Website guidelines][cncf-doc-criteria] satisfied | no |
| Incubating | Request docs (re-)analysis through CNCF [service desk][cncf-servicedesk] | yes |
| Incubating | **Project doc**: stakeholders (roles) identified and doc needs documented | no |
| Incubating | **Project doc**: Hosted directly | yes |
| Incubating | **Project doc**: Comprehensive, addressing most stakeholder needs | no |
| Graduated | [Docs analysis][cncf-docs-howto]: all analysis follow-through actions are complete | no |
| Graduated | **Project doc** fully addresses needs of key stakeholders | no |
| Archived | The website repo is in an [archived state][github-archiving] | n/a |
| Archived | Archived status of the project is obvious to site visitors | n/a |
| Archived | Link to successor project website and/or migration documentation (if it exists) | n/a |


#### Branding and design

The Backstage **brand** is easily recognizable through the logo and color scheme. The scheme is **used consistently** across the website and docs.

The website **typography** is easy to read.

Examples:

* https://helm.sh/


#### Case studies/social proof

**Case studies** and **testimonials** are not prominent and are not readily findable from the website. There is no **logo wall** of participating organizations.

The project has an **active blog**. **Community discussions** are available on the website.

Examples:

* https://www.fluentd.org/testimonials (user testimonials)
* https://goharbor.io/ (logo wall)
* https://blog.rook.io/ (blog)


#### SEO, Analytics and site-local search

**Analytics**

  - **Analytics** is enabled for the production server using **GA4**.
  - Analytics is **disabled for all other deploys**.
  - **Page-not-found (404) reports** are easily generated from the site.

**Site indexing**

 **Indexing** is supported for the **production server**. Indexing is **disabled for previews** and **non-default builds** automatically with `plugin-sitemap`.

**Search**

Local intra-site **search** is available from the website.

**Custodians**

The current **custodian(s)** of the following accounts are **not** clearly documented: analytics, Google Search Console, site-search (such as Google CSE or Algolia).


#### Maintenance planning

The **website tooling** (Docusaurus static site build) is well supported.

**Cultivation of website maintainers** from within the community is inadequate.

I tested the instructions for using `yarn` to build the website. The **site build time** was under 30 seconds for a local build on a Mac M1. Maintainers have sufficient **permissions** to download and build the doc. Checking in the doc requires a PR and approval from a project maintainer.

Examples:

* http://kubernetes.io

#### Usability, accessibility and devices

Backstage.io is partially conformant with [WCAG 2.1 level AA][wcag-understanding] with respect to **accessibility**.


### Recommendations: website

#### Single-source repo

The documentation is isolated from the code by virtue of being in its own directories; however, its location and build instructions are hard to find. Write explicit instructions for contributing to documentation. Make these instructions prominent in the contributor guidelines. Emphasize the importance of keeping the documentation directories separate from code.

An even better plan would be to extract the Docusaurus configurations and website documentation to their own repository. The Backstage project already has many repositories. Creating one more for documentation would make the project organization cleaner and make it easier to contribute to the project documentation.


#### Minimum website requirements for maturity level

To meet the maturity level standards for a graduated project, update the following aspects as described in [Project documentation][project-doc]:

- Identify the project and product stakeholder roles.
- Analyze stakeholder needs.
- Update and reorganize the documentation with respect to user orientation and task-based support of use cases.


#### Case studies/social proof

Implement a **logo wall** of participating organizations, with links to testimonials and/or case studies.


#### SEO, Analytics and site-local search

Add documentation and website custodians to the project maintainer lists in `OWNERS.md` and wherever else project maintainers are documented.


#### Maintenance planning

Add a prominent call for website and documentation maintainers in the project introduction alongside the call for code maintainers.


#### Accessibility

Improve compliance in these areas:
- **Images** must have alternative text.
- **Links** must have discernible text.


## Implementation

This section provides a suggested route to implementing the improvements recommended in the analysis sections. 

The top documentation recommendations for this project are:

- Fill gaps in instructional documentation for all stakeholder roles, including project contributors.
- Organize and "signpost" documentation by role and task so that stakeholders can find documentation that supports their roles' activities.

### Definitions

These implementations rely on the following definitions.

#### Organization

It is assumed that Backstage is adopted by a medium-to-large *organization* (*org*) made up of a number of *groups*. 

#### Group

A group is defined by its responsibility for one or more software *products* that are manageable in Backstage. 

#### Product

Products can include but are not limited to: internal and external toolkits and APIs; components; databases; and web-based and standalone applications. 

A group needs 1) visibility into the org's entire corpus of products, and 2) to publicize its own software products to the org.

#### Developer

Members of a group can have various functional and organizational roles, including: software engineer; dev-op; QA engineer; software architect; network engineer; engineering manager; and many others. These implementations refer to a group member generically as a *developer* (*dev*).

#### Contributor

The org has ties to the Backstage open source software (OSS) project through developers who contribute to the project and who participate in discussions, newsgroups, and other community forums. These OSS participants, regardless of their employer or job function, are called *contributors*.

### User Roles

The only distinctions among Backstage users relevant to this implementation discussion are among *user roles*. User roles are defined to organize documentation requirements. The following table summarizes the user roles that have been identified to have their own substantial and unique use cases.

| User Role | Use Cases |
| --- | --- |
| Administrator | An IT or DevOps professional responsible for standing up and maintaining an organization's instance of Backstage (the *Backstage app*). |
| Developer | The Backstage "end user". A developer, part of a group within an organization. Typically but not always a technical contributor, the developer uses Backstage to learn about and use software components within the org and to publish and document their group's software. |
| Integrator | A developer who modifies an org's Backstage app (typically by writing or modifying a plugin) to add functionality required by the org. This modification might or might not then be contributed back to the Backstage OSS project. |
| Contributor | A developer who supplies a work product (code or documentation, e.g.) to the Backstage open-source project, or who volunteers to participate by providing services (reviews, discussion, or committe membership, e.g.). Much of the contributor documentation is specifically for integrators who contribute plugins or code to the project. |

**A note about adoption champions**: A survey of Backstage adopters entitled "Backstage Insights" was undertaken by Spotify. The survey is summarized briefly in [this document][backstage-insights-summary]. Backstage Insights identifies another role, the *champion*. Due to the complexity and level of commitment required to adopt Backstage, Backstage Insights deems the champion necessary for an organization to successfully adopt Backstage. Adoption and the champion role are not addressed in the Backstage documentation and are beyond the scope of this analysis. They are important considerations, however, that should be addressed by any organization and for which further exploration and documentation would be valuable. 

### Implementation: Fill gaps in instructional documentation

"Instructional documentation" is a broad category that includes such traditional documentation artifacts as tutorials; getting started guides; procedural recipes or "cookbooks"; runbooks; and how-to guides. We recommend that the project first ensure that basic task documentation is covered, then build out tutorials, cookbooks, and more specialized documentation.

Broadly, the recommendation here is to do this:

1. For every [user role][user-roles], define the common use cases for each role.
2. For each use case, develop instructional content, including: 
    - "Happy path" procedures that can be followed by anyone familiar with the product generally
    - examples
    - troubleshooting guides
    - for new users, tutorials

There is already some instructional content in the Backstage documentaiton. In many cases, it is intermingled with conceptual and reference information. A common example of this is in configuration instructions. Many configurations are embodied in YAML files, and the documentation web page for the configuration amounts to an explanation of the contents of a particular config file. In such cases, the page should be rewritten as two or three distinct pages: a step-by-step explanation (not just of the file contents, but where to put it, how to load it, and so on); a configuration reference that exhaustively lists all elements that the file can contain; and if necessary an introduction explaining what the configuration controls. 

The sections below give recommendations for the most important instructional documentation improvements to Backstage for each user role.

#### Administrator

The following artifacts need to be written and made findable for administrators.

1. A server installation and setup guide for administrators. Provide clear, step-by-step instructions for downloading and deploying Backstage to an organization. 

    Instructions can also be provided for installing a local, group-level, or test deployment, but these instructions should be separate and clearly labeled as non-production. 

1. An Administrator Guide, with instructions on how to do such things as:
    - Start and stop the Backstage server
    - Install and configure Backstage plugins
    - Manage the many software dependencies for Backstage and its plugins
    - Maintain the Backstage database
    - Upgrade and downgrade the Backstage release verison
    - Troubleshoot common problems
    - Tune server performance

#### Developer

The following artifacts need to be written and made findable for developers.

1. A getting started guide for developers. Provide a clear work path that describes how to:
    1. Downloead and install any necessary software components
    1. Integrate Backstage with an existing development environment

1. A User Guide for developers. Provide clear instructions for these tasks:
    - Adding an existing product to Backstage
    - Creating a new product in Backstage
    - Updating a product in Backstage
    - Documenting a product in Backstage
    - Deprecating and retiring a product from Backstage
    - Searching for a component in Backstage


#### Integrator

There are a dizzying array of issues with writing, modifying, and maintaining plugins in Backstage. This is not a detailed recipe for documenting those issues. For integrators, at a high level, a program should be undertaken to:

1. Organize integrator tasks from most basic and common (write a simple plugin; decide between backend and frontend plugin) to more complex (Integrate with external systems; use a proxy; implement authentication).
2. Where possible, using the exisitng documentation as a starting point, write step-by-step procedures for discrete integration tasks (starting with how to write a basic plugin).
3. Organize existing reference and conceptual information (such as API references and architecture discussions) into supporting documentation, referenced from the integration tasks.


#### Contributor

For a plugin-dependent project like Backstage, it's vital that community members contribute plugins, for two reasons:

1. To expand the base functionality of Backstage by covering common use cases
2. To provide complete examples of how plugins are structured, written, and added to the project

Contributor documentation should be in README files in the Backstage GitHub repo and should be limited to how to contribute software to the product. "How to write a plugin" documentation should be included in the website-based doc as described above.

### Organize and "signpost" documentation

Right now different types of documentation (conceptual/architectural; instructional; reference) for different user roles are intermixed throughout the documentation site.

Disentagle the contributor documentation from the product documentation, as described in the [User documentation recommendations][proj-doc-rec].

**Organize by role and task**

The site should be reorganized based on an overarching principle of grouping together documentation needed by a particular user role for a particular set of tasks. This sounds daunting, but it's the schema behind a traditional developer documentation suite, which can be used as a model. For an example of such a doc suite, see [this blog post][esi-doc-suite]. Or [this one][esi-doc-spec] on how to think about a doc specification.

**Provide adequate navigation signals**

Reorganizing the site will make the documentation more usable. Not to be overlooked is the companion task of making the documentation *findable*. This involves creating adequate tables of contents (TOCs), indexes, and a glossary to help navigate the site. Much of this is automated by the static site generator (currently *Docusaurus*), but it's the writer's responsibility to assure that these navigation aids are adequate.

### Recommendation Breakdown - Contributor Documentation


### Recommendation Breakdown - Website


#### Single-source repo

The documentation is isolated from the code by virtue of being in its own directories; however, its location and build instructions are obscure. Write explicit instructions for contributing to documentation. Emphasize the importance of keeping the documentation directories separate. Make these instructions prominent in the contributor guidelines.

An even better plan would be to extract the Docusaurus configurations and website documentation to its own repository. The Backstage project already has many repositories. Creating one more for documentation would make the project organization cleaner and make it easier to contribute to the project documentation.


#### Minimum website requirements for maturity level

To meet the maturity level standards for a graduated project, update the following aspects as described in [Project documentation](Project-documentation):

- Identify the project and product stakeholder roles.
- Analyze stakeholder needs.
- Update and reorganize the documentation with respect to user orientation and task-based support of use cases.


#### Case studies/social proof

Implement a **logo wall** of participating organizations, with links to testimonials and/or case studies.


#### SEO, Analytics and site-local search

Add documentation and website custodians to the project maintainer lists in `OWNERS.md` and wherever else project maintainers are documented.


#### Maintenance planning

Add a prominent call for website and documentation maintainers in the project introduction alongside the call for code maintainers.


#### Accessibility

Improve compliance in these areas:
- **Images** must have alternative text.
- **Links** must have discernible text.


<!--- References --->

[backstage-backstage]: https://github.com/backstage/backstage
[backstage-community]: https://backstage.io/community
[backstage-contrib]: https://github.com/backstage/backstage/CONTRIBUTING.md
[backstage-demo]: https://demo.backstage.io/catalog?filters%5Bkind%5D=component&filters%5Buser%5D=owned
[backstage-discussion]: https://github.com/backstage/backstage/discussions
[backstage-doc-contrib]: https://backstage.io/docs/getting-started/getting-involved#write-documentation-or-improve-the-website
[backstage-doc-deployment]: https://backstage.io/docs/deployment/
[backstage-doc-getting-started]: https://backstage.io/docs/getting-started/
[backstage-doc-rn]: https://backstage.io/docs/releases/v1.17.0
[backstage-github-community]: https://github.com/backstage/community
[backstage-github-project]: https://github.com/backstage
[backstage-governance]: https://github.com/backstage/backstage/blob/master/GOVERNANCE.md
[backstage-insights-summary]: ./backstage-insights-summary.md
[backstage-io-overview-benefits]: https://backstage.io/docs/overview/what-is-backstage#benefits
[backstage-io-overview]: https://backstage.io/docs/overview/what-is-backstage
[backstage-io]: https://backstage.io
[backstage-microsite]: https://github.com/backstage/backstage/tree/master/microsite
[clotributor]: https://clotributor.dev/
[cncf-doc-criteria]: criteria.md
[cncf-doc-criteria]: https://github.com/cncf/techdocs/blob/main/assessments/criteria.md
[cncf-docs-howto]: https://github.com/cncf/techdocs/blob/main/assessments/howto.md
[cncf-maturity-stages]: https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations
[cncf-servicedesk]: https://servicedesk.cncf.io
[cncf-website-guidelines]: ../../docs/website-guidelines-checklist.md
[dwelsch-esi-github]: https://github.com/dwelsch-esi/
[esi-doc-spec]: https://expertsupport.com/library/quick-and-easy-document-specifications/
[esi-doc-suite]: https://expertsupport.com/library/the-ideal-documentation-suite-for-software-developers/
[github-archiving]: https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories
[inclusive-naming]: https://inclusivenaming.org
[info-arch-recommend]: #Recommendations
[project-doc]: #project-documentation
[user-roles]: #user-roles
[wcag-understanding]: https://www.w3.org/WAI/WCAG21/Understanding/
[recs-implementation]: #recommendations-3
[backstage-issues]: https://github.com/backstage/backstage/issues
[implementation]: #implementation
[proj-doc-rec]: #recommendations-user-documentation
[contrib-doc-rec]: #recommendations-contributor-documentation
[website-rec]: #recommendations-website
[proj-doc]: #user-documentation
[def]: #contributor-documentation
[website]: #website
[proj-doc-comments]: #Comments
[implementation]: #implementation
[doc-survey]: ./Backstage%20doc%20survey.csv
[implementation]: #implementation
[def2]: #recommendations