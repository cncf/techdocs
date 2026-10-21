---
mode: agent
description: Shared engine for producing analysis recommendations. Normally run via a per-area wrapper such as /information-architecture-recommendations.
---

# Shared engine: recommendations

Reusable procedure for producing recommendations for one area, based on the previously generated answers and comment. Normally invoked through a per-area wrapper prompt (for example, `/information-architecture-recommendations`), which selects the criteria area for you.

## Inputs

- Area — the criteria area to analyze. When run from a wrapper, the wrapper names it. If you reached this engine without an area, ask the user to choose one of the areas defined in `.github/criteria/areas/` (the area name is the criteria filename without `.md`).
- Title (optional) — overrides the default output filename.

## Procedure

1. Read the criteria definition at `.github/criteria/areas/<area>.md` for its Display name and File stem.
2. Determine the project name and documentation label from the "Current Repository" section of the repository Copilot instructions. Derive the project slug by lowercasing the name and replacing spaces with hyphens.
3. Read the answers and comment produced for this area from the `.github/output` directory: `<project-slug>-<stem>-answers.md` and `<project-slug>-<stem>-comment.md`. If either file is missing, ask the user to run the corresponding answers or comment prompt first (or to point you at the files). If the comment file contains a recommendation, move it to the recommendations file.
4. Base the recommendations on those two documents.


## Output

- Output the recommendations as a bulleted list, introduced by this exact sentence: "The following recommendations address the &lt;display name&gt; of the &lt;project documentation label&gt;." For example: "The following recommendations address the information architecture of the KubeVirt user guide."
- Write the result to a Markdown file in the `.github/output` directory:
  - If a title was provided, name the file `<title>.md`.
  - Otherwise name it `<project-slug>-<stem>-recommendations.md`.
  - If a file exists by the same name, overwrite it.
  


Output the file to the `.github/output` directory.
