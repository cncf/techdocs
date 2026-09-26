---
title: KubeVirt Documentation Analysis
created: 2026-05-24
modified: 2026-09-28
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

- Website: https://KubeVirt.io
- Documentation: https://KubeVirt.io/user-guide
- Website repo: https://github.com/KubeVirt/user-guide
- Labs documentation: https://github.com/kubevirt/kubevirt.github.io

#### Out of scope

- Other KubeVirt GitHub repositories besides `user-guide`.

### How this document is organized

Note: Current organization is different, if not accepted the following will be
implemented:

This document is divided into two sections that represent two major areas of
concern:

- **Project documentation:** concerns documentation for users of the KubeVirt
  software, aimed at people who intend to use the project software.
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the KubeVirt OSS project.
- **Website & Infrastructure:** concerns the mechanics of publishing the
  documentation, and includes branding, website structure, and maintainability.

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
- [Website & infrastructure](#website--infrastructure)

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

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                  | Rating (1-5)                   |
| -------------------------- | ------------------------------ |
| Information architecture   | 3 - Meets standards            |
| New user content           | 3 - Meets standards            |
| Content maintainability    | 3 - Meets standards            |
| Content creation processes | 3 - Meets standards            |
| Inclusive language         | 4 - Meets or exceeds standards |

The KubeVirt user guide meets the standard for an incubating project across
every area and exceeds it on inclusive language. Its feature coverage is deep,
its top-level structure is sensible, the toolchain is simple, and documentation
is coupled to the release process so that new features land with their pages.
The guide's problems are not gaps in what it covers but gaps in how it guides
readers and contributors through it.

Three themes recur across the areas:

- No guided path. The guide reads as a well-organized encyclopedia. New users
  must assemble the install-to-first-VM sequence from five pages in two
  sections, and the oldest foundational pages contradict the
  VirtualMachine-first approach used elsewhere. Both the information
  architecture and new user content areas rate this as the most important
  weakness.
- Uneven page age. Older pages use `$`-prefixed code blocks, reference manifests
  that are never shown, carry legacy distribution content, and use the most
  minimizing language. Newer pages are clean and pasteable. The gap shows up in
  new user content, information architecture, and inclusive language alike.
- Implicit process and ownership. The release checklist makes documentation
  happen, but nothing explains who reviews, how release branches are meant to be
  used, whether the site will ever be versioned, or what a good page looks like.
  Content maintainability and content creation process both trace their
  weaknesses to this missing written guidance.

The project does two things well enough to point to as examples: feature
developers document their own features in the same release cycle because the
pull request template and VEP checklist require it, and the project's own names,
commands, and feature gates are free of non-inclusive terms.

The following sections contain assessments of each element of the Project
Documentation rubric.

### Information architecture

The overall structure (pages/subpages/sections/subsections) of your project
documentation. We evaluate on the following:

- Is there high level conceptual content?

  Yes. The Architecture page gives a conceptual overview of the KubeVirt stack,
  explains how CRDs, controllers, and node daemons extend Kubernetes, and
  describes each component (`virt-api`, `virt-controller`, `virt-handler`,
  `virt-launcher`). Several feature pages open with a short overview before the
  procedure, for example Live Migration, Run Strategies, and VirtualMachine
  Templates.

  Conceptual content is thin at the section level. The Welcome page describes
  each top-level section in one line, but the Compute, Network, and Storage
  sections have no landing or overview page that explains how their pages relate
  or which one a reader needs first. The User Workloads section relies on the
  two-paragraph Basic Use page and the Lifecycle page for its conceptual
  framing.

- Is the documentation feature complete?

  Mostly. The guide covers the core VirtualMachine and VirtualMachineInstance
  lifecycle, instance types and preferences, pools, replica sets, templates,
  live migration, hotplug of CPU, memory, volumes, and interfaces, snapshots and
  restore, clone, export, network binding plugins, feature gates, node
  maintenance, confidential computing, and debugging. The Arm64 pages document
  per-architecture device and feature-gate status.

  Some recently released features have no page. The v1.9.0 release notes
  describe the `VirtualMachineBackup` API, the `CrossArchitectureVirtualization`
  feature gate, masquerade `PortRanges`, and MigrationPolicy compression, but
  none of these terms appears outside the release notes. The new Plugins page
  exists in `cluster_admin/` but is absent from the section `.nav.yml`, so it is
  reachable only from a link on the deprecated Hook Sidecar page.

- Are there step-by-step instructions documented for features in tasks and
  tutorials?

  Yes, for most features. Pages such as Accessing Virtual Machines, Creating
  VirtualMachines by using virtctl, Live Migration, Hotplug Volumes, and
  Snapshot and Restore API pair a short explanation with manifests and commands
  the reader can run. The Debug page and the Virtualization Debugging section
  walk through log verbosity, privileged node debugging, and launching QEMU
  under `strace` and `gdb`.

  The guide does not contain a tutorial of its own. The Quickstarts page and
  Welcome page link out to Killercoda scenarios, kubevirt.io quickstarts, and
  kubevirt.io labs for the guided "install, create a VM, connect to it"
  experience.

- Are there any key features that are documented but missing task documentation?

  Yes. Basic Use lists four `kubectl` commands and states that the following
  pages describe how to use the API, but it does not include a sample `vmi.yaml`
  or link to a page that does. Lifecycle shows `kubectl create -f vmi.yaml`
  without a manifest. The Architecture page describes components without linking
  to the operational pages that configure them. The Plugins page describes
  domain hooks and node hooks at Alpha but is not integrated into the
  navigation.

- Is the "happy path" (most common use case) documented?

  Partially. Installation, `virtctl` installation, creating a VirtualMachine
  with `virtctl create vm`, starting and stopping it, and connecting over
  console, VNC, or SSH are all documented. However, these steps sit on five
  different pages across two sections, and no single page strings them together
  for a first-time reader. The Welcome page delegates that path to external
  labs.

- Are tasks clearly named according to user goals?

  Mixed. User Workloads pages use goal-oriented names such as "Creating
  VirtualMachines by using virtctl", "Accessing Virtual Machines", and "Boot
  from external source". Many Compute, Network, and Storage pages are named for
  the feature or API rather than the task, for example "Clone API", "Export
  API", "Snapshot Restore API", "Migration Controller", "CSI Overlay", and
  "Virtual Hardware". Cluster Administration mixes both styles ("Activating and
  deactivating feature gates" next to "KSM" and "Scheduler").

- If the documentation doesn't suffice, is there a clear escalation path for
  users needing more help? (FAQ, Troubleshooting)

  Partially. The Welcome page has a Getting Help section that links to the
  GitHub issue tracker, the kubevirt-dev mailing list, and the Kubernetes Slack
  channel. The Virtualization Debugging section is the closest thing to
  troubleshooting content and is aimed at developers and advanced users.

  There is no FAQ and no user-facing troubleshooting page that lists common
  symptoms (VMI stuck in `Scheduling`, migration failures, console access
  errors) with causes and fixes. Troubleshooting notes exist but are scattered
  inside individual feature pages such as Accessing Virtual Machines ("Debugging
  console access") and Memory Dump.

- If the product exposes an API, is there a complete reference that includes
  documented CLIs as applicable?

  Partially. The Welcome page links to the generated API reference at
  kubevirt.io/api-reference, and individual pages deep-link into it where
  relevant. There is no `virtctl` command reference in the guide. The `virtctl`
  page covers only download and installation, and command usage is distributed
  across feature pages (`create vm`, `start`, `stop`, `pause`, `migrate`,
  `addvolume`, `vnc`, `ssh`, `port-forward`). Feature gates are documented by
  procedure but the guide does not maintain a list of gates and their stages;
  the release notes are the only place that records graduations.

- Is content up to date and accurate?

  Largely, with visible legacy pockets. Recently updated pages carry
  version-stamped feature-state banners (VirtualMachine Templates, Hook Sidecar,
  Hotplug Volumes), and deprecated mechanisms such as presets, the
  OpenShift-based Templates page, and the Hook Sidecar are labeled and point to
  replacements. Release notes extend to v1.9.0.

  Older content shows its age. Installation still documents installing from the
  OKD Service Catalog as an Ansible Playbook Bundle and installing on k3OS, and
  links to OpenShift 4.10 documentation. Basic Use and Lifecycle were last
  touched in May 2024 and still frame VirtualMachineInstance as the primary
  object, while the rest of the guide and `virtctl create vm` center on
  VirtualMachine. `compute/windows_virtio_drivers.md` is a byte-identical,
  unlisted duplicate of `user_workloads/windows_virtio_drivers.md`.

- Does the documentation need restructuring?

  Not a full restructure. The 2024 move from a flat `operations/` and
  `virtual_machines/` layout into audience- and layer-based sections (Cluster
  Administration, User Workloads, Compute, Network, Storage) with explicit
  `.nav.yml` ordering and redirects is sound. The remaining problems are within
  sections rather than between them: the User Workloads section mixes lifecycle
  basics, Windows guidance, monitoring, and a "Workloads" sub-group of nine
  pages that includes deprecated presets and both template mechanisms; long
  Compute and Storage lists have no internal grouping or landing page; and five
  pages exist outside the navigation. Release Notes, a 3,000-line page, sits in
  the main navigation between Storage and Contributing.

Strengths:

- Audience- and layer-based top-level sections with explicit, intentional page
  ordering.
- Redirects preserve old `operations/` and `virtual_machines/` URLs after the
  reorganization.
- Consistent feature-page pattern: concept, feature-state banner, then manifests
  and commands.
- Deprecated features (presets, OpenShift templates, Hook Sidecar) are labeled
  and link to replacements.
- Per-architecture (Arm64) device and feature-gate status pages.
- Deep, multi-level debugging content for advanced users.

Weaknesses:

- No end-to-end getting-started path inside the guide; the happy path is spread
  across five pages and external labs.
- Basic Use and Lifecycle are dated and VMI-centric, contradicting the
  VirtualMachine-first guidance elsewhere.
- No consolidated `virtctl` command reference or feature-gate table.
- No FAQ or user-facing troubleshooting page.
- Several v1.9 features (VirtualMachineBackup, CrossArchitectureVirtualization,
  PortRanges, migration compression) appear only in release notes; the Plugins
  page is orphaned from navigation.
- Compute and Storage sections are flat lists with API-style names and no
  landing page.
- Legacy installation content (OKD Service Catalog APB, k3OS, OpenShift 4.10
  links) and a duplicate Windows virtio drivers page remain.

Rating: 3 - Meets standards

### New user content

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

Strengths:

- Installation gives a correct, short operator-based procedure with expected
  output and a software-emulation fallback.
- The Welcome page links to live Killercoda scenarios, quickstarts for minikube,
  kind, and cloud providers, and four hands-on labs.
- Arm64 platform status is documented in a dedicated sub-section.
- Recently revised pages provide clean, pasteable manifests and `virtctl`
  pipelines.
- Requirements are stated up front, including `--allow-privileged=true` and
  hardware virtualization validation.

Weaknesses:

- No page labeled "Getting started" and no single in-guide path from install to
  first running VM.
- Installation mixes the core procedure with AppArmor, kernel compatibility,
  OKD, k3OS, developer builds, and node placement, and ends without a next step.
- `virtctl` install covers only Linux amd64 via `wget`; macOS, Windows, and
  arm64 binaries and `PATH` setup are not mentioned.
- Basic Use and Lifecycle reference `vmi.yaml` without providing it and do not
  link onward.
- Older pages use `$`-prefixed indented code blocks interleaved with output, and
  the copy button is not enabled.
- The Quickstarts page has no introduction, prerequisites, or outcome statement.

Rating: 3 - Meets standards

### Content maintainability & site mechanics

As a project scales, concerns like localized (translated) content and versioning
become large maintenance burdens, particularly if you don’t plan for them. We
evaluate on the following:

- Is the documentation searchable?

  Yes. The site uses the built-in MkDocs search plugin with the mkdocs-material
  theme, so a search box appears in the header on every page and results are
  served from a client-side index built at deploy time. `mkdocs.yml` sets a
  custom separator that splits on punctuation such as hyphens, colons, and
  slashes while preserving version numbers like `v1.9.0`, which helps with
  Kubernetes-style identifiers such as `kubevirt.io/libvirt-log-filters` and
  `virt-handler`.

  Search is confined to the user guide. The API reference at
  kubevirt.io/api-reference, the quickstarts and labs on kubevirt.io, and the
  release notes in the kubevirt/kubevirt repository are separate sites with
  their own or no search, so a user cannot search across the KubeVirt
  documentation set from one box. The theme's search enhancements
  (`search.suggest`, `search.highlight`, `search.share`) are not enabled.

- Are there plans for localization/internationalization with regards to site
  directory structure? Is a localization framework present?

  No. All content is English and lives directly under `docs/`, with no
  language-code directory such as `docs/en/`. `mkdocs.yml` does not configure
  the mkdocs-material `alternate` language selector or the `i18n` plugin, and
  neither README nor CONTRIBUTING mentions translation. No open plans for
  localization are documented in the repository.

  The directory layout does not block a future effort. Content is plain Markdown
  organized by section, ordering is controlled by `.nav.yml` files, and
  redirects are centralized in `mkdocs.yml`, so a language-prefixed tree could
  be introduced later. The absence of a root language directory means that step
  would require moving every file and updating every redirect.

- Is there a clearly documented method for versioning of content?

  No. The published site at kubevirt.io/user-guide is built from the `main`
  branch by Netlify and has no version selector; the only version indicators are
  a v1.9.0 release notes page and in-text "as of vX.Y" feature-state banners on
  about ten pages. `mkdocs.yml` has no `extra.version` configuration and the
  `mike` versioning tool is not used.

  The repository does contain release branches (`release-v1.7-stable`,
  `release-v1.8-stable`, `release-v1.9-stable`, and matching `-devel` branches
  for 1.7 and 1.8), and they have received commits, so a branching convention
  exists in practice. However, no document in the repository explains what those
  branches are for, whether they are published anywhere, how or when they are
  cut, or how contributors should decide whether a change needs a cherry-pick.
  README, CONTRIBUTING, and the Contributing page all describe the fork-and-PR
  flow against `main` only. Release notes are maintained by a script
  (`update_changelog.sh`) that regenerates the page from kubevirt/kubevirt tags,
  but that process is also undocumented outside the script itself.

Strengths:

- Simple, low-dependency MkDocs toolchain with search enabled on every page.
- Custom search separator tuned for hyphenated and dotted Kubernetes
  identifiers.
- Explicit `.nav.yml` ordering and a centralized redirects map preserve URLs
  across reorganizations.
- Makefile targets for local build, spell check, and link check.
- Release branches exist for recent minors, providing a foundation for versioned
  publishing.

Weaknesses:

- No published version selector; the live site tracks `main` only.
- No document describes the purpose, lifecycle, or publication status of the
  `release-vX.Y-*` branches, or when to cherry-pick.
- Version applicability is signaled inconsistently through ad hoc "as of vX.Y"
  banners on a minority of pages.
- No localization framework, language directory, or stated position on
  translation.
- Search does not span the API reference, quickstarts, or labs hosted elsewhere
  on kubevirt.io.

Rating: 3 - Meets standards

### Content creation processes

Documentation is only as useful as it is accurate and well-maintained, and
requires the same kind of review and approval processes as code. We evaluate on
the following:

- Is there a clearly documented (ongoing) contribution process for
  documentation?

  Partially. The repository README documents the mechanics: fork, edit Markdown
  under `docs/`, keep `.nav.yml` ordering current, sign commits with `-s`, run
  `make build_img`, `make check_spelling`, `make check_links`, and `make run` in
  a container, then open a pull request. The root CONTRIBUTING.md is a two-line
  pointer to the Contributing page on the published site, and that page covers
  community-wide onboarding (prerequisites, where to find good-first-issues, the
  Code of Conduct, membership policy, governance, and the AI contribution
  policy) with the user guide listed as a low-barrier repository.

  The process stops at "open a PR". Nothing in the repository describes what
  happens next: which labels are applied, who is expected to review, what the
  approval flow is, how long a contributor should expect to wait, or when to use
  the release branches. There is no documentation style guide, page template, or
  guidance on when a change needs a redirect entry in `mkdocs.yml`. The
  repository has no pull request or issue templates under `.github/`. Twelve
  pull requests are open, the oldest from March 2026.

- Does the code release process account for documentation creation & updates?

  Yes. The kubevirt/kubevirt pull request template includes a checklist item
  that a user-guide update "was considered and is present (link) or not
  required" for any user-facing feature or API change, and approvers are asked
  to review the list. The Virtualization Enhancement Proposal (VEP) process in
  kubevirt/enhancements requires SIGs, after code freeze, to confirm that the
  "Docs PR is merged (plan review ahead of release if only placeholder is
  opened)" as part of the release tracking checklist.

  The process is visible in practice. Recent merged pull requests include VEP
  190 plugins documentation, GPU DRA, Migration Stall Detector alpha docs,
  PersistentReservation GA graduation, Template Beta graduation, and the v1.9.0
  release notes, most authored by the feature developers themselves. Release
  notes are regenerated from kubevirt/kubevirt tags with `update_changelog.sh`.
  Neither the PR checklist item nor the VEP requirement is enforced by tooling,
  and the user guide repository itself does not document how its
  `release-vX.Y-*` branches relate to the KubeVirt release cycle.

- Who reviews and approves documentation pull requests?

  Prow, using the `OWNERS` and `OWNERS_ALIASES` files. The root `OWNERS` file
  assigns every path to the `reviewers` alias (seven people) and the `approvers`
  alias (ten people), and automatically labels changes under `docs/` with
  `kind/documentation`. `OWNERS_ALIASES` also defines per-SIG reviewer and
  approver groups for network, storage, compute, observability, release, test,
  scale, and buildsystem, but the `OWNERS` file does not route any directory to
  them, so SIG experts are not auto-assigned to pages in their area. Pre-submit
  and post-submit Prow jobs for the repository are defined in
  kubevirt/project-infra.

  The reviewer and approver lists are made up of KubeVirt core maintainers
  rather than documentation specialists, and one contributor is the most
  frequent committer over the last six months and authored the v1.9.0 release
  notes and site fixes. The process is discoverable only by reading the `OWNERS`
  files; no human-readable page names the documentation approvers or explains
  the Prow `/lgtm` and `/approve` flow to a first-time contributor.

- Does the website have a clear owner/maintainer?

  Partially. The user guide is owned collectively by the `approvers` alias in
  `OWNERS_ALIASES`, the site builds on Netlify from `main` (badge in the README,
  configuration in `netlify.toml`), and the `OWNERS` file labels changes under
  `site/` with `kind/website`. Seven emeritus approvers are listed, showing the
  list is curated over time. The main website, kubevirt.io, is a separate
  repository (kubevirt/kubevirt.github.io) with its own ownership.

  There is no MAINTAINERS file, no named documentation lead or SIG Docs, and no
  statement on the Contributing page or README of who is responsible for the
  user guide's infrastructure, the Netlify account, or the release-notes
  process. Ownership is inferable from Git history and OWNERS files but is not
  documented.

Strengths:

- The kubevirt/kubevirt PR template and the VEP release checklist both require a
  user-guide update to be considered and merged.
- Feature developers author the documentation for their features in the same
  release cycle.
- Prow OWNERS automation with a curated approver list, emeritus tracking, and
  automatic `kind/documentation` labeling.
- README documents local build, spell check, link check, and DCO sign-off.
- Release notes are generated by a script from upstream tags.

Weaknesses:

- No documented review and approval flow, expected turnaround, or explanation of
  Prow commands for documentation contributors.
- No documentation style guide, page template, or guidance on redirects and
  release branches.
- No MAINTAINERS file or named documentation owner; infrastructure ownership
  (Netlify, release-notes script) is undocumented.
- Per-SIG reviewer aliases exist but are not mapped to directories in `OWNERS`.
- Root CONTRIBUTING.md is a pointer; the repository has no PR or issue
  templates.
- Backlog of twelve open pull requests, some six months old.

Rating: 3 - Meets standards

### Inclusive language

Creating inclusive project communities is a key goal for all CNCF projects. We
evaluate on the following:

- Are there any customer-facing utilities, endpoints, class names, or feature
  names that use non-recommended words as documented by the Inclusive Naming
  Initiative website?

  No, within KubeVirt's own naming. The KubeVirt API, CRDs, components
  (`virt-api`, `virt-controller`, `virt-handler`, `virt-launcher`), `virtctl`
  subcommands, and feature gates documented in the user guide do not use
  "master", "slave", "whitelist", "blacklist", or other Inclusive Naming
  Initiative tier-1 terms. The kubevirt/kubevirt default branch is `main`, and
  the guide already uses the recommended replacement "allowlist" when describing
  `permittedHostDevices`. The kubevirt.io home page is also free of these terms.

  The word "master" does appear 28 times in the guide, but almost entirely in
  URLs and third-party content rather than in KubeVirt-controlled names.
  Fourteen occurrences are links to the KubeVirt API reference at
  `kubevirt.io/api-reference/master/...`; the API reference site now publishes
  under `main` and per-version paths, so these links point at a legacy path. The
  rest are links into upstream repositories (libvirt, Kubernetes enhancements,
  cri-tools, vhost-md, QEMU, kubevirt-ansible) that still use a `master` branch,
  a CNI configuration field named `master` in a live migration example, a QEMU
  process listing, and a `kubevirt.io/nodeName: master` node label in an example
  on the deprecated Presets page. "Abort" appears in the Live Migration page,
  both as prose and as the `Abort Requested` and `Abort Status` field names from
  the VirtualMachineInstanceMigration status. "Kill" appears once in prose on
  Interfaces and Networks describing kubelet behavior.

- Does the project use language like "simple", "easy", etc.?

  Yes, frequently. Excluding the release notes, the guide contains 32 uses of
  "simple", 28 of "simply", 12 each of "easy" and "easily", 19 of "just", four
  of "of course", and one each of "obviously" and "trivial", across 39 of the 97
  pages. Typical examples are "Live migration can also be canceled by simply
  deleting the migration object", "Attaching the virtio-win package can be done
  simply by adding", "it can be easily cancelled", and "This is just a matter of
  adding the name of the".

  These words are concentrated in older, longer pages such as Live Migration,
  Windows Virtio Drivers, Node Assignment, and vsock. In most cases they add no
  information and can be deleted without changing meaning. The guide has no
  gendered pronouns, no "guys", and no other ableist or exclusionary terms in
  prose. The repository's spelling check does not include an inclusive-language
  or minimizing-language rule, so nothing prevents new occurrences.

Strengths:

- No Inclusive Naming Initiative tier-1 terms in KubeVirt-controlled names,
  commands, or feature gates.
- "Allowlist" is used consistently for `permittedHostDevices`.
- No gendered pronouns or other exclusionary terms in prose.
- kubevirt.io home page is free of non-recommended terms.

Weaknesses:

- Over a hundred uses of "simple", "simply", "easy", "easily", and "just" across
  39 pages.
- Fourteen API reference links still use the legacy `/api-reference/master/`
  path.
- A `kubevirt.io/nodeName: master` example remains on the Presets page.
- No style rule or automated check discourages minimizing language in new
  content.

Rating: 4 - Meets or exceeds standards

## Project documentation recommendations

### Information architecture

- Add a "Getting started" page to the User Workloads section (or expand Basic
  Use into one) that walks through the happy path on a single page: install
  KubeVirt, install `virtctl`, create a VirtualMachine with `virtctl create vm`
  or a sample manifest, start it, connect over console or SSH, and stop it. Link
  to the existing detailed pages at each step rather than duplicating them.
- Rewrite Basic Use and Lifecycle to present VirtualMachine as the primary
  object and VirtualMachineInstance as the running instance it manages. Include
  a complete minimal `vm.yaml`, since both pages currently reference `vmi.yaml`
  without providing it.
- Add `cluster_admin/plugins.md` to `docs/cluster_admin/.nav.yml` so the Plugins
  page is discoverable from somewhere other than the deprecated Hook Sidecar
  page.
- Write pages, or add sections to existing pages, for v1.9 features that
  currently appear only in the release notes: the `VirtualMachineBackup` API
  (Storage), the `CrossArchitectureVirtualization` feature gate (Compute or
  Cluster Administration), masquerade `PortRanges` (Network, in Interfaces and
  Networks), and MigrationPolicy compression (Cluster Administration, in
  Migration Policies).
- Create a `virtctl` command reference page, or expand the existing `virtctl`
  page beyond installation, that lists each subcommand with a one-line
  description and a link to the feature page that explains it in context.
- Add a feature-gate table to the Activating and Deactivating Feature Gates page
  that lists each gate, its stage (Alpha, Beta, GA, Deprecated), the version it
  was introduced or graduated, and a link to its documentation. Ask the
  maintainers whether this table can be generated from the kubevirt/kubevirt
  source to avoid drift.
- Add a user-facing Troubleshooting page (separate from the developer-oriented
  Virtualization Debugging section) that lists common symptoms such as a VMI
  stuck in `Scheduling` or `Pending`, failed live migration, console or VNC
  connection errors, and missing `qemu-guest-agent` data, each with likely
  causes and links to the relevant fix. Consolidate the troubleshooting notes
  now embedded in Accessing Virtual Machines and Memory Dump there or link to
  them.
- Add a brief landing page to each of the Compute, Network, and Storage sections
  that explains what the section covers and groups its pages by task (for
  example, Storage: provisioning disks, importing images, snapshots and backup,
  moving data between clusters).
- Rename API-centric page titles to user goals where practical, for example
  "Clone API" to "Cloning VirtualMachines", "Export API" to "Exporting
  VirtualMachines and volumes", "Snapshot Restore API" to "Snapshotting and
  restoring VirtualMachines", and "Migration Controller" to a title that states
  what the reader accomplishes with it. Add redirects in `mkdocs.yml` if file
  names change.
- Reorganize the User Workloads "Workloads" sub-group so current mechanisms
  (instance types, VirtualMachine Templates, pools) come first and legacy or
  deprecated pages (presets, OpenShift Templates, Hook Sidecar) are grouped
  under a clearly labeled "Legacy" heading or moved to the end.
- Remove or archive legacy installation content: verify with the maintainers
  whether the OKD Service Catalog APB and k3OS paths are still supported, and
  update the OpenShift 4.10 documentation links to a current version or a
  version-independent URL.
- Delete `docs/compute/windows_virtio_drivers.md`, which is a byte-identical
  unlisted duplicate of `docs/user_workloads/windows_virtio_drivers.md`, and add
  a redirect if the old URL was ever published.
- Move Release Notes out of the middle of the main navigation, either to the end
  of the list or into a top-bar link, so the section list reads as a progression
  from concepts through administration, workloads, and infrastructure layers.

### New user content

- Add a "Getting started" page, placed immediately after Architecture in the
  top-level navigation, that walks a new user from a working cluster to a
  running VM on one page: install KubeVirt, install `virtctl`, create a
  VirtualMachine from a provided manifest or `virtctl create vm`, start it,
  connect with `virtctl console`, and stop it. Link to the detailed pages at
  each step. Consider folding the current Quickstarts page into it as a "Try it
  in a sandbox" section.
- Restructure the Installation page so the core procedure comes first:
  Requirements, the four-command operator install, verification, and the
  emulation fallback. Move AppArmor, kernel and user-land compatibility,
  SELinux, OKD, k3OS, daily developer builds, deploying from source, network
  plugins, and node placement below a "Platform-specific and advanced
  installation" heading or onto separate pages.
- End the Installation page with a "Next steps" section linking to `virtctl`
  installation, Creating VirtualMachines by using virtctl, and Accessing Virtual
  Machines.
- Remove or move to a footnote the historical notes about behavior before
  v0.20.0 and v0.34.2 on the Installation page; ask the maintainers whether any
  supported upgrade path still requires them.
- Expand the `virtctl` page to cover all published client binaries. Use
  mkdocs-material content tabs for Linux, macOS, and Windows on both amd64 and
  arm64, and include the `chmod +x` and `PATH` steps. Rename the page to
  "Installing virtctl" and move it to sit next to Installation, or link to it
  from Installation's Next steps.
- Rewrite Basic Use into a short "Your first VirtualMachine" page that includes
  a complete minimal `vm.yaml` using a public containerDisk image, the
  `kubectl apply`, `virtctl start`, `virtctl console`, and `virtctl stop`
  commands, and explicit links to the next pages. Update Lifecycle to reference
  that manifest instead of the undefined `vmi.yaml`.
- Enable `content.code.copy` under `theme.features` in `mkdocs.yml` to add a
  copy button to every code block.
- Convert `$`-prefixed indented code blocks on the new-user path (Installation,
  `virtctl`, Basic Use, Lifecycle) to fenced `shell` blocks without prompt
  characters, and place example output in a separate block or a `title="Output"`
  annotation so commands paste cleanly. Extend the same treatment to Disks and
  Volumes and Export API over time.
- Give the Quickstarts page a one-paragraph introduction that states
  prerequisites (a laptop with virtualization enabled, or a browser for
  Killercoda), the expected time, and what the reader will have at the end, and
  add a closing link to the in-guide Getting started page.
- On the Welcome page, add a one-line "New to KubeVirt? Start here" link at the
  top that points to the Getting started page, so the first-run path is
  discoverable without reading the section list.

### Content maintainability & site mechanics

- Document the content versioning model in CONTRIBUTING.md (and summarize it on
  the Contributing page). State what the `release-vX.Y-stable` and
  `release-vX.Y-devel` branches are for, when they are cut relative to a
  KubeVirt release, which one Netlify publishes, and how a contributor decides
  whether a change on `main` needs a cherry-pick. Ask the maintainers to confirm
  the intended workflow first, since the `-devel` branches exist for 1.7 and 1.8
  but not 1.9.
- Publish versioned documentation with a version selector, using either `mike`
  with mkdocs-material's `extra.version.provider: mike` or a Netlify build per
  release branch under a `/vX.Y/` path. Publish at least the supported N, N-1,
  and N-2 minors alongside `latest`.
- Until versioned publishing exists, adopt a standard feature-state admonition
  and apply it consistently to every feature page, stating the version
  introduced and the current stage (Alpha, Beta, GA, Deprecated). Nine pages use
  a `FEATURE STATE:` block today; formalize its format in CONTRIBUTING.md so new
  pages follow it.
- Document the release-notes update process: when `update_changelog.sh` is run,
  by whom, and how the result is reviewed, so the page continues to be
  regenerated after maintainer turnover.
- Enable the mkdocs-material search features `search.suggest`,
  `search.highlight`, and `search.share` under `theme.features` in `mkdocs.yml`;
  this is a one-line change that improves search usability.
- Add a short "Localization" statement to CONTRIBUTING.md that records the
  project's current position (English only, translations not currently accepted,
  or translations welcome via a stated process). If translations are anticipated
  within the next few releases, move content to `docs/en/` now and configure the
  `mkdocs-static-i18n` plugin, so the redirects and `.nav.yml` files only need
  to change once.
- Ask the KubeVirt website maintainers whether the API reference and quickstarts
  can be indexed by the same search as the user guide, for example by moving the
  user guide search to a site-wide index, so users can search the full
  documentation set from one place.

### Content creation processes

- Expand CONTRIBUTING.md from a pointer into a documentation contributor guide
  that covers the full lifecycle: how to propose a change, how to build and test
  locally (move the README build steps here), what happens after opening a PR
  (labels, `/lgtm`, `/approve`, expected turnaround), when to add a redirect to
  `mkdocs.yml`, and when a change needs a cherry-pick to a `release-vX.Y-stable`
  branch. Model it on the Thanos "How to contribute to docs" page.
- Add a MAINTAINERS.md (or a "Maintainers" section on the Contributing page)
  that names the user guide approvers, the person or group responsible for the
  Netlify deployment and the release-notes script, and how to reach them. Model
  it on the NATS site MAINTAINERS file.
- Add a short documentation style guide covering page structure (title, short
  concept, feature-state banner, procedure, related links), the standard
  feature-state admonition, code block conventions (fenced blocks, no `$`
  prompts), Kubernetes object capitalization, and file naming. Link it from
  CONTRIBUTING.md and the Contributing page.
- Add a pull request template to `.github/` with a checklist: `.nav.yml` updated
  for new pages, redirect added for moved pages, spelling and link checks run,
  feature-state banner present, and the related kubevirt/kubevirt PR or VEP
  linked.
- Route reviews to subject-matter experts by adding per-directory `OWNERS` files
  (for example `docs/network/OWNERS`, `docs/storage/OWNERS`,
  `docs/compute/OWNERS`) that reference the existing `sig-network-*`,
  `sig-storage-*`, and `sig-compute-*` aliases, while keeping the root approvers
  for site-wide changes.
- Ask the maintainers to consider a documentation-focused reviewer role or SIG
  Docs alias, so that writers who are not core code approvers can share the
  review load and reduce the open PR backlog.
- Document the release-cycle touch points for the user guide on the Contributing
  page: when a release branch is cut, that the VEP checklist requires the docs
  PR to be merged by code freeze, and how the release notes page is regenerated
  with `update_changelog.sh`.
- Triage the twelve open pull requests, closing or merging the oldest, and add a
  stale-PR policy to CONTRIBUTING.md so contributors know what to expect.

### Inclusive language

- Remove or reword minimizing language across the guide. Delete "simply",
  "just", "of course", and "obviously" where they add nothing, and replace
  "easy" or "easily" with a concrete statement of what the step requires (for
  example, change "can be easily cancelled" to "can be cancelled by deleting the
  migration object"). Start with the pages that have the most occurrences: Live
  Migration, Windows Virtio Drivers, Node Assignment, vsock, and Disks and
  Volumes.
- Add a rule to the documentation style guide (see the content creation process
  recommendations) that discourages "simple", "simply", "easy", "easily",
  "just", and "obviously", with a one-line explanation of why.
- Add an automated check for minimizing and non-recommended language to the
  Makefile and the Prow pre-submit, using a tool such as Vale with the
  `write-good` style, or a grep-based check alongside `make check_spelling`, so
  new occurrences are flagged in pull requests.
- Update the 14 links to `kubevirt.io/api-reference/master/...` to the `/main/`
  path, or to a specific version path such as `/v1.9.0/`, so the guide no longer
  points at a legacy branch name.
- Replace the `kubevirt.io/nodeName: master` example on the Presets page with a
  neutral node name such as `node01`, or remove the example, since the page
  documents a deprecated feature.
- Ask the KubeVirt API maintainers whether the `Abort Requested` and
  `Abort Status` fields in the VirtualMachineInstanceMigration status are
  candidates for a "cancel" alias in a future API version; until then, prefer
  "cancel" in the prose of the Live Migration page while continuing to show the
  field names as they appear in `kubectl` output.
- When upstream projects linked from the guide (libvirt, cri-tools, vhost-md,
  kubevirt-ansible) rename their default branch, update the links; in the
  meantime prefer tagged or permalink URLs so the branch name is not repeated in
  the guide.

## Contributor documentation

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                                 | Rating (1-5)                   |
| ----------------------------------------- | ------------------------------ |
| Communication methods documented          | 4 - Meets or exceeds standards |
| Beginner friendly issue backlog           | 2 - Needs improvement          |
| "New contributor" getting started content | 3 - Meets standards            |
| Project governance documentation          | 4 - Meets or exceeds standards |

KubeVirt's contributor documentation is strong at the community level and uneven
at the point where a newcomer actually tries to contribute. The
kubevirt/community repository is a model of its kind: governance with concrete
voting thresholds and maintainer selection rules, a full contributor ladder with
an inactivity policy, generated SIG lists, a detailed weekly meeting document,
and a help-wanted label guide. Communication channels are established and
active, with two purpose-specific Slack channels, a mailing list, a public
calendar, and recorded meetings, all gathered on the kubevirt.io Community page.
The user guide's Contributing page is a genuine, welcoming first-contribution
document and is the canonical entry point that both the repository and the
community repo point to.

The highest-impact gap is that the path the Contributing page describes leads
nowhere. It tells newcomers to look for `good-first-issue`, but the label has
zero open items in kubevirt/user-guide and zero documentation-related items in
kubevirt/kubevirt, because every beginner issue closed in the past year was
auto-closed by the stale bot rather than fixed, including a well-written batch
of eight feature-lifecycle documentation tasks. Half of the small open backlog
is unlabeled and nothing is assigned or marked `triage/accepted`, so lifecycle
automation runs without a human deciding what should survive it. Reopening and
freezing that batch, seeding a standing set of single-page starter tasks, and
exempting beginner-labeled issues from auto-close would move this area from
needs-improvement to meets-standards quickly.

The second cross-cutting theme is that excellent material in kubevirt/community
is not surfaced where users and contributors look. Three of the four areas note
the same pattern: governance, the maintainers list, and the SIG list are not
linked from the kubevirt.io Community page; the community meeting's day, time,
and join link appear only in the community repository; the help-wanted guide and
MAINTAINERS file are not linked from the guide; and the user guide's own
"Getting help" section is three bare URLs on the Welcome page with no guidance
on which channel suits which question and no mention of `#kubevirt-dev`. The
mkdocs-material header and footer carry no repository or social icons because
`repo_url` and `extra.social` are unset. Fixing these is largely a matter of
adding links and one-sentence descriptions.

The third theme is the missing hand-off from motivation to mechanics. The
Contributing page ends before explaining how to claim an issue, fork, sign off,
open a pull request, or interpret Prow labels, and it names no channel, person,
or meeting where a stuck contributor can ask for help. Those mechanics exist in
the repository README and in kubevirt/kubevirt's CONTRIBUTING.md and
getting-started guide but are not presented as the next step. A "Making your
first documentation change" section and a "Where to ask for help" section on the
Contributing page, drawing on content that already exists, would close this gap
and reinforce the beginner backlog and communication fixes above.

Project governance is the section's strongest area and, alongside the
communication infrastructure, shows that the project has done the hard
organizational work. The remaining effort is editorial and operational: link
what exists, keep the beginner backlog alive, and finish the Contributing page.

The following sections contain brief assessments of each element of the
Contributor Documentation rubric.

### Communication methods documented

One of the easiest ways to attract new contributors is making sure they know how
to reach you. We evaluate on the following:

- Is there a Slack/Discord/Discourse/etc. community and is it prominently linked
  from your website?

  Yes. KubeVirt uses two channels in the Kubernetes Slack workspace,
  `#virtualization` for users and `#kubevirt-dev` for contributors. The
  kubevirt.io home page links to Slack in its footer, and the kubevirt.io
  Community page has a "Talk to Us!" section that names both channels, links to
  each, and links to the Kubernetes Slack invitation page so a newcomer can get
  an account. The kubevirt/community README repeats both channel links.

  In the user guide the link is less prominent. The Welcome page has a "Getting
  help" section that links to `#virtualization` (as a raw URL rather than a
  channel name), the GitHub issue tracker, and the mailing list; the
  Contributing page mentions Slack in passing and points to the Community page.
  The `#kubevirt-dev` channel is not mentioned in the guide. No other page in
  the guide links to Slack, and the mkdocs-material header and footer do not
  carry social or chat icons because `extra.social` and `repo_url` are not
  configured in `mkdocs.yml`.

- Is there a direct link to your GitHub organization/repository?

  Yes. The kubevirt.io home page and Community page link to the GitHub
  organization (github.com/kubevirt) and to the main kubevirt/kubevirt
  repository. The user guide's Welcome page links to the kubevirt/kubevirt issue
  tracker under "Getting help" and to the API reference under "Developer", and
  every page has "Edit this page" and "View source" actions that resolve to the
  kubevirt/user-guide repository. The Contributing page links to the
  organization, to the user-guide, kubevirt.github.io, community, kubevirt, and
  containerized-data-importer repositories, and to their issue lists.

  The user guide does not display a repository link in its header, which
  mkdocs-material provides when `repo_url` is set. A reader must reach the
  Welcome or Contributing page, or use the edit icon, to find the source
  repository.

- Are weekly/monthly project meetings documented? Is it clear how someone can
  join those meetings?

  Yes, in the community repository; only indirectly on the websites. The
  kubevirt/community repository's `community_meeting.md` documents the weekly
  community meeting in detail: Zoom meeting ID and join link, time (Wednesdays
  16:00 CET/CEST), hosts, the running meeting-notes document, how recordings are
  produced and posted to the YouTube "Community Meetings" playlist, and that
  minutes are mailed to kubevirt-dev. The kubevirt.io Community page embeds the
  KubeVirt community calendar (`kubevirt@cncf.io`) and states that anyone may
  "join any of our community meetings - no registration required."

  The user guide itself does not mention the community meeting, the calendar, or
  SIG meetings; its Contributing page links to the Community page and to a New
  Contributor session recording on YouTube. SIG charters in kubevirt/community
  (for example `sig-network/charter.md`) do not list meeting times or channels,
  so SIG meeting cadence is discoverable only through the shared calendar.

- Are mailing lists documented?

  Yes. The kubevirt-dev Google Group is linked from the kubevirt.io home page
  footer, the Community page, the kubevirt/community README, and the user
  guide's Welcome page under "Getting help". The community meeting document
  states that weekly minutes are posted to the list, and the kubevirt/kubevirt
  pull request template asks authors to consider announcing changes there.

  The list is presented as a bare link with no description of its purpose,
  expected traffic, or whether it is the right place for user questions versus
  development discussion. There is no separate user-oriented list, and the guide
  does not say so. The Contributing page does not mention the mailing list at
  all.

Strengths:

- Two purpose-specific Slack channels, a mailing list, a public calendar, and a
  weekly recorded meeting are all active and linked from kubevirt.io.
- `community_meeting.md` documents Zoom details, time, hosts, notes, recordings,
  and minutes distribution in depth.
- The Community page links the Kubernetes Slack invitation page so newcomers can
  get an account.
- Every user guide page has edit and view-source actions pointing at the
  repository.
- The Contributing page links every relevant repository and issue list.

Weaknesses:

- The user guide's only help section is on the Welcome page and consists of bare
  URLs without guidance on which channel to use.
- No repository, Slack, or mailing list icons in the guide's header or footer.
- The community meeting, calendar, and `#kubevirt-dev` channel are not mentioned
  in the user guide.
- Meeting day, time, and join instructions appear only in the community
  repository, not on kubevirt.io.
- SIG charters do not list meeting times or channels.

Rating: 4 - Meets or exceeds standards

### Beginner friendly issue backlog

We evaluate on the following:

- Are docs issues well-triaged?

  Partially. The kubevirt/user-guide repository has a full Prow label set
  inherited from the KubeVirt organization: `kind/*`, `sig/*` (including
  `sig/documentation`), `triage/accepted`, `triage/needs-information`,
  `triage/duplicate`, and `lifecycle/*`. Org-level issue templates
  (`bug_report.md`, `docs_report.md`, `feature_request.md`) prompt reporters for
  structured information, and issues opened through them arrive with a
  consistent shape.

  The labels are applied inconsistently. Of the four issues open today, two
  carry a `kind/*` label and two carry no label at all; none has a `triage/*` or
  `sig/*` label and none is assigned. The two unlabeled issues are a proposal
  for Simplified Chinese documentation and a report that the Material theme is
  reaching end of life, both of which have been open for months without a
  maintainer response recorded in labels. Twelve issues were opened in the past
  year, so the volume is small enough that complete triage is achievable.

- Is there a clearly marked way for new contributors to make code or
  documentation contributions (i.e. a "good first issue" label)?

  Yes in form, no in substance. The repository defines both `good-first-issue`
  and `good first issue` labels and a `help wanted` label, and the Contributing
  page in the user guide tells newcomers to look for `good-first-issue` in the
  user-guide, kubevirt.github.io, and community repositories. The Contributing
  page also links a New Contributor session recording.

  There are currently zero open `good-first-issue` items in kubevirt/user-guide.
  In kubevirt/kubevirt, nine `good-first-issue` items are open and none is
  labeled `kind/documentation`, and no open kubevirt/kubevirt issue carries
  `kind/documentation` at all. A newcomer who follows the Contributing page's
  advice finds an empty list. Over the past year ten `good-first-issue` items
  were closed in kubevirt/user-guide, including a well-scoped batch of eight
  "Update ... Documentation to Reflect Feature Lifecycle Changes" issues (#918
  through #925) filed in September 2025; all ten were closed by the stale bot
  with the `lifecycle/rotten` label rather than by a pull request.

- Are issues well-documented (i.e., more than just a title)?

  Yes. All four open issues have bodies over 300 characters. The enhancement
  issue #948 uses the feature request template, describes the problem (no clear
  structure for newcomers), and proposes persona-based getting-started paths.
  The closed `good-first-issue` batch was exemplary: each issue (for example
  #918) had a summary, a background section citing the specific
  kubevirt/kubevirt pull requests and versions that changed feature status, a
  list of affected files, and acceptance criteria, at roughly 1,800 characters.

  Issue quality is therefore not the constraint. The well-documented beginner
  issues expired unworked, which points to discoverability and follow-through
  rather than to how issues are written.

- Are issues maintained for staleness?

  Yes, mechanically. The KubeVirt Prow instance applies `lifecycle/stale` after
  inactivity, then `lifecycle/rotten`, then auto-closes, and `lifecycle/frozen`
  is available to exempt an issue. Of 21 issues closed in the past year, 15 (71
  percent) were closed by this automation rather than by a fix. No open issue is
  older than about ten months and none has gone six months without an update, so
  the backlog does not accumulate.

  The same automation removed every beginner-friendly issue in the repository.
  The eight feature-lifecycle documentation issues were valid when filed and, as
  far as the closing comments show, were still valid when the bot closed them
  five months later; nobody applied `lifecycle/frozen` or `help wanted` to keep
  them alive. Staleness handling is tuned for a code repository with active
  triage and, without a human in the loop, it erases the entry points the
  Contributing page advertises.

Strengths:

- Full Prow label taxonomy, org-level issue templates, and automated lifecycle
  management are in place.
- Open issues are substantive, with structured bodies and clear problem
  statements.
- The retired `good-first-issue` batch (#918 to #925) is a model for how to
  write scoped, self-contained documentation tasks.
- Issue volume (twelve per year) is small enough to triage completely.
- The Contributing page tells newcomers which label to look for and in which
  repositories.

Weaknesses:

- Zero open `good-first-issue` items in kubevirt/user-guide and zero
  documentation-labeled beginner issues in kubevirt/kubevirt.
- Every beginner issue closed in the past year was auto-closed as rotten rather
  than fixed.
- Half of open issues are unlabeled; none carries `triage/*`, `sig/*`, or an
  assignee.
- No process exempts valid, unworked beginner issues from the stale bot.
- A proposal for Simplified Chinese documentation and a theme end-of-life report
  have no recorded triage decision.

Rating: 2 - Needs improvement

### New contributor getting started content

Open source is complex and projects have many processes to manage that. Are
processes easy to understand and written down so that new contributors can jump
in easily? We evaluate on the following:

- Do you have a community repository or section on your website?

  Yes, both. The kubevirt/community repository holds the governance document,
  membership policy and checklist, maintainers and alumni lists, code of
  conduct, AI contribution policy, community meeting mechanics, a SIG list with
  per-SIG charters, working groups, a help-wanted label guide adapted from
  Kubernetes, and directories for events, design proposals, and conference
  proposals. The kubevirt.io website has a Community page with the shared
  calendar, GitHub, Slack, mailing list, and YouTube links, and a Contributing
  tab in the user guide's top navigation.

  The two are loosely connected. The kubevirt/community
  `contributors/contributing.md` is a one-line pointer to the user guide's
  Contributing page, and the user guide's Contributing page links back to the
  membership policy, governance, code of conduct, and AI policy in
  kubevirt/community. However, the Contributing page does not link the community
  repository's SIG list, help-wanted guide, community meeting document, or
  MAINTAINERS file, so a newcomer sees only part of what the community
  repository offers.

- Is there a document specifically for new contributors/your first contribution?

  Yes. The user guide's Contributing page is written for first-time contributors
  and is the canonical entry point that both the root CONTRIBUTING.md and
  kubevirt/community point to. It has a Prerequisites section (CNCF open source
  primer, Git basics, the organization's repositories, quick start labs), a
  "Your first contribution" section that lists documentation and community
  repositories as low-barrier starting points and code repositories for Go
  developers, an "Other ways to get started" section (review a pull request,
  watch the New Contributor session recording, open an issue), and links to the
  community's core documents.

  The document stops before the mechanics. It tells readers to look for
  `good-first-issue` but the linked repositories currently have no such open
  issues, and it does not describe how to claim an issue, the fork-branch-PR
  flow with DCO sign-off, what Prow labels and `/lgtm` and `/approve` mean, or
  how long review takes. Those mechanics are split between the repository README
  (build, spell check, link check, sign-off) for documentation and
  kubevirt/kubevirt's CONTRIBUTING.md and `docs/getting-started.md` for code.
  The kubevirt/kubevirt CONTRIBUTING.md is the more complete document, covering
  workflow, testing, draft pull requests, DCO, review, and membership, but it is
  written for code contributors and is not surfaced in the user guide beyond one
  link.

- Do new users know where to get help?

  Partially. The Welcome page's "Getting help" section lists the GitHub issue
  tracker, the kubevirt-dev mailing list, and the `#virtualization` Slack
  channel. The Contributing page invites readers to raise a bug if something is
  missing, points to the Community page, and links the New Contributor session
  recording. The kubevirt/community help-wanted guide states that
  `good first issue` items come with a commitment from members to provide extra
  assistance.

  Help is not framed for contributors specifically. Nothing tells a new
  contributor which Slack channel to ask in when stuck on a documentation pull
  request (`#kubevirt-dev` is not named in the guide), who the documentation
  approvers are, whether there is a mentor or buddy program, or that the weekly
  community meeting welcomes newcomer introductions. The help links are bare
  URLs on the Welcome page and are not repeated on the Contributing page or in
  CONTRIBUTING.md.

Strengths:

- A dedicated, welcoming Contributing page that is the canonical entry point
  from both CONTRIBUTING.md and kubevirt/community.
- Explicit low-barrier starting points (documentation, website, community
  repositories) and non-code ways to contribute.
- A New Contributor session recording on YouTube.
- A comprehensive kubevirt/community repository with governance, membership,
  SIG, and meeting documentation.
- Community page and Welcome page surface the primary help channels.

Weaknesses:

- The Contributing page omits the contribution mechanics (claiming an issue,
  fork and PR flow, DCO, Prow labels, review expectations).
- Newcomers are sent to `good-first-issue` lists that are empty.
- No contributor-specific help guidance: which Slack channel to ask in, who
  reviews documentation, whether mentoring is available.
- The SIG list, help-wanted guide, community meeting document, and MAINTAINERS
  file in kubevirt/community are not linked from the guide.
- Build and test instructions for the guide live only in the repository README,
  not on the Contributing page.

Rating: 3 - Meets standards

### Project governance documentation

One of the CNCF’s core project values is open governance. We evaluate on the
following:

- Is project governance clearly documented?

  Yes. Governance lives in the kubevirt/community repository and is complete and
  specific. `GOVERNANCE.md` (about 1,350 words) defines the maintainer role and
  its responsibilities, the criteria and process for selecting maintainers (one
  year of participation, demonstrated leadership, nomination by pull request
  against `MAINTAINERS.md`, simple-majority vote), maintainer meetings, use of
  CNCF resources, the code of conduct, off-boarding and mentorship, retiring and
  removing maintainers, voting rules (lazy consensus by default, simple majority
  for most matters, two-thirds to remove a maintainer or amend the governance),
  and the structure of Special Interest Groups, subprojects, and working groups.
  `MAINTAINERS.md` lists eight current maintainers with employer and area of
  responsibility, a table of emeritus maintainers with retirement dates, and a
  note that the list must stay in sync with the CNCF project maintainers list.

  The surrounding documents are equally thorough. `membership_policy.md` defines
  a contributor ladder from new contributor through org member, reviewer,
  approver, SIG chair, subproject lead, and working group chair, with
  requirements and privileges for each level and an inactivity policy that
  states how inactivity is measured. `membership_checklist.md`,
  `code-of-conduct.md`, `ai-contribution-policy.md`, and `ALUMNI.md` complete
  the set. SIGs and working groups are declared in `sigs.yaml`, from which
  `sig-list.md` is generated, and each SIG has a charter with scope, roles, and,
  in at least some cases, meeting mechanics. A `CNCF/` directory records the
  incubation application and technical review.

  Discoverability from the user-facing sites is limited. The user guide's
  Contributing page links `GOVERNANCE.md` under "Important community resources"
  with the one-line description "Project Maintainer responsibilities", and links
  the membership policy and code of conduct alongside it. The kubevirt.io
  Community page does not link the governance document, the maintainers list, or
  the SIG list, and neither site summarizes how decisions are made or who the
  maintainers are. A user or prospective adopter evaluating the project's
  governance must know to open the community repository.

Strengths:

- `GOVERNANCE.md` covers maintainer selection, removal, voting thresholds,
  meetings, SIGs, subprojects, and working groups with concrete rules.
- `MAINTAINERS.md` lists current maintainers with employer and responsibilities
  plus an emeritus table, and is tied to the CNCF maintainers list.
- `membership_policy.md` defines a full contributor ladder with requirements,
  privileges, and a measurable inactivity policy.
- SIGs and working groups are declared in `sigs.yaml` and the SIG list is
  generated, so it cannot drift from the source.
- Code of conduct, AI contribution policy, and CNCF incubation records are
  co-located.

Weaknesses:

- The kubevirt.io Community page does not link governance, maintainers, or the
  SIG list.
- The user guide's Contributing page links `GOVERNANCE.md` with a one-line label
  and no summary.
- Neither site names the maintainers or explains how decisions are made.

Rating: 4 - Meets or exceeds standards

## Contributor documentation recommendations

### Communication methods documented

- Add a dedicated "Community and communication" section to the user guide that
  consolidates Slack, the forum, the kubevirt-dev mailing list, community
  meetings, and social accounts in one clearly labeled place, rather than
  spreading these links across the home page and Contributing page.
- Document community meetings within the guide itself: state the cadence (for
  example, weekly or monthly), list the meeting times, and include the public
  Google Calendar link (`kubevirt@cncf.io`) so readers can join without leaving
  the guide.
- Give each communication channel a one-line description of its purpose so
  newcomers know where to ask a question, where to hold discussions, and where
  to follow announcements (for example, Slack for real-time chat, the mailing
  list or forum for longer discussions).
- Improve the discoverability of existing links by surfacing the Slack, mailing
  list, and GitHub links more prominently—such as in the persistent site
  navigation or a footer—instead of only in a short "Getting help" list near the
  bottom of the landing page.
- Clarify how the mailing list, the forum, and Slack relate to one another,
  since all three are currently presented as bare links; a brief note on when to
  use each avoids confusion for first-time contributors.
- Keep the community page and the user guide consistent so that channels
  documented on `kubevirt.io/community` (meetings, calendar, YouTube, social
  accounts) are either mirrored or clearly linked from the guide, ensuring
  readers who stay in the user guide are not missing key channels.

### Beginner friendly issue backlog

- Consolidate the duplicate labels by standardizing on the GitHub-native
  `good first issue` label (spaced) and retiring or aliasing the hyphenated
  `good-first-issue`, so beginner issues appear in GitHub's "Contribute" tab and
  good-first-issue discovery tooling. Update the reference on the contributing
  page to match the chosen label.
- Maintain a small, non-empty pool of beginner issues. Periodically identify
  documentation gaps, typos, and small feature-doc updates and file them as
  `good first issue` so a new contributor always finds something to pick up.
- Triage the currently open backlog. Apply `kind/*` and `sig/documentation`
  labels to unlabeled issues, and use `triage/accepted` to signal that an issue
  is ready to be worked on.
- Add a `help wanted` complement for slightly larger but still approachable
  tasks, and reference both `good first issue` and `help wanted` on the
  contributing page so contributors understand the difference.
- Preserve valuable issues from aggressive auto-close by applying
  `lifecycle/frozen` (or promptly triaging) to still-relevant enhancements and
  documentation requests, rather than letting them reach `lifecycle/rotten` and
  close for inactivity alone.
- Keep issue quality high by continuing to use the description/expectation/URL
  templates, and add a short "good first issue" checklist to those templates
  (affected page, expected outcome, pointers to relevant docs) so beginner
  issues are self-contained.
- Link directly to a filtered beginner view from the contributing page — for
  example, the repository's `good first issue` label query — so newcomers reach
  actionable issues in one click instead of browsing the full issue list.
- Publish a lightweight triage cadence (for example, a periodic
  documentation-issue triage during a SIG or community meeting) to keep
  labeling, acceptance, and staleness decisions consistent over time.

### New contributor getting started content

- Add a "Making your first documentation change" section to the Contributing
  page that walks through the mechanics end to end: find or file an issue,
  comment to claim it, fork and branch, edit under `docs/` and update
  `.nav.yml`, run `make check_spelling` and `make check_links`, sign off with
  `git commit -s`, open the pull request, and what to expect from Prow
  (`ok-to-test`, `lgtm`, `approved`) and reviewers. Move the build and test
  steps from the repository README here or link them prominently.
- Add a "Where to ask for help" section to the Contributing page that names
  `#kubevirt-dev` on Kubernetes Slack for contributor questions and
  `#virtualization` for usage questions, links the Slack invitation page, states
  that the weekly community meeting includes newcomer introductions with the
  day, time, and Zoom link, and identifies the documentation approvers or a docs
  contact.
- Link the kubevirt/community resources that newcomers need directly from the
  Contributing page: the SIG list (to find the right SIG for a topic), the
  help-wanted guide (to understand the labels), the community meeting document,
  and the MAINTAINERS file.
- Replace the generic "look for good-first-issue" advice with a direct link to
  the filtered issue list for each repository, and pair this with the beginner
  issue backlog recommendations so the lists are populated when newcomers
  arrive.
- Add a "Contributing to the code" subsection that summarizes the
  kubevirt/kubevirt path in three or four steps (read CONTRIBUTING.md, follow
  `docs/getting-started.md` to build and run a local cluster, pick an issue,
  open a draft PR) so code-minded newcomers see a clear next step rather than a
  single link.
- Ask the community whether a lightweight mentoring or buddy arrangement exists
  or could be offered for first-time contributors, and document it on the
  Contributing page if so; the help-wanted guide already promises "extra
  assistance" on `good first issue` items, so state how to request it.
- Repeat the "Getting help" links from the Welcome page in CONTRIBUTING.md and
  on the Contributing page so contributors do not have to navigate back to the
  home page to find a channel.

### Project governance documentation

- Add a "Governance" section to the kubevirt.io Community page that states in
  two or three sentences how KubeVirt is governed (CNCF incubating project,
  maintainer group, SIGs and working groups, lazy consensus with maintainer
  votes) and links `GOVERNANCE.md`, `MAINTAINERS.md`, `membership_policy.md`,
  and `sig-list.md`.
- Expand the "Important community resources" list on the user guide's
  Contributing page so each governance link has a one-sentence description of
  what the reader will find, and add the maintainers list and SIG list to it.
- Add a short "How the project is run" paragraph to the Contributing page, above
  the resource list, that names the maintainer group, explains that work is
  organized in SIGs, and states that decisions default to lazy consensus, so a
  newcomer understands the structure before following the links.
- Ask the maintainers to confirm that every SIG charter includes a "Meeting
  Mechanics" section like SIG Storage's, and that `sigs.yaml` records each SIG's
  meeting cadence and Slack channel, so the generated SIG list can serve as the
  single place to find how to participate in each group.

## Website & infrastructure

KubeVirt is an **incubating** project of CNCF. This means that the project
should be developing professional-quality documentation alongside the project
code.

| Criterion                                   | Rating (1-5)                   |
| ------------------------------------------- | ------------------------------ |
| Single-source for all files                 | 2 - Needs improvement          |
| Meets min website req. (for maturity level) | 3 - Meets standards            |
| Usability, accessibility, and design        | 3 - Meets standards            |
| Branding and design                         | 4 - Meets or exceeds standards |
| Case studies/social proof                   | 3 - Meets standards            |
| SEO, Analytics, and site-local search       | 2 - Needs improvement          |
| Maintenance planning                        | 3 - Meets standards            |

Other Metrics:

| Criterion                                   | Rating (1-5)                   |
| ------------------------------------------- | ------------------------------ |
| A11y plan & implementation                  | 3 - Meets standards            |
| Mobile-first plan & implementation          | 3 - Meets standards            |
| HTTPS access & HTTP redirect                | 4 - Meets or exceeds standards |
| Google Analytics 4 for production only      | 1 - Not present                |
| Indexing allowed for production server only | 3 - Meets standards            |
| Intra-site / local search                   | 4 - Meets or exceeds standards |
| Account custodians are documented           | 1 - Not present                |

The KubeVirt web presence rests on a sound foundation. The user guide runs on
MkDocs Material, which supplies responsive layout, keyboard, screen-readers,
full-text search, dark mode, and sitemaps with little project effort, and a Prow
pipeline republishes both sites to GitHub Pages over HTTPS within a minute or
two of merge. Branding is applied once at the theme level and stays consistent
across roughly one hundred pages, the main website footer is a model of CNCF
compliance for an incubating project, and the project has real adoption evidence
in its adopters list, CNCF case studies, Summit recordings, and blog. Most of
what a reader needs is present; the shortfalls are in measurement, connection,
and stewardship rather than in the platform.

The most consequential gap is that the user guide is invisible to the project.
It carries no analytics at all, so maintainers cannot see which pages are read,
which searches fail, or which inbound links break, and the main site's Adobe
Analytics tag runs on previews as well as production. The same blind spot
appears in governance: nobody is documented as custodian of the analytics,
Netlify, Search Console, DNS, or GitHub Pages accounts, the community
`sig/documentation` entry has no chairs or members, and commit history shows
both repositories leaning on one active documentation maintainer. Instrumenting
the guide and writing down who owns the infrastructure are low-effort changes
that would unblock every other improvement in this section.

The second recurring theme, and the one that drives the two lowest ratings, is
that KubeVirt's web properties do not act as one. Pages under `kubevirt.io` are
built from three repositories with no submodule linkage, user-facing content
also sits in the `docs/` directories of the core and CDI repositories, and no
README explains which content belongs where. The guide and `kubevirt.io` use
different static-site generators, logo variants, typefaces, and header
treatments; neither site's search covers the other; and the guide's header,
footer, and landing page contain no link to adopters, case studies, talks, the
blog, or `kubevirt.io` itself. The guide's footer also omits the copyright, CNCF
affiliation, and trademark links the main site carries, so a documentation
reader sees no visible connection to CNCF. A shared header and footer, a
documented content boundary, cross-links from the guide's landing page, and a
`robots.txt` that lists both sitemaps would close most of this gap.

Finally, a handful of small defects affect every page and are each a one-line
fix: white-on-teal header text at roughly 2.6:1 contrast fails WCAG AA,
`robots.txt` references a malformed sitemap URL, `netlify.toml` contains a dead
`sed` step and unpinned dependencies, the main site's copyright line lacks the ©
symbol, and production responses lack an HSTS header. Content-side accessibility
issues (an ASCII-art architecture diagram with no text alternative, `$`-prefixed
code blocks, and 500-plus-line pages) belong with the content-maintainability
work rather than infrastructure. The branding implementation, the automated
publish pipeline, and the main website footer are strong enough to cite as
examples for other projects.

### Single-source requirement

Source files for _all website pages_ should reside in a single repo. Among other
problems, keeping source files in two places:

- confuses contributors
- requires you to keep two sources in sync
- increases the likelihood of errors
- makes it more complicated to generate the documentation from source files

Ideally, all website files should be in the website repo itself. Alternatively,
files should be brought into the website repo through git submodules.

If a project chooses to keep source files in multiple repos, they need a clearly
documented strategy for managing mirrored files and new contributions. We
evaluate on the following:

- Does the project have a single source for its documentation? If not, is there
  a reason?

  No. Pages served under the `kubevirt.io` domain come from at least three
  repositories, none of which pulls the others in as a Git submodule. The main
  website (`kubevirt.io`, including the blog, labs, adopters, and community
  pages) is a Jekyll site built from `kubevirt/kubevirt.github.io`. The user
  guide (`kubevirt.io/user-guide`) is an MkDocs site built from
  `kubevirt/user-guide`. The API reference (`kubevirt.github.io/api-reference`)
  is generated into `kubevirt/api-reference` from the code in
  `kubevirt/kubevirt`. Each repository is published independently by its own
  Prow post submit job to its own `gh-pages` branch, and the website's
  `pages/docs.md` is a one-line stub that simply links to the user guide.

  User-facing documentation is also spread across code repositories. The `docs/`
  directory of `kubevirt/kubevirt` contains about sixty files, including
  `architecture.md`, `cloud-init.md`, and `getting-started.md`, several of which
  cover topics the user guide also covers, and the user guide links out to
  `kubevirt/kubevirt/docs/getting-started.md` in three places. Containerized
  Data Importer documentation lives in the `doc/` directory of
  `kubevirt/containerized-data-importer` (about forty files), and the user guide
  links to it from six pages. Contributor and governance documentation lives in
  `kubevirt/community`. A reader therefore encounters KubeVirt documentation on
  GitHub in four repositories in addition to the two rendered websites.

  There is a practical reason for the main split, but it is not written down.
  The website and the user guide use different static-site generators (Jekyll
  and MkDocs), have different maintainers listed in their `OWNERS` files, and
  target different audiences (marketing and community versus operators and
  users), so keeping them in separate repositories avoids coupling their
  toolchains. Within the user guide itself, sourcing is clean: all content is
  Markdown under `docs/`, navigation is declared in `.nav.yml` files, and
  redirects are declared in `mkdocs.yml`. Neither repository's README or
  contributing guide explains the division of content between the website, the
  user guide, and the code repositories' `docs/` directories, so contributors
  have to infer where a new page belongs.

Strengths:

- The user guide keeps all of its content in one `docs/` tree with declarative
  navigation and redirects.
- Each repository has one clear publish path, so there is no duplicate
  deployment of the same content.
- The website's docs page defers to the user guide rather than hosting a
  parallel copy.

Weaknesses:

- Website, user guide, and API reference are three repositories with no
  submodule or other mechanism tying them together.
- The `kubevirt/kubevirt/docs` directory holds about sixty files that overlap
  with user guide topics, and the guide links into it for getting-started
  content.
- CDI documentation lives in the CDI repository, and the guide links to it from
  six pages.
- No README or contributing guide explains which content belongs in which
  repository, or why the split exists.

Rating: 2 - Needs improvement

### Website requirements

Listed here are the minimal website requirements for projects based on their
maturity level, either incubating or graduated. These are the only two levels
for which a tech docs analysis can be requested. We evaluate on the following:

<!-- markdownlint-disable line-length -->

| Criterion                     | Incubating Requirement                           | Graduated Requirement                     |
| ----------------------------- | ------------------------------------------------ | ----------------------------------------- |
| **Website guidelines**        | All guidelines satisfied                         | All guidelines satisfied                  |
| **Docs analysis** (this)      | Requested through CNCF service desk              | All follow-up actions addressed           |
| **Project doc**: stakeholders | Roles identified and doc needs documented        | All stakeholder need identified           |
| **Project doc**: hosting      | Hosted directly                                  | Hosted directly                           |
| **Project doc**: user docs    | Comprehensive, addressing most stakeholder needs | Fully addresses needs of key stakeholders |

<!-- markdownlint-enable line-length -->

- Are most of the applicable CNCF Website Guidelines satisfied? See
  https://github.com/cncf/techdocs/blob/main/docs/website-guidelines-checklist.md

  Yes for the main website, and only partly for the user guide. KubeVirt is a
  CNCF incubating project, so the "developing" standard applies. Taking the
  checklist items in order:
  1. Open source repository. Both sites are hosted in the `kubevirt` GitHub
     organization alongside the main project: the website in
     `kubevirt/kubevirt.github.io` and the user guide in `kubevirt/user-guide`.
     Both repositories run the DCO check on every pull request (it appears as a
     required `dco` status alongside `tide` and the Netlify preview), and the
     user guide README explains how to sign commits.

  2. Origin company. The homepage does not refer to Red Hat as the originator;
     Red Hat appears only as one logo among the alphabetized End Users and
     Vendors lists.

  3. Enterprise support leads. There are no lead-capture links or forms on
     either site; the only forms are the search boxes and the user guide's
     color-scheme toggle. The homepage has a Vendors section of eighteen logos,
     sorted alphabetically, populated from `ADOPTERS.md` through a documented
     process, which serves as the vetting step.

  4. Vendor links. Several vendor logos link to pages that describe the vendor's
     KubeVirt offering (Kubermatic, Platform9, Spectro Cloud, KubeSphere), but
     others link to the vendor's generic corporate homepage (Microsoft, Oracle,
     SUSE, Red Hat, NCR Voyix, TrueFullstaq), which does not mention KubeVirt
     support.

  5. Copyright notice. The main website footer reads "Copyright KubeVirt a
     Series of LF Projects, LLC", which is the wording the checklist specifies
     for projects converted to the Series LLC model, though it omits the ©
     symbol. The user guide footer contains only "Made with Material for MkDocs"
     and no copyright notice; `mkdocs.yml` sets no `copyright` value.

  6. CNCF branding. The main website footer states "We are a Cloud Native
     Computing Foundation incubating project", which matches the project's
     current maturity level, and displays the CNCF color logo linked to
     `cncf.io`. The user guide has no CNCF statement or logo anywhere on the
     page.

  7. Footer trademark and policy links. The main website footer links to
     `https://lfprojects.org/policies/` "for website terms of use, trademark
     policy and other project policies", which satisfies the
     trademark-guidelines requirement through a terms page. The user guide
     footer has no trademark or policy link.

  Community and license files. Both repositories have a `LICENSE` file. The user
  guide has a `CONTRIBUTING.md`; the website repository has none, though its
  README covers contributing in detail. Neither repository has a
  `CODE_OF_CONDUCT.md` in its root; GitHub applies the organization-wide default
  from the `kubevirt/.github` repository, so the code of conduct is visible on
  the repository page but is not a file in the repository as the checklist asks.

Strengths:

- Both sites hosted in the `kubevirt` organization with DCO enforced on every
  pull request.
- Main website footer includes the correct maturity statement, Series LLC
  copyright, CNCF logo, and LF Projects policies link.
- No origin-company references or enterprise lead capture; vendor list is
  alphabetized and sourced from `ADOPTERS.md`.
- `LICENSE` present in both repositories and `CONTRIBUTING.md` in the user
  guide.

Weaknesses:

- User guide footer has no copyright, CNCF branding, or trademark link.
- Several vendor logos link to corporate homepages rather than KubeVirt support
  pages.
- No root `CODE_OF_CONDUCT.md` in either repository; no `CONTRIBUTING.md` in the
  website repository.
- Main website copyright line omits the © symbol.

Rating: 3 - Meets standards

### Usability, accessibility and devices

Most CNCF websites are accessed from mobile and other non-desktop devices at
least 10-20% of the time. Planning for this early in your website's design will
be much less effort than retrofitting a desktop-first design. We evaluate on the
following:

- Is the website usable from mobile?

  Yes. The user guide uses mkdocs-material, which is responsive by default, and
  every page carries a `width=device-width, initial-scale=1` viewport meta tag.
  On narrow screens the header collapses to a hamburger drawer that contains the
  section navigation, the page's table of contents, and the search entry point,
  and the footer offers previous and next page links. A light and dark color
  scheme toggle is available.

  Two content patterns reduce mobile usability. The site's `extra.css` sets
  `.md-typeset table:not([class])` to `display: table; width: max-content`,
  which forces wide tables such as the Arm64 feature-gate and device status
  pages to their natural width. Whether they remain horizontally scrollable
  depends on Material's JavaScript table wrapper; this needs verification on a
  device. Separately, 531 non-table lines in the source exceed 140 characters,
  most of them single-line commands and YAML in code blocks, which require
  horizontal scrolling on phones. The 3,000-line Release Notes page is a single
  document and is slow to load and scroll on mobile.

- Are doc pages readable?

  Yes, in the main. Material's typography, line length, and spacing are used
  unmodified apart from a slightly larger, teal-colored section label in the
  sidebar on wide screens and a light border on inline code. Pages use a single
  `h1` and a sensible heading hierarchy (`h2` through `h5` on Live Migration),
  admonitions are used for notes and warnings on newer pages, and footnotes and
  permalinks are enabled.

  Readability varies with page age. Older pages such as Installation, Lifecycle,
  and Disks and Volumes present commands as indented blocks with `$` prompts and
  mix command and output in one block, which is harder to scan than the fenced,
  language-tagged blocks on newer pages. The Architecture page conveys its
  central "stack" diagram as ASCII art in a preformatted block, and several long
  pages (Live Migration at 500 lines, Disks and Volumes at over 1,300 lines,
  Interfaces and Networks at about 700 lines) have no in-page summary or
  grouping beyond the table of contents.

- Are all / most website features accessible from mobile -- such as the top-nav,
  site search and in-page table of contents?

  Yes. Material moves the top-level tabs into the drawer on mobile, the search
  icon opens a full-screen search overlay, and the in-page table of contents
  appears inside the drawer under the current page. The Welcome, Architecture,
  Quickstarts, Release Notes, and Contributing pages hide the navigation sidebar
  via front matter (`hide: navigation`), so on those pages the drawer shows only
  the table of contents; the section list on the Welcome page is prose rather
  than links, so a mobile reader must open the drawer to move into a section.

- Are color contrasts significant enough for color-impaired readers?

  Mostly, with one clear failure. The site overrides Material's teal palette
  with a custom primary color, `#0db2b6`. White text on that color, which is how
  the header bar, tabs, and site title render, has a contrast ratio of about
  2.6:1, below the WCAG AA minimum of 4.5:1 for normal text and 3:1 for large
  text. Body links use the primary color darkened to 80 percent brightness
  (about `#0a8e92`), giving roughly 3.96:1 on white, which passes for large text
  but not for normal body text. The sidebar section labels (`#00797f`, 5.2:1)
  and the accent color (`#006166`, 7.2:1) pass.

  The site does not rely on color alone. Active tabs are underlined as well as
  colored, links are distinguished by color and hover underline, and admonitions
  carry icons and titles in addition to colored borders. The dark scheme uses
  the same primary color, so the header contrast issue persists in dark mode
  while link contrast improves slightly (about 4.06:1 on the slate background).

- Are most website features usable using a keyboard only?

  Yes. Material provides a "Skip to content" link as the first focusable
  element, the search field is reachable by Tab and by the `/` or `s` shortcut,
  search results are navigable with arrow keys, and the navigation drawer, table
  of contents, tabs, color toggle, and previous and next links are standard
  focusable controls. The rendered page contains 47 `aria-label` attributes on
  controls. The site adds no custom JavaScript that would trap or hide focus.
  Code blocks have no copy button, so there is nothing to reach; enabling one
  would add a keyboard-accessible control.

- Does text-to-speech offer listeners a good experience?

  Partially. Pages declare `lang="en"`, use real headings for structure, and
  label controls with ARIA attributes, so a screen reader can announce structure
  and navigate by heading. The two images on the Windows Virtio Drivers page
  have descriptive alt text ("Choose driver", "Install driver", and so on).

  Content patterns work against listeners. The Architecture page's ASCII stack
  diagram will be read as a stream of plus signs, pipes, and tildes with no
  textual equivalent. Indented code blocks with `$` prompts are announced as
  "dollar" before each command. Long YAML manifests and `kubectl` output tables
  are read line by line with no summary of what they show. The logo image's alt
  text is "logo" rather than "KubeVirt". Wide status tables (for example the
  Arm64 feature-gate table with a status column per gate) are readable but
  tedious without a caption or summary row.

Strengths:

- Responsive mkdocs-material theme with viewport meta, mobile drawer navigation,
  full-screen search, and in-drawer table of contents.
- Skip-to-content link, search keyboard shortcuts, and ARIA-labeled controls out
  of the box.
- `lang="en"`, single `h1`, and consistent heading hierarchy on pages.
- Light and dark schemes with a toggle; active tabs underlined as well as
  colored.
- Descriptive alt text on the Windows driver screenshots.

Weaknesses:

- Header and tab text on the custom teal primary color fails WCAG AA (about
  2.6:1); body links are borderline (about 4:1).
- The Architecture stack diagram is ASCII art with no text alternative.
- Older pages use `$`-prefixed indented code blocks mixed with output.
- Very long pages (Disks and Volumes, Interfaces and Networks, Live Migration,
  Release Notes) with no internal grouping.
- Wide tables and 500-plus long code lines require horizontal scrolling on
  mobile; the `max-content` table override needs device verification.
- Logo alt text is "logo" rather than the project name; no code copy button.

Rating: 3 - Meets standards

### Branding and design

CNCF seeks to support enterprise-ready open source software. A key aspect of
this is branding and marketing. We evaluate on the following:

- Is there an easily recognizable brand for the project (logo + color scheme)
  clearly identifiable?

  Yes. The KubeVirt user guide displays the project's teal heptagon logo
  (`docs/assets/KubeVirt_icon.png`) in the site header and uses it for the
  favicon (`favicon32x32.png`). The `mkdocs.yml` theme configuration selects the
  Material `teal` palette for both the light and dark color schemes, and
  `docs/stylesheets/extra.css` pins the primary color to `#0db2b6` and the
  accent color to `#006166`. Navigation section labels in the sidebar use a
  third brand tone, `#00797f`.

  The colors come from the same family the main `kubevirt.io` website defines in
  `_sass/_colors.scss` as `$kv-color--green-300` through `$kv-color--green-700`
  (for example, `#00797f` and `#006166`). The logo mark itself is distinctive
  and is the only mark used in the guide's chrome, so a reader landing on any
  page can identify the site as KubeVirt immediately.

- Is the brand used across the website consistently?

  Yes, within the user guide. Logo, favicon, and palette are set once at the
  theme level, so every page renders the same header, colors, and active-tab
  underline without any per-page effort from authors. The dark scheme reuses the
  same teal primary and accent values, so switching modes keeps the brand
  intact.

  Consistency across the project's two web properties is partial. The main
  `kubevirt.io` site is a Jekyll and Bootstrap site that uses the horizontal
  wordmark `KubeVirt_logo_color.svg`, the Open Sans typeface, and a fully
  documented SCSS color scale, while the user guide uses the square icon-only
  mark, Roboto, and three hand-copied hex values. The two sites share the color
  family and logo mark but differ in logo variant, typography, header layout,
  and footer, so the transition between them is noticeable. The user guide's
  `mkdocs.yml` defines no `extra.social` links or `copyright` footer, and the
  `docs/assets` directory still contains legacy assets from a previous site
  generator (`asciibinder-logo-horizontal.png`, `asciibinder_web_logo.svg`,
  `book_pages_bg.jpg`) that are not referenced by any page.

- Is the website's typography clean and well-suited for reading?

  Yes. The guide does not override the Material theme fonts, so it inherits
  Roboto for body text and Roboto Mono for code, loaded from Google Fonts.
  Headings, body copy, admonitions, tables, and syntax-highlighted code blocks
  all use these two faces at Material's default sizes and line heights, which
  are tuned for long-form technical reading. Inline code receives a light `1px`
  border from `extra.css`, which helps distinguish identifiers from prose.

  Two custom rules affect readability.
  `.md-nav a, .md-typeset a { filter: brightness(80%); }` darkens all link text,
  including links inside the dark scheme, and its effect on contrast has not
  been verified. `.md-typeset table:not([class]) { width: max-content; }` lets
  wide tables extend past the content column and rely on horizontal scrolling,
  which is useful for the many API-field tables but can crowd narrow view ports.
  Typography differs from the main site, which uses Open Sans at a 16px base.

Strengths:

- Distinctive logo mark and brand colors applied at the theme level, so branding
  is uniform on every page.
- Light and dark schemes share the same brand palette.
- Default Material typography (Roboto and Roboto Mono) is legible and
  consistently applied to prose, tables, and code.
- Brand colors match the color family the main website defines, so the two
  properties feel related.

Weaknesses:

- The user guide and `kubevirt.io` use different logo variants, typefaces, and
  header and footer treatments, with no shared brand definition to keep them
  aligned.
- The guide's header and footer contain no link back to `kubevirt.io` or to the
  project's community channels.
- The `filter: brightness(80%)` link rule and the `max-content` table rule have
  not been checked for contrast and small-viewport behavior.
- Legacy logos and a background image remain in `docs/assets` without being
  used.

Rating: 4 - Meets or exceeds standards

### Case studies/social proof

One of the best ways to advertise an open source project is to show other
organizations using it. We evaluate on the following:

- Are there case studies available for the project and are they documented on
  the website?

  Partially. Two CNCF-published end-user case studies feature KubeVirt: NTT
  Docomo Business and Swisscom, both at `cncf.io/case-studies`. Neither the
  `kubevirt.io` website nor the user guide links to them, so a visitor to either
  property has no way to discover them. The `kubevirt.io` landing page and the
  `ADOPTERS.md` file in the `kubevirt/kubevirt` repository also invite
  contributors to submit "blog posts, case studies, or labs", and the user
  guide's `contributing.md` repeats that invitation, but the website has no
  case-study section or category and no blog post is tagged or titled as a case
  study.

  The closest thing to project-hosted case studies is the `ADOPTERS.md` table,
  which lists roughly 44 organizations across three types (End-user,
  Integration, Vendor) with a "Since" year and a one- to three-sentence
  "Use-Case" column. Several entries, such as Cloudflare, CoreWeave, NVIDIA, SK
  Telecom, and S3NS, describe concrete production uses. This text is only in the
  GitHub repository; the website reads the same organizations from
  `_data/adopters.yml` but renders only logos and links, dropping the use-case
  descriptions.

- Are there user testimonials available?

  No, not in the form of attributed quotes on the website. The "Use-Case"
  statements in `ADOPTERS.md` are written by the adopters in the first person
  ("We use KubeVirt as part of our ...") and function as informal testimonials,
  but they are not surfaced on `kubevirt.io` or in the user guide. The website's
  Interviews video playlist contains community and contributor interviews rather
  than customer testimonials.

- Is there an active project blog?

  Yes, at `kubevirt.io/blogs`, with about 106 posts plus 24 "This Week in
  KubeVirt" digests and a set of release announcements. Cadence has slowed
  markedly: 24 to 25 posts per year in 2018 and 2019, 20 in 2020, 6 to 8 per
  year from 2021 to 2023, 2 in 2024, 6 in 2025, and 3 so far in 2026 (most
  recently September 2026). Recent posts are substantive (the v1.8 release, beta
  features on by default in v1.9, a security audit announcement, cross-cluster
  live migration networking). Categorization is thin: 92 posts are in the `news`
  category, 12 in `uncategorized`, and tags are used inconsistently, so there is
  no way to filter for adoption or user-story content.

- Are there community talks for the project and are they present on the website?

  Yes. The `kubevirt.io/videos` section has pages for Talks, Demos, Interviews,
  KubeVirt Summit, and Weekly Meetings, each embedding a curated YouTube
  playlist. The Summit page links per-year playlists for five past editions and
  advertises the sixth annual KubeVirt Summit in October 2The following
  recommendations address the SEO Analytics and Site Search of the KubeVirt user
  guide.026 with its CfP dates. The Talks page also points to the community
  Events wiki for upcoming CfPs and conference sessions. The user guide's
  `contributing.md` links only to the New Contributor session recording; nothing
  in the user guide points to the talks, demos, or Summit content.

- Is there a logo wall of users/participating organizations?

  Yes. The `kubevirt.io` landing page renders three logo walls ("End Users",
  "Vendors", and "Integrations") from `_data/adopters.yml`, which is generated
  by `adopters.py` and kept in sync with `ADOPTERS.md` through a documented
  two-step PR process. Each logo links to the organization's site and shows the
  name in a tooltip. The wall shows who uses KubeVirt but not how or why,
  because the use-case text is not carried over. The user guide does not display
  or link to the logo wall.

Strengths:

- Curated adopters list with a "Since" year and first-person use-case text for
  roughly 44 organizations, including major production users.
- Three-category logo wall on the landing page, kept in sync with `ADOPTERS.md`
  through a documented process.
- Video section with separate Talks, Demos, Interviews, Summit, and Weekly
  Meetings playlists, plus an annual Summit with a public CfP.
- Blog posts remain technically substantive when published.

Weaknesses:

- Two CNCF case studies featuring KubeVirt are not linked from `kubevirt.io` or
  the user guide.
- Adopter use-case statements are dropped when the adopters list is rendered as
  a logo wall.
- No attributed testimonials, case-study page, or blog category for user
  stories.
- Blog cadence has declined sharply since 2020 and categorization is nearly
  flat.
- The user guide does not link to adopters, case studies, talks, or the blog.

Rating: 3 - Meets standards

### SEO, Analytics and site-local search

SEO helps users find your project and it's documentation, and analytics helps
you monitor site traffic and diagnose issues like page 404s. Intra-site search,
while optional, can offer your readers a site-focused search results. We
evaluate on the following:

- Is analytics enabled for the production server?

  Partially. The main website (kubevirt.io, built from the kubevirt.github.io
  repository) loads Adobe Analytics through a Red Hat–hosted tag script
  (`//www.redhat.com/ma/dpal.js`) in `_includes/head.html`, so page views on the
  main site are collected. The user guide (kubevirt.io/user-guide, built from
  this repository with MkDocs) has no analytics of any kind: `mkdocs.yml`
  contains no `extra.analytics` block, and the rendered pages load only the
  Material theme bundle. The main site also carries a `google-site-verification`
  meta tag, indicating that Google Search Console is set up for the domain.

- Is analytics disabled for all other deploys?

  No for the main site; not applicable for the user guide. The Adobe Analytics
  script is included unconditionally in the main site's `head.html`, with no
  check on the Jekyll environment or the Netlify deploy context, so it also runs
  on Netlify deploy previews and local builds. The user guide has no analytics
  in any deploy, including the Netlify production alias
  (`kubevirt-user-guide.netlify.app`) and pull-request previews.

- If project is using Google Analytics, has it migrated to GA4?

  Not applicable. The project uses Adobe Analytics rather than Google Analytics,
  so there is no Universal Analytics property to migrate. No `G-` or `UA-`
  measurement ID appears in either repository or in the rendered pages.

- Can Page-not-found (404) reports easily be generated from site analytics?

  Not for the user guide, because it has no analytics; broken inbound links to
  the user guide are invisible. Both sites do serve proper 404 responses (the
  user guide returns HTTP 404 with the Material theme's not-found page, and the
  main site has a custom `404.html`), so a 404 report would be possible if
  page-level analytics were collecting the URL. For the main site, whether a 404
  report is available depends on the Adobe Analytics workspace that Red Hat
  administers, and nothing in the repositories documents how to obtain one.

- Is site indexing supported for the production server, while disabled for
  website previews and builds for non-default branches?

  Indexing is supported in production. The main site generates a sitemap with
  `jekyll-sitemap`, and MkDocs generates
  `https://kubevirt.io/user-guide/sitemap.xml`, which resolves with HTTP 200.
  Each user-guide page sets a canonical link to
  `https://kubevirt.io/user-guide/...` because `site_url` is set in
  `mkdocs.yml`, and the canonical is preserved on the Netlify alias, which
  steers search engines to the production URL. The `robots.txt` at kubevirt.io
  contains only a Sitemap directive (with a stray double slash,
  `https://kubevirt.io//sitemap.xml`) and does not reference the user guide
  sitemap. Neither repository sets a `noindex` meta tag or `X-Robots-Tag` header
  for previews; the project relies on Netlify's default behavior of marking
  deploy-preview URLs as `noindex`. The `netlify.toml` in this repository still
  runs a `sed` command that rewrites `site_url: https://kubevirt.io/docs`, a
  value that no longer exists in `mkdocs.yml`, so that step is a no-op.

- Is local intra-site search available from the website?

  Yes for the user guide, and only partially for the main site. The user guide
  enables the MkDocs Material `search` plugin with a custom token separator, and
  the search box appears in the header on every page. The main site has a
  `search.html` page backed by lunr.js, but its index is built only from
  `site.posts`, so it covers blog posts and not the main site's other pages.
  Neither search covers the other site; a user-guide search does not surface
  blog or main-site content, and the main-site search does not surface
  user-guide pages.

- Are the current custodian(s) of the analytics accounts (such as Google CSE)
  documented?

  No. Neither repository documents who administers the Adobe Analytics property,
  the Netlify sites (`kubevirt-user-guide` and the main site), or the Google
  Search Console verification. The `OWNERS` and `OWNERS_ALIASES` files list code
  approvers and reviewers only, and the README mentions the Netlify Open Source
  plan without naming an account owner. Because the analytics script is served
  from redhat.com, access to the data appears to be held by Red Hat staff rather
  than by the project, and that dependency is not recorded anywhere.

Strengths:

- Full-text local search in the user guide, with a tuned separator for technical
  tokens.
- Sitemaps for both sites and correct canonical links on user-guide pages.
- Google Search Console verification on the production domain.
- Proper HTTP 404 responses and custom not-found pages on both sites.

Weaknesses:

- No analytics on the user guide, so page-level usage and 404 data for
  documentation are unavailable.
- Main-site analytics run on previews and local builds as well as production.
- Main-site search indexes blog posts only, and there is no cross-site search.
- The `robots.txt` on kubevirt.io references a malformed sitemap URL and omits
  the user-guide sitemap.
- Custodians of the analytics, Netlify, and Search Console accounts are not
  documented.

Rating: 2 - Needs improvement

### Maintenance planning

Website maintenance is an important part of project success, especially when
project maintainers aren’t web developers. We evaluate on the following:

- Is the website tooling well supported by the community (i.e., Hugo with the
  Docsy theme) or commonly used by CNCF projects?

  Yes. The user guide is built with MkDocs and the Material for MkDocs theme,
  plus the `mkdocs-awesome-nav` and `mkdocs-redirects` plugins. All four are
  actively maintained, widely used open-source projects, and MkDocs Material in
  particular is common among CNCF and Kubernetes-ecosystem projects. The main
  website (kubevirt.io) is a Jekyll site with a hand-built Bootstrap 4 layout
  and a dozen Jekyll plugins; Jekyll is mature and well supported but is less
  common among CNCF projects than Hugo or Docusaurus, and the custom theme means
  design changes fall entirely on the project. The two sites use different
  static-site generators, so maintainers need to know both toolchains.

- Is there active cultivating website maintainers from within the community?

  Only informally. Both repositories have `OWNERS` files with active reviewer
  and approver lists, and the main website's `OWNERS` file records emeritus
  approvers with dates, which shows the roster is periodically pruned. The
  website README explicitly invites UI/UX developers to pick up `kind/website`
  issues, and the user guide README says contributions are welcome. However,
  there is no documented path from contributor to website maintainer, and the
  community `sig-list.md` shows a `sig/documentation` label with no chairs or
  members. Commit history over the past year shows one person as the top human
  committer in both repositories, with most other contributions coming from
  feature authors documenting their own work or from Dependabot.

- Are site build times reasonable?

  Yes. Both sites are built by a Prow post submit job that runs `make build` and
  pushes the output to a `gh-pages` branch served by GitHub Pages. Comparing
  commit timestamps on `main` with the corresponding post submit site update
  commits on `gh-pages` shows the user guide is republished within about 40
  seconds of a merge and the main website within about 90 seconds. Pull-request
  previews for the user guide build on Netlify from a pinned `netlify.toml`
  command that installs MkDocs with `pip` on every build. The `netlify.toml`
  still contains a `sed` step that targets an obsolete `site_url` value and does
  nothing, which is harmless but suggests the file has not been reviewed
  recently.

- Do site maintainers have adequate permissions?

  Partly documented. Merging is governed by Prow and the `OWNERS` files, so
  approvers can land content changes without additional access. Deployment is
  fully automated through the `kubevirt-bot` account, which pushes to
  `gh-pages`, so no maintainer needs push rights to the published branch. Access
  to the supporting services is not documented: nothing in either repository
  states who can administer the Netlify site (`kubevirt-user-guide`), the GitHub
  Pages and custom-domain settings, DNS for kubevirt.io, or the Prow job
  definitions in `kubevirt/project-infra`. Whether current approvers hold those
  permissions cannot be determined from the repositories.

- Is the website accessible via HTTPS?

  Yes. Both `https://kubevirt.io/` and `https://kubevirt.io/user-guide/` are
  served over HTTPS by GitHub Pages with a valid certificate for the custom
  domain. The Netlify preview alias `https://kubevirt-user-guide.netlify.app/`
  is also served over HTTPS.

- Does HTTP access, if any, redirect to HTTPS?

  Yes. Requests to `http://kubevirt.io/`, `http://www.kubevirt.io/`, and
  `http://kubevirt.io/user-guide/` all return `301 Moved Permanently` to the
  HTTPS equivalent (with `www` also collapsing to the bare domain), and the
  Netlify alias redirects HTTP to HTTPS as well. The production responses do not
  include a `Strict-Transport-Security` header, so browsers rely on the redirect
  rather than HSTS to enforce HTTPS on repeat visits.

Strengths:

- MkDocs Material for the user guide is well supported and common among CNCF
  projects.
- Fully automated publish pipeline: merge to `main` triggers a Prow job that
  pushes to `gh-pages` in roughly 40 to 90 seconds.
- HTTPS everywhere, with HTTP and `www` redirecting to the canonical HTTPS
  domain.
- `OWNERS` files are maintained, including dated emeritus entries on the website
  repository.
- Netlify pull-request previews and a periodic Prow link checker catch problems
  before and after publish.

Weaknesses:

- Two different static-site generators and a custom Jekyll theme double the
  maintenance surface.
- No documented path for cultivating website maintainers; the
  `sig/documentation` entry in the community SIG list is empty.
- Heavy reliance on one active documentation maintainer across both
  repositories.
- Administrative access to Netlify, DNS, GitHub Pages, and Prow job definitions
  is undocumented.
- No `Strict-Transport-Security` header on production responses.

Rating: 3 - Meets standards

## Website & infrastructure recommendations

### Single-source requirement

- Document the content boundary. Add a short "Where documentation lives" section
  to the README of `kubevirt/user-guide`, `kubevirt/kubevirt.github.io`, and
  `kubevirt/kubevirt` stating that user and operator documentation belongs in
  the user guide, marketing, blog, and community content belongs on the website,
  and `kubevirt/kubevirt/docs` is for design and developer notes only. Link to
  it from `docs/contributing.md` in the user guide.
- Audit `kubevirt/kubevirt/docs` for user-facing content. Start with the files
  the user guide already links to (`getting-started.md`, `architecture.md`,
  `cloud-init.md`), move the user-facing portions into the guide, and replace
  the originals with a one-line pointer so search results and old links still
  resolve.
- Do the same triage for the CDI `doc/` directory: move the pages the user guide
  links to from six storage pages into the guide's `storage/` section, or add a
  clear "CDI reference documentation" page in the guide that explains why the
  rest remains in the CDI repository.
- Decide whether the website and user guide should share a repository, and
  record the decision. If they stay separate, note the reason (different
  generators, maintainers, and audiences) in both READMEs. If the project later
  converges the two toolchains, as suggested in the maintenance-planning
  recommendations, move the website pages into the user-guide repository or
  bring the guide into the website repository as a Git submodule.
- Give the API reference a visible home in the user guide by adding a navigation
  entry or landing page that links to `kubevirt.github.io/api-reference`, so
  readers do not need to know it is published from a separate repository.

### Website requirements

- Bring the user guide footer into compliance. Set
  `copyright: "Copyright © KubeVirt a Series of LF Projects, LLC"` in
  `mkdocs.yml`, and add an `overrides/partials/copyright.html` (or a
  `footer.html` override) that appends "We are a Cloud Native Computing
  Foundation incubating project", the CNCF logo linked to `cncf.io`, and a link
  to `https://lfprojects.org/policies/` for trademark and terms. Match the
  wording and links used in the main website footer so the two properties read
  as one.
- Add the © symbol to the main website copyright line in `_includes/footer.html`
  so it reads "Copyright © KubeVirt a Series of LF Projects, LLC".
- Point vendor logos at KubeVirt-specific pages. For each entry in `ADOPTERS.md`
  whose link is a corporate homepage, ask the vendor for a URL that mentions
  KubeVirt support or their KubeVirt-based product, and update the link; drop
  the logo from the Vendors section if none exists.
- Add a root `CODE_OF_CONDUCT.md` to both `kubevirt/user-guide` and
  `kubevirt/kubevirt.github.io` that links to the `kubevirt/community` code of
  conduct, so the file is present where the checklist expects it rather than
  only inherited from the organization default.
- Add a `CONTRIBUTING.md` to `kubevirt/kubevirt.github.io` that points to the
  existing contributing content in its README and to the user guide's
  contributing page.
- Update the maturity statement in both footers when the project's CNCF status
  changes, and add a note in each repository's README naming the file to edit so
  the statement does not go stale.

### Usability, accessibility and devices

- Fix the header and link contrast in `docs/stylesheets/extra.css`. Darken
  `--md-primary-fg-color` to a teal that gives at least 4.5:1 against white (for
  example `#007a7e` or darker), or keep the brand teal for decorative elements
  only and set the header and tab text to a dark foreground. Check links against
  the same 4.5:1 target and remove the `filter: brightness(80%)` hack in favor
  of an explicit color. Verify both light and dark schemes with a contrast
  checker.
- Replace the ASCII stack diagram on the Architecture page with an image that
  has descriptive alt text or, better, a Mermaid diagram (enable
  `pymdownx.superfences` custom fences for `mermaid` in `mkdocs.yml`)
  accompanied by a one-paragraph prose description of the layers, so screen
  reader users and mobile readers get the same information.
- Convert `$`-prefixed indented code blocks to fenced blocks with a language tag
  and no prompt, and separate output into its own block. Start with the pages on
  the new-user path (Installation, Lifecycle, `virtctl`) and the longest
  reference pages (Disks and Volumes, Export API). This helps screen readers,
  copy-paste, and mobile scrolling at once.
- Enable `content.code.copy` in `theme.features` so long commands can be copied
  without horizontal scrolling, and break commands over 100 characters across
  lines with `\` continuations in the source.
- Verify on a phone that tables on the Arm64 feature-gate and device status
  pages scroll horizontally rather than overflowing the page; if they overflow,
  remove the `display: table; width: max-content` override from `extra.css` or
  scope it to specific tables with `attr_list` classes.
- Split or restructure pages over about 500 lines. Candidates are Disks and
  Volumes (split by volume type), Interfaces and Networks (split binding methods
  from network attachment), and Live Migration (move migration strategies and
  network configuration to sub-pages). Split Release Notes into one page per
  minor release or paginate it, and set the Release Notes tab to open the newest
  release.
- Set the logo alt text to "KubeVirt" by adding `extra.homepage` or a custom
  `partials/logo.html` override, and add a short caption or introductory
  sentence above each wide status table stating what the table shows.
- Add an accessibility check to the Makefile and Prow pre submit, for example
  running `pa11y-ci` or Lighthouse against the built site for a sample of pages,
  so contrast regressions are caught in pull requests.

### Branding and design

- Publish a short brand reference, either in the `kubevirt.github.io` repository
  or in the `community` repository, that lists the canonical logo files (icon
  and horizontal wordmark), the hex values of the `$kv-color--green-*` scale,
  and the approved typefaces. Have `docs/stylesheets/extra.css` in the user
  guide cite that reference in a comment so the two sites stay aligned when the
  palette changes.
- Align the user guide's brand tokens with the main site's scale. Replace the ad
  hoc `#0db2b6` primary with a value from the documented scale (for example,
  `$kv-color--green-300`, `#00aab2`), or add `#0db2b6` to the scale so both
  properties draw from the same list.
- Add an `extra.social` block and a `copyright` line to `mkdocs.yml` so the
  Material footer shows the project's GitHub, Slack, and `kubevirt.io` links.
  This gives readers a visual and navigational link between the guide and the
  main site at almost no cost.
- Consider using the horizontal `KubeVirt_logo_color.svg` wordmark in the
  guide's header, or add the wordmark to the main site's header alongside the
  icon, so both properties present the same logo variant.
- Check the `filter: brightness(80%)` link rule against WCAG AA contrast in both
  the light and dark schemes. If it fails, replace the filter with explicit
  `--md-typeset-a-color` values per scheme so the link color is deliberate
  rather than derived.
- Review the `.md-typeset table:not([class]) { width: max-content; }` rule on a
  narrow viewport. If wide tables push past the content column, scope the rule
  to a class applied only to tables that need it, or wrap those tables so they
  scroll within the column.
- Remove the unused legacy assets `asciibinder-logo-horizontal.png`,
  `asciibinder_web_logo.svg`, and `book_pages_bg.jpg` from `docs/assets` so the
  repository contains only current brand assets.
- Remove the unsupported top-level `site_favicon` key from `mkdocs.yml`; MkDocs
  ignores it and the active favicon is already set under `theme.favicon`.

### Case studies/social proof

- Link the two existing CNCF case studies (NTT Docomo Business and Swisscom)
  from `kubevirt.io`, for example in a "Case Studies" block beneath the End
  Users logo wall on the landing page. This is a quick win: the content already
  exists and is published by CNCF.
- Extend `adopters.py` and `_data/adopters.yml` to carry the "Use-Case" text
  from `ADOPTERS.md`, and show it on the website as a tooltip or an expandable
  card on each logo. This turns the logo wall into a set of short, attributed
  testimonials at no authoring cost.
- Create a `/adopters/` or `/case-studies/` page on `kubevirt.io` that renders
  the full adopters table (type, name, since, use case) and links to the CNCF
  case studies, so evaluators have a single place for adoption evidence. Add it
  to `_data/site_nav_pages.yml`.
- Invite two or three adopters with strong use-case statements (for example
  Cloudflare, CoreWeave, or SK Telecom) to expand them into short blog posts or
  Summit talks, and tag those posts with a `case-study` or `user-story` category
  so they can be listed together.
- Add a blog category or tag scheme beyond `news` and `uncategorized`, and
  backfill recent posts, so the blog index can filter by release, feature,
  community, and user story.
- Set a modest publishing target for the blog, such as one post per KubeVirt
  minor release plus one community or adopter post per quarter, and track it in
  the community repository so cadence does not depend on a single author.
- In the user guide, add a short "Community and adoption" block to
  `docs/index.md` that links to the `kubevirt.io` blog, videos, Summit, adopters
  or case-studies page, and Slack. Optionally add a top-level "Community" entry
  to `docs/.nav.yml` that opens the `kubevirt.io/community` page.
- In `docs/contributing.md`, in addition to inviting readers to submit case
  studies, link to the existing adopters list and case studies so contributors
  can see the format they are being asked to follow.

### SEO, Analytics and site-local search

- Enable analytics on the user guide. Add an `extra.analytics` block to
  `mkdocs.yml` (Material supports Google Analytics 4 natively, or use a custom
  `overrides/main.html` partial to load the same Adobe Analytics tag the main
  site uses) so documentation page views, search terms, and 404 hits are
  captured.
- Gate analytics to production only. In the main site, wrap the `dpal.js`
  include in `_includes/head.html` with a check on
  `jekyll.environment == "production"` and set `JEKYLL_ENV=production` only in
  the Netlify production context. In the user guide, inject the analytics
  snippet only when the Netlify `CONTEXT` variable equals `production`, for
  example by templating it in the `netlify.toml` build command.
- Add an explicit `noindex` for non-production deploys rather than relying on
  Netlify defaults. Emit `X-Robots-Tag: noindex` from a `_headers` file or a
  `[context.deploy-preview]` / `[context.branch-deploy]` section in each
  repository's `netlify.toml`.
- Fix `robots.txt` on kubevirt.io: correct the sitemap URL to
  `https://kubevirt.io/sitemap.xml` and add a second `Sitemap:` line for
  `https://kubevirt.io/user-guide/sitemap.xml`.
- Remove the obsolete `sed` line in this repository's `netlify.toml` that
  rewrites `site_url: https://kubevirt.io/docs`, since `mkdocs.yml` already sets
  `site_url` to `https://kubevirt.io/user-guide` and the command no longer has
  any effect.
- Extend the main site's lunr index in `_layouts/search.html` to include
  `site.pages` in addition to `site.posts` so that non-blog pages are
  searchable, and add a link from the main site's search page to the user guide
  search (or vice versa) so users can find documentation from either entry
  point.
- Document analytics custodianship. Add a short "Site infrastructure" section to
  the README of each repository (or to the SIG Docs or community repository)
  that names the owners or aliases responsible for the Adobe Analytics property,
  the Netlify sites, and Google Search Console, and describes how a maintainer
  requests access or a 404 report.
- Once analytics are in place, set up a recurring 404 report (for example, a
  saved report filtered on the not-found page title) and use it to add missing
  entries to the `redirects` plugin map in `mkdocs.yml`.

### Maintenance planning

- Document infrastructure ownership. Add a "Site infrastructure" section to the
  README of both `kubevirt/user-guide` and `kubevirt/kubevirt.github.io` (or a
  page in `kubevirt/community`) that lists who administers the Netlify site,
  GitHub Pages and custom-domain settings, DNS for kubevirt.io, and the Prow job
  definitions in `kubevirt/project-infra`, and how a maintainer requests access.
- Give documentation a formal home. Populate the `sig/documentation` entry in
  the community `sig-list.md` with chairs, a meeting cadence or async channel,
  and a charter that includes both the user guide and the website, so newcomers
  know where to volunteer and maintainers have a succession path.
- Publish a maintainer ladder. In the website and user-guide READMEs, describe
  how a contributor becomes a reviewer and then an approver (for example, a
  number of merged docs PRs and a nomination), mirroring the process in
  `kubevirt/community` for code SIGs.
- Reduce bus-factor risk by recruiting at least one additional regular website
  reviewer for each repository, using the existing `kind/website` and
  `kind/documentation` labels and a `good-first-issue` pass to seed starter
  tasks.
- Plan to converge the two toolchains. Evaluate moving the main site to MkDocs
  Material or another Hugo/Docusaurus-style generator with a supported theme so
  a single skill set covers both sites, and track the decision in an issue even
  if the migration is deferred.
- Clean up `netlify.toml` in the user-guide repository: remove the obsolete
  `sed` line that targets `site_url: https://kubevirt.io/docs`, and pin the
  MkDocs package versions (or use a `requirements.txt`) so preview builds are
  reproducible and match the Prow image.
- Add a `Strict-Transport-Security` header. GitHub Pages does not let you set
  response headers directly, so either enable HSTS through the DNS/CDN provider
  in front of kubevirt.io or, if none exists, record the limitation in the
  infrastructure section so it is a known gap.
- Periodically review `OWNERS_ALIASES` in the user-guide repository and add
  dated emeritus entries as the website repository already does, so the approver
  list reflects who is actually active.

## Related information

### References and notes

### Rating values

The numeric rating values used in this document are as follows

1. Not present
2. Needs improvement
3. Meets standards
4. Meets or exceeds standards
5. Exemplary
