---
title: Hive Commons Umbrella Issue and Issues List
tags: [hivecommons]
---

## Overview

This is a short, deliberately small backlog: Hive Commons' documentation already
exceeds the CNCF Sandbox bar in nearly every area evaluated (see
[analysis.md](analysis.md)), so the issues below are independent, low-effort,
high-value items rather than a large restructuring program. Several are
explicitly suited to first-time contributors and are intended to be filed with a
`good first issue` label, since the analysis found that label currently unused
on open issues in all three in-scope repositories.

This issue tracks recommended changes resulting from an analysis of the Hive
Commons documentation requested in
[cncf/techdocs#395](https://github.com/cncf/techdocs/issues/395). The analysis
and supporting documents are here:
[https://github.com/cncf/techdocs/tree/main/analyses/2026/hivecommons](https://github.com/cncf/techdocs/tree/main/analyses/2026/hivecommons).

The CNCF Tech Docs effort is tracked in the CNCF Tech Docs repo:
[https://github.com/cncf/techdocs/issues](https://github.com/cncf/techdocs/issues).

## Umbrella issue

> To be filed in `hivecommons/hive` (or the org-level `.github` repo, per
> maintainer preference) once this analysis is reviewed and accepted by project
> maintainers. Link each sub-issue below to it with a Markdown checkbox once
> filed.

## Issues

### Issue: Add a CLI reference landing page

Audience: New and existing Hive/Crux users looking for command-line tool
documentation.

Type: Reference / Information architecture.

`hivectl.md` and `crux-cli.md` exist under "Operations" on
`docs.hivecommons.dev` but have no shared landing page or top-level nav entry
comparable to the existing API reference section. Add a short "CLI reference"
page (or a nav grouping) that links both, so a reader looking for "the CLI docs"
has one obvious starting point.

Related material: `hivecommons/hive:src/docs/hivectl.md`,
`hivecommons/hive:src/docs/crux-cli.md`,
`hivecommons/docs:src/app/docs/page-map.ts`.

- [ ] `https://github.com/hivecommons/hive/issues/NNN`

### Issue: State the org-level governance pointer in docs/website READMEs

Audience: New contributors and auditors starting from `hivecommons/docs` or
`hivecommons.github.io` rather than `hivecommons/hive`.

Type: Conceptual / Governance.

Neither `hivecommons/docs:README.md` nor `hivecommons.github.io:README.md`
states that project governance is defined at the organization level. A reader
has to infer this indirectly via cross-references in `hive`'s own
`GOVERNANCE.md`. Add one sentence to the top of each README linking to
`hivecommons/.github:GOVERNANCE.md`.

- [ ] `https://github.com/hivecommons/docs/issues/NNN`
- [ ] `https://github.com/hivecommons/hivecommons.github.io/issues/NNN`

### Issue: Add a second code owner to hivecommons/docs

Audience: Project maintainers (bus-factor/maintenance planning).

Type: Process.

`hivecommons/docs`'s `CODEOWNERS` and `OWNERS` files currently list only
`@clubanderson` as approver/reviewer, unlike `hivecommons.github.io`, which
already has two. Add a second approver to reduce single-maintainer risk for
docs-site reviews.

- [ ] `https://github.com/hivecommons/docs/issues/NNN`

### Issue: Add a drift check between API routes and the API reference

Audience: Hive maintainers and contributors adding/renaming API routes.

Type: Process / Reference accuracy.

`src/docs/api-reference.md` states "There is no generator; update this page in
the same change that adds or renames a route," but nothing currently enforces
this. Add a lightweight CI check (even a simple diff/grep-based script comparing
route registrations in the Go source against the documented route list in
`src/docs/api-reference/*`) that flags a PR touching routes without a
corresponding doc update.

Suggested changes:

- Prerequisites: familiarity with the Go route-registration pattern used in
  `hivecommons/hive`.
- Procedure:
  1. Write a script that extracts registered route paths from the relevant Go
     source files.
  2. Compare the extracted list against the routes documented in
     `src/docs/api-reference/*.md`.
  3. Fail CI (or post a PR comment) when a new/changed/removed route has no
     corresponding documentation change in the same PR.
- Result: a PR that adds or renames a route without a matching documentation
  change is flagged before merge rather than relying on the "update this page in
  the same change" convention alone.

- [ ] `https://github.com/hivecommons/hive/issues/NNN`

### Issue: Run and record an accessibility scan for both sites

Audience: Project maintainers; informs a future documentation re-assessment.

Type: Task.

Neither `hivecommons.dev` nor `docs.hivecommons.dev` has had a recorded,
automated accessibility scan. Run axe-core or Lighthouse against both sites and
record the results (for example, as a comment on the tracking issue for this
analysis, or a short doc under `src/docs/`), so the "Usability, accessibility
and devices" rating in [analysis.md](analysis.md) can move from provisional to
confirmed at the next review.

- [ ] `https://github.com/hivecommons/hivecommons.github.io/issues/NNN`

### Issue: Seed a beginner-friendly documentation issue backlog

Audience: First-time contributors.

Type: Process / Community.

At assessment time, zero open issues carry the `good first issue` label in any
of `hivecommons/docs`, `hivecommons/hive`, or `hivecommons.github.io`, even
though the label and its supporting onboarding documentation exist and are
actively referenced. File the issues above (and any other small, independent
documentation tasks maintainers identify) with `good first issue` and
`documentation` labels to give new contributors something to claim immediately.

- [ ] `https://github.com/hivecommons/docs/issues/NNN`
