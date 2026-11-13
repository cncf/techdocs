---
title: Unify search across the guide and the website #9059
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Readers cannot search the full KubeVirt documentation set from one place. The
user guide and main website use separate search indexes, so readers must know
which site contains the content they need.

Work on this in two steps:

1. Ask the website maintainers whether the API reference and quickstarts can be
   indexed by the same search as the guide, for example by moving the guide
   search to a site-wide index. Record the answer in this issue.
2. Add a link from the website search page to the guide search and a link back
   from the guide. The website's `_layouts/search.html` already indexes
   `site.posts`, `site.galleries`, and `site.pages`.

If the maintainers choose a site-wide index, open a follow-up issue for it with
the agreed scope.

## What you expected

A reader who starts on either site can find documentation pages from the other,
and the maintainers' decision about a single search index is recorded.

## URL

- https://kubevirt.io/user-guide/ (search box)
- `https://kubevirt.io/search/`
- https://github.com/kubevirt/kubevirt.github.io/blob/main/_layouts/search.html

## Additional context

Related: #9042 adds an API reference entry to the guide navigation, and #9045
asks whether the two sites should converge on one toolchain, which would
simplify search.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
