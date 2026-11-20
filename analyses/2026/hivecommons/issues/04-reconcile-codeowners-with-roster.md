---
title: Reconcile hivecommons/docs code ownership with the maintainer roster
labels: []
repo: https://github.com/hivecommons/docs/issues
---

## Description

Audience: Project maintainers (bus-factor/maintenance planning, governance
accuracy).

Type: Process.

`hivecommons/docs`'s `OWNERS` file lists only `@clubanderson` as
approver/reviewer, while its `CODEOWNERS` also lists `@KPRoche`, who is not on
the project's maintainer roster (`hivecommons/.project/maintainers.yaml`:
`@clubanderson`, `@hanthor`, `@Danathar`, `@nicholasjackson`, `@kellyaa`) and
whose entry is currently rejected by GitHub's CODEOWNERS validator. Reconcile
these files with the official roster: either add a roster maintainer as a second
`docs` approver/reviewer, or add `@KPRoche` to the roster if they hold an
intended docs-review responsibility, so the code-ownership files and the
governance record agree.

Not suited to `good first issue`: choosing approvers is a maintainer decision.

This issue tracks recommended changes resulting from an analysis of the Hive
Commons documentation requested in [cncf/techdocs#395][issue-395].

[issue-395]: https://github.com/cncf/techdocs/issues/395

- [ ] `https://github.com/hivecommons/docs/issues/NNN`
