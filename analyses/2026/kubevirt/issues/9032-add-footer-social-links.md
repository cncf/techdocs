---
title: Add repository and social links to the footer #9032
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The guide's header and footer give no link to the repository, Slack, the mailing
list, or the main kubevirt.io site. These links appear only in the "Getting
help" list on the Welcome page. `mkdocs.yml` sets neither `repo_url` nor an
`extra.social` block.

Edit `mkdocs.yml`:

- Set `repo_url` to `https://github.com/kubevirt/user-guide`. Also set
  `repo_name` if the default label is unclear. Check that the Material theme
  shows the repository link in the header.
- Add an `extra.social` block with icons and links for GitHub, Slack, the
  mailing list, and `kubevirt.io`.

Run `mkdocs serve` locally and confirm the links render on every page, in light
and dark mode.

## What you expected

Every page shows the repository link in the header and the GitHub, Slack,
mailing list, and kubevirt.io links in the footer.

## URL

- https://kubevirt.io/user-guide/ (any page footer)
- `mkdocs.yml` in https://github.com/kubevirt/user-guide

## Additional context

Related: #9046 (other user guide footer compliance fixes in `mkdocs.yml`, such
as the `copyright` line), #9030 (Community page), and #9047 (website footer).
Combine the `mkdocs.yml` edits with #9046 if the same contributor takes both.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
