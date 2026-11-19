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
[https://github.com/cncf/techdocs/tree/main/analyses](https://github.com/cncf/techdocs/tree/main/analyses)
under `2026/hivecommons`.

The CNCF Tech Docs effort is tracked in the CNCF Tech Docs repo:
[https://github.com/cncf/techdocs/issues](https://github.com/cncf/techdocs/issues).

## Umbrella issue

> To be filed in `hivecommons/docs` (the primary implementation destination
> named in [cncf/techdocs#395][issue-395], alongside `hivecommons.github.io`)
> once this analysis is reviewed and accepted by project maintainers. Link
> each sub-issue below to it with a Markdown checkbox once filed.

[issue-395]: https://github.com/cncf/techdocs/issues/395

## Issues

### Issue: Add a CLI reference landing page

Audience: New and existing Hive/Crux users looking for command-line tool
documentation.

Type: Reference / Information architecture.

`hivectl.md` and `crux-cli.md` exist under "Operations" on
`docs.hivecommons.dev` but have no shared landing page or top-level nav entry
comparable to the existing API reference section. Add a short "CLI reference"
page that links both, so a reader looking for "the CLI docs" has one obvious
starting point.

File this in `hivecommons/hive`, not `hivecommons/docs`, as an explicit
exception to [cncf/techdocs#395][issue-395]'s default destination: the new
page is canonical content joining two pages that already live in
`hivecommons/hive:src/docs/`, and per the docs README's sync rule, canonical
content must be authored there rather than in the synced copies under
`hivecommons/docs:docs/content/`. If a dedicated top-level nav entry is also
wanted (rather than just a linked page under "Operations"), file a small
follow-up issue in `hivecommons/docs` for the `page-map.ts` change, since
navigation structure is native to that repo and not synced.

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

### Issue: Reconcile hivecommons/docs code ownership with the maintainer roster

Audience: Project maintainers (bus-factor/maintenance planning, governance
accuracy).

Type: Process.

`hivecommons/docs`'s `OWNERS` file lists only `@clubanderson` as
approver/reviewer, while its `CODEOWNERS` also lists `@KPRoche`, who is not on
the project's maintainer roster (`hivecommons/.project/maintainers.yaml`:
`@clubanderson`, `@hanthor`, `@Danathar`, `@nicholasjackson`, `@kellyaa`) and
whose entry is currently rejected by GitHub's CODEOWNERS validator. Reconcile
these files with the official roster: either add a roster maintainer as a
second `docs` approver/reviewer, or add `@KPRoche` to the roster if they hold
an intended docs-review responsibility, so the code-ownership files and the
governance record agree.

- [ ] `https://github.com/hivecommons/docs/issues/NNN`

### Issue: Add a drift check between API routes and the API reference

Audience: Hive maintainers and contributors adding/renaming API routes.

Type: Process / Reference accuracy.

`src/docs/api-reference.md` states "There is no generator; update this page in
the same change that adds or renames a route," and no automated enforcement
of that convention was found within `src/docs/` (the scope of this
assessment); this analysis did not review `hivecommons/hive`'s source or
tests outside `src/docs/`, so it cannot assert that no enforcement exists
anywhere in the repository. A comparable drift guard already exists for the
sibling `dashboard/openapi.json` spec:
`src/pkg/dashboard/openapi_route_parity_test.go` parses Go route-registration
call sites with `go/ast` and fails if they drift from the spec. Add (or
confirm) a similar lightweight check for the hand-written API reference,
reusing that test's route-extraction approach rather than building a separate
one from scratch.

Suggested changes:

- Prerequisites: familiarity with the Go route-registration pattern used in
  `hivecommons/hive`, and with the existing
  `openapi_route_parity_test.go` approach.
- Procedure:
  1. Reuse (or factor out) the route-extraction logic from
     `openapi_route_parity_test.go` to get the list of registered route paths.
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

No scan was performed or supplied for this assessment to confirm the
"Usability, accessibility and devices" rating in [analysis.md](analysis.md)
for either `hivecommons.dev` or `docs.hivecommons.dev`. Run axe-core or
Lighthouse against both sites and record the results (for example, as a
comment on the tracking issue for this analysis, or a short doc under
`src/docs/`), so that rating can move from "not assessed" to confirmed at the
next review.

- [ ] `https://github.com/hivecommons/hivecommons.github.io/issues/NNN`

### Issue: Seed a beginner-friendly documentation issue backlog

Audience: First-time contributors.

Type: Process / Community.

At assessment time, zero open issues carry the `good first issue` label in any
of `hivecommons/docs`, `hivecommons/hive`, or `hivecommons.github.io`, even
though the label and its supporting onboarding documentation exist and are
actively referenced. File the CLI reference landing page, governance-pointer,
and accessibility-scan issues above with `good first issue` and
`documentation` labels (the accessibility-scan issue only if it states the
scanning tool and a clear pass/fail recording step as its completion
criteria) to give new contributors something to claim immediately. Do not
apply `good first issue` to the code-ownership reconciliation or the API
route/doc drift-check issues above: choosing approvers is a maintainer
decision, and extracting Go routes and wiring a CI check requires specialist
context a first-time contributor is unlikely to have.

- [ ] `https://github.com/hivecommons/docs/issues/NNN`
