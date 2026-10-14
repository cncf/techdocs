---
title: Standardize the good first issue label #9038
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

KubeVirt repositories carry two near-duplicate labels, the hyphenated `good-first-issue` and the GitHub-native `good first issue`. Issues with the hyphenated label do not appear in GitHub's "Contribute" tab or in good-first-issue discovery tooling, so newcomers cannot find them. Prow can also auto-close still-relevant issues that reach `lifecycle/rotten`.

Do the following:

- Choose the GitHub-native `good first issue` (spaced) as the standard label.
- In each repository that has both labels, re-label issues from `good-first-issue` to `good first issue`, then retire the hyphenated label or alias it in the label configuration.
- Update the label reference on the Contributing page and in `CONTRIBUTING.md`.
- Apply `lifecycle/frozen`, or triage promptly, for still-relevant enhancements and documentation requests so they do not close for inactivity alone.

## What you expected

Each repository has one `good first issue` label, beginner issues appear in GitHub's Contribute tab, and the Contributing page names the same label.

## URL

- https://github.com/kubevirt/user-guide/labels
- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- `CONTRIBUTING.md` in https://github.com/kubevirt/user-guide

## Additional context

Question for the maintainers: Is label configuration managed centrally, for example in kubevirt/project-infra, so the change belongs there?

Related: #9036 (filtered issue links depend on this label) and #9039 (backlog triage).

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
