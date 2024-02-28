 ---
title: KEDA Documentation Analysis
tags: kdeda
created: 2024-02-23
modified: 2024-02-27
author: Dave Welsch (@dwelsch-esi)
---

# Introduction

This document analyzes the effectiveness and completeness of the [KEDA](https://keda.sh) open source software (OSS) project's documentation and website. It is funded by the CNCF Foundation as part of its overall effort to incubate, grow, and graduate open source cloud native software projects. 

According to CNCF best practices guidelines, effective documentation is a prerequisite for program graduation. The documentation analysis is the first step of a CNCF process aimed at assisting projects with their documentation efforts. 

## Purpose

This document was written to analyze the current state of KEDA documentation. It aims to provide project leaders with an informed understanding of potential problems in current project documentation. The companion document, keda-impementation.md, outlines an actionable plan for improvement. 

This document:

- Analyzes the current KEDA technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment. The companion document, keda-impementation.md, provides specific actionable suggestions and recommendations for overall organization and presentation of documentation

## Scope of analysis

The documentation discussed here includes the entire contents of the website (which contains the technical docs), as well as documentation for contributors and users on the KEDA GitHub repository. 

The KEDA website and documentation are written in Markdown and are compiled using the Hugo static site generator with the Docsy theme and served from the Netlify platform. The site's code is stored on the KEDA GitHub repo.

**In scope:**
- Website: https://keda.sh
- Documentation: https://keda.sh/docs
- Website repo: https://github.com/kedacore/keda-docs
- Governance repo: https://github.com/kedacore/governanace
- Main project contributor info: https://github.com/kedacore/keda

**Out of scope:**
- Other KEDA repos: https://github.com/kedacore/*

## How this document is organized

This document is divided into three sections that represent three major areas of concern:

- **Project documentation:** concerns documentation for users of the KEDA software, aimed at people who intend to use it
- **Contributor documentation:** concerns documentation for new and existing contributors to the KEDA OSS project
- **Website:** concerns the mechanics of publishing the documentation, and includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate [criteria][cncf-doc-criteria] for the section, then proceeds to:
- **Comments**: observations about the existing documentation, with a focus on how it does or does not help KEDA users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of the documentation. 

An accompanying document, [keda-implementation.md][implementation-doc], breaks the recommendations down into concrete actions that can be implemented by project contributors. Its focus is on drilling down to specific, achievable work that can be completed in constrained blocks of time. Ultimately, the implementation items should be tracked as a series of Github [issues][keda-issues].


## How to use this document

Readers interested only in actionable improvements should skip this document and read [keda-implementation.md](./keday-implementation.md).

Readers interested in the current state of the documentation and the reasoning behind the recommendations should read the section of this document pertaining to their area of concern:

- [Project documentation](#project-documentation)
- [Contributor documentation](#contributor-documentation)
- [Website and documentation infrastructure](#website)

Examples of CNCF documentation that demonstrate the analysis criteria are linked from the [Criteria][cncf-doc-criteria] specification. 


### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards, and suggests possible improvements. In most cases there is more than one way to do things. Few recommendations here are meant to be prescriptive. Rather, the recommended implementations represent the reviewers' experience with how to apply documentation best practices. In other words, borrowing terminology from the lexicon of [RFCs][rfc-keywords], the changes described here should be understood as "recommended" or "should" at the strongest, and "optional" or "may" in many cases. Any "must" or "required" actions are clearly denoted as such, and pertain to legal requirements such as copyright and licensing issues. 


# Project documentation

KEDA is a **graduated** project of CNCF. This means that the project should have [*very high*][cncf-doc-criteria] standards for documentation.

| Criterion                  |  Rating (1-5)              |
| ---                        |    ---                     |
| Information architecture   |    2 - needs improvement   |
| New user content           |    2 - needs improvement   |
| Content maintainability    |    3 - meets standards     |
| Content creation processes |    2 - needs improvement   |
| Inclusive language         |    2 - needs improvement   |


## Comments

### Information architecture

There is an overview containing **high-level conceptual** content that explains what KEDA is and how it works. The conceptual overview has one diagram, which could be more clear and align better with the text.

Installation tasks are documented, but KEDA has other **undocumented tasks**. The documentation provides reference information for configuring KEDA but does not provide **instructions** on the most common use cases (**"happy path"**), how to use KEDA in a Kubernetes deployment. 

Aside from task descriptions, the documentation seems **feature complete**. Since KEDA is essentially a single-purpose API for Kubernetes, KEDA's scope is small, with the caveat that the project contains a collection of plug-in scalers (64 at the time of this writing), maintained variously by the community and by outside entities.

Documentation is **not clearly named according to user goals**, but there is probably only one user role (persona) for KEDA – an administrator adding KEDA-based scaling to a Kubernetes deployment. 

There are **escalation paths** available:
- The documentation contains a Troubleshooting section.
- The documentation contains a FAQ.
- The website has a blog, though posts are infrequent.
- The project has a Support page available from the website menu at Project > Support. The support page links to a contributor guide and a support policy page.
- There is a KEDA Slack channel in the Kubernetes workspace.
- There is a KEDA Discussions forum in the GitHub repo.

KEDA does not feature an **API** per se.

The documentation **is versioned** with the software; doc versions each have their own directory in the repo. Release notes are provided in the project main repo, and linked from a ROADMAP file. They are not linked from the documentation pages.

### New user content

There is partial **getting started** information in the documentation as [Deploying KEDA](https://keda.sh/docs/2.13/deploy/), the first topic in the table of contents. *Deploying KEDA* provides **installation instruction** for adding a KEDA runtime to a Kubernetes cluster.

There are **getting started** pages on the main GitHub repo for the following supported systems:
- RabbitMQ and Go
- Azure Functions and Queues
- Azure Functions and Kafka on Openshift 4
- Azure Storage Queue with ScaledJob

These pages list installing KEDA as a prerequisite. Taken together, "Deploying KEDA" and the scenarios in the repo make a complete Getting Started workflow, but they are in two separate places and the scenarios are not findable from the website.

There are also numerous examples available in the [samples repo](https://github.com/kedacore/samples).

KEDA does not require documentation for multiple **operating systems**.

The [Operate](https://keda.sh/docs/2.13/operate/) topic in the TOC provides instructions for using KEDA and the scenarios in the repo provide user instructions. However, new users starting on the website might not **know where to go after installation**. A more explicit **getting started workflow** would be helpful.

There is no obvious **new user signpost** in the documentation. The closest is *Deploying KEDA*, which again just gives installation instructions but no roadmap.

There is easily **copy-pastable** content for CLI input where appropriate, including in the installation instructions.

### Content maintainability & site mechanics

The documentation is **Searchable** using functionality provided by the site generation engine.

There do not seem to be any plans for **localization**. Docsy has **support for multiple languages** in case that changes.

The documentation is **versioned**. The repo contains a separate folder for each version.

### Content creation processes

The procedure for **building and releasing a new version** is documented in the doc repo README file.

The code contribution instructions contain brief **documentation creation and update** instructions.

The MAINTAINERS doc in the website repo points to the MAINTAINERS doc in the main repo, which does not tell who is **responsible for documentation pull requests**. The website does not have a **clear owner or maintainer**.

### Inclusive language

The documentation includes some examples of [**non-inclusive language**](https://inclusivenaming.org/). For example:
- "easily", "simple", "simply", etc.
  - https://keda.sh/docs/2.13/deploy/
  - https://keda.sh/docs/2.13/deploy/#uninstall-3
  - https://keda.sh/docs/2.13/concepts/scaling-deployments/#triggers
- "master" node
  - https://keda.sh/docs/2.13/troubleshooting/#google-kubernetes-engine-gke
  - https://keda.sh/docs/2.13/scalers/redis-sentinel-lists/#authentication-parameters

## Recommendations

### Information architecture

Reorganize the Table of Contents. Rename "The KEDA Documentation"; the name is misleading since it implies that it contains the entire documentation set. I'd suggest the following changes:
- Rename "The KEDA Documentation" to "Getting Started".
- Create a "Reference" topic at the end of the ToC.
- Move the FAQ to the Reference section.
- Add a glossary to the Reference section.
- Rename "Operate" to "User Guide".
- Move "Troubleshooting" to the end of the User Guide.

Move the scenarios from the KEDA GitHub repo to the user documentation on the website. Link to these from the end of "Deploying KEDA" to create a workflow for new users. 

Write step-by-step tasks in the User Guide that explain how to run and use KEDA, or link to other documentation that does, for example the [Kubernetes documentation on HPA](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/). For example, explain how to do 0-to-1 scaling.

### New user content

Clearly label the starting point for new users. Make sure that there is an easy to follow workflow for installation, configuring and running a basic scaler, and any other tasks required to begin using KEDA.

### Content maintainability & site mechanics

No recommendations

### Content creation processes

Make it easier to find the instructions for releasing a new version of the documentation and updating the documentation. 

Document in the repo who the website/documentation maintainers are. 

### Inclusive language

Remove non-inclusive language throughout the documentation as recommended on the [inclusive naming website](https://inclusivenaming.org/).


# Contributor documentation

KEDA is a **graduated** project of CNCF. This means that the project should have [*very high*](https://github.com/cncf/techdocs/blob/main/assessments/criteria.md) standards for contributor documentation.

| Criterion                                 | Rating (1-5)           |
| ---                                       | ---                    | 
| Communication methods documented          |  3 - meets standards   | 
| Beginner friendly issue backlog           |  3 - meets standards   |
| “New contributor” getting started content |  3 - meets standards   | 
| Project governance documentation          |  4 - meets or exceeds standards   | 


## Comments

### Communication methods documented

The KEDA main repo points to **community** resources, including a KEDA Slack channel in the Kubernetes workspace. There is a **community page** on the website that invites readers to a **biweekly Zoom meeting**. The main website has direct links in the footer to the Slack community, the **GitHub** repo, and a Twitter feed. I could not find any mention of a **mailing list**. 


### Beginner friendly issue backlog

Doc **issues** in the repo are **well documented** and have been labeled and, presumably, **triaged**. 

There is a **good first issue** label (although this label is not currently applied to any issues).

There are **stale issues**, but they seem for the most part to be managed. There are only ~30 open issues in the doc repo.


### New contributor getting started content

The website contains a **community section**. 

There is **CONTRIBUTORS** document in the website/documentation repo with instructions for **getting help** and building and contributing new documentation. 


### Project governance documentation

**Governance** is clearly documented in its own repo. Presumably this information is applicable to all of the repos in kedacore.


## Recommendations

### Communication methods documented

If there is a mailing list or other news distribution channel, add it to the community page. 


### Beginner friendly issue backlog

Revisit stale issues if they are not being reviewed.


### New contributor getting started content

No recommendations.


### Project governance documentation

No recommendations.


# Website

KEDA is a **graduated** project of CNCF. This means that the project should have [*very high*](https://github.com/cncf/techdocs/blob/main/assessments/criteria.md) standards for documentation.

| Criterion                                   | Rating (1-5) | 
| ---                                         | --- | 
| Single-source for all files                 |  3 - meets standards  |
| Meets min website req. (for maturity level) |  2 - needs improvement  |
| Usability, accessibility, and design        |  3 - meets standards  |
| Branding and design                         |  4 - meets or exceeds standards  |
| Case studies/social proof                   |  3 - meets standards  |
| SEO, Analytics, and site-local search       |    |
| Maintenance planning                        |    |
| A11y plan & implementation                  |  3 - meets standards  |
| Mobile-first plan & impl.                   |  n/a  |
| HTTPS access & HTTP redirect                |  4 - meets or exceeds standards  |
| Google Analytics 4 for production only      |    |
| Indexing allowed for production server only |    |
| Intra-site / local search                   |    |
| Account custodians are documented           |  2 - needs improvement  |


## Comments

### Single-source requirement

Source files for all website pages reside in a **single repo**. However, some user documentation pages (speciifically, "Getting started" topics linked from the main (kedacore/keda) repo) would better serve users if they were moved to the tech docs on the website.

Website files are all in the website repo. 


### Minimal website requirements

Except for archived projects, requirements are cumulative through project maturity levels so, for example, incubating projects must satisfy the requirements for sandbox projects.

Listed and acknowledged below are the (cumulative) _minimal_ website requirements for projects based on their [maturity level][website-min-reqs]: sandbox, incubating, graduated and archived.

| Maturity | Requirement | Met? |
| ---      | ---         | --- |
| Sandbox  | Majority of [Website guidelines][website-guidelines] satisfied | Yes |
| Sandbox | [Docs assessment][assess-howto] [submitting a request][cncf-servicedesk] completed. | Yes |
| Sandbox | **Project documentation** exists – somewhere. It is acceptable at this maturity level to link out to documentation that hasn't yet been integrated into the website. (May still be in the project GitHub repo, for example.) | Yes |
| Incubating | All [Website guidelines][website-guidelines] satisfied | Yes   |
| Incubating | Request docs (re-)assessment through CNCF [service desk][cncf-servicedesk] | Yes |
| Incubating | **Project doc**: stakeholders (roles) identified and doc needs documented | No |
| Incubating | **Project doc**: Hosted directly | Yes |
| Incubating | **Project doc**: Comprehensive, addressing most stakeholder needs | Yes |
| Graduated | [Docs assessment][assess-howto]: all assessment follow-through actions are complete | No |
| Graduated | **Project doc** fully addresses needs of key stakeholders | No - new user doc needs improvement |
| Archived | The website repo is in an [archived state][archiving-repo] | n/a |
| Archived | Archived status of the project is obvious to site visitors | n/a |
| Archived | Link to successor project website and/or migration documentation (if it exists) | n/a |

### Usability, accessibility and devices

The website is **usable from mobile**. Top-nav is reachable only via the hamburger menu on mobile devices. There is no in-page TOC or other context on mobile devices. The footer is identical on all platforms.

**Search** is available from the hamburger menu as well.

**Doc pages are readable** on all platforms.

A **mobile-first design** does not make sense for this project.

**Color contrasts** are mostly adequate. Some blue-on-black graphics and text are probably hard to read for color- or contrast-impaired readers.

Website features, *Search* most importantly, are usable using a **keyboard only**.

As with any text that contain a lot of code and special characters, **text-to-speech** is **not likely to offer listeners a good experience**.

### Branding and design

The website and documentation carry an **easily recognizable brand** for the project based on logo, color scheme, and template layout. The **brand is used consistently** on the site. The website's text is **easily readable**.


### Case studies/social proof


I'm unable to find **case studies** or **user testimonials** for the project. They're probably not as important for KEDA as they are for a more extensive product, though.

There is a **project blog**; posts are infrequent. The last one was in August 2023.

There are **community talks** for the project on YouTube. One talk, from KubeCon 2022, is **present on the website**.

There is a substantial **logo wall of users and participating organizations**. The KEDA project solicits users to register as "listed users."


### SEO, Analytics and site-local search

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

### Maintenance planning

The website uses Hugo and Docsy, which are the recommended **website tooling** for CNCF projects. 

There is no sign that the project is **cultivating website maintainers** from the community. However, the site is small and much of the content is links to community or third-party scalers (plugin components).

**Build times** for the website are minimal.

Presumably, **site maintainers have adequate permissions** since the documentation is up to date with the software.


### Other

The website is accessible via **HTTPS**. Requests using **HTTP** are properly redirected to the **HTTPS** URLs.


## Recommendations

### Single-source requirement

No recommendations.

### Minimal website requirements

Identify stakeholder roles in the user documentation (even if there is only one role).

Update docs per Implementation and Issues recommendations (separate documents). Especially, improve new user documentation.


### Usability, accessibility and devices

No recommendations.


### Branding and design

No recommendations.


### Case studies/social proof

No recommendations.


### SEO, Analytics and site-local search


### Maintenance planning

Explicitly list and solicit maintainers and contributors for documentation.


### Other

No recommendations.


<!--- References --->
