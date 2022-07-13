# Analytics

This page describes how to setup or upgrade Google Analytics (GA) for your CNCF
project's website.

> **Deprecation notice**: Google's [Universal Analytics will be going away][ua]
> in 2023.

When adding analytics to a new CNCF project website, use [Google
Analytics 4][ga4] (GA4).

## Adding Google Analytics

For instructions on how to setup [Google Analytics 4 (GA4)][GA4] for your
[Docsy][]-based website, see [Adding Analytics][].

## Migrating to Google Analytics 4

Suggested process for upgrading a CNCF project's website from [Universal Analytics][ua] to [GA4][]:

1.  Create a GA4 site tag and [connect][] it to the existing UA id.
    From the UA console:
    - Select **Admin** (bottom of left-nav)
    - Select **Property Settings**
      - Change the property name (which usually matches the project name), by adding the following suffix: `- UA`
    - Go back to the **Admin** level settings
    - Select **GA4 Setup Assistant**
    - Select **I want to create a new Google Analytics 4 property > Get started**
    - Select **Go to your GA4 property**
      - Select **Admin** > **Data stream**
      - Select the (only) data stream
      - 📋 Copy the **MEASUREMENT ID**, we'll need it later, and past it into the appropriate row of the [status table]
    - **Check**: after a while, from GA4 console home, you should see **active users** in realtime -- roughly the same number and distribution of active users reported by the UA console. I've seen the GA4 console show realtime data after a few minutes, but it has taken much longer in some cases.
2.  Configure the GA4 ID as the main GA ID
    - Ensure that the website supports the GA configuration of more than one id.
      If it doesn't, consider using a project-specific layout like the following:
      [opentelemetry.io/layouts/partials/google-analytics.html]
      (which was setup via https://github.com/open-telemetry/opentelemetry.io/pull/1544)
    - Set the GA4 ID as the main GA ID
3.  Eventually migrate to using the Docsy or Hugo support for GA IDs (@chalin plans to upstream changes in 22Q3)

[adding analytics]: https://www.docsy.dev/docs/adding-content/feedback/#adding-analytics
[connect]: https://support.google.com/analytics/answer/9973999
[docsy]: https://www.docsy.dev
[ga4]: https://support.google.com/analytics/answer/10089681
[opentelemetry.io/layouts/partials/google-analytics.html]: https://github.com/open-telemetry/opentelemetry.io/blob/3d8a59ea508b46497500297f334a079a4f91e293/layouts/partials/google-analytics.html
[project migration status]: https://docs.google.com/spreadsheets/d/1Mx4LhdI2Un-rvGMI73SlHxQH9D2HABAJclMB3dd6lnA
[ua]: https://support.google.com/analytics/answer/11583528
