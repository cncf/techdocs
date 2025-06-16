---
title: Assessment criteria and examples
---

# Assessment criteria and examples

We recommend reading the
[CNCF sandbox project documentation primer](../sandbox-doc-primer.md) before
reviewing these criteria. The primer contains key definitions concepts that are
referred to in the criteria.

## Project documentation

### Information architecture

How your technical information is organized, laid out, and presented. This
includes structure (pages/subpages/sections/subsections), information types
(conceptual/instructional/reference), and matching documentation content to user
expectations.

We evaluate on the following:

- Is there high level conceptual content?
- Is every product feature documented?
- Does the documentation define all user roles (personas) for the product?
- Are there instructions (tasks, tutorials) documented for features?
- Are there instructions for all major use cases for each user role?
- Are tasks organized by user role and use case?
- Does instructional content demonstrate atomicity — are individual tasks
  clearly named according to their goals?
- Are tasks written as numbered step-by-step instructions?
- Do task descriptions in headings and the TOC describe the task with a verb
  phrase?
- Is the documentation free of any key features which are documented but missing
  task documentation?
- Is the “happy path” — the most common use case — documented?
- If the documentation does not suffice, is there a clear escalation path for
  users needing more help?
- If the product exposes an API, is there a complete reference?
- If the product has CLIs, are there complete references?
- Is content up to date and accurate?
- Does the documentation separate conceptual, instructional, and reference
  information?

Example:

- https://prometheus.io/docs

### New user content

New users are the most avid users of documentation and they have unique
documentation needs.

We evaluate on the following:

- Is “getting started” clearly labeled? (“Getting started”, “Installation”,
  “First steps”, or the equivalent.)
- Is there a “getting started” path for all user roles?
- Is installation documented step-by-step?
- Are different types of installation documented (development, test, production)
  if necessary?
- If needed, are multiple OSes documented?
- Do users know where to go after reading the getting started guide?
- Is your new user content clearly signposted on your site’s homepage or at the
  top of your information architecture?
- Is there easily copy-pastable sample code or other example content?

<!-- markdownlint-enable line-length -->
<!-- cSpell:ignore OSes copy-pastable Algolia Docsy -->

Example:

- https://falco.org/docs/getting-started/

### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens if you don’t plan for them.

We evaluate on the following:

- Is your documentation searchable?
- Are you planning for localization/internationalization as regards site
  directory structure?
- Is a localization framework present?
- Do you have a clearly documented method for versioning your content?
- Is release-specific information documented in release notes?
- Is the documentation free of duplicate or nearly duplicated sections of
  information?
- Do informational graphics add value by providing information in a way that
  would be difficult in text?
- Will graphics require frequent modifications due to software changes, GUI
  updates, or translation?

Example:

- https://kubernetes.io/docs/

### Content creation processes

Documentation is only useful if it is accurate and well maintained. It requires
the same kind of review and approval processes as code.

We evaluate on the following:

- Is there a clearly documented (ongoing) contribution process for
  documentation?
- Does your code release process account for documentation creation & updates?
- Who reviews and approves documentation pull requests?
- Does the website have a clear owner/maintainer?

Examples:

- https://github.com/nats-io/nats-site/blob/master/MAINTAINERS.md (clearly
  documented maintainers)
- https://thanos.io/tip/contributing/how-to-contribute-to-docs.md

### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evaluate on the following:

- Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?
- Does the project use language like "simple", "easy", etc.?

## Contributor documentation

### Communication methods documented

One of the easiest ways to attract new contributors is making sure they know how
to reach you.

We evaluate on the following:

- Is there a Slack/Discord/Discourse or equivalent community prominently linked
  from your website?
- Is there a direct link to your GitHub project or repository?
- Can users find and join periodic (weekly or monthly) project meetings, if
  applicable?
- Are mailing lists documented?

Example:

- https://prometheus.io/community/

### Beginner friendly issue backlog

We evaluate on the following:

- Are docs issues well-triaged?
- Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a “good first issue” label)?
- Are issues well-documented (i.e., more than just a title)?
- Are issues maintained for staleness?

Example:

- https://github.com/opentracing/opentracing.io/issues (all of open tracing’s
  backlogs are well maintained!)

### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

We evaluate on the following:

- Do you have a community repository or section on your website?
- Is there a document specifically welcoming new contributors and documenting a
  first contribution process?
- Can new users find where to get help?

Example:

- https://github.com/helm/community

### Project governance documentation

One of the CNCF’s core project values is open governance.

We evaluate on the following:

- Is project governance clearly documented?

Example:

- https://github.com/envoyproxy/envoy/blob/main/GOVERNANCE.md

## Website

### Single-source requirement

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

We evaluate on the following:

- Does the project have a single source for documentation? If not, is there a
  reason?

### Minimal website requirements

Listed here are the _minimal_ website requirements for projects based on their
[maturity level][]: sandbox, incubating, graduated and archived.

We evaluate on the following:

_Note: Except for archived projects, requirements are cumulative through project
maturity levels so, for example, incubating projects must satisfy the
requirements for sandbox projects._

#### Sandbox

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
  - It is acceptable at this maturity level to link out to documentation that
    hasn't yet been integrated into the website.
  - _Example_: website with a single homepage, without any documentation or, as
    was mentioned above, linking out to an external (preexisting) source for
    docs.
  - _However_: consider reading the recommended practices in this repository and
    implementing as many of the best practices as you can. This groundwork will
    pay big dividends later when you need to upgrade your practices and update
    your documentation as an incubating project. Assistance is available from
    CNCF TechDocs anytime, including answers to individual questions or a
    documentation workshop.

#### Incubating

- Are all [Website guidelines][] satisfied?
- Has a [Docs assessment][] or reassessment been requested through the CNCF
  [service desk][]?
- Does **project documentation** meet these standards?:
  - Stakeholders / personas are identified and their core needs (in terms of
    docs) documented.
  - Hosted directly on the website.
  - The [single-source requirement][] met.
  - Doc is comprehensive, addressing most stakeholder needs.

#### Graduated

- Are follow-through actions from the [Docs assessment][] complete?
- Does **project documentation** fully addresses the needs of key stakeholders?

#### Archived

- Is the website repo in an [archived state][]?
- Is the archived status of the project obvious to those visiting the website,
  such as through the use of a prominent banner?
- If a successor project exists, are there links to its website and/or migration
  documentation.

[archived state]:
  https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories
[docs assessment]: ./howto.md
[maturity level]:
  https://github.com/cncf/toc/tree/main/process#ii-stages---definitions--expectations
[service desk]: https://servicedesk.cncf.io
[single-source requirement]: #single-source-requirement
[website guidelines]: ../website-guidelines-checklist.md

### Usability, accessibility and devices

Most CNCF websites are accessed from mobile and other non-desktop devices at
least 10-20% of the time. Planning for this early in your website's design will
be much less effort than retrofitting a desktop-first design.

We evaluate on the following:

- Is the website usable from mobile?
- Are doc pages readable?
- Are all or most website features accessible from mobile -- such as the
  top-nav, site search, and in-page table of contents?
- Might a [mobile-first][] design make sense for your project?
- Are color contrasts significant enough for color-impaired readers?
- Are most website features usable using a keyboard only?
- Does text-to-speech offer listeners a good experience?

[mobile-first]:
  https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first

Plan for suitable [accessibility][] measures for your website.

We evaluate on the following:

- Are color contrasts significant enough for color-impaired readers?
- Are most website features usable using a keyboard only?
- Does text-to-speech offer listeners a good experience?

It is up to each project to set their own guidelines.

[accessibility]: https://developer.mozilla.org/en-US/docs/Web/Accessibility

### Branding

CNCF seeks to support enterprise-ready open source software. A key aspect of
this is branding and marketing.

We evaluate on the following:

- Is there an easily recognizable brand for the project (logo, font, and color
  scheme) clearly identifiable?
- Is the brand used across the website consistently?
- Is the website’s typography clean and legible?

Example:

- https://helm.sh/

### Case studies/social proof

One of the best ways to advertise an open source project is to show other
organizations using it.

We evaluate on the following:

- Are there case studies available for the project and are they documented on
  the website?
- Are there user testimonials available?
- Is there an active project blog?
- Are there community talks for the project and are they present on the website?
- Is there a logo wall of users/participating organizations?

Examples:

- https://www.fluentd.org/testimonials (user testimonials)
- https://goharbor.io/ (logo wall)
- https://blog.rook.io/ (blog)

### SEO, Analytics and site-local search

SEO helps users find your project and its documentation, and analytics helps you
monitor site traffic and diagnose issues like page 404s. Intra-site search,
while optional, offers your readers site-focused search results and is strongly
recommended.

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

### Maintenance planning

Website maintenance is an important part of project success, especially when
project maintainers aren’t web developers.

We evaluate on the following:

- Is your website tooling well supported by the community (i.e., Hugo with the
  Docsy theme) or commonly used by CNCF projects (our recommended tech stack?)
- Are you actively cultivating website maintainers from within the community?
- Are site build times reasonable?
- Do site maintainers have adequate permissions?

Example:

- https://kubernetes.io

### Other

- Is your website accessible via HTTPS?
- Does HTTP access, if any, redirect to HTTPS?
- Are links working and current?
  - Internal documentation
  - External documentation
  - External websites
  - Web applications
