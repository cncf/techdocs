---
title: Enable analytics and fix SEO configuration #9071
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Umbrella Issue

The user guide collects no analytics, preview deploys can be indexed and pollute
analytics on the main site, `robots.txt` points at the wrong sitemap, and search
covers only part of the documentation. The sub-issues below fix the indexing and
build configuration first, then enable production-only analytics, and finally
unify search. Work the configuration fixes first so analytics data is clean from
the start.

This umbrella issue tracks recommended changes resulting from an analysis of the
KubeVirt documentation commissioned by
[CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is
tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).

## Sub-issues

- [Make guide preview builds reproducible and non-indexable #9058](9058-fix-guide-preview-builds.md)
- [Fix robots.txt and gate analytics on kubevirt.io #9057](9057-fix-robots-and-site-analytics.md)
- [Enable production-only analytics and a 404 report on the user guide #9056](9056-enable-guide-analytics.md)
- [Unify search across the guide and the website #9059](9059-unify-search.md)
