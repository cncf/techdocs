---
mode: agent
description: Provide recommendations for improving the communication methods documented of the documentation.
---

Run the shared **recommendations** analysis for the `communication-methods-documented` criteria area.

1. Read the criteria definition in `.github/criteria/areas/communication-methods-documented.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/recommendations.prompt.md`, treating `communication-methods-documented` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-recommendations.md`).

Output the file to the `.github/output` directory.
