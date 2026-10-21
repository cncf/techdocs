---
mode: agent
description: Provide recommendations for improving the case studies of the documentation.
---

Run the shared **recommendations** analysis for the `case-studies` criteria area.

1. Read the criteria definition in `.github/criteria/areas/case-studies.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/recommendations.prompt.md`, treating `case-studies` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-recommendations.md`).

Output the file to the `.github/output` directory.
