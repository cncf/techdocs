---
title: Add a drift check between API routes and the API reference
labels: []
repo: https://github.com/hivecommons/hive/issues
---

## Description

Audience: Hive maintainers and contributors adding/renaming API routes.

Type: Process / Reference accuracy.

`src/docs/api-reference.md` states "There is no generator; update this page in
the same change that adds or renames a route," and no automated enforcement of
that convention was found within `src/docs/` (the scope of this assessment);
this analysis did not review `hivecommons/hive`'s source or tests outside
`src/docs/`, so it cannot assert that no enforcement exists anywhere in the
repository. A comparable drift guard already exists for the sibling
`dashboard/openapi.json` spec: `src/pkg/dashboard/openapi_route_parity_test.go`
parses Go route-registration call sites with `go/ast` and fails if they drift
from the spec. Add (or confirm) a similar lightweight check for the hand-written
API reference, reusing that test's route-extraction approach rather than
building a separate one from scratch.

## Suggested changes

- Prerequisites: familiarity with the Go route-registration pattern used in
  `hivecommons/hive`, and with the existing `openapi_route_parity_test.go`
  approach.
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

Not suited to `good first issue`: extracting Go routes and wiring a CI check
requires specialist context a first-time contributor is unlikely to have.

This issue tracks recommended changes resulting from an analysis of the Hive
Commons documentation requested in [cncf/techdocs#395][issue-395].

[issue-395]: https://github.com/cncf/techdocs/issues/395

- [ ] `https://github.com/hivecommons/hive/issues/NNN`
