---
mode: agent
description:
  Answer the CNCF TechDocs AI agent readiness questions for the documentation.
---

# AI Agent Readiness answers

Run the shared **answers** analysis for the `agent-readiness` criteria area.

1. Read the criteria definition in `.github/criteria/areas/agent-readiness.md`.
2. Read and follow the shared procedure in
   `.github/prompts/areas/answers.prompt.md`, treating `agent-readiness` as the
   selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as
the output filename; otherwise use the engine's default
(`<project-slug>-<stem>-answers.md`).

Output the file to the `.github/output/analysis` directory.
