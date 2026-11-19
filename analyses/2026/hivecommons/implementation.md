---
title: Implementing Hive Commons Doc Improvements
tags: [hivecommons]
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document provides actionable suggestions for improving the Hive Commons
technical documentation.

For an analysis and general discussion of recommendations on Hive Commons
technical documentation, see [analysis.md](analysis.md).

### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards and
suggests possible improvements. In most cases there is more than one way to do
things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. Borrowing terminology from the lexicon of [RFCs][rfc-keywords], the
changes described here should be understood as "recommended" or "should" at the
strongest, and "optional" or "may" in many cases.

Hive Commons' documentation already exceeds the Sandbox-level bar in nearly
every area (see [analysis.md](analysis.md)), so this plan is deliberately small:
a handful of targeted, independent, low-effort actions rather than a large
restructuring program. The top-level actions are:

1. **Close the newcomer-backlog gap.** The labeling pipeline and contributor
   onboarding docs for a beginner-friendly issue backlog are in place, but no
   open issue currently carries `good first issue` in any of the three in-scope
   repositories. Seed a small backlog directly from this plan.
2. **Reduce single-points-of-failure and drift risk.** Two specific places rely
   on a single owner or a purely social convention where a lightweight technical
   safeguard would help: `hivecommons/docs` code ownership, and the
   hand-maintained API reference's route-list staying in sync with the Go
   source.
3. **Close small, self-contained documentation/navigation gaps.** A missing
   CLI-reference landing page, an unstated cross-repo governance pointer, and an
   unconfirmed accessibility rating are each independent, quick fixes.

## High-level action 1: Seed a beginner-friendly documentation backlog

### Issue 1

File the small, self-contained documentation issues from the accompanying
[issues list](issues.md) - the CLI reference landing page and the
governance-pointer additions - each pre-labeled `good first issue` and
`documentation`, with prerequisites and completion criteria stated per issue,
so first-time contributors have something they can claim immediately without
maintainer-level context.

File the governance-pointer issues directly in `hivecommons/docs` and
`hivecommons.github.io`, matching [cncf/techdocs#395][issue-395]'s primary
destination, since each README edited is native to that repository (not
synced content).

File the CLI reference landing page in `hivecommons/hive` instead, as an
explicit exception to issue-395's default destination: the page content itself
(`hivectl.md` and `crux-cli.md` already live in `hivecommons/hive:src/docs/`,
and a new landing page joining them is new canonical content) must be authored
there per the docs README's "edit the canonical source, not the synced
copies" rule, even though it will ultimately render on `docs.hivecommons.dev`.
If a dedicated top-level nav entry (rather than just a new page) is wanted,
file a small follow-up issue in `hivecommons/docs` for the `page-map.ts`
change, since navigation structure is native to that repo and not synced.

Do not apply `good first issue` to the code-ownership reconciliation or the
API route/doc drift-check issues (see High-level action 2): choosing approvers
is a maintainer decision, and extracting Go routes and wiring a CI check
requires specialist context that a first-time contributor is unlikely to have.
The accessibility-scan issue (High-level action 3) can carry the label if it
states the scanning tool and a clear pass/fail recording step as its
completion criteria.

[issue-395]: https://github.com/cncf/techdocs/issues/395

## High-level action 2: Reduce bus-factor and content-drift risk

### Issue 1

Reconcile `hivecommons/docs`'s `CODEOWNERS` and `OWNERS` files against
`hivecommons/.project/maintainers.yaml` (the source of truth for project
maintainership): add a roster maintainer as a second approver/reviewer, or add
the currently non-roster `@KPRoche` to the roster if they hold an intended
docs-review responsibility.

### Issue 2

Add a CI check (a simple script is sufficient) that flags a pull request
touching Go route registrations in `hivecommons/hive` when it does not also
touch `src/docs/api-reference.md` or the relevant `src/docs/api-reference/*`
page, making the existing "update this page in the same change" convention
enforceable rather than purely social.

## High-level action 3: Close small, independent documentation gaps

### Issue 1

Add a short "CLI reference" landing page (or a nav entry) on
`docs.hivecommons.dev` linking `hivectl.md` and `crux-cli.md` together.

### Issue 2

Add a one-sentence pointer to the org-level `GOVERNANCE.md` at the top of
`hivecommons/docs:README.md` and `hivecommons.github.io:README.md`.

### Issue 3

Run an automated accessibility scan (axe-core or Lighthouse) against both
`hivecommons.dev` and `docs.hivecommons.dev`, and record the results (for
example, as a comment on the tracking issue for this analysis) to confirm or
correct the provisional "meets standards" rating given in the analysis.

[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
