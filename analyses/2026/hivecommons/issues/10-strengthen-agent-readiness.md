---
title: Strengthen docs.hivecommons.dev's AI Agent Readiness
labels: []
repo: https://github.com/hivecommons/docs/issues
---

## Description

Audience: Project maintainers.

Type: Task / Reference accuracy.

The CLOMonitor Agent Readiness score this analysis cites is scoped to
`hive.hivecommons.dev`, not `docs.hivecommons.dev`; a one-off, developer-machine
Agent-Friendly Docs scorecard run against the docs domain during this assessment
put it at 70/100 (C), with specific, addressable gaps. Close them:

- [ ] Add the blockquoted summary this project's criteria call for to `llms.txt`
      (llmstxt.org itself only requires the H1, but this project's own criteria
      ask for the blockquote too).
- [ ] Point `llms.txt` links at Markdown versions of pages rather than HTML
      pages, once a Markdown mirror exists.
- [ ] Add a per-page Markdown mirror (for example, serving the underlying
      MDX/Markdown source at the same path with `.md` appended).
- [ ] Add a build step or test that verifies `llms.txt` against the live page
      set, not just the fixed community-link list the current
      `scripts/llms-txt-community.test.ts` checks.
- [ ] Add a directive near the top of docs pages pointing agents to `llms.txt`.
- [ ] Wire a CLOMonitor or `afdocs check` run against `docs.hivecommons.dev`
      specifically into CI.

This issue tracks recommended changes resulting from an analysis of the Hive
Commons documentation requested in [cncf/techdocs#395][issue-395].

[issue-395]: https://github.com/cncf/techdocs/issues/395

- [ ] `https://github.com/hivecommons/docs/issues/NNN`
