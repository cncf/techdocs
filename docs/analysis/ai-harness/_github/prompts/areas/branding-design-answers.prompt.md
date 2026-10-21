---
mode: agent
description: Answer the CNCF TechDocs branding and design questions for the documentation.
---

Run the shared **answers** analysis for the `branding-design` criteria area.

1. Read the criteria definition in `.github/criteria/areas/branding-design.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/answers.prompt.md`, treating `branding-design` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-answers.md`).

Output the file to the `.github/output` directory.
