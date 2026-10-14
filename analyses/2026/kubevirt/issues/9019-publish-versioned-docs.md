---
title: Publish versioned documentation with a version selector #9019
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide publishes a single version of the documentation. A reader running an older KubeVirt release cannot find content for that release, and features such as v1.9 Beta-by-default behavior apply only to newer versions. Release branches already exist in the repository, but the site does not expose them.

Publish versioned documentation with a version selector. Choose one approach:

- Use `mike` with `extra.version.provider: mike` in `mkdocs.yml`, which adds the theme's version selector.
- Build each release branch and publish it under a `/vX.Y/` path.

The result:

- Publishes at least the supported N, N-1, and N-2 minor versions alongside `latest`.
- Shows a version selector in the header on every page.
- Redirects the unversioned URL to `latest`, so existing links keep working.

Write a short design note in the pull request that compares the two approaches and explains how the publishing job in the project's CI changes. Ask the maintainers who owns the publishing pipeline and which versions are supported.

## What you expected

A reader selects their KubeVirt version from the header and sees the documentation for that release. Existing links to the unversioned site still resolve.

## URL

- https://kubevirt.io/user-guide/
- `mkdocs.yml` and the publishing configuration for the guide

## Additional context

Depends on #9018, which documents the branch model that the versioned builds rely on. Until this issue is complete, the feature-state admonitions from #9017 stand in for versioning. The user guide is published beneath kubevirt.io, so confirm with the website maintainers that the `/vX.Y/` paths fit the website's routing (see #9045).

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
