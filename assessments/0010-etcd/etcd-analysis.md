 ---
title: etcd Documentation Analysis
tags: etcd
created: 2023-09-01
modified: 2023-12-08
author: Dave Welsch (@dwelsch-esi)
---

# Introduction

This document analyzes the effectiveness and completeness of the [etcd][etcd-io] open source software (OSS) project's documentation and website. It is funded by the CNCF Foundation as part of its overall effort to incubate, grow, and graduate open source cloud native software projects. 

According to CNCF best practices guidelines, effective documentation is a prerequisite for program graduation. The documentation analysis is the first step of a CNCF process aimed at assisting projects with their documentation efforts. 

## Purpose

This document was written to analyze the current state of etcd documentation. It aims to provide project leaders with an informed understanding of their project documentation and to outline an actionable plan for improvement.

This document:

- Analyzes the current etcd technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

## Scope of analysis

The documentation discussed here includes the entire contents of the website (which contains the technical docs), as well as documentation for contributors and users on the etcd GitHub repository. 

The etcd website and documentation are written in Markdown and are compiled using the Hugo static site generator with the Docsy theme and served from the Netlify platform. The site's code is stored on the etcd GitHub repo.

**In scope:**
- Website: https://etcd.io
- Documentation: https://etcd.io/docs
- Website repo: https://github.com/etcd-io/website
- Main project contributor info: https://github.com/etcd-io/etcd

**Out of scope:**
- Other etcd repos: https://github.com/etcd-io/*


## How this document is organized

This document is divided into three sections that represent three major areas of concern:

- **Project documentation:** concerns documentation for users of the etcd software, aimed at people who intend to use it
- **Contributor documentation:** concerns documentation for new and existing contributors to the etcd OSS project
- **Website:** concerns the mechanics of publishing the documentation, and includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate [criteria][cncf-doc-criteria] for the section, then proceeds to:
- **Comments**: observations about the existing documentation, with a focus on how it does or does not help etcd users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of the documentation. 

An accompanying document, [etcd-implementation.md][implementation-doc], breaks the recommendations down into concrete actions that can be implemented by project contributors. Its focus is on drilling down to specific, achievable work that can be completed in constrained blocks of time. Ultimately, the implementation items should be tracked as a series of Github [issues][etcd-issues].


## How to use this document

Readers interested only in actionable improvements should skip this document and read [etcd-implementation.md][implementation-doc].

Readers interested in the current state of the documentation and the reasoning behind the recommendations should read this document or the section pertaining to their area of concern:

- [Project documentation][proj-doc]
- [Contributor documentation][contributor-doc]
- [Website and documentation infrrastructure][website]

Examples of CNCF documentation that demonstrate the analysis criteria are linked from the [Criteria][cncf-doc-criteria] specification. 


### Recommendations, requirements, and best practices

Notwithstanding the fact that this analysis measures documentation against CNCF project maturity standards, in most cases there is more than one way to do things. Few recommendations here are meant to be prescriptive. Rather, recommendations are based on documentation best practices as understood by the reviewers. The recommended implementations represent the reviewers' experience with how apply those best practices. In other words, borrowing terminology from the lexicon of [RFCs][rfc-keywords], the changes described here should be understood as "recommended" or "should" at the strongest, and "optional" or "may" in many cases. Any "must" or "required" actions are clearly denoted as such, and pertain to legal requirements such as copyright and licensing issues. 


## Project documentation

etcd is a **graduated** project of CNCF. This means that the project should have [*very high*](https://github.com/cncf/techdocs/blob/main/assessments/criteria.md) standards for documentation.

| Criterion                  |  Rating (1-5)  |
| ---                        |    ---   |
| Information architecture   |     2 - needs improvement    |
| New user content           |     2 - needs improvement    |
| Content maintainability    |     3 - meets standards     |
| Content creation processes |     2 - needs improvement     |
| Inclusive language         |      2 - needs improvement    |


### Comments

The following sections contain brief assessments of each element of the Project Documentation rubric.

#### Information architecture

There is **high-level conceptual** and design content, but it is hidden in a *Learning* section two-thirds of the way down the TOC. 

The *Learning* section, right before *Developer guide* in the ToC, is a catch-all for a lot of different types of information:

- An architectural overview (actually a fairly detailed explanation of how etcd's client and resiliency architectures work).
- Adoption decision information, in *etcd versus other key-value stores*. 
- A glossary.

There is a single paragraph on the [website][etcd-io] landing page with a "Learn more" link that goes to the current documetation table of contents.

The documentation is not quite **feature complete**. There are a few **undocumented tasks** associated with key features. For example, Kubernetes installation is not fully documented.

There are **instructions** for various features. These instructions include:

- A Quickstart guide
- Installation instructions
- Tutorials
- Instructions on how to tune the server cluster
- Using the CLI

... and other tasks and procedures.

The documentation contains an adequate introduction and overview, but these are buried in the doc and difficult to find. 

The **"happy path"** for etcd is not a simple procedure, but I believe that there is sufficient documentation of the most common use cases (configure and run HA server cluster; set and get key-value pairs via an API from an application) to argue that it is documented.

Task and tutorial content is **clearly named according to user goals**. 

**Escalation paths** are clearly described in [Reporting bugs](https://etcd.io/docs/v3.5/reporting_bugs/) and [Triage](https://etcd.io/docs/v3.5/triage/).

The product provides a [**reference for the API**](https://etcd.io/docs/v3.5/learning/api/). The documentation also references many language-specific libraries used to integrate with etcd.

Documentation content is **up to date and is versioned**. The current documentation set is for the stable 3.5 release of etcd. The site also contains a draft version of documentation for the 3.6 release labeled "v3.6-DRAFT".


#### New user content

There are **install** and **quick start** entries in the ToC. 

The **installation** page gives step-by-step instructions for installing binaries, from source, and using a package manager. Installation as part of a Kubernetes installation is also described on the page, but there is a placeholder under the heading "Installation as part of Kubernetes installation".

There is an example **installation** on the [etcd Play](http://play.etcd.io/install) server.

Package manager installation is documented (but not recommended) for Linux and MacOS. **Other OSes** are alluded to but not documented. Supported platforms are documented in the [Operations guide](https://etcd.io/docs/v3.5/op-guide/supported-platform/).

The *Quickstart* section lists suggested next steps in a *What's next?* heading. However, there is no such section on the *Installation* page, and in neither location is a clear **workflow path** delineated.

There is no **new user signpost** in the documentation. The closest equivalent is the *Quickstart* section, which has a rudimentary "What's next?" section as previously described.

The examples in the installation, configuration, and other documentation provide ample code to **copy-paste**.


#### Content maintainability & site mechanics

Documentation is fully **searchable**. Searches are limited to the stable software version.

The website content folder contains a **language-specific directory** in its hierarchy, implying a mechanism for doing **internationalization** if necessary. There do not appear to be plans to translate the documentation from English.

Documentation content is **versioned** with the software. Versions are maintained in separate **directories** in the website content repo. 


#### Content creation processes

There are instructions for contributing to documentation and for **releasing a new version** of the etcd **documentation** in the `README.md` file in the [website repo](https://github.com/etcd-io/website/blob/main/README.md). The instructions are out of date and seem to require intervention to fix a bad current-version redirect. 

It's not immediately clear **who is responsible** for approving documentation PRs.

The website has a [**list of maintainers and reviewers**](https://github.com/etcd-io/website/blob/main/MAINTAINERS).


#### Inclusive language

Language is mostly inclusive. For example, the neutral terms "Leader" and "Follower" are used to describe server failover roles.

However, there are isolated instances of somewhat **non-inclusive language**. For example:

- [installation check][install-check]: contains "sanity check", a term designated "Strongly Consider Replacing" by the [Inclusive Naming Initiative][inclusive-naming].
- There is some use of language like "easy", "simple", and "just [take an action]"; for example, "Creating a user is as easy as" in [Role-based access control](https://etcd.io/docs/v3.5/op-guide/authentication/rbac/).

### Recommendations

I strongly recommend removing the animated GIFs of CLI interactions. Especially the multi-window ones. They illustrate nothing and make the reader seasick. Depending on their purpose, replace them with code samples and/or flow diagrams.


## Contributor documentation

etcd is a **graduated** project of CNCF. This means that the project should have [*very high*](https://github.com/cncf/techdocs/blob/main/assessments/criteria.md) standards for documentation.

| Criterion                                 | Rating (1-5)   |
| ---                                       | --- | 
| Communication methods documented          |  3 - meets standards   | 
| Beginner friendly issue backlog           |  3 - meets standards   |
| “New contributor” getting started content |  3 - meets standards   | 
| Project governance documentation          |  4 - meets or exceeds standards   | 


### Comments

Instructions for building the website state that the local build starts the server on `localhost:8888`. It's actually `localhost:1313` which then starts `8888` Not sure why this is necessary yet. TBD.

#### Communication methods documented

**Communication channels** include a Google Group and Twitter, and are documented on the [Community][etcd-community] page. 

There is a link to the **GitHub** repository in the website footer. There are links on the Community page to the [**GitHub** Discussions][etcd-git-discuss]  page and the [How to contribute][etcd-howtocontrib].

The Community page has a schedule, minutes, and recordings of the project's biweekly **meetings**.

There does not seem to be any periodic broadcast communication like a **mailing list**.


#### Beginner friendly issue backlog

There is a label (`area/documentation`) for **documentation issues**. There is a separate **good first issue** label. Issues are generally **well documented** by submitters and discussed in the Issues forum.

There are a number of **stale issues**. Here's a summary of the age of open issues for etcd at the time of this writing:


| Age | Count | Histogram |
| --- | ----- | --- |
| < 1 mo | 22 | **** |
| 1 mo - 2 mo | 10 | ** |
| 2 mo - 3 mo | 10 | ** |
| 3 mo - 6 mo | 38 | ******* |
| 6 mo - 12 mo | 40 | ******** |
| > 12 mo | 52 | *********** |


#### New contributor getting started content

There is a [**Community**][etcd-community] page on the etcd website. There is no dedicated **"first-contributor"** document, but there are multiple resources and pointers in the general contributor instructions. New contributors should have minimal difficulty **finding help** if they need it.


#### Project governance documentation

[**Project goverance**][etcd-govern] is clearly documented.


### Recommendations

Create and expose a conspicuous "First contributor start here" document, with links to the other contributor resources.

## Website

etcd is a **graduated** project of CNCF. This means that the project should have [*very high*](https://github.com/cncf/techdocs/blob/main/assessments/criteria.md) standards for documentation.

| Criterion                                   | Rating (1-5) | 
| ---                                         | --- | 
| Single-source for all files                 |  4  |
| Meets min website req. (for maturity level) |  2  |
| Usability, accessibility, and design        |  3  |
| Branding and design                         |  4  |
| Case studies/social proof                   |  3  |
| SEO, Analytics, and site-local search       |    |
| Maintenance planning                        |    |
| A11y plan & implementation                  |    |
| Mobile-first plan & impl.                   |  3  |
| HTTPS access & HTTP redirect                |  4  |
| Google Analytics 4 for production only      |    |
| Indexing allowed for production server only |    |
| Intra-site / local search                   |    |
| Account custodians are documented           |  4  |

Scale:
| Rating | Meaning |
| --- | --- |
| 1 | Is not present |
| 2 | Is incomplete |
| 3 | Is complete but misplaced, distributed, or obscured |
| 4 | Is complete and meets project maturity standards |
| 5 | Exceeds project maturity standards |

### Comments

#### Single-source requirement

The website has its own GitHub **repository**. The website repo contains the documentation and is separated from the project source code. Contributor documentation is contained mostly in the main *etcd* repo in well labeled Markdown files.

#### Minimal website requirements

Except for archived projects, requirements are cumulative through project maturity levels so, for example, incubating projects must satisfy the requirements for sandbox projects.

Listed and acknowledged below are the (cumulative) _minimal_ website requirements for projects based on their [maturity level][website-min-reqs]: sandbox, incubating, graduated and archived.

| Maturity | Requirement | Met? |
| ---      | ---         | --- |
| Sandbox  | Majority of [Website guidelines][website-guidelines] satisfied | Yes |
| Sandbox | [Docs assessment][assess-howto] [submitting a request][cncf-servicedesk] completed. | Yes |
| Sandbox | **Project documentation** exists – somewhere. It is acceptable at this maturity level to link out to documentation that hasn't yet been integrated into the website. (May still be in the project GitHub repo, for example.) | Yes |
| Incubating | All [Website guidelines][website-guidelines] satisfied | No - no DCO some repos, incl. doc |
| Incubating | Request docs (re-)assessment through CNCF [service desk][cncf-servicedesk] | Yes |
| Incubating | **Project doc**: stakeholders (roles) identified and doc needs documented | No |
| Incubating | **Project doc**: Hosted directly | Yes |
| Incubating | **Project doc**: Comprehensive, addressing most stakeholder needs | Yes |
| Graduated | [Docs assessment][assess-howto]: all assessment follow-through actions are complete |  |
| Graduated | **Project doc** fully addresses needs of key stakeholders | No |
| Archived | The website repo is in an [archived state][archiving-repo] | n/a |
| Archived | Archived status of the project is obvious to site visitors | n/a |
| Archived | Link to successor project website and/or migration documentation (if it exists) | n/a |

#### Usability, accessibility and devices

The site is **usable from mobile**. **Doc pages are readable**. Features such as **search** and **top-nav** work; the **in-page TOC** is missing on a small phone screen. A **mobile-first design** does not make sense for this project.

Most, but not all **color contrasts** seem significant enough for color-impaired readers. For example, there are some light-blue on dark-blue labels on buttons on the landing page. Basic **website features**, including navigation, can be done via **keyboard**. Unknown whether **text-to-speech** is a good user experience for listeners.


#### Branding and design

The website and documentation carry an **easily recognizable brand** for the project based on logo, color scheme, and template layout. The brand is used **consistently** on the site. The text is easily **readable**.


#### Case studies/social proof

The landing page lists a tiny **"logo wall"** of four "Used by" organizations, but does not offer **case studies**. Instead, it links to their  home pages. No **user testimonials** are available.

There is a **project blog**, but it is not a site of active discussion; blog post frequency is annual or less. There do not seem to be any **community talks** available on the website. The YouTube channel contains videos of the bi-weekly meetings. 

There is an ADOPTERS.md file in the etcd-io/etcd repository that lists a number of production users of etcd. Each entry in the file gives some details about the production installation, including when it was launched, the cluster size, what application is using etcd, and the cloud environment. The list of production users in this file is probably not exhaustive.


#### SEO, Analytics and site-local search

***TBD***

**Analytics:**
* Is analytics enabled for the production server?
* Is analytics disabled for all other deploys?
* If your project used Google Analytics, have you migrated to GA4?
* Can Page-not-found (404) reports easily be generated from you site analytics? Provide a sample of the site's current top-10 404s.

**Indexing and Search:**
* Is site indexing supported for the production server, while disabled for website previews and builds for non-default branches?
* Is local intra-site search available from the website?

* Are the current custodian(s) of the following accounts clearly documented: analytics, Google Search Console, site-search (such as Google CSE or Algolia)

#### Maintenance planning

The website uses Hugo and Docsy, which are the preferred **website tooling** for CNCF projects. 


Web maintainers cultivated? ***TBD***

Site build times reasonable? ***TBD***

Site maintainers have **adequate permissions** to update the website. (I assume. ***TBD***).

Maintainers of the etcd-io/website repository are adequately documented in the OWNERS file in the repo. Approvers and reviewers are listed. 

#### Other

The website is accessible via **HTTPS**. Requests using **HTTP** are properly redirected to the **HTTPS** URLs.

### Recommendations

TBD

## Recommendations


<!--- References --->

[etcd-io]: https://etcd.io
[cncf-doc-criteria]: ../criteria.md
[implementation-doc]: ./etcd-implementation.md
[proj-doc]: ../criteria.md#project-documentation
[contributor-doc]: ../criteria.md/#contributor-documentation
[website]: ../criteria.md/#website
[etcd-issues]: ./etcd-issues.md
[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
[inclusive-naming]: https://inclusivenaming.org
[install-check]: https://etcd.io/docs/v3.5/install/#installation-check
[website-min-reqs]: https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations
[assess-howto]: https://github.com/cncf/techdocs/blob/main/assessments/howto.md
[website-guidelines]: https://github.com/cncf/techdocs/blob/main/docs/website-guidelines-checklist.md
[cncf-servicedesk]: https://servicedesk.cncf.io
[archiving-repo]: https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories
[etcd-community]: https://etcd.io/community/
[etcd-howtocontrib]: https://github.com/etcd-io/etcd/blob/main/CONTRIBUTING.md
[etcd-git-discuss]: https://github.com/etcd-io/etcd/discussions
[etcd-govern]: https://github.com/etcd-io/etcd/blob/main/GOVERNANCE.md
