---
mode: agent
description: Run the full content maintainability analysis (answers, comment, and recommendations) for the documentation.
---

Run the shared **full** analysis for the `content-maintainability` criteria area.

1. Read the criteria definition in `.github/criteria/areas/content-maintainability.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/full.prompt.md`, treating `content-maintainability` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the base name for all three output files (`<title>-answers.md`, `<title>-comment.md`, `<title>-recommendations.md`); otherwise use each engine's default (`<project-slug>-<stem>-<type>.md`).

Output the file to the `.github/output` directory.
