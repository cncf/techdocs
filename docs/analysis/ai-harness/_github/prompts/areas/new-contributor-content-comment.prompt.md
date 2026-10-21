---
mode: agent
description: Write a comment on the new contributor getting started content of the documentation.
---

Run the shared **comment** analysis for the `new-contributor-content` criteria area.

1. Read the criteria definition in `.github/criteria/areas/new-contributor-content.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/comment.prompt.md`, treating `new-contributor-content` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-comment.md`).

Output the file to the `.github/output` directory.
