---
title: Add MAINTAINERS.md and a maintainer ladder #9026
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide does not say who its approvers are, who owns the release-notes script, or how a contributor becomes a reviewer or approver. `OWNERS_ALIASES` may also list people who are no longer active. The website repository already records dated emeritus entries.

Make these changes in the user guide repository:

- Add `MAINTAINERS.md` that names the user guide approvers, names the person or group responsible for the release-notes script, and says how to reach them. Alternatively, add a "Maintainers" section to the Contributing page. Model it on the NATS site `MAINTAINERS` file.
- Add a "Becoming a reviewer or approver" section to the README that describes the path from contributor to reviewer to approver, for example a number of merged documentation pull requests plus a nomination. Mirror the process in kubevirt/community for code SIGs.
- Review `OWNERS_ALIASES`, and move inactive people to dated emeritus entries as the website repository does.

## What you expected

A reader can find the current approvers and a contact, can see how to grow into the role, and can trust that the approver list reflects active people.

## URL

- Repository: https://github.com/kubevirt/user-guide (`OWNERS`, `OWNERS_ALIASES`, README)
- Contributing page: https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- kubevirt/community membership policy: https://github.com/kubevirt/community/blob/main/membership_policy.md

## Additional context

Questions for the maintainers: Who should be listed as the release-notes script owner? How many merged pull requests should the ladder require?

Related: #9023 (`OWNERS` files), #9024 (SIG home), and #9034 (the Contributing page should link `MAINTAINERS.md`).

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
