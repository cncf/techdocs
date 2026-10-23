---
mode: agent
description:
  Answer the CNCF TechDocs seo, analytics & site search questions for the
  documentation.
---

# SEO, Analytics, and Site Search answers

Run the shared **answers** analysis for the `seo-analytics` criteria area.

1. Read the criteria definition in `.github/criteria/areas/seo-analytics.md`.
2. Read and follow the shared procedure in
   `.github/prompts/areas/answers.prompt.md`, treating `seo-analytics` as the
   selected area.

Optional output filename override: `${input:title}` — if non-empty, use it as
the output filename; otherwise use the engine's default
(`<project-slug>-<stem>-answers.md`).

Output the file to the `.github/output/analysis` directory.
