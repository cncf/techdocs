---
title: Expand CONTRIBUTING.md into a documentation contributor guide #9020
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

`CONTRIBUTING.md` is a pointer to the Contributing page on the published site.
The steps for building the guide live in `README.md`, and nothing in the
repository describes the full path from an idea to a merged change. Contributors
must guess the review process.

Expand `CONTRIBUTING.md` into a documentation contributor guide that covers the
full lifecycle:

- How to propose a change: open an issue first or send a pull request directly.
- How to build and test locally. Move the build steps from `README.md` into this
  guide, and leave a link in `README.md`.
- What happens after you open a pull request: labels, the `/lgtm` and `/approve`
  commands, and the expected turnaround time. Ask the maintainers for the
  typical turnaround.
- When to add a redirect to `mkdocs.yml` and when to update `.nav.yml`.
- When a change needs a cherry-pick to a `release-vX.Y-stable` branch.

Use the Thanos "How to contribute to docs" page as a model for structure and
tone. Keep the Contributing page in `docs/contributing.md` as a short summary
that links to the full guide.

## What you expected

A first-time contributor can go from a documentation idea to a merged pull
request using only `CONTRIBUTING.md`, including how to build locally and what
reviewers do.

## URL

- https://kubevirt.io/user-guide/contributing/
- `CONTRIBUTING.md`, `README.md`, `docs/contributing.md`

## Additional context

The cherry-pick guidance depends on the branch model written in #9018, and the
feature-state format from #9017 belongs in this guide too. Write the sections in
a consistent order to avoid conflicts between the pull requests.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
