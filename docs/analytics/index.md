---
title: Analytics
---

# Analytics

## Google Analytics

- [CNCF sandbox][] projects currently onboarding, should open a [Service Desk][]
  ticket to either:
  - Request a transfer of their existing GA properties to the **CNCF Projects**
    Google Analytics account. The first step is to make projects@cncf.io and
    Administrator of their existing GA account.
  - Request the creation of a new analytics property.
- For instructions on how to setup [Google Analytics 4 (GA4)][ga4] for your
  [Docsy][]-based website, see [Adding Analytics][].

> **Archived instructions**: for details on how to migrate from Universal
> Analytics to GA4, see
> [Migrating Universal to Google Analytics 4](ua-to-ga4.md).

## Sharing analytics with your community

Analytics are most useful when the community can see them. Two low-effort
practices work well for project sites:

- **Publish an analytics page.** Summarize the numbers your community cares
  about — most-viewed pages, top search terms, and the locales readers use — and
  keep the page current. The Kubernetes project's [viewing analytics][] page is
  an example to copy.
- **Report the highlights at community meetings.** A short, recurring update
  ("these pages got most of this release's traffic") turns the data into
  decisions about what to document next, including release notes and
  localization work.

When the site is hosted on Netlify, [Netlify Analytics][] is the lowest-setup
source for those numbers: it is server-side, needs no cookie banner, and a site
owner can enable it per site. A GA4 property, as described above, gives you
page-level detail and can be exported to a dashboard if the project wants a
public report.

[netlify analytics]: https://docs.netlify.com/monitor-sites/analytics/
[viewing analytics]: https://kubernetes.io/docs/contribute/analytics/
[adding analytics]:
  https://www.docsy.dev/docs/content/feedback/#adding-analytics
[CNCF sandbox]: https://github.com/cncf/sandbox
[docsy]: https://www.docsy.dev
[ga4]: https://support.google.com/analytics/answer/10089681
[service desk]: https://github.com/cncf/servicedesk
