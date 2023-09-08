# Backstage Docs Assessment

Prepared by: Dave Welsch ([@dwelsch-esi](https://github.com/cncf/techdocs/assessments/0008-backstage.md))<br>
Date: 2023-09-01

## Introduction

This document assesses the quality and completeness of the [Backstage](https://backstage.io) project's documentation and website.

This document:

- Measures existing documentation quality against the CNCF’s standards
- Provides examples of great documentation as a reference
- Recommends a program of key improvements with the largest return on investment
- Provides guidance to making the recommended improvements actionable TBD


## How this document works

The assessment is divided into three sections:

- **Project documentation:** for end users of the project, aimed at people who intend to use it
- **Contributor documentation:** for new and existing contributors to the project
- **Website:** for branding, website structure, and maintainability

Each section begins with a rating based on a rubric with appropriate [criteria](criteria.md) for the section.


## Project documentation

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| ---                        | --- | --- | --- | --- | --- |
| Information architecture   |     |  :heavy_check_mark:  |  |     |     |
| New user content           |     |     |     |  :heavy_check_mark:  |     |
| Content maintainability    |     |   |  :heavy_check_mark:  |     |     |
| Content creation processes |     |     |  :heavy_check_mark:  |     |     |
| Inclusive language         |     |     |     |  :heavy_check_mark:  |     |

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

The main issues with the Backstage documentation are:
1. Lack of organization around user roles, and
2. Lack of instructional content that defines tasks for each role and provides explicit instructions to accomplish these tasks.

The [Overview](https://backstage.io/docs/overview/what-is-backstage) contains valuable high-level conceptual information, including a list of [benefits](https://backstage.io/docs/overview/what-is-backstage#benefits) to particular user roles (engineering managers, developers, platform engineers). This demonstrates awareness of user roles that needs to be extended throughout the documentation.

There are installation and configuration instructions in [Getting Started](https://backstage.io/docs/getting-started/). However:
1. The instructions describe a local installation.
2. The user documentation, for the most part, lacks procedural information.

The following sections contain brief assessments of each element of the Project Documentation rubric.

#### Information architecture

**Conceptual content** is abundant throughout the Backstage documentation. This is good, because using Backstage effectively requires a thorough understanding of its information model.

The documentation seems **feature complete**. All software features are documented.

**Instructional content** is a weakness of the Backstage docs: tasks required of each role are missing, as are instructions for completing these roles. Instructional material for at least the most common use cases (**"happy path"**) should support learning (tutorials) as well as doing (procedures).

**Escalation** options (FAQs, Troubleshooting docs) exists for most Backstage functionality. As well, the contributor community provides robust support (GitHub issues and discussion channels).

**Reference information** exists, including for **APIs**, but is scattered throughout the documentation.

It's not clear that the documentation is completely **up to date**, although [release notes](https://backstage.io/docs/releases/v1.17.0) exist and are easily findable.

Examples:

* https://prometheus.io/docs/introduction/overview/
* https://kubernetes.io/docs/home/


#### New user content

**New user** content is present and findable ("**signposted"**),  including **installation** instructions for all applicable **OSes**. However, the [Getting Started](https://backstage.io/docs/getting-started/) instructions don't distinguish between administrator and developer end-user roles. [Deployment](https://backstage.io/docs/deployment/) describes various scenarios for administrators, but doesn't provide end-to-end instructions. There is no clear workflow **path** after installation.

There is **example content** available, including tutorials for a variety of tasks and a very nice [demo server](https://demo.backstage.io/catalog?filters%5Bkind%5D=component&filters%5Buser%5D=owned).


Examples:

* https://falco.org/docs/getting-started/
* https://prometheus.io/docs/introduction/first_steps/


#### Content maintainability & site mechanics

The documentation is **searchable**. There does not seem to be a **localization** framework. There doesn't currently seem to be any kind of localization effort.

There does not seem to be any mechanism for **versioning** documentation content.

Examples:

* https://kubernetes.io/docs/contribute/

#### Content creation processes

The procedures for duplicating the documentation locally and for contributing documentation are [documented](https://github.com/backstage/backstage/tree/master/microsite) but are [not easily findable](https://backstage.io/docs/getting-started/getting-involved#write-documentation-or-improve-the-website).

These procedures are presumably included in any updates to (and subsequent **release** of) the project code (since the doc is in the same GitHub repo). **Reviewers and approvers** are presumably the Backstage OSS community at large. It would be nice if this situation were made clear explicitly.

The website does not have a clear individual **owner or maintainer**.

Examples:

* https://github.com/nats-io/nats-site/blob/master/MAINTAINERS.md (clearly documented maintainers)
* https://thanos.io/tip/contributing/how-to-contribute-to-docs.md/

#### Inclusive language

I found no content that uses non-recommended words as documented by the [Inclusive Naming Initiative](https://inclusivenaming.org) website.

The website makes occasional use of words like "simple" and "easy", but avoids explicitly ableist language.


### Recommendations

The following sections contain recommendations for improvements to the Backstage project documentation. These recommendations are for broad improvements that would greatly increase documentation effectiveness. Further collaboration between technical writers and project leadership is needed to analyze the recommendations into actionable, estimable work efforts.


#### Clarify user roles and objectives

Any systemic improvement to the Backstage documentation hinges on clearly defining and documenting user roles. This is a first step in defining any documentation set, but nature of Backstage makes it especially important here.

The example roles given in the [comments](#Comments) can be used as a starting point for discussion, but should not be adopted without extensive analysis. The roles need to be defined by product experts, not by my hot take.

Discussion participants should include technical writers and all types of users. It should specifically include both Backstage product experts and Backstage OSS project managers because there appears to be no bright line between running a large Backstage instance and contributing to the Backstage codebase.

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

The site should be reorganized based on an overarching principle of grouping together documentation needed by a particular user role for a particular set of tasks. This sounds daunting, but it's the schema behind a traditional developer documentation suite, which can be used as a model. For an example of such a doc suite, see [this blog post](https://expertsupport.com/library/the-ideal-documentation-suite-for-software-developers/). Or [this one](https://expertsupport.com/library/quick-and-easy-document-specifications/) on how to think about a doc specification.

**Provide adequate navigation signals**

Reorganizing the site will make the documentation more usable. Not to be overlooked is the companion task of making the documentation *findable*. This involves creating adequate tables of contents (TOCs), indexes, and a glossary to help navigate the site. Much of this is automated by the static site generator (currently *Docusaurus*), but it's the writer's responsibility to assure that these navigation aids are adequate.


## Contributor documentation

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ---                                       | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     |     |  :heavy_check_mark:  |    |
| Beginner friendly issue backlog           |     |     |     |  :heavy_check_mark:  |     |
| “New contributor” getting started content |     |     |  :heavy_check_mark:  |     |     |
| Project governance documentation          |     |     |     |     |  :heavy_check_mark:  |

Scale:
- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

A unique problem with Backstage is that user and contributor roles exist on a spectrum; plugins designed or modified to serve a particular organization can be contributed to the Backstage project, or can originate there in anticipation of a particular organization's need. As a result, documentation for project contributors is intermingled, and easily confused, with instructions for admin users trying to expand functionality by modifying or adding code, especially plugins.

#### Communication methods documented

Communication channels are clearly documented on the [Community](https://backstage.io/community) page of the website, including **message channels**, **newsletters** and **adoption meetings**. There is some minor conflation of commercially sponsored content on the community page.

The **[GitHub](https://github.com/backstage/backstage) repository** is directly linked from the main menu. There are 22 related repositories listed on the [Backstage project page](https://github.com/backstage). A little digging is required to suss out the purpose of some of these projects.

Examples:
https://kubernetes.io/community/

#### Beginner friendly issue backlog

The backlog is robustly **triaged** and documented. A **"good first issue"** label is available and prominently recommended. Issues are **well documented** with complete descriptions.

There are quite a few **stale backlog items** open in the backlog list. Many, if not a majority, of these seem to be plugin requests.

#### New contributor getting started content

The Backstage OSS **community** is visible and accessible on a [community page](https://backstage.io/community) reached via a top-level menu item on the website. There is an active [Discussions](https://github.com/backstage/backstage/discussions) board in the GitHub repo.

**[Contributor guidelines](https://github.com/backstage/backstage/CONTRIBUTING.md)** are provided.

**Help** is available in any of the discussion groups and through a [community page](https://github.com/backstage/community) on GitHub. Help resources are not linked from the Getting Started documentation.

Examples:

* https://github.com/helm/community
* https://github.com/backstage/community

#### Project governance documentation

Goverance is clearly documented in [GOVERNANCE.md](https://github.com/backstage/backstage/blob/master/GOVERNANCE.md)

Examples:

* https://github.com/kubernetes/steering

### Recommendations

As an open source project, Backstage looks healthy and well run.

The only recommendation here is to disentagle the contributor documentation from the product documentation, as described in the [Information architecture recommendations](#Recommendations).


## Website

| Criteria                                    | 1   | 2   | 3   | 4   | 5   |
| ---                                         | --- | --- | --- | --- | --- |
| Single-source for all files                 |     |     |  :heavy_check_mark:   |     |     |
| Meets min website req. (for maturity level) |     |  :heavy_check_mark:   |     |     |     |
| Branding and design                         |     |     |     |  :heavy_check_mark:   |     |
| Case studies/social proof                   |     |     |  :heavy_check_mark:   |     |     |
| SEO, Analytics, and site-local search       |     |     |     |     |  :heavy_check_mark:   |
| Maintenance planning                        |     |     |   :heavy_check_mark:  |     |     |
| A11y plan & implementation                  |     |     |     |   :heavy_check_mark:  |     |
| Mobile-first plan & impl.                   |     |     |  :heavy_check_mark:  |     |     |
| HTTPS access & HTTP redirect                |     |     |     |     |  :heavy_check_mark:   |
| Google Analytics 4 for production only      |     |     |     |     |  :heavy_check_mark:    |
| Indexing allowed for production server only |     |     |     |     |  :heavy_check_mark:    |
| Intra-site / local search                   |     |     |     |     |  :heavy_check_mark:    |
| Account custodians are documented           |  :heavy_check_mark:     |  |     |     |     |

Scale:
- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

#### Single-source requirement

The source files for the website and technical documentation reside in a single directory of the Backstage GitHub repo. There is no separate **website repo**. 

The strategy for **generating the docs** is documented but obscure. 

#### Minimal website requirements

Listed and acknowledged below are the (cumulative) _minimal_ website requirements for projects based on their [maturity level](https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations): sandbox, incubating, graduated and archived.

| Maturity | Requirement | Met? |
| ---      | ---         | --- |
| Sandbox  | Majority of [Website guidelines](../docs/website-guidelines-checklist.md) satisfied | yes |
| Sandbox | [Docs assessment](https://github.com/cncf/techdocs/blob/main/assessments/howto.md) [submitting a request](https://servicedesk.cncf.io) completed. | yes |
| Incubating | All [Website guidelines](https://github.com/cncf/techdocs/blob/main/assessments/criteria.md) satisfied | no |
| Incubating | Request docs (re-)assessment through CNCF [service desk](https://servicedesk.cncf.io) | yes |
| Incubating | **Project doc**: stakeholders (roles) identified and doc needs documented | no |
| Incubating | **Project doc**: Hosted directly | yes |
| Incubating | **Project doc**: Comprehensive, addressing most stakeholder needs | no |
| Graduated | [Docs assessment](https://github.com/cncf/techdocs/blob/main/assessments/howto.md): all assessment follow-through actions are complete | no |
| Graduated | **Project doc** fully addresses needs of key stakeholders | no |
| Archived | The website repo is in an [archived state](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories) | n/a |
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

We evaluate on the following:

* Analytics:
  - Is analytics enabled for the production server? *Yes, GA4 is enabled in production.*
  - Is analytics disabled for all other deploys? *Yes*
  - If your project used Google Analytics, have you migrated to GA4? *Yes*
  - Can Page-not-found (404) reports easily be generated from you site
    analytics? Provide a sample of the site's current top-10 404s. *Yes, Page-not-found reports can be generated using GA4*
* Is site indexing supported for the production server, while disabled for
  website previews and builds for non-default branches? *Yes, that's automatic with* `plugin-sitemap`.
* Is local intra-site search available from the website? *Yes*
* Are the current custodian(s) of the following accounts clearly documented:
  analytics, Google Search Console, site-search (such as Google CSE or Algolia) *No*

#### Maintenance planning

The **website tooling** (Docusaurus static site build) is well supported.

Cultivation of website maintainers from within the community is unknown. TBD

I tested the instructions for using `yarn` to build the website. The **site build time** was under 30 seconds for a local build on a Mac M1. Maintainers have sufficient **permissions** to download and build the doc. Checking in the doc no doubt requires a PR and approval from a project maintainer.

Examples:

* http://kubernetes.io

#### Usability, accessibility and devices

The website is **usable from mobile**. Doc pages **are readable**.
Most navigation features are **accessible from mobile**.

Backstage is probably not a good candidate for a **[mobile-first] design**.

[mobile-first]: https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first

In terms of accessibility, Backstage.io is partially conformant with [WCAG 2.1 level AA](https://www.w3.org/WAI/WCAG21/Understanding/).

[accessibility]: https://developer.mozilla.org/en-US/docs/Web/Accessibility

#### HTTPS and HTTP redirect

The website is served via **HTTPS**. **HTTP** redirects automatically to HTTPS.
 
#### Other

**Google Analytics** 

Google Analytics 4 (GA4) is enabled and works as expected.

**Indexing** 

Site is well indexed; supported on production.

**Intra-site and local search** 

Backstage.io uses algolia for intra-site and local search.

**Account custodians** 
Account custodians are not documented in the [OWNERS file](https://github.com/backstage/backstage/blob/master/OWNERS.md).

### Recommendations

**Accessibility**

Website is accessible but needs more improvement in these areas:
1. Images: images must have alternative text
2. Links: Links must have discernible text

## Recommendations

The top documentation concerns for this project are:

- Defining stakeholder roles and disentangling ambiguous roles.
- Completing instructional documentation for all stakeholder roles, including project contributors.
- Organizing and "signposting" documentation by role and task so that stakeholders can find documentation that supports their roles' activities.

(Analysis to actionable tasks and issues )
