---
title: Enable production-only analytics and a 404 report on the user guide #9056
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The user guide has no analytics, so the project cannot see which pages readers use, which search terms they enter, or which URLs return a 404. Missing redirects therefore go unnoticed. The main website already loads an Adobe Analytics tag.

Enable analytics on the guide in `kubevirt/user-guide`:

1. Add the analytics snippet. Either add an `extra.analytics` block to `mkdocs.yml` (the Material theme supports Google Analytics 4), or add an `overrides/main.html` partial that loads the same Adobe Analytics tag as the website. Ask the maintainers which service to use.
2. Load the snippet only in production. Template it from the Netlify `CONTEXT` variable in the `netlify.toml` build command, so it is injected only when `CONTEXT` equals `production`.
3. Create a recurring 404 report, for example a saved report filtered on the not-found page title.
4. Use the report to add missing entries to the `redirects` map in `mkdocs.yml`, and describe the process in `README.md`.

## What you expected

Production page views, search terms, and 404 hits are captured, previews send no data, and the 404 report drives redirect fixes.

## URL

- https://kubevirt.io/user-guide/
- `mkdocs.yml`
- `netlify.toml`

## Additional context

Related: #9057 gates analytics on the website, #9058 fixes the guide's preview builds in `netlify.toml`, and #9060 records who owns the analytics account. Edit `netlify.toml` in coordination with #9058.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
