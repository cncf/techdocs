---
mode: agent
description: Answer the CNCF TechDocs beginner friendly issue backlog questions for the documentation.
---

Run the shared **answers** analysis for the `beginner-issue-backlog` criteria area.

1. Read the criteria definition in `.github/criteria/areas/beginner-issue-backlog.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/answers.prompt.md`, treating `beginner-issue-backlog` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-answers.md`).

Output the file to the `.github/output` directory.
