---
title: KubeVirtDocumentation Analysis
created: 2026-05-24
modified: 2026-06-20
author: Bruce Hamilton
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document is an analysis of the effectiveness and completeness of the open
source software (OSS) project's documentation and website. It is funded by the
Cloud Native Computing Foundation (CNCF) Foundation as part of its overall
effort to incubate, grow, and graduate open source cloud native software
projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

### Purpose

This document was written to analyze the current state of KubeVirt's
documentation. It aims to provide project leaders with an informed understanding
of potential problems in current project documentation. A second
**implementation** document outlines an actionable plan for improvement. A third
document is an **issues** list of issues to be added to the project
documentation repository. These issues can be taken up by contributors to
improve the documentation.

This document:

- Analyzes the current KubeVirt technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

### Scope of analysis

The documentation discussed here includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the
KubeVirt GitHub repository.

The KubeVirt website and documentation are written in Markdown and are compiled
using the [Hugo, Docusaurus, Sphinx, other] static site generator with the
[Docsy, other] theme and served from [the Netlify platform, other]. The site's
code is stored on the KubeVirt GitHub repo.

#### In scope

<!-- - Website: https://KubeVirt.io
- Documentation: https://KubeVirt.io/user-guide
- Website repo: https://github.com/KubeVirt/user-guide -->

#### Out of scope

- Other KubeVirt GitHub repositories besides `user-guide`.

### How this document is organized

This document is divided into two sections that represent two major areas of
concern:

- **Project documentation:** concerns documentation for users of the KubeVirt
  software, aimed at people who intend to use the project software.
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the KubeVirt OSS project.

Each section begins with summary ratings based on a rubric with appropriate
[criteria] for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help KubeVirt users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

The accompanying **implementation** document breaks the recommendations down
into concrete actions that can be implemented by project contributors. Its focus
is on drilling down to specific, achievable work that can be completed in
constrained blocks of time. Ultimately, the implementation items are decomposed
into a series of issues and entered on GitHub.

(provide link)

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the **implementation** plan and **issues list**.

Readers interested in the current state of the documentation and the reasoning
behind the recommendations should read the section of this document pertaining
to their area of concern:

- [Project documentation](#project-documentation)
- [Contributor documentation](#contributor-documentation)

Examples of CNCF documentation that demonstrate the analysis criteria are linked
from the [criteria] specification.

#### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards,
and suggests possible improvements. In most cases there is more than one way to
do things. Few recommendations here are meant to be prescriptive. Rather, the
recommended implementations represent the reviewers' experience with how to
apply documentation best practices. In other words, borrowing terminology from
the lexicon of RFCs, the changes described here should be understood as
"recommended" or "should" at the strongest, and "optional" or "may" in many
cases. Any "must" or "required" actions are clearly denoted as such, and pertain
to legal requirements such as copyright and licensing issues.

## Project documentation

Section analysis by author unless otherwise indicated

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                  | [Rating (1-5)] |
| -------------------------- | -------------- |
| Information architecture   | [rating (1-5)] |
| New user content           | [rating (1-5)] |
| Content maintainability    | [rating (1-5)] |
| Content creation processes | [rating (1-5)] |
| Inclusive language         | [rating (1-5)] |

### Comments

The following sections contain brief assessments of each element of the Project
Documentation rubric.

The following observations are my initial observations on the KubeVirt
documentation (https://kubevirt.io/user-guide) by its sections as shown on the
top navigation bar.

This comment section refers to some of the high priority tasks identified by AI,
Claude Sonnet 4.6. For For all tasks and details, see TBD.

Docs welcome page:

- From the home page, selecting **Docs** from the top navigation tabs opens the
  **KubeVirt User Guide** page - with the main sections of the documentation as
  options on the top navigation tabs. This differs from having the navigation
  tabs the choices of all of the web site. This is unusual, but not a negative
  experience.
- Selecting the KubeVirt icon on the upper-left should return to home page but
  stays on the same page. To return to the home page, you must use the browser.
- On the Welcome page, the bulleted list of selection descriptions needed
  consistent editing would read better as a two-column table (table head not
  needed).
- The **Try it out** heading should include "QuickStarts" (besides the URL) so
  that the reader doesn't wonder if its something different.

Architecture:

- This page describes essentials and core concepts as expected for an
  Architecture page but could be organized better to coordinate with the
  graphics. The Application Layout subsection would be better closer to the top.

- The diagram labeled "simplified version" would be better with its own
  description.

- The How to and When to use a virtual machine sections would be better placed
  in getting started or as administration tasks.

- Examples of Architecture tasks identified by AI:
  - Separate conceptual and procedural content.
  - Update deprecated spec.running references.
  - Verify and update force-restart grace-period limitation.
  - Review and restructure section ordering for new-user flow.

QuickStarts:

- The Labs, which are used in conjunction with the Quickstarts, are not shown
  until select a QuickStart. Labs should in the navigation bar.

- Creating a VM for KubeVirt would be an obvious paramount QuickStart. But there
  are currently two topics to do this. The user starts with either start with
  "KubeVirt QuickStart with Kind" or "KubeVirt QuickStart with Minikube",
  followed by "Use KubeVirt" to create the VM. Perhaps the could be one main
  topic with references to Kind and MiniKube. Such thoughts may have been
  considered before.

- Examples of Quickstart tasks identified by AI:
  - Add common prerequisites section.
  - Add labs link to top-level navigation.
  - Fix accessModes error and add it as an explicit troubleshooting step.
  - Add cleanup and reset instructions.
  - Update dv_fedora.yml to current CDI API and image reference.
  - Investigate and fix SSH connectivity issues.

Cluster Administration:

- The top (first) page in the section, Installation, has guidance what would be
  helpful in getting started content.
- A majority topics are reference and also how-to's.
- The "Confidential computing" topic might be better titled as "Encrypted
  Virtualization".
- The "KubeVirt Tekton" topic might be better titled as "Tekton pipelines."

- Examples of Cluster Administration tasks identified by AI:
  - Audit and update OKD Service Catalog APB section.
  - Update outdated `--admission-control` flag reference.
  - Replace internal dev image references with public images.
  - Verify and update API stability status.
  - Replace deprecated `--delete-local-data` flag.
  - Remove outdated live-migration-not-yet-supported note.
  - Add installation instructions for KubeVirt Tekton Tasks.

User Workloads:

- The top overview for this section should describe the concept of User
  Workloads and how it's pertinent to KubeVirt, such as to use workload
  partitioning to accommodate resources spikes.
- The "Lifecycle" topic contains useful How-to guidance on VMs with Kubectl.
- The "Basic Use" topic has useful KubeVirt intro content.
- Helpful `virtctl` summary guidance could be aggregated from `virtctl in the
  title.split computing
- The "Templates" and "Virtual Machine Templates" share the same content.

- Examples of User Workload tasks identified by AI:
  - Add VirtualMachine (VM) vs VirtualMachineInstance (VMI) distinction.
  - Add macOS and Windows install instructions.
  - Fix conflicting kernelArgs documentation.
  - Add `virtctl` commands for querying guest info.
  - Add the list of available common instance types.
  - Add deprecation note pointing to VirtualMachinePool.
  - Replace kubevirt/fedora-cloud-container-disk-demo image with public image.
  - Update RestartRequired limitation about revert workaround.

Compute:

- The topics comprise a variety of tasks that read well and have needs for
  mostly tasks such as defining terms and providing examples. Adding subsections
  to the left-side navigation bar could be helpful for discovery.

- Examples of Compute tasks identified by AI:
  - Add a KubeVirt-specific hugepages configuration example.
  - Create Compute section overview page.
  - Add a live-migration cancellation section.
  - Reconcile page content with the live migration lab.
  - Add introduction distinguishing nodeSelector vs affinity vs toleration.
  - Flag alpha label for auto-memory-limits-ratio as potentially unstable.
  - Add a summary table of resource allocation rules.
  - Add WaitAsReceiver RunStrategy documentation.

Network:

- Essentially reference content. Task-based titles could help discovery.

- Examples of Compute tasks identified by AI:

- Create Network section overview page.
- Replace unofficial container disk image.
- Add a 'How DNS resolution works for VMs' conceptual intro.
- Update API reference links from 'master' to 'main'.
- Add a network binding comparison table.
- Replace internal dev container image in VMI example.
- Add an egress NetworkPolicy example.
- Add a hot-unplug step-by-step example.

Storage:

- Essentially reference content. Task-based titles could help discovery.

- Examples of Compute tasks identified by AI:
  - Create Storage section overview page.
  - Replace hardcoded personal path in example command.
  - Replace 'master' branch in API reference links with 'main'.
  - Replace unofficial kubevirt dev images in examples.
  - Remove stale pre-v0.20 registryDisk migration note.
  - Replace dev image in disk-sharing example.
  - Clarify Migration Controller vs Migration Operator naming.
  - Replace dev images in volume migration examples.

Release notes:

- A unusual prominent location for release notes, but clearly convenient.
  Improvements suggests could be formatting, consistency edits, and perhaps data
  aggregation.

- Examples of Compute tasks identified by AI:

- Complete the truncated KubeVirtVMGuestMemoryPressure entry.
- Add missing Kubernetes support matrix line to v1.1.0 section.
- Establish and document a release notes template.
- Add release notes maintenance guidance to contributing.md.

Contributing:

- Provide an engaging page about ways to contribute. A large part of the content
  could be in a more discoverable two-column table of links and descriptions.

- Examples of Contributing tasks identified by AI:

- Verify New Contributor session recording playlist link.
- Add PR CI process overview.
- Add local-preview workflow to Contributing page.
- Add link-checking and spell-check steps to Contributing page.

Virtualization Debugging:

- Specifies the page is about KubeVirt debugging, so having "Virtualization" in
  the title makes it seem like it might be subset of KubeVirt debugging.

- Overview needs examples of debugging scenarios.

Examples of Virtualization Debugging tasks identified by AI:

- Fix 'master' branch in LogVerbosity API reference link.
- Fix stale operations/ path in cross-link to debug page.
- Replace unofficial dev image in logging example VMI.

#### Information architecture

The overall structure (pages/subpages/sections/subsections) of your project
documentation. We evaluate on the following:

- Is there high level conceptual/“About” content? Is the documentation feature
  complete? (i.e., each product feature is documented)
- Are there step-by-step instructions (tasks, tutorials) documented for
  features?
- Are there any key features which are documented but missing task
  documentation?
- Is the “happy path”/most common use case documented? Does task and tutorial
  content demonstrate atomicity and isolation of concerns? (Are tasks clearly
  named according to user goals?)
- If the documentation does not suffice, is there a clear escalation path for
  users needing more help? (FAQ, Troubleshooting)
- If the product exposes an API, is there a complete reference?
- Is content up to date and accurate?

#### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

- Is “getting started” clearly labeled? (“Getting started”, “Installation”,
  “First steps”, etc.)
- Is installation documented step-by-step?
- If needed, are multiple OSes documented?
- Do users know where to go after reading the getting started guide?
- Is your new user content clearly signposted on your site’s homepage or at the
  top of your information architecture?
- Is there sample code or other example content that can easily be copy-pasted?

#### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens, particularly if you don’t plan for them.

We evaluate on the following:

- Is your documentation searchable?
- Are you planning for localization/internationalization with regards to site
  directory structure? Is a localization framework present?
- Do you have a clearly documented method for versioning your content?

#### Content creation processes

Documentation is only as useful as it is accurate and well-maintained, and
requires the same kind of review and approval processes as code.

We evaluate on the following:

- Is there a clearly documented (ongoing) contribution process for
  documentation?
- Does your code release process account for documentation creation & updates?
- Who reviews and approves documentation pull requests?
- Does the website have a clear owner/maintainer?

#### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evluate on the following:

- Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?
- Does the project use language like "simple", "easy", etc.?

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Information architecture

#### New user content

#### Content maintainability & site mechanics

#### Content creation processes

#### Inclusive language

## Contributor documentation

Section analysis generated by AI, Claude Sonnet 4.6, and includes the answers to
questions, findings, and rating evaluations.

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                                 | Rating (1-5) |
| ----------------------------------------- | ------------ |
| Communication methods documented          | 5            |
| Beginner friendly issue backlog           | 4            |
| "New contributor" getting started content | 4            |
| Project governance documentation          | 5            |

### Comments

The KubeVirt documentation provides a well-organized documentation set that can
accommodate recommended improvements without a major restructure.

The following sections contain brief assessments of each element of the
Contributor Documentation rubric.

> AUTHOR NOTE: For each heading below, discuss how well the in-scope items meet
> these criteria. Keep in mind that much of the contributor documentation might
> be contained in the documentation repository.

#### Communication methods documented

One of the easiest ways to attract new contributors is making sure they know how
to reach you.

We evaluate on the following:

- Is there a Slack/Discord/Discourse/etc. community and is it prominently linked
  from your website?

  **Answer:** Partially. Slack is mentioned in the
  [Contributing](https://kubevirt.io/user-guide/contributing/) page of the user
  guide ("Visit the KubeVirt community page, participate on Slack"), but it is
  not prominently linked from the user-guide homepage or navigation. The
  `#virtualization` and `#kubevirt-dev` Slack channels are listed in the
  [sig-list](https://github.com/kubevirt/community/blob/main/sig-list.md) in the
  community repo. The kubevirt.io/community/ page did not render meaningful
  content during testing. Slack presence is documented but not prominently
  surfaced from the main site.

- Is there a direct link to your GitHub organization/repository?

  **Answer:** Yes. The Contributing page links directly to the
  [KubeVirt GitHub organization](https://github.com/kubevirt) and to specific
  repos (user-guide, kubevirt.github.io, community, kubevirt/kubevirt). Every
  page also has an "Edit this page" link pointing to the GitHub source.

- Are weekly/monthly project meetings documented? Is it clear how someone can
  join those meetings?

  **Answer:** Yes. The
  [sig-list.md](https://github.com/kubevirt/community/blob/main/sig-list.md) in
  the community repo documents a weekly community meeting (Wednesdays 15:00 UTC
  via Zoom) and multiple SIG meetings (control-plane, compute, storage,
  observability, CI, etc.), each with Zoom links. The Contributing page links to
  community resources where these are found. The meeting times, cadences, and
  Zoom links are clear.

- Are mailing lists documented?

  **Answer:** Yes. The
  [kubevirt-dev mailing list](https://groups.google.com/forum/#!forum/kubevirt-dev)
  is documented in the sig-list and referenced in the GOVERNANCE.md. A private
  [cncf-kubevirt-maintainers](mailto:cncf-kubevirt-maintainers@lists.cncf.io)
  list is also documented. These are in the community repo, which is linked from
  the user-guide Contributing page.

#### Beginner friendly issue backlog

We evaluate on the following:

- Are docs issues well-triaged?

  **Answer:** Partially. The user-guide repo has very few open issues (only 2 as
  of evaluation), with minimal label usage — one is labeled `kind/enhancement`
  and one has no labels. Closed issues show some use of lifecycle labels
  (`lifecycle/stale`, `lifecycle/rotten`) indicating a staleness bot is in use,
  but active triage with descriptive labels appears limited.

- Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a "good first issue" label)?

  **Answer:** Partially. The `good-first-issue` label exists and has been used
  (e.g., issue 925 in user-guide, and actively in kubevirt/kubevirt). The
  Contributing page explicitly directs new contributors to look for this label.
  However, there are currently no open `good-first-issue` issues in the
  user-guide repo, making the pathway harder to act on in practice.

- Are issues well-documented (i.e., more than just a title)?

  **Answer:** Mixed. The open issues visible (e.g., "Proposal: Add Simplified
  Chinese (zh-CN) Documentation", "Improve the getting started guides of
  KubeVirt") appear to have descriptive titles and likely more body content, but
  the overall issue count is very small, making it hard to assess a pattern.

- Are issues maintained for staleness?

  **Answer:** Yes. Lifecycle labels (`lifecycle/stale`, `lifecycle/rotten`,
  `lifecycle/frozen`) are applied to issues over time, indicating an automated
  staleness bot (likely prow/tide) is active in the project's repos.

#### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

We evaluate on the following:

- Do you have a community repository or section on your website?

  **Answer:** Yes. There is a dedicated
  [kubevirt/community](https://github.com/kubevirt/community) GitHub repository
  containing governance docs, SIG charters, membership policy, and the sig-list.
  The user-guide Contributing page links to it. The kubevirt.io website also has
  a `/community/` page, though it did not render substantive content during
  evaluation.

- Is there a document specifically for new contributors/your first contribution?

  **Answer:** Yes. The user-guide has a dedicated
  [Contributing](https://kubevirt.io/user-guide/contributing/) page with a "Your
  first contribution" section that lists suggested repos, explains the
  `good-first-issue` label, and describes other ways to get started.
  Prerequisites (Git, GitHub workflow, labs) are also clearly listed.

- Do new users know where to get help?

  **Answer:** Yes. The user-guide homepage has an explicit "Getting help"
  section. The Contributing page directs users to the community page, Slack, and
  GitHub issues. The community repo README also lists communication channels.
  Help pathways are documented across multiple locations.

#### Project governance documentation

One of the CNCF’s core project values is open governance.

We evaluate on the following:

- Is project governance clearly documented?

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Communication methods documented

KubeVirt documents its communication channels thoroughly in the community repo
and CONTRIBUTING.md, but discoverability from the main website and the
`kubevirt/kubevirt` README could be improved. The `kubevirt.io/community/` page
did not render meaningful content during evaluation, which is a missed
opportunity for new visitors.

**Recommendations:**

- Add a visible "Community" section to the `kubevirt/kubevirt` README (or expand
  the existing one) that lists Slack channels with direct join links, the
  mailing list address, and a link to the weekly meeting schedule — mirroring
  the detail already in `kubevirt/community/README.md`.
- Fix or replace the `kubevirt.io/community/` page so it renders usable content:
  Slack links, meeting schedule, mailing list, and SIG overview.
- Promote the `#virtualization` and `#kubevirt-dev` Slack channel links more
  prominently on the user-guide Contributing page (currently only mentioned in
  passing with no direct join URL).

#### Beginner friendly issue backlog

The `good-first-issue` label infrastructure exists and is referenced in the
Contributing page, but the user-guide repo has very few open issues overall and
no open `good-first-issue` issues at the time of evaluation. Without an
actionable backlog, new contributors who follow the guidance reach a dead end.

## Website and infrastructure

Section analysis generated by AI, Claude Sonnet 4.6, and includes the answers to
questions, findings, and rating evaluations.

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                                   | Rating (1-5) |
| ------------------------------------------- | ------------ |
| Single-source for all files                 | 2            |
| Meets min website req. (for maturity level) | 3            |
| Usability, accessibility, and design        | 3            |
| Branding and design                         | 4            |
| Case studies/social proof                   | 3            |
| SEO, Analytics, and site-local search       | 2            |
| Maintenance planning                        | 3            |
| A11y plan & implementation                  | 2            |
| Mobile-first plan & impl.                   | 3            |
| HTTPS access & HTTP redirect                | 5            |
| Google Analytics 4 for production only      | 1            |
| Indexing allowed for production server only | 2            |
| Intra-site / local search                   | 4            |
| Account custodians are documented           | 1            |

### Comments

The following sections contain brief assessments of each element of the Website
and documentation infrastructure rubric.

The KubeVirt user guide is a well-structured, professional documentation site
built with MkDocs Material, hosted on GitHub Pages at `kubevirt.io/user-guide/`.
The site is responsive, visually clean, and covers a comprehensive breadth of
topics. The primary infrastructure gaps are the absence of analytics on the
user-guide site, no documented a11y plan, no explicit account custodians, and
the split between two separate repos for the overall kubevirt.io web presence
(the main site uses Jekyll/kubevirt.github.io; docs use MkDocs/user-guide).
These are addressable gaps for an incubating project moving toward graduation.

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

**Finding:** The user-guide documentation source files all reside in a single
repo ([kubevirt/user-guide](https://github.com/kubevirt/user-guide)) under the
`./docs/` directory — this is good. However, the overall kubevirt.io web
presence is split across two repos with different technology stacks:
[kubevirt/kubevirt.github.io](https://github.com/kubevirt/kubevirt.github.io)
(Jekyll, main website) and kubevirt/user-guide (MkDocs, documentation). The user
guide is deployed as a subdirectory (`/user-guide/`) of the main site. These two
repos require separate contribution workflows, separate tooling, and separate CI
pipelines, which is a coordination overhead and potential source of confusion.
Within the user-guide repo itself, source is properly single-sourced.

**Rating: 2** — The split between two repos and two static site generators for
the combined web presence needs improvement.

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

**Finding:** The user guide is hosted directly on GitHub Pages at
`kubevirt.io/user-guide/` ✅. This docs analysis has been requested ✅. User
docs are comprehensive, covering architecture, installation, cluster
administration, user workloads, compute, networking, storage, debugging, and
release notes — this addresses most stakeholder needs ✅. Stakeholder roles
(cluster admins, users, developers) are implicitly addressed by the site's
navigation structure, though not explicitly documented as personas. CNCF website
guideline compliance has not been fully verified as part of this analysis.

**Rating: 3** — Meets incubating requirements on hosting, docs breadth, and
having this analysis, with minor gaps in explicit stakeholder documentation.

#### Usability, accessibility and devices

Most CNCF websites are accessed from mobile and other non-desktop devices at
least 10-20% of the time. Planning for this early in your website's design will
be much less effort than retrofitting a desktop-first design.

- Is the website usable from mobile?

  **Answer:** Yes. MkDocs Material renders a responsive layout on mobile with a
  hamburger menu, collapsible navigation, and readable typography.

- Are doc pages readable?

  **Answer:** Yes. Pages use clean typography, good heading hierarchy, and
  syntax-highlighted code blocks.

- Are all / most website features accessible from mobile -- such as the top-nav,
  site search and in-page table of contents?

  **Answer:** Yes. The Material theme's mobile rendering includes the search
  input, collapsible nav, and in-page TOC, all accessible from mobile.

- Might a [mobile-first] design make sense for your project?

  **Answer:** Given that KubeVirt targets infrastructure/DevOps engineers who
  typically work at desktops, mobile-first is less critical, but the current
  responsive design is adequate.

[mobile-first]:
  https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first

Plan for suitable [accessibility][] measures for your website. For example:

- Are color contrasts significant enough for color-impaired readers?

  **Answer:** The teal primary color on a white/dark background generally
  provides sufficient contrast, though no formal contrast audit has been
  documented.

- Are most website features usable using a keyboard only?

  **Answer:** MkDocs Material provides standard keyboard navigation support
  (tab, enter, arrow keys for search results), though no explicit keyboard-only
  audit is documented.

- Does text-to-speech offer listeners a good experience?

  **Answer:** The Material theme includes ARIA labels for navigation elements
  and search, providing a reasonable screen reader experience, though it has not
  been explicitly tested.

It is up to each project to set their own guidelines. No explicit a11y
guidelines or audit are documented for this project.

[accessibility]: https://developer.mozilla.org/en-US/docs/Web/Accessibility

**Rating: 3** — The Material theme provides good usability and mobile support by
default; no formal a11y plan or audit is present.

#### Branding and design

CNCF seeks to support enterprise-ready open source software. A key aspect of
this is branding and marketing.

We evaluate on the following:

- Is there an easily recognizable brand for the project (logo + color scheme)
  clearly identifiable?

  **Answer:** Yes. The KubeVirt logo (cube icon) and teal color scheme are
  consistently applied across the user guide and main website.

- Is the brand used across the website consistently?

  **Answer:** Yes. The MkDocs Material theme is configured with the KubeVirt
  icon, teal primary/accent colors, and a custom favicon. The branding is
  consistent throughout all pages.

- Is the website's typography clean and well-suited for reading?

  **Answer:** Yes. Material Design's Roboto typeface provides clean, legible
  typography with appropriate heading hierarchy and code font differentiation.

**Rating: 4** — Branding is well-executed and consistent; meets or exceeds
standards for an incubating project.

#### Case studies/social proof

One of the best ways to advertise an open source project is to show other
organizations using it.

We evaluate on the following:

- Are there case studies available for the project and are they documented on
  the website?

  **Answer:** Not in the user guide. The main kubevirt.io site features a logo
  wall of 14 end users (ARM, Cloudflare, NVIDIA, Microsoft, Oracle, Red Hat,
  CoreWeave, SUSE, etc.) and 17 vendors. However, there are no dedicated
  narrative case studies in the user guide.

- Are there user testimonials available?

  **Answer:** No explicit testimonials are present in the user guide or visibly
  on the main site.

- Is there an active project blog?

  **Answer:** Yes. The kubevirt.io main site has an active blog with recent
  posts (KubeVirt v1.8 release announcement in March 2026, security audit
  results, technical articles on migration networks, and more).

- Are there community talks for the project and are they present on the website?

  **Answer:** Not prominently on the user guide. The Contributing page links to
  a New Contributor session recording on YouTube, but there is no dedicated
  talks/conference section in the user guide.

- Is there a logo wall of users/participating organizations?

  **Answer:** Yes, on the main kubevirt.io homepage — End Users, Vendors, and
  Integrations sections show logos with links.

**Rating: 3** — Strong adopter presence on the main site; the user guide itself
lacks case studies and talks sections, but this is typical for a doc-focused
sub-site.

#### SEO, Analytics and site-local search

SEO helps users find your project and it's documentation, and analytics helps
you monitor site traffic and diagnose issues like page 404s. Intra-site search,
while optional, can offer your readers a site-focused search results.

We evaluate on the following:

- Analytics:
  - Is analytics enabled for the production server?

    **Answer:** No analytics is configured in the user guide's `mkdocs.yml` or
    detected in the live site HTML. The main kubevirt.io site has an Adobe
    Analytics comment tag in its HTML, but no analytics code was found in the
    user-guide site.

  - Is analytics disabled for all other deploys?

    **Answer:** Not applicable — no analytics is configured at all for the user
    guide.

  - If your project used Google Analytics, have you migrated to GA4?

    **Answer:** Google Analytics is not used on the user guide. No GA4
    configuration was found.

  - Can Page-not-found (404) reports easily be generated from you site
    analytics? Provide a sample of the site's current top-10 404s.

    **Answer:** No — without analytics configured on the user guide, 404 reports
    cannot be generated from it.

- Is site indexing supported for the production server, while disabled for
  website previews and builds for non-default branches?

  **Answer:** A `sitemap.xml` is generated at
  `kubevirt.io/user-guide/sitemap.xml` ✅, and the root `robots.txt` contains
  only a `Sitemap:` directive with no `Disallow` rules — meaning the production
  site is fully indexable. However, there is no evidence that Netlify preview
  builds (which are configured via `netlify.toml`) have indexing disabled via
  `X-Robots-Tag` headers or a preview-specific `robots.txt`.

- Is local intra-site search available from the website?

  **Answer:** Yes. The MkDocs `search` plugin is configured in `mkdocs.yml` and
  confirmed functional in the live site HTML. Search is available in the header
  on all pages.

- Are the current custodian(s) of the following accounts clearly documented:
  analytics, Google Search Console, site-search (such as Google CSE or Algolia)

  **Answer:** No. There is no documentation of account custodians for analytics,
  Google Search Console, or site search anywhere in the user-guide repo or
  community repo.

**Rating: 2** — Intra-site search is well-implemented, a sitemap exists, and
HTTPS is enforced. However, the absence of any analytics on the user guide, no
confirmed indexing control for preview builds, and no custodian documentation
are significant gaps.

#### Maintenance planning

Website maintenance is an important part of project success, especially when
project maintainers aren’t web developers.

We evaluate on the following:

- Is your website tooling well supported by the community (i.e., Hugo with the
  Docsy theme) or commonly used by CNCF projects (our recommended tech stack?)

  **Answer:** MkDocs with the Material theme is widely used in the CNCF
  ecosystem and is well-supported by the community. It is not the
  CNCF-recommended Hugo/Docsy stack, but is a valid and popular alternative. The
  `mkdocs-awesome-nav` and `mkdocs-redirects` plugins are also well-maintained.
  The main kubevirt.io site uses Jekyll, a different stack, which adds
  complexity.

- Are you actively cultivating website maintainers from within the community?

  **Answer:** The OWNERS and OWNERS_ALIASES files in the user-guide repo define
  approvers and reviewers. The Contributing page encourages docs contributions.
  No explicit program for cultivating dedicated website maintainers is
  described.

- Are site build times reasonable?

  **Answer:** Yes. MkDocs builds are typically fast (seconds to low minutes for
  a site this size). Netlify is configured for preview builds and GitHub Pages
  for production. Build configuration is in `netlify.toml`.

- Do site maintainers have adequate permissions?

  **Answer:** The repo uses Kubernetes-style OWNERS files for managing merge
  permissions. GitHub repository access is managed through the kubevirt GitHub
  organization. This appears adequate.

**Rating: 3** — The toolchain is solid and appropriate. The two-repo split
(Jekyll + MkDocs) adds some maintenance overhead but each site is individually
well-maintained.

#### Other

- Is your website accessible via HTTPS?

  **Answer:** Yes. The site responds with HTTP/2 200 over HTTPS at
  `https://kubevirt.io/user-guide/`. ✅

- Does HTTP access, if any, redirect to HTTPS?

  **Answer:** Yes. An HTTP request to `http://kubevirt.io/user-guide/` returns
  HTTP 301 redirecting to the HTTPS URL. ✅

**Rating: 5** — Full marks; HTTPS is enforced with proper HTTP→HTTPS redirect
via GitHub Pages.

### Recommendations

#### Single-source requirement

Consider consolidating the kubevirt.io web presence into a single repo or
establishing a clearly documented strategy for the two-repo split. One practical
approach would be to serve the user guide from a `docs/` subdirectory of the
main `kubevirt.github.io` repo using a git submodule pointing to the
`user-guide` repo, or to document explicitly that the two repos are
intentionally separate with different purposes. A migration guide for
contributors explaining which repo handles which content would reduce confusion.
Alternatively, migrating the main kubevirt.io site to MkDocs Material (to match
the user guide) would unify tooling and contributor experience.

#### Minimal website requirements

Explicitly document the target stakeholder personas (cluster administrators, VM
users, KubeVirt developers) and their documentation needs. This would help the
project track coverage gaps and prioritize new documentation work. Consider also
performing a formal CNCF website guidelines review to identify any outstanding
compliance gaps before graduation.

#### Usability, accessibility and devices

Adopt a basic accessibility policy and document it (even a brief statement in
CONTRIBUTING.md is sufficient). Run a [WAVE](https://wave.webaim.org/) or
[axe](https://www.deque.com/axe/) accessibility audit on at least the homepage
and a representative doc page, and address any high-severity findings. Consider
enabling the MkDocs Material for automated a11y checks during build.

#### Branding and design

No significant action required. Branding is consistent and professional.
Consider adding the CNCF Incubating project badge to the user-guide homepage to
reinforce project maturity signaling.

#### Case studies/social proof

Consider adding a "Who uses KubeVirt?" section or page to the user guide that
links to the adopters logos on the main site, notable blog posts from end users,
and any conference talk recordings. This would help new evaluators of the
project quickly understand the production usage breadth without needing to
navigate away from the docs.

#### SEO, Analytics and site-local search

This is the highest-priority gap. The following actions are recommended:

1. **Add analytics to the user guide**: Configure a privacy-respecting analytics
   solution (e.g., [Plausible](https://plausible.io/), which is CNCF-friendly
   and privacy-focused, or GA4) in `mkdocs.yml` under the `extra.analytics` key.
   This enables 404 detection and traffic visibility.
2. **Disable indexing on preview/non-production builds**: Add a
   `X-Robots-Tag: noindex` header or include a preview-specific `robots.txt`
   disallow in Netlify configuration for branch deploys and PR previews.
3. **Document account custodians**: Create a section in the community repo (or
   the user-guide CONTRIBUTING.md) listing the named owners of the analytics
   account, Google Search Console, and any other site-related accounts.
4. **Improve robots.txt**: The current root-level `robots.txt` only has a
   sitemap reference. Verify that the sitemap URL is correct (note: it has a
   double slash `//sitemap.xml` which should be fixed) and consider adding
   explicit `Allow` directives for clarity.

#### Maintenance planning

Document a succession plan for website maintainers in the community repo — who
approves content changes, who has GitHub Pages deployment access, and how new
maintainers are onboarded. Consider consolidating the user-guide and main site
under a single `sig/documentation` ownership model (the documentation SIG
already exists in sig-list.md but has no chairs or contact listed — this should
be filled in).

#### Other

No action required for HTTPS/HTTP redirect — this is handled correctly by GitHub
Pages.

#### References and notes

##### Rating values

The numeric rating values used in this document are as follows

1. Not present
2. Needs improvement
3. Meets standards
4. Meets or exceeds standards
5. Exemplary
