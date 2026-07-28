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

#### Information architecture

The overall structure (pages/subpages/sections/subsections) of your project
documentation. We evaluate on the following:

- Is there high level conceptual/"About" content? Is the documentation feature
  complete? (i.e., each product feature is documented)

  Yes. The guide provides high-level conceptual content. The [Architecture](docs/architecture.md) page gives a technical and conceptual overview of the KubeVirt   components, the service-oriented design, and the layered virtualization stack, and the Welcome page introduces each major section of the guide.

  The documentation is broadly feature complete. Major product areas each have dedicated sections: cluster administration, user workloads, compute, network, and storage. Individual features such as live migration, CPU and memory hotplug, hugepages, NUMA, instance types and preferences, snapshots, volume export, and network binding plugins each have their own pages. Coverage is wide enough that most shipped features have at least a conceptual description.

- Are there step-by-step instructions (tasks, tutorials) documented for
  features?

  Yes. Most feature pages include step-by-step instructions with copy-paste capable shell and YAML examples. For example, the [live migration](docs/compute/live_migration.md) page walks through enabling the feature, initiating and canceling a migration, and configuring a dedicated migration network, and the [creating VirtualMachines](docs/user_workloads/creating_vms.md) page shows how to build manifests with `virtctl`.

  For tutorials, the guide links out to external interactive labs and quickstarts (Killercoda, minikube, kind, and cloud providers) from both the Welcome and Quickstarts pages rather than hosting long-form tutorials inline. This keeps hands-on learning paths available, though they live outside the user guide itself.

- Are there any key features which are documented but missing task
  documentation?

  Some pages lean conceptual or reference-oriented and would benefit from added task steps, but there are no major features that are described without any actionable guidance. A few areas mix concept and procedure heavily (for example, migration strategies and some networking topics), where a reader must extract the steps from surrounding explanation.

  The most common gap is depth rather than absence: certain advanced features document the "what" and configuration fields well but provide fewer end-to-end, goal-oriented walkthroughs. Reviewers should confirm that newer features listed in recent release notes each have a corresponding task page.

- Is the "happy path"/most common use case documented? Does task and tutorial
  content demonstrate atomicity and isolation of concerns? (Are tasks clearly
  named according to user goals?)

  Yes. The happy path is documented. A new user can follow installation, then create and access a virtual machine, which covers the most common use case. The quickstarts and labs reinforce this path for first-time users.

  Task content generally demonstrates atomicity and isolation of concerns, and headings are largely named according to user goals using verb or gerund phrases, such as "Creating VirtualMachines on a cluster", "Enabling the live-migration support", "Initiate live migration", and "Configuring a migration network on a cluster". This makes individual tasks easy to scan and follow. A minority of headings are noun-based topic labels rather than goal phrases, so naming is strong but not fully consistent.

- If the documentation does not suffice, is there a clear escalation path for
  users needing more help? (FAQ, Troubleshooting)

  Yes. The Welcome page provides a "Getting help" section that links to filing bugs on GitHub, the kubevirt-dev mailing list, and the community Slack channel, giving users a clear escalation path.

  There is also a dedicated Virtualization Debugging section covering log verbosity, privileged node debugging, virsh commands, and running QEMU under strace or gdb, and several feature pages include debugging notes. However, there is no single, consolidated FAQ or troubleshooting landing page, so common problems and their fixes are spread across individual pages rather than centralized.

- If the product exposes an API, is there a complete reference?

  Yes. KubeVirt exposes a Kubernetes-style API, and the Welcome page links to the generated API reference at kubevirt.io/api-reference, which provides a complete, versioned reference for the custom resources and fields.

  Because the reference is generated from source and hosted separately from the user guide, it stays current with releases but is one click removed from the task content. Cross-linking specific fields from task pages to the reference would tighten the connection between instructions and reference material.

- Is content up to date and accurate?

  Yes. The content is current. The release notes document releases through v1.8.0 (released March 2026, built for Kubernetes v1.35), and feature pages reference current resources, feature gates, and `virtctl` subcommands consistent with recent releases.

  Accuracy appears high overall, with concrete command output and manifests shown inline. As with any fast-moving project, reviewers should periodically verify that examples and feature-gate names match the latest release, since some pages describe features that graduate through alpha, beta, and GA over time.

- Restructure needed?

  False. A restructure of the content is not needed. The information architecture is sound: content is organized into clear conceptual, task, and reference layers, navigation order is deliberately controlled per section, and features are grouped logically by domain (cluster administration, user workloads, compute, network, storage). Improvements should focus on incremental additions — a consolidated troubleshooting/FAQ entry point, tighter cross-linking to the API reference, and more consistent goal-oriented headings — rather than reorganizing the existing structure.

##### Comment

The KubeVirt user guide has a solid information architecture. Content is organized into clear domains — cluster administration, user workloads, compute, network, and storage — and each section uses an explicit navigation order rather than alphabetical sorting, so related tasks sit together in a logical reading sequence. The guide also layers the three information types well: conceptual material (the Architecture page and per-section overviews), task material (step-by-step pages with copy-paste capable shell and YAML examples), and reference material (release notes and the generated API reference). Most task headings are named after user goals using verb or gerund phrases, such as "Creating VirtualMachines on a cluster" and "Enabling the live-migration support," which makes pages easy to scan.

The most valuable improvement would be a single, consolidated troubleshooting and FAQ entry point. Today, help is available through the "Getting help" links and a capable Virtualization Debugging section, but common problems and their fixes are scattered across individual feature pages. A dedicated troubleshooting landing page — organized by symptom and linking out to the relevant debugging topics — would give users a predictable escalation path when a task page alone does not resolve their issue. The Prometheus documentation (https://prometheus.io/docs) is a good model here: it keeps concepts, tasks, and reference clearly separated while still offering obvious paths to deeper help.

Two smaller refinements would tighten the architecture further. First, tutorials currently live outside the guide as external labs and quickstarts; surfacing an explicit, in-guide learning path (or at least a clearly labeled "Tutorials" grouping that frames those external resources) would help new users find hands-on content without leaving the site. Second, the API reference is complete but hosted separately and only reachable from the Welcome page — cross-linking specific custom resources and fields from the task pages that use them would connect instructions to reference material more directly. Normalizing the minority of noun-based headings into goal-oriented verb phrases would also improve scanning and consistency.

Restructure needed: False. The existing structure is sound and does not require reorganization. The recommended changes are incremental additions — a troubleshooting/FAQ hub, clearer tutorial signposting, tighter cross-linking to the API reference, and more consistent heading phrasing — that build on the current architecture rather than replace it.

Rating: 4 - Meets or exceeds standards

#### New user content

New users are the most avid users of documentation, and need content
specifically for them. We evaluate on the following:

- Is "getting started" clearly labeled? ("Getting started", "Installation", "First steps", etc.)

    Partially. There is no page or navigation entry titled "Getting Started" or "First steps." New-user entry points are instead spread across a top-level "Quickstarts" item, an "Installation" page (the first page under Cluster Administration), and a "Try it out" section on the homepage. "Installation" is clearly labeled, but the absence of a single, consistently named getting-started landing page makes the on-ramp harder to find than a conventional "Getting Started" label would.

- Is installation documented step-by-step?

    Yes. `cluster_admin/installation.md` lists prerequisites and then provides copy-pasteable, ordered commands to deploy the KubeVirt operator, create the KubeVirt CR, wait for the components to become available, and verify the running pods. It also covers optional steps such as software emulation fallback and node-placement restrictions.

- If needed, are multiple OSes documented?

    Partially. Because KubeVirt is a Kubernetes add-on, the installation guide documents multiple Kubernetes platforms (Kubernetes, OKD, k3OS) and both the x86_64 and Arm64 architectures, rather than host operating systems. Host-OS-specific concerns are limited to AppArmor and SELinux notes. Separately, guest operating systems (for example Windows and Linux) are documented under User Workloads. There is no per-Linux-distribution installation walkthrough, which is reasonable for a cluster add-on but worth noting.

- Do users know where to go after reading the getting started guide?

    Partially. The installation page ends with optional topics (network plugins, node placement) rather than an explicit "Next steps" pointer to creating a first virtual machine. Users must navigate on their own to "User Workloads" (for example `basic_use.md` or `creating_vms.md`). Adding a clear "Next steps" link from installation to the first-VM tasks would close this gap.

- Is your new user content clearly signposted on your site's homepage or at the top of your information architecture?

    Yes. The homepage lists all major sections and includes prominent "Try it out," "KubeVirt Labs," and "Getting help" sections, and "Quickstarts" appears near the top of the navigation. However, much of this new-user content relies on external links (Killercoda, minikube/kind/cloud quickstarts, and the kubevirt.io labs) rather than in-guide getting-started material, so the signposting leads users off-site fairly quickly.

- Is there sample code or other example content that can easily be copy-pasted?

    Yes. The documentation makes extensive use of fenced and indented code blocks with ready-to-run examples, including installation shell commands, `virtctl create vm` invocations, `kubectl` lifecycle commands, and YAML manifests. These are formatted for direct copy-paste.

##### Comment

The KubeVirt user guide gives new users a solid technical starting point, but its on-ramp is fragmented across several differently named locations. New-user material is split between a top-level "Quickstarts" entry, an "Installation" page buried as the first item under "Cluster Administration," and "Try it out" and "KubeVirt Labs" sections on the homepage. Because none of these is labeled "Getting Started" or "First Steps," newcomers must piece the path together themselves. Consolidating these entry points under a single, clearly named "Getting Started" section—ideally as its own top-level navigation item—would match the convention new users expect and provide one obvious front door. The Falco getting-started guide (https://falco.org/docs/getting-started/) is a good model for this unified structure.

The installation documentation itself is strong: it lists prerequisites, provides ordered and copy-pasteable operator and CR commands, shows how to verify a healthy deployment, and covers multiple platforms (Kubernetes, OKD, k3OS) and architectures (x86_64 and Arm64). The main weakness is that the guide leans heavily on external links—Killercoda, the minikube/kind/cloud quickstarts, and the kubevirt.io labs—rather than an in-guide walkthrough that carries a reader from a fresh cluster to a running virtual machine. Bringing at least one complete, end-to-end "deploy KubeVirt and launch your first VM" tutorial into the guide would reduce reliance on off-site content and give users a self-contained first success.

The most actionable single improvement is to close the gap between installation and first use. The installation page currently ends with optional topics (network plugins, node placement) and offers no explicit "Next steps" pointer toward the first-VM tasks in "User Workloads" (such as `basic_use.md` and `creating_vms.md`). Adding a clear "Next steps" call-to-action at the end of installation, linking directly to creating and accessing a first virtual machine, would give new users an unbroken path from setup to a working workload.

Rating: 3 - Meets standards

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
that check spelling and links (HTMLProofer). Page moves are handled gracefully
through an extensive `redirects` map in `mkdocs.yml`, which preserves old URLs
and reduces link rot. These are strong maintainability practices.

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

Rating: 3 - Meets standards

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
  how to validate changes with `make` targets for spelling and link checking
  (HTMLProofer) before opening a PR.

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
spelling and link (HTMLProofer) checks. Together these give new and returning
contributors a well-signposted, repeatable path to landing changes.

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

Rating: 4 - Meets or exceeds standards

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
its existing spelling check checks or adopt a dedicated inclusive-language
linter in CI. Automating detection would keep new contributions consistent and
reduce the manual review burden, building on the strong naming foundation the
guide already demonstrates.

Rating: 3 - Meets standards

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

- Add a single, consolidated troubleshooting and FAQ entry point, organized by symptom, that links out to the relevant pages in the Virtualization Debugging section and to the scattered debugging notes on individual feature pages. This gives users a predictable escalation path when a task page alone does not resolve their issue.
- Preserve the current overall structure rather than reorganizing it. The domain-based sections (cluster administration, user workloads, compute, network, storage) and explicit per-section navigation order are sound; focus effort on incremental additions instead of a restructure.
- Surface an explicit, in-guide learning path for new users. Add a clearly labeled "Tutorials" grouping that frames the existing external labs and quickstarts (Killercoda, minikube, kind, cloud providers) so hands-on content is discoverable without leaving the guide.
- Cross-link the API reference from the task pages that use each resource. Link specific custom resources and fields (for example, from live migration, instance types, and storage pages) to their entries at kubevirt.io/api-reference so instructions connect directly to reference material.
- Normalize the minority of noun-based topic headings into goal-oriented verb or gerund phrases, matching the existing style of headings such as "Creating VirtualMachines on a cluster" and "Enabling the live-migration support." This improves scanning and consistency across pages.
- Audit task coverage depth against recent release notes. Confirm that each newer feature (for example, those introduced through v1.8.0) has a corresponding end-to-end, goal-oriented task page, not just a conceptual or configuration-field description.
- Separate concept from procedure on pages that currently interleave them, such as the migration strategies and some networking topics, so readers can extract the steps without reading through surrounding explanation.
- Periodically verify that inline examples, command output, and feature-gate names match the latest release, since features graduate through alpha, beta, and GA over time and can drift from the documented behavior.

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
  validation guidance (spell check and HTMLProofer `make` targets), and the
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
- Add the flagged minimizing terms to the existing spell check checks, or adopt
  a dedicated inclusive-language linter or Vale style rule in CI, to automate
  detection and keep new contributions consistent.
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

- Is there a Slack/Discord/Discourse/etc. community and is it prominently linked from your website?

    Yes. The user guide's home page links directly to the KubeVirt Slack channel (`https://kubernetes.slack.com/messages/virtualization`) in its "Getting help" section, and the Contributing page invites readers to "participate on Slack" through the KubeVirt community page. The broader project website (`https://kubevirt.io/community/`) also surfaces the Slack workspace and channels alongside a forum. Within the user guide, the Slack link is reasonably visible on the landing page, but it appears only in a short "Getting help" list rather than in the persistent site navigation, so its prominence is limited.

- Is there a direct link to your GitHub organization/repository?

    Yes. The Contributing page links to the KubeVirt GitHub organization (`https://github.com/kubevirt`) and to individual repositories such as `user-guide`, `kubevirt`, `containerized-data-importer`, and `community`. The home page's "Getting help" section links directly to the issue tracker (`https://github.com/kubevirt/kubevirt/issues`). Direct GitHub links appear consistently throughout the guide.

- Are weekly/monthly project meetings documented? Is it clear how someone can join those meetings?

    Not within the user guide itself. The guide does not state the cadence of community meetings or provide direct joining instructions; instead, the Contributing page defers to the community page to "learn about local meetups and events." The linked community page (`https://kubevirt.io/community/`) does document recurring community meetings and embeds a public Google Calendar (`kubevirt@cncf.io`) that readers can use to join. However, someone reading only the user guide would not find meeting times, cadence, or a join link without following that external link.

- Are mailing lists documented?

    Yes. The home page's "Getting help" section links to the kubevirt-dev mailing list (`https://groups.google.com/forum/#!forum/kubevirt-dev`), which is also reachable from the community page. The mailing list is documented, though it is presented as a bare link without describing its purpose or how it differs from Slack or the forum.

##### Comment

The KubeVirt user guide provides a solid foundation of communication links for both users and contributors. The home page's "Getting help" section and the Contributing page together surface the Slack channel, the kubevirt-dev mailing list, the GitHub organization and its key repositories, and a pointer to the wider community page. As a result, readers have clear starting points to reach the project and its maintainers.

The most significant gap is project meetings. The user guide does not document meeting cadence, times, or how to join; it only links to the community page for "meetups and events." Because those details live entirely on the external community page, a reader who stays within the user guide cannot learn when community meetings happen or how to attend. Adding a short "Community meetings" subsection that names the cadence and includes the public calendar link would close this gap and keep the information where contributors are already reading.

Discoverability of the channels that are present could also be stronger. The Slack, mailing list, and issue links appear only in a brief list near the bottom of the landing page, and the Contributing page's community links are spread across several sections. Consolidating these into a single, clearly labeled "Community and communication" section—covering Slack, the forum, the mailing list, meetings, and social accounts—would make them easier to find. Giving each channel a one-line description of its purpose would also help newcomers choose where to ask a question versus where to follow announcements.

Overall, the essential channels are documented and correctly linked, but meetings are absent from the guide itself and the presentation is uneven. Small, well-placed additions would move this area from adequate to strong.

Rating: 3 - Meets standards

#### Beginner friendly issue backlog

We evaluate on the following:

- Are docs issues well-triaged?

  Documentation issues are only partially triaged. At the time of review the user-guide repository had four open issues, and three of them carried no labels at all; only one was categorized (with `kind/enhancement`). The repository does provide a complete triage label taxonomy (`kind/*`, `triage/accepted`, `triage/needs-information`, `sig/documentation`, and others), and closed issues show that labels such as `kind/bug` and `kind/enhancement` were applied over time. However, `triage/accepted` is rarely used, and the currently open backlog is largely uncategorized, so triage is inconsistent in practice.

- Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a “good first issue” label)?

  Yes, a mechanism exists and is documented, but it is currently underused. The user-guide repository has a `good-first-issue` label that has been applied to 24 issues historically, and the contributing page explicitly tells newcomers to "look for any labeled 'good-first-issue', which are triaged to help new contributors." Two caveats reduce its effectiveness. First, there are currently zero open `good-first-issue` items in both the user-guide and the core kubevirt/kubevirt repositories, so a new contributor arriving today finds an empty beginner backlog. Second, the repository has two near-duplicate labels — the hyphenated `good-first-issue` that the team actually uses and the standard spaced `good first issue` that is unused — which is inconsistent and prevents GitHub's native "Contribute" tab from surfacing these issues.

- Are issues well-documented (i.e., more than just a title)?

  Yes. Issues generally contain substantive descriptions rather than bare titles. Bug reports follow a template with **Description**, **What you expected**, and **URL** sections, and enhancement requests use the feature-request template. The open issues ranged from roughly 400 to nearly 1,900 characters of body text; for example, the Simplified Chinese documentation proposal includes detailed context about the contributing team and scope. This indicates issues are typically actionable and provide enough information to begin work.

- Are issues maintained for staleness?

  Yes, staleness is actively — and aggressively — managed by the shared KubeVirt Prow automation. Issues progress through `lifecycle/stale` and `lifecycle/rotten` and are then auto-closed, with `lifecycle/frozen` available to exempt long-lived items. Many closed user-guide issues carry the `lifecycle/rotten` label, and the core kubevirt/kubevirt repository currently shows roughly 31 stale, 32 rotten, and 30 frozen open issues. The main risk is that valid but unattended issues (including enhancements) are closed purely for inactivity rather than being triaged or preserved, so the backlog stays small partly through automated closure.

##### Comment

The KubeVirt user guide has the building blocks of a healthy beginner-friendly issue backlog, but the pieces are not consistently applied. A dedicated `good-first-issue` label exists and has been used on two dozen issues over time, and the contributing page clearly tells newcomers to look for it. Issues are generally well written: bug reports and feature requests follow templates with description, expectation, and URL fields, so most issues give a contributor enough context to start work rather than just a title. Staleness is handled automatically through the shared Prow lifecycle bot, which moves inactive issues through `lifecycle/stale` and `lifecycle/rotten` before closing them.

The main gap is that the beginner backlog is effectively empty and the currently open issues are under-triaged. At the time of review there were no open `good-first-issue` items in either the user-guide or the core repository, so a new contributor who follows the documentation's advice finds nothing to pick up. Of the small number of open documentation issues, most carried no labels at all — no `kind/*`, no `sig/documentation`, and no `triage/accepted` — which means the backlog is not being actively categorized even though the label taxonomy is available.

A specific, fixable inconsistency is the presence of two near-duplicate labels: the hyphenated `good-first-issue` that the team actually applies and the standard spaced `good first issue` that sits unused. GitHub's native "Contribute" experience and the good-first-issues discovery tooling key off the standard spaced label, so the project's real beginner issues are invisible to those channels. Consolidating on the standard label (or aliasing consistently) would immediately widen discovery.

Finally, the aggressive auto-close behavior deserves attention. Because inactive issues — including valid enhancements — are closed as `lifecycle/rotten` rather than triaged or frozen, the backlog stays small in part by discarding work rather than curating it. A light triage pass that accepts, labels, and where appropriate freezes beginner-suitable issues would turn the existing automation and labels into a genuinely inviting on-ramp for new contributors.

Rating: 3 - Meets standards


#### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily?

We evaluate on the following:

- Do you have a community repository or section on your website?

  Yes, both exist. KubeVirt maintains a dedicated `kubevirt/community` repository that holds governance, the membership policy and checklist, a maintainers list, per-SIG and working-group directories, community meeting information, and a code of conduct. The project website also has a community section at https://kubevirt.io/community/, and the user guide's contributing page links to it directly. New contributors therefore have a clear, discoverable home for community structure and processes.

- Is there a document specifically for new contributors/your first contribution?

  Yes. The user guide's [Contributing](https://kubevirt.io/user-guide/contributing/) page is the canonical getting-started document, and the community repository's own contributor file simply redirects to it, which avoids duplication. The page includes a "Prerequisites" section, a "Your first contribution" section that points newcomers to `good-first-issue` labeled work and to low-barrier documentation and community repositories, separate guidance for code contributors, a list of important community resources (code of conduct, membership policy, governance), and a link to a New Contributor session recording. This is a well-structured first-contribution path rather than a bare pointer to the issue tracker.

- Do new users know where to get help?

  Yes, though the help information is somewhat scattered and minimal in places. The user guide's landing page has a "Getting help" section listing the issue tracker, the `kubevirt-dev` mailing list, and the `#virtualization` Slack channel. The contributing page additionally points to the community page and the project's social channels, and the community repository README lists both the `#virtualization` and `#kubevirt-dev` Slack channels. The main weaknesses are that the user guide's "Getting help" section is only three bullets placed at the bottom of the index page, it does not link the community page, and it omits the `#kubevirt-dev` Slack channel, so the help entry points are not fully consistent across sources.

##### Comment

KubeVirt provides strong new contributor getting started content. The user guide's Contributing page serves as a single, well-organized entry point that covers prerequisites, a clear "Your first contribution" section, separate tracks for documentation and code contributors, and links to essential community resources such as the code of conduct, membership policy, and governance. Importantly, the community repository's own contributor file redirects to this page rather than duplicating it, so there is one canonical source of truth. This structure reflects a deliberate onboarding path rather than a bare pointer to the issue tracker.

The project also gives newcomers a real community home. The `kubevirt/community` repository documents SIGs and working groups, community meetings, membership progression, and maintainers, and the website exposes a companion community section that the contributing page links to directly. Combined with a linked New Contributor session recording, a first-time contributor has both written and video onboarding material and a clear picture of how the community is organized.

The main opportunity for improvement is the "Getting help" experience, which is thinner and less consistent than the rest of the onboarding content. In the user guide it is a three-bullet section at the bottom of the landing page that lists the issue tracker, mailing list, and the `#virtualization` Slack channel, but it omits the community page and the `#kubevirt-dev` Slack channel that appear in other sources. Consolidating these entry points and surfacing them more prominently would remove ambiguity about where to ask questions.

A second, smaller gap connects to the beginner issue backlog: the contributing page tells newcomers to look for `good-first-issue` items, but that backlog is currently empty, so a motivated first-timer following the documentation can reach a dead end. Keeping a small pool of curated beginner issues would let the otherwise excellent onboarding content deliver on its promise.

Rating: 4 - Meets or exceeds standards

#### Project governance documentation

One of the CNCF’s core project values is open governance.

We evaluate on the following:

- Is project governance clearly documented?

Yes. Project governance is clearly and comprehensively documented, and the user guide points contributors to it. The community repository contains a dedicated `GOVERNANCE.md` that covers the membership policy, maintainer responsibilities and selection, meetings, CNCF resources, the code of conduct, off-boarding and removing maintainers, voting, SIGs, subprojects, working groups, and roles and organization management. It is complemented by a `MAINTAINERS.md` that lists current maintainers with their areas of responsibility and employers, tracks emeritus maintainers, and is kept in sync with the CNCF project-maintainers list. A `membership_policy.md` document defines a full contributor ladder — from new contributor through org member, reviewer, approver, SIG chair, subproject lead, and working-group chair — with explicit requirements, responsibilities, privileges, and an inactivity policy. An autogenerated `sig-list.md` (built from `sigs.yaml`) enumerates the SIGs, working groups, chairs, contacts, and meeting schedules.

From the user guide's own perspective, the contributing page surfaces the governance material by linking to the project governance document, the membership policy, the code of conduct, and the AI contribution policy under its "Important community resources" section. The main limitation is discoverability rather than content: governance is only reachable through that one list on the contributing page, and the user guide has no dedicated governance or community landing page in its own navigation. The governance documentation itself, however, is thorough, versioned, and aligned with CNCF expectations.

##### Comment

KubeVirt's project governance documentation is a clear strength. The `kubevirt/community` repository provides a dedicated `GOVERNANCE.md` that addresses the full range of governance concerns: the membership policy, maintainer responsibilities and selection, meetings, voting, off-boarding and removal of maintainers, code of conduct, and the organization of SIGs, subprojects, and working groups. This is backed by a `MAINTAINERS.md` that names current maintainers and their areas of responsibility, records emeritus maintainers, and is explicitly kept in sync with the CNCF project-maintainers list. Together these documents give contributors an unambiguous picture of who leads the project and how decisions are made.

The contributor ladder is especially well defined. The membership policy lays out each role — from new contributor through org member, reviewer, approver, SIG chair, subproject lead, and working-group chair — with concrete requirements, responsibilities, privileges, and an inactivity policy that explains how roles are maintained or lapse. The autogenerated SIG list, produced from a machine-readable `sigs.yaml`, keeps the list of groups, chairs, contacts, and meeting times consistent and current. This structure reflects mature, CNCF-aligned governance rather than a token document.

The primary opportunity for improvement is discoverability from within the user guide itself. Governance is reachable only through a single "Important community resources" list on the contributing page; the user guide's own navigation has no dedicated community or governance entry point. A reader browsing the documentation site would not easily find how the project is governed without first landing on the contributing page.

Because the analysis is scoped to the user guide, a light improvement would be to surface governance more prominently — for example, a short "How KubeVirt is governed" pointer or a community landing page that links to `GOVERNANCE.md`, the maintainers list, and the membership ladder. The underlying governance content is comprehensive and current; the gap is purely one of navigation from the documentation site.

Rating: 4 - Meets or exceeds standards

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Communication methods documented

- Add a dedicated "Community and communication" section to the user guide that consolidates Slack, the forum, the kubevirt-dev mailing list, community meetings, and social accounts in one clearly labeled place, rather than spreading these links across the home page and Contributing page.
- Document community meetings within the guide itself: state the cadence (for example, weekly or monthly), list the meeting times, and include the public Google Calendar link (`kubevirt@cncf.io`) so readers can join without leaving the guide.
- Give each communication channel a one-line description of its purpose so newcomers know where to ask a question, where to hold discussions, and where to follow announcements (for example, Slack for real-time chat, the mailing list or forum for longer discussions).
- Improve the discoverability of existing links by surfacing the Slack, mailing list, and GitHub links more prominently—such as in the persistent site navigation or a footer—instead of only in a short "Getting help" list near the bottom of the landing page.
- Clarify how the mailing list, the forum, and Slack relate to one another, since all three are currently presented as bare links; a brief note on when to use each avoids confusion for first-time contributors.
- Keep the community page and the user guide consistent so that channels documented on `kubevirt.io/community` (meetings, calendar, YouTube, social accounts) are either mirrored or clearly linked from the guide, ensuring readers who stay in the user guide are not missing key channels.

#### Beginner friendly issue backlog

- Consolidate the duplicate labels by standardizing on the GitHub-native `good first issue` label (spaced) and retiring or aliasing the hyphenated `good-first-issue`, so beginner issues appear in GitHub's "Contribute" tab and good-first-issue discovery tooling. Update the reference on the contributing page to match the chosen label.
- Maintain a small, non-empty pool of beginner issues. Periodically identify documentation gaps, typos, and small feature-doc updates and file them as `good first issue` so a new contributor always finds something to pick up.
- Triage the currently open backlog. Apply `kind/*` and `sig/documentation` labels to unlabeled issues, and use `triage/accepted` to signal that an issue is ready to be worked on.
- Add a `help wanted` complement for slightly larger but still approachable tasks, and reference both `good first issue` and `help wanted` on the contributing page so contributors understand the difference.
- Preserve valuable issues from aggressive auto-close by applying `lifecycle/frozen` (or promptly triaging) to still-relevant enhancements and documentation requests, rather than letting them reach `lifecycle/rotten` and close for inactivity alone.
- Keep issue quality high by continuing to use the description/expectation/URL templates, and add a short "good first issue" checklist to those templates (affected page, expected outcome, pointers to relevant docs) so beginner issues are self-contained.
- Link directly to a filtered beginner view from the contributing page — for example, the repository's `good first issue` label query — so newcomers reach actionable issues in one click instead of browsing the full issue list.
- Publish a lightweight triage cadence (for example, a periodic documentation-issue triage during a SIG or community meeting) to keep labeling, acceptance, and staleness decisions consistent over time.

#### New contributor getting started content

- Consolidate and strengthen the "Getting help" section on the user guide landing page so it lists all primary channels in one place: the `#virtualization` and `#kubevirt-dev` Slack channels, the `kubevirt-dev` mailing list, the community page, and the issue tracker.
- Make the "Getting help" information easier to find by linking to it from the contributing page and considering a more prominent placement than the bottom of the index page.
- Keep a small, curated pool of open `good-first-issue` items so that newcomers who follow the "Your first contribution" guidance always have actionable work, rather than reaching an empty backlog.
- Add a direct, filtered link from the contributing page to the current `good-first-issue` list (for example, a saved label query) so first-timers reach real issues in one click.
- Ensure help and community entry points are consistent across the user guide, the contributing page, and the `kubevirt/community` README, since they currently list slightly different channels.
- Consider adding a brief "how to ask a good question" note or expected-response-time guidance near the help channels so new contributors know what to include and where questions are best directed.
- Continue using the community repository's redirect-to-canonical approach for contributor docs, and periodically verify that all "get started" links across repositories still resolve to the single canonical contributing page.
- Optionally surface the New Contributor session recording and the community meeting schedule closer to the "Your first contribution" section so newcomers can quickly find live, synchronous ways to get onboarded.

#### Project governance documentation

- Improve discoverability from the documentation site by adding a short "How KubeVirt is governed" pointer or a dedicated community/governance landing page that links to `GOVERNANCE.md`, the maintainers list, and the membership ladder, rather than relying solely on the contributing page's resource list.
- Surface the governance links in the user guide navigation (for example, under a community or contributing section) so readers can reach them without first knowing to open the contributing page.
- Add a brief, plain-language summary of the governance model and the contributor ladder in the user guide, with a clear link out to the authoritative documents in the community repository, so newcomers get an overview without reading the full policy.
- Continue keeping `MAINTAINERS.md` synchronized with the CNCF project-maintainers list, and note the last-reviewed date on the maintainers and governance documents so readers can gauge currency.
- Ensure the SIG list and its meeting details remain generated from `sigs.yaml`, and link the SIG list from the user guide so contributors can find the right group and meeting to join.
- Cross-link related governance artifacts (code of conduct, membership policy, AI contribution policy, and voting process) from a single place so contributors can navigate the full set without hunting across repositories.

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

    Yes. The live pages include a responsive viewport meta tag (`width=device-width,initial-scale=1`), and the Material for MkDocs theme is mobile-first and responsive, so the layout adapts to small screens.

- Are doc pages readable?

    Yes. Pages use the theme's clean Roboto typography, clear heading hierarchy, an in-page table of contents, admonitions, and syntax-highlighted code blocks, all of which support comfortable reading on the documentation site.

- Are all / most website features accessible from mobile -- such as the top-nav, site search and in-page table of contents?

    Yes. The primary navigation (rendered as tabs on desktop) collapses into a mobile drawer, site search is present (`md-search`), and the in-page table of contents is available. All are exposed with descriptive ARIA labels (for example, "Header," "Navigation," "Search," "Table of contents," and "Tabs"), so the key features remain reachable on mobile.

- Are color contrasts significant enough for color-impaired readers?

    Partially, and this is the area's weakest point. The brand teal used as the primary color (`--md-primary-fg-color: #0db2b6`, set in `docs/stylesheets/extra.css`) provides only about a 2.6:1 contrast ratio with the white header text, which is below the WCAG AA threshold of 4.5:1 for normal text and even below the 3:1 threshold for large text. Body links are darkened with `filter: brightness(80%)`, which improves them to roughly 3.96:1 but still falls short of the 4.5:1 AA requirement for normal text. Contrast therefore needs improvement for color-impaired readers.

- Are most website features usable using a keyboard only?

    Yes. The page includes a "Skip to content" link (`md-skip`), and the Material theme provides full keyboard navigation and search keyboard shortcuts, so the main features can be operated without a mouse.

- Does text-to-speech offer listeners a good experience?

    Largely yes. The document declares its language (`<html lang="en">`), uses semantic landmarks and ARIA labels, provides a skip link, and every image in the documentation carries non-empty alt text (25 markdown images, none with empty alt, and no raw `<img>` tags lacking `alt`). These give screen readers and text-to-speech tools a solid foundation, though the ongoing quality of alt text and heading order depends on authors.

##### Comment

The KubeVirt user guide is highly usable and, for the most part, accessible, thanks to its Material for MkDocs foundation. The site is responsive and works well on mobile: it sets a proper viewport, collapses the top navigation into a mobile drawer, and keeps site search and the in-page table of contents reachable on small screens. Pages are readable, with clean typography, clear heading structure, and syntax-highlighted code, so readers can move through technical content comfortably on any device.

Accessibility support is strong at the structural level. The document declares its language, exposes semantic landmarks and descriptive ARIA labels (Header, Navigation, Search, Table of contents, Tabs), and provides a "Skip to content" link, all of which help keyboard and screen-reader users. Keyboard-only operation is well supported through the theme's navigation and search shortcuts. Text-to-speech users are also well served: every image in the documentation carries non-empty alt text, and there are no raw image tags missing an `alt` attribute.

The clear weak point is color contrast. The brand teal used as the primary color (`#0db2b6` in `docs/stylesheets/extra.css`) yields only about 2.6:1 against the white header text, which fails the WCAG AA requirement of 4.5:1 for normal text and even the 3:1 threshold for large text. Body links, darkened with `filter: brightness(80%)`, reach roughly 3.96:1 but still fall short of 4.5:1. This affects color-impaired and low-vision readers most, and it is the single most impactful fix in this area.

Addressing contrast would be straightforward and high value: darken the primary teal (or the text placed on it) until header text and links meet WCAG AA, and verify the result in both the light and dark schemes. To sustain accessibility over time, maintainers could add an automated contrast and accessibility check to the build and keep encouraging descriptive alt text and correct heading order in new pages.

Rating: 4 - Meets or exceeds standards

#### Branding and design

CNCF seeks to support enterprise-ready open source software. A key aspect of
this is branding and marketing.

We evaluate on the following:

- Is there an easily recognizable brand for the project (logo + color scheme) clearly identifiable?

    Yes. The KubeVirt logo, a teal heptagon enclosing a stylized "V," is displayed in the site header and configured through `theme.logo: assets/KubeVirt_icon.png`, with matching favicons (`assets/favicon.ico` and `assets/favicon32x32.png`) in `mkdocs.yml`. The color scheme reinforces the logo: the Material theme uses a teal palette, and `docs/stylesheets/extra.css` pins the exact brand colors (`--md-primary-fg-color: #0db2b6` and `--md-accent-fg-color: #006166`). Together the logo and teal palette make the project brand clearly identifiable on every page.

- Is the brand used across the website consistently?

    Within the user guide, yes. The teal palette is applied globally through the Material theme and `extra.css`, so the primary and accent colors are consistent across all pages and are defined for both the light (`default`) and dark (`slate`) schemes. The logo appears in the header site-wide, and section labels in the navigation are given a coordinated teal tone (`#00797f`). One caveat is that the user guide is a MkDocs Material site, while the main `kubevirt.io` website is a separate property with its own styling, so the two share the logo and general color family but do not share an identical look and feel.

- Is the website's typography clean and well-suited for reading?

    Yes. The guide does not override the theme fonts, so it inherits the Material theme's default typeface (Roboto for body text and Roboto Mono for code), which is a clean, legible sans-serif well-suited to on-screen reading. Headings, body copy, tables, and code blocks are styled consistently by the theme, code uses monospaced type with syntax highlighting, and tables are set to full width (`min-width: 100%`) for readability. The custom `filter: brightness(80%)` applied to links slightly darkens link text, which is a minor contrast consideration but does not materially harm readability.

##### Comment

The KubeVirt user guide presents a clear and recognizable brand. The project's teal heptagon logo appears in the site header, and the Material theme is configured with a teal palette that is anchored to the exact brand colors in `docs/stylesheets/extra.css` (`#0db2b6` primary and `#006166` accent). Because these colors are defined at the theme level, the brand identity carries across every page rather than depending on individual authors, which is the right approach for a documentation site.

Brand usage is consistent within the guide. The palette is defined for both the light and dark color schemes, the logo and favicons are set globally, and navigation section labels use a coordinated teal tone. The main point of friction is cross-property consistency: the user guide is a MkDocs Material site, while the primary `kubevirt.io` website is a separate property with its own styling. The two share the logo and color family but not an identical look and feel, so a reader moving between them will notice the shift. Documenting a small set of shared brand values (hex colors, logo files, and font choices) would help keep the properties aligned over time.

Typography is clean and well-suited for reading. By not overriding the theme fonts, the guide inherits Material's default Roboto and Roboto Mono, which are legible on screen and applied consistently to headings, body text, tables, and syntax-highlighted code. One minor design choice worth revisiting is the `filter: brightness(80%)` rule applied to links, which darkens link text and could reduce contrast in some contexts; verifying it against accessibility contrast targets would remove any doubt.

Overall, the branding and design are in good shape: the brand is identifiable, applied consistently within the guide, and paired with readable typography. The main opportunities are cross-site brand alignment and a quick contrast check of the customized link styling.

Rating: 4 - Meets or exceeds standards

#### Case studies/social proof

One of the best ways to advertise an open source project is to show other
organizations using it.

We evaluate on the following:

fic organizations adopted and benefited from KubeVirt. The user guide itself contains only technical documentation and does not link to any case studies.

- Are there user testimonials available?

    Not evident. The website lists adopting organizations by logo, but there are no quoted testimonials from users describing their experience or outcomes. The user guide does not include or reference testimonials.

- Is there an active project blog?

    Yes. The `kubevirt.io` site maintains an active blog with regular posts; recent entries are dated 2026 (for example, "Beta Features Enabled by Default in KubeVirt v1.9" and "Announcing the release of KubeVirt v1.8"), covering releases, features, and technical topics. The blog lives on the main site; the user guide links to release notes but does not link directly to the blog.

- Are there community talks for the project and are they present on the website?

    Yes. The `kubevirt.io/videos/` page organizes community talks into curated YouTube playlists, including Talks, Demos, Interviews, and the annual KubeVirt Summit, alongside recorded community meetings. This content is well organized on the main site, but the user guide does not surface or link to it.

- Is there a logo wall of users/participating organizations?

    Yes. The website homepage features a prominent logo wall grouped into End Users (such as Arm, Aussie Broadband, Cloudflare, CoreWeave, and NVIDIA), Vendors (such as Deckhouse, Microsoft, Oracle, Red Hat, and SUSE), and Integrations. The user guide does not display or link to this logo wall.

##### Comment

KubeVirt has a strong base of community and adoption content, though it lives on the main `kubevirt.io` website rather than in the user guide. The website maintains an active blog with recent posts dated 2026, organizes community talks into curated YouTube playlists (Talks, Demos, Interviews, and the annual KubeVirt Summit), and presents an extensive logo wall of adopting organizations grouped into End Users, Vendors, and Integrations. These are clear signals of a healthy, active project and provide good social proof for prospective users.

The main gaps are dedicated case studies and user testimonials. The adopter logo walls show who uses KubeVirt but do not explain how or why, and there are no quoted testimonials describing real-world outcomes. Narrative case studies, even a small number, would help prospective adopters understand practical use cases, migration paths, and the benefits organizations have realized. These carry particular weight for an infrastructure project where adoption decisions are significant.

From the user guide's perspective, the more immediate issue is discoverability. The guide is technical documentation and does not link to the blog, community talks, or adopter logo wall at all. A reader who lands in the user guide has no easy path to this adoption and community content, even though it exists one site over. Adding a few targeted links, for example from the landing page or a "Community" or "Adopters" entry, would connect readers to material that builds confidence in the project.

Overall, the project scores well on blog, talks, and a logo wall, but lacks true case studies and testimonials, and the user guide does not surface the adoption content that already exists. Closing those gaps would round out this area.

Rating: 3 - Meets standards

#### SEO, Analytics and site-local search

SEO helps users find your project and it's documentation, and analytics helps
you monitor site traffic and diagnose issues like page 404s. Intra-site search,
while optional, can offer your readers a site-focused search results.

We evaluate on the following:

- Is analytics enabled for the production server?

    No. The user guide's `mkdocs.yml` has no `extra.analytics` configuration, and the live production pages contain no analytics tags (no Google Analytics, Google Tag Manager, or measurement ID). The main `kubevirt.io` homepage likewise shows no analytics tags. This appears consistent with the project's privacy stance, but it means no usage analytics are collected.

- Is analytics disabled for all other deploys?

    Not applicable in practice. Because no analytics is configured anywhere, it is inherently absent from pull-request previews and non-default branch builds as well. The intended "production-only analytics" pattern cannot be assessed since there is no analytics to scope.

- If project is using Google Analytics, has it migrated to GA4?

    Not applicable. The project does not use Google Analytics on the user guide, so there is no Universal Analytics or GA4 property in use to migrate.

- Can Page-not-found (404) reports easily be generated from site analytics?

    No. Material for MkDocs generates a `404.html` page, but without any analytics in place there is no mechanism to report on 404 hits or generate not-found reports from site analytics.

- Is site indexing supported for the production server, while disabled for website previews and builds for non-default branches?

    Partially. Production indexing is supported: a site-wide `robots.txt` is served (returning 200) with a `Sitemap` directive and no `Disallow` rules, MkDocs generates a `sitemap.xml`, and pages carry no `noindex` meta tag. Pull-request previews are built on Netlify, whose deploy-preview and branch-deploy subdomains are served with a `noindex` `X-Robots-Tag` by Netlify's default behavior; however, this preview-noindex behavior is not explicitly configured in `netlify.toml`, so it relies on the platform default rather than an intentional project setting. One minor SEO defect is that the `robots.txt` Sitemap URL contains a double slash (`https://kubevirt.io//sitemap.xml`).

- Is local intra-site search available from the website?

    Yes. The MkDocs `search` plugin is enabled in `mkdocs.yml` (with a customized separator), and the Material theme provides the search box and results UI, giving readers client-side, intra-site search across the user guide.

- Are the current custodian(s) of the analytics accounts (such as Google CSE) documented?

    No. No analytics or search-account custodians are documented in the repository. Since no analytics account currently exists there is nothing to attribute, but there is also no documented owner should analytics be introduced.

##### Comment

The KubeVirt user guide handles site search and basic SEO well but has no analytics at all. Local intra-site search is enabled through the MkDocs `search` plugin and surfaced by the Material theme, giving readers fast client-side search across the documentation. For discoverability, the production site is indexable: a site-wide `robots.txt` is served with a `Sitemap` directive and no blocking rules, MkDocs generates a `sitemap.xml`, and pages carry no `noindex` tag. Pull-request previews are built on Netlify, whose preview subdomains are `noindex` by default, which keeps previews out of search results.

The clear gap is analytics. Neither the user guide nor the main site includes any analytics tags, so there is no visibility into traffic, popular pages, search terms, or broken links. In particular, 404 reports cannot be generated from analytics, which makes it harder to find and fix broken inbound links over time. This absence appears consistent with the project's privacy posture, and that is a legitimate trade-off; but if the project wants data to guide documentation improvements, a privacy-respecting analytics option would fill an important blind spot.

If analytics is introduced, a few practices are worth adopting up front. Use a GA4 property (or a privacy-friendly alternative), enable it only on the production deploy while leaving previews and non-default branches untracked, and document the account custodians so ownership is clear as maintainers change. Configuring these through the theme rather than per page keeps the setup consistent.

Two smaller items round out the SEO picture: make the preview `noindex` behavior an explicit project setting rather than relying on the Netlify default, and fix the double slash in the `robots.txt` Sitemap URL (`https://kubevirt.io//sitemap.xml`).

Rating: 2 - Needs improvement

#### Maintenance planning

Website maintenance is an important part of project success, especially when
project maintainers aren’t web developers.

We evaluate on the following:

- Is the website tooling well supported by the community (i.e., Hugo with the Docsy theme) or commonly used by CNCF projects?

    Yes. The user guide is built with MkDocs and the Material for MkDocs theme, along with the `awesome-nav`, `redirects`, and `html-proofer` plugins (see `mkdocs.yml`, `Makefile`, and `netlify.toml`). While this is not the Hugo and Docsy stack named in the question, MkDocs Material is a mature, actively maintained, and widely adopted documentation tool used across many CNCF and Kubernetes-ecosystem projects, so the tooling is well supported. Note that the main `kubevirt.io` website is a separate Jekyll site, so the project maintains two different stacks.

- Is there active cultivating website maintainers from within the community?

    Yes. The repository has an `OWNERS` file that defines reviewers and approvers roles (via aliases) and lists emeritus approvers, and the project uses the Kubernetes-style OWNERS model for delegating maintenance. Git history shows sustained activity, with roughly 49 distinct authors contributing in the last 12 months and a steady stream of merged pull requests, indicating an active and growing maintainer and contributor base.

- Are site build times reasonable?

    Yes. MkDocs produces a static site of this size quickly, typically well under a minute, and the build is a straightforward `mkdocs build`. Netlify builds preview deployments for pull requests and the project's Prow-based CI builds the site as well, so build times are reasonable for both previews and production.

- Do site maintainers have adequate permissions?

    Yes. Permissions are managed through the Kubernetes-style OWNERS model, where designated approvers can approve and merge changes and reviewers can review. The `OWNERS` file separates reviewers and approvers and records emeritus approvers, giving maintainers the access they need while keeping the roles documented.

- Is the website accessible via HTTPS?

    Yes. Requesting `https://kubevirt.io/user-guide/` returns HTTP 200 over HTTPS.

- Does HTTP access, if any, redirect to HTTPS?

    Yes. Requesting `http://kubevirt.io/user-guide/` returns a 301 redirect to the HTTPS URL, and the apex `http://kubevirt.io/` likewise 301-redirects to HTTPS.

##### Comment

The KubeVirt user guide is on a solid maintenance footing. It is built with MkDocs and the Material for MkDocs theme, supplemented by the `awesome-nav`, `redirects`, and `html-proofer` plugins. Although this differs from the Hugo and Docsy stack, MkDocs Material is a mature and widely adopted documentation toolchain used across the CNCF and Kubernetes ecosystems, so maintainers can rely on strong community support and a steady stream of upstream updates.

Maintenance responsibility is clearly structured and actively exercised. The repository uses the Kubernetes-style OWNERS model, defining reviewers and approvers roles and recording emeritus approvers, which gives maintainers appropriate permissions to review and merge changes. The commit history reflects a healthy, cultivated community, with roughly 49 distinct authors in the last twelve months and a continuous flow of merged pull requests, so the guide is not dependent on a single maintainer.

The build and hosting setup is dependable. MkDocs builds this static site quickly, Netlify produces per-pull-request previews, and the project's Prow-based CI builds the site as well. The site is served securely: HTTPS returns a 200 response, and HTTP requests are 301-redirected to HTTPS for both the user guide path and the apex domain. These are exactly the properties one wants for low-friction, secure maintenance.

The main opportunities are around build reproducibility and stack consolidation. The build installs MkDocs and its plugins without pinned versions (in `netlify.toml` and the `Makefile`), which risks non-reproducible builds or breakage when an upstream package changes; pinning versions would harden this. Maintaining two separate stacks (MkDocs for the user guide and Jekyll for the main site) also adds ongoing overhead worth periodically reviewing.

Rating: 4 - Meets or exceeds standards

### Recommendations

> AUTHOR NOTE: Write general recommendations based on the comments from the
> previous section.

#### Single-source requirement

#### Minimal website requirements

#### Usability, accessibility and devices

- Increase color contrast for the brand teal primary color (`#0db2b6` in `docs/stylesheets/extra.css`) so that white header text meets the WCAG AA contrast ratio of at least 4.5:1 for normal text, either by darkening the teal or by adjusting the text color placed on it.
- Adjust the body link color (currently the primary color darkened with `filter: brightness(80%)`) so that links reach at least 4.5:1 contrast against the page background, rather than the roughly 3.96:1 they achieve today.
- Verify all contrast changes in both the light (`default`) and dark (`slate`) schemes, checking header text, links, navigation section labels, and code blocks.
- Add a-ln automated accessibility and contrast check to the site build (for example, a Lighthouse or axe-based check) so contrast regressions are caught before publishing.
- Continue requiring descriptive, non-empty alt text on all images and maintain correct heading order in new pages, so screen-reader and text-to-speech users keep getting a good experience.
- Preserve the existing strengths, keeping the responsive viewport, mobile drawer navigation, site search, in-page table of contents, skip-to-content link, and ARIA labels intact as the theme is upgraded.

#### Branding and design

- Document a small set of shared brand values in the repository, such as the brand hex colors (`#0db2b6` and `#006166`), the logo and favicon files, and the chosen fonts, so the branding is defined in one place rather than implied by the theme configuration.
- Align the user guide's look and feel more closely with the main `kubevirt.io` website by agreeing on a shared logo, color family, and typography across both properties, so readers experience a consistent brand as they move between the sites.
- Verify the customized link styling (`filter: brightness(80%)` in `docs/stylesheets/extra.css`) against accessibility contrast targets in both the light and dark schemes, and adjust or remove the filter if it reduces contrast below recommended levels.
- Keep relying on the Material theme's default Roboto and Roboto Mono typography, and if a custom font is ever introduced, apply it through the theme configuration so it remains consistent across all pages.
- Confirm the teal palette renders correctly in the dark (`slate`) scheme, checking that logo, links, code blocks, and navigation labels retain sufficient contrast and remain on-brand.
- Continue defining brand colors through theme-level variables in `extra.css` rather than per-page styling, so the brand stays consistent as new pages are added.

#### Case studies/social proof

- Publish a small set of narrative case studies on the project website that describe how specific organizations adopted KubeVirt, the problems they solved, and the outcomes they achieved, going beyond the existing adopter logo walls.
- Gather and display user testimonials, for example short quotes from adopting organizations, to complement the logo walls with real-world perspectives on the project's value.
- Link the user guide to the project's adoption and community content so readers can discover it, for example by adding references to the blog, the community talks and videos page, and the adopters logo wall from the user guide landing page.
- Add a "Community" or "Adopters" entry to the user guide that points to the case studies, testimonials, and logo wall once they exist, giving documentation readers a clear path to social proof.
- Continue maintaining the active blog and the curated talk playlists (Talks, Demos, Interviews, and KubeVirt Summit), and consider surfacing the most relevant posts or talks from within related documentation pages.
- Where a case study or talk illustrates a documented feature, cross-link it from the corresponding user guide page so readers can see the feature applied in practice.

#### SEO, Analytics and site-local search

- Decide whether to adopt analytics for the documentation, and if so, choose either a GA4 property or a privacy-respecting alternative that aligns with the project's privacy policy, so maintainers gain visibility into traffic and popular content.
- If analytics is adopted, enable it only on the production deploy and keep it disabled for pull-request previews and non-default branch builds, configuring it through the Material theme's analytics integration rather than per page.
- If analytics is adopted, ensure Page-not-found (404) reporting is available so broken inbound links can be identified and fixed over time.
- Document the custodians of any analytics or search accounts (for example, who owns the analytics property) in the repository, so ownership remains clear as maintainers change.
- Make the preview `noindex` behavior an explicit project setting (for example, an `X-Robots-Tag` header for Netlify preview and branch deploys) rather than relying solely on the Netlify default, so indexing rules are intentional and documented.
- Fix the double slash in the `robots.txt` Sitemap URL (`https://kubevirt.io//sitemap.xml`) so it points to a single canonical sitemap location.
- Keep the MkDocs `search` plugin enabled and continue to benefit from the Material theme's intra-site search, periodically reviewing the search separator configuration as content grows.

#### Maintenance planning

- Pin the versions of MkDocs and its plugins (`mkdocs`, `mkdocs-material`, `mkdocs-awesome-nav`, `mkdocs-redirects`, and `mkdocs-html-proofer-plugin`) in the build definitions, for example via a `requirements.txt`, so that Netlify and Prow builds are reproducible and resistant to breaking upstream changes.
- Keep the pinned dependency versions current through a regular update cadence, ideally automated (for example with Dependabot or Renovate), so the guide continues to benefit from the actively maintained MkDocs Material toolchain.
- Continue cultivating maintainers through the OWNERS model, and periodically review the reviewers and approvers lists to confirm they reflect currently active contributors and that coverage is not concentrated in too few people.
- Preserve the existing HTTPS posture, keeping the site accessible over HTTPS and retaining the HTTP-to-HTTPS redirects for both the user guide path and the apex domain.
- Periodically review the overhead of maintaining two separate stacks (MkDocs for the user guide and Jekyll for the main `kubevirt.io` site), and consider whether consolidation or closer alignment would reduce long-term maintenance effort.
- Document the local and CI build process (build commands, dependencies, and preview workflow) in a contributor-facing location so new maintainers can reproduce and troubleshoot builds easily.

#### Other

#### References and notes

##### Rating values

The numeric rating values used in this document are as follows

1. Not present
2. Needs improvement
3. Meets standards
4. Meets or exceeds standards
5. Exemplary

<!-- [criteria]: ../criteria.md
[implementation]: ./implementation.md
[issues list]: ./issues-list.md
[project-website]: ?fixme-target-dne=_PROJECT-WEBSITE_
[Rating (1-5)]: #rating-values
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[website guidelines]: ../../website-guidelines-checklist.md -->

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
