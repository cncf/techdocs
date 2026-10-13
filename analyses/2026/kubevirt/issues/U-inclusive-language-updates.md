---
title: Remove legacy branch names and minimizing language from the user guide
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

The guide links to the API reference at `/master/` paths fourteen times, uses
`master` as an example node name, and relies on minimizing words such as
"simply", "just", and "easily" that tell a struggling reader the task should
have been easy. Fixing the links and example is quick. Rewording the prose is a
page-by-page pass, and an automated check keeps new occurrences out.

The style-guide rule that discourages minimizing language is tracked in the
contributor guide issue.

## Sub-issues

### Update legacy branch-name links and the Presets example

- Update the 14 links to `kubevirt.io/api-reference/master/...` to the `/main/`
  path, or to a specific version path such as `/v1.9.0/`.
- On the Presets page (`docs/user_workloads/presets.md`), replace the
  `kubevirt.io/nodeName: master` example with a neutral node name such as
  `node01`, or remove the example, since the page documents a deprecated
  feature.

Done when: `grep -r "api-reference/master" docs/` returns nothing and the
Presets page uses a neutral node name.

### Reword minimizing language on the five pages with the most occurrences

On Live Migration, Windows Virtio Drivers, Node Assignment, vsock, and Disks and
Volumes, delete "simply", "just", "of course", and "obviously" where they add
nothing, and replace "easy" or "easily" with a concrete statement of what the
step requires. For example, change "can be easily cancelled" to "can be
cancelled by deleting the migration object".

Done when: none of the five pages contains the listed words in a minimizing
sense.

### Reword minimizing language across the remaining pages

Apply the same pass to the rest of `docs/`. Use
`grep -rniw "simply\|just\|easy\|easily\|obviously\|of course" docs/` to find
occurrences and review each in context; some uses of "just" are legitimate.

Done when: the grep returns only legitimate uses.

### Prefer "cancel" over "abort" in Live Migration prose

On the Live Migration page (`docs/compute/live_migration.md`), use "cancel" in
the prose while continuing to show the `Abort Requested` and `Abort Status`
field names as they appear in `kubectl` output. Ask the KubeVirt API maintainers
whether those VirtualMachineInstanceMigration status fields are candidates for a
"cancel" alias in a future API version, and record the answer in the issue.

Done when: the prose says "cancel" and field names are shown in code formatting.

### Add an automated check for minimizing language

Add a check to the Makefile and the Prow pre-submit, alongside
`make check_spelling`, that flags minimizing and non-recommended language in
pull requests. Use Vale with the `write-good` style or a grep-based check.

Done when: a pull request that adds "simply" fails the check.

### Use tagged or permalink URLs for upstream project links

Where the guide links to libvirt, cri-tools, vhost-md, or kubevirt-ansible files
on a `master` branch, change the links to a tag or commit permalink so the
branch name is not repeated in the guide and the link survives a default-branch
rename.

Done when: no outbound link in `docs/` includes `/master/`.
