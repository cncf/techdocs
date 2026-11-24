---
title: Add a Community and communication page to the guide #9030
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Community channels appear only in the "Getting help" list on the Welcome page. A
reader who stays in the guide can miss the Slack channels, the mailing list,
community meetings, and social accounts.

Add a "Community and communication" page, for example `docs/community.md`, and
add it to `docs/.nav.yml`. Include:

- Channels, each with a one-line purpose: `#virtualization` on Kubernetes Slack
  for usage questions, `#kubevirt-dev` for contributor discussion, and the
  kubevirt-dev mailing list for announcements and longer threads.
- Social accounts.
- Community meetings: state the cadence, list the meeting times, and link the
  public calendar (`kubevirt@cncf.io`) so readers can join without leaving the
  guide.

Keep the content consistent with the kubevirt.io Community page. Link to that
page for governance, and avoid copying content that will go out of date.

## What you expected

A reader finds every community channel and how to join a meeting in one guide
page, and the information matches the kubevirt.io Community page.

## URL

- Welcome page: https://kubevirt.io/user-guide/ (`docs/index.md`)
- Community page: https://kubevirt.io/community/
- New file: `docs/community.md`; navigation in `docs/.nav.yml`

## Additional context

Question for the maintainers: Which source is authoritative for meeting times,
the guide, the Community page, or the shared calendar? Prefer linking the
calendar to avoid stale times.

Related: #9031 (Community and adoption block on the index page), #9032 (footer
links), #9035 (where to ask for help), and #9040 (Governance section on the
Community page).

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
