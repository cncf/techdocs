---
mode: agent
description: Write a comment on the content creation process of the documentation.
---

Run the shared **comment** analysis for the `content-creation-process` criteria area.

1. Read the criteria definition in `.github/criteria/areas/content-creation-process.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/comment.prompt.md`, treating `content-creation-process` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-comment.md`).

Output the file to the `.github/output` directory.
