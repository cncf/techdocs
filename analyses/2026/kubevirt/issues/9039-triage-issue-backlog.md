---
title: Triage the issue backlog and publish a triage cadence #9039
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide's open issues are largely unlabeled, and few if any are suitable
for newcomers. Without labels and a regular triage routine, contributors cannot
tell which issues are ready to work on.

Do the following:

- Triage the open backlog in https://github.com/kubevirt/user-guide/issues.
  Apply `kind/*` and `sig/documentation` labels to unlabeled issues, and apply
  `triage/accepted` to issues that are ready to be worked on.
- File a small, steady pool of beginner issues for documentation gaps, typos,
  and small feature-doc updates, and label them `good first issue`.
- Add a short "good first issue" checklist to the org-level issue templates:
  affected page, expected outcome, and pointers to relevant docs. Keep using the
  existing templates.
- Publish a lightweight triage cadence, for example a periodic
  documentation-issue triage during a SIG or community meeting, in
  `CONTRIBUTING.md` and on the Contributing page. State who labels, who accepts,
  and how staleness is handled.

## What you expected

Every open issue has a `kind/*` label and a triage state, at least a few
`good first issue` items are always open, and contributors can read how often
triage happens.

## URL

- https://github.com/kubevirt/user-guide/issues
- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- Issue templates in the kubevirt organization `.github` repository

## Additional context

Questions for the maintainers: Which meeting could host triage, and who owns it?
Related: #9038 (label standardization), #9036 (issue list links), #9024 (SIG
home), and #9025 (pull request triage). Do #9038 first.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
