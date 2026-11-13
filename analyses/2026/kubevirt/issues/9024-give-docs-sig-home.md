---
title: Give documentation a SIG home and clarify SIG meeting mechanics #9024
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Documentation has no clear organizational home. The `sig/documentation` entry in
the community `sig-list.md` lacks chairs, a meeting cadence or async channel,
and a charter. Newcomers cannot tell where to volunteer, and maintainers have no
succession path. The SIG Storage charter has a "Meeting Mechanics" section, but
it is unclear whether every SIG charter does.

Open a pull request against kubevirt/community that does the following:

- Populates the documentation group's entry in `sigs.yaml` with chairs, a
  meeting cadence or an async channel, a charter covering both the user guide
  and the website, and then regenerates `sig-list.md`.
- Records each SIG's meeting cadence and Slack channel in `sigs.yaml`, so the
  generated SIG list shows how to join every group.
- Adds a "Meeting Mechanics" section to each SIG charter that lacks one, modeled
  on the SIG Storage charter.

## What you expected

A newcomer can find the documentation group in the SIG list, see who leads it
and when or where it meets, and find the same details for every other SIG in one
generated list.

## URL

- SIG list: https://github.com/kubevirt/community/blob/main/sig-list.md
- `sigs.yaml` in https://github.com/kubevirt/community
- SIG charters in https://github.com/kubevirt/community

## Additional context

Questions for the maintainers:

- Should documentation become its own SIG, or a working group under an existing
  SIG?
- Who volunteers as chair, and does the group meet or work asynchronously?
- Does every SIG charter already contain "Meeting Mechanics"?

Related: #9023 (per-directory `OWNERS` files), #9026 (`MAINTAINERS.md` and
maintainer ladder), and #9039 (triage cadence, which could run in the group's
meeting).

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
