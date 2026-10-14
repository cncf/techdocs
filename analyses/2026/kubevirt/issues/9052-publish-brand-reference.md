---
title: Publish a brand reference #9052
labels: [backlog, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The brand assets of KubeVirt live in several places. The website defines a
`$kv-color--green-*` scale, and the user guide uses its own colors in
`docs/stylesheets/extra.css`. No single page lists the canonical logo files,
colors, and typefaces, so the two sites drift apart when the palette changes.

Publish a short brand reference in either `kubevirt/kubevirt.github.io` or
`kubevirt/community`. Ask the maintainers which repository is the better home.
The reference lists:

- The canonical logo files: the icon and the horizontal wordmark, with links to
  the files.
- The hex values of the `$kv-color--green-*` scale.
- The approved typefaces.

Then add a comment at the top of `docs/stylesheets/extra.css` in the user guide
that cites the reference URL and tells editors to update the guide when the
palette changes.

## What you expected

One page is the source of truth for logos, colors, and typefaces, and the guide
stylesheet points to it.

## URL

- `docs/stylesheets/extra.css`
- https://kubevirt.io/user-guide/ (header logo and colors)
- https://github.com/kubevirt/kubevirt.github.io (website styles and assets)

## Additional context

Related: #9048 aligns the guide's primary color with the website scale, 
and #9033 fixes the logo alt text. Complete #9048 first so the reference lists the
final values.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
