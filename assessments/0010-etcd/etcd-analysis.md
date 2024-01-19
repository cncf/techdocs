 ---
title: etcd Documentation Analysis
tags: etcd
created: 2023-09-01
modified: 2024-01-08
author: Dave Welsch (@dwelsch-esi)
---

# Introduction

This document analyzes the effectiveness and completeness of the [etcd][etcd-io] open source software (OSS) project's documentation and website. It is funded by the CNCF Foundation as part of its overall effort to incubate, grow, and graduate open source cloud native software projects. 

According to CNCF best practices guidelines, effective documentation is a prerequisite for program graduation. The documentation analysis is the first step of a CNCF process aimed at assisting projects with their documentation efforts. 

## Purpose

This document was written to analyze the current state of etcd documentation. It aims to provide project leaders with an informed understanding of potential problems in current project documentation. The companion document, etcd-impementation.md, outlines an actionable plan for improvement.

This document:

- Analyzes the current etcd technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment. The companion document, etcd-impementation.md, provides specific actionable suggestions and recommendations for overall organization and presentation of documentation

## Scope of analysis

The documentation discussed here includes the entire contents of the website (which contains the technical docs), as well as documentation for contributors and users on the etcd GitHub repository. 

The etcd website and documentation are written in Markdown and are compiled using the Hugo static site generator with the Docsy theme and served from the Netlify platform. The site's code is stored on the etcd GitHub repo.

**In scope:**
- Website: https://etcd.io
- Documentation: https://etcd.io/docs
- Website repo: https://github.com/etcd-io/website
- Main project contributor info: https://github.com/etcd-io/etcd
- Demo server: http://play.etcd.io

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

Readers interested in the current state of the documentation and the reasoning behind the recommendations should read the section of this document pertaining to their area of concern:

- [Project documentation][proj-doc]
- [Contributor documentation][contributor-doc]
- [Website and documentation infrrastructure][website]

Examples of CNCF documentation that demonstrate the analysis criteria are linked from the [Criteria][cncf-doc-criteria] specification. 


### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards, and suggests possible improvements. In most cases there is more than one way to do things. Few recommendations here are meant to be prescriptive. Rather, the recommended implementations represent the reviewers' experience with how to apply documentation best practices. In other words, borrowing terminology from the lexicon of [RFCs][rfc-keywords], the changes described here should be understood as "recommended" or "should" at the strongest, and "optional" or "may" in many cases. Any "must" or "required" actions are clearly denoted as such, and pertain to legal requirements such as copyright and licensing issues. 


# Project documentation

etcd is a **graduated** project of CNCF. This means that the project should have [*very high*][cncf-doc-criteria] standards for documentation.

| Criterion                  |  Rating (1-5)  |
| ---                        |    ---   |
| Information architecture   |     2 - needs improvement    |
| New user content           |     2 - needs improvement    |
| Content maintainability    |     3 - meets standards     |
| Content creation processes |     2 - needs improvement     |
| Inclusive language         |      2 - needs improvement    |


## Comments

Much of the documentation seems as if it hasn't been reviewed and updated for a while.

The following sections contain brief assessments of each element of the Project Documentation rubric.

### Information architecture

There is **high-level conceptual** and design content, but it is hard to find. Most of it is in a *Learning* section, which is not a conventional label for a system overview. 

The *Learning* section, right before *Developer guide* in the ToC, is a catch-all for a lot of different types of information:

- An architectural overview (explanations of how etcd's client and resiliency architectures work).
- Adoption decision information, in *etcd versus other key-value stores*. This information needs updating.
- An overview of the gRPC-based API.
- A glossary.

The documentation is not **feature complete**. There are some **undocumented tasks** associated with key features. For example, Kubernetes and Linux installations are not fully documented. The [Authentication][docs-authentication] page is a stub containing only a CLI example.

The documentation contains **instructions** for various features. These instructions include:

- A Quickstart guide
- Installation instructions
- Tutorials
- How to tune the server cluster
- Using the CLI

... and other tasks and procedures.

The documentation contains an adequate introduction and overview, but these are buried in the doc and difficult to find. The adoption path needs more focus and to be split out by user role. For example, "Getting started" should be different for a developer setting up a development server vs. an admin setting up a production server.

The **"happy path"** for etcd is not a simple procedure and, again, varies by user role. However, I believe that there is sufficient documentation of the most common use cases (configure and run an HA server cluster; set and get key-value pairs via an API from an application) to argue that it is documented. Exception: The Kubernetes and Linux installation instructions noted above. 

Task and tutorial content are **clearly named according to user goals**. Using "-ing" verb forms instead of "How to ..." would make headings easier to navigate.

Tutorials contain large animated graphics of command line activity. These are distracting and degrade the usability of the instructions.

**Escalation paths** are clearly described in [Reporting bugs](https://etcd.io/docs/v3.5/reporting_bugs/) and [Triage][etcdio-triage].

The product provides a [**reference for the API**](https://etcd.io/docs/v3.5/learning/api/). The documentation also references many language-specific libraries used to integrate with etcd.

Documentation content **is versioned**. The current documentation set is for the stable 3.5 release of etcd. The site also contains a draft version of documentation for the 3.6 release labeled "v3.6-DRAFT". The site lists several versions of the documentation for down-level releases. These could be archived.

There are references to previous releases in the documentation. Most of these should probably be removed. 

Benchmarks for down-level versions are available in the current documentation. It's not clear why these old benchmarks haven't been removed from the documentation.

There is an example **installation** on the [etcd Play](http://play.etcd.io/install) server that presents  "an example workflow to install and deploy etcd." This page consists of a form containing parameters (with no explanation of each parameter other than the label) followed by a CLI script that varies depending on the installation type you choose. Presumably you're supposed to run the script to do the install, but there are no clear task instructions at all. It's not clear how this is useful. Novice users will have a hard time with this. Also, why is this information on the demo server at all? Users should be referred to an installation procedure in the documentation. If this represents a separate, automated installation workflow it should be offered as a procedure in the user doc.

### New user content

There is a single paragraph on the [website][etcd-io] landing page with a "Learn more" link that goes to the current documetation table of contents (ToC). It would be better to link to an overview page that laid out learning paths for different users ("Start here"). 

There are **install** and **quick start** entries in the technical documentation ToC. These are good starting points but could be refined. User roles are not addressed.

The **installation** page gives step-by-step instructions for installing from binaries, from source, and using a package manager. Installation as part of a Kubernetes installation is also described on the page, but there is a placeholder under the heading "Installation as part of Kubernetes installation". Linux installation is also "TBD", which seems like a big omission.

Package manager installation is documented (but not recommended) for Linux and MacOS. **Other OSes** are alluded to but not documented. Supported platforms are documented in the [Operations guide](https://etcd.io/docs/v3.5/op-guide/supported-platform/).

The *Quickstart* section lists suggested next steps in a *What's next?* heading. However, there is no such section on the *Installation* page, and in neither location is a clear **workflow path** delineated.

There is no **new user signpost** in the documentation. The closest equivalent is the *Quickstart* section, but the Quickstart does not differentiate among user roles (Developer? Operator? Evaluator trying to decide whether to adopt?).

The examples in the installation, configuration, and other documentation provide ample code to **copy-paste**.

There are instructions for installing and getting started in the etcd-io/etcd [README][etcd-readme]. It would be preferable to point new users and contributors to the documentation straightaway.


### Content maintainability & site mechanics

Documentation content is **versioned** with the software. Versions are maintained in separate **directories** in the website content repo. 

Documentation is fully **searchable**. Searches are apparently limited to the current (stable) software version, though searching for "upgrade" lists instructions for upgrading 3.3 -> 3.4 in the v3.4 doc, 3.2 -> 3.3 in the 3.3 doc, and so on. Search also returns blog entries.

There are links to docs for previous releases in some of the 3.5 documentation files:

- dev-internal/discovery_protocol.md
- op-guide/runtime-configuration.md
- op-guide/recovery.md
- metrics.md
- dev-guide/discovery_protocol.md

The website content folder contains a **language-specific directory** in its hierarchy, implying a mechanism for doing **internationalization** if necessary. There do not appear to be plans to translate the documentation from English.

There is a Github issue label (`area/documentation`) for **documentation issues**.


### Content creation processes

There are instructions for contributing to documentation and for **releasing a new version** of the etcd **documentation** in the `README.md` file in the [website repo](https://github.com/etcd-io/website/blob/main/README.md). The instructions are out of date. See issues #383, 405, 406.

The website has a [**list of maintainers and reviewers**](https://github.com/etcd-io/website/blob/main/OWNERS). Those maintainer **responsible for approving** documentation PRs are listed as "approvers".

The website repo [README](../../README.md) is out of date. For example, instructions for building the website state that the local build starts the server on `localhost:8888`. It's actually `localhost:1313`.


### Inclusive language

Language is mostly inclusive. For example, the neutral terms "Leader" and "Follower" are used to describe server failover roles.

However, there are isolated instances of somewhat **non-inclusive language**. For example:

- [installation check][install-check]: contains "sanity check", a term designated "Strongly Consider Replacing" by the [Inclusive Naming Initiative][inclusive-naming].
- There is some use of language like "easy", "simple", and "just [take an action]"; for example, "Creating a user is as easy as" in [Role-based access control](https://etcd.io/docs/v3.5/op-guide/authentication/rbac/).

## Recommendations

### Information architecture

Reorganize the table of contents (ToC) to separate three types of information:
- **Conceptual**: Information that is necessary to understanding but not directly usable. The main bodies of conceptual information are architecture and system overviews.
- **Instructional**: How to complete tasks necessary to use the software (this includes programming and integration using APIs). Organize instructional material by user role: for etcd, the two main user roles seem to be 1) developers, and 2) operators or admins responsible for running and maintaining etcd server instances.
- **Reference**: The details of CLI commands, API metehods and objects, system configuration options, and other information that needs to be looked up in the course of performning a task.

For an excellent and very literal example of this approach, see the [Kubernetes documentation][k8s-doc].

Much of the conceptual information about etcd is in the "Learning" section. Rename this section and organize it into a primer on the etcd architecture. Move non-conceptual information elsewhere.

Fill in missing instructional documentation. Most notably, write instructions for installing on Kubernetes and Linux, and on using Authentication.

Use "-ing" verb forms instead of "How to ..." as headings for procedures.

Break procedures out to one per page. For example, instead of every installation case being on one page, create a navigation page explaining the use case for each installation and link to a page whose sole content is step-by-step installation instructions.

Replace animated GIFs of command line activity with static listings of the outputs that can be studied and copy/pasted.

Create a Troubleshooting page that helps with common problems. Link to Slack channels and issue and PR submission instructions in the GitHub repo in case more help is needed.

Consider archiving old versions of the documentation to reduce clutter.

Remove references to previous releases in the documentation. These references are in the following 3.5 documentation files:

- learning/design-learner.md
- learning/design-client.md
- op-guide/versioning.md
- op-guide/container.md
- op-guide/clustering.md
- op-guide/authentication/rbac.md
- op-guide/maintenance.md
- benchmarks/*
- upgrades/*
- dev-guide/api_grpc_gateway.md
- dev-guide/interacting_v3.md
- dev-guide/grpc_naming.md

In general, confine release-specific discussion to the Release Notes. 

Remove benchmarks for down-level versions in the current documentation if they're no longer relevant.

Consider removing the installation example from the [etcd Play](http://play.etcd.io/install) server and pointing the user to the documentation's installation instructions.

### New user content

Point "Learn more" links to a "Start here" page that provides orientation and sets out paths for different user roles. For example, the Developer path should provide instructions for:

1. Installing a local server.
2. Setting up an environment and testing the server using the CLI.
3. Getting started programming with an API.

Write step-by-step instructions for all installation cases. Clearly describe what each case is for; especially distinguish between development and production installations.

Revise the Quick Start guide to indicate which user role it's for: developer, operator/admin, or adoption decision maker (it might need to be split into two or more guides). Focus the options in the "What's next?" section to point to a few (two or three) learning paths for specific persona use cases.

Remove getting-started instructions from the main GitHub repo README and instead point the user to the documentation.

### Content maintainability & site mechanics

Remove links to documentation for previous releases from the current documentation version. Going forward, write doc for each release without referring to previous ("In 3.2 this feature was changed ...") or future ("We plan to upgrade this in the next release ..."). Such comments should go only in release notes.

References to previous versions are in the following 3.5 documentation files:

- dev-internal/discovery_protocol.md
- op-guide/runtime-configuration.md
- op-guide/recovery.md
- metrics.md
- dev-guide/discovery_protocol.md


### Content creation processes

Update the content creation instructions in the website README file.

Move issue and PR submission guidelines from the documentation ("Triage") to the Github repo. Link to these guidelines from a Troubleshooting section in the docs.


### Inclusive language

Audit the documentation for non-inclusive language.


# Contributor documentation

etcd is a **graduated** project of CNCF. This means that the project should have [*very high*](https://github.com/cncf/techdocs/blob/main/assessments/criteria.md) standards for contributor documentation.

| Criterion                                 | Rating (1-5)   |
| ---                                       | --- | 
| Communication methods documented          |  3 - meets standards   | 
| Beginner friendly issue backlog           |  3 - meets standards   |
| “New contributor” getting started content |  3 - meets standards   | 
| Project governance documentation          |  4 - meets or exceeds standards   | 


## Comments

### Communication methods documented

**Communication channels** include a Google Group and Twitter, and are documented on the [Community][etcd-community] page. 

There is a link to the **GitHub** repository in the website footer. There are links on the Community page to the [**GitHub** Discussions][etcd-git-discuss]  page and the [How to contribute][etcd-howtocontrib].

The Community page has a schedule, minutes, and recordings of the project's biweekly **meetings**.

There does not seem to be any periodic broadcast communication like a **mailing list**.

[Triage][etcdio-triage] contains instructions for dealing with issues and PRs in the etcd repo. These should be in the repo itself, with a pointer from the documentation troubleshooting section.


### Beginner friendly issue backlog

There is a **good first issue** label. Issues are generally **well documented** by submitters and discussed in the Issues forum. There is a label (`area/documentation`) for **documentation issues**. 

There are a number of **stale issues**. Here's a summary of the age of open issues for the etcd main repo at the time of this writing:


| Age | Count | Histogram |
| --- | ----- | --- |
| < 1 mo | 22 | **** |
| 1 mo - 2 mo | 10 | ** |
| 2 mo - 3 mo | 10 | ** |
| 3 mo - 6 mo | 38 | ******* |
| 6 mo - 12 mo | 40 | ******** |
| > 12 mo | 52 | *********** |


### New contributor getting started content

There is a [**Community**][etcd-community] page on the etcd website. There is no dedicated **"first-contributor"** document, but there are multiple resources and pointers in the general contributor instructions. New contributors should have minimal difficulty **finding help** if they need it.


### Project governance documentation

[**Project goverance**][etcd-govern] is clearly documented.


## Recommendations


### Communication methods documented

Move the information from the [Triage][etcdio-triage] doc section into the repo itself, with pointers from the documentation Troubleshooting guide.


### Beginner friendly issue backlog

No recommendations.


### New contributor getting started content

Consider creating a conspicuous "First contributor start here" document in the repo, with links to the other contributor resources.


### Project governance documentation

No recommnendations.


# Website

etcd is a **graduated** project of CNCF. This means that the project should have [*very high*](https://github.com/cncf/techdocs/blob/main/assessments/criteria.md) standards for documentation.

| Criterion                                   | Rating (1-5) | 
| ---                                         | --- | 
| Single-source for all files                 |  5 - exemplary  |
| Meets min website req. (for maturity level) |  2 - needs improvement  |
| Usability, accessibility, and design        |  3 - meets standards  |
| Branding and design                         |  4 - meets or exceeds standards  |
| Case studies/social proof                   |  3 - meets standards  |
| SEO, Analytics, and site-local search       |  5 - exemplary |
| Maintenance planning                        |  5 - exemplary |
| A11y plan & implementation                  |  4 - meets or exceeds standards  |
| Mobile-first plan & impl.                   |  3 - meets standards  |
| HTTPS access & HTTP redirect                |  4 - meets or exceeds standards  |
| Google Analytics 4 for production only      |  5 - exemplary |
| Indexing allowed for production server only |  5 - exemplary |
| Intra-site / local search                   |  5 - exemplary |
| Account custodians are documented           |  4 - meets or exceeds standards  |


## Comments

### Single-source requirement

The website has its own GitHub **repository**. The website repo contains the documentation and is separated from the project source code. 

**Contributor documentation** is contained in the [main code repo][github-etcd-etcd] in well labeled Markdown files.

### Minimal website requirements

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
| Graduated | [Docs assessment][assess-howto]: all assessment follow-through actions are complete | No |
| Graduated | **Project doc** fully addresses needs of key stakeholders | No |
| Archived | The website repo is in an [archived state][archiving-repo] | n/a |
| Archived | Archived status of the project is obvious to site visitors | n/a |
| Archived | Link to successor project website and/or migration documentation (if it exists) | n/a |

### Usability, accessibility and devices

The site is **usable from mobile**. **Doc pages are readable**. Features such as **search** and **top-nav** work; the **in-page TOC** is missing on a small phone screen. A **mobile-first design** does not make sense for this project.

Most, but not all **color contrasts** seem significant enough for color-impaired readers. For example, there are some light-blue on dark-blue labels on buttons on the landing page. Basic **website features**, including navigation, can be done via **keyboard**. Unknown whether **text-to-speech** is a good user experience for listeners.


### Branding and design

The website and documentation carry an **easily recognizable brand** for the project based on logo, color scheme, and template layout. The brand is used **consistently** on the site. The text is easily **readable**.


### Case studies/social proof

The landing page lists a tiny **"logo wall"** of four "Used by" organizations, though given that one of those organizations is Kubernetes, this seems adequate. The site does not offer **case studies**. Instead, logos link to the organizations' home pages. No **user testimonials** are available.

There is a **project blog**, but it is not a site of active discussion; blog post frequency is annual or less. There do not seem to be any **community talks** available on the website. The YouTube channel contains videos of the bi-weekly meetings. 

There is an ADOPTERS.md file in the etcd-io/etcd repository that lists a number of production users of etcd. Each entry in the file gives some details about the production installation, including when it was launched, the cluster size, what application is using etcd, and the cloud environment. The list of production users in this file is probably not exhaustive.


### SEO, Analytics and site-local search

The website has site-wide search, GA4 enabled, and well indexed on popular search engines; matches perfectly to our criteria.

**Analytics:**
* Is analytics enabled for the production server?
* Is analytics disabled for all other deploys?
* If your project used Google Analytics, have you migrated to GA4?
* Can Page-not-found (404) reports easily be generated from you site analytics? Provide a sample of the site's current top-10 404s.

**Indexing and Search:**
* Is site indexing supported for the production server, while disabled for website previews and builds for non-default branches?
* Is local intra-site search available from the website?

* Are the current custodian(s) of the following accounts clearly documented: analytics, Google Search Console, site-search (such as Google CSE or Algolia)

### Maintenance planning

The website uses Hugo and Docsy, which are the recommended **website tooling** for CNCF projects. 


Web maintainers cultivated? Maintainers are actively cultivated within the community.

The website builds in **reasonable time** on a desktop computer.

Site maintainers have **adequate permissions** to update the website. 

Maintainers of the [website repository][website-repo] are adequately documented in the OWNERS file in the repo. Approvers and reviewers are listed. 


### Other

The website is accessible via **HTTPS**. Requests using **HTTP** are properly redirected to the **HTTPS** URLs.

The [demo server][demo-server] uses unsecured HTTP.

## Recommendations


### Single-source requirement

No recommendations.

### Minimal website requirements

Update website to include DCO or other source validation.

Identify stakeholders (user roles). Ensure that instructions exist in the documentation for all major use cases for each stakeholder. 


### Usability, accessibility and devices

Consider replaciing low-contrast text for the benefit of visually impaired users.


### Branding and design

No recommendations.


### Case studies/social proof

Consider adding user testimonials and/or case studies to the web page.

Consider posting updates and news to the blog more regularly.


### SEO, Analytics and site-local search

No recommendations.


### Maintenance planning

No recommendations.


### Other

Consider securing the [demo server][demo-server] using HTTPS.



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
[demo-server]: http://play.etcd.io
[github-etcd-etcd]: https://github.com/etcd-io/etcd
[etcdio-triage]: https://etcd.io/docs/v3.5/triage/
[doc-optimalclustersize-23]: https://etcd.io/docs/v2.3/admin_guide#optimal-cluster-size
[docs-authentication]: https://etcd.io/docs/v3.5/op-guide/authentication/authentication/
[etcd-readme]: https://github.com/etcd-io/etcd/blob/main/README.md
[k8s-doc]: https://kubernetes.io/docs/home/
[website-repo]: https://github.com/etcd-io/website/tree/main
