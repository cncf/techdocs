---
title: Helm Documentation Analysis
tags: [Helm]
created: YYYY-MM-DD
modified: YYYY-MM-DD
author: Paige Calvert (@paigecalvert)
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document is an analysis of the effectiveness and completeness of the
[Helm][https://helm.sh/] open source software (OSS) project's documentation
and website. It is funded by the CNCF Foundation as part of its overall effort
to incubate, grow, and graduate open source cloud native software projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

### Purpose

This document was written to analyze the current state of Helm
documentation. It aims to provide project leaders with an informed understanding
of potential problems in current project documentation. A second
[implementation] document, , outlines an actionable plan for improvement. A
third document is an [issues list] of issues to be added to the project
documentation repository. These issues can be taken up by contributors to
improve the documentation.

This document:

- Analyzes the current Helm technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

### Scope of analysis

The documentation discussed here includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the
helm-www GitHub repository.

The Helm website and documentation are written in Markdown and are compiled using the Docusaurus static
site generator with the theme-classic theme and served from the Netlify
platform. The site's code is stored on the helm-www GitHub repo.

#### In scope

- Website: https://helm.sh/
- Documentation: https://helm.sh/docs/
- Website repo: https://github.com/helm/helm-www

#### Out of scope

- [helm/helm](https://github.com/helm/helm), [helm/community](https://github.com/helm/community), and other Helm subrepos

### How this document is organized

This document is divided into three sections that represent three major areas of
concern:

- **Project documentation:** concerns documentation for users of the Helm
  software, aimed at people who intend to use the project software
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the Helm OSS project
- **Website:** concerns the mechanics of publishing the documentation, and
  includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate
[criteria] for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help Helm users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

The accompanying [implementation] document breaks the recommendations down into
concrete actions that can be implemented by project contributors. Its focus is
on drilling down to specific, achievable work that can be completed in
constrained blocks of time. Ultimately, the implementation items are decomposed
into a series of [issues] and entered as GitHub [project-doc-website]/issues.

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the **[implementation] plan** and **[issues] list**.

Readers interested in the current state of the documentation and the reasoning
behind the recommendations should read the section of this document pertaining
to their area of concern:

- [Project documentation](./?TODO=ADD-URL)
- [Contributor documentation](./?TODO=ADD-URL)
- [Website and documentation infrastructure](./?TODO=ADD-URL)

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

> AUTHOR NOTE: Pick the CNCF maturity level of the project:

Helm is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

> AUTHOR NOTE: or

Helm is an **incubating** project of CNCF. This means that the project
should be [_developing_][criteria] professional-quality documentation alongside
the project code.

| Criterion                  | [Rating (1-5)] |
| -------------------------- | -------------- |
| Information architecture   | 2 - needs improvement |
| New user content           | 2 - needs improvement |
| Content maintainability    | 3 - meets standards |
| Content creation processes | 2 - needs improvement |
| Inclusive language         | 3 - meets standards |

### Comments

> AUTHOR NOTE: make any overall comments about the Project Documentation here.

The following sections contain brief assessments of each element of the Project
Documentation rubric.

> AUTHOR NOTE: For each heading below, discuss how well the in-scope items, and
> especially the technical documentation, meet these criteria. (Criteria are
> copied from criteria.md)

#### Information architecture

**High level conceptual/“About” content**

The Helm docs in general lack a high level overview that provides an introduction to the product, its use cases, user personas, and so on.

There is some level of project overview/conceptual content on these pages:
- The Using Helm page (https://helm.sh/docs/intro/using_helm) does include some conceptual information about the concepts of Helm charts, repositories, and releases
- The Introduction section (https://helm.sh/docs/intro/) includes information primarily for users of Helm charts (ie, no info for chart developers). It includes a quickstart guide that walks you through installing an example chart, a page on how to install Helm, a page with info about common Helm tasks like installing, upgrading, and working with repos, and a "cheat sheet" with quick references for common CLI commands.
- There is also some high level conceptual information in the "Topics" section of the docs. For example, Helm Architecture (https://helm.sh/docs/topics/architecture).

**Feature complete docs**

Overall, main Helm features are documented (like variables, template functions, hooks, and the Helm CLI).

But, there are several new features/breaking changes that need to be updated for Helm 4. For example:
- kstatus watcher needs to be documented in the SDK docs and likely some user-facing docs needed outside of the SDK docs as well (https://github.com/helm/helm/pull/13604)
- OCI install with digest (https://github.com/helm/helm-www/pull/1629)
- Multi document values files (https://github.com/helm/helm/pull/13655)
- Allow signing multiple charts with single passphrase from stdin (https://github.com/helm/helm/pull/30718)
- Allow post-renderer to process hooks (https://github.com/helm/helm/pull/13154)


**Step-by-step instructions**

The Helm docs don't really include tasks in the recommended "step-by-step" format. Instead, they tend to use descriptions of how a given features works, plus examples. For example, see the https://helm.sh/docs/howto/charts_tips_and_tricks/ page, which has information about how to do several tasks with Helm using paragraphs and examples. For example:
  - The page on Installing Helm (https://helm.sh/docs/intro/install) is a good example of documenting one-step procedures
  - Syncing Your Chart Reposiotry (https://helm.sh/docs/howto/chart_repository_sync_example) is close to a traditional step-by-step guide. It uses headings rather than numbered steps, but seems like it could easily be converted to a numbered list of steps. It also includes helpful prerequisites and examples.

  Note: While it's important for the Helm docs to use a step-by-step format for procedures where appropriate, because Helm charts are highly configurable/customizable, in many cases, it's probably more useful for chart developers to have several examples versus traditional step-by-step instructions 

The Helm docs include some tutorials on workflows like creating different types of plugins using the different supported runtimes (eg, https://helm.sh/docs/plugins/developer/tutorial-cli-plugin). There are several other pages that use a tutorial-style format that walks users through a specific example in order to explain a given task or feature. For example:
- https://helm.sh/docs/chart_template_guide/accessing_files uses a variety of examples to explain different ways to create and access named templates
- https://helm.sh/docs/chart_template_guide/notes_files walks users through an example of adding a NOTES.txt for a chart

Tasks for key features are generally well-documented. As mentioned above, at a high level, the Helm docs would likely benefit from including more step-by-step how-tos/tutorials, but seems that the docs do include at least a few examples for each of the key Helm features.

For the most part, tasks demonstrate atomicity and isolation of concerns, and are given relevant headings. There are some pages like "Using Helm" that would probably be better broken down into several smaller pages that users can see from the sidebar. Also, there are some places where there is extra info under a heading that one might not expect to find there. For example, under [Writing a Hook](https://helm.sh/docs/topics/charts_hooks#writing-a-hook), there is conceptual information about how hooks work, like that you can implement multiple hooks in a single resource or that multiple resources can be inplemented as the same type of hook. These are important details about how hooks work, but they are a bit hidden half way down a section whose heading uses a verb phrase.

**Happy path/common use cases**

Helm has a few different happy paths depending on the user persona:
- Chart users needs to understand how to install helm, install/upgrade charts, work with chart repositories, and so on
- Chart developers need to know how to work with features like values files, template functions, chart hooks, and so on

For chart users, the "happy path" of initializing a chart repository, installing a chart, viewing release info for the chart, then uninstalling is documented in the Quickstart workflow. The Using Helm page also touches on each of the main tasks that a chart user would need to know about

As a chart developer, it's not very clear from looking at the docs sidebar if there's a most common use case or "happy path" documented. The closest page to this is [Charts](https://helm.sh/docs/topics/charts), which does include lots of helpful info about the chart file structure, working with chart dependencies, templates and values, and more. However, it's a lot of info in one page, and it doesn't necessarily walk developers through how all these pieces should fit together to create a release. 

**Clear escalation path to get more help**

If the docs do not suffice, there are a couple places where an escalation path is documented for users that need more help:
  - The community section of the docs (which is pulled in from the Helm community repository) includes most of the helpful info about troubleshooting. For example, https://helm.sh/community/developers/#troubleshooting provides information about working with the community and searching the existing issues in the Helm repo to troubleshoot.
  - There are also some minimal FAQs here: https://helm.sh/docs/faq/. They include a few questions about installing and one question about uninstalling. It looks like this information is not really an "FAQ", but rather information about installing/uninstalling Helm that might have been documented under FAQs because it lacks a more permanent home.

The Helm docs lack clear troubleshooting steps for different common tasks.

**API reference**

API reference is here: https://pkg.go.dev/helm.sh/helm/v4

**Content accuracy**

In general, content is accurate. The main concern in terms of accuracy would be content that is out-of-date, particular when it comes to the latest Helm v4 docs. For example:
- There are several examples throughout the docs that use the Bitnami charts (ex: Quickstart and Using Helm pages). With the recent change from Broadcom, the images for those charts are no longer available free of charge, so these examples will need to be updated with new charts
- For the Helm v4 docs, there is a fair bit of out of date content. Some of the new features haven't been fully doc'd yet
- There's also several warnings "This page has not yet been updated for Helm 4." This content needs to be evaluated and updated

#### New user content

**Getting started content**

There is Getting Started section on the site homepage. It includes Helm download commands and a link to Artiact Hub where you can find Helm charts. It links users to the docs for more infomation (specifically, it links to the installing Helm and using Helm docs pages).

In terms of “getting started” docs that are clearly labeled as such, there is both an "Introduction" section and a page named "Quickstart". However, the content in these sections is for chart users and does not include information that would be useful to chart developers just getting started.

After completing the quickstart or reading the introduction section, there's no clear info about what the user should do next. In general, it's hard to grock the most common use cases for Helm from looking at the docs table of contents, so it's not clear the user would be able to intuit how they could use Helm.

This Next Steps page in the Chart Template Guide does provide a good example of pointing chart developers to more information about chart development: https://helm.sh/docs/chart_template_guide/wrapping_up

**Step-by-step install procedures**

The installation steps for Helm are really just single comamnds (ie, one-step procedures) for a variety of different install environments: https://helm.sh/docs/intro/install

These install docs include code blocks that have a "copy" button which allows them to be easily copy-pasted.

#### Content maintainability & site mechanics

**Search**

The documentation is searchable (it uses Algolia DocSearch).

**Localization/i18n**

The Helm website is localized. Helm.sh uses Docusaurus' built-in localization/translations feature to allow users to toggle between different languages. The localization process documented here: https://helm.sh/community/localization.

**Versioning**

The versioning process for the Helm website is documented in the readme: https://github.com/helm/helm-www/blob/main/README.md#versioning:
   - Helm.sh releases a new version of the docs with each major release
   - Helm.sh uses the version number in the URL path for non-latest versions of the product (the latest version is served at the main /docs/ path with no version number)
   - Version labels on the site are updated to use the latest minor/patch version

#### Content creation processes

**Contribution process for documentation**

Documentation contribution how-tos are documented in the helm-www README and in the Community section (eg https://helm.sh/community/localization)

However, there isn't a clearly documented ongoing process for how often PRs/issues get reviewed, requirements for docs PRs in order to be approved, a style guide, issue triage plan, etc.

**Code release process**

The code release process does account for documentation creation and updates in that PR include a checkbox for "this PR includes documentation", if applicable.

However, there doesn't seem to be a requirement that a documentation PR exists for a code change (if needed) before a code change is approved is merged.

**Docs PR review/approval**

Maintainers of the helm-www repo and core project maintainers can review and approve docs PRs.

**Website owners**

Maintainers are clearly listed in the OWNERS file https://github.com/helm/helm-www/blob/main/OWNERS. Maintiners were recently updated to add/remove as needed, but there is not an ongoing process for reviewing and updating the list of maintainers.

#### Inclusive language

There do not appear to be any customer-facing utilities, endpoints, class names, or feature names that use non-recommended words as documented by the [Inclusive Naming Initiative](https://inclusivenaming.org) website.

The docs do occassionally use language like "simple", "easy", etc. Example: https://helm.sh/docs/topics/registries/#migrating-from-chart-repos

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Information architecture

The information architecture could benefit from the following:
- The Introduction, How-to, Topics, Best Practices, Chart Template Guide, and FAQs sections should all be reviewed to see where there is redundant content that can be condensed. With the current naming of these sections, it's not clear to docs users or contributors how the pages are grouped, and what types of info should go where. 
- Could consider creating high-level categories based on the major feature area. For example, a section on working with chart registries, plugins, variables/templates, and so on.
- The Chart Template Guide is a better example of having 

#### New user content

The site could use a more cleraly labeled "getting started" section, with guides for all main user personas (both chart users and chart developers). For example, a quick start that shows how to create and release a simple chart and/or a page that explains that chart dev "happy path", including all the main tasks a chart developer should consider as part of creating and publishing a chart for their app. Could probably use lots of the content in Using Helm to create getting started info for chart developers

#### Content maintainability & site mechanics

Search, locaization, and versioning functionality all looks good/is useable on the site.

Helm.sh is in need of a better process for reviewing and accepting localized documentation changes (including adding a new locale). There are several open PRs from people adding translations to the site, but not a good process for determining how those get reviewed, how drift is tracked/updated, and so on. A good example of this is here: https://opentelemetry.io/docs/contributing/localization/.

#### Content creation processes

The contributors docs could be better centralized and easier to search, maybe in a "Contribute to the Docs" section. Currently, the contributor info is spread across the readme, the ARCHITECTURE_DECISIONS doc, as well as the community section, which makes it hard to find, and hard to tell when it's out of date.

Also, the team could make docs more "part of the definition of done" for new features. For example, when a docs update is needed, creating the docs PR could be required before a new feature PR to be merged. This would help ensure that the docs stay up to date.

#### Inclusive language

Review the docs for terms like "simply" and "easy" and remove them.

Helm.sh could also choose an existing, industry-accepted style guide to point contributors to, including a link to the inclusive language website. This would help maintain inclusive, clear word choice throughout.

## Contributor documentation

> AUTHOR NOTE: Pick the CNCF maturity level of the project:

Helm is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

> AUTHOR NOTE: or

Helm is an **incubating** project of CNCF. This means that the project
should be [_developing_][criteria] professional-quality documentation alongside
the project code.

| Criterion                                 | [Rating (1-5)] |
| ----------------------------------------- | -------------- |
| Communication methods documented          | 3 - meets standards |
| Beginner friendly issue backlog           | 2 - needs improvement |
| “New contributor” getting started content | 3 - meets standards |
| Project governance documentation          | 3 - meets standards |

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

**Slack and dev meetings**

The Helm Slack channels are prominently linked in the Join the Community section on the landing page. This section also has info about upcoming events, weekly developer standups (with info on how to join), and more. Additionally, the Community section of the website (https://helm.sh/community) also includes this information.

**GitHub links**

Users can find direct links to the Helm GitHub organization/repositories in a couple ways:
- There are links on the site homepage, in the community section, and in the footer to the main Helm github
- There's an edit this page link on every docs page that allows the user to open it in the helm-www repo in github

**Mailing lists**
   
Mailing lists are documented here: https://helm.sh/community/communication/#mailing-lists

#### Beginner friendly issue backlog

Docs issues are not very well triaged. There are nearly 100 open docs issues, many irrelevant to the new site. There is also no clear traige plan or timelines in place for addressing issues or reviewing them for freshness.

There is a “good first issue” label, which new contributors can use to make code or documentation contributions.

In general, issues are well-documented and include helpful descriptions beyond just a title. There doesn't seem to be an issue template.

#### New contributor getting started content

**Community docs**

The website has a community section here: https://helm.sh/community. This is automatically pulled in from the helm/community repo using a plugin.

**Docs for first-time contributors**

Helm.sh has the following content that does a good job of providing info for first-time contributors:
- https://helm.sh/community/developers
- https://helm.sh/community/#your-first-contribution

Also, while there's nothing specifically labeled "get help" on the site, there's plenty of places where the slack channels, dev meetings, etc are listed for users

#### Project governance documentation

Is Project governance clearly is documented here: https://helm.sh/community/governance/

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Beginner friendly issue backlog

Improved standards/practices around regular issue triage and maintaining issue freshness could help make the issue backlog a little easier to navigate. 

#### New contributor getting started content

While new contributor docs are well documented, it also couldn't hurt to add a heading (in the Community docs, perhaps) that includes the terms "troubleshooting" or "get help", in case people search to website for those terms.

## Website and infrastructure

Helm is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

| Criterion                                   | [Rating (1-5)] |
| ------------------------------------------- | -------------- |
| Single-source for all files                 | 3 - meets standards |
| Meets min website req. (for maturity level) | 3 - meets standards |
| Usability, accessibility, and design        | 3 - meets standards |
| Branding and design                         | 3 - meets standards |
| Case studies/social proof                   | 1 - not present |
| SEO, Analytics, and site-local search       | 3 - meets standards |
| Maintenance planning                        | 3 - meets standards |
| A11y plan & implementation                  | 3 - meets standards |
| Mobile-first plan & impl.                   | 3 - meets standards |
| HTTPS access & HTTP redirect                | 3 - meets standards |
| Google Analytics 4 for production only      | 1 -  not present |
| Indexing allowed for production server only | 3 - meets standards |
| Intra-site / local search                   | 3 - meets standards |
| Account custodians are documented           | 2 - needs improvement |

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

Nearly all website pages reside in a single repo (helm/helm-www). The exception to this is the Community section of the website, which pulls in docs from the helm/community repo using a plugin. This is documented in the readme: https://github.com/helm/helm-www?tab=readme-ov-file#community-documentation. Additionally, the "Edit this page" link at the bottom of the community pages properly sends users to the page source in the helm/community repo to prevent users from accidentally editing the wrong source.

The way the community section is set up, there is no need for maintainers to keep multiple versions of the community docs up-to-date/in sync. And, Helm maintainers have indicated that pulling in the community doc in this way is useful for making the information more findable for users.

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

[git-submodules]: https://git-scm.com/book/en/v2/Git-Tools-Submodules
[maturity-level]:
  https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations
[cncf-servicedesk]: https://servicedesk.cncf.io

#### Usability, accessibility and devices

**Usability / mobile experience**

The website usable from mobile (doc pages are readable, and all website features are accessible from mobile including the top-nav, site search and in-page table of contents)

**Accessibility**

A Chrome Lighthouse audit on the helm.sh site gives a score of 94/100 for accessibility. It reports that the light blue link color (such as for the word Kubernetes on the landing page subtitle) is not high enough contrast for color-impaired readers. It also reports that there are some links that use only color to differentiate them from the surrounding text.

Did not test the text-to-speech, but the amount of code and special characters in the text generally means that text-to-speech is not likely to be a good experience for users.

#### Branding and design

There is an easily recognizable brand for the project (logo + color scheme) that is used across the website consistently. The website's typography is consistent and easy to read. The only exception is that the font used for headings can be somewhat difficult to read for some of the letters.

#### Case studies/social proof

There is a logo wall of participating organizations featured at the bottom of the landing page (called "Supporters"). There is not a list of Helm users, but perhaps the supporters are also the users that would be listed 

There do not appear to be any case studies or testimonials available for the project that are documented on the website. I do see Helm case studies on the CNCF website, but not sure how recent or relevant these are: https://www.cncf.io/case-studies/?_sft_lf-project=helm

#### SEO, Analytics and site-local search

**Analytics**

Analytics is not set up for the site. 

**SEO, Indexing, and Search**

Local intra-site search is available from the website. Search is powered by Algolia DocSearch. The production site is well-indexed thanks to a built-in Algolia config for Docusaurus site, and is reindexed daily (this schedule is controlled by an algolia crawler setting).

**Account custodians**

The current custodian(s) of the following Algolia account is not specifically documented, but the repo does have an OWNERS file.

#### Maintenance planning

**Website tooling**

The website uses Docusaurus, which has a robust open source community and is actively maintained. Before Helm.sh was migrated to Docusaurus, the migration and tooling was discussed with the CNCF tech docs team to make sure it was recommended.

**Website maintainers**

There is no indication that the project is actively cultivating website maintainers from the community.

**Build times**

Build times can be quite long (10+ mins). This is because Docusaurus builds a separate site for each locale, and Helm.sh has several locales. There is a script in the repo that is designed to use the Docusaurus cache to reduce build times (particularly useful for more quickly generating previews on PRs). This script tends to have varied results, but can reduce build times down to a reasonable 1-3 mins.

#### Other

The website is accessible via HTTPS and requests using HTTP are properly redirected to the HTTPS URLs.

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Case studies/social proof

Could add a link to case studies on the landing page and/or prioritize writing and publishing case studies in the blog

#### SEO, Analytics and site-local search

Add analytics to the production server (could use Google Analytics (GA) 4), and ensure that 404 reports are collected and tracked using the analytics service.

#### Maintenance planning

Consider troubleshooting the existing script to see why it inconsistently reduces build times.

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
[project-doc-website]: ./?https://helm.sh/docs/
[project-website]: ./?https://helm.sh/
[Rating (1-5)]: #rating-values
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[website guidelines]: ../../website-guidelines-checklist.md
