# About this folder

Use this folder to place temporary prompt files, spreadsheets, or anything else
you ask Copilot to read in a session.

One file is required by the issue pipeline:

- `ai-ranked-recommendations.csv` — the ranked recommendations that
  `/create-issues` reads. The `/rank-recommendations` prompt produces it from
  the per-area recommendations files in `../output/analysis/`. Columns:
  - `Section` — `Project Documentation`, `Contributor Documentation`, or
    `Website & Infrastructure`.
  - `Area` — the area display name used in the analysis (for example
    `Information Architecture`), not the criteria filename.
  - `Recommendation` — the recommendation text, one per row.
  - `Suggested Priority` — `1 - Urgent`, `2 - High`, or `3 - Backlog`.
