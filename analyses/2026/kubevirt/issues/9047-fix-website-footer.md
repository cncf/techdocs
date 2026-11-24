---
title: Fix the website footer and add community health files #9047
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

This issue affects `kubevirt/kubevirt.github.io` (the main website) and
`kubevirt/user-guide`. The website copyright line omits the © symbol, the two
repositories lack a root `CODE_OF_CONDUCT.md`, and the website repository has no
`CONTRIBUTING.md`. The maturity statement in each footer also has no owner and
can go stale when the CNCF status changes.

Make these changes:

1. In `_includes/footer.html` of `kubevirt/kubevirt.github.io`, change the
   copyright line to "Copyright © KubeVirt a Series of LF Projects, LLC".
2. Add a root `CODE_OF_CONDUCT.md` to both `kubevirt/user-guide` and
   `kubevirt/kubevirt.github.io` that links to the code of conduct in
   `kubevirt/community`.
3. Add a `CONTRIBUTING.md` to `kubevirt/kubevirt.github.io` that points to the
   contributing content in its README and to the user guide Contributing page.
4. Add a note to each repository's README that names the footer file to edit
   when the project's CNCF maturity level changes: `_includes/footer.html` for
   the website and the footer override for the guide.

## What you expected

Both repositories contain the community health files, the website footer shows
the © symbol, and a maintainer can find where to update the maturity statement.

## URL

- https://kubevirt.io/ (footer)
- https://github.com/kubevirt/kubevirt.github.io/blob/main/_includes/footer.html
- https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)

## Additional context

Related: #9046 updates the user guide footer. Add the maturity note to the guide
README only after #9046 creates the footer override.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
