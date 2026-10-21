---
mode: agent
description: Run the full information architecture analysis (answers, comment, and recommendations) for the documentation.
---

Run the shared **full** analysis for the `information-architecture` criteria area.

1. Read the criteria definition in `.github/criteria/areas/information-architecture.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/full.prompt.md`, treating `information-architecture` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the base name for all three output files (`<title>-answers.md`, `<title>-comment.md`, `<title>-recommendations.md`); otherwise use each engine's default (`<project-slug>-<stem>-<type>.md`).

Output the file to the `.github/output` directory.
