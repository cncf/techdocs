---
title: KubeVirt Documentation Analysis
created: 2026-05-24
modified: 2026-06-22
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

This section includes AI observations generated from Claude Sonnet 4.6 and are
indicated as AI.

#### Overall- Author

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

#### Overall- AI

The KubeVirt user guide is a comprehensive, well-organized documentation site
covering architecture, installation, cluster administration, user workloads,
compute, networking, storage, debugging, and release notes — 94 Markdown pages
in total, served via MkDocs Material at `kubevirt.io/user-guide/`.

The breadth of topics is good for an incubating project. Key gaps include the
lack of versioned documentation, no localization framework, no self-contained
getting started path, and an externally-hosted API reference that is only
loosely integrated with the user guide.

(end AI comments)

#### Information architecture

The overall structure (pages/subpages/sections/subsections) of your project
documentation. We evaluate on the following:

The answers and rating paragraphs in this section were generated by AI:

- Is there high level conceptual/"About" content? Is the documentation feature
  complete? (i.e., each product feature is documented)

  **Answer:** Yes. The `architecture.md` page provides a conceptual overview of
  KubeVirt's service-oriented architecture, its relationship to Kubernetes, and
  the roles of CRDs, controllers, and daemons. Each of the main sections
  (Cluster Administration, User Workloads, Compute, Network, Storage) begins
  with conceptual framing before presenting tasks. Feature coverage is broad:
  live migration, CPU/memory hotplug, hugepages, NUMA, host devices, storage
  import/export/snapshot/clone, network binding plugins, and ARM64 support are
  all documented. The site is substantially feature-complete for core
  functionality.

- Are there step-by-step instructions (tasks, tutorials) documented for
  features?

  **Answer:** Yes, with caveats. Most pages combine conceptual explanation with
  YAML manifests and `kubectl`/`virtctl` command sequences. However, the
  presentation style varies: some pages (e.g., `installation.md`,
  `live_migration.md`, `snapshot_restore_api.md`) follow a clear task structure,
  while others (e.g., `virtual_hardware.md`, `interfaces_and_networks.md`) read
  more like reference material with embedded examples. There are no structured
  tutorial walkthroughs within the user guide itself — tutorials are delegated
  to external Killercoda labs and kubevirt.io/labs links.

- Are there any key features which are documented but missing task
  documentation?

  **Answer:** Yes, a few gaps exist. The `network_binding_plugins.md` page
  describes the plugin architecture conceptually but does not include a complete
  worked example of implementing and deploying a custom binding plugin. The
  `hook-sidecar.md` page similarly describes the mechanism without a clear
  end-to-end task. The `instancetypes.md` and related `creating_it_pref.md`
  pages describe the instancetype model but don't walk through a complete "VM
  from scratch using instancetype and preference" scenario as a single tutorial.

- Is the "happy path"/most common use case documented? Does task and tutorial
  content demonstrate atomicity and isolation of concerns? (Are tasks clearly
  named according to user goals?)

  **Answer:** Partially. The happy path — deploying KubeVirt on a cluster and
  running a first VM — is not fully self-contained within the user guide.
  `installation.md` covers deployment, and `basic_use.md` covers starting and
  stopping VMs, but the connection between them is implicit; there is no
  explicit "From zero to your first running VM" sequence that chains these steps
  together. Task pages are generally well-named according to user goals (e.g.,
  "Accessing Virtual Machines", "Hotplug Volumes", "Live Migration"), and most
  demonstrate reasonable isolation of concerns. However, the
  `disks_and_volumes.md` page covers a very large surface area in a single
  document and could benefit from being split.

- If the documentation does not suffice, is there a clear escalation path for
  users needing more help? (FAQ, Troubleshooting)

  **Answer:** Partially. The homepage has a "Getting help" section linking to
  the bug tracker, mailing list, and Slack. There is a dedicated "Virtualization
  Debugging" section (`debug_virt_stack/`) with six pages covering log
  verbosity, virsh commands, privileged node debugging, QEMU strace, and GDB.
  However, there is no FAQ page, and no general troubleshooting page targeting
  common user-facing errors (e.g., VM stuck in Pending, network connectivity
  failures, image import failures). The debugging section is
  advanced/developer-oriented rather than user-oriented.

- If the product exposes an API, is there a complete reference?

  **Answer:** Yes, but it is hosted externally. The KubeVirt API reference is
  available at `http://kubevirt.io/api-reference/` and is linked from the user
  guide homepage and individual pages. The reference is auto-generated and
  covers all CRD types (VirtualMachine, VirtualMachineInstance,
  VirtualMachineInstanceMigration, etc.). However, the API reference is not
  integrated into the user guide site itself, links to it use `http://` rather
  than `https://`, and many in-guide deep links reference the `master` branch
  path (`/api-reference/master/definitions.html`) rather than a stable versioned
  path, which may become stale.

- Is content up to date and accurate?

  **Answer:** Largely yes. Release notes are current through v1.8.0 (March 2026)
  and many pages reference recent feature gate additions. However, several API
  reference deep-links use `master`-branch paths that may not reflect the latest
  stable release. A few older sections may not reflect current defaults (e.g.,
  AppArmor workarounds described in `installation.md` note a tracking issue as
  "future" work, which may have already been resolved upstream).

**Rating: 3** — Broad and largely accurate coverage with good conceptual
framing; held back by the lack of a self-contained "happy path" sequence, the
external (and HTTP-linked) API reference, no FAQ/user-facing troubleshooting,
and some reference-only pages that could benefit from task-structured rewrites.

#### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

The answers and rating paragraphs in this section were generated by AI:

- Is "getting started" clearly labeled? ("Getting started", "Installation",
  "First steps", etc.)

  **Answer:** Partially. The top-level navigation includes a "Quickstarts" entry
  and a "Cluster Administration" section whose first page is "Installation."
  However, the Quickstarts page (`quickstarts.md`) is essentially a curated list
  of external links (Killercoda, minikube, kind, cloud providers) and contains
  no embedded steps on that page. There is no section explicitly labeled
  "Getting Started" that guides a user from zero through a first successful VM.

- Is installation documented step-by-step?

  **Answer:** Yes. `cluster_admin/installation.md` provides clear prerequisites,
  container runtime support notes, AppArmor considerations, and installation
  steps using `kubectl apply` with the KubeVirt operator manifest. Requirements
  (Kubernetes version, `--allow-privileged`, `kubectl`) are enumerated at the
  top. The steps are sequential.

- If needed, are multiple OSes documented?

  **Answer:** Partially. The documentation assumes Linux as the host OS
  (consistent with Kubernetes deployment targets). ARM64 cluster support is
  covered in a dedicated subsection of Cluster Administration (four pages:
  device status, feature gate status, operations, and VMs on ARM64). There is no
  documentation for Windows hosts, which is appropriate since KubeVirt does not
  support Windows as a host OS. Windows _guest_ operating system support is
  documented (`user_workloads/windows_virtio_drivers.md`, `legacy_windows.md`).

- Do users know where to go after reading the getting started guide?

  **Answer:** Partially. The external quickstart guides (e.g.,
  kubevirt.io/quickstart_minikube/) link back to the user guide for further
  learning. The user guide homepage lists all sections with one-line
  descriptions, making it clear what the next steps could be. However, the
  Quickstarts page itself has no "next steps" or recommended reading path — it
  ends with the four links and no guidance on which sections of the user guide
  to read next.

- Is your new user content clearly signposted on your site's homepage or at the
  top of your information architecture?

  **Answer:** Yes. The homepage lists all guide sections with brief
  descriptions, "Try it out" links to Killercoda and quickstart labs, KubeVirt
  Labs links, a "Getting help" section, and a "Developer" section. The
  "Quickstarts" item appears in the top navigation bar as the third item after
  "Welcome" and "Architecture." New users can orient themselves quickly from the
  homepage.

- Is there sample code or other example content that can easily be copy-pasted?

  **Answer:** Yes. The user guide is rich in YAML manifests and
  `kubectl`/`virtctl` command examples throughout. Most feature pages provide at
  least one complete YAML snippet showing the relevant spec fields in context.
  Code blocks are syntax-highlighted via with anchor line numbers, and MkDocs
  Material provides a one-click copy button on code blocks. The examples are
  generally realistic and independently runnable.

**Rating: 3** — Installation is well-documented and examples can be pasted;
signposting on the homepage is adequate. Key weaknesses are the Quickstarts page
delegating entirely to external content without a self-contained path, and the
lack of a "What to read next" guide for new users.

#### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens, particularly if you don’t plan for them.

We evaluate on the following:

The answers and rating paragraphs in this section were generated by AI:

- Is your documentation searchable?

  **Answer:** Yes. The MkDocs `search` plugin is configured in `mkdocs.yml` with
  a custom separator to improve tokenization, and site-local search is
  functional and present in the header on all pages. See also the website
  analysis document's assessment of intra-site search (rated 4/5).

- Are you planning for localization/internationalization with regards to site
  directory structure? Is a localization framework present?

  **Answer:** No. The documentation is English-only with no localization
  framework in place. The directory structure does not include language-code
  subdirectories (e.g., `docs/zh-CN/`), and `mkdocs.yml` has no `i18n` or
  `locale` configuration. There is one open issue in the user-guide repo
  proposing Simplified Chinese (zh-CN) documentation, but no implementation has
  begun. MkDocs Material's `i18n` plugin (which would enable language-based
  directory structure) is not currently enabled.

- Do you have a clearly documented method for versioning your content?

  **Answer:** No. The user guide serves a single version of documentation from
  the `main` branch with no versioning mechanism. There are no versioned doc
  sets (e.g., separate /v1.7/, /v1.8/ branches or MkDocs `mike` plugin
  configuration). Release notes (`release_notes.md`) are maintained in a single
  file covering all releases, but this is distinct from versioned documentation.
  Many in-page API reference links hardcode `/api-reference/master/` as the
  path, meaning users reading docs for an older release see links to current-tip
  API behavior. This is a meaningful gap as KubeVirt has a defined support
  matrix (latest three Kubernetes releases) and users running older versions may
  have different feature availability.

**Rating: 2** — Search is well-implemented, but the absence of both a
localization framework and a doc versioning strategy represent significant gaps
for a project with multiple active release lines and a growing international
community.

#### Content creation processes

Documentation is only as useful as it is accurate and well-maintained, and
requires the same kind of review and approval processes as code.

We evaluate on the following:

The answers and rating paragraphs in this section were generated by AI:

- Is there a clearly documented (ongoing) contribution process for
  documentation?

  **Answer:** Yes. The `contributing.md` page (linked from the main navigation)
  clearly describes prerequisites (Git workflow, GitHub familiarity), repository
  entry points for docs contributions (user-guide, kubevirt.github.io, community
  repos), how to find `good-first-issue` labeled issues, and alternative
  contribution paths (PR reviews, issue filing, New Contributor session
  recording). The CONTRIBUTING.md in the repo root provides the Makefile-based
  local preview workflow (`make build_img`, `make run`, `make check_links`,
  `make check_spelling`).

- Does your code release process account for documentation creation & updates?

  **Answer:** Partially. The release notes page is kept current (v1.8.0 as of
  March 2026 is present). However, there is no documented policy or checklist
  that explicitly requires documentation updates as part of the code release
  process. There is no "docs freeze" process, no release-gating on docs
  completeness, and no explicit owner for ensuring new features released in each
  KubeVirt version are documented in the user guide before or alongside the code
  release.

- Who reviews and approves documentation pull requests?

  **Answer:** Clearly documented. The `OWNERS` file defines approvers and
  reviewers via `OWNERS_ALIASES`. The `OWNERS` file also specifies that paths
  under `docs/` are labeled `kind/documentation` and paths under `site/` are
  labeled `kind/website` automatically. The project uses Prow/Tide for automated
  label management and lifecycle enforcement.

- Does the website have a clear owner/maintainer?

  **Answer:** Partially. The `OWNERS_ALIASES` file identifies the team of
  approvers and reviewers. However, there is no single named documentation lead
  or website owner. The `sig-list.md` in the community repo lists a
  "sig/documentation" SIG but it currently has no chairs or contact persons
  listed, meaning the governance structure for documentation exists on paper but
  is not actively staffed.

**Rating: 3** — Contribution workflow and reviewer/approver ownership are well
documented. The main gaps are the absence of a documented release-gating process
for docs and the un-staffed documentation SIG.

#### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects.

We evaluate on the following:

The answers and rating paragraphs in this section were generated by AI:

- Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website?

  **Answer:** Minor issues present. The word "master" appears in multiple
  in-page API reference deep-links (e.g.,
  `http://kubevirt.io/api-reference/master/definitions.html`), which reflects
  the upstream API reference site's URL structure rather than a KubeVirt-owned
  naming choice. Within the user guide prose, one code example in
  `live_migration.md` shows `"master": "eth1"` as a network interface
  configuration key — this is a third-party (libvirt/Linux bridge) configuration
  value outside KubeVirt's direct control. No KubeVirt-specific CRD field names,
  feature gate names, CLI subcommands, or endpoint names using non-recommended
  terms (master/slave, whitelist/blacklist, sanity) were found.

- Does the project use language like "simple", "easy", etc.?

  **Answer:** Yes, occasionally. A scan of the docs found approximately 45
  occurrences of "simple" or "easy" across 42 files. Many of these are benign —
  resource names in YAML examples (`simple-vm`, `simple-dv`), architecture asset
  filenames (`architecture-simple.png`), and technical terms ("Simple frame
  buffer device"). However, some are in prose: "a simple example" (multiple
  pages in `storage/`), "easy ways to fix them"
  (`containerized_data_importer.md`), "simplest" as a descriptor for a
  workaround option (`installation.md`), and "easy guest-host communication"
  (`vsock.md`). While these are not egregious uses, they reflect an opportunity
  to adopt more neutral, descriptive language consistent with CNCF inclusive
  language guidance.

**Rating: 3** — No KubeVirt-owned CRD names, feature names, or user-visible
identifiers use non-recommended terminology. The "master" references are
inherited from external URL structures. Occasional use of "simple"/"easy" in
prose is present but not pervasive and is addressable through normal doc
editing.

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

#### Overall - AI

The KubeVirt user guide is a substantive, professionally maintained
documentation site with 94 Markdown pages covering architecture, installation,
cluster administration, user workloads, compute, networking, storage, and
debugging. The breadth of topic coverage is strong for a CNCF incubating
project. Core strengths include copyable YAML examples throughout, a clean
MkDocs Material presentation, good branding consistency, and active release
notes.

**The primary friction surface is onboarding.** New users — whether
Kubernetes-native engineers evaluating KubeVirt as an extension or traditional
VM operators migrating from VMware or OpenStack — have no clear, self-contained
path from zero to a running VM entirely within the user guide. The Quickstarts
page delegates immediately to external Killercoda labs with no embedded steps
and no "what to read next" guidance.

**A secondary friction surface is content fragmentation.** The API reference is
externally hosted and loosely integrated; the main kubevirt.io site uses Jekyll
while the user guide uses MkDocs; governance documentation lives in a separate
repo with no cross-links; and the documentation SIG is on paper but un-staffed.
These gaps compound each other and make the documentation harder to maintain and
harder for new contributors to navigate.

The underlying technology is sound, the community momentum is real, and the
VMware migration window (Broadcom pricing/licensing upheaval, 2024–2026) creates
a direct adoption opportunity. Closing these documentation gaps is the
highest-leverage action the project can take to convert evaluators into
production users.

**A third, concrete finding comes from the page-level task analysis**.
(kubevirt-analysis.csv): 266 discrete tasks were identified across 94 pages. Of
these, 66 are high-priority, 86 medium, and 114 low. The high-priority tasks
fall into five clusters — each representing a category of technical debt that
erodes reader trust independently of any structural improvement:

| Cluster                                    | High-pri tasks |
| ------------------------------------------ | -------------- |
| Unofficial/internal dev images in examples | 17             |
| Broken or stale links                      | 15             |
| Outdated or removed content                | 11             |
| Deprecated API references                  | 6              |
| User-visible typos in code                 | 6              |

These are independent of audience targeting or architecture improvements — they
are factual errors and broken examples that any reader can encounter today. They
should be addressed before or alongside any larger structural work.

#### Information architecture

##### Information Architecture Recommendations - Author

##### Information Architecture Recommendations - AI

###### Add section overview pages for every major section

> Priority: High — 6 new pages identified in kubevirt-analysis.csv

Every major section of the user guide (Cluster Administration, User Workloads,
Compute, Network, Storage, Debug) is missing an `overview.md` landing page.
Readers who navigate into a section from the top-level nav land directly on the
first content page with no orientation. The task analysis identified this gap
consistently (A03-T01, A04-T01, A05-T01, A06-T01, A07-T01, A10-T01):

- `cluster_admin/overview.md`
- `user_workloads/overview.md`
- `compute/overview.md`
- `network/overview.md`
- `storage/overview.md`
- `debug_virt_stack/overview.md`

Each overview page should: describe what the section covers, identify the target
reader (cluster admin vs. VM user), and link to the two or three most important
pages within the section. These are low-word-count pages with high impact on
navigability.

###### Add a user-facing troubleshooting page

(virsh, QEMU strace, GDB). There is no troubleshooting page for common end-user
failures. Create `user_workloads/troubleshooting.md` covering:

- VM stuck in Pending or CrashLoopBackOff
- Network connectivity failures from inside a VM
- CDI image import errors
- Live migration failures
- virtctl connection issues

This is the most common support escalation path and currently has no
documentation home.

###### Fix API reference links — scheme and versioning

> Priority: High

All in-guide links to the API reference use `http://` and hardcode the
`/api-reference/master/` path. Both are problems:

- `http://` should be `https://` (security, mixed-content warnings)
- `/master/` links point to the development branch, not the version a user is
  running; on older releases these links may describe non-existent fields

Replace with `https://kubevirt.io/api-reference/` (latest stable) or, better,
introduce a versioned link macro tied to the MkDocs release variable. Surface
the API reference link in the site navigation (currently only on the Welcome
page), not just inline in prose.

#### New user content

##### New user content Recommendations - Author

##### New user Recommendations - AI

The recommendations in this section were generated by AI.

###### Create a self-contained "Getting Started" page

> Priority: High

The current `quickstarts.md` is a curated list of four external links. It
contains no embedded steps and provides no guidance for a user without access to
Killercoda or a cloud provider. Add a page — either replacing or supplementing
the current Quickstarts — that walks through:

1. Prerequisites check (Kubernetes cluster, kubectl, virtctl)
2. Install the KubeVirt operator (`kubectl apply`)
3. Wait for operator readiness (with expected output)
4. Create a minimal VM (copy-paste manifest provided)
5. Start the VM and connect via `virtctl console`
6. Stop and delete the VM
7. "What to read next" with three recommended follow-on pages

This page should be completable without leaving the user guide site.

#### Content maintainability & site mechanics

The recommendations in this section were generated by AI.

##### Adopt doc versioning via the mike plugin

> Priority: High

KubeVirt maintains a support matrix (latest three Kubernetes releases). Users on
older KubeVirt versions currently see docs and API reference links that reflect
the development branch, not their installed version. The MkDocs `mike` plugin
(designed for MkDocs Material + GitHub Pages) enables versioned doc sets with a
version dropdown in the header. Recommended approach:

- Maintain the latest two KubeVirt major versions
- Mark older versions with a clear deprecation notice
- Replace hardcoded `/master/` API reference links with a version variable

##### Prepare the directory structure for localization

> Priority: Medium

There is an open issue proposing Simplified Chinese (zh-CN) documentation.
Currently the directory structure does not support language subdirectories,
meaning accepting that contribution would require a structural refactor. Enable
the MkDocs Material `i18n` plugin and add a documented convention for how
language variants are organized (`docs/zh-CN/`, etc.), even if only English is
populated initially. Cost is low now; cost grows with every page added.

##### Enable analytics on the user guide

> Priority: High (from website analysis)

The user guide has no analytics configured. Without analytics:

- 404 errors cannot be detected or triaged
- High-traffic pages cannot be prioritized for quality improvement
- New user drop-off points cannot be identified

Add a privacy-respecting analytics solution (Plausible is CNCF-friendly and
requires no cookie consent banner) via the `extra.analytics` key in
`mkdocs.yml`. Ensure preview/branch builds have indexing disabled
(`X-Robots-Tag: noindex` via Netlify headers) to avoid polluting production
analytics and search indexes.

##### Document account custodians

> Priority: Medium (from website analysis)

There is no documentation of who owns the analytics account, Google Search
Console, or site-search configuration for the user guide. Add a named section to
CONTRIBUTING.md or the community repo listing the current custodians. This is a
low-effort change that prevents account access loss during maintainer
transitions.

##### Fix the sitemap URL double-slash

> Priority: Low

The root `robots.txt` references the sitemap with a double slash
(`//sitemap.xml`). Correct to `https://kubevirt.io/user-guide/sitemap.xml`.

#### Content creation processes

The recommendations in this section were generated by AI.

1. Document a release-docs checklist

> Priority: High

There is no documented policy requiring documentation updates as part of the
code release process. Features are regularly released without corresponding user
guide updates, and there is no doc-freeze process or release sign-off gate. Add
to `CONTRIBUTING.md` (or a new `docs/release-process.md`):

- Which types of code changes require a user guide PR before merge
- Who is responsible for user guide completeness per release (SIG/documentation
  or the feature author)
- How the sig/documentation SIG is involved in release sign-off
- What the escalation path is for undocumented features discovered post-release

##### Staff the documentation SIG

> Priority: High

The `sig-list.md` in the community repo lists `sig/documentation` with no
chairs, no contact persons, and no meeting schedule. This means documentation
has no governance home, no release accountability, and no single point of
contact for the CNCF documentation review process. Nominate at least one SIG
chair and add them to the sig-list entry. Even a part-time commitment from an
existing committer is significantly better than the current vacuum.

#### Inclusive language

The recommendations in this section were generated by AI.

#### Additional Recommendations

The recommendations in this section were generated by AI.

##### API developer experience

The API developer experience deserves dedicated investment. The current user
guide is written primarily for operators ("how do I configure live migration?"),
not for developers ("what fields govern a migration policy and what are their
invariants?"). Specific actions:

- Add the `kubevirt-api-developer-guide.md` content (or equivalent) as a formal
  section of the user guide, covering the Kubernetes → KubeVirt concept mapping
  table, `kubectl explain` patterns, client library usage, and
  controller/operator development guidance.
- Treat the API reference as a product: ensure every CRD field has a prose
  description in the OpenAPI spec (auto-populated from Go source comments),
  versioned per release, linked bidirectionally from the user guide.
- Add a tracked issue for populating missing field descriptions in
  `staging/src/kubevirt.io/api/core/v1/types.go` — developers currently read Go
  source code to understand field intent.

##### Website consolidation

From the website analysis: the kubevirt.io web presence is split between
`kubevirt/kubevirt.github.io` (Jekyll, main site) and `kubevirt/user-guide`
(MkDocs, docs). These require separate contribution workflows and tooling. While
full consolidation may be a large undertaking, a near-term improvement would be
to document the two-repo split explicitly for contributors (which repo handles
which content and why), and to ensure the main site's "Documentation" navigation
link always points to the current stable user guide.

##### Governance link visibility

From the contributor docs review: `GOVERNANCE.md` exists in `kubevirt/community`
but is not linked from the `kubevirt/kubevirt` README or the user-guide
Contributing page. Add a direct link to governance documentation from both entry
points. Also note the maintainer concentration (majority from a single employer)
and document the project's approach to broadening representation — this is a
common CNCF due-diligence concern for graduation review.

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

The answers and rating paragraphs in this section were generated by AI:

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

**Answer:** Yes. KubeVirt's governance documentation is comprehensive and
well-structured in the `kubevirt/community` repository — covering maintainer
roles, SIG/WG charters, a contributor ladder, voting rules, and active
maintainer/emeritus lists. The primary gap is discoverability: the main
`kubevirt/kubevirt` repository does not link to `GOVERNANCE.md` directly.

### Recommendations

- Add a visible "Community" section to the `kubevirt/kubevirt` README (or expand
  the existing one) that lists Slack channels with direct join links, the
  mailing list address, and a link to the weekly meeting schedule — mirroring
  the detail already in `kubevirt/community/README.md`.
- Fix or replace the `kubevirt.io/community/` page so it renders usable content:
  Slack links, meeting schedule, mailing list, and SIG overview.
- Promote the `#virtualization` and `#kubevirt-dev` Slack channel links more
  prominently on the user-guide Contributing page (currently only mentioned in
  passing with no direct join URL).

#### Communication methods documented

KubeVirt documents its communication channels thoroughly in the community repo
and CONTRIBUTING.md, but discoverability from the main website and the
`kubevirt/kubevirt` README could be improved. The `kubevirt.io/community/` page
did not render meaningful content during evaluation, which is a missed
opportunity for new visitors.

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

### Appendix B - Medium and low recommendations - AI

#### Information Architecture

##### Refactor large reference pages into focused task pages

> Priority: Medium

`disks_and_volumes.md` is the largest single page in the guide and attempts to
cover conceptual explanation, reference tables, and task instructions in one
document. Split it into:

- `disks_and_volumes/concepts.md` — what volumes and disks are, how they relate
  to PVCs
- `disks_and_volumes/reference.md` — field catalog and type descriptions
- `disks_and_volumes/tasks/` — individual how-tos (attach a DataVolume, hotplug
  a disk, etc.)

Similarly, `network_binding_plugins.md` and `hook-sidecar.md` describe
architecture well but provide no end-to-end worked examples. Add at minimum one
complete task per page that a reader can follow from start to finish.

##### Add a "Coming from VMware" onboarding path

> Priority: Medium (High if targeting the 2024–2026 VMware migration window)

Organizations migrating from VMware bring traditional virtualization
expectations and limited Kubernetes fluency. There is no documentation bridge.
Create a short guide that maps:

| VMware concept    | KubeVirt equivalent                     | Notes/gaps |
| ----------------- | --------------------------------------- | ---------- |
| vCenter / vSphere | Kubernetes API server + KubeVirt        |            |
| VM template       | VirtualMachineInstancetype + Preference |            |
| vMotion           | Live migration                          |            |
| Datastore         | PVC / DataVolume (CDI)                  |            |
| vDS / portgroup   | Multus / secondary networks             |            |
| Snapshots         | VM snapshot API                         |            |

Be honest about gaps (DRS-style scheduling, mature backup tooling, deep Windows
integration) — building trust with evaluators is more valuable than obscuring
shortcomings they will discover in production.

##### Create an end-to-end instancetype/preference tutorial

> Priority: Medium

`instancetypes.md` and `creating_it_pref.md` describe the instancetype model but
do not walk through a complete "VM from scratch using instancetype and
preference" scenario. Add a single tutorial page that goes from defining an
instancetype and preference through creating a VM and verifying resource
allocation. This scenario represents the KubeVirt-recommended path for VM
resource management and deserves a dedicated page.

#### New User Content

##### Expand the Basic Use page into a meaningful getting-started flow

> Priority: Medium (A04-B02-T01 in kubevirt-analysis.csv)

`user_workloads/basic_use.md` is currently a thin page that covers VM start/stop
commands but does not walk through a meaningful first-use scenario. It is the
logical destination after Installation but does not build on it. Expand to
include:

- The VM/VMI distinction (A04-B01-T01 — many readers do not understand that a
  `VirtualMachine` manages lifecycle while a `VirtualMachineInstance` is the
  running unit)
- Start, stop, restart, and migrate commands in a single reference table
  (A04-B01-T03)
- How to verify the VM is running (status fields, events)
- A "What to read next" pointer to Networking and Storage pages

This is distinct from the "Getting Started" self-contained quickstart (§1 above)
— the Basic Use page is the permanent reference for the most common operations,
while the quickstart is the narrative onboarding experience.

##### Add a common prerequisites section to Quickstarts

> Priority: Medium (A02-T04 in kubevirt-analysis.csv)

The Quickstarts page links to four separate external environments but does not
list shared prerequisites. A reader needs kubectl, virtctl, and cluster access
for all of them. Add a brief prerequisites block at the top of `quickstarts.md`:

- `kubectl` configured against a cluster
- `virtctl` plugin installed (link to virtctl_client_tool.md)
- Minimum cluster resources (RAM, CPUs)
- KubeVirt operator installed (link to installation.md)

Also ensure the `virtctl_client_tool.md` page covers macOS and Windows install
instructions (A04-B05-T01, currently high-priority missing content) so the
prerequisites link is useful for all readers.

##### Add "What to read next" sections

> Priority: Medium

The Quickstarts page and the Installation page both end without directing users
to their next logical step. Add a brief "Next steps" section to each:

- After Quickstarts: point to User Workloads → Basic Use, and Storage → CDI
- After Installation: point to Quickstarts, then Feature Gates and Authorization

##### Add an audience orientation statement to the homepage

> Priority: Medium

From the high-level review (kubevirt-reviews.md): the guide currently tries to
serve Kubernetes-native engineers and traditional VM operators simultaneously
without acknowledging either. Add a brief orientation paragraph near the top of
`index.md` that identifies who the guide is for and what prerequisite knowledge
is assumed (Kubernetes familiarity, cluster access). This sets expectations
correctly and reduces early drop-off from users who feel lost.

#### Content creation process

##### Curate an active good-first-issue backlog

> Priority: Medium (from contributor docs review)

The `good-first-issue` label infrastructure exists but the user-guide repo has
no open good-first issues at the time of review. New contributors who follow the
contributing guide reach a dead end. Maintain a rolling set of 3–5 small,
well-scoped documentation tasks:

- Missing feature documentation stubs
- Broken or stale links
- Pages needing a "What to read next" section
- Prose uses of "simple"/"easy" that can be replaced

Activate the `help-wanted` label and use it consistently as a triage step for
incoming issues.

##### Consolidate new contributor onboarding

> Priority: Medium (from contributor docs review)

New contributor guidance is spread across at least four locations:
`kubevirt/kubevirt` CONTRIBUTING.md, `docs/getting-started.md`, the user-guide
Contributing page, and the community repo. Create a single "New Contributor
Guide" landing page that aggregates the full end-to-end path, and add a "Quick
Start (docs only)" path at the top for contributors who only want to fix
documentation — the current guide leads immediately into
Bazel/Docker/nested-virtualization setup that is unnecessary for documentation
contributions.

##### Establish a release notes template

> Priority: Medium (A08-T01 in kubevirt-analysis.csv)

The `release_notes.md` file has inconsistent formatting across releases, two
incomplete entries (a truncated note, a placeholder — see Technical Debt §7),
and no documented template for contributors. Create a release notes template
(either a comment block at the top of `release_notes.md` or a separate
`docs/release-notes-template.md`) that specifies:

- Required sections per release (breaking changes, new features, deprecations,
  bug fixes, known issues)
- How to link to the corresponding GitHub milestone
- The Kubernetes support matrix line format (several releases are missing this)
- Who is responsible for completing the notes before release tag

This pairs with the release-docs checklist recommendation (#1 above).

#### Inclusive Language

##### Replace prose uses of "simple" and "easy"

> Priority: Low

Approximately 45 occurrences of "simple" or "easy" exist across 42 files. Most
are in code example resource names (acceptable) but some are in prose that can
be improved:

| Current                 | Suggested replacement                        |
| ----------------------- | -------------------------------------------- |
| "a simple example"      | "the following example", "a minimal example" |
| "easy ways to fix them" | "common ways to resolve them"                |
| "simplest"              | "the most direct" / "the least-invasive"     |

This is a low-effort improvement that aligns with CNCF inclusive language
guidance from the [Inclusive Naming Initiative](https://inclusivenaming.org).

##### Track the "master" API reference URL path

> Priority: Low

All deep-links to the API reference use
`/api-reference/master/definitions.html`. This is the upstream API reference
site's URL structure, not a KubeVirt-owned naming choice — but it does embed a
non-recommended term in user-visible URLs. Open an issue (or add a link-checker
CI note) to flag when the upstream adopts a non-master stable URL, at which
point all deep-links can be updated in a single pass.
