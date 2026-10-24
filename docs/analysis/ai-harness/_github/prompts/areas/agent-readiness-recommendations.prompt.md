---
mode: agent
description:
  Provide recommendations for improving the AI agent readiness of the
  documentation.
---

# AI Agent Readiness recommendations

Run the shared **recommendations** analysis for the `agent-readiness` criteria
area.

1. Read the criteria definition in `.github/criteria/areas/agent-readiness.md`.
2. Read and follow the shared procedure in
   `.github/prompts/areas/recommendations.prompt.md`, treating `agent-readiness`
   as the selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as
the output filename; otherwise use the engine's default
(`<project-slug>-<stem>-recommendations.md`).

Output the file to the `.github/output/analysis` directory.
