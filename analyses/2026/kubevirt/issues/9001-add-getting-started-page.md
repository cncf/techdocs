---
title: Add a Getting Started page after Architecture #9001
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

A new user who has a working cluster has no single page that leads from
installation to a running VirtualMachine. The path is spread across
Installation, `virtctl`, Basic Use, and Lifecycle, so readers must assemble it
themselves. The Quickstarts page also has no introduction that explains what it
offers.

Add a `docs/getting_started.md` page and place it immediately after Architecture
in `docs/.nav.yml`. The page walks the reader through one happy path and links
to the detailed page at each step:

1. Install KubeVirt (link to Installation).
2. Install `virtctl` (link to the `virtctl` page).
3. Create a VirtualMachine from a provided manifest or with `virtctl create vm`.
4. Start the VirtualMachine.
5. Connect with `virtctl console`.
6. Stop the VirtualMachine.

Add a "Try it in a sandbox" section that links to, or folds in, the Quickstarts
page. Give the Quickstarts page a one-paragraph introduction that states the
prerequisites (a laptop with virtualization enabled, or a browser for
Killercoda), the expected time, and what the reader has at the end. Close that
page with a link back to Getting Started.

## What you expected

A new user opens one page after Architecture and reaches a running, accessible
VirtualMachine by following numbered steps. The Quickstarts page states its
prerequisites and outcome up front.

## URL

- https://kubevirt.io/user-guide/ (new page after Architecture)
- https://kubevirt.io/user-guide/quickstarts/
- `docs/.nav.yml`, `docs/quickstarts.md`, and the new `docs/getting_started.md`

## Additional context

Reuse the manifest from #9002 in step 3 so the two pages do not drift. If you
fold Quickstarts into the new page, add a redirect in `mkdocs.yml`.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
