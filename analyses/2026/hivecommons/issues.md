---
title: Hive Commons Umbrella Issue and Issues List
tags: [hivecommons]
---

## Overview

This is a short, deliberately small backlog: Hive Commons' documentation content
already exceeds the CNCF Sandbox bar in nearly every area evaluated (see
[analysis.md](analysis.md)) - though whether the project overall clears the full
Sandbox bar also depends on the Website-guidelines majority, which that analysis
rates "partially assessed," not confirmed - so the issues below are independent,
low-effort, high-value items rather than a large restructuring program. Several
are explicitly suited to first-time contributors and are intended to be filed
with a `good first issue` label, since the analysis found that label currently
unused on open issues in all three in-scope repositories.

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
> once this analysis is reviewed and accepted by project maintainers. Link each
> sub-issue below to it with a Markdown checkbox once filed.

[issue-395]: https://github.com/cncf/techdocs/issues/395

## Issues

Each issue below is its own file under [`issues/`](.), formatted the way
[cncf/techdocs#385](https://github.com/cncf/techdocs/pull/385) formatted the
KubeVirt issues backlog: YAML front matter with `title`, `labels`, and the
destination `repo`, followed by the issue body. Labels listed below are
confirmed to already exist in the destination repository.

<!-- markdownlint-disable line-length -->

| File                                                                                                   | Title                                                                | Labels                              | Destination repo                    |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ----------------------------------- | ----------------------------------- |
| [`issues/01-cli-reference-landing-page.md`](issues/01-cli-reference-landing-page.md)                   | Add a CLI reference landing page                                     | `good first issue`, `documentation` | `hivecommons/hive`                  |
| [`issues/02-governance-pointer-docs-readme.md`](issues/02-governance-pointer-docs-readme.md)           | State the org-level governance pointer in the docs README            | `good first issue`, `documentation` | `hivecommons/docs`                  |
| [`issues/03-governance-pointer-website-readme.md`](issues/03-governance-pointer-website-readme.md)     | State the org-level governance pointer in the website README         | `good first issue`, `documentation` | `hivecommons/hivecommons.github.io` |
| [`issues/04-reconcile-codeowners-with-roster.md`](issues/04-reconcile-codeowners-with-roster.md)       | Reconcile hivecommons/docs code ownership with the maintainer roster | (none)                              | `hivecommons/docs`                  |
| [`issues/05-add-api-route-doc-drift-check.md`](issues/05-add-api-route-doc-drift-check.md)             | Add a drift check between API routes and the API reference           | (none)                              | `hivecommons/hive`                  |
| [`issues/06-run-accessibility-scan.md`](issues/06-run-accessibility-scan.md)                           | Run and record an accessibility scan for both sites                  | `good first issue`, `documentation` | `hivecommons/hivecommons.github.io` |
| [`issues/07-rewrite-docker-compose-quickstart.md`](issues/07-rewrite-docker-compose-quickstart.md)     | Rewrite the Docker Compose quickstart as numbered steps              | (none)                              | `hivecommons/hive`                  |
| [`issues/08-seed-good-first-issue-backlog.md`](issues/08-seed-good-first-issue-backlog.md)             | Seed a beginner-friendly documentation issue backlog                 | (none)                              | `hivecommons/docs`                  |
| [`issues/09-assess-website-guidelines-checklist.md`](issues/09-assess-website-guidelines-checklist.md) | Assess the full Website Guidelines checklist against the Sandbox bar | (none)                              | `hivecommons/hivecommons.github.io` |
| [`issues/10-strengthen-agent-readiness.md`](issues/10-strengthen-agent-readiness.md)                   | Strengthen docs.hivecommons.dev's AI Agent Readiness                 | (none)                              | `hivecommons/docs`                  |

<!-- markdownlint-enable line-length -->
