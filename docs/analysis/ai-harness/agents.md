# AI Assisted Analysis Harness: agent instructions

> **Prototype.** This file is a proposal to replace the `_github/` template
> folder (Copilot instructions, criteria files, prompt engines, prompt wrappers,
> and issue templates) with a single file in the [AGENTS.md](https://agents.md)
> format. It is not yet validated against a real analysis. Open decisions are
> marked `TODO` inline and collected in [Migration TODO](#migration-todo).

This file tells an AI coding agent how to help a writer run a CNCF TechDocs
documentation analysis. Human reviewers still own the analysis. The agent
answers the criteria questions, drafts comments and ratings, proposes
recommendations, ranks them, and writes issue files. The writer reviews and
edits every output before it goes into `analysis.md` or the project's issue
tracker, so write output that needs minimal editing.

The predefined tasks in this file exist so that every analysis uses the same
procedure. Do not improvise a different procedure when a task covers the
request.

## How to use this file

The writer asks for a task by name, followed by its argument. For example:

```text
run full information-architecture
run section-comment project-documentation
run create-issues
```

The tasks are listed below. Each one is defined under [Tasks](#tasks).

<!-- markdownlint-disable MD013 -->

| Task                     | Argument   | Result                                                 |
| ------------------------ | ---------- | ------------------------------------------------------ |
| `answers`                | area ID    | Answers to the area's criteria questions               |
| `comment`                | area ID    | Comment, strengths, weaknesses, and rating for an area |
| `recommendations`        | area ID    | Recommendations for an area                            |
| `full`                   | area ID    | All three area outputs in one run                      |
| `section-comment`        | section ID | Ratings table and overall comment for a section        |
| `rank-recommendations`   | none       | Ranked recommendations CSV                             |
| `create-issues`          | none       | Numbered standalone issue files and a coverage report  |
| `create-umbrella-issues` | none       | Umbrella issue files that link to the standalone ones  |

<!-- markdownlint-enable MD013 -->

The area IDs and section IDs are defined under
[Sections and areas](#sections-and-areas). If the writer names a task without a
required argument, or names an area or section that is not in those tables, ask
which one they mean. Do not guess.

Every task that writes analysis output also accepts an optional `title`, for
example `run answers information-architecture title: my-analysis`. See
[Conventions for all tasks](#conventions-for-all-tasks).

Text that follows a task name is a correction for that run, for example
`run create-issues, and split the "Getting started" issue into two`. Apply the
correction on top of the task's procedure.

## Working locations

The tasks refer to four locations by the placeholder names in this table.

<!-- markdownlint-disable MD013 -->

| Placeholder  | Meaning                                                                                       | Value                                                                      |
| ------------ | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `<techdocs>` | A clone of `cncf/techdocs`. The criteria and the analysis template are read from here.        | The clone that contains this file                                          |
| `<project>`  | A clone of the project's documentation repository. The agent reads it and never writes to it. | See "Documentation repository path" in [Project context](#project-context) |
| `<work>`     | The folder the agent writes to.                                                               | See "Working folder" in [Project context](#project-context)                |
| `<criteria>` | The criteria file.                                                                            | `<techdocs>/docs/analysis/criteria.md`                                     |

<!-- markdownlint-enable MD013 -->

If `<criteria>` cannot be read from the clone, read it from
`https://github.com/cncf/techdocs/blob/main/docs/analysis/criteria.md` and tell
the writer that you did.

The agent creates and uses this layout inside `<work>`:

<!-- markdownlint-disable MD013 -->

```text
<work>/
  input/
    ai-ranked-recommendations.csv          # Written by rank-recommendations, read by create-issues
  output/
    analysis/
      <project-slug>-<area>-<type>.md      # Area outputs: answers, comment, recommendations
      <project-slug>-<section>-comment.md  # Section comments
    issues/
      <number>-<slug>.md                   # Standalone issue files
      U-<number>-<slug>.md                 # Umbrella issue files
    issues-coverage.md                     # Issue list and recommendation-to-issue mapping
```

<!-- markdownlint-enable MD013 -->

The writer can also place spreadsheets or other ad hoc inputs in `<work>/input/`
and ask the agent to read them.

TODO: The location of `<work>` is undecided. The earlier harness wrote to
`.github/input` and `.github/output` in the project clone. Candidates are a
folder next to `analysis.md` in the `<techdocs>` clone, or a folder outside both
clones. See [Migration TODO](#migration-todo).

## Project context

This section is the only project-specific part of this file. Every task reads
its project values from here. Replace every `FILL IN` value before running a
task. If a task needs a field that still reads `FILL IN`, stop and ask the
writer to complete it.

- Project name: `FILL IN` (for example, KubeVirt)
- Documentation label: `FILL IN` (how to refer to the documentation in prose,
  for example, "the KubeVirt user guide")
- Ecosystem: `FILL IN` (the readers' domain, for example, Kubernetes; it sets
  the terminology and style conventions)
- Main repository: `FILL IN` (name and URL)
- Secondary repositories: `FILL IN` (website or lab repositories the analysis
  also covers, or "None")
- Published documentation URL: `FILL IN`
- Project website URL: `FILL IN`
- Documentation repository path: `FILL IN` (the local path of `<project>`)
- Working folder: `FILL IN` (the local path of `<work>`)
- Issues repository URL: `FILL IN` (used for `repo:` in issue front matter, for
  example, `https://github.com/kubevirt/user-guide/issues`)
- CNCF project page URL: `FILL IN` (for example,
  `https://www.cncf.io/projects/kubevirt/`)
- Assistance-request issue: `FILL IN` (for example, `cncf/techdocs#343`)

The project slug, written `<project-slug>` in file names, is the project name in
lowercase with spaces replaced by hyphens. For example, "KubeVirt" becomes
`kubevirt`.

### Priority label mapping

The upload process maps the harness labels to the labels of the issues
repository. Confirm that each repository label exists before uploading.

| Harness label | Repository label                                    |
| ------------- | --------------------------------------------------- |
| `urgent`      | `FILL IN` (for example, `priority/critical-urgent`) |
| `high`        | `FILL IN` (for example, `priority/high`)            |
| `backlog`     | `FILL IN` (for example, `priority/backlog`)         |
| `help wanted` | `help wanted`                                       |

### What the documentation repository is

`FILL IN`: one paragraph that states what the repository publishes, the site
generator and theme, where the content lives, and whether the repository
contains application code.

### Content architecture

`FILL IN`: a short tree of the documentation source folders with a comment for
each folder.

### Project conventions

`FILL IN`: one short paragraph for each convention the agent must respect when
it reads or refers to project files. Examples are navigation configuration,
redirects, spelling dictionaries, and Markdown extensions.

### Project issue template

If the project has its own documentation issue format, list its top-level
headings here in order. Otherwise write "Default", and the `create-issues` task
uses the [standalone issue template](#standalone-issue-template).

`FILL IN`

## Rules for every task

### No commits and no changes to the project

This work is solely for documentation analysis. Do not commit anything. Do not
create, edit, or delete any file in `<project>`. Write only inside `<work>`.

### What to look for

Keep the goal of technical documentation in mind: to make its users more
effective. Focus on what gets in the way of that goal.

Look for the following:

- Quick wins: low-effort changes that would have a major impact.
- Large, systemic problems that a number of issues can be organized around.
- The two or three most important problems that impede documentation
  effectiveness.
- Anything the project does exceptionally well, which can serve as an example in
  other analyses.

Do not get bogged down in detail. Include enough detail to describe how to
implement a suggested solution; a sentence or two is sufficient for most
problems.

A recommendation is not required in every case. Omit one when the element is
satisfactory or when the change would bring minimal improvement.

### Writing style

Readers of the analysis are subject-matter experts in the project's ecosystem
who want to improve the documentation quickly. Be concise and actionable, and
skip explanations they do not need.

- Write in complete sentences, using active voice and the imperative mood.
- Fragments are fine inside a bulleted list that follows an introductory
  sentence.
- Explain any term or acronym that a senior engineer in the project's ecosystem
  might not know.
- Do not list technologies in parentheses; readers already know them.
- Use parentheses only when the content is needed to understand the
  recommendation.
- When a sentence would list four or more items, end the paragraph with an
  introductory sentence followed by a bulleted list of the items.
- Refer to a page by its title. A Markdown file name is acceptable when the name
  makes the page obvious. Relative paths are not needed when the title is clear.
- Keep paragraphs under about four sentences; split longer ones.
- Treat any paragraph limit in a task as a maximum, not a target.
- If you are unsure whether something is technically wrong, phrase it as a
  question for the subject-matter expert rather than asserting it.
- Follow the documentation conventions of the project's ecosystem. For
  Kubernetes-ecosystem projects, that means UpperCamelCase for API objects (Pod,
  Deployment) and code formatting for commands, fields, and file names.

## Sections and areas

The analysis has three sections, and each section has several areas. The tables
in this part are the data that the tasks operate on. To change which areas
exist, or how they are named, edit these tables and nothing else.

### Sections

| Section ID                  | Display name              |
| --------------------------- | ------------------------- |
| `project-documentation`     | Project Documentation     |
| `contributor-documentation` | Contributor Documentation |
| `website-infrastructure`    | Website & Infrastructure  |

### Areas

Each row is one area, listed in the order the analysis presents them. The
columns have these meanings:

- Area ID: the name the writer uses in a task, and the `<area>` part of the
  output file names.
- Display name: the name used in prose and in the `Area` column of the ranked
  recommendations CSV.
- Criterion label: the label of the area's row in the section ratings table of
  `analysis.md`.
- Questions heading: the heading in `<criteria>` under which the area's
  questions are listed.

<!-- markdownlint-disable MD013 -->

| Area ID                            | Display name                            | Section ID                  | Criterion label                           | Questions heading in `<criteria>`                    |
| ---------------------------------- | --------------------------------------- | --------------------------- | ----------------------------------------- | ---------------------------------------------------- |
| `information-architecture`         | Information Architecture                | `project-documentation`     | Information architecture                  | Information architecture questions                   |
| `new-user-content`                 | New User Content                        | `project-documentation`     | New user content                          | New user content questions                           |
| `content-maintainability`          | Content Maintainability                 | `project-documentation`     | Content maintainability                   | Content maintainability and site mechanics questions |
| `content-creation-process`         | Content Creation Process                | `project-documentation`     | Content creation processes                | Content creation processes questions                 |
| `inclusive-language`               | Inclusive Language                      | `project-documentation`     | Inclusive language                        | Inclusive language questions                         |
| `communication-methods-documented` | Communication Methods Documented        | `contributor-documentation` | Communication methods documented          | Communication methods documented questions           |
| `beginner-issue-backlog`           | Beginner Friendly Issue Backlog         | `contributor-documentation` | Beginner friendly issue backlog           | Beginner friendly issue backlog questions            |
| `new-contributor-content`          | New Contributor Getting Started Content | `contributor-documentation` | "New contributor" getting started content | New contributor getting started content questions    |
| `project-governance-documentation` | Project Governance Documentation        | `contributor-documentation` | Project governance documentation          | Project governance documentation questions           |
| `website-requirements`             | Core Website Requirements               | `website-infrastructure`    | Core website requirements                 | Core website requirements questions                  |
| `usability-accessibility-devices`  | Usability, Accessibility, and Devices   | `website-infrastructure`    | Usability, accessibility, and design      | Usability, accessibility, and devices questions      |
| `branding-design`                  | Branding and Design                     | `website-infrastructure`    | Branding and design                       | Branding and design questions                        |
| `case-studies`                     | Case Studies and Social Proof           | `website-infrastructure`    | Case studies and social proof             | Case studies and social proof questions              |
| `seo-analytics`                    | SEO, Analytics, and Site Search         | `website-infrastructure`    | SEO, Analytics, and site-local search     | SEO, Analytics and site-local search questions       |
| `maintenance-planning`             | Maintenance Planning                    | `website-infrastructure`    | Maintenance planning                      | Maintenance planning questions                       |
| `agent-readiness`                  | AI Agent Readiness                      | `website-infrastructure`    | AI agent readiness                        | AI Agent Readiness questions                         |

<!-- markdownlint-enable MD013 -->

TODO: This table assumes the `criteria.md` structure proposed in
[cncf/techdocs#423](https://github.com/cncf/techdocs/pull/423), which is not
merged yet. That structure folds the single-source requirement into "Core
website requirements", so this table has sixteen areas where the earlier harness
had seventeen.

### How to read an area's criteria

The questions are not copied into this file. `<criteria>` is their only source.
To read the criteria for an area:

1. Open `<criteria>` and find the heading whose text matches the area's
   "Questions heading" exactly.
2. Take every list item under that heading, up to the next heading or the next
   paragraph that is not part of the list. These are the area's questions. Use
   them verbatim and in order.
3. If an `Example:` or `Examples:` list follows the questions, treat its links
   as models of quality for the area.
4. Read the descriptive paragraphs between the area's own heading and its
   questions heading for context on what the area evaluates.

If the heading is missing from `<criteria>`, stop and report it. Do not answer
questions from memory or from another version of the criteria.

### Area-specific instructions

Apply these in addition to the task procedure. An area that is not listed has
none.

- `inclusive-language`: Focus the comment on any inclusive-language concerns in
  the documentation.
- `agent-readiness`: The reference sources for this area are the llms.txt
  specification (`https://llmstxt.org/`), the CLOMonitor agent readiness checks
  (`https://clomonitor.io/docs/topics/checks/#agent-readiness`), and the AFDocs
  Agent-Friendly Documentation Spec (`https://afdocs.dev/`). Where possible,
  verify by fetching the live site (`/llms.txt`, or a page URL with `.md`
  appended) rather than relying on the repository source alone.

## Tasks

### Conventions for all tasks

- Read [Project context](#project-context) first. Derive `<project-slug>` from
  the project name.
- Write analysis output to `<work>/output/analysis/`. Create the folder if it
  does not exist.
- Name each file as its task specifies. If the writer provides a `title`, name
  the file `<title>.md` instead. For the `full` task, the title is a base name:
  write `<title>-answers.md`, `<title>-comment.md`, and
  `<title>-recommendations.md`.
- If a file with the same name exists, overwrite it.
- Begin each analysis output file with a level-1 heading that names its content,
  for example `# Information Architecture - Answers`. The writer drops this
  heading when pasting the content into `analysis.md`.
- Follow [Rules for every task](#rules-for-every-task).

### Task: answers

Answer the criteria questions for one area.

Procedure:

1. Read the area's row in the [Areas](#areas) table and its criteria, as
   described in
   [How to read an area's criteria](#how-to-read-an-areas-criteria).
2. Investigate the documentation in `<project>`, the published documentation,
   and the other sources named in [Project context](#project-context).
3. Answer every question.

Output:

- Format each question as a bullet, not as a heading. Indent the answer by two
  spaces under its question. Do not bold the answers.
- If an answer is "yes" or "no", add a brief explanation.
- Keep each answer to one or two short paragraphs.
- State what exists, where it is, and what is missing. Do not say what to do
  about it; that belongs in the recommendations.
- Write the file `<project-slug>-<area>-answers.md`.

### Task: comment

Write a high-level comment and a rating for one area.

Procedure:

1. Read the area's row in the [Areas](#areas) table, its criteria, and any
   [area-specific instructions](#area-specific-instructions).
2. Write one to three paragraphs of high-level comment. Do not repeat points
   from the answers output.
3. Follow with two bulleted lists, one of strengths and one of weaknesses.
   Precede the lists with the plain-text labels "Strengths:" and "Weaknesses:".
   Do not bold the labels.
4. Refer to the examples listed in the criteria as models of quality where that
   helps.
5. Rate the area on the CNCF scale:
   - 1 - Not present
   - 2 - Needs improvement
   - 3 - Meets standards
   - 4 - Meets or exceeds standards
   - 5 - Exemplary

Output:

- End the comment with the rating on its own line, in the form
  `Rating: <number> - <label>`, for example `Rating: 3 - Meets standards`. Put
  no other text on that line. The `section-comment` and `rank-recommendations`
  tasks read it.
- Do not put recommendations in the comment.
- Write the file `<project-slug>-<area>-comment.md`.

### Task: recommendations

Write recommendations for one area, based on its answers and comment.

Procedure:

1. Read the area's row in the [Areas](#areas) table.
2. Read `<project-slug>-<area>-answers.md` and
   `<project-slug>-<area>-comment.md` from `<work>/output/analysis/`. If either
   file is missing, ask the writer to run the `answers` or `comment` task first,
   or to point you at the files.
3. If the comment file contains a recommendation, move it to the recommendations
   file.
4. Base every recommendation on those two files.

Output:

- Introduce the recommendations with this exact sentence, filling in the two
  values: "The following recommendations address the `<display name>` of
  `<documentation label>`." For example: "The following recommendations address
  the information architecture of the KubeVirt user guide."
- Follow the sentence with a bulleted list, one recommendation per top-level
  bullet. The `rank-recommendations` task treats each top-level bullet as one
  recommendation.
- Write the file `<project-slug>-<area>-recommendations.md`.

### Task: full

Run the `answers`, `comment`, and `recommendations` tasks for one area in a
single pass. Start a new session for each area so that context from one area
does not leak into the next.

Analyze first and write last. While answering the questions and forming the
comment, you will notice things to fix. Those observations belong in the
recommendations file, not in the answers or the comment. Collect everything
before writing so that each file contains only its own kind of content.

Phase 1, read:

1. Read the area's row in the [Areas](#areas) table, its criteria, and any
   [area-specific instructions](#area-specific-instructions).
2. Reread the `answers`, `comment`, and `recommendations` tasks so that you know
   the required structure of each output before you start.

Phase 2, analyze and sort:

1. Investigate the documentation as the `answers` task directs. As you work,
   keep three running lists:
   - Findings: factual observations that answer a question (what exists, where
     it is, and what is missing).
   - Assessments: high-level judgments about strengths and weaknesses, and the
     evidence for the rating.
   - Fixes: anything you would tell the project to change or add.
2. Whenever an observation suggests a fix, record the fix in the Fixes list and
   keep only the underlying finding in the Findings or Assessments list. A
   finding may state that something is missing or unclear. It must not say what
   to do about it.
3. Draft all three documents before writing any of them: the answers from the
   Findings list, the comment from the Assessments list, and the recommendations
   from the Fixes list.
4. Review the drafts against each other:
   - Remove any imperative or "should" phrasing from the answers and the
     comment, and move it to the recommendations.
   - Confirm that every recommendation traces back to something stated in the
     answers or the comment. If it does not, add the supporting finding or drop
     the recommendation.
   - Confirm that the answers and the comment do not duplicate each other. The
     comment synthesizes; it does not restate.

Phase 3, write:

1. Write the answers file, then the comment file, then the recommendations file,
   each as its own task specifies.
2. List the three file names you created.

### Task: section-comment

Write an overall comment for one section by synthesizing the comment files of
its areas. This task does not analyze the documentation again.

Precondition: every area of the section in the [Areas](#areas) table must
already have its file `<project-slug>-<area>-comment.md` in
`<work>/output/analysis/`. If any are missing, stop and tell the writer exactly
which `comment` or `full` tasks to run first. Do not write a partial section
comment.

Procedure:

1. Read the section's row in the [Sections](#sections) table and its areas, in
   table order, from the [Areas](#areas) table.
2. Read each area's comment file. From each, extract the overall standing, the
   rating from the final `Rating:` line, the key strengths, and the
   highest-impact gaps.
3. Build a summary ratings table with one row for each area, in table order. Use
   the area's criterion label and its rating in the form `<number> - <label>`.
   If a comment file has no `Rating:` line, use `N/A`.

   | Criterion                | Rating (1-5)        |
   | ------------------------ | ------------------- |
   | Information architecture | 3 - Meets standards |

4. Write a two to five paragraph overall comment beneath the table. Synthesize
   rather than concatenate. Lead with the section's overall standing, then
   describe only the most important themes that recur across two or more areas.
   Leave detailed suggestions to the area comments and recommendations. Use a
   bulleted list instead of a long paragraph of details.

Output:

- Begin the file with the level-1 heading
  `# <Section display name> - Overall Comment`, followed by the ratings table
  and then the comment.
- Write the file `<project-slug>-<section>-comment.md`.

TODO: The earlier engine also filled an "Other Metrics" table for the Website &
Infrastructure section. cncf/techdocs#423 removes that table from the analysis
template, so this task omits it. Restore the step if the table stays.

### Task: rank-recommendations

Gather every recommendation into one CSV file and assign each a priority, so
that the `create-issues` task can turn the ranked list into issues. Rank only.
Do not rewrite, merge, or drop recommendations.

Sources:

- `<work>/output/analysis/<project-slug>-<area>-recommendations.md` for every
  area in the [Areas](#areas) table. Each top-level bullet is one
  recommendation.
- `<work>/output/analysis/<project-slug>-<area>-comment.md` for the `Rating:`
  line and the weaknesses that motivate each recommendation.

If any area has no recommendations file, stop and tell the writer which
`recommendations` or `full` task to run first.

Procedure:

1. Read every recommendations file. Record each top-level bullet as one
   recommendation, with the display names of its section and area.
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
   - `1 - Urgent`: high impact; blocks or badly misleads users. Aim for roughly
     the top 15 to 20 percent.
   - `2 - High`: a clear improvement to effectiveness that should be done in
     this cycle.
   - `3 - Backlog`: worthwhile but low impact, cosmetic, or dependent on
     decisions not yet made.
4. Keep the recommendation text as written in the source file, minus the leading
   bullet marker. Do not paraphrase, because the `create-issues` task maps CSV
   rows back to the source files.

Output:

Write `<work>/input/ai-ranked-recommendations.csv`, overwriting any existing
file. Use these columns, in this order, with a header row:

```csv
Section,Area,Recommendation,Suggested Priority
```

- `Section`: the section display name.
- `Area`: the area display name, not the area ID.
- `Recommendation`: the recommendation text. Quote the field and double any
  embedded quotes so that the file is valid RFC 4180 CSV.
- `Suggested Priority`: `1 - Urgent`, `2 - High`, or `3 - Backlog`.

Order the rows by section and area in the order of the [Areas](#areas) table,
then by priority.

When finished, report the number of recommendations for each priority and for
each section. Ask the writer to review the ranking before running
`create-issues`.

### Task: create-issues

Act as a senior technical writer on the CNCF TechDocs team. Turn the ranked
recommendations into issue files that a technical writer or engineer with
project context can pick up and complete. Every file in the issues folder is
later uploaded to GitHub, so each file must be a complete, uploadable issue.

This task creates standalone issues only. The `create-umbrella-issues` task
groups them after the writer has reviewed them.

Sources. Use only these. Do not add issues from general knowledge of the
project; the analysis defines the scope.

- `<work>/input/ai-ranked-recommendations.csv`: the ranked recommendations.
- `<work>/output/analysis/<project-slug>-<area>-recommendations.md`: context on
  why each recommendation was made.
- `<work>/output/analysis/<project-slug>-<area>-comment.md`: only when you need
  the problem statement behind a recommendation.
- The issue template: the headings under
  [Project issue template](#project-issue-template), or the
  [standalone issue template](#standalone-issue-template) by default.
- `https://github.com/kedacore/keda-docs/issues/1363`: an example issue from a
  previous analysis. Match its scope and tone: a specific problem, a concrete
  proposed change, and links to the affected pages.

Ignore any sub-folders of `<work>/output/issues/`; they are archives of previous
runs.

Procedure:

1. Read the CSV and the recommendations files. Group the recommendations by
   section and area.
2. Decide which recommendations are issues. A recommendation is an issue when it
   describes a concrete problem or gap that a contributor can fix. Skip
   recommendations that are optional improvements with minimal impact, that
   depend on decisions the maintainers have not made, or that cannot be acted on
   without information the analysis does not provide. Record every skipped
   recommendation and the reason in the coverage report.
3. Scope every issue to about two to four hours of work for a technical writer
   or engineer with project context. Split a larger recommendation into several
   issues. Merge smaller recommendations into one issue when they address the
   same pages or the same kind of change.
4. Give each issue a specific, imperative title, for example "Add a Getting
   Started page that walks through the first deployment". A reader must
   understand the task from the title alone, because umbrella issues list titles
   only.
5. Number the issues as described in [Issue numbers](#issue-numbers), starting
   at 9001.
6. Assign one priority label to every issue. Start from the CSV ranking without
   its number prefix: `1 - Urgent` becomes `urgent`, `2 - High` becomes `high`,
   and `3 - Backlog` becomes `backlog`. When an issue merges recommendations
   with different rankings, use the highest. You may adjust a priority when
   merging or splitting changes the impact; note each adjustment in the coverage
   report.
7. Keep the number of issues well below the number of recommendations, to avoid
   flooding the project. A good target is 40 to 60 issues. If you exceed that,
   merge further.

Issue body. Follow the issue template and keep its top-level headings in order.
Add subheadings within a section when they help, but do not add or remove
top-level headings. With the default template:

- `## Description`: State the problem or gap, where it is, and why it matters to
  users. Then describe the proposed change concretely enough that a contributor
  can start without further research: which pages or files to add, edit, or
  move, and what the result must contain. Use a bulleted list or a proposed
  outline when the change has several parts.
- `## What you expected`: Describe what done looks like from the reader's point
  of view, in one to three sentences. This is the acceptance criterion.
- `## URL`: Link to the affected pages under the published documentation URL and
  name the source Markdown files. For issues that affect the project website or
  a repository file, link to that page or file in its repository.
- `## Additional context`: Add anything else a contributor needs, such as
  related issues by simulated number (for example, "Depends on #9003"),
  decisions the maintainers must make first, or questions for the maintainers.
  End with the [attribution sentence](#attribution-sentence).

In every issue body:

- Follow [Writing style](#writing-style).
- Do not mention the CSV, the priority ranking, or this file. The body is for
  the project's contributors.

Outputs:

1. Issue files in `<work>/output/issues/`, formatted and named as described in
   [Issue file conventions](#issue-file-conventions). Before writing, delete any
   standalone and umbrella issue files left in that folder by a previous run, so
   that the numbering restarts cleanly at 9001. Leave sub-folders alone.
2. A coverage report at `<work>/output/issues-coverage.md`, outside the issues
   folder so that it is not uploaded as an issue. Overwrite any existing report.
   Include, in this order:
   - An `## Issues` table with the columns `Issue` (the simulated number, for
     example `#9001`), `Title`, `Label`, and `File`. List every issue file here;
     the `create-umbrella-issues` task reads this table.
   - A `## Recommendation mapping` table that maps every CSV recommendation,
     numbered by its row order, to the issue number that covers it, or to "Not
     an issue" with a one-sentence reason. A recommendation may map to several
     issues, and an issue may cover several recommendations.
   - A `## Priority adjustments` table with the recommendation, its CSV ranking,
     the label you assigned, and the reason.
   - A `## Counts` list with the number of recommendations, recommendations
     turned into issues, recommendations skipped, and issue files written.

When finished, summarize the issues you created (number, title, and label). Ask
the writer to review the scope of each one before running
`create-umbrella-issues`.

### Task: create-umbrella-issues

Act as a senior technical writer on the CNCF TechDocs team. Group the standalone
issue files into umbrella issues, so that maintainers can track related work as
a unit and CNCF can report progress on the analysis. Each umbrella issue is
itself an uploadable issue file that links to its sub-issues. It does not repeat
their content.

Run this task in a new session, after `create-issues` has finished and the
writer has reviewed the standalone issues.

Sources:

- The standalone issue files in `<work>/output/issues/`. Read every one. Ignore
  sub-folders.
- `<work>/output/issues-coverage.md`: its `## Issues` table lists every issue
  number, title, label, and file. Use it to look up titles and to find the next
  free issue number.
- The [umbrella issue template](#umbrella-issue-template).
- `https://github.com/kedacore/keda-docs/issues/1361`: an example umbrella issue
  from a previous analysis. Match its purpose: a short statement of what the
  group achieves, followed by a list of sub-issues. Do not copy its "Use-Case:"
  and "Specification:" heading prefixes.

Do not read the recommendations CSV or the analysis files. The issue files are
the only input. If an issue is missing or wrongly scoped, tell the writer to fix
it with `create-issues` instead of working around it here.

Procedure:

1. Read the `## Issues` table and every standalone issue file. Note each issue's
   number, title, label, and the pages or repository it touches.
2. Group the issues into themes. Group by the outcome a reader or maintainer
   gets, not by the section or area an issue came from; a theme may span
   sections. Typical themes are a new-user path, navigation and information
   architecture, a feature-coverage gap, site configuration, accessibility,
   contributor onboarding, community channels, and site ownership.
3. Size each umbrella at three to ten sub-issues. Split a theme that has more
   than ten. Merge or drop a theme that has fewer than three. An issue belongs
   to at most one umbrella. An issue that fits no theme stays standalone; list
   such issues in the coverage report rather than forcing them into an umbrella.
4. Order the sub-issues in the sequence a contributor should work them:
   prerequisites first, then by priority (`urgent`, `high`, `backlog`).
5. Assign each umbrella the highest priority label among its sub-issues.
6. Number the umbrellas by continuing the sequence, as described in
   [Issue numbers](#issue-numbers).
7. Give each umbrella a title that names the outcome, for example "Create a
   new-user getting started path". Do not use "Umbrella" in the title.

Umbrella body. Follow the umbrella issue template and keep its two headings:

- `## Umbrella Issue`: In one or two paragraphs, state the problem the theme
  addresses, how the sub-issues together resolve it, and the order in which to
  work them if it matters. End with the
  [attribution sentence](#attribution-sentence), with "umbrella issue" in place
  of "issue".
- `## Sub-issues`: A bulleted list with one line for each sub-issue, in work
  order, formatted as described in [Issue numbers](#issue-numbers). Do not
  describe the sub-issues; the link is enough.

Follow [Writing style](#writing-style). Do not mention the CSV, the priority
ranking, or this file in the body.

Outputs:

1. Umbrella files in `<work>/output/issues/`, formatted and named as described
   in [Issue file conventions](#issue-file-conventions). Before writing, delete
   any umbrella files left by a previous run. Do not modify the standalone issue
   files.
2. An updated `<work>/output/issues-coverage.md`:
   - Append the umbrella issues to the `## Issues` table.
   - Add a `## Umbrella issues` section after the `## Issues` table, with one
     subsection for each umbrella that lists its number, title, label, and
     sub-issue numbers. Follow it with a list of the standalone issues that
     belong to no umbrella.
   - Update the `## Counts` list with the number of umbrella issues and the
     number of standalone issues that are not in an umbrella.

When finished, summarize the umbrella issues you created (number, title, label,
and sub-issue count) and list any issues left outside an umbrella. Ask the
writer to review the grouping.

## Issue file conventions

Issues are a subset of the recommendations: those that identify a problem or a
gap. A separate process uploads every Markdown file directly inside
`<work>/output/issues/` to the project's issues repository. It ignores
sub-folders. To archive a previous run, move its files into a sub-folder, for
example `prev_1/`.

### Front matter

Every issue file starts with this front matter. Everything after it is the issue
description, written in GitHub-flavored Markdown.

```yaml
---
title: Add a user-facing troubleshooting page #9007
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---
```

- `title` becomes the GitHub issue title. Append the simulated issue number
  after a space and `#`.
- `labels` becomes the GitHub issue labels. Include exactly one of `urgent`,
  `high`, or `backlog`, and always include `help wanted`. Add no other labels.
  The upload process maps them using the
  [priority label mapping](#priority-label-mapping). The `help wanted` label
  signals that maintainers seek community help; CNCF uses it to surface
  documentation tasks on CLOTributor (`https://clotributor.dev`).
- `repo` is always the issues repository URL from
  [Project context](#project-context).

### Issue numbers

Issue numbers simulate GitHub issue numbers so that files can refer to each
other before upload. They start at 9001 and increase by one for each issue, in
the order written. Umbrella issues continue the sequence: the first umbrella
takes the number after the highest number in the `## Issues` table of the
coverage report.

In an umbrella issue, each sub-issue is one list item. The link text is the
sub-issue title and number, and the link target is the sub-issue file name,
relative to the umbrella file:

<!-- markdownlint-disable MD013 -->

```markdown
- [Add a user-facing troubleshooting page #9007](9007-add-troubleshooting-page.md)
```

<!-- markdownlint-enable MD013 -->

The upload process replaces these references with real issue numbers and links,
so every title and number must match the sub-issue's front matter exactly.

### Issue file names

Name standalone issue files `<number>-<slug>.md` and umbrella issue files
`U-<number>-<slug>.md`. Build the slug from the issue title:

- Use lowercase words separated by hyphens, with no punctuation, and no more
  than about five words.
- Keep the action verb and the main subject noun. Drop articles, conjunctions,
  and secondary clauses.
- Name the topic (for example, `navigation`, `footer`, or `virtctl`), not the
  analysis area it came from.
- When the title lists several changes, use a collective noun such as
  `improvements` or `updates`.
- Strip punctuation from version numbers, so that `v1.9` becomes `v19`.

<!-- markdownlint-disable MD013 -->

| Issue title                                         | File name                               |
| --------------------------------------------------- | --------------------------------------- |
| Add a user-facing troubleshooting page #9007        | `9007-add-troubleshooting-page.md`      |
| Move Release Notes out of the main navigation #9004 | `9004-move-release-notes.md`            |
| Document the v1.9 VirtualMachineBackup API #9012    | `9012-document-v19-backup-api.md`       |
| Create a new-user getting started path #9061        | `U-9061-create-getting-started-path.md` |

<!-- markdownlint-enable MD013 -->

### Attribution sentence

End the `## Additional context` section of every standalone issue, and the
`## Umbrella Issue` section of every umbrella issue, with this sentence, adapted
as needed. Fill in the project name, the CNCF project page URL, and the
assistance-request issue from [Project context](#project-context).

```markdown
This issue tracks recommended changes resulting from an analysis of the
<project name> documentation commissioned by [CNCF](<CNCF project page URL>).
The assistance request is tracked in
[cncf/techdocs#<NNN>](https://github.com/cncf/techdocs/issues/<NNN>).
```

### Standalone issue template

```markdown
---
title: <title> #<issue number>
labels: [<urgent | high | backlog>, help wanted]
repo: <issues repository URL>
---

## Description

A clear and concise description of the problem or gap, where it is, and the
proposed change.

## What you expected

A clear and concise description of what done looks like for the reader.

## URL

Links to the affected documentation pages and source files.

## Additional context

Related issues, decisions the maintainers must make, and the attribution
sentence.
```

### Umbrella issue template

```markdown
---
title: <title> #<issue number>
labels: [<urgent | high | backlog>, help wanted]
repo: <issues repository URL>
---

## Umbrella Issue

Describe the umbrella issue and how the sub-issues work to resolve it.

## Sub-issues

- [<sub-issue title> #<issue number>](<number>-<slug>.md)
```

## Where the outputs go in analysis.md

The writer pastes the content of each output file, without its level-1 heading,
into the project's `analysis.md`. Use this table when the writer asks where an
output belongs, or asks you to assemble a draft.

<!-- markdownlint-disable MD013 -->

| Output file                                | Location in `analysis.md`                                                                                                                                                                                                                   |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<project-slug>-<section>-comment.md`      | The ratings table replaces the placeholder table under the section's level-2 heading. The comment paragraphs go under the section's "Comments" heading, before the sentence that begins "The following sections contain brief assessments". |
| `<project-slug>-<area>-answers.md`         | Under the area's heading in the section's "Comments" part, after the paragraph that ends "We evaluate on the following:". The answers replace the author's note that links to the evaluation questions.                                     |
| `<project-slug>-<area>-comment.md`         | After the area's answers, before the next heading. The writer copies the rating from the last line into the section ratings table if the section comment was not regenerated.                                                               |
| `<project-slug>-<area>-recommendations.md` | Under the area's heading in the section's "Recommendations" part.                                                                                                                                                                           |

<!-- markdownlint-enable MD013 -->

TODO: This mapping follows the template structure proposed in cncf/techdocs#423.
Confirm it when that pull request merges.

## Maintaining this file

These conventions are for people and agents who edit the harness itself. They
carry over the maintenance conventions of the earlier `_github/` harness.

- Keep data and procedure separate. Area and section names live only in the
  tables under [Sections and areas](#sections-and-areas). Procedures live only
  under [Tasks](#tasks). Change what is analyzed in the tables, and change how
  it is analyzed in the tasks. Do not write an area's name into a task
  procedure.
- Do not copy criteria questions into this file. `criteria.md` is the single
  source. To change a question, edit `criteria.md`.
- When `criteria.md` renames, adds, or removes a questions heading, update the
  "Questions heading" column of the Areas table in the same change. A heading
  that does not match exactly stops the `answers` task.
- Adding an area requires one row in the Areas table and a questions heading in
  `criteria.md`. Add an entry under
  [Area-specific instructions](#area-specific-instructions) only if the area
  needs one.
- Keep the tasks project-agnostic. Anything project-specific belongs in
  [Project context](#project-context). Keep the KubeVirt values as the reference
  example.
- Keep every task self-contained: its sources, procedure, and outputs appear
  under its own heading. Shared rules belong in
  [Conventions for all tasks](#conventions-for-all-tasks),
  [Rules for every task](#rules-for-every-task), or
  [Issue file conventions](#issue-file-conventions), and tasks link to them
  instead of repeating them.
- When the layout of `<work>` or a file-naming rule changes, update the layout
  block under [Working locations](#working-locations), the affected tasks, and
  the "Workflow" and "Folder layout" sections of `index.md` together.
- Write in the voice this file asks of the agent: complete sentences, active
  voice, imperative mood, and short paragraphs.
- Format this file with Prettier before committing. Run `npm run check:format`
  from the root of the `cncf/techdocs` clone, and `npm run fix:format` to apply
  the changes.
- `index.md` records the agent version and model that the harness was validated
  with. Update it when the tasks are validated again.

## Migration TODO

These items remain before this file can replace the `_github/` folder.

Decisions:

- [ ] Decide the file name and location. The AGENTS.md convention uses the
      upper-case name `AGENTS.md`, and agents load it from the repository root
      or the working directory. This prototype is named `agents.md` and sits in
      `docs/analysis/ai-harness/`, where no agent loads it automatically.
- [ ] Decide how the agent loads the file without adding it to the project
      clone. Candidates: run the agent from a folder in the `<techdocs>` clone
      that holds the file and grant it access to `<project>`; point the agent at
      the file's folder with a setting such as Copilot CLI's
      `COPILOT_CUSTOM_INSTRUCTIONS_DIRS`; or copy the one file to the root of
      `<project>` and leave it untracked. The last option conflicts with any
      `AGENTS.md` the project already has.
- [ ] Decide where `<work>` lives, and whether its `input/` and `output/` layout
      stays. Then replace the "Working folder" field with a default.
- [ ] Decide where the filled-in [Project context](#project-context) lives. If
      it stays in this file, each analysis needs its own edited copy. A separate
      project file next to `analysis.md`, which this file tells the agent to
      read, would keep this file unmodified and shared.
- [ ] Decide whether one file is the right size. All of this file is loaded into
      every session, including the issue tasks during area runs. Some agents cap
      the size of instruction files. An alternative is a short `AGENTS.md` that
      holds the rules and tables and points to task files that are read on
      demand.
- [ ] Decide whether the area IDs stay as they are. This prototype uses one ID
      for each area. The earlier harness had a separate output-file stem that
      differed for three areas (`new-user`, `new-contributor`, and
      `communication-methods-docd`), so output file names change.
- [ ] Decide how a project supplies its own issue template now that the
      templates are embedded here instead of being files.
- [ ] Decide how the writer invokes a task. Slash commands such as
      `/information-architecture-full` and the `title` input variable are
      Copilot prompt-file features and do not exist in AGENTS.md. This prototype
      uses plain requests such as `run full information-architecture`.

Dependencies on cncf/techdocs#423:

- [ ] Confirm the questions headings in the Areas table against the merged
      `criteria.md`.
- [ ] Confirm the criterion labels and section names against the merged
      `analysis.md` template. The template names the third section "Website and
      infrastructure"; this file keeps "Website & Infrastructure".
- [ ] Decide whether the "Other" questions under "Website" in `criteria.md`
      (HTTPS access and working links), which have no questions heading, become
      an area.
- [ ] Decide whether the "Other Metrics" table returns to the `section-comment`
      task.
- [ ] Decide whether the reference sources for `agent-readiness` and the
      instruction for `inclusive-language` move into `criteria.md`, which would
      empty [Area-specific instructions](#area-specific-instructions).

Remaining work:

- [ ] Validate every task against a real project and compare the output with a
      run of the `_github/` harness. Record the agent version and model in
      `index.md`.
- [ ] Test the file with at least one agent other than Copilot CLI. The earlier
      `full` engine asked for the "Claude default" output style; this file drops
      that instruction to stay agent-neutral.
- [ ] Rewrite `index.md` for the new model: the toolchain, the pre-flight
      checklist, the workflow steps, the upload process, and the folder layout
      all describe copying `_github/` into the project.
- [ ] Move the KubeVirt example (`_github/examples/kubevirt/`) to a location
      that survives the removal of `_github/`, and convert it to the
      [Project context](#project-context) fields.
- [ ] Remove `_github/` (criteria files, engines, wrappers, templates, and
      readme files) once this file is validated, and update the admin
      instructions that describe the folder roles.
- [ ] Decide whether this file is published on the TechDocs site. Files under
      `docs/` are built as pages; `_github/` was excluded by its underscore
      prefix.
- [ ] Add the upload script that `index.md` describes, or document the upload
      steps as a task here.
