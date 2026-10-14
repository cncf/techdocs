---
title: Triage open pull requests and add a stale-PR policy #9025
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide repository has twelve open pull requests, some of them old. Contributors who open a pull request cannot tell how long review should take or what happens when a pull request goes quiet.

Do the following:

- Review each open pull request in https://github.com/kubevirt/user-guide/pulls. Merge, request changes, or close each one with a short comment. Start with the oldest.
- Add a "Stale pull requests" subsection to `CONTRIBUTING.md` that states the expected first-response time, when a pull request is marked stale, and when it closes. Align the wording with the Prow lifecycle labels (`lifecycle/stale`, `lifecycle/rotten`) the project already uses.
- Mirror the same text on the Contributing page.

Ask the maintainers to confirm realistic turnaround times before publishing them.

## What you expected

No pull request older than the stated policy remains without a decision. Contributors read how long to wait for a review and what happens to inactive pull requests.

## URL

- Open pull requests: https://github.com/kubevirt/user-guide/pulls
- `CONTRIBUTING.md` in the repository root
- Contributing page: https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)

## Additional context

Related: #9020 (expanded `CONTRIBUTING.md`, which should hold the policy), #9023 (`OWNERS` files to share review load), and #9024 (documentation reviewer role).

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
