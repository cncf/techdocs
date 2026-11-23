---
title: Assessment criteria and examples
---

We recommend reading the
[CNCF sandbox project documentation primer](../sandbox-doc-primer.md) before
reviewing these criteria. The primer contains key definitions concepts that are
referred to in the criteria.

The criteria in this document are duplicated in the
[analysis template](templates/analysis.md). Keep the two files in sync: don't
add, remove, or reword a criterion here without making the same change in the
template, and vice versa.

## Project documentation

### Information architecture

How your technical information is organized, laid out, and presented. This
includes structure (pages/subpages/sections/subsections), information types
(conceptual/instructional/reference), and content that matches user
expectations.

#### Information architecture questions

- Are task pages titled with the goal that the user accomplishes?
- Are tasks written as numbered, step-by-step instructions?
- Does each user-facing feature have a corresponding task or tutorial?
- Does the documentation include conceptual content that explains what the
  project does and how it works?
- Does the documentation tell users where to get help when it does not answer
  their question?
- Does the instructional content cover the project's major use cases?
- Does the top-level navigation organize the documentation logically, so that no
  high-level restructuring is needed?
- If the product builds on or incorporates another product, does the
  documentation link to instructions for installing and configuring that
  product?
- If the product exposes an API, is there a complete API reference, whether
  written manually or generated automatically?
- If the product provides a CLI, is there a complete CLI reference, whether
  written manually or generated automatically?
- If the project serves more than one user role, are tasks organized by role or
  audience?
- Is the documentation organized or labeled by content type (conceptual,
  instructional, and reference)?
- Is there a glossary of project-specific terms?
- Is there a troubleshooting or FAQ section?

Example:

- https://prometheus.io/docs

### New user content

New users are the most avid users of documentation and they have unique
documentation needs.

#### New user content questions

- Are prerequisites, such as required software versions and permissions, listed
  before the installation steps?
- Does the getting-started content include a step that verifies the installation
  works?
- Does the getting-started content tell users what to read next?
- Does the new-user content include sample code or commands that users can copy
  and paste?
- If the project serves more than one user role, is there a getting-started path
  for each role?
- If the project supports more than one installation type (development, test, or
  production), is each type documented?
- If the project supports more than one operating system or platform, do the
  installation instructions cover each one?
- Is installation documented as step-by-step instructions?
- Is the getting-started content reachable from the documentation landing page
  or the top-level navigation?
- Is there getting-started content with a clear label, such as "Getting
  started", "Installation", or "First steps"?

<!-- markdownlint-enable line-length -->
<!-- cSpell:ignore OSes copy-pastable Algolia Docsy -->

Example:

- https://falco.org/docs/getting-started/

### Content maintainability and site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens if you don’t plan for them.

#### Content maintainability and site mechanics questions

- Are diagrams either text-based, such as Mermaid, or stored with their editable
  source files?
- Can readers select the documentation version that matches the release they
  use?
- Does the documentation match the current release of the project?
- Does the site directory structure support localization, for example with one
  content folder per language?
- Is release-specific information documented in release notes?
- Is the documentation free of duplicate or near-duplicate sections?
- Is the information that graphics convey also available in the surrounding text
  or alt text?
- Is the site generator's localization (i18n) support configured?
- Is there a documented procedure for versioning the documentation with each
  release?

Example:

- https://kubernetes.io/docs/

### Content creation processes

Documentation is only useful if it is accurate and well maintained. It requires
the same kind of review and approval processes as code.

#### Content creation processes questions

- Do documentation pull requests run automated checks, such as link checking,
  linting, or spell checking?
- Does each documentation page give readers a way to send feedback, such as an
  "edit this page" link, a "file an issue" link, or a page rating?
- Does each documentation pull request get a preview deployment of the site?
- Does the documented release process include steps for creating or updating
  documentation?
- Does the project have a documentation style guide, either adopted or written
  by the project?
- Does the project identify a person or role that reviews documentation pull
  requests, for example in a CODEOWNERS file?
- Does the project identify a person or team that owns the website?

Examples:

- https://github.com/nats-io/nats-site/blob/master/MAINTAINERS.md (clearly
  documented maintainers)
- https://thanos.io/tip/contributing/how-to-contribute-to-docs.md

### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

#### Inclusive language questions

- Are user-facing utility, endpoint, class, and feature names free of words that
  the Inclusive Naming Initiative (inclusivenaming.org) recommends against?
- Is the documentation free of subjective difficulty words such as "simple",
  "easy", or "just"?

## Contributor documentation

### Communication methods documented

One of the easiest ways to attract new contributors is making sure they know how
to reach you.

#### Communication methods documented questions

- Are the project's communication channels listed together in one place, such as
  a community page?
- Does the website link directly to the project's GitHub repository?
- Does the website link to a Slack workspace or an equivalent chat channel?
- Does the website or repository document the project's mailing lists or
  equivalent discussion forums?
- If the project holds recurring community meetings, does the website explain
  how to find and join them?

Example:

- https://prometheus.io/community/

### Beginner friendly issue backlog

#### Beginner friendly issue backlog questions

- Are documentation issues distinguished from other issues, for example with a
  "documentation" label?
- Are documentation issues labeled by effort level or required expertise?
- Are open documentation issues kept current, with stale issues updated or
  closed?
- Do documentation issues describe what is missing or incorrect and suggest a
  fix?
- Do documentation issues state how the problem affects readers of the
  documentation?
- Does the project use a label, such as "good first issue", to mark issues that
  are suitable for new contributors?

Example:

- https://github.com/opentracing/opentracing.io/issues (all of open tracing’s
  backlogs are well maintained!)

### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

#### New contributor getting started content questions

- Does the contributor guide cover documentation contributions as well as code
  contributions?
- Does the contributor guide explain how to build and preview the documentation
  locally?
- Is the contributor guide linked from the website?
- Is there a community repository or a dedicated community section on the
  website?
- Is there a document that guides new contributors through making their first
  contribution?

Example:

- https://github.com/helm/community

### Project governance documentation

One of the CNCF’s core project values is open governance.

#### Project governance documentation questions

- Does the code of conduct explain how to report violations?
- Is a code of conduct linked from the website?
- Is the project's governance documented, for example in a GOVERNANCE.md file?
- Is there a contributor ladder that explains how to become a reviewer or
  maintainer?
- Is there a list of current maintainers, such as a MAINTAINERS or OWNERS file?
- Is there a security policy, such as a SECURITY.md file, that explains how to
  report vulnerabilities?

Example:

- https://github.com/envoyproxy/envoy/blob/main/GOVERNANCE.md

## Website

<a id="minimal-website-requirements"></a> <a id="single-source-requirement"></a>

### Core website requirements

This area of focus includes the single-source requirement and requirements based
on maturity level but are applicable for all projects.

Source files for _all website pages_ should reside in a single repo. Among other
problems, keeping source files in two places:

- confuses contributors
- requires you to keep two sources in sync
- increases the likelihood of errors
- makes it more complicated to generate the documentation from source files

Ideally, all website files should be in the **website repo** itself.
Alternatively, files should be brought into the website repo via
[git submodules](https://www.git-scm.com/book/en/v2/Git-Tools-Submodules).

If a project chooses to keep source files in multiple repos, they need a clearly
documented strategy for managing mirrored files and new contributions.

The other requirements are derived from the maturity level requirements but are
applicable to all projects. See [Appendix A](#appendix-a---maturity-levels) for
more information and context.

#### Core website requirements questions

- Does the project have a single source for its documentation, or, if it uses
  multiple repositories, a documented strategy for managing mirrored files and
  new contributions?
- Do links to companies that offer support go to pages that mention support for
  the project?
- Does each page have a copyright notice at the bottom that names the project
  authors or CNCF rather than the origin company?
- Does the footer include the trademark guidelines, either as a link to the
  Linux Foundation Trademark Usage page (directly or through a "Terms of
  Service" page) or as the text "The Linux Foundation® (TLF) has registered
  trademarks and uses trademarks. For a list of TLF trademarks, see Trademark
  Usage"?
- Does the website repository contain a license file in its root?
- Does the website repository enforce the DCO (Developer Certificate of Origin)
  or a CLA (Contributor License Agreement)?
- Does the website state "We are a Cloud Native Computing Foundation project" or
  the equivalent statement for the project's maturity level?
- If the project has converted to the Series LLC model, does the footer use the
  statement "Copyright © $PROJECT_NAME a Series of LF Projects, LLC."?
- If the website lists companies that offer support, is the list alphabetized or
  randomized on load?
- If the website lists companies that offer support, has their vetting been
  completed?
- Is the CNCF logo displayed near the bottom of the project homepage?
- Is the website free of links or forms that capture enterprise support leads?
- Is the project homepage free of references to the origin company other than a
  statement of the project's origin?
- Is the website repository hosted in the same GitHub organization as the main
  project?
- Is the website source hosted in an open source repository?

### Usability, accessibility, and devices

Most CNCF websites are accessed from mobile and other non-desktop devices at
least 10-20% of the time. Planning for this early in your website's design will
be much less effort than retrofitting a desktop-first design.

See also:

- [mobile-first](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first)
- [accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

It is up to each project to set their own guidelines.

#### Usability, accessibility, and devices questions

- Are the top navigation, site search, and in-page table of contents available
  on a mobile device?
- Do images have alt text?
- Do pages use semantic HTML, such as ordered headings and landmarks, that
  screen readers and text-to-speech tools can navigate?
- Are all essential website features usable with a keyboard alone?
- Do text and interface controls have sufficient contrast against their
  backgrounds?

- Is the website layout responsive, so that pages are readable on a mobile
  device without horizontal scrolling?

### Branding and design

CNCF seeks to support enterprise-ready open source software. A key aspect of
this is branding and marketing.

#### Branding and design questions

- Are the logo, fonts, and colors applied consistently across the website?
- Does the homepage state what the project does in one or two sentences?
- Does the project have a distinct logo, font, and color scheme?
- Is the body text easy to read, with an adequate font size and line length?

Example:

- https://helm.sh/

### Case studies and social proof

One of the best ways to advertise an open source project is to show other
organizations using it.

#### Case studies and social proof questions

- Are case studies published on the website?
- Are user testimonials published on the website?
- Does the website link to or embed community talks or presentations?
- Does the website show a logo wall of adopters or participating organizations?
- Is there a project blog with at least one post published in the last 12
  months?

Examples:

- https://www.fluentd.org/testimonials (user testimonials)
- https://goharbor.io/ (logo wall)
- https://blog.rook.io/ (blog)

### SEO, Analytics and site-local search

SEO helps users find your project and its documentation, and analytics helps you
monitor site traffic and diagnose issues like page 404s. Intra-site search,
while optional, offers your readers site-focused search results and is strongly
recommended.

#### SEO, Analytics and site-local search questions

- Do search engines index the production site?
- Does the project document who has custody of its analytics, Google Search
  Console, and site-search (such as Google CSE or Algolia) accounts?
- Does the website provide local site search?
- Does the website publish a sitemap?
- Is analytics disabled for all deploys other than the production site?
- Is analytics enabled for the production site?
- Is search-engine indexing disabled for website previews and builds of
  non-default branches?

### Maintenance planning

Website maintenance is an important part of project success, especially when
project maintainers aren’t web developers.

#### Maintenance planning questions

- Are the site generator, theme, and other website dependencies kept up to date?
- Does the project recruit or mentor website maintainers from its community?
- Is the procedure for building and deploying the website documented?
- Is the website built on tooling that the community supports well, such as Hugo
  with the Docsy theme or another CNCF-recommended stack?

Example:

- https://kubernetes.io

### AI Agent Readiness

AI agents—coding assistants, bots, and agentic search tools—increasingly read
documentation on a user's behalf, making them a new audience alongside human
readers. Preparing your site for them lets agents retrieve accurate, up-to-date
answers and send users back to the project, rather than relying on stale or
third-party sources that can misrepresent it. Many agent-readiness practices,
such as serving clean Markdown, rendering content server-side, and publishing an
`llms.txt` index of your key pages, also make the documentation faster, more
portable, and easier to maintain.

#### AI Agent Readiness questions

- Does the documentation site publish an `llms.txt` file at the site or docs
  root that follows the llmstxt.org structure (H1 title, blockquote summary, H2
  sections of link lists)?
- Do all links in `llms.txt` resolve, point to Markdown versions of pages, and
  stay in sync with the published site (for example, generated at build time)?
- Do HTML and Markdown pages include a directive near the top pointing agents to
  `llms.txt`?
- Is a clean Markdown version of each page served at the same URL with `.md`
  appended or substituted, with content matching the HTML version?
- Are pages rendered server-side or statically generated, with the main content
  starting near the top of the response rather than behind large navigation or
  script payloads?
- Are pages small enough to avoid truncation in an agent's context window, and
  do tabbed components and code fences serialize cleanly to Markdown?
- Is the documentation publicly reachable without authentication gates or CDN
  bot challenges, and do pages use correct HTTP status codes and standard HTTP
  redirects?
- Does the project monitor its CLOMonitor "Agent readiness" checks or run
  `afdocs check` against the site, ideally in CI?

## Appendix A - Maturity levels

The criteria questions are not directly aligned with project maturity levels.
Except for archived projects, requirements are cumulative through project
maturity levels so, for example, incubating projects must satisfy the
requirements for sandbox projects.

Listed here are the minimal website requirements for projects based on their
maturity level: sandbox, incubating, graduated and archived.

### Sandbox

- Are a majority of the [Website guidelines](../website-guidelines-checklist.md)
  satisfied?
  - "Guidelines" is misleading; these are mandatory standards concerning:
    - Maintaining open source status
    - IP licensing
    - Corporate sponsorship and support
    - Copyright and trademark
    - Community standards
  - **Plan ahead**: projects must meet all guidelines before being promoted to
    Incubating status.
- Is there rudimentary **project documentation**, or a placeholder or
  substitute?
  - It is acceptable at this maturity level to link to documentation that hasn't
    yet been integrated into the website.
  - _Example_: website with a single homepage, without any documentation or, as
    was mentioned above, linking out to an external (preexisting) source for
    docs.
  - _However_: consider reading the recommended practices in this repository and
    implementing as many of the best practices as you can. This groundwork will
    pay big dividends later when you need to upgrade your practices and update
    your documentation as an incubating project. Assistance is available from
    CNCF TechDocs anytime, including answers to individual questions or a
    documentation workshop.

### Incubating

- Are all Website guidelines satisfied?
- Has a Docs assessment or reassessment been requested through the CNCF service
  desk?
- Does **project documentation** meet these standards?:
  - Stakeholders / personas are identified and their core needs (in terms of
    docs) documented.
  - Hosted directly on the website.
  - The single-source requirement met.
  - Doc is comprehensive, addressing most stakeholder needs.

### Graduated

- Are follow-through actions from the Docs assessment complete?
- Does **project documentation** fully addresses the needs of stakeholders?

### Archived

- Is the website repo in an
  [archived state](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories)?
- Is the archived status of the project obvious to those visiting the website,
  such as through the use of a prominent banner?
- If a successor project exists, are there links to its website and/or migration
  documentation?
