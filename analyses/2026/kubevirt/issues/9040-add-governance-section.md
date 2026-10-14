---
title: Add a Governance section to the kubevirt.io Community page #9040
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The kubevirt.io Community page does not explain how the project is governed.
Governance documents exist in kubevirt/community, but a visitor to the Community
page has no summary and no links.

Open a pull request against the kubevirt.io website repository
(kubevirt/kubevirt.github.io) that adds a "Governance" section to the Community
page:

- Write two or three sentences that state how KubeVirt is governed: a CNCF
  incubating project, run by a maintainer group, organized in SIGs and working
  groups, with lazy consensus and maintainer votes for decisions.
- Link `GOVERNANCE.md`, `MAINTAINERS.md`, `membership_policy.md`, and
  `sig-list.md` in kubevirt/community.

Verify each link target before publishing, and use the same wording as the "How
the project is run" paragraph on the Contributing page.

## What you expected

A visitor to the Community page reads how KubeVirt is governed in under a minute
and reaches each governance document in one click.

## URL

- https://kubevirt.io/community/
- https://github.com/kubevirt/community (`GOVERNANCE.md`, `MAINTAINERS.md`,
  `membership_policy.md`, `sig-list.md`)
- https://github.com/kubevirt/kubevirt.github.io

## Additional context

Related: #9034 (Contributing page overview, same wording), #9030 (Community page
in the guide), and #9024 (SIG list). Question for the maintainers: Is the
project still described as CNCF incubating, and do maintainer votes apply to all
decisions?

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
