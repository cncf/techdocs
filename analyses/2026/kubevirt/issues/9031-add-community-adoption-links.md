---
title: Add a Community and adoption block to the index and Contributing page #9031
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Readers of the guide get no pointer to the wider KubeVirt community or to
evidence of adoption. The Contributing page invites readers to submit case
studies, but does not show them what a case study looks like.

Make these changes:

- Add a short "Community and adoption" block to `docs/index.md` with links to
  the kubevirt.io blog, videos, KubeVirt Summit, the adopters or case-studies
  page, and Slack.
- Optionally add a top-level "Community" entry to `docs/.nav.yml` that opens the
  kubevirt.io Community page.
- In `docs/contributing.md`, link to the existing adopters list and case studies
  next to the invitation to submit one, so contributors can see the format to
  follow.

Verify each target URL before linking and run `make check_links`.

## What you expected

A reader on the Welcome page finds the blog, videos, Summit, adopters, and Slack
in one block. A case-study contributor sees existing examples before writing
their own.

## URL

- https://kubevirt.io/user-guide/ (`docs/index.md`)
- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- `docs/.nav.yml`
- https://kubevirt.io/community/

## Additional context

Related: #9030 (Community and communication page in the guide, which the
"Community" entry could use instead of an external link), #9032 (footer links),
and #9034 through #9037 (other changes to the Contributing page; coordinate
edits to avoid merge conflicts).

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
