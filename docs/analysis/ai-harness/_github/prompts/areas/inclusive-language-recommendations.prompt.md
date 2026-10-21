---
mode: agent
description: Provide recommendations for improving the inclusive language of the documentation.
---

Run the shared **recommendations** analysis for the `inclusive-language` criteria area.

1. Read the criteria definition in `.github/criteria/areas/inclusive-language.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/recommendations.prompt.md`, treating `inclusive-language` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-recommendations.md`).

Output the file to the `.github/output` directory.
