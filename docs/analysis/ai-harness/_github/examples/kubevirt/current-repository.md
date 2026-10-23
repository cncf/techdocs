# KubeVirt example: Current Repository section

This is the "Current Repository" section of `copilot-instructions.md` as filled
in for the KubeVirt user guide analysis
([cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343)). Use it as a
model when completing the fill-in template in your own copy of
`.github/copilot-instructions.md`. The accompanying `kubevirt-doc-issue.md` is
the issue template the KubeVirt run used in place of the generic
`templates/doc-issue.md`.

## Current Repository

- Project name: KubeVirt
- Documentation label: the KubeVirt user guide
- Ecosystem: Kubernetes
- Main repository: [KubeVirt](https://github.com/kubevirt/kubevirt)
- Secondary repositories:
  [KubeVirt.github.io](https://github.com/kubevirt/kubevirt.github.io) (website
  and lab docs)
- Published documentation URL: https://kubevirt.io/user-guide/
- Project website URL: https://kubevirt.io/
- Issues repository URL: https://github.com/kubevirt/user-guide/issues
- Issue template file: kubevirt-doc-issue.md
- CNCF project page URL: https://www.cncf.io/projects/kubevirt/
- Assistance-request issue: cncf/techdocs#343

Copilot shall output Markdown files from the AI-assisted analysis to the
`.github/output/analysis` directory and issue files to the
`.github/output/issues` directory in the current repository.

### Priority label mapping

| Harness label | Repository label           |
| ------------- | -------------------------- |
| `urgent`      | `priority/critical-urgent` |
| `high`        | `priority/high`            |
| `backlog`     | `priority/backlog`         |
| `help wanted` | `help wanted`              |

### What This Repo Is

This is the [KubeVirt user guide](https://kubevirt.io/user-guide), a
documentation-only site built with [MkDocs](https://www.mkdocs.org/) using the
`mkdocs-material` theme and `mkdocs-awesome-nav` plugin. All content lives in
`./docs` as Markdown files. There is no application code.

### Content Architecture

```text
docs/
  .nav.yml              # Top-level navigation order
  index.md
  architecture.md
  cluster_admin/        # Installation, feature gates, RBAC, node ops
  user_workloads/       # VM lifecycle, instancetypes, virtctl, startup scripts
  compute/              # CPU/memory, live migration, hugepages, NUMA
  network/              # Interfaces, hotplug, binding plugins, Istio
  storage/              # CDI, volumes, snapshots, clone, export
  debug_virt_stack/     # Debugging guides
```

### Key Conventions

#### Navigation order via `.nav.yml`

Every subdirectory under `docs/` has a `.nav.yml` that explicitly controls page
ordering. Alphabetical order is intentionally not used. When adding a new page,
add it to the relevant `.nav.yml`.

#### Redirects in `mkdocs.yml`

Old page paths (e.g. `operations/`, `virtual_machines/`) are redirected to their
new locations via the `redirects` plugin in `mkdocs.yml`. When moving or
renaming a page, add an entry there.

#### No commits

This work is solely for documentation analysis. There are no commits to the
application code in this repository.

#### Spelling dictionary

The yaspeller dictionary is sourced from
`kubevirt/project-infra/images/yaspeller/.yaspeller.json`. If a technical term
causes false positives, it needs to be added there (upstream), not locally —
unless a local `yaspeller.json` override is present.

#### MkDocs extensions in use

Pages can use: `admonition`, `footnotes`, `toc` with `permalink`,
`pymdownx.highlight`, `pymdownx.superfences`, `attr_list`, and `pymdownx.emoji`.
These are already configured in `mkdocs.yml` — no additional setup needed.
