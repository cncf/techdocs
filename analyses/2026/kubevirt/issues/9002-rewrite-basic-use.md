---
title: Rewrite Basic Use as "Your first VirtualMachine" #9002
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Basic Use page presents `VirtualMachineInstance` commands
(`kubectl create -f vmi.yaml`) without providing the `vmi.yaml` file. It treats
the VirtualMachineInstance as the primary object, while most users manage a
VirtualMachine, which creates and owns the running instance. The Lifecycle page
repeats the undefined `vmi.yaml` reference.

Rewrite `docs/user_workloads/basic_use.md` as a short "Your first
VirtualMachine" page:

- Introduce VirtualMachine as the primary object and VirtualMachineInstance as
  the running instance it manages.
- Include a complete minimal `vm.yaml` that uses a public containerDisk image.
- Show `kubectl apply -f vm.yaml`, `virtctl start`, `virtctl console`, and
  `virtctl stop`.
- End with explicit links to the next pages, for example Creating
  VirtualMachines, Accessing Virtual Machines, and Lifecycle.

Update `docs/user_workloads/lifecycle.md` so its examples use the same `vm.yaml`
manifest instead of the undefined `vmi.yaml`. Rename the page title and the
`.nav.yml` entry in `docs/user_workloads/.nav.yml` if the file name changes, and
add a redirect in `mkdocs.yml`.

## What you expected

A new user copies one manifest, runs four commands, and sees a VirtualMachine
start, accept a console connection, and stop. The Lifecycle page continues from
that same manifest.

## URL

- https://kubevirt.io/user-guide/user_workloads/basic_use/
- https://kubevirt.io/user-guide/user_workloads/lifecycle/
- `docs/user_workloads/basic_use.md`, `docs/user_workloads/lifecycle.md`

## Additional context

The Getting Started page in #9001 reuses this manifest, so write the two pages
together or agree on the manifest first. Convert the commands to fenced blocks
as you write them (see #9007).

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
