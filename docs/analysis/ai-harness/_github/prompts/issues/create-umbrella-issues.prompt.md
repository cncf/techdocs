---
mode: agent
description: Group the numbered issue files in .github/output/issues/ into umbrella issues of 3-10 sub-issues each. Run after /create-issues and after the writer has reviewed the issues.
---

# Create umbrella issues from the KubeVirt documentation issues

## Role and goal

You are a senior technical writer on the CNCF TechDocs team. The `/create-issues` prompt has already turned the KubeVirt documentation analysis into numbered, standalone issue files. Group those issues into umbrella issues so maintainers can track related work as a unit and so CNCF can report progress on the analysis. Each umbrella issue is itself an uploadable issue file that links to its sub-issues; it does not repeat their content.

## Sources

- `.github/output/issues/<number>-*.md` — the standalone issue files. Read every one. Ignore `.github/output/issues/prev_1/`, which is an archive from a previous run.
- `.github/output/issues-coverage.md` — the coverage report. Its `## Issues` table lists every issue number, title, label, and file; use it to look up titles and to find the next free issue number.
- `.github/issue_template/umbrella-issue.md` — the umbrella issue template.
- https://github.com/kedacore/keda-docs/issues/1361 — an example umbrella issue from a previous CNCF TechDocs analysis. Match its purpose: a short statement of what the group achieves, followed by a checklist of sub-issues. Do not copy its "Use-Case:" and "Specification:" heading prefixes.

Do not read the recommendations CSV or the analysis files. The issue files are the only input; if an issue is missing or wrongly scoped, tell the writer to fix it with `/create-issues` instead of working around it here.

## Procedure

1. Read the `## Issues` table in the coverage report and every standalone issue file. Note each issue's number, title, label, and the pages or repository it touches.
2. Group the issues into themes. Group by the outcome a reader or maintainer gets, not by the analysis section or area an issue came from; a theme may span sections. Typical themes are a new-user path, navigation and information architecture, a feature-coverage gap, site configuration, accessibility, contributor onboarding, community channels, and site ownership.
3. Size each umbrella at three to ten sub-issues. Split a theme that has more than ten; merge or drop a theme that has fewer than three. An issue belongs to at most one umbrella. An issue that fits no theme stays standalone; that is acceptable, and you should list such issues in the coverage report rather than force them into an umbrella.
4. Order the sub-issues within each umbrella in the sequence a contributor should work them: prerequisites first, then by priority (`urgent`, `high`, `backlog`).
5. Assign each umbrella the highest priority label among its sub-issues.
6. Number the umbrellas. Continue the sequence from the coverage report: the first umbrella takes the number after the highest number in the `## Issues` table, and each further umbrella increments by one.
7. Give each umbrella a title that names the outcome, for example "Create a new-user getting started path" or "Fix navigation gaps in the user guide". Do not use "Umbrella" in the title; the body identifies it as an umbrella issue.

## Umbrella file format

Every umbrella file starts with this front matter, followed by the body:

```yaml
---
title: <umbrella issue title> #<issue number>
labels: [<urgent | high | backlog>, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---
```

Follow `umbrella-issue.md` and keep its two headings:

- `## Umbrella Issue` — in one or two paragraphs, state the problem the theme addresses, how the sub-issues together resolve it, and the order in which to work them if it matters. End with this sentence, adapted as needed: "This umbrella issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343)."
- `## Sub-issues` — a bulleted list with one line per sub-issue, in work order, formatted as a link whose text is the sub-issue title followed by its number and whose target is the sub-issue file name relative to the umbrella file:

  ```markdown
  - [Add a Getting Started page that walks through creating and starting a VirtualMachine #9001](9001-add-getting-started-page.md)
  - [Rewrite Basic Use as "Your first VirtualMachine" #9002](9002-rewrite-basic-use.md)
  ```

  The upload process replaces the `#<number>` references with real issue numbers and links, so every title and number must match the sub-issue's front matter exactly. Do not describe the sub-issues here; the link is enough.

Write in complete sentences, active voice, and the imperative mood. Do not mention the CSV, the priority ranking, or this prompt in the body.

## Outputs

1. Umbrella files in `.github/output/issues/`. Name each file `U-<issue number>-<slug>.md`, for example `U-9061-create-getting-started-path.md`. Build the slug from the title with the same rules as standalone issues: lowercase hyphenated words, no more than about five, keeping the action verb and main subject noun and naming the topic rather than the analysis area. Before writing, delete any `U-*.md` files already in `.github/output/issues/` from a previous run. Do not modify the standalone issue files.
2. Update `.github/output/issues-coverage.md`:
   - Append the umbrella issues to the `## Issues` table with the same columns (`Issue`, `Title`, `Label`, `File`).
   - Add a `## Umbrella issues` section after the `## Issues` table with one subsection per umbrella listing its number, title, label, and sub-issue numbers, followed by a list of standalone issues that belong to no umbrella.
   - Update the `## Counts` list with the number of umbrella issues and the number of standalone issues not in an umbrella.

When finished, summarize the umbrella issues you created (number, title, label, sub-issue count) and list any issues left outside an umbrella. Ask the writer to review the grouping.
