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

Hive Commons' documentation content already exceeds the Sandbox-level bar in
nearly every area evaluated (see [analysis.md](analysis.md)); whether the
project overall clears the full Sandbox bar also depends on the
Website-guidelines majority, which that analysis rates "partially assessed," not
confirmed. This plan is deliberately small: a handful of targeted, independent,
low-effort actions rather than a large restructuring program, plus the
assessment-scope follow-ups in action 4 below. The top-level actions are:

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
4. **Follow up on the two areas this draft assessment flagged but did not fully
   evaluate.** A full CNCF Website Guidelines checklist pass (only the
   documentation-depth half of the Sandbox website bar was assessed here) and a
   docs-domain-specific AI Agent Readiness pass (the current CLOMonitor score
   this analysis cites is scoped to `hive.hivecommons.dev`, not
   `docs.hivecommons.dev`) are each their own follow-up task.

## High-level action 1: Seed a beginner-friendly documentation backlog

### Issue 1

File the small, self-contained documentation issues from the accompanying
[issues list](issues.md) - the CLI reference landing page and the
governance-pointer additions - each pre-labeled `good first issue` and
`documentation`, with prerequisites and completion criteria stated per issue, so
first-time contributors have something they can claim immediately without
maintainer-level context.

File the governance-pointer issues directly in `hivecommons/docs` and
`hivecommons.github.io`, matching [cncf/techdocs#395][issue-395]'s primary
destination, since each README edited is native to that repository (not synced
content).

File the CLI reference landing page in `hivecommons/hive` instead, as an
explicit exception to issue-395's default destination: the page content itself
(`hivectl.md` and `crux-cli.md` already live in `hivecommons/hive:src/docs/`,
and a new landing page joining them is new canonical content) must be authored
there per the docs README's "edit the canonical source, not the synced copies"
rule, even though it will ultimately render on `docs.hivecommons.dev`. If a
dedicated top-level nav entry (rather than just a new page) is wanted, file a
small follow-up issue in `hivecommons/docs` for the `page-map.ts` change, since
navigation structure is native to that repo and not synced.

Do not apply `good first issue` to the code-ownership reconciliation or the API
route/doc drift-check issues (see High-level action 2): choosing approvers is a
maintainer decision, and extracting Go routes and wiring a CI check requires
specialist context that a first-time contributor is unlikely to have. The
accessibility-scan issue (High-level action 3) can carry the label if it states
the scanning tool and a clear pass/fail recording step as its completion
criteria.

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
`docs.hivecommons.dev` linking `hivectl.md` and `crux-cli.md` together. Adding
the file to `hivecommons/hive:src/docs/` is not sufficient on its own:
`hivecommons/docs`'s sync (`scripts/sync-hive-docs.ts`) pulls from a curated
`files` list, not a mirror of `src/docs/`, and its drift-detection only
auto-reports an unlisted root-level page when a synced page links to it (see
`scripts/sync-hive-docs.drift.test.ts`'s `orphan.md` case). Either link the new
page from an already-synced page (for example `hivectl.md` or `crux-cli.md`) so
drift-detection reports and heals it, or add it to
`scripts/sync-hive-docs.files.json` directly in the same change.

Completion criteria: the page is published on `docs.hivecommons.dev` and
discoverable - linked from the existing "Operations" grouping at minimum, or
from a dedicated nav entry if the `page-map.ts` follow-up below is also filed
and done. A merged source file in `hivecommons/hive` alone does not satisfy
this; the page must actually resolve on the docs site.

### Issue 2

Add a one-sentence pointer to the org-level `GOVERNANCE.md` at the top of
`hivecommons/docs:README.md` and `hivecommons.github.io:README.md`.

### Issue 3

Run an automated accessibility scan (axe-core or Lighthouse) against both
`hivecommons.dev` and `docs.hivecommons.dev`, and record the results. An
automated scan alone cannot confirm the full
[usability/accessibility/devices][usability-criteria] rating: also perform, and
record, the manual checks the rubric calls for - keyboard-only navigation, color
contrast, screen-reader usability, and mobile navigation - so the "not assessed"
rating can move to confirmed rather than a scan-only approximation.

### Issue 4

Rewrite the Docker Compose quickstart's
(`hivecommons/hive:src/docs/quickstart-docker-compose.md`, lines 25-53) required
configuration changes as numbered, step-by-step instructions; they are currently
embedded as comments inside one large shell command block, which does not meet
the documentation criteria's step-by-step-instructions bar (the same gap the
Flatcar assessment flagged).

[usability-criteria]:
  https://github.com/cncf/techdocs/blob/main/docs/analysis/criteria.md#usability-accessibility-and-devices

## High-level action 4: Close assessment-scope follow-ups

This assessment's [method](analysis.md#assessment-method) was a documentation
and site review, not an independent task-completion test or a full checklist
walkthrough of every Sandbox requirement. Two recommendations from the analysis
fall outside what this draft could complete and are deferred here as their own
follow-up tasks rather than folded into the "exceeds Sandbox" conclusion.

### Issue 1

Assess Hive Commons against the full [Website Guidelines
checklist][website-guidelines] (licensing, community, copyright, trademark,
branding) item by item, as the KubeVirt assessment does
([analyses/2026/kubevirt/analysis.md](../kubevirt/analysis.md)), to confirm or
correct the "partially assessed" minimal-website-requirements rating in
[analysis.md](analysis.md). This assessment only evaluated the
documentation-depth half of that requirement.

### Issue 2

Strengthen `docs.hivecommons.dev`'s AI Agent Readiness, closing the gaps this
analysis identified rather than inferring readiness from the
`hive.hivecommons.dev`-scoped CLOMonitor score alone:

- [ ] Add the blockquoted summary this project's criteria call for to
      `llms.txt`.
- [ ] Point `llms.txt` links at Markdown versions of pages rather than HTML
      pages, once a Markdown mirror exists.
- [ ] Add a per-page Markdown mirror (for example, serving the underlying
      MDX/Markdown source at the same path with `.md` appended).
- [ ] Add a build step or test that verifies `llms.txt` against the live page
      set, not just the fixed community-link list used today.
- [ ] Add a directive near the top of docs pages pointing agents to `llms.txt`.
- [ ] Wire a CLOMonitor or `afdocs check` run against `docs.hivecommons.dev`
      specifically into CI.

[website-guidelines]:
  https://github.com/cncf/techdocs/blob/main/docs/website-guidelines-checklist.md
[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
