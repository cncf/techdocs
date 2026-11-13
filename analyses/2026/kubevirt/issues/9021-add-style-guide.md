---
title: Add a documentation style guide #9021
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide has no written style guide. Contributors infer page structure,
admonition use, code block format, and naming from existing pages, so pages
drift apart and reviewers repeat the same feedback in every pull request.

Add a short style guide, for example `docs/style_guide.md`, and add it to the
Contributing section in `docs/.nav.yml`. Cover these topics, each with a one- or
two-line rule and a short example:

- Page structure: title, short concept paragraph, feature-state banner,
  procedure, related links.
- The standard feature-state admonition and when to use it.
- Code blocks: fenced blocks with a language tag, and no `$` prompts so readers
  can copy commands.
- Capitalization of Kubernetes objects, such as VirtualMachine, in
  UpperCamelCase.
- File naming under `docs/`.
- Minimizing language: avoid "simple", "simply", "easy", "easily", "just", and
  "obviously", and explain in one line that these words discourage readers who
  find the step difficult.

Link the style guide from `CONTRIBUTING.md` and from the Contributing page.

## What you expected

A contributor can read one short page and learn how to structure and format a
new page, including which words to avoid. Reviewers can point to the style guide
instead of repeating the rules.

## URL

- Contributing page: https://kubevirt.io/user-guide/contributing/
  (`docs/contributing.md`)
- `CONTRIBUTING.md` in the repository root
- `docs/.nav.yml`

## Additional context

Related: #9020 (expand `CONTRIBUTING.md`), #9022 (pull request template
checklist), #9027 (reword existing minimizing language), and #9028 (automated
language check). Ask the maintainers which feature-state banner wording is the
standard so the guide documents the right one.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
