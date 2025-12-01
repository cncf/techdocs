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
| Information architecture   | 3 |
| New user content           | 3 |
| Content maintainability    | 4 |
| Content creation processes | 4 |
| Inclusive language         | 5 |

### Comments

> AUTHOR NOTE: make any overall comments about the Project Documentation here.

The following sections contain brief assessments of each element of the Project
Documentation rubric.

> AUTHOR NOTE: For each heading below, discuss how well the in-scope items, and
> especially the technical documentation, meet these criteria. (Criteria are
> copied from criteria.md)

#### Information architecture

The overall structure (pages/subpages/sections/subsections) of your project
documentation. We evaluate on the following:

- Is there high level conceptual/“About” content?
  - The Helm docs are lacking a high level overview that provides an introduction to the product, its use cases, user personas, and so on.
  - The Using Helm page (https://helm.sh/docs/intro/using_helm) does include some conceptual information about the concepts of Helm charts, repositories, and releases
  - The existing Introduction section (https://helm.sh/docs/intro/) includes information primarily for users of Helm charts (ie, no info for chart developers). It includes a quickstart guide that walks you through installing an example chart, a page on how to install Helm, a page with info about common Helm tasks like installing, upgrading, and working with repos, and a "cheat sheet" with quick references for common CLI commands.
  - There is also some high level conceptual information in the "Topics" section of the docs. For example, Helm Architecture (https://helm.sh/docs/topics/architecture).

- Is the documentation feature complete? (i.e., each product feature is documented)
  - Overall, main Helm features are documented (like variables, template functions, hooks, and the Helm CLI)
  - There are several new features/breaking changes that need to be updated for Helm 4. For example:
    - kstatus watcher needs to be documented in the SDK docs and likely some user-facing docs needed outside of the SDK docs as well (https://github.com/helm/helm/pull/13604)
    - OCI install with digest (https://github.com/helm/helm-www/pull/1629)
    - Multi document values files (https://github.com/helm/helm/pull/13655)
    - Allow signing multiple charts with single passphrase from stdin (https://github.com/helm/helm/pull/30718)
    - Allow post-renderer to process hooks (https://github.com/helm/helm/pull/13154)

- Are there step-by-step instructions (tasks, tutorials) documented for features?
  - Tasks:
    - The Helm docs don't really include step-by-step tasks. Instead, they tend to use descriptions of how a given features works, plus examples. For example, see the https://helm.sh/docs/howto/charts_tips_and_tricks/ page, which has information about how to do several tasks with Helm using paragraphs and examples. 
    - Note: Because Helm charts are highly configurable/customizable, in many cases, it's probably more useful for chart developers to have several examples versus traditional step-by-step instructions 
    - The page on Installing Helm (https://helm.sh/docs/intro/install) is a good example of documenting one-step procedures
    - Syncing Your Chart Reposiotry (https://helm.sh/docs/howto/chart_repository_sync_example) is close to a traditional step-by-step guide. It uses headings rather than numbered steps, but seems like it could easily be converted to a numbered list of steps. It also includes helpful prerequisites and examples.
  - Tutorials:
    - There are tutorials on creating different types of plugins using the different supported runtimes (eg, https://helm.sh/docs/plugins/developer/tutorial-cli-plugin)
    - There are several other pages that use a tutorial-style format that walks users through a specific example in order to explain a given task or feature. For example:
      - https://helm.sh/docs/chart_template_guide/accessing_files uses a variety of examples to explain different ways to create and access named templates
      - https://helm.sh/docs/chart_template_guide/notes_files walks users through an example of adding a NOTES.txt for a chart

- Are there any key features which are documented but missing task documentation?
  - For the most part, tasks for key features are covered. As mentioned above, at a high level, the Helm docs would likely benefit from including more step-by-step how-tos/tutorials, but seems that the docs do include at least a few examples for each of the key Helm features

- Is the “happy path”/most common use case documented?
  - Helm has a few different happy paths depending on the user persona:
    - Chart users needs to understand how to install helm, install/upgrade charts, work with chart repositories, and so on
    - Chart developers need to know how to work with features like values files, template functions, chart hooks, and so on
  - For chart users, the "happy path" of initializing a chart repository, installing a chart, viewing release info for the chart, then uninstalling is documented in the Quickstart workflow. The Using Helm page also touches on each of the main tasks that a chart user would need to know about
  - As a chart developer, it's not very clear from looking at the docs sidebar if there's a most common use case or "happy path" documented. The closest page to this is [Charts](https://helm.sh/docs/topics/charts), which does include lots of helpful info about the chart file structure, working with chart dependencies, templates and values, and more. However, it's a lot of info in one page, and it doesn't necessarily walk developers through how all these pieces should fit together to create a release. 

- Does task and tutorial content demonstrate atomicity and isolation of concerns? (Are tasks clearly named according to user goals?)
  - Yes for the most part, tasks are given relevant headings. There are some pages like Using Helm that would probably be better broken down into several smaller pages that users can see from the sidebar
  - There are some places where there is extra info under a heading that one might not expect to find. For example, under [Writing a Hook](https://helm.sh/docs/topics/charts_hooks#writing-a-hook), there is conceptual information about how hooks work, like that you can implement multiple hooks in a single resource or that multiple resources can be inplemented as the same type of hook. These are important details about how hooks work, but they are a bit hidden half way down a section whose heading uses a verb phrase.

- If the documentation does not suffice, is there a clear escalation path for users needing more help? (FAQ, Troubleshooting)
  - The community section of the docs (which is pulled in from the Helm community repository) includes most of the helpful info about troubleshooting. For example, https://helm.sh/community/developers/#troubleshooting provides information about working with the community and searching the existing issues in the Helm repo to troubleshoot.
  - There are also some minimal FAQs here: https://helm.sh/docs/faq/. They include a few questions about installing and one question about uninstalling. It looks like this information is not really an "FAQ", but rather information about installing/uninstalling Helm that might have been documented under FAQs because it lacks a more permanent home.

- If the product exposes an API, is there a complete reference?
  - Yes, API reference is here: https://pkg.go.dev/helm.sh/helm/v4

- Is content up to date and accurate?
  - There are several examples throughout the docs that use the Bitnami charts (ex: Quickstart and Using Helm pages). With the recent change from Broadcom, the images for those charts are no longer available free of charge, so these examples will need to be updated with new charts
  - For the Helm v4 docs, there is a fair bit of out of date content. Some of the new features haven't been fully doc'd yet
  - There's also several warnings "This page has not yet been updated for Helm 4." This content needs to be evaluated and updated

#### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

- Is “getting started” clearly labeled? (“Getting started”, “Installation”,
  “First steps”, etc.)
  - There is an Introduction section and a Quickstart, both of which are labeled for new users
  - However, the content in these sections is for chart users and does not include information that would be useful to chart developers just getting started. Would be good to add some getting started content more for the developer user persona
  - Could probably use lots of the content in Using Helm to create getting started info for chart developers

- Is installation documented step-by-step?
  - Yes, although the installation steps are really just single comamnds (ie, one-step procedures) for a variety of different install environments. Step-by-step might not be necessary in this case 

- If needed, are multiple OSes documented?
  - Yes, see all the different options for installing Helm: https://helm.sh/docs/intro/install

- Do users know where to go after reading the getting started guide?
  - There's no "next steps" info in the quick start guides that explains what the user should do next. In general, there's not a lot of info about the most common use cases for Helm, so it's not clear the user would be able to intuit how they could use Helm (unless they already had some idea about the technology and were just visiting the docs for information about the mechanics of a specific task).

- Is your new user content clearly signposted on your site’s homepage or at the
  top of your information architecture?
  - There is Getting Started section on the site homepage. It includes Helm download commands and a link to Artiact Hub where you can find Helm charts. It links users to the docs for more infomation (specifically, it links to the installing Helm and using Helm docs pages).

- Is there sample code or other example content that can easily be copy-pasted?
  - Yes, the Helm docs includes lots of example code blocks. All code blocks have a copy button that allows them to be easily copy-pasted.

#### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens, particularly if you don’t plan for them.

We evaluate on the following:

- Is your documentation searchable?
   - Yes, Algolia DocSearch is set up

- Are you planning for localization/internationalization with regards to site
  directory structure? Is a localization framework present?
   - Yes, site is localized. Helm.sh uses Docusaurus' built-in localization/translations feature to allow users to toggle between different languages 
   - Localization process documented here https://helm.sh/community/localization

- Do you have a clearly documented method for versioning your content?
   - Yes, the versioning process is documented in the readme: https://github.com/helm/helm-www/blob/main/README.md#versioning
   - Helm.sh releases a new version of the docs with each major release
   - Helm.sh uses the version number in the URL path for non-latest versions of the product (the latest version is served at the main /docs/ path with no version number)
   - Version labels on the site are updated to use the latest minor/patch version

#### Content creation processes

Documentation is only as useful as it is accurate and well-maintained, and
requires the same kind of review and approval processes as code.

We evaluate on the following:

- Is there a clearly documented (ongoing) contribution process for
  documentation?
   - Documentation contribution how-tos are documented in the README
   - Also in the Community section (eg https://helm.sh/community/localization)
   - However, there isn't an ongoing process defined in terms of how often PRs get reviewed, standardized requirements for docs PR in order to be approved, a style guide, issue triage, etc.

- Does your code release process account for documentation creation & updates?
   - PRs include a checkbox for "this PR includes documentation", if applicable
   - There doesn't seem to be a requirement that documentation PR exists (if needed) before a helm/helm PR is approved is merged 

- Who reviews and approves documentation pull requests?
   - Maintainers of the helm-www repo
   - Core project maintiners 

- Does the website have a clear owner/maintainer?
   - Maintainers are listed in the OWNERS file https://github.com/helm/helm-www/blob/main/OWNERS 
   - Maintiners were recently updated to add/remove as needed, but there is not an ongoing practice around reviewing and updating the list of maintainers

#### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evaluate on the following:

- Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?
  - No obvious instances of this in the docs themselves. 
- Does the project use language like "simple", "easy", etc.?
  - Yes, there's some marketing language throughout. Example: https://helm.sh/docs/topics/registries/#migrating-from-chart-repos

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Information architecture

The information architecture could benefit from the following:
- The Introduction, How-to, Topics, Best Practices, Chart Template Guide, and FAQs sections should all be reviewed to see where there is redundant content that can be condensed. With the current naming of these sections, it's not clear to docs users or contributors how the pages are grouped, and what types of info should go where. 
- Could consider creating high-level categories based on the major feature area. For example, a section on working with chart registries, plugins, variables/templates, and so on.
- The Chart Template Guide is a better example of having 

#### New user content

The site could use a more cleraly labeled "getting started" section, with guides for all main user personas (both chart users and chart developers). For example, a quick start that shows how to create and release a simple chart and/or a page that explains that chart dev "happy path", including all the main tasks a chart developer should consider as part of creating and publishing a chart for their app

#### Content maintainability & site mechanics

Search, locaization, and versioning functionality all looks good/is useable on the site.

Helm.sh is in need of a better process for reviewing and accepting localized documentation changes (including adding a new locale). There are several open PRs from people adding translations to the site, but not a good process for determining how those get reviewed, how drift is tracked/updated, and so on. A good example of this is here: https://opentelemetry.io/docs/contributing/localization/.

#### Content creation processes

The contributors docs could be better centralized and easier to search, maybe in a "Contribute to the Docs" section. Currently, the contributor info is spread across the readme, the ARCHITECTURE_DECISIONS doc, as well as the community section, which makes it hard to find, and hard to tell when it's out of date.

Also, the team could make docs more "part of the definition of done" for new features. For example, when a docs update is needed, creating the docs PR could be required before a new feature PR to be merged. This would help ensure that the docs stay up to date.

#### Inclusive language

Helm.sh could choose an existing, industry-accepted style guide to point contributors to, including a link to the inclusive language website. This would help maintain inclusive, clear word choice throughout.

Could also consider adding some of the terms to avoid to the existing `typos` plugin on the site so that these get flagged during the build process.

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
| Communication methods documented          | 5 |
| Beginner friendly issue backlog           | 3 |
| “New contributor” getting started content | 4 |
| Project governance documentation          | 5 |

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

One of the easiest ways to attract new contributors is making sure they know how
to reach you.

We evaluate on the following:

- Is there a Slack/Discord/Discourse/etc. community and is it prominently linked
  from your website?
   - The community docs are automatically pulled into the site from the helm/community repo and published here https://helm.sh/community
   - There's also a community section on the landing page with info about upcoming events, the slack, developer standups, and so on
- Is there a direct link to your GitHub organization/repository?
   - There's an edit this page link on every docs page that allows the user to open it in github
   - There are also links on the site homepage, in the community section, in the footer, 
- Are weekly/monthly project meetings documented? Is it clear how someone can
  join those meetings?
   - Yes, on the community section on the landing page. And in the https://helm.sh/community section
- Are mailing lists documented?
   - Yes: https://helm.sh/community/communication/#mailing-lists

#### Beginner friendly issue backlog

We evaluate on the following:

- Are docs issues well-triaged?
  - No, there are about one hundred docs issues, many irrelevant to the new site and not a clear traige plan or timelines in place for getting them reviewed
- Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a “good first issue” label)?
  - Yes, there's a good first issue label. Could be more regularly applied
- Are issues well-documented (i.e., more than just a title)?
  - Yes in general, issues are well-documented. 
  - There is no issue template
- Are issues maintained for staleness?
  - No, see above.

#### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

We evaluate on the following:

- Do you have a community repository or section on your website?
   - Yes, https://helm.sh/community. This is automatically pulled in from the helm/community repo using a plugin
- Is there a document specifically for new contributors/your first contribution?
   - This page does a good job of including all the info for first-time contributors: https://helm.sh/community/developers
   - This one too https://helm.sh/community/#your-first-contribution
- Do new users know where to get help?
   - While there's nothing labeled "get help", it seems there's plenty of places where the slack channels, dev meetings, etc are listed for users

#### Project governance documentation

One of the CNCF’s core project values is open governance.

We evaluate on the following:

- Is project governance clearly documented?
  - Yes https://helm.sh/community/governance/

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
| **Project doc**: hosting      | Hosted directly                                         | Hosted directly                           |
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
   - Yes
- Are doc pages readable?
   - Yes
- Are all / most website features accessible from mobile -- such as the top-nav,
  site search and in-page table of contents?
   - Yes
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
  - Yes
- Is the brand used across the website consistently?
  - Yes
- Is the website’s typography clean and well-suited for reading?
  - Yes

#### Case studies/social proof

One of the best ways to advertise an open source project is to show other
organizations using it.

We evaluate on the following:

- Are there case studies available for the project and are they documented on
  the website?
  - ? 
- Are there user testimonials available?
  - ?
- Is there an active project blog?
  - Yes
- Are there community talks for the project and are they present on the website?
  - ?
- Is there a logo wall of users/participating organizations?
  - Yes

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
   - Yes
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
[project-doc-website]: ./?https://helm.sh/docs/
[project-website]: ./?https://helm.sh/
[Rating (1-5)]: #rating-values
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[website guidelines]: ../../website-guidelines-checklist.md
