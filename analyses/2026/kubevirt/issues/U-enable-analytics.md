---
title: Enable analytics on the user guide and use it to fix broken links
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

The user guide collects no analytics, so maintainers cannot see which pages are
read, what users search for, or which URLs return 404. The main site has an
Adobe Analytics tag, but it also fires on preview deploys, which pollutes the
data. The sub-issues below add analytics to the guide, restrict it to
production, and set up the one report that pays for itself: a list of 404 hits
to feed the `redirects` map in `mkdocs.yml`.

## Sub-issues

### Enable analytics on the user guide

Add an `extra.analytics` block to `mkdocs.yml`. The Material theme supports
Google Analytics 4 natively; alternatively, add a custom `overrides/main.html`
partial that loads the same Adobe Analytics tag the main site uses so both
properties report to one place. Confirm with the website maintainers which
property to use.

Done when: page views from `kubevirt.io/user-guide` appear in the chosen
analytics property.

### Load analytics only in production

Inject the analytics snippet only when the Netlify `CONTEXT` variable equals
`production`, for example by templating it in the `netlify.toml` build command
or by reading an environment variable in the override partial.

Done when: a deploy preview loads no analytics script.

### Set up a recurring 404 report and feed it into the redirects map

Once analytics are live, create a saved report filtered on the not-found page
title, review it on a regular cadence, and add missing entries to the
`redirects` plugin map in `mkdocs.yml`. Document the cadence and the report
location in the README's site infrastructure section.

Done when: the report exists and the first batch of redirects from it is merged.
