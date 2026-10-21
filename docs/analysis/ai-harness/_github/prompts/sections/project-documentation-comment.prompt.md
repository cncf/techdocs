---
mode: agent
description: Write an overall comment on the Project Documentation analysis section by synthesizing its per-area comment files.
---

Run the shared **section-comment** analysis for the `project-documentation` section.

1. Read the section definition in `.github/criteria/sections/project-documentation.md`.
2. Read and follow the shared procedure in `.github/prompts/sections/section-comment.prompt.md`, treating `project-documentation` as the selected section.

Optional output filename override: `${input:title}` — if non-empty, use it as the output filename; otherwise use the engine's default (`<project-slug>-<section-slug>-comment.md`).

Output the file to the `.github/output` directory.
