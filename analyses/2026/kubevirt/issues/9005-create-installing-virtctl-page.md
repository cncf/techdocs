---
title: Create an Installing virtctl page #9005
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The `virtctl` page, titled "Download and Install the virtctl Command Line Interface", does not cover all published client binaries. New users need `virtctl` for nearly every first task, and the page sits in the middle of the User Workloads list, far from Installation.

Edit `docs/user_workloads/virtctl_client_tool.md`:

- Rename the title to "Installing virtctl".
- Use the theme's content tabs for Linux, macOS, and Windows, each with amd64 and arm64 downloads.
- Add `pymdownx.tabbed` with `alternate_style: true` to `markdown_extensions` in `mkdocs.yml` if it is not already enabled.
- Include the `chmod +x` and `PATH` steps for each platform.
- Move the page next to Installation, for example into `docs/cluster_admin/`, or keep it in place and link to it from the Installation page's "Next steps" section.
- Add a redirect in `mkdocs.yml` if the file moves, and update `.nav.yml`.

## What you expected

A reader on any supported operating system and CPU architecture finds the right binary, makes it executable, and puts it on their `PATH` from one page. The page is easy to find from Installation.

## URL

- https://kubevirt.io/user-guide/user_workloads/virtctl_client_tool/
- `docs/user_workloads/virtctl_client_tool.md`, `docs/user_workloads/.nav.yml`

## Additional context

The Installation restructure in #9004 links to this page from its "Next steps" section. Ask the maintainers which binaries the release process publishes so the tab list is accurate.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
