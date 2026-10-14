---
title: Decide whether to converge the website and user guide #9045
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide is built with MkDocs and Material for MkDocs, and the main website (`kubevirt/kubevirt.github.io`) is built with Jekyll. The two sites have different generators, themes, and maintenance skills. This split makes search, navigation, branding, and analytics harder to keep consistent, and no document records whether it is intentional.

Run a short evaluation and record the decision in a written decision record, for example a comment on this issue or a page in `kubevirt/community`:

- Compare the cost of three options: keep both toolchains, move the website pages into the user guide repository, or bring the guide into the website repository as a Git submodule.
- Evaluate moving the website to Material for MkDocs or another generator with a supported theme, such as Hugo or Docusaurus, so one skill set covers both sites.
- List the maintainers who must agree.

If the sites stay separate, add a short note to the README of both repositories that states the reasons (different generators, maintainers, and audiences). If the project plans to converge, keep this issue open as the tracking issue even when the migration is deferred.

## What you expected

The decision about the two toolchains is recorded, with reasons, and both READMEs reflect it.

## URL

- https://github.com/kubevirt/user-guide/blob/main/README.md
- https://github.com/kubevirt/kubevirt.github.io/blob/main/README.md
- https://kubevirt.io/user-guide/

## Additional context

Related: #9060 documents site infrastructure ownership in the same READMEs. Related: #9059 (unified search) and #9052 (brand reference) become simpler if the sites converge.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
