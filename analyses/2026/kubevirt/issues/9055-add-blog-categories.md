---
title: Add blog categories and tags #9055
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

This issue affects the main website, `kubevirt/kubevirt.github.io`. Blog posts use only the `news` and `uncategorized` categories, so the blog index cannot filter posts by what readers care about, such as a release, a feature, community news, or a user story.

Add a category or tag scheme to the website blog:

1. Define a small, documented set of categories, for example `release`, `feature`, `community`, and `user-story`. Ask the maintainers to confirm the list.
2. Add the new category values to the front matter of the recent posts, and backfill enough of them that each category has several entries.
3. Update the blog index layout so readers can filter by category, or add one page per category.
4. Document the scheme in the website README so new posts use it.

## What you expected

A reader can filter the blog by release, feature, community, and user story, and new posts follow the documented scheme.

## URL

- https://kubevirt.io/blogs/
- https://github.com/kubevirt/kubevirt.github.io/tree/main/_posts

## Additional context

The assessment did not specify the final category names, so treat the list above as a proposal for the maintainers to confirm.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
