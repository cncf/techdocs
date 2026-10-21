---
mode: agent
description: Answer the CNCF TechDocs single-source requirement questions for the documentation.
---

Run the shared **answers** analysis for the `single-source-requirement` criteria area.

1. Read the criteria definition in `.github/criteria/areas/single-source-requirement.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/answers.prompt.md`, treating `single-source-requirement` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-answers.md`).

Output the file to the `.github/output` directory.
