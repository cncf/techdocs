# CNCF TechDocs Analysis Copilot Instructions

The CNCF TechDocs analysis focuses on evaluating the quality and completeness of
project documentation. Until now human reviewers have been performing this
analysis, and still will be. The goal of this project is to provide a structure
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

## Predefined Prompts

The analysis prompts live under `.github/prompts/` and are organized into three
layers so the per-area questions (data) are separated from the task logic
(verbs):

- Per-area wrappers (`<area>-<type>.prompt.md`) — the entry points you invoke,
  for example `/information-architecture-answers`. Each wrapper simply binds one
  criteria area to one shared engine.
- Shared engines (`answers.prompt.md`, `comment.prompt.md`,
  `recommendations.prompt.md`) — the reusable procedure for each output type.
  They are project-agnostic: the project name and documentation label are read
  from the "Current Repository" section below, so the same engines work in any
  repository.
- Criteria definitions (`criteria/<area>.md`) — the per-area data: display name,
  output-file stem, question set, and comment guidance.

There is also an optional composite engine, `full.prompt.md`, that runs the
`answers`, `comment`, and `recommendations` engines for one area in that order
(recommendations depends on the answers and comment files existing first). A
per-area `full` wrapper (for example, `/information-architecture-full`) invokes
it to produce all three output files in a single run.

Above the per-area layer there is a **section-level** overall comment. The
analysis groups areas into three sections (Project Documentation, Contributor
Documentation, and Website & Infrastructure). The `section-comment.prompt.md`
engine writes a two-to-five paragraph overall comment for one section by
synthesizing that section's existing per-area comment files (it does not
re-analyze the documentation), and it prepends a summary ratings table scraped
from each area comment's `Rating:` line. Its data lives in
`sections/<section>.md`, which lists the section's display name, slug, and
member areas with the stem of each area's comment file. A per-section wrapper
(for example, `/project-documentation-comment`) invokes it. Because the per-area
comment files are a precondition, run the relevant `<area>-comment` prompts
first. By default the output is written to
`<project-slug>-<section-slug>-comment.md` (for example,
`kubevirt-project-documentation-comment.md`), overridable with a `title` input.

Each criteria area needs three wrapper files (`answers`, `comment`,
`recommendations`), and the wrappers are mechanical: they reference the area
name and embed the display name in the description. A `full` wrapper is optional
per area.

By default a prompt writes to `<project-slug>-<stem>-<type>.md` in the current
directory (for example, `kubevirt-information-architecture-answers.md`). Provide
an optional `title` input to override the filename. To add or change questions
for an area, edit only its `criteria/<area>.md` file.

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

Areas:

| Area                             | Display Name                            | Output File Stem                | Section in analysis.md    |
| -------------------------------- | --------------------------------------- | ------------------------------- | ------------------------- |
| beginner-friendly-issue-backlog  | Beginner Friendly Issue Backlog         | beginner-issue-backlog          | Contributor Documentation |
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
| project-governance               | Project Governance Documentation        | project-governance              | Contributor Documentation |
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
`kubevirt-information-architecture-answers.md`.

To override the output filename, pass a `title` input:

```text
run /information-architecture-answers title: my-analysis
```

That writes the answers to `my-analysis.md` instead of the default filename. The
same pattern applies to every area and output type — for example,
`/inclusive-language-recommendations` or `/new-user-content-comment`.

## Analysis.md and Output Files Mapping

Predefined prompts create Markdown files of their AI generated output. The
content from these files, without the temporary H1 headings at the top, is
copied into specific locations in the analysis.md file.

| Output file                                           | Location in analysis.md                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<project-slug>-project-documentation-comment.md`     | **Start**: After the ratings table that follows the first paragraph that follows the "Project Documentation" H2.<br></br>**End**: Before the sentence "The following sections contain assessments of each element of the Project Documentation rubric."                                                                                                                      |
| `<project-slug>-contributor-documentation-comment.md` | **Start**: After the ratings table that follows the first paragraph that follows the "Contributor Documentation" H2.<br></br>**End**: Before the sentence "The following sections contain assessments of each element of the Contributor Documentation rubric."                                                                                                              |
| `<project-slug>-website-infrastructure-comment.md`    | **Start**: After the ratings table that follows the first paragraph that follows the "Website & Infrastructure" H2.<br></br>**End**: Before the sentence "The following sections contain assessments of each element of the Website & Infrastructure rubric."                                                                                                                |
| `<project-slug>-<stem>-answers.md`                    | **Start**: After the first paragraph that follows the H3 heading for an area, e.g. "### Information Architecture". That first paragraph should end with the sentence: "We evaluate on the following:".<br></br>**End**: Before the H4 "Comment" heading.                                                                                                                     |
| `<project-slug>-<stem>-comment.md`                    | **Start**: After the H4 "Comment" heading.<br></br>**End**: Before the next H3 or H2 heading.<br></br>**Note**: Currently, only the Strengths and Weaknesses of the area comments are pasted into analysis.md.<br></br>**Note**: The rating for the area (last line in the output) is later manually copied by a writer into the area summary ratings table for the section. |
| `<project-slug>-<stem>-recommendations.md`            | **Start**: Under the H2 headings "Project documentation recommendations", "Contributor documentation recommendations", or "Website & infrastructure recommendations" and under the H3 heading for the area.<br></br>**End**: Before the next H3 or H2 heading.                                                                                                               |

## Current Repository

Main repository: [KubeVirt](https://github.com/kubevirt/kubevirt)

Secondary repository (lab docs):
[KubeVirt.github.io](https://github.com/kubevirt/kubevirt.github.io)

As writers will be working in different repositories, Copilot should complete
the rest of this section as shown below.

Copilot shall only output Markdown files in the current directory

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
