---
title: Fix navigation gaps and reorganize the user guide information architecture
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

Several pages are unreachable or misplaced in the navigation, and page titles in the Storage section describe APIs rather than what a reader accomplishes. The Plugins page is reachable only from the deprecated Hook Sidecar page, a byte-identical duplicate of the Windows virtio drivers page is unlisted, Release Notes sits in the middle of the main navigation, and the API reference has no home in the guide.

The sub-issues below fix the gaps first and then make the structure read as a progression from concepts through administration, workloads, and infrastructure layers. Every subdirectory under `docs/` has a `.nav.yml` that controls page order; when a file name changes, add a redirect in `mkdocs.yml`.

## Sub-issues

### Add the Plugins page to the navigation and delete the duplicate Windows virtio drivers page

Add `plugins.md` to `docs/cluster_admin/.nav.yml` so the Plugins page is discoverable from somewhere other than the deprecated Hook Sidecar page.

Delete `docs/compute/windows_virtio_drivers.md`, which is a byte-identical unlisted duplicate of `docs/user_workloads/windows_virtio_drivers.md`. Add a redirect in `mkdocs.yml` if the old URL was ever published.

Done when: Plugins appears in the Cluster Administration navigation and only one Windows virtio drivers page exists.

### Move Release Notes out of the middle of the main navigation

In `docs/.nav.yml`, move Release Notes to the end of the list or into a top-bar link, so the section list reads Welcome, Architecture, Getting Started, Cluster Administration, User Workloads, Compute, Network, Storage, then Contributing, Release Notes, and Virtualization Debugging.

Done when: the main navigation reads as a progression without the Release Notes interruption.

### Group legacy workload mechanisms under a Legacy heading

In `docs/user_workloads/.nav.yml`, reorganize the Workloads sub-group so current mechanisms (instance types, VirtualMachine Templates, pools) come first and legacy or deprecated pages (presets, OpenShift Templates, Hook Sidecar) sit under a clearly labeled "Legacy" heading or at the end.

Done when: a reader sees the recommended mechanism before any deprecated one.

### Add a landing page to each of the Compute, Network, and Storage sections

Add a brief `index.md` landing page to `docs/compute/`, `docs/network/`, and `docs/storage/` that explains what the section covers and groups its pages by task. For example, Storage: provisioning disks, importing images, snapshots and backup, moving data between clusters. Add each landing page to its `.nav.yml`.

Done when: each section opens on a page that orients the reader.

### Rename API-centric page titles to user goals

Rename page titles so they state what the reader accomplishes, for example:

- "Clone API" to "Cloning VirtualMachines"
- "Export API" to "Exporting VirtualMachines and volumes"
- "Snapshot Restore API" to "Snapshotting and restoring VirtualMachines"
- "Migration Controller" to a title that states what the reader accomplishes with it

Change titles in the page front matter and `.nav.yml` first. If you also rename files, add redirects in `mkdocs.yml`.

Done when: no Storage page title ends in "API".

### Give the API reference a visible home in the user guide

Add a navigation entry or a short landing page that links to the API reference at `https://kubevirt.io/api-reference/`, so readers do not need to know it is published from a separate repository.

Done when: a reader can reach the API reference from the guide's navigation.

### Remove or archive legacy installation content

Verify with the maintainers whether the OKD Service Catalog APB and k3OS installation paths on `docs/cluster_admin/installation.md` are still supported. Remove the paths that are not, and update the OpenShift 4.10 documentation links to a current version or a version-independent URL.

Done when: the Installation page references only supported platforms and current links.
