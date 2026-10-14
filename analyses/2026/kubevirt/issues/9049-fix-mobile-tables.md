---
title: Fix mobile tables and replace the Architecture diagram #9049
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

Wide tables and the Architecture page diagram do not work well on phones and with screen readers.

### Tables

`docs/stylesheets/extra.css` contains a `display: table; width: max-content` override. Check on a phone whether the tables in the Arm64 feature-gate status and device status pages scroll horizontally or overflow the page. If they overflow, remove the override or scope it to specific tables with an `attr_list` class. Then add a short sentence above each wide status table that states what the table shows.

### Architecture diagram

The Architecture page shows the stack as an ASCII diagram, which screen readers read as noise and phones wrap badly. Replace it with one of these:

- An image with descriptive alt text.
- A Mermaid diagram. Enable it by adding a `mermaid` custom fence to the existing `pymdownx.superfences` entry in `mkdocs.yml`.

Add a one-paragraph prose description of the layers below the diagram so every reader gets the same information.

## What you expected

Tables scroll inside the page on a phone, each wide table has an introductory sentence, and the Architecture page presents the stack as an accessible diagram with a prose description.

## URL

- https://kubevirt.io/user-guide/cluster_admin/feature_gate_status_on_Arm64/ (`docs/cluster_admin/feature_gate_status_on_Arm64.md`)
- https://kubevirt.io/user-guide/cluster_admin/device_status_on_Arm64/ (`docs/cluster_admin/device_status_on_Arm64.md`)
- https://kubevirt.io/user-guide/architecture/architecture/ (`docs/architecture/architecture.md`)
- `docs/stylesheets/extra.css`, `mkdocs.yml`

## Additional context

Related: #9033 fixes the logo alt text, and #9048 also edits `docs/stylesheets/extra.css`.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
