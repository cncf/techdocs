---
title: Show adopter use cases and KubeVirt-specific vendor links #9054
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

This issue affects the main website, `kubevirt/kubevirt.github.io`. The adopters
logo wall shows only logos. The "Use-Case" text that each adopter supplies in
`ADOPTERS.md` never reaches the site, and vendor logos link to corporate
homepages that do not mention KubeVirt.

Make these changes:

1. Extend `adopters.py` and `_data/adopters.yml` so they carry the "Use-Case"
   text from `ADOPTERS.md`.
2. Show the text on the website as a tooltip or an expandable card on each logo,
   so the wall becomes a set of short, attributed testimonials.
3. For each `ADOPTERS.md` vendor entry whose link is a corporate homepage, ask
   the vendor for a URL that mentions KubeVirt support or their KubeVirt-based
   product, and update the link.
4. Ask the maintainers whether to drop the logo from the Vendors section when a
   vendor has no such page.

Check that the tooltip or card works with keyboard navigation and on touch
devices.

## What you expected

Each adopter logo shows a short use case, and vendor logos link to pages that
mention KubeVirt.

## URL

- https://kubevirt.io/ (End Users and Vendors logo walls)
- https://github.com/kubevirt/kubevirt.github.io/blob/main/_data/adopters.yml
- `https://github.com/kubevirt/kubevirt.github.io/blob/main/ADOPTERS.md`

## Additional context

Related: #9053 adds the adopters page that should display the same use-case
data. Land #9053 first, or share the data changes between both pull requests.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
