---
title: KubeVirt Documentation Analysis
created: 2026-05-24
modified: 2026-07-19
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

| Criterion                                | Rating (1-5) |
| ---------------------------------------- | ------------ |
| Information architecture                 | 4            |
| New user content                         | 3            |
| Content maintainability & site mechanics | 2            |
| Content creation processes               | 3            |
| Inclusive language                       | 3            |

### Comments

The following sections contain assessments of each element of the Project
Documentation rubric.

#### Overall (Author)

The KubeVirt has a well-thought out structure that can accommodate improvements
without having to restructure sections on a wide basis.

The Welcome page has long lines in bullets could be better formatted for
readability and scanning. See the rest of overall comments by the Author in the
next section, "Comments of KubeVirt documentation sections."

The following observations are author observations on the KubeVirt documentation
(https://kubevirt.io/user-guide) by its sections as shown on the top navigation
bar.

AI comments for these sections are tasks defined in the KubeVirt-Analysis.csv
file, described later in Recommendations.

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

QuickStarts:

- The Labs, which are used in conjunction with the Quickstarts, are not shown
  until select a QuickStart. Labs should in the navigation bar.

- Creating a VM for KubeVirt would be an obvious paramount QuickStart. But there
  are currently two topics to do this. The user starts with either start with
  "KubeVirt QuickStart with Kind" or "KubeVirt QuickStart with Minikube",
  followed by "Use KubeVirt" to create the VM. Perhaps the could be one main
  topic with references to Kind and MiniKube. Such thoughts may have been
  considered before.

Cluster Administration:

- The top (first) page in the section, Installation, has guidance what would be
  helpful in getting started content.
- A majority topics are reference and also how-to's.
- The "Confidential computing" topic might be better titled as "Encrypted
  Virtualization".
- The "KubeVirt Tekton" topic might be better titled as "Tekton pipelines."

User Workloads:

- The top overview for this section should describe the concept of User
  Workloads and how it's pertinent to KubeVirt, such as to use workload
  partitioning to accommodate resources spikes.
- The "Lifecycle" topic contains useful How-to guidance on VMs with Kubectl.
- The "Basic Use" topic has useful KubeVirt intro content.
- Helpful `virtctl` summary guidance could be aggregated from `virtctl in the
  title.split computing
- The "Templates" and "Virtual Machine Templates" share the same content.

Compute:

- The topics comprise a variety of tasks that read well and have needs for
  mostly tasks such as defining terms and providing examples. Adding subsections
  to the left-side navigation bar could be helpful for discovery.

Network and Storage:

- Essentially reference content. Task-based titles could help discovery.

Release notes:

- A unusual prominent location for release notes, but clearly convenient.
  Improvements suggests could be formatting, consistency edits, and perhaps data
  aggregation.

Contributing:

- Provide an engaging page about ways to contribute. A large part of the content
  could be in a more discoverable two-column table of links and descriptions.

Virtualization Debugging:

- Specifies the page is about KubeVirt debugging, so having "Virtualization" in
  the title makes it seem like it might be subset of KubeVirt debugging.

- Overview needs examples of debugging scenarios.

#### Information architecture (AI)

The overall structure (pages/subpages/sections/subsections) of your project
documentation. We evaluate on the following:

- Is there high level conceptual/"About" content? Is the documentation feature
  complete? (i.e., each product feature is documented)

  Yes to conceptual content. The top-level `architecture.md` explains the
  service-oriented architecture and component stack, and the Welcome page
  (`index.md`) together with most section indexes provide "About"-style framing.
  Feature coverage is largely complete: the 94-page guide documents live
  migration, CPU and memory hotplug, hugepages, NUMA, host devices, storage
  import/export/snapshot/clone, network binding plugins, and ARM64. A few
  features are described only as mechanisms rather than with full task coverage.

- Are there step-by-step instructions (tasks, tutorials) documented for
  features?

  Mostly yes. Most feature pages include procedures with copy-pasteable
  `kubectl` and `virtctl` examples, and the Welcome page links to external
  hands-on labs. Presentation is inconsistent, however: only about 20 of 94
  pages use explicit numbered steps, and many procedures are presented as prose
  interspersed with command blocks (for example, `user_workloads/basic_use.md`).
  Converting multi-step procedures to numbered steps would make tasks easier to
  follow.

- Are there any key features which are documented but missing task
  documentation?

  Yes, a few. `network/network_binding_plugins.md` and
  `user_workloads/hook-sidecar.md` describe mechanisms without end-to-end worked
  examples, and `user_workloads/virtctl_client_tool.md` covers only downloading
  and installing `virtctl` rather than providing a consolidated command
  reference. Adding a complete task walkthrough for each would close these gaps.

- Is the "happy path"/most common use case documented? Does task and tutorial
  content demonstrate atomicity and isolation of concerns? (Are tasks clearly
  named according to user goals?)

  The happy path is not documented as a single flow:
  `cluster_admin/installation.md` and `user_workloads/basic_use.md` are never
  chained into an "install to first running VM" tutorial, and `quickstarts.md`
  is only a short list of external links. Atomicity is partial. Most task pages
  are goal-named, but oversized pages such as `storage/disks_and_volumes.md`
  (roughly 2,160 lines) combine many loosely related tasks and concepts. Task
  naming is inconsistent: `compute/live_migration.md` mixes verb-phrase headings
  ("Enabling the live-migration support", "Canceling a live migration") with
  noun-phrase headings ("Limitations", "Migration Status Reporting").

- If the documentation does not suffice, is there a clear escalation path for
  users needing more help? (FAQ, Troubleshooting)

  Partially. The Welcome page includes a "Getting help" section linking to file
  a bug, the mailing list, and Slack, which is a good external escalation path.
  However, there is no in-documentation FAQ or user-facing troubleshooting page;
  `debug_virt_stack/` is developer-oriented. A user troubleshooting page would
  provide first-line help before external channels.

- If the product exposes an API, is there a complete reference?

  Partially. A complete API reference exists but is hosted externally and linked
  from `index.md`. The links use `http://` and deep-link to `master`-pinned
  paths, so they are neither secure nor version-stable. Co-hosting or linking a
  versioned `https://` reference would make it durable and release-accurate.

- Is content up to date and accurate?

  Yes. `release_notes.md` is current (v1.8.0) and feature coverage reflects
  recent capabilities. Content is generally accurate; the main freshness risk is
  the externally hosted, `master`-pinned API reference, which can drift from
  released versions.

##### Comment

The KubeVirt User Guide is organized into clear, domain-oriented top-level
sections (Architecture, Quickstarts, Cluster Administration, User Workloads,
Compute, Network, Storage, Release Notes, Contributing, and Virtualization
Debugging), and navigation order is explicitly controlled through `.nav.yml`
files rather than left to alphabetization. This gives the guide a predictable
structure that maps reasonably well to the two implied personas—cluster
administrators and workload owners—and the presence of dedicated conceptual
content in `architecture.md` and an entry point in `quickstarts.md` is a solid
foundation. The overall shape of the site is sound and does not require a
ground-up rebuild.

The most significant architectural weakness is that conceptual, task, and
reference information are interleaved within sections rather than separated by
information type. The Storage section, for example, places API reference pages
(`clone_api.md`, `export_api.md`, `snapshot_restore_api.md`) alongside
task-oriented pages (`hotplug_volumes.md`, `disks_and_volumes.md`) in a single
flat list, and Compute and Cluster Administration present roughly twenty pages
each in long, largely undifferentiated lists. Readers cannot easily tell whether
a given page teaches a concept, walks through a task, or documents an API
surface. Introducing consistent sub-groupings—as User Workloads already does
with its "Monitoring" and "Workloads" clusters—would make each section easier to
scan and would bring the guide closer to the clear concept/task/reference
separation modeled by the Prometheus documentation.

Two secondary issues also affect wayfinding. First, most pages are named as
nouns or feature names ("hugepages", "live_migration", "host-devices") rather
than as goal-oriented verb phrases, which makes it harder for users to locate
content by the task they are trying to accomplish. Second, the new-user path is
thin: the Quickstarts page mainly links out to external Killercoda and
kubevirt.io resources, and installation is nested inside Cluster Administration
rather than surfaced as a clearly labeled "Getting Started" or "Installation"
entry near the top of the information architecture. The escalation path (bug
tracker, mailing list, and Slack) is present on the landing page, but there is
no consolidated FAQ or troubleshooting hub beyond the debugging section, which
sits at the very bottom of the navigation after Contributing.

To improve the architecture, group each section's pages by information type and
use case, rename task pages to lead with a verb that names the user goal,
promote installation and first-run content into a clearly labeled
getting-started entry high in the navigation, and consider relocating
Virtualization Debugging nearer the task content it supports. These are
targeted, incremental changes rather than a wholesale reorganization.

Is a restructure of the content needed? False. The top-level information
architecture is fundamentally sound; the guide needs targeted section-level
reorganization, clearer separation of information types, and improved page
naming rather than a full restructure.

#### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

- Is "getting started" clearly labeled? ("Getting started", "Installation",
  "First steps", etc.)

  Partially. There is no page or navigation entry titled "Getting Started" or
  "First steps." New-user entry points are instead spread across a top-level
  "Quickstarts" item, an "Installation" page (the first page under Cluster
  Administration), and a "Try it out" section on the homepage. "Installation" is
  clearly labeled, but the absence of a single, consistently named
  getting-started landing page makes the on-ramp harder to find than a
  conventional "Getting Started" label would.

- Is installation documented step-by-step?

  Yes. `cluster_admin/installation.md` lists prerequisites and then provides
  copy-pasteable, ordered commands to deploy the KubeVirt operator, create the
  KubeVirt CR, wait for the components to become available, and verify the
  running pods. It also covers optional steps such as software emulation
  fallback and node-placement restrictions.

- If needed, are multiple OSes documented?

  Partially. Because KubeVirt is a Kubernetes add-on, the installation guide
  documents multiple Kubernetes platforms (Kubernetes, OKD, k3OS) and both the
  x86_64 and Arm64 architectures, rather than host operating systems.
  Host-OS-specific concerns are limited to AppArmor and SELinux notes.
  Separately, guest operating systems (for example Windows and Linux) are
  documented under User Workloads. There is no per-Linux-distribution
  installation walkthrough, which is reasonable for a cluster add-on but worth
  noting.

- Do users know where to go after reading the getting started guide?

  Partially. The installation page ends with optional topics (network plugins,
  node placement) rather than an explicit "Next steps" pointer to creating a
  first virtual machine. Users must navigate on their own to "User Workloads"
  (for example `basic_use.md` or `creating_vms.md`). Adding a clear "Next steps"
  link from installation to the first-VM tasks would close this gap.

- Is your new user content clearly signposted on your site's homepage or at the
  top of your information architecture?

  Yes. The homepage lists all major sections and includes prominent "Try it
  out," "KubeVirt Labs," and "Getting help" sections, and "Quickstarts" appears
  near the top of the navigation. However, much of this new-user content relies
  on external links (Killercoda, minikube/kind/cloud quickstarts, and the
  kubevirt.io labs) rather than in-guide getting-started material, so the
  signposting leads users off-site fairly quickly.

- Is there sample code or other example content that can easily be copy-pasted?

  Yes. The documentation makes extensive use of fenced and indented code blocks
  with ready-to-run examples, including installation shell commands,
  `virtctl create vm` invocations, `kubectl` lifecycle commands, and YAML
  manifests. These are formatted for direct copy-paste.

##### Comment

The KubeVirt User Guide gives new users a solid technical starting point, but
its on-ramp is fragmented across several differently named locations. New-user
material is split between a top-level "Quickstarts" entry, an "Installation"
page buried as the first item under "Cluster Administration," and "Try it out"
and "KubeVirt Labs" sections on the homepage. Because none of these is labeled
"Getting Started" or "First Steps," newcomers must piece the path together
themselves. Consolidating these entry points under a single, clearly named
"Getting Started" section—ideally as its own top-level navigation item—would
match the convention new users expect and provide one obvious front door. The
Falco getting-started guide (https://falco.org/docs/getting-started/) is a good
model for this unified structure.

The installation documentation itself is strong: it lists prerequisites,
provides ordered and copy-pasteable operator and CR commands, shows how to
verify a healthy deployment, and covers multiple platforms (Kubernetes, OKD,
k3OS) and architectures (x86_64 and Arm64). The main weakness is that the guide
leans heavily on external links—Killercoda, the minikube/kind/cloud quickstarts,
and the kubevirt.io labs—rather than an in-guide walkthrough that carries a
reader from a fresh cluster to a running virtual machine. Bringing at least one
complete, end-to-end "deploy KubeVirt and launch your first VM" tutorial into
the guide would reduce reliance on off-site content and give users a
self-contained first success.

The most actionable single improvement is to close the gap between installation
and first use. The installation page currently ends with optional topics
(network plugins, node placement) and offers no explicit "Next steps" pointer
toward the first-VM tasks in "User Workloads" (such as `basic_use.md` and
`creating_vms.md`). Adding a clear "Next steps" call-to-action at the end of
installation, linking directly to creating and accessing a first virtual
machine, would give new users an unbroken path from setup to a working workload.

#### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens, particularly if you don’t plan for them.

We evaluate on the following:

- Is the documentation searchable?

  Yes. The `search` plugin is enabled in `mkdocs.yml` (with a custom tokenizer
  separator), and the `mkdocs-material` theme provides a built-in client-side
  search box across the site. Users can search all pages from the header search
  field.

- Are there plans for localization/internationalization with regards to site
  directory structure? Is a localization framework present?

  No. There is no localization framework configured. The `docs/` tree is
  organized by topic (for example `cluster_admin`, `compute`, `network`,
  `storage`) with no per-language subdirectories such as `en/` or `zh/`, and no
  i18n plugin (for example `mkdocs-static-i18n`) is present in `mkdocs.yml` or
  installed by the Netlify build. The theme does not set a language/locale
  switcher, and no localization plans are documented in the README or
  CONTRIBUTING files.

- Is there a clearly documented method for versioning of content?

  No. The documentation site publishes a single "latest" version built from the
  `main` branch to kubevirt.io/user-guide, and there is no content-versioning
  tooling configured. The standard MkDocs Material versioning tool (`mike`) is
  not enabled, the theme defines no version provider or version selector, and
  neither the README nor CONTRIBUTING describes a method for versioning
  documentation. The `release_notes.md` page tracks the KubeVirt product's
  release notes rather than versioned snapshots of the docs.

##### Comment

The KubeVirt User Guide is built on a maintainable foundation. It uses MkDocs
with the `mkdocs-material` theme, keeps all content as Markdown under `docs/`,
and enforces ordering explicitly through per-directory `.nav.yml` files rather
than relying on alphabetical sorting. Search is enabled out of the box via the
`search` plugin, and the contribution workflow is well documented: the README
describes forking, signing commits, and local validation through `make` targets
that check spelling (yaspeller) and links (HTMLProofer). Page moves are handled
gracefully through an extensive `redirects` map in `mkdocs.yml`, which preserves
old URLs and reduces link rot. These are strong maintainability practices.

The most significant gap is content versioning. The site publishes a single
"latest" build from the `main` branch, with no versioning tooling such as `mike`
and no version selector in the theme. Because KubeVirt's API and features evolve
across releases, readers on an older KubeVirt version have no way to view
documentation matching their deployment, and maintainers cannot preserve
historical snapshots. Adopting `mike` (the standard versioning tool for MkDocs
Material) and surfacing a version dropdown would let the project align
documentation with product releases and is the highest-impact maintainability
improvement to pursue. Kubernetes (https://kubernetes.io/docs/) is a good model
of versioned CNCF documentation.

Localization is a secondary consideration. There is currently no
internationalization framework, no per-language directory structure (for example
`en/` or `zh/`), and no documented plans for translation. While localization may
not be an immediate priority, the current flat, topic-based layout would require
restructuring to support it later. If translation is a future goal, the project
should decide early on a directory convention and evaluate an i18n plugin (such
as `mkdocs-static-i18n`) so the structure can accommodate multiple languages
without a disruptive reorganization. In the near term, documenting the intended
approach—even if implementation is deferred—would help contributors plan content
accordingly.

#### Content creation processes

Documentation is only as useful as it is accurate and well-maintained, and
requires the same kind of review and approval processes as code.

We evaluate on the following:

- Is there a clearly documented (ongoing) contribution process for
  documentation?

  Yes. `docs/contributing.md` explains the ongoing GitHub workflow (fork,
  branch, commit, open pull request, review, merge), explicitly lists the
  user-guide repository as a low-barrier target for first contributions, and
  links to community resources such as the Code of Conduct, membership policy,
  and governance. The repository README complements this with the local
  authoring workflow: where content lives (`./docs`), how to sign commits, and
  how to validate changes with `make` targets for spelling (yaspeller) and link
  checking (HTMLProofer) before opening a PR.

- Does the code release process account for documentation creation & updates?

  Not explicitly. The user guide lives in a separate repository
  (`kubevirt/user-guide`) and is published continuously from the `main` branch
  to kubevirt.io/user-guide rather than being cut alongside KubeVirt code
  releases. While a `release_notes.md` page tracks product releases, there is no
  documented mechanism in this repository that requires documentation to be
  created or updated as part of the core code release process, so docs updates
  are decoupled from the release cadence.

- Who reviews and approves documentation pull requests?

  Reviews and approvals are governed by Kubernetes-style OWNERS files enforced
  through Prow. The root `OWNERS` delegates to `reviewers` and `approvers`
  aliases defined in `OWNERS_ALIASES`. Subdirectories under `docs/` delegate to
  the relevant SIG teams—for example `docs/storage/OWNERS` routes to sig-storage
  reviewers and approvers. Documentation PRs are automatically labeled
  `kind/documentation`, and merges require an approver's `/approve` plus
  reviewer `/lgtm`.

- Does the website have a clear owner/maintainer?

  Yes. Ownership is clearly defined through the repository's `OWNERS` and
  `OWNERS_ALIASES` files, which name active reviewers and approvers (and list
  emeritus approvers for historical context). Per-section `OWNERS` files under
  `docs/` further assign responsibility to the appropriate KubeVirt SIGs, giving
  the site both overall and area-specific maintainers.

##### Comment

The KubeVirt User Guide has a clear and welcoming content creation process. The
`docs/contributing.md` page lays out the standard GitHub workflow (fork, branch,
commit, pull request, review, merge), explicitly flags the user guide as a good
target for first-time contributors, and links to essential community documents
such as the Code of Conduct, membership policy, and governance. The README
reinforces this with practical authoring guidance: where content lives, how to
sign commits, and how to validate changes locally with `make` targets that run
spelling (yaspeller) and link (HTMLProofer) checks. Together these give new and
returning contributors a well-signposted, repeatable path to landing changes.

Ownership and review are handled robustly through Kubernetes-style OWNERS files
enforced by Prow. The root `OWNERS` and `OWNERS_ALIASES` define active reviewers
and approvers, while per-section `OWNERS` files under `docs/` delegate to the
appropriate KubeVirt SIGs (for example, `docs/storage` routes to the storage
SIG). This gives the site both overall and area-specific maintainers, and
automatic `kind/documentation` labeling keeps documentation PRs easy to triage.
The one caveat worth surfacing to contributors is that this OWNERS/Prow approval
model is not described in the user guide's own contribution docs; a short note
in `contributing.md` explaining how `/lgtm` and `/approve` work, and who to
expect review from, would make the approval path more transparent to newcomers.

The most actionable gap is the relationship between the code release process and
documentation. Because the user guide is a separate repository published
continuously from `main`, documentation updates are decoupled from KubeVirt's
release cadence, and nothing in the process requires feature changes to ship
with corresponding docs. This risks documentation drift as the API and features
evolve. The project should consider documenting an expectation that user-facing
changes in `kubevirt/kubevirt` include or track a companion user-guide
update—for example, a release checklist item or a cross-repository issue link—so
that documentation creation is an accountable part of shipping features rather
than an afterthought.

#### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evaluate on the following:

- Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?

  No. A search of the documentation found no KubeVirt-defined utilities,
  endpoints, class names, or feature names that use non-recommended terms, and
  no occurrences of words such as "slave", "whitelist", "blacklist", "sanity
  check", "grandfathered", or "man-in-the-middle". The word "master" does
  appear, but only in contexts KubeVirt does not own: external URLs and Git
  branch names (for example `.../blob/master/...`), version path segments in the
  API reference (`api-reference/master/...`), a third-party CNI/bonding
  configuration field (`"master": "eth1"`), a Kubernetes node-label example
  (`kubevirt.io/nodeName: master`), and verbatim QEMU/libvirt command output
  (`masterKey0`, `master-key.aes`). None of these are customer-facing names
  coined by the project, so no renaming action is required within the guide.

- Does the project use language like "simple", "easy", etc.?

  Yes. Minimizing language is common throughout the documentation, with roughly
  80 occurrences of "simple", "simply", "easy", or "easily" across dozens of
  pages (in addition to frequent use of "just"). Many are in explanatory prose
  that judges difficulty on the reader's behalf—for example "allows easy
  creation of", "which can be simply mounted", "switching the cloud-init data
  source to ConfigDrive is as easy as", "it is easily fixed", and "updating ...
  is as simple as". A smaller number are legitimate proper nouns or identifiers
  that should not be changed, such as the passt project's "Plug A Simple Socket
  Transport", the "PCI Simple" Windows device, and example resource names like
  `simple-vm` and `simple-dv`. Replacing the subjective prose usages with
  concrete descriptions (for example, stating the number of steps) would make
  the documentation more inclusive of readers with varying experience levels.

##### Comment

The KubeVirt User Guide scores well on naming inclusivity. A review of the
documentation found no KubeVirt-defined utilities, endpoints, class names, or
feature names that use non-recommended terms from the Inclusive Naming
Initiative, and no occurrences of words such as "slave", "whitelist",
"blacklist", or "sanity check". The term "master" does appear, but exclusively
in contexts the project does not control—external URLs and Git branch names,
version path segments in the API reference, a third-party CNI bonding field
(`"master": "eth1"`), a Kubernetes node-label example, and verbatim QEMU/libvirt
command output. Because none of these are names coined by KubeVirt, no renaming
is warranted; the guide is already clean on this dimension.

The clearer opportunity is the pervasive use of minimizing language. Words like
"simple", "simply", "easy", and "easily" appear roughly 80 times across dozens
of pages, often in explanatory prose that judges difficulty on the reader's
behalf—for example "allows easy creation of", "which can be simply mounted", "as
easy as", and "is as simple as". This phrasing can unintentionally discourage
readers who find a task harder than described, and it rarely adds information.
The most actionable improvement is to replace these subjective qualifiers with
concrete, factual descriptions: state the number of steps, name the single
command involved, or simply remove the adjective. Care should be taken to
preserve legitimate proper nouns and identifiers, such as the passt project's
"Plug A Simple Socket Transport", the "PCI Simple" Windows device, and example
resource names like `simple-vm`.

To make this sustainable, the project could add the flagged minimizing terms to
its existing yaspeller-based checks or adopt a dedicated inclusive-language
linter in CI. Automating detection would keep new contributions consistent and
reduce the manual review burden, building on the strong naming foundation the
guide already demonstrates.

### Recommendations

#### Overall - Author

The AI results capture my recommendations except for the following pressing
needs I see as a novice user:

- Risks of embedded virtualization

  Guidance and frank advice about using a virtual machine on a Windows or MacOS
  to then use a virtual machine in KubeVirt. This VM within a VM is nested
  virtualization and is a key concept for getting to understand KubeVirt. Users
  who have a Linux machine don't need to worry about nested virtualization. In
  addition, VMs on Windows and MacOS are usually transitory, requiring the
  reinstall of clusters, tools, and KubeVirt. This guidance should be in the top
  overview or getting started section.

- Add a Roadmap topic

  The AI results include having a common prerequisites topic, but at a higher
  level a Roadmap topic or subsection of Getting Started should provide guidance
  for different user scenarios to decide whether to use a VM in Windows or
  invest in a Linux computer. While this isn't pertinent to develops, it will
  save a lot of time for other users to get on the right path as soon as
  possible.

- Add architectural diagrams

  Diagrams should be updated in the Architecture topic and added to Quickstarts
  and Getting Started content and ideally for each major section. Mermaid code
  is recommended and be created initially by AI.

#### Information architecture

The following recommendations for improving the information architecture of the
KubVirt User Guide:

- Group each section's pages by information type (concept, task, reference)
  rather than presenting them as long, flat, undifferentiated lists. Prioritize
  the Compute, Cluster Administration, and Storage sections, which currently
  list roughly twenty or more mixed pages each.
- Separate API reference pages from task-oriented pages within the Storage
  section, for example by clustering `clone_api.md`, `export_api.md`, and
  `snapshot_restore_api.md` under a dedicated "Reference" grouping distinct from
  task pages such as `hotplug_volumes.md` and `disks_and_volumes.md`.
- Apply consistent sub-groupings across all sections, extending the pattern
  already used in User Workloads (its "Monitoring" and "Workloads" clusters) so
  every section is easier to scan.
- Rename task pages to lead with a verb that names the user goal (for example,
  "Configuring hugepages" instead of "hugepages", or "Live migrating a VM"
  instead of "live_migration"), so users can locate content by the task they are
  trying to accomplish.
- Promote installation and first-run content out of Cluster Administration into
  a clearly labeled "Getting Started" or "Installation" entry near the top of
  the navigation.
- Strengthen the new-user path so the Quickstarts page offers first-run guidance
  directly rather than mainly linking out to external Killercoda and kubevirt.io
  resources.
- Add a consolidated FAQ or troubleshooting hub, and consider relocating the
  Virtualization Debugging section from the bottom of the navigation to sit
  nearer the task content it supports.
- Treat these as targeted, incremental section-level changes; a full, ground-up
  restructure of the top-level information architecture is not required.

#### New user content

#### Content maintainability & site mechanics

The following recommendations address the content maintainability of the
KubeVirt user guide.

- Adopt `mike`, the standard versioning tool for MkDocs Material, to publish
  documentation versions that align with KubeVirt product releases so readers
  can view docs matching their deployment.
- Add a version selector (dropdown) to the theme configuration so users can
  switch between the latest and historical documentation snapshots.
- Document the content-versioning method in the README or CONTRIBUTING files,
  including how and when new versions are cut relative to KubeVirt releases.
- Decide early on a localization directory convention (for example, per-language
  subdirectories such as `en/` or `zh/`) so the current flat, topic-based layout
  can accommodate translations without a disruptive future reorganization.
- Evaluate an internationalization plugin such as `mkdocs-static-i18n` and
  document the intended localization approach, even if implementation is
  deferred, so contributors can plan content accordingly.
- Preserve the existing maintainability strengths—client-side search, explicit
  `.nav.yml` ordering, and the `redirects` map in `mkdocs.yml`—and continue
  adding redirect entries whenever pages are moved or renamed to prevent link
  rot.

#### Content creation processes

The following recommendations address the content creation process of the
KubeVirt user guide.

- Document the OWNERS/Prow approval model directly in `contributing.md`,
  including how `/lgtm` and `/approve` work and who contributors should expect
  review from, so the approval path is transparent to newcomers.
- Establish and document an expectation that user-facing changes in
  `kubevirt/kubevirt` ship with a companion user-guide update, for example
  through a release checklist item or a cross-repository issue link, to reduce
  documentation drift.
- Add documentation creation and updates as an accountable step in the code
  release process so docs are no longer decoupled from KubeVirt's release
  cadence.
- Preserve and continue to signpost the existing strengths—the clear
  `docs/contributing.md` GitHub workflow, the README's local authoring and
  validation guidance (yaspeller and HTMLProofer `make` targets), and the
  per-section `OWNERS` delegation to KubeVirt SIGs.
- Keep the automatic `kind/documentation` labeling and per-section `OWNERS`
  files current as new topic areas are added under `docs/`, so review
  responsibility remains clearly assigned.

#### Inclusive language

The following recommendations address the inclusive language of the KubeVirt
user guide.

- Replace subjective minimizing qualifiers such as "simple", "simply", "easy",
  "easily", and "just" with concrete, factual descriptions—for example, state
  the number of steps, name the single command involved, or remove the adjective
  entirely.
- Preserve legitimate proper nouns and identifiers when revising, such as the
  passt project's "Plug A Simple Socket Transport", the "PCI Simple" Windows
  device, and example resource names like `simple-vm` and `simple-dv`.
- Add the flagged minimizing terms to the existing yaspeller-based checks, or
  adopt a dedicated inclusive-language linter or Vale style rule in CI, to
  automate detection and keep new contributions consistent.
- Leave the "master" occurrences unchanged, since they appear only in contexts
  the project does not own—external URLs and Git branch names, API reference
  version paths, a third-party CNI bonding field, a Kubernetes node-label
  example, and verbatim QEMU/libvirt command output.
- Maintain the strong naming foundation by continuing to avoid non-recommended
  terms from the Inclusive Naming Initiative in any new KubeVirt-defined
  utilities, endpoints, class names, or feature names.

## Contributor documentation

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                                 | [Rating (1-5)] |
| ----------------------------------------- | -------------- |
| Communication methods documented          | [rating (1-5)] |
| Beginner friendly issue backlog           | [rating (1-5)] |
| “New contributor” getting started content | [rating (1-5)] |
| Project governance documentation          | [rating (1-5)] |

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
- Is there a direct link to your GitHub organization/repository?
- Are weekly/monthly project meetings documented? Is it clear how someone can
  join those meetings?
- Are mailing lists documented?

#### Beginner friendly issue backlog

We evaluate on the following:

- Are docs issues well-triaged?
- Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a “good first issue” label)?
- Are issues well-documented (i.e., more than just a title)?
- Are issues maintained for staleness?

#### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

We evaluate on the following:

- Do you have a community repository or section on your website?
- Is there a document specifically for new contributors/your first contribution?
- Do new users know where to get help?

#### Project governance documentation

One of the CNCF’s core project values is open governance.

We evaluate on the following:

- Is project governance clearly documented?

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Communication methods documented

#### Beginner friendly issue backlog

#### New contributor getting started content

#### Project governance documentation

## Website and infrastructure

> AUTHOR NOTE: Pick the CNCF maturity level of the project:

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

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
- Are doc pages readable?
- Are all / most website features accessible from mobile -- such as the top-nav,
  site search and in-page table of contents?
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
- Is the brand used across the website consistently?
- Is the website’s typography clean and well-suited for reading?

#### Case studies/social proof

One of the best ways to advertise an open source project is to show other
organizations using it.

We evaluate on the following:

- Are there case studies available for the project and are they documented on
  the website?
- Are there user testimonials available?
- Is there an active project blog?
- Are there community talks for the project and are they present on the website?
- Is there a logo wall of users/participating organizations?

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
[project-website]: ?fixme-target-dne=_PROJECT-WEBSITE_
[Rating (1-5)]: #rating-values
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[website guidelines]: ../../website-guidelines-checklist.md

## Appendices

### Appendix A - Technical Debt & Content Accuracy - AI

This Technical Debt & Content Accuracy section is a proposed template change and
was generated by AI.

> These tasks described for Technical Debt & Content Accuracy are sourced
> directly from kubevirt-analysis.csv. The 266 tasks in that file are intended
> for SME triage and GitHub issue creation. The recommendations below describe
> the patterns and priorities at a level useful for project planning; individual
> task details (node IDs, file paths, specific fixes) are in the CSV.

This is the most immediately actionable area. No structural change is required —
each item is a concrete, bounded fix in a known file. Taken together, they
represent a systematic erosion of reader trust: a reader who hits a broken link,
an image that won't pull, or a typo in a field name they're about to paste into
production has reason to distrust the entire page.

#### 1. Replace unofficial and internal dev images in examples

> Priority: High — 17 occurrences across 11+ files

Multiple pages embed container image references from internal development
registries or personal/unofficial namespaces that readers cannot pull:

- `kubevirt/fedora-cloud-container-disk-demo` (user_workloads, network, storage
  pages).
- Internal registry paths (confidential_computing.md, host-devices.md, debug
  strace pages).
- Unofficial CirrOS images (run_strategies.md, dns.md, service_objects.md).
- Dev sidecar/shim images (launch-qemu-strace.md).

**Recommendation:** Establish a canonical set of public, stable container images
for documentation examples (e.g., `quay.io/kubevirt/cirros-container-disk-demo`,
official Fedora Cloud images). Run a single sweep replacing all unofficial
references in one PR, then add a CI linting rule (e.g., a grep check on
`registry.k8s.io` or known internal registry host names in Markdown code blocks)
to prevent regressions.

#### 2. Fix broken and stale links

> Priority: High — 15 occurrences across 10+ files

Broken links identified include:

- Bridge interface link in `compute/live_migration.md` (A05-B06-T01)
- Cross-link to live migration prerequisites from
  `cluster_admin/tekton_tasks.md` (A03-B14-T01)
- Stale OKD 3.9 documentation link in `compute/hugepages.md` (A05-B05-T02)
- Feature-gate links using absolute paths in `network/hotplug/interfaces.md`
  (A06-B07-T01) and `network/hotplug/nad_reference.md` (A06-B08-T02)
- Stale golang tour URL in `contributing.md` (A09-B01-T01)
- `master`-branch API reference links in `network/interfaces_and_networks.md`,
  `storage/disks_and_volumes.md`, and `debug_virt_stack/debug.md`
- Stale cross-link using old `operations/` path in `debug_virt_stack/logging.md`
  (A10-B02-T01)
- DNS resolver spec link in `network/dns.md` (A06-B01-T01)

**Recommendation:** Run `make check_links` on a CI schedule (not just on PR) and
treat link failures as blocking. For the `master`-branch API reference links,
this is the same fix as the broader API link scheme recommendation (see
Information Architecture §2) — a single pass replaces all of them.

#### 3. Remove or update deprecated API references

> Priority: High — 6 occurrences across 5 files

- `spec.running` field references throughout `architecture.md` (A01-T02) —
  deprecated in favor of `spec.runStrategy`
- `rbac.authorization.k8s.io/v1beta1` API version in
  `user_workloads/accessing_virtual_machines.md` (A04-B06-T01) — removed in
  Kubernetes 1.25
- `--admission-control` flag (replaced by `--enable-admission-plugins`) in
  `cluster_admin/api_validation.md` (A03-B05-T01)
- OKD `openshift-ansible` references in `cluster_admin/api_validation.md`
  (A03-B05-T02)
- `instancetype.kubevirt.io` API stability status note in
  `user_workloads/instancetypes.md` (A04-B15-T01) — may have been promoted to
  stable
- Missing deprecation notice on `user_workloads/presets.md` (A04-B18-T01) —
  Presets are deprecated in favor of Instancetypes

**Recommendation:** Each of these is a high-confidence fix that does not require
SME judgment — they are factually wrong or out of date. Batch into a single
"deprecated API cleanup" PR. Add the Presets deprecation admonition immediately
as it actively misleads users into using a feature that is being removed.

#### 4. Fix user-visible typos in code and API field names

> Priority: High — 6 occurrences, some in copy-pasteable code

(see CSV file)

**Recommendation:** Fix all in a single PR — these are unambiguous one-line
changes. The field name typos are especially damaging because users copy them
verbatim and then debug why their manifest doesn't work.

#### 5. Remove or archive outdated historical content

> Priority: High/Medium — 11 occurrences

Sections describing behavior specific to unsupported releases confuse readers on
current versions and signal that the docs are not maintained:

- Pre-v0.20.0 and pre-v0.34.2 version-specific notes in
  `cluster_admin/installation.md` (A03-B01-T02)
- Pre-v0.34 taint note in `cluster_admin/node_maintenance.md` (A03-B12-T03)
- Pre-v0.56 feature gate enablement note in `compute/live_migration.md`
  (A05-B06-T03)
- "Future release" language in `cluster_admin/installation.md` AppArmor section
  (A03-B01-T01) — the referenced issue may already be resolved
- "Future release" language in (A05-B14-T01)
- `--delete-local-data` flag (deprecated in kubectl 1.20, removed in 1.27) in
  `cluster_admin/node_maintenance.md` (A03-B12-T01)
- OKD Service Catalog APB section in `cluster_admin/installation.md`
  (A03-B01-T03) — the Service Catalog was removed from OKD years ago
- Outdated OKD `openshift-ansible` section in `cluster_admin/api_validation.md`
  (A03-B05-T02)

**Recommendation:** SME review required for some (e.g., whether the AppArmor
issue is resolved). Others (pre-v0.20 notes, `--delete-local-data`, OKD APB) can
be deleted without verification — they describe behavior removed in Kubernetes
or OKD versions that are no longer in the support matrix.

#### 6. Fix the JSON syntax error in the registration example

> Priority: High — 1 occurrence

(A06-B04-T01) See sheet for a JSON syntax error in the plugin registration
example. A reader following this example will get an error with no indication
the source is the doc. Fix immediately.

#### 7. Complete truncated and placeholder release notes entries

> Priority: High/Medium — 2 occurrences

- The `KubeVirtVMGuestMemoryPressure` entry in `release_notes.md` is truncated
  mid-sentence (A08-B01-T05)
- A placeholder appears in place of a real release note (A08-B01-T06)

**Recommendation:** These are the most visible credibility issues in the release
notes. Retrieve the complete text from the corresponding GitHub PR or release
tag and complete both entries.
