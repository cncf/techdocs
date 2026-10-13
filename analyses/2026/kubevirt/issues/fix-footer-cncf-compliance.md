---
title: Bring the user guide footer and repository files into CNCF compliance
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

<!-- Make sure that you visit our User Guide at https://kubevirt.io/user-guide.
-->

## Description

The CNCF website guidelines require every project property to show the Linux
Foundation copyright line, the project's CNCF maturity statement, the CNCF logo,
and a link to the LF Projects policies. The user guide footer shows none of
these, and the repository has no root `CODE_OF_CONDUCT.md`.

Make these changes:

1. In `mkdocs.yml`, set
   `copyright: "Copyright © KubeVirt a Series of LF Projects, LLC"`.
2. Add `overrides/partials/copyright.html` (or a `footer.html` override) that
   appends "We are a Cloud Native Computing Foundation incubating project", the
   CNCF logo linked to `https://cncf.io`, and a link to
   `https://lfprojects.org/policies/` for trademark and terms. Match the wording
   and links used in the main website footer so the two properties read as one.
3. Add a root `CODE_OF_CONDUCT.md` that links to the `kubevirt/community` code
   of conduct, so the file is present where the CNCF checklist expects it rather
   than only inherited from the organization default.
4. Add a note to the README naming the file to edit when the project's CNCF
   maturity status changes, so the footer statement does not go stale.

## What you expected

The user guide footer shows the same copyright, maturity statement, CNCF logo,
and policy link as `kubevirt.io`, and the repository root contains a code of
conduct.

## URL

- https://kubevirt.io/user-guide/ (footer on every page)
- `mkdocs.yml`, `overrides/`, `README.md` in the repository root

## Additional context

The theme's `custom_dir` must be set to `overrides` in `mkdocs.yml` for partial
overrides to take effect; check whether it already is.
