---
title: Add a pull request template #9022
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide repository has no pull request template, so authors do not see
the checks that reviewers expect. Missing `.nav.yml` entries, missing redirects
for moved pages, and missing feature-state banners then surface only in review.

Add `.github/pull_request_template.md` with a short description prompt and a
checklist:

- The relevant `.nav.yml` is updated for every new page.
- A redirect is added to `mkdocs.yml` for every moved or renamed page.
- `make check_spelling` and `make check_links` pass.
- The feature-state banner is present on feature pages.
- The related kubevirt/kubevirt pull request or VEP (KubeVirt Enhancement
  Proposal) is linked.

Keep the template under about 20 lines so authors actually read it. Check
whether the Prow `release-note` block that kubevirt repositories use should also
appear in the template. Ask the maintainers to confirm.

## What you expected

Every new pull request opens with the checklist pre-filled, and authors confirm
each item before requesting review.

## URL

- Repository: https://github.com/kubevirt/user-guide
- New file: `.github/pull_request_template.md`
- Guide pages the checklist refers to:
  https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)

## Additional context

Related: #9021 (style guide, which the checklist should link), #9020 (expanded
`CONTRIBUTING.md`), and #9037 (first change walkthrough). Make the checklist
wording match the commands those pages describe.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
