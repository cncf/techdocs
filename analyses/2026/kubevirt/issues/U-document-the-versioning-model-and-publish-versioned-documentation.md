---
title: Document the versioning model and publish versioned documentation
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

The repository has `release-vX.Y-stable` and `release-vX.Y-devel` branches, but nothing explains what they are for, which one is published, or when a change on `main` needs a cherry-pick. Only one version of the guide is published, so users on an older KubeVirt release read documentation for features they do not have. The release-notes regeneration step and the project's localization position are also undocumented.

The sub-issues below record the versioning workflow, publish versioned documentation with a version selector, and close the remaining documentation-process gaps. Confirm the intended workflow with the maintainers first; the `-devel` branches exist for 1.7 and 1.8 but not 1.9, which suggests the process has drifted.

## Sub-issues

### Document the content versioning model

In `CONTRIBUTING.md`, and summarized on the Contributing page, state what the `release-vX.Y-stable` and `release-vX.Y-devel` branches are for, when they are cut relative to a KubeVirt release, which branch is published, and how a contributor decides whether a change on `main` needs a cherry-pick. Confirm the intended workflow with the maintainers before writing.

Done when: a contributor can decide from the text alone whether to cherry-pick.

### Publish versioned documentation with a version selector

Publish versioned documentation using either `mike` with the theme's `extra.version.provider: mike` setting, or a build per release branch published under a `/vX.Y/` path. Publish at least the supported N, N-1, and N-2 minors alongside `latest`. Start by prototyping the build locally and documenting the release-time steps; the Netlify and Prow changes can follow in a second pull request.

Done when: the published guide shows a version selector with at least three versions.

### Document the release-notes update process

Record when `update_changelog.sh` is run, by whom, and how the result is reviewed, so the Release Notes page continues to be regenerated after maintainer turnover. Add this to `CONTRIBUTING.md` next to the versioning model.

Done when: the process is written down and names a responsible role.

### Add a localization statement

Add a short "Localization" statement to `CONTRIBUTING.md` that records the project's current position: English only, translations not currently accepted, or translations welcome via a stated process. If translations are anticipated within the next few releases, move content to `docs/en/` now and configure the `mkdocs-static-i18n` plugin so the redirects and `.nav.yml` files only need to change once.

Done when: a prospective translator knows whether and how to contribute.

### Ask about a site-wide search across the user guide, API reference, and quickstarts

Ask the KubeVirt website maintainers whether the API reference and quickstarts can be indexed by the same search as the user guide, for example by moving the user guide search to a site-wide index. Record the decision in this issue and, if agreed, open a follow-up with the implementation plan.

Done when: a decision is recorded.
