---
title: Copilot instructions for CNCF TechDocs analysis
applyTo: **/*.md
---

# CNCF TechDocs Analysis Copilot Instructions

The CNCF TechDocs analysis focuses on evaluating the quality and completeness of
project documentation. Until now human reviewers have been performing this
analysis, and still will be. The goal of this project is to provide a harness
and workflow for writers to use for having Copilot to provide responses. As
such, predefined prompts are provided to guide Copilot in providing analysis
responses. Predefined prompts should also alleviate inconsistencies resulting
from having the writer craft the prompt.

Given that the analysis writers are providing their own analysis, the Copilot
analysis must be written as to require minimal editing by the writers, such as
making fragments into complete sentences, or adding context to a comment.

## Analysis Criteria

The focus is to analyze documentation for CNCF projects and to provide comments,
recommendations, and issues.

Review sources:

- Analysis criteria for evaluating content:
  https://github.com/cncf/techdocs/blob/main/docs/analysis/criteria.md.
- Template for the analysis report:
  https://github.com/cncf/techdocs/blob/main/docs/analysis/templates/analysis.md

## Analysis Guidelines

Things to keep in mind while doing the analysis:

Look for:

- Quick wins – low-effort changes that would have a major impact.
- Large, systemic issues that you can organize a number of issues around.
- The two or three most important issues that impede documentation
  effectiveness.
- Anything the project does exceptionally well. We can call these out as
  examples in other evaluations!

Don't get bogged down in detail when writing comments. Include enough detail
that you can describe how to implement a suggested solution. A sentence or two
is sufficient for most issues.

Keep in mind the overall goal of the technical documentation: to make its users
more effective. Focus on issues that get in the way of that goal.

It is not necessary to come up with a recommendation in every case, especially
for elements that are satisfactory or if a recommendation would result in
minimal improvement.

Analysis criteria is further specified in the prompt files under
`.github/prompts/`.

## Analysis responses style

Readers of the analysis are Kubernetes subject-matter experts who want to
improve the documentation quickly. Write for them: be concise and actionable,
and skip explanations they don't need.

- Write in complete sentences, using active voice and the imperative mood.
- Fragments are fine inside a bulleted list that follows an introductory
  sentence.
- Explain any term or acronym that a senior Kubernetes engineer might not know.
- Don't list technologies in parentheses; readers already know them.
- Use parentheses only when the content is needed to understand the
  recommendation.
- When a sentence would list four or more items, end the paragraph with an
  introductory sentence followed by a bulleted list of the items.
- You can refer to Markdown files instead of page titles; but unless the name is
  obvious, also provide the page title. No need to include relative paths as
  long as the page title is clear.
- Keep paragraphs under about 4 sentences; split longer ones.
- Treat any paragraph limit in a prompt as a maximum, not a target.
- If you're unsure whether something is technically wrong, phrase it as a
  question for the SME rather than asserting it.
- Follow Kubernetes documentation conventions: UpperCamelCase for API objects
  (Pod, Deployment), and code formatting for commands, fields, and file names.

## Analysis Criteria and Predefined Prompts

The KubeVirt analysis has three sections (Project Documentation, Contributor
Documentation, and Website & Infrastructure). Each section contains multiple
areas, and each area has its own criteria and prompts for evaluation.

The AI assisted analysis harness is organized into two types of files: criteria
and prompt Markdown files. These files are organized further by `areas` and
`sections` folders. These files live under `.github/criteria/areas`,
`.github/criteria/sections`, `.github/prompts/areas`, and
`.github/prompts/sections` respectively. Generated output lives in
`.github/output`.

```
.github/
  copilot-instructions.md
  criteria/
    areas/<area>.md              # Per-area data: display name, file stem, questions, comment guidance
    sections/<section>.md        # Per-section data: display name, slug, member areas and comment-file stems
  prompts/
    areas/
      answers.prompt.md          # Shared engines
      comment.prompt.md
      recommendations.prompt.md
      full.prompt.md
      <area>-<type>.prompt.md    # Per-area wrappers
    sections/
      section-comment.prompt.md  # Shared engine
      <section>-comment.prompt.md  # Per-section wrappers
    issues/
      create-issues.prompt.md           # Generates numbered issue files from ranked recommendations
      create-umbrella-issues.prompt.md  # Groups issue files into umbrella issues
  output/
    <project-slug>-<stem>-<type>.md            # Per-area outputs
    <project-slug>-<section-slug>-comment.md   # Section-level comments
    issues/<number>-<short-slug>.md            # Generated standalone issue files
    issues/U-<number>-<short-slug>.md          # Generated umbrella issue files
    issues-coverage.md                         # Issue list and recommendation-to-issue mapping
```

Criteria files for an area define the per-area data: display name, output-file
stem, question set, and comment guidance. The area name is the criteria filename
without `.md` (for example, `.github/criteria/areas/information-architecture.md`
defines the `information-architecture` area).

Criteria files for a section define the section's display name, slug, and member
areas (with the stem of each area's comment file).

Prompt files for areas are organized into three layers so the per-area questions
(data) are separated from the task logic (verbs):

- Per-area wrappers (`<area>-<type>.prompt.md`) — the entry points you invoke,
  for example `/information-architecture-answers`. Each wrapper simply binds one
  criteria area to one shared engine.
- Shared engines (`answers.prompt.md`, `comment.prompt.md`,
  `recommendations.prompt.md`, all in `.github/prompts/areas/`) — the reusable
  procedure for each output type. They are project-agnostic: the project name
  and documentation label are read from the "Current Repository" section below,
  so the same engines work in any repository.

Prompt files for sections follow a similar structure, with section-level
wrappers and an engine (`section-comment.prompt.md`), all in
`.github/prompts/sections/`, to synthesize comments from the member areas.

For areas only, there is also an optional composite engine `full.prompt.md`,
that runs the `answers`, `comment`, and `recommendations` engines for one area
in that order (recommendations depends on the answers and comment files existing
first). A per-area `full` wrapper (for example,
`/information-architecture-full`) invokes it to produce all three output files
in a single run.

The `section-comment.prompt.md` engine writes a two-to-five paragraph overall
comment for one section by synthesizing that section's existing per-area comment
files (it does not re-analyze the documentation), and it prepends a summary
ratings table scraped from each area comment's `Rating:` line. Its data lives in
`.github/criteria/sections/<section>.md`, which lists the section's display
name, slug, and member areas with the stem of each area's comment file. A
per-section wrapper (for example, `/project-documentation-comment`) invokes it.
Because the per-area comment files are a precondition, run the relevant
`<area>-comment` prompts first. By default the output is written to
`.github/output/<project-slug>-<section-slug>-comment.md` (for example,
`kubevirt-project-documentation-comment.md`), overridable with a `title` input.

Each criteria area needs three wrapper files (`answers`, `comment`,
`recommendations`), and the wrappers are mechanical: they reference the area
name and embed the display name in the description. A `full` wrapper is optional
per area.

By default a prompt writes to `<project-slug>-<stem>-<type>.md` in the
`.github/output` directory (for example,
`kubevirt-information-architecture-answers.md`). Provide an optional `title`
input to override the filename. To add or change questions for an area, edit
only its `.github/criteria/areas/<area>.md` file.

Output types: `answers`, `comment`, `recommendations` (plus the optional `full`
composite). At the section level there is one additional output type, the
section-level `comment` produced by the `section-comment` engine and its
per-section wrappers.

The analysis document has three sections: Project Documentation, Contributor
Documentation, and Website & Infrastructure. Each section contains multiple
criteria areas that are evaluated separately, and the results are synthesized
into section-level overall comments.

Sections (for the section-level overall comment):

| Section                   | Section slug              | Member areas (comment-file stems)                                                                                                                    |
| ------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Project Documentation     | project-documentation     | information-architecture, new-user, content-maintainability, content-creation-process, inclusive-language                                            |
| Contributor Documentation | contributor-documentation | communication-methods-docd, beginner-issue-backlog, new-contributor, project-governance                                                              |
| Website & Infrastructure  | website-infrastructure    | single-source-requirement, website-requirements, usability-accessibility-devices, branding-design, case-studies, seo-analytics, maintenance-planning |

Areas (the Area column is the criteria filename under `.github/criteria/areas/`
and the prefix of the per-area wrapper prompts):

| Area                             | Display Name                            | Output File Stem                | Section in analysis.md    |
| -------------------------------- | --------------------------------------- | ------------------------------- | ------------------------- |
| beginner-issue-backlog           | Beginner Friendly Issue Backlog         | beginner-issue-backlog          | Contributor Documentation |
| branding-design                  | Branding and Design                     | branding-design                 | Website & Infrastructure  |
| case-studies                     | Case Studies                            | case-studies                    | Website & Infrastructure  |
| communication-methods-documented | Communication Methods Documented        | communication-methods-docd      | Contributor Documentation |
| content-creation-process         | Content Creation Process                | content-creation-process        | Project Documentation     |
| content-maintainability          | Content Maintainability                 | content-maintainability         | Project Documentation     |
| inclusive-language               | Inclusive Language                      | inclusive-language              | Project Documentation     |
| information-architecture         | Information Architecture                | information-architecture        | Project Documentation     |
| maintenance-planning             | Maintenance Planning                    | maintenance-planning            | Website & Infrastructure  |
| new-contributor-content          | New Contributor Getting Started Content | new-contributor                 | Contributor Documentation |
| new-user-content                 | New User Content                        | new-user                        | Project Documentation     |
| project-governance-documentation | Project Governance Documentation        | project-governance              | Contributor Documentation |
| seo-analytics                    | SEO, Analytics, and Site Search         | seo-analytics                   | Website & Infrastructure  |
| single-source-requirement        | Single-Source Requirement               | single-source-requirement       | Website & Infrastructure  |
| usability-accessibility-devices  | Usability, Accessibility and Devices    | usability-accessibility-devices | Website & Infrastructure  |
| website-requirements             | Website Requirements                    | website-requirements            | Website & Infrastructure  |

### Example: invoking a predefined prompt

To have Copilot answer the information architecture questions, invoke the
per-area wrapper as a slash command in the current directory:

```text
run /information-architecture-answers
```

This runs the `information-architecture` questions through the shared `answers`
engine and writes the result to the default file
`.github/output/kubevirt-information-architecture-answers.md`.

To override the output filename, pass a `title` input:

```text
run /information-architecture-answers title: my-analysis
```

That writes the answers to `.github/output/my-analysis.md` instead of the
default filename. The same pattern applies to every area and output type — for
example, `/inclusive-language-recommendations` or `/new-user-content-comment`.

## Analysis.md and Output Files Mapping

Predefined prompts create Markdown files of their AI generated output. The
content from these files, without the temporary H1 headings at the top, is
copied into specific locations in the analysis.md file.

| Output file                                           | Location in analysis.md                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<project-slug>-project-documentation-comment.md`     | **Start**: After the ratings table that follows the first paragraph that follows the "Project Documentation" H2.<br>**End**: Before the sentence "The following sections contain assessments of each element of the Project Documentation rubric."                                                                                                            |
| `<project-slug>-contributor-documentation-comment.md` | **Start**: After the ratings table that follows the first paragraph that follows the "Contributor Documentation" H2.<br>**End**: Before the sentence "The following sections contain assessments of each element of the Contributor Documentation rubric."                                                                                                    |
| `<project-slug>-website-infrastructure-comment.md`    | **Start**: After the ratings table that follows the first paragraph that follows the "Website & Infrastructure" H2.<br>**End**: Before the sentence "The following sections contain assessments of each element of the Website & Infrastructure rubric."                                                                                                      |
| `<project-slug>-<stem>-answers.md`                    | **Start**: After the first paragraph that follows the H3 heading for an area, e.g. "### Information Architecture". That first paragraph should end with the sentence: "We evaluate on the following:".<br>**End**: Before the H4 "Comment" heading.                                                                                                           |
| `<project-slug>-<stem>-comment.md`                    | **Start**: After the H4 "Comment" heading.<br>**End**: Before the next H3 or H2 heading.<br>**Note**: Currently, only the Strengths and Weaknesses of the area comments are pasted into analysis.md.<br>**Note**: The rating for the area (last line in the output) is later manually copied by a writer into the area summary ratings table for the section. |
| `<project-slug>-<stem>-recommendations.md`            | **Start**: Under the H2 headings "Project documentation recommendations", "Contributor documentation recommendations", or "Website & infrastructure recommendations" and under the H3 heading for the area.<br>**End**: Before the next H3 or H2 heading.                                                                                                     |

## Recommendations and Issues

Currently, a writer took the recommendations from the Copilot analysis and asked
Copilot to rank them. The writer created a file,
`.github/input/ai-ranked-recommendations.csv`, with the following columns:

- `Section` - Either the "Project Documentation", "Contributor documentation",
  or "Website & Infrastructure" section.
- `Area` - The specific area within the section that the recommendation pertains
  to. The area names in the CSV are the display names used in the analysis, not
  the criteria area filenames.
- `Recommendation` - The AI-written recommendation describing the action that
  should be taken.
- `Suggested Priority` - The ranking priority: `1 - Urgent`, `2 - High`, or
  `3 - Backlog`. These priorities were only for the recommendation ranking and
  may be adjusted when creating issues.

The priority labels used for issues are `urgent`, `high`, and `backlog`,
matching the CSV ranking without its number prefix. The upload process maps them
to the `kubevirt/user-guide` repository labels `priority/critical-urgent`,
`priority/high`, and `priority/backlog`. The repository already has the first
and last; a request has been made to add `priority/high`. Assume all three are
available when writing the issue files.

Every issue also gets the `help wanted` label. It exists in the repository and
signals that maintainers are seeking community help; CNCF uses it to surface
documentation tasks on [CLOTributor](https://clotributor.dev).

Issues are a subset of the recommendations that have been identified as problems
or areas needing attention. Not all recommendations are issues; some may be
suggestions for improvement that do not indicate a problem. Copilot is to create
the issues based on the ranked recommendations, and then group them into
umbrella issues. Copilot may change the priority of the issues as it sees fit.
As a reference, see the umbrella issues in
[CNCF TechDocs Assistance issues tracker #221](https://github.com/cncf/techdocs/issues/221),
the KEDA
[standalone issue example](https://github.com/kedacore/keda-docs/issues/1363),
and the KEDA
[umbrella issue example](https://github.com/kedacore/keda-docs/issues/1361). The
KubeVirt assistance request is
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).

Copilot will create Markdown files of the issues with updated priorities as
applicable. These files will be stored in the `.github/output/issues/`
directory. A process will then upload them to the project's repository, so every
file in that directory must be a complete, uploadable issue. Issue creation runs
in two passes, each with its own prompt:

1. `/create-issues` writes one file per standalone issue, numbered sequentially.
2. `/create-umbrella-issues` reads those files and writes umbrella issues that
   link to them.

In writing the issues, Copilot should use the following guidelines:

- Source the issues only from the ranked recommendations CSV and the per-area
  recommendations files in `.github/output/analysis/`. Do not add issues from
  general knowledge of the KubeVirt repositories; that over-generates issues the
  assessment did not identify.
- Ensure that the issues are clearly described and actionable. Follow the
  headings of the `.github/issue_template/kubevirt-doc-issue.md` template; it is
  the KubeVirt team's documentation issue format.
- Each issue should take about two to four hours for a technical writer, or
  engineer, with KubeVirt context to complete.
- Small tasks can be consolidated into one issue where appropriate. Avoid
  flooding the project: aim for far fewer issues than recommendations.
- Umbrella issues group three to ten related issues. Follow the
  `.github/issue_template/umbrella-issue.md` template: an `## Umbrella Issue`
  overview and a `## Sub-issues` list that links to the sub-issue files. The
  umbrella does not contain the sub-issue content.
- Copilot is at liberty to create subheadings in the issue files as needed to
  organize the content effectively, but keeps the template's top-level headings.
- Everything outside the front matter is the issue description and must be
  GitHub-flavored Markdown.
- Ensure the following front matter (metadata) is included at the top of each
  issue file.
  - Create a title and append the simulated issue number as ` #{issue number}`.
    It becomes the GitHub issue title.
  - Set `labels` to the priority label (`urgent`, `high`, or `backlog`) plus
    `help wanted`. Labels become GitHub issue labels.
  - Set `repo` to `https://github.com/kubevirt/user-guide/issues`.

  ```yaml
  ---
  title: Add a user-facing troubleshooting page #9007
  labels: [high, help wanted]
  repo: https://github.com/kubevirt/user-guide/issues
  ---
  ```

#### Issue numbers

Issue numbers simulate GitHub issue numbers so that files can reference each
other before upload. They are five digits, start at 9001, and increment by one
for each issue in the order written. Umbrella issues continue the sequence after
the last standalone issue. The `## Issues` table in
`.github/output/issues-coverage.md` maps each number to its title, label, and
file, and is how the umbrella prompt finds the next free number.

In an umbrella issue, each sub-issue is one list item whose link text is the
sub-issue title and number and whose target is the sub-issue file, relative to
the umbrella file:

```markdown
- [Reorganize Concepts #9938](9938-reorganize-concepts.md)
```

#### Issue file names

Save the issue files to the `.github/output/issues/` directory. Name standalone
issue files `{issue-number}-{condensed-issue-title}.md` and umbrella issue files
`U-{issue-number}-{condensed-issue-title}.md`. The condensed title is a
lowercase, hyphenated version of the issue title, no more than about five words:

- Keep the action verb and the main subject noun; drop articles, conjunctions,
  and secondary clauses.
- Name the topic (for example, `navigation`, `footer`, `virtctl`), not the
  analysis area it came from.
- When the title lists several changes, use a collective noun such as
  `improvements` or `updates` instead of listing them.
- Strip punctuation from version numbers (`v1.9` becomes `v19`).

Examples of a file name built from a full title:

| Issue title                                                       | File name                               |
| ----------------------------------------------------------------- | --------------------------------------- |
| Add a user-facing troubleshooting page #9007                      | `9007-add-troubleshooting-page.md`      |
| Move Release Notes out of the main navigation #9004               | `9004-move-release-notes.md`            |
| Document the v1.9 VirtualMachineBackup API #9012                  | `9012-document-v19-backup-api.md`       |
| Create a new-user getting started path #9061                      | `U-9061-create-getting-started-path.md` |
| Fix navigation gaps and reorganize information architecture #9062 | `U-9062-fix-navigation-gaps.md`         |

Previous runs are archived in sub-folders of `.github/output/issues/` (for
example, `prev_1/`). The prompts ignore those sub-folders.

### Create issues AI prompt

The prompt lives in `.github/prompts/issues/create-issues.prompt.md` and is the
single source of truth. Run it as a slash command from the repository root:

```text
run /create-issues
```

It deletes issue files from a previous run, writes the numbered standalone issue
files, and writes `.github/output/issues-coverage.md` with the issue table, the
recommendation-to-issue mapping, priority adjustments, and counts.

To re-run after coaching Copilot on scope, run the command again and add the
corrections in the same message, for example
`run /create-issues — split the "Getting started" issue into two; it is more than four hours`.

### Create umbrella issues AI prompt

The prompt lives in `.github/prompts/issues/create-umbrella-issues.prompt.md`.
Run it in a new session after `/create-issues` has finished and the writer has
reviewed the standalone issues:

```text
run /create-umbrella-issues
```

It reads the standalone issue files and the `## Issues` table in
`issues-coverage.md`, groups the issues into themes of three to ten, writes the
`U-` umbrella files with the next free issue numbers, and appends the umbrellas
to the coverage report. It does not modify standalone issue files or re-read the
recommendations; if an issue needs re-scoping, re-run `/create-issues` first.

To adjust the grouping, run the command again with the corrections in the same
message, for example
`run /create-umbrella-issues — merge the analytics and site-ownership umbrellas`.

## Current Repository

Main repository: [KubeVirt](https://github.com/kubevirt/kubevirt)

Secondary repository (lab docs):
[KubeVirt.github.io](https://github.com/kubevirt/kubevirt.github.io)

As writers will be working in different repositories, Copilot should complete
the rest of this section as shown below.

Copilot shall output Markdown files from the AI-assisted analysis to the
`.github/output` directory in the current directory.

### What This Repo Is

This is the [KubeVirt user guide](https://kubevirt.io/user-guide), a
documentation-only site built with [MkDocs](https://www.mkdocs.org/) using the
`mkdocs-material` theme and `mkdocs-awesome-nav` plugin. All content lives in
`./docs` as Markdown files. There is no application code.

### Content Architecture

```
docs/
  .nav.yml              # Top-level navigation order
  index.md
  architecture.md
  cluster_admin/        # Installation, feature gates, RBAC, node ops
  user_workloads/       # VM lifecycle, instancetypes, virtctl, startup scripts
  compute/              # CPU/memory, live migration, hugepages, NUMA
  network/              # Interfaces, hotplug, binding plugins, Istio
  storage/              # CDI, volumes, snapshots, clone, export
  debug_virt_stack/     # Debugging guides
```

### Key Conventions

#### Navigation order via `.nav.yml`

Every subdirectory under `docs/` has a `.nav.yml` that explicitly controls page
ordering. Alphabetical order is intentionally not used. When adding a new page,
add it to the relevant `.nav.yml`.

#### Redirects in `mkdocs.yml`

Old page paths (e.g. `operations/`, `virtual_machines/`) are redirected to their
new locations via the `redirects` plugin in `mkdocs.yml`. When moving or
renaming a page, add an entry there.

#### No commits

This work is solely for documentation analysis. There are no commits to the
application code in this repository.

#### Spelling dictionary

The yaspeller dictionary is sourced from
`kubevirt/project-infra/images/yaspeller/.yaspeller.json`. If a technical term
causes false positives, it needs to be added there (upstream), not locally —
unless a local `yaspeller.json` override is present.

#### MkDocs extensions in use

Pages can use: `admonition`, `footnotes`, `toc` with `permalink`,
`pymdownx.highlight`, `pymdownx.superfences`, `attr_list`, and `pymdownx.emoji`.
These are already configured in `mkdocs.yml` — no additional setup needed.
