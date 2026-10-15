---
title: Apply inclusive language and legacy naming updates #9068
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Umbrella Issue

The guide links to a legacy `master` branch path, uses `master` as an example
node name, and relies on minimizing words such as "simply" and "easily". The
sub-issues below fix the legacy references, reword the prose, and add an
automated check so new occurrences are caught in pull requests. Fix the legacy
references first because they are small and exact.

This umbrella issue tracks recommended changes resulting from an analysis of the
KubeVirt documentation commissioned by
[CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is
tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).

## Sub-issues

- [Fix legacy master links and the node-name example #9029](9029-fix-legacy-master-references.md)
- [Reword minimizing language and cancel terminology #9027](9027-reword-minimizing-language.md)
- [Add accessibility and language checks to CI #9028](9028-add-ci-doc-checks.md)
