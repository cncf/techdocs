---
title: Add an API reference entry to the guide navigation #9042
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The KubeVirt API reference is published from a separate repository
(`kubevirt/kubevirt.github.io`, at `kubevirt.github.io/api-reference`). The user
guide navigation has no entry for it, so readers who need field-level details of
a VirtualMachine or other API object must already know it exists.

Make the API reference visible from the guide:

- Add an "API Reference" entry to `docs/.nav.yml` that links directly to
  `https://kubevirt.github.io/api-reference/`, or add a short landing page, for
  example `docs/api_reference.md`, and list it in `docs/.nav.yml`.
- If you add a landing page, explain that the reference is generated from the
  API types and published separately, link to it, and explain which API version
  it covers. Ask the maintainers whether the reference tracks `main` or the
  latest release, and state the answer on the page.
- Check that the awesome-nav plugin renders the external link and that it opens
  correctly.

## What you expected

A reader browsing the guide navigation sees an API reference entry and reaches
the reference in one click, without knowing which repository publishes it.

## URL

- https://kubevirt.io/user-guide/
- `docs/.nav.yml`
- https://kubevirt.github.io/api-reference/

## Additional context

Related: #9041 documents which repository owns which content, and #9059 covers
search across the guide and the website.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
