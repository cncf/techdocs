---
title: Build a documentation contributor guide and review process
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

`CONTRIBUTING.md` is a pointer, the Contributing page lists links without
explaining them, and there is no style guide, pull request template, or named
documentation maintainer. New contributors cannot tell how to make a change, who
reviews it, or what "done" looks like, and twelve pull requests sit open.

The sub-issues below turn `CONTRIBUTING.md` and `docs/contributing.md` into a
complete contributor guide, add the supporting files that make reviews
predictable, and route reviews to the right people. The Thanos "How to
contribute to docs" page and the NATS `MAINTAINERS` file are good models.

## Sub-issues

### Expand CONTRIBUTING.md into a full documentation contributor guide

Rewrite `CONTRIBUTING.md` to cover the full lifecycle: how to propose a change,
how to build and test locally (move the build steps from the README here), what
happens after opening a pull request (labels, `/lgtm`, `/approve`, expected
turnaround), when to add a redirect to `mkdocs.yml`, and when a change needs a
cherry-pick to a `release-vX.Y-stable` branch. Summarize the key points on the
Contributing page and link to the full guide.

Done when: a first-time contributor can go from clone to merged PR using only
this file.

### Add a "Making your first documentation change" walkthrough

Add a section to `docs/contributing.md` that walks through the mechanics end to
end: find or file an issue, comment to claim it, fork and branch, edit under
`docs/` and update `.nav.yml`, run `make check_spelling` and `make check_links`,
sign off with `git commit -s`, open the pull request, and what to expect from
Prow (`ok-to-test`, `lgtm`, `approved`) and reviewers.

Done when: every step names the command or UI action to take.

### Add "Where to ask for help" and direct links to beginner issues

On `docs/contributing.md`, and repeated in `CONTRIBUTING.md`:

- Name `#kubevirt-dev` on Kubernetes Slack for contributor questions and
  `#virtualization` for usage questions, and link the Slack invitation page.
- State that the weekly community meeting includes newcomer introductions, with
  the day, time, and meeting link.
- Identify the documentation approvers or a docs contact.
- Replace the generic "look for good-first-issue" advice with direct links to
  the filtered issue list for each repository.
- Link the `kubevirt/community` resources newcomers need: the SIG list, the
  help-wanted guide, the community meeting document, and the `MAINTAINERS` file.

Done when: a newcomer can find a person to ask and an issue to pick up from this
page.

### Explain how the project is run on the Contributing page

Above the "Important community resources" list on `docs/contributing.md`, add a
short "How the project is run" paragraph that names the maintainer group,
explains that work is organized in SIGs, and states that decisions default to
lazy consensus. Give each link in the resource list a one-sentence description
of what the reader will find.

Done when: a newcomer understands the structure before following any link.

### Add a "Contributing to the code" subsection and document mentoring

Add a subsection to `docs/contributing.md` that summarizes the
`kubevirt/kubevirt` path in three or four steps: read its `CONTRIBUTING.md`,
follow `docs/getting-started.md` to build and run a local cluster, pick an
issue, open a draft PR.

Ask the community whether a mentoring or buddy arrangement exists for first-time
contributors. The help-wanted guide promises "extra assistance" on
`good first issue` items; state how to request it.

Done when: code-minded newcomers see a clear next step and know how to ask for
help.

### Write a documentation style guide

Add a short style guide, linked from `CONTRIBUTING.md` and the Contributing
page, that covers:

- Page structure: title, short concept, feature-state banner, procedure, related
  links.
- The standard feature-state admonition.
- Code block conventions: fenced blocks, no `$` prompts, output in a separate
  block.
- Kubernetes object capitalization (VirtualMachine, VirtualMachineInstance) and
  file naming.
- A rule that discourages "simple", "simply", "easy", "easily", "just", and
  "obviously", with a one-line explanation of why.

Done when: a reviewer can point to the guide for each common review comment.

### Add a pull request template

Add `.github/PULL_REQUEST_TEMPLATE.md` with a checklist: `.nav.yml` updated for
new pages, redirect added for moved pages, spelling and link checks run,
feature-state banner present, and the related `kubevirt/kubevirt` PR or VEP
linked.

Done when: new pull requests open with the checklist.

### Code-freeze requirement, stale-PR policy, triage open pull requests

- On the Contributing page, state that the VEP checklist requires the docs PR to
  be merged by code freeze.
- Add a stale-PR policy to `CONTRIBUTING.md` so contributors know what to
  expect.
- Triage the currently open pull requests: merge or close the oldest, and leave
  a comment on each remaining one stating what it needs.

Done when: the policy is published and every open PR has a current status
comment.

### Name maintainers and route reviews to subject-matter experts

- Add a `MAINTAINERS.md`, or a "Maintainers" section on the Contributing page,
  that names the user guide approvers and the person or group responsible for
  the release-notes script, and how to reach them.
- Add per-directory `OWNERS` files (`docs/network/OWNERS`,
  `docs/storage/OWNERS`, `docs/compute/OWNERS`) that reference the existing
  `sig-network-*`, `sig-storage-*`, and `sig-compute-*` aliases, keeping the
  root approvers for site-wide changes.
- Ask the maintainers to consider a documentation-focused reviewer role or SIG
  Docs alias so writers who are not code approvers can share the review load.

Done when: a pull request touching `docs/storage/` requests review from the
storage alias.
