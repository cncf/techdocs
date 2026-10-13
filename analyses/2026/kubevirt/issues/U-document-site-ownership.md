---
title:
  Document site infrastructure ownership and the boundary between documentation
  sources
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

Nobody can tell from the repositories who administers the Netlify site, DNS,
GitHub Pages, analytics, or the Prow jobs, or how to become a user guide
approver. User-facing content is also spread across three places: this guide,
`kubevirt/kubevirt/docs`, and the CDI `doc/` directory, with no statement of
which content belongs where.

The sub-issues below write down infrastructure ownership and the maintainer
ladder so the sites survive maintainer turnover, and define and enforce a
content boundary so users find documentation in one place.

## Sub-issues

### Add a Site infrastructure section to the README

Add a "Site infrastructure" section to the README of `kubevirt/user-guide` (and
propose the same for `kubevirt/kubevirt.github.io`, or a page in
`kubevirt/community`) that lists who administers the Netlify site, GitHub Pages
and custom-domain settings, DNS for `kubevirt.io`, the analytics and Search
Console accounts, and the Prow job definitions in `kubevirt/project-infra`, and
how a maintainer requests access or a 404 report.

Done when: every piece of infrastructure names an owner and an access path.

### Publish a maintainer ladder and keep OWNERS_ALIASES current

In the README, describe how a contributor becomes a reviewer and then an
approver (for example, a number of merged docs PRs and a nomination), mirroring
the process in `kubevirt/community` for code SIGs. Review `OWNERS_ALIASES` and
add dated emeritus entries for inactive approvers, as the website repository
already does.

Done when: the ladder is published and `OWNERS_ALIASES` lists only active
approvers plus dated emeritus entries.

### Add a Strict-Transport-Security header or record the gap

GitHub Pages does not let you set response headers directly. Either enable HSTS
through the DNS or CDN provider in front of `kubevirt.io`, or record the
limitation in the Site infrastructure section so it is a known gap. For the user
guide on Netlify, add the header in `netlify.toml`.

Done when: `curl -I https://kubevirt.io/user-guide/` returns
`Strict-Transport-Security`, and the main site's status is recorded.

### Document where documentation lives

Add a short "Where documentation lives" section to the README of
`kubevirt/user-guide`, and propose the same text for
`kubevirt/kubevirt.github.io` and `kubevirt/kubevirt`, stating that user and
operator documentation belongs in the user guide, marketing, blog, and community
content belongs on the website, and `kubevirt/kubevirt/docs` is for design and
developer notes only. Link to it from `docs/contributing.md`.

Done when: all three repositories state the same boundary.

### Record the repository and toolchain decisions

Decide whether the website and user guide should share a repository, and record
the decision in both READMEs with the reason (for example, different generators,
maintainers, and audiences). Open a tracking issue to evaluate converging the
two toolchains on Material for MkDocs or another generator with a supported
theme, so a single skill set covers both sites, even if the migration is
deferred.

Done when: both decisions are written down with an owner and a revisit date.

### Move user-facing content out of kubevirt/kubevirt/docs

Audit `kubevirt/kubevirt/docs` for user-facing content, starting with the files
the user guide already links to (`getting-started.md`, `architecture.md`,
`cloud-init.md`). Move the user-facing portions into the guide and replace the
originals with a one-line pointer so search results and old links still resolve.

Done when: the guide no longer links to `kubevirt/kubevirt/docs` for user-facing
content.

### Triage the CDI documentation the guide links to

Six storage pages link to the CDI `doc/` directory. Either move those pages into
the guide's `storage/` section, or add a "CDI reference documentation" page in
the guide that explains why the rest remains in the CDI repository and links to
it.

Done when: every CDI link from the guide goes through a page that explains the
boundary.
