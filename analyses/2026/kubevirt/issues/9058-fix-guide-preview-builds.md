---
title: Make guide preview builds reproducible and non-indexable #9058
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Netlify build in `netlify.toml` installs unpinned packages with `pip install mkdocs mkdocs-awesome-nav mkdocs-material mkdocs-redirects`. Preview builds can differ from the Prow image build and can break when a package releases. The build command also contains a `sed` line that rewrites `site_url: https://kubevirt.io/docs`. `mkdocs.yml` already sets `site_url` to `https://kubevirt.io/user-guide`, so the line has no effect. Nothing tells search engines to skip preview deploys.

Update `netlify.toml` in `kubevirt/user-guide`:

1. Remove the obsolete `sed -i 's|site_url: https://kubevirt.io/docs|...` line.
2. Pin the versions of `mkdocs`, `mkdocs-awesome-nav`, `mkdocs-material`, and `mkdocs-redirects`, or move them to a `requirements.txt` that the build installs. Match the versions in the Prow image used by `kubevirt/project-infra`.
3. Emit `X-Robots-Tag: noindex` for non-production deploys by adding a `_headers` file or `[context.deploy-preview]` and `[context.branch-deploy]` sections.

Build a preview and confirm the header with `curl -I`.

## What you expected

Preview builds use the same package versions as the Prow image, the build command has no dead lines, and preview deploys return `X-Robots-Tag: noindex`.

## URL

- `netlify.toml`
- `mkdocs.yml`
- https://kubevirt.io/user-guide/

## Additional context

Related: #9056 also edits the `netlify.toml` build command, and #9057 applies the `noindex` change to the website repository. Ask the maintainers whether the Prow image or Netlify is the source of truth for versions.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
