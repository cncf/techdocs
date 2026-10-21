---
mode: agent
description: Create numbered GitHub issue files in .github/output/issues/ from the ranked KubeVirt analysis recommendations, one file per issue, each scoped to 2-4 hours. Run /create-umbrella-issues afterwards to group them.
---

# Create documentation issues from the KubeVirt analysis recommendations

## Role and goal

You are a senior technical writer on the CNCF TechDocs team. Turn the ranked recommendations from the KubeVirt user guide documentation analysis into GitHub issue files that a technical writer or engineer with KubeVirt context can pick up and complete. A process will later upload every file in the output directory to GitHub, so each file must be a complete, uploadable issue.

This prompt creates standalone issues only. Do not create umbrella issues; a separate prompt, `/create-umbrella-issues`, groups the issues you create here after the writer has reviewed them.

## Sources

Use only these sources. Do not add issues from your general knowledge of the KubeVirt repositories or documentation; the assessment defines the scope.

- `.github/input/ai-ranked-recommendations.csv` — the ranked recommendations. Columns: `Section`, `Area`, `Recommendation`, `Suggested Priority` (`1 - Urgent`, `2 - High`, `3 - Backlog`).
- `.github/output/analysis/kubevirt-*-recommendations.md` — the per-area recommendations files, for context on why each recommendation was made.
- `.github/output/analysis/kubevirt-*-comment.md` — the per-area comments, only when you need the problem statement behind a recommendation.
- `.github/issue_template/kubevirt-doc-issue.md` — the KubeVirt documentation issue template. Every issue follows its headings.
- https://github.com/kedacore/keda-docs/issues/1363 — an example of a CNCF TechDocs issue from a previous analysis. Match its scope and tone: a specific problem, a concrete proposed change, and links to the affected pages.

Ignore `.github/output/issues/prev_1/`; it is an archive of a previous run with a different format.

## Procedure

1. Read the CSV and the recommendations files. Group the recommendations by section and area.
2. Decide which recommendations are issues. A recommendation is an issue when it describes a concrete problem or gap in the documentation that a contributor can fix. Skip recommendations that are optional improvements with minimal impact, that depend on decisions the maintainers have not made, or that cannot be acted on without information the assessment does not provide. Record every skipped recommendation and the reason in the coverage report (see Outputs).
3. Scope every issue to about two to four hours of work for a technical writer or engineer with KubeVirt context. Split a recommendation that is larger than that into several issues; merge recommendations that are smaller into one issue. Merged recommendations should address the same pages or the same kind of change so the issue stays coherent.
4. Give each issue a title that is specific and imperative, for example "Add a Getting Started page that walks through creating and starting a VirtualMachine". A reader should understand the task from the title alone, because umbrella issues will list titles only.
5. Number the issues. Issue numbers are five digits and start at 9001. Increment by one for each issue, in the order you write them. Numbers simulate GitHub issue numbers so the files can cross-reference each other before upload.
6. Assign a priority label to every issue. Start from the CSV ranking without its number prefix (`1 - Urgent` → `urgent`, `2 - High` → `high`, `3 - Backlog` → `backlog`). When an issue merges recommendations with different rankings, use the highest. You may adjust a priority when merging or splitting changes the impact; note any adjustment in the coverage report.
7. Keep the total number of issues well below the number of recommendations. A good target is 40 to 60 issues. If you exceed that, merge further.

## Issue file format

Every file in `.github/output/issues/` starts with this front matter, followed by the issue body:

```yaml
---
title: <GitHub issue title> #<issue number>
labels: [<urgent | high | backlog>, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---
```

- `title` becomes the GitHub issue title. Append the simulated issue number after a space and `#`, for example `title: Add a user-facing troubleshooting page #9007`.
- `labels` becomes the GitHub issue labels. Include exactly one of `urgent`, `high`, or `backlog`, and always include `help wanted`. Do not add any other labels.
- `repo` is always `https://github.com/kubevirt/user-guide/issues`.
- Everything after the front matter is the issue description. Write it in GitHub-flavored Markdown.

Follow `kubevirt-doc-issue.md` and keep its four headings in this order. Omit the HTML comment from the template.

- `## Description` — state the problem or gap, where it is, and why it matters to users. Then describe the proposed change concretely enough that a contributor can start without further research: which pages or files to add, edit, or move, and what the result should contain. Use a bulleted list or a proposed outline when the change has several parts.
- `## What you expected` — describe what done looks like from the reader's point of view, in one to three sentences. This is the acceptance criterion.
- `## URL` — link to the affected pages on https://kubevirt.io/user-guide/ and name the Markdown files under `docs/`. For issues that affect `kubevirt.io` or a repository file rather than a guide page, link to the affected page or file in its repository.
- `## Additional context` — end with this sentence, adapted as needed: "This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343)." Before it, add anything else a contributor needs: related issues by simulated number (for example "Depends on #9003"), decisions the maintainers must make first, or questions for the maintainers.

Add subheadings within a section when they help organize the content, but do not add or remove top-level headings.

In all issue bodies:

- Write in complete sentences, active voice, and the imperative mood.
- Explain any term a senior Kubernetes engineer might not know; do not explain Kubernetes basics.
- Follow Kubernetes documentation conventions: UpperCamelCase for API objects such as VirtualMachine and VirtualMachineInstance, and code formatting for commands, fields, and file names.
- If you are unsure whether something is technically wrong, phrase it as a question for the maintainers rather than asserting it.
- Do not mention the CSV, the priority ranking, or this prompt in the issue body. The body is for KubeVirt contributors.

## Outputs

1. Issue files in `.github/output/issues/`. Name each file `<issue number>-<slug>.md`, for example `9007-add-troubleshooting-page.md`. Build the slug from the title with these rules:
   - Use lowercase words separated by hyphens, no punctuation, and no more than about five words.
   - Keep the action verb and the main subject noun; drop articles, conjunctions, and secondary clauses. Name the topic (`navigation`, `footer`, `virtctl`), not the analysis area.
   - When the title lists several changes, use a collective noun such as `improvements` or `updates` instead of listing them.
   - Strip punctuation from version numbers (`v1.9` becomes `v19`).

   Examples: "Add a Getting Started page that walks through creating and starting a VirtualMachine" becomes `9001-add-getting-started-page.md`; "Move Release Notes out of the main navigation" becomes `9004-move-release-notes.md`; "Document the v1.9 VirtualMachineBackup API" becomes `9012-document-v19-backup-api.md`.

   Before writing, delete any `<number>-*.md` and `U-*.md` files already in `.github/output/issues/` from a previous run so the numbering restarts cleanly at 9001. Leave `prev_1/` alone.
2. A coverage report at `.github/output/issues-coverage.md` (outside the issues directory so it is not uploaded as an issue). Overwrite any existing report. Include, in this order:
   - An `## Issues` table with the columns `Issue` (the simulated number, for example `#9001`), `Title`, `Label`, and `File`. The `/create-umbrella-issues` prompt reads this table to continue the numbering and to look up titles, so list every issue file here.
   - A `## Recommendation mapping` table mapping every CSV recommendation (numbered by its row order) to the issue number that covers it, or "Not an issue" with a one-sentence reason. A recommendation may map to several issues; an issue may cover several recommendations.
   - A `## Priority adjustments` table with the recommendation, its CSV ranking, the label you assigned, and the reason.
   - A `## Counts` list with the number of recommendations, recommendations turned into issues, recommendations skipped, and issue files written.

When finished, summarize the issues you created (number, title, label) and ask the writer to review the scope of each one before running `/create-umbrella-issues`.
