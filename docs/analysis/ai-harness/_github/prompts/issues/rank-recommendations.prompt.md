---
mode: agent
description:
  Collect every recommendation from the per-area recommendations files in
  .github/output/analysis/ and rank them into
  .github/input/ai-ranked-recommendations.csv for /create-issues.
---

# Rank the analysis recommendations

## Role and goal

You are a senior technical writer on the CNCF TechDocs team. The area prompts
have written one recommendations file per analysis area. Gather every
recommendation into a single CSV and assign each a priority so that
`/create-issues` can turn the ranked list into GitHub issues. Rank by the impact
on documentation users relative to the effort to implement; do not rewrite,
merge, or drop recommendations here.

## Sources

- The "Current Repository" section of `.github/copilot-instructions.md` — gives
  the project name, from which you derive the project slug (lowercase, spaces
  replaced with hyphens).
- `.github/output/analysis/<project-slug>-*-recommendations.md` — the per-area
  recommendations files. Every bullet in these files is one recommendation.
- `.github/output/analysis/<project-slug>-*-comment.md` — the per-area comments,
  for the `Rating:` line and the weaknesses that motivate each recommendation.
- `.github/criteria/sections/*.md` — map each area's comment-file stem to its
  section display name and criterion label (the area display name).

If any area listed in the section files has no recommendations file, stop and
tell the user which `/<area>-recommendations` or `/<area>-full` prompt to run
first.

## Procedure

1. Read every recommendations file. Record each bullet as one recommendation,
   with its section display name and area display name taken from the section
   criteria files.
2. Rank each recommendation on two factors:
   - Impact: how much it improves users' ability to succeed with the project.
     Gaps in the new-user path, missing task documentation for core features,
     broken or misleading content, and accessibility blockers rank highest. The
     area's rating is a signal: areas rated 1 or 2 usually hold the
     highest-impact recommendations.
   - Effort: a recommendation that a contributor can complete in a few hours
     ranks above one of equal impact that needs maintainer decisions, new
     tooling, or a large restructuring.
3. Assign a priority:
   - `1 - Urgent` — high impact; blocks or badly misleads users. Aim for roughly
     the top 15 to 20 percent.
   - `2 - High` — clear improvement to effectiveness; should be done this cycle.
   - `3 - Backlog` — worthwhile but low impact, cosmetic, or dependent on
     decisions not yet made.
4. Keep the recommendation text as written in the source file, minus the leading
   bullet marker. Do not paraphrase; `/create-issues` maps CSV rows back to the
   source files.

## Output

Write `.github/input/ai-ranked-recommendations.csv`, overwriting any existing
file. This file will be used later to create issues based on the ranked recommendations.
Use these columns, in this order, with a header row:

```csv
Section,Area,Recommendation,Suggested Priority
```

- `Section` — `Project Documentation`, `Contributor Documentation`, or
  `Website & Infrastructure`.
- `Area` — the area display name (for example `Information Architecture`), not
  the criteria filename or file stem.
- `Recommendation` — the recommendation text. Quote the field and double any
  embedded quotes so the file is valid RFC 4180 CSV.
- `Suggested Priority` — `1 - Urgent`, `2 - High`, or `3 - Backlog`.

Order rows by section (Project Documentation, Contributor Documentation, Website
& Infrastructure), then by area in the order the section file lists them, then
by priority.

When finished, report the number of recommendations per priority and per
section, and ask the writer to review the ranking before running
`/create-issues`.
