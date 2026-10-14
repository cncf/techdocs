---
title: Add a first documentation change walkthrough to the Contributing page #9037
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Contributing page does not walk a newcomer through making a documentation change, and the build and test steps live only in the repository README. Code-minded newcomers also get a single link instead of a next step.

Edit `docs/contributing.md`:

- Add a "Making your first documentation change" section that covers these steps: find or file an issue; comment to claim it; fork and branch; edit under `docs/` and update `.nav.yml`; run `make check_spelling` and `make check_links`; sign off with `git commit -s`; open the pull request; and what to expect from Prow (`ok-to-test`, `lgtm`, `approved`) and reviewers.
- Move the build and test steps from the README into this section, or link to them prominently.
- Add a "Contributing to the code" subsection that summarizes the kubevirt/kubevirt path in three or four steps: read `CONTRIBUTING.md`, follow `docs/getting-started.md` in kubevirt/kubevirt to build and run a local cluster, pick an issue, and open a draft pull request.

## What you expected

A newcomer completes a first documentation pull request using only this page, and a code-minded newcomer sees a short path into kubevirt/kubevirt.

## URL

- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- README in https://github.com/kubevirt/user-guide
- https://github.com/kubevirt/kubevirt/blob/main/docs/getting-started.md

## Additional context

Related: #9020 (the same lifecycle in `CONTRIBUTING.md`; keep the two consistent or have one link the other), #9022 (pull request template), #9021 (style guide), and #9034 through #9036 (same page).

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
