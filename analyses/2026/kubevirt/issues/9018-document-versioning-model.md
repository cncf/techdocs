---
title: Document the content versioning model, release-notes process, and
  localization #9018
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The repository has `release-vX.Y-stable` and `release-vX.Y-devel` branches, but
no page explains how they work. Contributors cannot tell which branch is
published or whether a change on `main` needs a cherry-pick. The release notes
are regenerated with `update_changelog.sh`, but nothing records who runs it or
when. The project also has no stated position on translations.

Add three sections to `CONTRIBUTING.md`, and summarize the first on the
Contributing page (`docs/contributing.md`):

1. **Content versioning.** State what the `release-vX.Y-stable` and
   `release-vX.Y-devel` branches are for, when they are cut relative to a
   KubeVirt release, which branch is published, and how a contributor decides
   whether a change needs a cherry-pick. The `-devel` branches exist for 1.7 and
   1.8 but not 1.9; ask the maintainers to confirm the intended workflow before
   you write it.
2. **Release notes.** Describe when `update_changelog.sh` runs, who runs it, and
   how the result is reviewed.
3. **Localization.** Record the current position: English only, translations not
   accepted, or translations welcome through a stated process. Ask the
   maintainers which applies. If they expect translations within a few releases,
   open a follow-up issue to move content to `docs/en/` and configure the
   `mkdocs-static-i18n` plugin.

## What you expected

A contributor reads `CONTRIBUTING.md` and knows which branch to target, whether
to cherry-pick, how release notes are produced, and whether translations are
accepted.

## URL

- https://kubevirt.io/user-guide/contributing/
- https://kubevirt.io/user-guide/release_notes/
- `CONTRIBUTING.md`, `docs/contributing.md`, `docs/release_notes.md`

## Additional context

The maintainers must confirm the branch workflow first. Coordinate with #9019,
which publishes versioned documentation, and #9020, which expands the
contributor guide.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
