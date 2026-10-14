---
title: Add accessibility and language checks to CI #9028
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The guide's pull request checks cover spelling (`make check_spelling`) and links, but nothing flags minimizing language or accessibility regressions such as low contrast. Both problems return unless a check catches them in the pull request.

Add two checks to the `Makefile` and to the Prow pre-submit job:

- A language check. Use Vale with the `write-good` style, or a grep-based target that runs next to `make check_spelling`. Flag "simple", "simply", "easy", "easily", "just", and "obviously". Start in warning mode if existing pages still contain matches.
- An accessibility check. Run `pa11y-ci` or Lighthouse against the built site for a sample of pages, for example the home page, Live Migration, and one storage page.

Document both targets in the README and on the Contributing page. Prow job configuration lives in kubevirt/project-infra, so list the change needed there in this issue.

## What you expected

A pull request that introduces minimizing language or a contrast failure shows a failing or warning check before review.

## URL

- `Makefile` in https://github.com/kubevirt/user-guide
- Prow configuration: https://github.com/kubevirt/project-infra
- Contributing page: https://kubevirt.io/user-guide/contributing/ (`docs/contributing.md`)

## Additional context

Depends on #9027 (existing minimizing language must be fixed before the check can fail builds) and relates to #9048 (contrast fixes) and #9021 (style guide). Question for the maintainers: Should the Prow job block merges or only report warnings at first?

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
