---
mode: agent
description: Write a comment on the AI agent readiness of the documentation.
---

# AI Agent Readiness comment

Run the shared **comment** analysis for the `agent-readiness` criteria area.

1. Read the criteria definition in `.github/criteria/areas/agent-readiness.md`.
2. Read and follow the shared procedure in
   `.github/prompts/areas/comment.prompt.md`, treating `agent-readiness` as the
   selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as
the output filename; otherwise use the engine's default
(`<project-slug>-<stem>-comment.md`).

Output the file to the `.github/output/analysis` directory.
