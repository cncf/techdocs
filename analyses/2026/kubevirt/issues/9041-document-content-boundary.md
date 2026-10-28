---
title: Document where documentation lives #9041
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

KubeVirt documentation is spread across `kubevirt/user-guide`,
`kubevirt/kubevirt.github.io`, and `kubevirt/kubevirt/docs`. No repository
states which kind of content belongs where, so contributors cannot tell where to
add a new page and similar content ends up in more than one place.

Add a short "Where documentation lives" section to the README of each of these
repositories:

- `kubevirt/user-guide`
- `kubevirt/kubevirt.github.io`
- `kubevirt/kubevirt`

Use the same text in all three. The section states that:

- User and operator documentation belongs in the user guide.
- Marketing, blog, and community content belongs on the website.
- `kubevirt/kubevirt/docs` is for design and developer notes only.

Then link to the new section from `docs/contributing.md` in the user guide, for
example from the "Other ways to contribute" section.

## What you expected

A contributor can read one short section in any of the three repositories and
know which repository to use for a new page. The Contributing page links to that
guidance.

## URL

- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)
- https://github.com/kubevirt/user-guide/blob/main/README.md
- https://github.com/kubevirt/kubevirt.github.io/blob/main/README.md
- https://github.com/kubevirt/kubevirt/blob/main/README.md

## Additional context

Related: #9060 adds a "Site infrastructure" section to the same READMEs, so
coordinate the edits. Related: #9043 and #9044 act on the boundary this issue
documents.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
