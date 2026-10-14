---
title: Add a project overview and resource descriptions to the Contributing page #9034
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Contributing page sends newcomers to a list of community resources without
describing them or explaining how KubeVirt is run. A newcomer cannot tell which
link answers their question.

Edit `docs/contributing.md`:

- Add a short "How the project is run" paragraph above the resource list. Name
  the maintainer group, explain that work is organized in SIGs (special interest
  groups), and state that decisions default to lazy consensus.
- Add a one-sentence description to each link in "Important community resources"
  that says what the reader finds there.
- Add links to the kubevirt/community resources a newcomer needs: the SIG list,
  the help-wanted guide, the community meeting document, and the maintainers
  list (`MAINTAINERS.md`).

## What you expected

A newcomer understands the project structure before following links, and each
link states what it leads to.

## URL

- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- https://github.com/kubevirt/community (`sig-list.md`, `GOVERNANCE.md`,
  `MAINTAINERS.md`)

## Additional context

Related: #9035, #9036, and #9037 (other additions to the same page; coordinate
to avoid conflicts), #9026 (`MAINTAINERS.md` for the user guide), #9040
(governance text on the Community page, which should use the same wording), and
issue #9020 (`CONTRIBUTING.md`). Question for the maintainers: Which maintainers
list should the page link, the community one or a user guide one?

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
