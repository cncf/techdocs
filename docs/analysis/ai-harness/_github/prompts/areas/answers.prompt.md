---
mode: agent
description: Shared engine for producing analysis answers. Normally run via a per-area wrapper such as /information-architecture-answers.
---

# Shared engine: answers

This is the reusable procedure for answering an analysis area's questions. It is normally invoked through a per-area wrapper prompt (for example, `/information-architecture-answers`), which selects the criteria area for you.

## Inputs

- Area — the criteria area to analyze. When run from a wrapper, the wrapper names it. If you reached this engine without an area, ask the user to choose one of the areas defined in `.github/criteria/areas/` (the area name is the criteria filename without `.md`).
- Title (optional) — overrides the default output filename.

## Procedure

1. Read the criteria definition at `.github/criteria/areas/<area>.md`. It defines the area's Display name, File stem, and Questions.
2. Determine the project name from the "Current Repository" section of the repository Copilot instructions. Derive a project slug by lowercasing the name and replacing spaces with hyphens (for example, "KubeVirt" becomes `kubevirt`).
3. Answer every question in the criteria file's "Questions" section, using the sources described in the "Current Repository" section as context.

## Output

- Present the answers as indented paragraphs by two spaces under each question. Format each question as a bullet, not as a heading. Do not bold the answers.
- If an answer is "yes" or "no", provide a brief explanation.
- Aim for two to three paragraphs. 
- Write the result to a Markdown file in the `.github/output` directory:
  - If a title was provided, name the file `<title>.md`.
  - Otherwise name it `<project-slug>-<stem>-answers.md`.
  - If a file exists by the same name, overwrite it.

Output the file to the `.github/output` directory.
