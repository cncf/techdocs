---
title: Add where-to-ask-help and the VEP docs deadline to the Contributing page #9035
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Contributing page does not say where contributors can ask questions, whether
mentoring exists, or when documentation for a new feature is due.

Edit `docs/contributing.md` and repeat the help section in `CONTRIBUTING.md`:

- Add a "Where to ask for help" section. Name `#kubevirt-dev` on Kubernetes
  Slack for contributor questions and `#virtualization` for usage questions.
  Link the Slack invitation page. State that the weekly community meeting
  includes newcomer introductions, with the day, time, and Zoom link. Name the
  documentation approvers or a docs contact.
- State that the VEP (KubeVirt Enhancement Proposal) checklist requires the
  documentation pull request to be merged by code freeze. Link the VEP process.
- Add a short note on mentoring. The help-wanted guide promises "extra
  assistance" on `good first issue` items, so state how to request it.

## What you expected

A first-time contributor knows where to ask, when to join a meeting, whom to
contact, and by when feature documentation must merge.

## URL

- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- `CONTRIBUTING.md` in https://github.com/kubevirt/user-guide

## Additional context

Questions for the maintainers: Does a mentoring or buddy arrangement for
first-time contributors exist, or could one be offered? If not, remove the
mentoring note. Who is the docs contact?

Related: #9030 (Community page, for meeting times), #9026 (`MAINTAINERS.md`),
and #9034, #9036, #9037 (same page), and #9020.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
