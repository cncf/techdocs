# Assessment template

Prepared by: Celeste Horgan
([@celestehorgan](https://github.com/cncf/techdocs))<br> Date: 2021-11-30

## Introduction

This document assesses the quality and completeness of a project's documentation
and website (if present).

This document:

- Measures existing documentation quality against the CNCF’s standards
- Recommends specific and general improvements
- Provides examples of great documentation as reference
- Identifies key improvements with the largest return on investment

## How this document works

The assessment is divided into three sections:

- **Project documentation:** for end users of the project; aimed at people who
  intend to use it
- **Contributor documentation:** for new and existing contributors to the
  project
- **Website:** branding, website structure, and maintainability

Each section rates content based on different
[criteria](../docs/analysis/criteria.md).

## Project documentation

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| -------------------------- | --- | --- | --- | --- | --- |
| Information architecture   |     |     |     | ✅  |     |
| New user content           |     |     |     |     | ✅  |
| Content maintainability    |     |     |     |     | ✅  |
| Content creation processes |     |     |     |     | ✅  |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

**Information architecture**:

- Flux's documentation is well organized, but there are improvements we could
  make:
  - Between the [Guides](https://fluxcd.io/docs/guides/) and
    [Use cases](https://fluxcd.io/docs/use-cases/) overlap a bit. The topics in
    these two sections are around installing and using Flux with a variety of
    different technologies. The names of both are somewhat vague which causes a
    lack of clarity for the reader: they need to click in to understand what
    each section is about, and even after doing so it isn't entirely clear.
  - The [Migration](https://fluxcd.io/docs/migration/) section isn't more
    important than [Toolkit components](https://fluxcd.io/docs/components/),
    [Toolkit dev guides](https://fluxcd.io/docs/gitops-toolkit/), or the
    [Flux CLI reference](https://fluxcd.io/docs/cmd/). Placing it above these in
    the information architecture doesn't make sense.

**New user content**:

- Flux has a thorough [Getting Started](https://fluxcd.io/docs/get-started/)
  page, complimented by a multi-CLI
  [Installation guide](https://fluxcd.io/docs/installation/) and an informative
  [Docs root](https://fluxcd.io/docs/concepts/). Together these three pages work
  well to introduce new users to Flux. No real improvements needed!

**Content maintainability & site mechanics**:

- Documentation lives in the `flux/website` repository and uses Hugo+Docsy,
  which is our recommended stack! Full marks in this regard. There are two areas
  of potential concern: The
  [Toolkit Components](https://fluxcd.io/docs/components/) section: - The
  [documentation](https://github.com/fluxcd/website/tree/main/external-sources)
  is a touch opaque - The
  [resulting documentation](https://fluxcd.io/docs/components/helm/helmreleases/)
  is not user friendly: it is difficult to read and difficult to understand. A
  useful statistic to keep in mind is that while 50% of developers learn best by
  looking at code and "hacking", the other 50% of developers want to understand
  high-level concepts better before beginning code: providing a bit more
  explanation up front, particularly around the object's required fields and
  what the expected values are. An example would be helpful for this audience.

  - Items under the **Project** top level navigation section. At a glance I
    couldn't figure out how these were being pulled in via (I assume) the
    [Community repository](https://github.com/fluxcd/community), meaning they
    suffer either from a lack of documentation or unclear automation.

- Documentation versioning: Flux's documentation is not versioned but the tool
  itself has been versioned.
  - This leaves existing users of v1 who haven't upgraded in a difficult
    position: if they need to troubleshoot an issue, they can't access v1
    documentation.
  - Flux has a large enough adopter community that back version support is
    something that needs to be managed carefully. If Flux versions the tool
    again, in such a way that introduces breaking changes, I strongly recommend
    reaching out to the TechDocs team for assistance in versioning your
    documentation. If you don't plan to introduce any breaking changes any time
    soon, I wouldn't worry about versioning for now :)
  - The site is searchable, but as mentioned previously: the user only knows
    they're dealing with versioned content when they dive into the migration
    guide.

**Content creation processes**:

- The [Contributing Guide](https://fluxcd.io/docs/contributing/docs/) contains
  really thorough documentation on contributing to both docs and the project
  itself!

- Maintainers are
  [clearly documented](https://github.com/fluxcd/website/blob/main/MAINTAINERS)
  as well as where to find them.

### Recommendations

**Information architecture**:

- Reorganize the [Guides](https://fluxcd.io/docs/guides/) and
  [Use cases](https://fluxcd.io/docs/use-cases/):
  - Docs root
    - ...
    - Installation
    - Integrating Flux
      - Azure
      - OpenShift
      - Helm
      - Jenkins
      - Prometheus
      - Flux Notifications
    - Automation & GitOps
      - Ways of structuring your repositories
      - Setup webhook receivers
      - Sealed Secrets
      - Manage Kubernetes secrets with Mozilla SOPS
      - Automate image updates to Git
      - How to make sortable image tags to use with automation
      - GitHub Actions Manifest Generation
      - GitHub Actions Auto Pull Request
- Move the [Migration Guide](https://fluxcd.io/docs/guides/) to either a
  subsection of [Get Started](https://fluxcd.io/docs/get-started/) or a
  subsection of [Installation](https://fluxcd.io/docs/installation/)
  - Consider renaming "Migration guide" to "Migrate from Flux v1" for clarity

**Content maintenance**:

- If you decide to version the Flux tool again (with the same level of breaking
  changes that v1 to v2 introduced), consider versioning your documentation.

- Write down what areas are automatically pulled in from other repositories,
  what comes in from command line, etc.

- [This file](https://github.com/fluxcd/website/blob/main/hack/import-flux2-assets.sh)
  is _very_ fragile, as it points to specific files at their
  <https://github.com/fluxcd/website/blob/main/hack/import-flux2-assets.sh> and
  seems to have the potential to make the site build succeed but with
  unpredictable results.
  - Consider implementing [Hugo Modules](https://gohugo.io/hugo-modules/) to
    bring things in in a less fragile manner.
  - Alternately, consider reducing the files brought in to the bare minimum and
    writing a set of unit tests for the website repository, ensuring that the
    build fails when files are moved or renamed.

**Content creation processes**:

- Put
  [this information](https://github.com/fluxcd/website/blob/main/content/en/docs/contributing/docs/some-background.md#running-the-site-locally?no-link-check)
  directly in the README.md of the website repository, because people are lazy.
  Kudos on trying to keep everything in one place, however!

## Contributor documentation

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ----------------------------------------- | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     |     |     | ✅  |
| Beginner friendly issue backlog           |     |     |     |     | ✅  |
| “New contributor” getting started content |     |     |     | ✅  |     |
| Project governance documentation          |     |     |     |     | ✅  |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

- **Communication methods** are
  [clearly documented](https://fluxcd.io/docs/contributing/flux/#communications),
  as well as how (and where) to get calendar invites for meetings
- The **issue backlog** is
  [very beginner friendly](https://github.com/fluxcd/flux2/issues) and well
  groomed
- **New contributor getting started content** could use a little bit of work:
  simply put, as a reviewer I wonder how you could reconcile the
  [Flux Contributor Guide](https://fluxcd.io/docs/contributing/) and it's high
  visibility via the project website and the wealth of information in the
  [Community repository](https://github.com/fluxcd/community).
- Project governance is [clearly documented](https://fluxcd.io/governance/). The
  community repository also includes information on
  [governance](https://github.com/fluxcd/community/blob/main/GOVERNANCE.md),
  [Community roles](https://github.com/fluxcd/community/blob/main/community-roles.md),
  and more.

### Recommendations

- Because the community repository is almost - but not entirely - mirrored on
  the website, it's hard to understand what the main entry point is for new
  contributors. It's also difficult to understand whether content should be in
  the Contributor Guide on the website versus the community repository. The
  project team should clearly define the roles of both of these homes for
  contributor information and reorganize appropriately.

## Website

| Criteria                                    | 1   | 2   | 3   | 4   | 5   |
| ------------------------------------------- | --- | --- | --- | --- | --- |
| Single-source for all files                 |     |     | ✅  |     |     |
| Meets min website req. (for maturity level) |     |     |     | ✅  |     |
| Branding and design                         |     |     |     |     | ✅  |
| Case studies/social proof                   |     |     |     | ✅  |     |
| Maintenance planning                        |     |     |     |     | ✅  |
| A11y plan & implementation                  |     |     |     | ✅  |     |
| Mobile-first plan & impl.                   |     |     |     |     | ✅  |
| HTTPS access & HTTP redirect                |     |     |     |     | ✅  |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

- **Single source for all files**: While all files are single sourced (that is,
  files are not duplicated),
  [the build process which governs](https://github.com/fluxcd/website/blob/main/hack/import-flux2-assets.sh)
  pulling in and building out some webpages is very fragile. In my career as a
  technical writer I have seen similar setups fail due to catastrophic
  fragility, particularly once the original code owners leave the organization.

- Flux meets and exceeds the
  [website requirements](../docs/analysis/criteria.md#minimal-website-requirements)
  for its maturity level, save for the single sourcing requirement as noted
  above.

- The website is mobile friendly

- The website meets the basic a11y requirements (high contrast text), but could
  improve on images

- Branding is consistently applied throughout the site, despite using
  Docsy+Hugo. The site feels professional and well maintained.

### Recommendations

- Add alt text to images/diagrams to improve accessibility

## Final Recommendations

1. Reorganize the guides [as mentioned above](#project-documentation)
2. Work with the techdocs team on an in-depth edit of your content: most of the
   content is excellent, and simply needs a proofreading pass from an
   experienced writer.
3. Rework the [Toolkit Components](https://fluxcd.io/docs/components/) section
   to improve the fragility of generating these files, as well as the
   documentation user experience for readers.
