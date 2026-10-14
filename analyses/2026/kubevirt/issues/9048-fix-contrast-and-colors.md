---
title: Fix header and link contrast and align brand colors #9048
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The guide uses the teal `#0db2b6` as `--md-primary-fg-color` in `docs/stylesheets/extra.css`. White header and tab text on this teal falls below the 4.5:1 contrast ratio that WCAG AA requires. Links also rely on a `filter: brightness(80%)` rule rather than explicit colors. In addition, `#0db2b6` does not appear in the `$kv-color--green-*` scale that the main website documents, so the two sites use different greens.

Update `docs/stylesheets/extra.css`:

- Darken `--md-primary-fg-color` to a teal with at least 4.5:1 contrast against white (for example `#007a7e` or darker), or keep the brand teal for decorative elements and set the header and tab text to a dark foreground.
- Replace the `filter: brightness(80%)` rule with explicit `--md-typeset-a-color` values for the light and dark schemes, each with at least 4.5:1 contrast.
- Choose the final color from the documented website scale (for example `$kv-color--green-300`, `#00aab2`), or ask the website maintainers whether to add `#0db2b6` to the scale.
- Check both schemes with a contrast checker and record the ratios in the pull request.

## What you expected

Header text, tab text, and links meet 4.5:1 contrast in both color schemes, and the guide draws its primary color from the same scale as the website.

## URL

- https://kubevirt.io/user-guide/ (header, tabs, and body links)
- `docs/stylesheets/extra.css`

## Additional context

Related: #9052 publishes the brand reference that lists the canonical color scale.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
