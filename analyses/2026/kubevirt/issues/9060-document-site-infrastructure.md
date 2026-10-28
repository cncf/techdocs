---
title: Document site infrastructure ownership #9060
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

No document names who administers the infrastructure behind the guide and the
website. A maintainer who needs Netlify access, a DNS change, an analytics
report, or a 404 report has nobody to ask. The site also cannot set a
`Strict-Transport-Security` header, because GitHub Pages does not allow custom
response headers.

Add a "Site infrastructure" section to the README of both `kubevirt/user-guide`
and `kubevirt/kubevirt.github.io`, or one page in `kubevirt/community` that both
READMEs link to. Ask the maintainers who the custodians are, then list for each
item the owner and how to request access:

- The Netlify site.
- GitHub Pages and the custom-domain settings.
- DNS for kubevirt.io.
- The Adobe Analytics property and Google Search Console, including how to
  request a 404 report.
- The Prow job definitions in `kubevirt/project-infra`.

Add an HSTS item: ask whether a DNS or CDN provider in front of kubevirt.io can
set `Strict-Transport-Security`. If none exists, record the limitation as a
known gap.

## What you expected

A maintainer can read one section and find the owner of every piece of site
infrastructure, how to request access, and the known HSTS gap.

## URL

- https://github.com/kubevirt/user-guide/blob/main/README.md
- https://github.com/kubevirt/kubevirt.github.io/blob/main/README.md
- https://kubevirt.io/user-guide/

## Additional context

Related: #9041 adds a "Where documentation lives" section to the same READMEs,
and #9056 and #9057 enable and gate analytics, and #9045 records the toolchain
decision.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
