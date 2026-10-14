---
title: Link filtered issue lists and explain labels on the Contributing page #9036
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Contributing page gives generic advice to look for `good-first-issue` items.
It does not link to a filtered list, and it does not explain how
`good first issue` differs from `help wanted`.

Edit `docs/contributing.md`:

- Replace the generic advice with a direct link to the filtered issue list for
  each repository where newcomers can work, for example kubevirt/user-guide,
  kubevirt/kubevirt, and kubevirt/kubevirt.github.io.
- Add a short explanation of both labels. Use `good first issue` for small,
  self-contained tasks and `help wanted` for slightly larger but still
  approachable tasks.
- Link the help-wanted guide in kubevirt/community.

Where `help wanted` is not applied consistently in a repository, note that in
this issue so maintainers can label a few issues.

## What you expected

A newcomer clicks one link per repository and sees a current list of
beginner-friendly issues, and knows what each label means.

## URL

- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- https://github.com/kubevirt/user-guide/issues

## Additional context

Depends on #9038 (the label name must be standardized before linking the filter)
and works best after #9039 (populated, triaged backlog). Related: #9034, #9035,
and #9037.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
