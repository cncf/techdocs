---
mode: agent
description: Shared engine for running all three analyses (answers, comment, recommendations) for one area. Normally run via a per-area wrapper such as /information-architecture-full.
---

# Shared engine: full

Reusable procedure for running the complete analysis of one criteria area: it gathers the material for the **answers**, **comment**, and **recommendations** engines in a single pass, sorts it by output type, and then writes the three files in sequence. Normally invoked through a per-area wrapper prompt (for example, `/information-architecture-full`), which selects the criteria area for you.

## Inputs

- Area — the criteria area to analyze. When run from a wrapper, the wrapper names it. If you reached this engine without an area, ask the user to choose one of the areas defined in `.github/criteria/areas/` (the area name is the criteria filename without `.md`).
- Title (optional) — a base name that overrides the default output filenames. When provided, the outputs are `<title>-answers.md`, `<title>-comment.md`, and `<title>-recommendations.md`.

## Procedure

Verify output style as Claude default, and review the "Analysis responses style" guidelines in copilot-instructions.md.

Analyze first, write last. While answering the questions and forming the comment you will inevitably notice things to fix; those observations belong in the recommendations file, not in the answers or comment. Collect everything before writing so each file contains only its own kind of content.

### Phase 1: Read

1. Read the criteria definition at `.github/criteria/areas/<area>.md` once, so its Display name, File stem, Questions, and Comment guidance are available to every step below.
2. Read all three engines — `.github/prompts/areas/answers.prompt.md`, `.github/prompts/areas/comment.prompt.md`, and `.github/prompts/areas/recommendations.prompt.md` — so you know the required structure of each output before you start analyzing.

### Phase 2: Analyze and sort

3. Investigate the documentation as the answers engine directs. As you work, keep three running lists:
   - Findings: factual observations that answer a question (what exists, where it is, what is missing).
   - Assessments: high-level judgments about strengths and weaknesses, and the evidence for the rating.
   - Fixes: anything you would tell the project to change or add.
4. Whenever an observation suggests a fix, record the fix in the Fixes list and keep only the underlying finding in the Findings or Assessments list. A finding may state that something is missing or unclear; it must not say what to do about it.
5. Draft all three documents in memory from these lists:
   - Answers, from the Findings list, following the answers engine's Output section.
   - Comment, from the Assessments list, following the comment engine's Procedure and Output sections.
   - Recommendations, from the Fixes list, following the recommendations engine's Output section. Base each recommendation on a finding or assessment that appears in the drafted answers or comment.
6. Review the drafts against each other before writing anything to disk:
   - Remove any imperative or "should" phrasing from the answers and comment; move it to the recommendations.
   - Confirm every recommendation traces back to something stated in the answers or comment. If it does not, add the supporting finding or drop the recommendation.
   - Confirm the answers and comment do not duplicate each other; the comment synthesizes, it does not restate.

### Phase 3: Write

7. Write the three files in this order, since the recommendations engine expects the first two to exist:
   1. Answers: `.github/prompts/areas/answers.prompt.md` output.
   2. Comment: `.github/prompts/areas/comment.prompt.md` output.
   3. Recommendations: `.github/prompts/areas/recommendations.prompt.md` output. Because the sorting in Phase 2 already kept recommendations out of the comment, its instruction to move stray recommendations out of the comment file should find nothing to move.

When a Title is provided, pass it through to each engine so the three files share the `<title>` base name described under "Inputs".

## Output

- Produce all three Markdown files in the `.github/output` directory:
  - Answers: `<title>-answers.md`, or `<project-slug>-<stem>-answers.md` by default.
  - Comment: `<title>-comment.md`, or `<project-slug>-<stem>-comment.md` by default.
  - Recommendations: `<title>-recommendations.md`, or `<project-slug>-<stem>-recommendations.md` by default.
- After writing them, list the three filenames you created.

Output the file to the `.github/output` directory.
