---
title: Add a CLI reference landing page
labels: [good first issue, documentation]
repo: https://github.com/hivecommons/hive/issues
---

## Description

Audience: New and existing Hive/Crux users looking for command-line tool
documentation.

Type: Reference / Information architecture.

`hivectl.md` and `crux-cli.md` exist under "Operations" on
`docs.hivecommons.dev` but have no shared landing page or top-level nav entry
comparable to the existing API reference section. Add a short "CLI reference"
page that links both, so a reader looking for "the CLI docs" has one obvious
starting point.

File this in `hivecommons/hive`, not `hivecommons/docs`, as an explicit
exception to [cncf/techdocs#395][issue-395]'s default destination: the new page
is canonical content joining two pages that already live in
`hivecommons/hive:src/docs/`, and per the docs README's sync rule, canonical
content must be authored there rather than in the synced copies under
`hivecommons/docs:docs/content/`. If a dedicated top-level nav entry is also
wanted (rather than just a linked page under "Operations"), file a small
follow-up issue in `hivecommons/docs` for the `page-map.ts` change, since
navigation structure is native to that repo and not synced.

Adding the file to `hivecommons/hive:src/docs/` is not sufficient on its own:
`hivecommons/docs`'s sync (`scripts/sync-hive-docs.ts`) pulls from a curated
`files` list, not a mirror of `src/docs/`, and its drift-detection only
auto-reports an unlisted root-level page when a synced page links to it (see
`scripts/sync-hive-docs.drift.test.ts`'s `orphan.md` case). Either link the new
page from an already-synced page (`hivectl.md` or `crux-cli.md`) so
drift-detection reports and heals it, or add it to
`scripts/sync-hive-docs.files.json` directly in the same change.

## Completion criteria

The page is published on `docs.hivecommons.dev` and discoverable - linked from
the existing "Operations" grouping at minimum, or from a dedicated nav entry if
the `page-map.ts` follow-up is also filed and done. A merged source file in
`hivecommons/hive` alone does not satisfy this.

## Related material

`hivecommons/hive:src/docs/hivectl.md`, `hivecommons/hive:src/docs/crux-cli.md`,
`hivecommons/docs:src/app/docs/page-map.ts`.

This issue tracks recommended changes resulting from an analysis of the Hive
Commons documentation requested in [cncf/techdocs#395][issue-395].

[issue-395]: https://github.com/cncf/techdocs/issues/395

- [ ] `https://github.com/hivecommons/hive/issues/NNN`
