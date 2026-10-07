---
title: AI Ranked Recommendations
created: 2026-09-30
modified: 2026-09-30
toc_max_heading_level: 4
author: Bruce Hamilton
---

<!-- markdownlint-disable no-duplicate-heading -->

## Project Documentation

### Recommendations

#### Information architecture

- Add a "Getting started" page that walks through the happy path on a single
  page. See the New user content recommendations for the proposed content
  placement. **2 - High priority**
- Rewrite Basic Use and Lifecycle to present VirtualMachine as the primary
  object and VirtualMachineInstance as the running instance it manages. See the
  New user content recommendations for the proposed page content. **2 - High
  priority**
- Add `cluster_admin/plugins.md` to `docs/cluster_admin/.nav.yml` so the Plugins
  page is discoverable from somewhere other than the deprecated Hook Sidecar
  page **1 - Do right away**
- Write pages, or add sections to existing pages, for v1.9 features that
  currently appear only in the release notes: the `VirtualMachineBackup` API
  (Storage), the `CrossArchitectureVirtualization` feature gate (Compute or
  Cluster Administration), masquerade `PortRanges` (Network, in Interfaces and
  Networks), and MigrationPolicy compression (Cluster Administration, in
  Migration Policies) **2 - High priority**
- Create a `virtctl` command reference page, or expand the existing `virtctl`
  page beyond installation, that lists each subcommand with a one-line
  description and a link to the feature page that explains it in context. **2 -
  High priority**
- Add a feature-gate table to the Activating and Deactivating Feature Gates page
  that lists each gate, its stage (Alpha, Beta, GA, Deprecated), the version it
  was introduced or graduated, and a link to its documentation. Ask the
  maintainers whether this table can be generated from the kubevirt/kubevirt
  source to avoid drift **4 - Evaluate and prioritize**
- Add a user-facing Troubleshooting page (separate from the developer-oriented
  Virtualization Debugging section) that lists common symptoms such as a VMI
  stuck in `Scheduling` or `Pending`, failed live migration, console or VNC
  connection errors, and missing `qemu-guest-agent` data, each with likely
  causes and links to the relevant fix. Consolidate the troubleshooting notes
  now embedded in Accessing Virtual Machines and Memory Dump there or link to
  them **2 - High priority**
- Add a brief landing page to each of the Compute, Network, and Storage sections
  that explains what the section covers and groups its pages by task (for
  example, Storage: provisioning disks, importing images, snapshots and backup,
  moving data between clusters) **3 - Put in backlog**
- Rename API-centric page titles to user goals where practical, for example
  "Clone API" to "Cloning VirtualMachines", "Export API" to "Exporting
  VirtualMachines and volumes", "Snapshot Restore API" to "Snapshotting and
  restoring VirtualMachines", and "Migration Controller" to a title that states
  what the reader accomplishes with it. Add redirects in `mkdocs.yml` if file
  names change **3 - Put in backlog**
- Reorganize the User Workloads "Workloads" sub-group so current mechanisms
  (instance types, VirtualMachine Templates, pools) come first and legacy or
  deprecated pages (presets, OpenShift Templates, Hook Sidecar) are grouped
  under a clearly labeled "Legacy" heading or moved to the end. **3 - Put in
  backlog**
- Remove or archive legacy installation content: verify with the maintainers
  whether the OKD Service Catalog APB and k3OS paths are still supported, and
  update the OpenShift 4.10 documentation links to a current version or a
  version-independent URL **4 - Evaluate and prioritize**
- Delete `docs/compute/windows_virtio_drivers.md`, which is a byte-identical
  unlisted duplicate of `docs/user_workloads/windows_virtio_drivers.md`, and add
  a redirect if the old URL was ever published **1 - Do right away**
- Move Release Notes out of the middle of the main navigation, either to the end
  of the list or into a top-bar link, so the section list reads as a progression
  from concepts through administration, workloads, and infrastructure layers.
  **1 - Do right away**

#### New user content

- Add a "Getting started" page, placed immediately after Architecture in the
  top-level navigation, that walks a new user from a working cluster to a
  running VM on one page: install KubeVirt, install `virtctl`, create a
  VirtualMachine from a provided manifest or `virtctl create vm`, start it,
  connect with `virtctl console`, and stop it. Link to the detailed pages at
  each step. Consider folding the current Quickstarts page into it as a "Try it
  in a sandbox" section **2 - High priority**
- Restructure the Installation page so the core procedure comes first:
  Requirements, the four-command operator install, verification, and the
  emulation fallback. Move AppArmor, kernel and user-land compatibility,
  SELinux, OKD, k3OS, daily developer builds, deploying from source, network
  plugins, and node placement below a "Platform-specific and advanced
  installation" heading or onto separate pages **2 - High priority**
- End the Installation page with a "Next steps" section linking to `virtctl`
  installation, Creating VirtualMachines by using virtctl, and Accessing Virtual
  Machines. **1 - Do right away**
- Remove or move to a footnote the historical notes about behavior before
  v0.20.0 and v0.34.2 on the Installation page; ask the maintainers whether any
  supported upgrade path still requires them. **4 - Evaluate and prioritize**
- Expand the `virtctl` page to cover all published client binaries. Use the
  theme's content tabs for Linux, macOS, and Windows on both amd64 and arm64,
  and include the `chmod +x` and `PATH` steps. Rename the page to "Installing
  virtctl" and move it to sit next to Installation, or link to it from
  Installation's Next steps. **2 - High priority**
- Rewrite Basic Use into a short "Your first VirtualMachine" page that presents
  VirtualMachine as the primary object and includes a complete minimal `vm.yaml`
  using a public containerDisk image, the `kubectl apply`, `virtctl start`,
  `virtctl console`, and `virtctl stop` commands, and explicit links to the next
  pages. Update Lifecycle to reference that manifest instead of the undefined
  `vmi.yaml`. **2 - High priority**
- Enable `content.code.copy` under `theme.features` in `mkdocs.yml` to add a
  copy button to every code block. **1 - Do right away**
- Convert `$`-prefixed indented code blocks to fenced `shell` blocks without
  prompt characters, and place example output in a separate block or a
  `title="Output"` annotation so commands paste cleanly. Start with the new-user
  path (Installation, `virtctl`, Basic Use, Lifecycle), then the longest
  reference pages (Disks and Volumes, Export API). This also helps screen
  readers and mobile scrolling. **3 - Put in backlog**
- Give the Quickstarts page a one-paragraph introduction that states
  prerequisites (a laptop with virtualization enabled, or a browser for
  Killercoda), the expected time, and what the reader will have at the end, and
  add a closing link to the in-guide Getting started page. **3 - Put in
  backlog**
- On the Welcome page, add a one-line "New to KubeVirt? Start here" link at the
  top that points to the Getting started page, so the first-run path is
  discoverable without reading the section list **1 - Do right away**

#### Content maintainability & site mechanics

- Document the content versioning model in CONTRIBUTING.md (and summarize it on
  the Contributing page). State what the `release-vX.Y-stable` and
  `release-vX.Y-devel` branches are for, when they are cut relative to a
  KubeVirt release, which branch is published, and how a contributor decides
  whether a change on `main` needs a cherry-pick. Ask the maintainers to confirm
  the intended workflow first, since the `-devel` branches exist for 1.7 and 1.8
  but not 1.9 **2 - High priority**
- Publish versioned documentation with a version selector, using either `mike`
  with the theme's `extra.version.provider: mike` setting or a build per release
  branch published under a `/vX.Y/` path. Publish at least the supported N, N-1,
  and N-2 minors alongside `latest` **4 - Evaluate and prioritize**
- Until versioned publishing exists, adopt a standard feature-state admonition
  and apply it consistently to every feature page, stating the version
  introduced and the current stage (Alpha, Beta, GA, Deprecated). Nine pages use
  a `FEATURE STATE:` block today; formalize its format in CONTRIBUTING.md so new
  pages follow it **2 - High priority**
- Document the release-notes update process: when `update_changelog.sh` is run,
  by whom, and how the result is reviewed, so the page continues to be
  regenerated after maintainer turnover **3 - Put in backlog**
- Enable the theme's search features `search.suggest`, `search.highlight`, and
  `search.share` under `theme.features` in `mkdocs.yml`; this is a one-line
  change that improves search usability **1 - Do right away**
- Add a short "Localization" statement to CONTRIBUTING.md that records the
  project's current position (English only, translations not currently accepted,
  or translations welcome via a stated process). If translations are anticipated
  within the next few releases, move content to `docs/en/` now and configure the
  `mkdocs-static-i18n` plugin, so the redirects and `.nav.yml` files only need
  to change once **3 - Put in backlog**
- Ask the KubeVirt website maintainers whether the API reference and quickstarts
  can be indexed by the same search as the user guide, for example by moving the
  user guide search to a site-wide index, so users can search the full
  documentation set from one place. **4 - Evaluate and prioritize**

#### Content creation processes

- Expand CONTRIBUTING.md from a pointer into a documentation contributor guide
  that covers the full lifecycle: how to propose a change, how to build and test
  locally (move the README build steps here), what happens after opening a PR
  (labels, `/lgtm`, `/approve`, expected turnaround), when to add a redirect to
  `mkdocs.yml`, and when a change needs a cherry-pick to a `release-vX.Y-stable`
  branch. Model it on the Thanos "How to contribute to docs" page. **2 - High
  priority**
- Add a MAINTAINERS.md (or a "Maintainers" section on the Contributing page)
  that names the user guide approvers and the person or group responsible for
  the release-notes script, and how to reach them. Model it on the NATS site
  MAINTAINERS file. Infrastructure accounts are covered in the Maintenance
  planning recommendations. **2 - High priority**
- Add a short documentation style guide covering page structure (title, short
  concept, feature-state banner, procedure, related links), the standard
  feature-state admonition, code block conventions (fenced blocks, no `$`
  prompts), Kubernetes object capitalization, and file naming. Link it from
  CONTRIBUTING.md and the Contributing page. **2 - High priority**
- Add a pull request template to `.github/` with a checklist: `.nav.yml` updated
  for new pages, redirect added for moved pages, spelling and link checks run,
  feature-state banner present, and the related kubevirt/kubevirt PR or VEP
  linked. **1 - Do right away**
- Route reviews to subject-matter experts by adding per-directory `OWNERS` files
  (for example `docs/network/OWNERS`, `docs/storage/OWNERS`,
  `docs/compute/OWNERS`) that reference the existing `sig-network-*`,
  `sig-storage-*`, and `sig-compute-*` aliases, while keeping the root approvers
  for site-wide changes. **4 - Evaluate and prioritize**
- Ask the maintainers to consider a documentation-focused reviewer role or SIG
  Docs alias, so that writers who are not core code approvers can share the
  review load and reduce the open PR backlog **4 - Evaluate and prioritize**
- State on the Contributing page that the VEP checklist requires the docs PR to
  be merged by code freeze. The release-branch and release-notes processes are
  covered in the Content maintainability recommendations. **1 - Do right away**
- Triage the twelve open pull requests, closing or merging the oldest, and add a
  stale-PR policy to CONTRIBUTING.md so contributors know what to expect. **2 -
  High priority**

#### Inclusive language

- Remove or reword minimizing language across the guide. Delete "simply",
  "just", "of course", and "obviously" where they add nothing, and replace
  "easy" or "easily" with a concrete statement of what the step requires (for
  example, change "can be easily cancelled" to "can be cancelled by deleting the
  migration object"). Start with the pages that have the most occurrences: Live
  Migration, Windows Virtio Drivers, Node Assignment, vsock, and Disks and
  Volumes **3 - Put in backlog**
- Add a rule to the documentation style guide (see the content creation process
  recommendations) that discourages "simple", "simply", "easy", "easily",
  "just", and "obviously", with a one-line explanation of why. **1 - Do right
  away**
- Add an automated check for minimizing and non-recommended language to the
  Makefile and the Prow pre-submit, using a tool such as Vale with the
  `write-good` style, or a grep-based check alongside `make check_spelling`, so
  new occurrences are flagged in pull requests. **3 - Put in backlog**
- Update the 14 links to `kubevirt.io/api-reference/master/...` to the `/main/`
  path, or to a specific version path such as `/v1.9.0/`, so the guide no longer
  points at a legacy branch name. **1 - Do right away**
- Replace the `kubevirt.io/nodeName: master` example on the Presets page with a
  neutral node name such as `node01`, or remove the example, since the page
  documents a deprecated feature. **1 - Do right away**
- Ask the KubeVirt API maintainers whether the `Abort Requested` and
  `Abort Status` fields in the VirtualMachineInstanceMigration status are
  candidates for a "cancel" alias in a future API version; until then, prefer
  "cancel" in the prose of the Live Migration page while continuing to show the
  field names as they appear in `kubectl` output. **4 - Evaluate and
  prioritize**
- When upstream projects linked from the guide (libvirt, cri-tools, vhost-md,
  kubevirt-ansible) rename their default branch, update the links; in the
  meantime prefer tagged or permalink URLs so the branch name is not repeated in
  the guide **3 - Put in backlog**

## Contributor documentation

### Recommendations

#### Communication methods documented

- Add a "Community and communication" section to the user guide that
  consolidates the Slack channels, the kubevirt-dev mailing list, community
  meetings, and social accounts in one place, and keep it consistent with
  `kubevirt.io/community` so readers who stay in the guide do not miss a
  channel. Give each channel a one-line description of its purpose (for example,
  `#virtualization` for usage questions, `#kubevirt-dev` for contributor
  discussion, the mailing list for announcements and longer threads) so
  newcomers know where to ask **2 - High priority**
- Document community meetings within the guide itself: state the cadence, list
  the meeting times, and include the public calendar link (`kubevirt@cncf.io`)
  so readers can join without leaving the guide **3 - Put in backlog**
- Set `repo_url` and an `extra.social` block in `mkdocs.yml` so the GitHub,
  Slack, and mailing list links appear in the guide's header and footer on every
  page, instead of only in the "Getting help" list on the Welcome page. **1 - Do
  right away**
- Replace the raw Slack URL on the Welcome page with the channel name and a link
  to the Kubernetes Slack invitation page **1 - Do right away**

#### Beginner friendly issue backlog

- Consolidate the duplicate labels by standardizing on the GitHub-native
  `good first issue` label (spaced) and retiring or aliasing the hyphenated
  `good-first-issue`, so beginner issues appear in GitHub's "Contribute" tab and
  good-first-issue discovery tooling. Update the reference on the Contributing
  page to match the chosen label **1 - Do right away**
- Maintain a small, non-empty pool of beginner issues. Periodically identify
  documentation gaps, typos, and small feature-doc updates and file them as
  `good first issue` so a new contributor always finds something to pick up.
  **2 - High priority**
- Triage the currently open backlog. Apply `kind/*` and `sig/documentation`
  labels to unlabeled issues, and use `triage/accepted` to signal that an issue
  is ready to be worked on **2 - High priority**
- Add a `help wanted` complement for slightly larger but still approachable
  tasks, and reference both `good first issue` and `help wanted` on the
  Contributing page so contributors understand the difference. **3 - Put in
  backlog**
- Preserve valuable issues from auto-close by applying `lifecycle/frozen` (or
  promptly triaging) to still-relevant enhancements and documentation requests,
  rather than letting them reach `lifecycle/rotten` and close for inactivity
  alone. **3 - Put in backlog**
- Keep issue quality high by continuing to use the org-level issue templates,
  and add a short "good first issue" checklist to them (affected page, expected
  outcome, pointers to relevant docs) so beginner issues are self-contained.
  **3 - Put in backlog**
- Publish a lightweight triage cadence (for example, a periodic
  documentation-issue triage during a SIG or community meeting) to keep
  labeling, acceptance, and staleness decisions consistent over time. **4 -
  Evaluate and prioritize**

#### New contributor getting started content

- Add a "Making your first documentation change" section to the Contributing
  page that walks through the mechanics end to end: find or file an issue,
  comment to claim it, fork and branch, edit under `docs/` and update
  `.nav.yml`, run `make check_spelling` and `make check_links`, sign off with
  `git commit -s`, open the pull request, and what to expect from Prow
  (`ok-to-test`, `lgtm`, `approved`) and reviewers. Move the build and test
  steps from the repository README here or link them prominently. **2 - High
  priority**
- Add a "Where to ask for help" section to the Contributing page, and repeat it
  in CONTRIBUTING.md, that names `#kubevirt-dev` on Kubernetes Slack for
  contributor questions and `#virtualization` for usage questions, links the
  Slack invitation page, states that the weekly community meeting includes
  newcomer introductions with the day, time, and Zoom link, and identifies the
  documentation approvers or a docs contact. **2 - High priority**
- Link the kubevirt/community resources that newcomers need directly from the
  Contributing page: the SIG list (to find the right SIG for a topic), the
  help-wanted guide (to understand the labels), the community meeting document,
  and the MAINTAINERS file. **1 - Do right away**
- Replace the generic "look for good-first-issue" advice with a direct link to
  the filtered issue list for each repository, and pair this with the beginner
  issue backlog recommendations so the lists are populated when newcomers
  arrive. **1 - Do right away**
- Add a "Contributing to the code" subsection that summarizes the
  kubevirt/kubevirt path in three or four steps (read CONTRIBUTING.md, follow
  `docs/getting-started.md` to build and run a local cluster, pick an issue,
  open a draft PR) so code-minded newcomers see a clear next step rather than a
  single link. **3 - Put in backlog**
- Ask the community whether a lightweight mentoring or buddy arrangement exists
  or could be offered for first-time contributors, and document it on the
  Contributing page if so; the help-wanted guide already promises "extra
  assistance" on `good first issue` items, so state how to request it. **4 -
  Evaluate and prioritize**

#### Project governance documentation

- Add a "Governance" section to the kubevirt.io Community page that states in
  two or three sentences how KubeVirt is governed (CNCF incubating project,
  maintainer group, SIGs and working groups, lazy consensus with maintainer
  votes) and links `GOVERNANCE.md`, `MAINTAINERS.md`, `membership_policy.md`,
  and `sig-list.md` **2 - High priority**
- Expand the "Important community resources" list on the user guide's
  Contributing page so each governance link has a one-sentence description of
  what the reader will find. The New contributor recommendations also add the
  maintainers list and SIG list there **1 - Do right away**
- Add a short "How the project is run" paragraph to the Contributing page, above
  the resource list, that names the maintainer group, explains that work is
  organized in SIGs, and states that decisions default to lazy consensus, so a
  newcomer understands the structure before following the links. **1 - Do right
  away**
- Ask the maintainers to confirm that every SIG charter includes a "Meeting
  Mechanics" section like SIG Storage's, and that `sigs.yaml` records each SIG's
  meeting cadence and Slack channel, so the generated SIG list can serve as the
  single place to find how to participate in each group **4 - Evaluate and
  prioritize**

## Website & Infrastructure

### Recommendations

#### Single-source requirement

- Document the content boundary. Add a short "Where documentation lives" section
  to the README of `kubevirt/user-guide`, `kubevirt/kubevirt.github.io`, and
  `kubevirt/kubevirt` stating that user and operator documentation belongs in
  the user guide, marketing, blog, and community content belongs on the website,
  and `kubevirt/kubevirt/docs` is for design and developer notes only. Link to
  it from `docs/contributing.md` in the user guide **2 - High priority**
- Audit `kubevirt/kubevirt/docs` for user-facing content. Start with the files
  the user guide already links to (`getting-started.md`, `architecture.md`,
  `cloud-init.md`), move the user-facing portions into the guide, and replace
  the originals with a one-line pointer so search results and old links still
  resolve **3 - Put in backlog**
- Do the same triage for the CDI `doc/` directory: move the pages the user guide
  links to from six storage pages into the guide's `storage/` section, or add a
  clear "CDI reference documentation" page in the guide that explains why the
  rest remains in the CDI repository **3 - Put in backlog**
- Decide whether the website and user guide should share a repository, and
  record the decision. If they stay separate, note the reason (different
  generators, maintainers, and audiences) in both READMEs. If the project later
  converges the two toolchains, as suggested in the maintenance-planning
  recommendations, move the website pages into the user-guide repository or
  bring the guide into the website repository as a Git submodule. **4 - Evaluate
  and prioritize**
- Give the API reference a visible home in the user guide by adding a navigation
  entry or landing page that links to `kubevirt.github.io/api-reference`, so
  readers do not need to know it is published from a separate repository. **1 -
  Do right away**

#### Website requirements

- Bring the user guide footer into compliance. Set
  `copyright: "Copyright © KubeVirt a Series of LF Projects, LLC"` in
  `mkdocs.yml`, and add an `overrides/partials/copyright.html` (or a
  `footer.html` override) that appends "We are a Cloud Native Computing
  Foundation incubating project", the CNCF logo linked to `cncf.io`, and a link
  to `https://lfprojects.org/policies/` for trademark and terms. Match the
  wording and links used in the main website footer so the two properties read
  as one **2 - High priority**
- Add the © symbol to the main website copyright line in `_includes/footer.html`
  so it reads "Copyright © KubeVirt a Series of LF Projects, LLC". **1 - Do
  right away**
- Point vendor logos at KubeVirt-specific pages. For each entry in `ADOPTERS.md`
  whose link is a corporate homepage, ask the vendor for a URL that mentions
  KubeVirt support or their KubeVirt-based product, and update the link; drop
  the logo from the Vendors section if none exists. **3 - Put in backlog**
- Add a root `CODE_OF_CONDUCT.md` to both `kubevirt/user-guide` and
  `kubevirt/kubevirt.github.io` that links to the `kubevirt/community` code of
  conduct, so the file is present where the checklist expects it rather than
  only inherited from the organization default. **1 - Do right away**
- Add a `CONTRIBUTING.md` to `kubevirt/kubevirt.github.io` that points to the
  existing contributing content in its README and to the user guide's
  contributing page **1 - Do right away**
- Update the maturity statement in both footers when the project's CNCF status
  changes, and add a note in each repository's README naming the file to edit so
  the statement does not go stale. **3 - Put in backlog**

#### Usability, accessibility and devices

- Fix the header and link contrast in `docs/stylesheets/extra.css`. Darken
  `--md-primary-fg-color` to a teal that gives at least 4.5:1 against white (for
  example `#007a7e` or darker), or keep the brand teal for decorative elements
  only and set the header and tab text to a dark foreground. Check links against
  the same 4.5:1 target in both schemes and replace the
  `filter: brightness(80%)` rule with explicit `--md-typeset-a-color` values per
  scheme. Verify both light and dark schemes with a contrast checker. **2 - High
  priority**
- Replace the ASCII stack diagram on the Architecture page with an image that
  has descriptive alt text or, better, a Mermaid diagram (enable
  `pymdownx.superfences` custom fences for `mermaid` in `mkdocs.yml`)
  accompanied by a one-paragraph prose description of the layers, so screen
  reader users and mobile readers get the same information. **3 - Put in
  backlog**
- Convert `$`-prefixed indented code blocks to fenced blocks and enable the code
  copy button, as described in the New user content recommendations. Break
  commands over 100 characters across lines with `\` continuations in the source
  so they do not require horizontal scrolling on mobile. **3 - Put in backlog**
- Verify on a phone that tables on the Arm64 feature-gate and device status
  pages scroll horizontally rather than overflowing the page; if they overflow,
  remove the `display: table; width: max-content` override from `extra.css` or
  scope it to specific tables with `attr_list` classes. **1 - Do right away**
- Split or restructure pages over about 500 lines. Candidates are Disks and
  Volumes (split by volume type), Interfaces and Networks (split binding methods
  from network attachment), and Live Migration (move migration strategies and
  network configuration to sub-pages). Split Release Notes into one page per
  minor release or paginate it, and set the Release Notes tab to open the newest
  release. **3 - Put in backlog**
- Set the logo alt text to "KubeVirt" by adding `extra.homepage` or a custom
  `partials/logo.html` override, and add a short caption or introductory
  sentence above each wide status table stating what the table shows. **1 - Do
  right away**
- Add an accessibility check to the Makefile and Prow pre-submit, for example
  running `pa11y-ci` or Lighthouse against the built site for a sample of pages,
  so contrast regressions are caught in pull requests. **3 - Put in backlog**

#### Branding and design

- Publish a short brand reference, either in the `kubevirt.github.io` repository
  or in the `community` repository, that lists the canonical logo files (icon
  and horizontal wordmark), the hex values of the `$kv-color--green-*` scale,
  and the approved typefaces. Have `docs/stylesheets/extra.css` in the user
  guide cite that reference in a comment so the two sites stay aligned when the
  palette changes **3 - Put in backlog**
- Align the user guide's brand tokens with the main site's scale. Replace the ad
  hoc `#0db2b6` primary with a value from the documented scale (for example,
  `$kv-color--green-300`, `#00aab2`), or add `#0db2b6` to the scale so both
  properties draw from the same list. **4 - Evaluate and prioritize**
- Add an `extra.social` block to `mkdocs.yml` so the theme footer shows the
  project's GitHub, Slack, and `kubevirt.io` links. This gives readers a visual
  and navigational link between the guide and the main site at almost no cost.
  The Communication methods recommendations propose the same change together
  with `repo_url`; the `copyright` line is covered in the Website requirements
  recommendations **1 - Do right away**
- Consider using the horizontal `KubeVirt_logo_color.svg` wordmark in the
  guide's header, or add the wordmark to the main site's header alongside the
  icon, so both properties present the same logo variant. **3 - Put in backlog**
- Remove the unused legacy assets `asciibinder-logo-horizontal.png`,
  `asciibinder_web_logo.svg`, and `book_pages_bg.jpg` from `docs/assets` so the
  repository contains only current brand assets **1 - Do right away**
- Remove the unsupported top-level `site_favicon` key from `mkdocs.yml`; MkDocs
  ignores it and the active favicon is already set under `theme.favicon`. **1 -
  Do right away**

#### Case studies/social proof

- Link the two existing CNCF case studies (NTT Docomo Business and Swisscom)
  from `kubevirt.io`, for example in a "Case Studies" block beneath the End
  Users logo wall on the landing page. This is a quick win: the content already
  exists and is published by CNCF. **1 - Do right away**
- Extend `adopters.py` and `_data/adopters.yml` to carry the "Use-Case" text
  from `ADOPTERS.md`, and show it on the website as a tooltip or an expandable
  card on each logo. This turns the logo wall into a set of short, attributed
  testimonials at no authoring cost. **2 - High priority**
- Create a `/adopters/` or `/case-studies/` page on `kubevirt.io` that renders
  the full adopters table (type, name, since, use case) and links to the CNCF
  case studies, so evaluators have a single place for adoption evidence. Add it
  to `_data/site_nav_pages.yml`. **3 - Put in backlog**
- Invite two or three adopters with strong use-case statements (for example
  Cloudflare, CoreWeave, or SK Telecom) to expand them into short blog posts or
  Summit talks, and tag those posts with a `case-study` or `user-story` category
  so they can be listed together. **4 - Evaluate and prioritize**
- Add a blog category or tag scheme beyond `news` and `uncategorized`, and
  backfill recent posts, so the blog index can filter by release, feature,
  community, and user story. **3 - Put in backlog**
- Set a modest publishing target for the blog, such as one post per KubeVirt
  minor release plus one community or adopter post per quarter, and track it in
  the community repository so cadence does not depend on a single author. **4 -
  Evaluate and prioritize**
- In the user guide, add a short "Community and adoption" block to
  `docs/index.md` that links to the `kubevirt.io` blog, videos, Summit, adopters
  or case-studies page, and Slack. Optionally add a top-level "Community" entry
  to `docs/.nav.yml` that opens the `kubevirt.io/community` page. **1 - Do right
  away**
- In `docs/contributing.md`, in addition to inviting readers to submit case
  studies, link to the existing adopters list and case studies so contributors
  can see the format they are being asked to follow. **1 - Do right away**

#### SEO, Analytics and site-local search

- Enable analytics on the user guide. Add an `extra.analytics` block to
  `mkdocs.yml` (the theme supports Google Analytics 4 natively, or use a custom
  `overrides/main.html` partial to load the same Adobe Analytics tag the main
  site uses) so documentation page views, search terms, and 404 hits are
  captured. **2 - High priority**
- Gate analytics to production only. In the main site, wrap the `dpal.js`
  include in `_includes/head.html` with a check on
  `jekyll.environment == "production"` and set `JEKYLL_ENV=production` only in
  the Netlify production context. In the user guide, inject the analytics
  snippet only when the Netlify `CONTEXT` variable equals `production`, for
  example by templating it in the `netlify.toml` build command. **2 - High
  priority**
- Add an explicit `noindex` for non-production deploys rather than relying on
  Netlify defaults. Emit `X-Robots-Tag: noindex` from a `_headers` file or a
  `[context.deploy-preview]` / `[context.branch-deploy]` section in each
  repository's `netlify.toml`. **1 - Do right away**
- Fix `robots.txt` on kubevirt.io: correct the sitemap URL to
  `https://kubevirt.io/sitemap.xml` and add a second `Sitemap:` line for
  `https://kubevirt.io/user-guide/sitemap.xml`. **1 - Do right away**
- Remove the obsolete `sed` line in the user guide's `netlify.toml` that
  rewrites `site_url: https://kubevirt.io/docs`, since `mkdocs.yml` already sets
  `site_url` to `https://kubevirt.io/user-guide` and the command no longer has
  any effect. **1 - Do right away**
- Extend the main site's lunr index in `_layouts/search.html` to include
  `site.pages` in addition to `site.posts` so that non-blog pages are
  searchable, and add a link from the main site's search page to the user guide
  search (or vice versa) so users can find documentation from either entry
  point. **3 - Put in backlog**
- Name the custodians of the Adobe Analytics property and Google Search Console
  in the "Site infrastructure" section proposed in the Maintenance planning
  recommendations, and describe how a maintainer requests access or a 404
  report. **2 - High priority**
- Once analytics are in place, set up a recurring 404 report (for example, a
  saved report filtered on the not-found page title) and use it to add missing
  entries to the `redirects` plugin map in `mkdocs.yml`. **3 - Put in backlog**

#### Maintenance planning

- Document infrastructure ownership. Add a "Site infrastructure" section to the
  README of both `kubevirt/user-guide` and `kubevirt/kubevirt.github.io` (or a
  page in `kubevirt/community`) that lists who administers the Netlify site,
  GitHub Pages and custom-domain settings, DNS for kubevirt.io, the analytics
  and Search Console accounts, and the Prow job definitions in
  `kubevirt/project-infra`, and how a maintainer requests access. **2 - High
  priority**
- Give documentation a formal home. Populate the `sig/documentation` entry in
  the community `sig-list.md` with chairs, a meeting cadence or async channel,
  and a charter that includes both the user guide and the website, so newcomers
  know where to volunteer and maintainers have a succession path. **4 - Evaluate
  and prioritize**
- Publish a maintainer ladder. In the website and user-guide READMEs, describe
  how a contributor becomes a reviewer and then an approver (for example, a
  number of merged docs PRs and a nomination), mirroring the process in
  `kubevirt/community` for code SIGs. **3 - Put in backlog**
- Reduce bus-factor risk by recruiting at least one additional regular website
  reviewer for each repository, using the existing `kind/website` and
  `kind/documentation` labels and a `good-first-issue` pass to seed starter
  tasks. **2 - High priority**
- Plan to converge the two toolchains. Evaluate moving the main site to Material
  for MkDocs or another generator with a supported theme, such as Hugo or
  Docusaurus, so a single skill set covers both sites, and track the decision in
  an issue even if the migration is deferred. **4 - Evaluate and prioritize**
- Pin the MkDocs package versions in `netlify.toml` (or use a
  `requirements.txt`) so preview builds are reproducible and match the Prow
  image. Removing the obsolete `sed` line is covered in the SEO recommendations.
  **1 - Do right away**
- Add a `Strict-Transport-Security` header. GitHub Pages does not let you set
  response headers directly, so either enable HSTS through the DNS/CDN provider
  in front of kubevirt.io or, if none exists, record the limitation in the
  infrastructure section so it is a known gap. **4 - Evaluate and prioritize**
- Periodically review `OWNERS_ALIASES` in the user-guide repository and add
  dated emeritus entries as the website repository already does, so the approver
  list reflects who is actually active **3 - Put in backlog**
