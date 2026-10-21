---
mode: agent
description: Provide recommendations for improving the usability accessibility and devices of the documentation.
---

Run the shared **recommendations** analysis for the `usability-accessibility-devices` criteria area.

1. Read the criteria definition in `.github/criteria/areas/usability-accessibility-devices.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/recommendations.prompt.md`, treating `usability-accessibility-devices` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-recommendations.md`).

Output the file to the `.github/output` directory.
