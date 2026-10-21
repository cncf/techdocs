---
mode: agent
description: Write a comment on the usability accessibility and devices of the documentation.
---

Run the shared **comment** analysis for the `usability-accessibility-devices` criteria area.

1. Read the criteria definition in `.github/criteria/areas/usability-accessibility-devices.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/comment.prompt.md`, treating `usability-accessibility-devices` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-comment.md`).

Output the file to the `.github/output` directory.
