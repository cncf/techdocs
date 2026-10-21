---
mode: agent
description: Shared engine for producing an overall comment on an analysis section by synthesizing its per-area comment files. Normally run via a per-section wrapper such as /project-documentation-comment.
---

# Shared engine: section-comment

Reusable procedure for writing an overall comment on one analysis **section** (for example, "Project Documentation"). Unlike the per-area `comment` engine, this engine does not analyze the documentation directly — it synthesizes the section's existing per-area comment files into a single overall comment. Normally invoked through a per-section wrapper prompt (for example, `/project-documentation-comment`), which selects the section for you.

## Inputs

- Section — the analysis section to comment on. When run from a wrapper, the wrapper names it. If you reached this engine without a section, ask the user to choose one of: `project-documentation`, `contributor-documentation`, `website-infrastructure`.
- Title (optional) — overrides the default output filename.

## Precondition

This engine reads the per-area comment files that already exist in the `.github/output` directory; it does not re-analyze the documentation. Every area listed in the section definition must already have its per-area comment file (produced by that area's `comment` wrapper, for example `/information-architecture-comment`). If one or more are missing, stop and tell the user exactly which per-area comment prompts to run first. Do not write a partial section comment.

## Procedure

1. Read the section definition at `.github/criteria/sections/<section>.md`. Use its Display name, Section slug, and the Areas table (each row gives an area's criterion label and the stem of its per-area comment file).
2. Determine the project name and documentation label from the "Current Repository" section of the repository Copilot instructions (for example, "the KubeVirt user guide"). Derive the project slug by lowercasing the name and replacing spaces with hyphens.
3. For each area row, read the existing per-area comment file `<project-slug>-<stem>-comment.md` from the `.github/output` directory. If any are missing, follow the Precondition above and stop.
4. From each area comment, extract its overall standing, its rating (the final `Rating: <n> - <label>` line), and its key strengths and highest-impact gaps or recommendations.
5. Build a summary ratings table with one row per area, in the order listed in the section definition:

   | Criterion | Rating (1-5) |
   | --------- | ------------ |
   | <criterion label> | <n> - <label> |

   If an area comment has no `Rating:` line, use `N/A` for that row.
6. If `website-infrastructure` is the current section, add this table and its label for these other metrics:

   Other Metrics:

   | Criterion                                   | [Rating (1-5)] |
   | ------------------------------------------- | -------------- |
   | A11y plan & implementation                  | [rating (1-5)] |
   | Mobile-first plan & implementation          | [rating (1-5)] |
   | HTTPS access & HTTP redirect                | [rating (1-5)] |
   | Google Analytics 4 for production only      | [rating (1-5)] |
   | Indexing allowed for production server only | [rating (1-5)] |
   | Intra-site / local search                   | [rating (1-5)] |
   | Account custodians are documented           | [rating (1-5)] |

7. Write a two to five paragraph overall comment on the section beneath the table(s). Synthesize rather than concatenate: lead with the section's overall standing, describe only the most important cross-cutting themes that recur across two or more areas. Do not describe detailed suggestions, as they should be covered in the per-area comments and recommendations. Avoid large paragraphs with listed details, so use bulleted lists where appropriate. Keep it concise, actionable, and in complete sentences, following the repository's analysis response style.

## Output

- Begin the file with a level-1 heading `# <Section display name> - Overall Comment`.
- Follow the heading with the summary ratings table, then the two-to-five paragraph comment.
- Write the result to a Markdown file in the `.github/output` directory:
  - If a title was provided, name the file `<title>.md`.
  - Otherwise name it `<project-slug>-<section-slug>-comment.md`.

Output the file to the `.github/output` directory.
