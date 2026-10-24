---
title: AI Assisted Analysis Harness
---

# AI Assisted Analysis Harness

This folder holds a reusable harness for running a CNCF TechDocs
[documentation analysis](../howto.md) with GitHub Copilot. The `_github/` folder
is a template for the target project's `.github/` folder: it contains Copilot
instructions, the analysis criteria broken into areas and sections, predefined
prompts for each step, issue templates, and input and output folders. The
harness is project-agnostic; everything project-specific lives in one section of
`copilot-instructions.md`.

The harness was built for the KubeVirt analysis
([cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343)). A worked
example of its project-specific section is in `_github/examples/kubevirt/`.

## How it fits the analysis

A writer still owns the analysis. The harness has Copilot answer the
[criteria](../criteria.md) questions, draft comments and ratings, propose
recommendations, rank them, and write issue files, all in a consistent format
that maps onto the [analysis template](../templates/analysis.md). The writer
reviews and edits every output before it goes into `analysis.md` or the
project's issue tracker. For how Copilot should write, see "Analysis responses
style" in `_github/copilot-instructions.md`.

## Validated toolchain

The prompts were validated with:

- GitHub Copilot CLI 1.0.x (`copilot --version`; 1.0.103 at the time of
  writing), run from the root of the target project's documentation repository
  so that `.github/copilot-instructions.md` is picked up automatically.
- A Claude model (`/model` in the CLI shows the current one). The `full` engine
  asks for "Claude default" output style; other models work but may need the
  style section tuned. <!-- FILL IN: the model used for the KubeVirt run -->
- Node.js and Prettier (`npm run check:format` in `cncf/techdocs`) for
  formatting the generated Markdown before pasting it into `analysis.md`.
- Prompt files that rely on two Copilot prompt-file features: `mode: agent` in
  the front matter and the `${input:title}` variable for the optional output
  filename override. The prompts are invoked as slash commands
  (`/information-architecture-full`), which requires the files to end in
  `.prompt.md` and live under `.github/prompts/`.

Record the version and model you used in the analysis document's front matter or
introduction so later runs can be compared.

## Pre-flight checklist

Complete these before the first prompt run:

- [ ] The project has an assistance request issue in `cncf/techdocs`, and a
      branch in `cncf/techdocs` with `docs/analysis/<NNNN>-<project>/`
      scaffolded from the [templates](../templates/) (`analysis.md`,
      `implementation.md`, `issues-list.md`).
- [ ] The target repository's `.github/` has no existing `prompts/` or
      `copilot-instructions.md` that would conflict. If it does, merge rather
      than overwrite, and keep the harness instructions at the top.
- [ ] The issues repository has the labels the "Priority label mapping" table
      maps to (for KubeVirt: `priority/critical-urgent`, `priority/high`,
      `priority/backlog`) plus `help wanted`. Ask the maintainers to create any
      that are missing before uploading issues.
- [ ] You can run `copilot` in the repository and it reports the expected
      version and model.
- [ ] You have maintainer agreement that the analysis work is not committed to
      the project's repository. The harness writes only under `.github/input`
      and `.github/output`; keep those changes on a local branch.

## Workflow

1. **Install the harness.** Copy `_github/` into the root of the target
   project's documentation repository and rename it to `.github/`. Every prompt
   references `.github/...` paths, so the rename is required. Do not copy
   `examples/`.
2. **Fill in the project context.** Complete every `<!-- FILL IN -->`
   placeholder in the "Current Repository" section of
   `.github/copilot-instructions.md`, using `examples/kubevirt/` as a model. If
   the project has its own documentation issue template, copy it to
   `.github/templates/` with the four headings `Description`,
   `What you expected`, `URL`, and `Additional context`, and name it in the
   "Issue template file" field.
3. **Run the area prompts.** For each of the seventeen areas, run `/<area>-full`
   (for example `/information-architecture-full`). Each run writes three files
   to `.github/output/analysis/`: answers, comment, and recommendations. Start a
   new session for each area so context from one area does not leak into the
   next. Review each comment's `Rating:` line; it feeds the section tables.
4. **Run the section prompts.** Run `/project-documentation-comment`,
   `/contributor-documentation-comment`, and `/website-infrastructure-comment`.
   Each synthesizes its member areas' comment files into an overall comment with
   a ratings table.
5. **Assemble `analysis.md`.** Paste the outputs into the analysis document
   following the "Analysis.md and Output Files Mapping" table in
   `copilot-instructions.md`. Drop the temporary H1 headings. Edit for accuracy
   and voice; the writer's judgment is the final word on ratings.
6. **Rank the recommendations.** Run `/rank-recommendations`. It writes
   `.github/input/ai-ranked-recommendations.csv`. Review the priorities and
   re-run with corrections if needed.
7. **Create issues.** Run `/create-issues` and review the scope of each file in
   `.github/output/issues/`. Then, in a new session, run
   `/create-umbrella-issues`. Both prompts update
   `.github/output/issues-coverage.md`, which maps every recommendation to an
   issue and lists the issue numbers.
8. **Upload the issues.** Use the upload process described below. Record the
   real issue numbers in `issues-list.md` and link the umbrella issues from the
   assistance request issue.
9. **Finish the analysis documents.** Complete `implementation.md` and
   `issues-list.md` from the coverage report, then open the pull request in
   `cncf/techdocs`.

## Upload process

The issue prompts write one Markdown file per issue with YAML front matter
(`title`, `labels`, `repo`) followed by the GitHub-flavored Markdown body. The
upload step reads every `*.md` file in `.github/output/issues/` except
`readme.md` and sub-folders, and for each file:

1. Creates a GitHub issue in `repo` with the front matter `title` (minus the
   trailing `#<number>`) and the body.
2. Maps the harness labels to repository labels using the "Priority label
   mapping" table and applies them.
3. Records the simulated number (`#9001`) against the real issue number.
4. After all standalone issues exist, creates the `U-*` umbrella issues,
   rewriting each `[title #9001](9001-file.md)` link to the real issue URL so
   the umbrella's sub-issue list resolves.

For KubeVirt this was done with a `gh issue create` script run by the writer;
the script is not part of the harness yet. Until it is added here, write the
script per project following the steps above, and upload standalone issues first
so the umbrella links can be resolved. Keep the resulting mapping of simulated
to real numbers in `.github/input/` for the `issues-list.md` step.

## Folder layout

```text
ai-harness/
  index.md                     # This file
  _github/                     # Copy to <project repo>/.github/
    copilot-instructions.md    # Run-time instructions; fill in "Current Repository"
    criteria/                  # Per-area questions and per-section membership
    prompts/                   # Area, section, and issue prompts
    templates/                 # doc-issue.md and umbrella-issue.md
    input/                     # ai-ranked-recommendations.csv and ad hoc inputs
    output/analysis/           # Area and section outputs
    output/issues/             # Standalone and umbrella issue files
    examples/kubevirt/         # Worked example of the project-specific section
```

For the structure of the criteria and prompt files, the output file naming, and
the `analysis.md` mapping, see `_github/copilot-instructions.md`.
