---
mode: agent
description: Write a comment on the seo, analytics & site search of the documentation.
---

Run the shared **comment** analysis for the `seo-analytics` criteria area.

1. Read the criteria definition in `.github/criteria/areas/seo-analytics.md`.
2. Read and follow the shared procedure in `.github/prompts/areas/comment.prompt.md`, treating `seo-analytics` as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<stem>-comment.md`).

Output the file to the `.github/output` directory.
