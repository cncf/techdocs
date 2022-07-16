<!-- cSpell:ignore chalin gtag opentelemetry -->

# Analytics

This page describes how to setup or upgrade Google Analytics (GA) for your CNCF
project's website.

> **Deprecation notice**: Google's [Universal Analytics will be going away][ua]
> in 2023.

When adding analytics to a new CNCF project website, use [Google Analytics
4][ga4] (GA4).

## Adding Google Analytics

For instructions on how to setup [Google Analytics 4 (GA4)][ga4] for your
[Docsy][]-based website, see [Adding Analytics][].

## Migrating to Google Analytics 4

There are many ways to upgrade your project to [GA4][]. We describe one such
process below. Adapt it to your needs. Useful resources to consider include:

- **Developer resources** for [migrating to Google Analytics 4][ga4-dev],
  especially relevant is the following page:
  - [Add Google Analytics 4 to an existing Universal Analytics
    implementation][ga4+ua-dev]
- **Help center** resource: [Migrate from Universal Analytics to Google
  Analytics 4][migration-help]

### Phase 1 - create and activate a GA4 site tag

1.  **Create an issue** over the project's website with the title "Setup Google
    Analytics 4" and link to [Issue #108][]. For example, see the [etcd.io issue
    #595][].

2.  Determine which **analytics library** your project's website is using, and
    upgrade to [gtag.js][], if possible.

    - Visit your project's website.
    - View the page source of any website page.
    - Search for "`<script async src="https://www.google`".
    - If the script's `src` attribute ends with [analytics.js][], then your site
      is using the older (pre 2017) analytics library. Upgrade to [gtag.js][] if
      you can, since this will reduce the number of manual steps required in
      this phase.

3.  **Open the analytics console** of your project's UA property by visiting
    [analytics.google.com](https://analytics.google.com).

4.  **Create a GA4 site tag** and [connect][] it to the existing UA property.

    - Select **Admin** (bottom of left-nav)
    - Select **GA4 Setup Assistant**
    - Select **I want to create a new Google Analytics 4 property > Get
      started**
    - Select **Go to your GA4 property**
    - Select **Admin** > **Data stream**
    - Select the (only) data stream
    - 📋 Copy the **MEASUREMENT ID**, we'll need it later, and past it into the
      appropriate row of the [status table][]

    > **Note**: The setup assistant will automatically [connect][] your UA and
    > GA4 tags only if your site is using [gtag.js][]. Otherwise, you'll have to
    > manually connect them, as described below.

5.  Rename your UA property by adding the `- UA` suffix:

    - Select **Admin** (bottom of left-nav)
    - Select **Property Settings**
    - Change the property name (which usually matches the project name), by
      adding the following suffix, if it doesn't have one already: `- UA`.

6.  If your site is using [analytics.js][] (as determined in step 2), then
    you'll need to **manually connect your UA ID to your GA4 tag**. If your site
    is using [gtag.js][], then skip this step.

    - Open your project's GA4 analytics console.
    - Select **Admin** (bottom of left-nav)
    - Select **Data streams**
    - Open the data stream (there will be only one)
    - Under **Additional Settings**, open **Manage connected site tags**
    - Add your site's UA tag to the field **Enter ID of tag to connect**
    - Click **Connect**

8.  Ensure that the new GA4 site tag is receiving data.

    From GA4 console home, you should immediately see **active users** in
    realtime (provided that there are active users). You should see roughly the
    same number and distribution of active users reported by the UA console.

### Phase 2 - configure the GA4 ID as the main GA ID

- Ensure that the website supports the GA configuration of more than one id. If
  it doesn't, consider using a project-specific layout like the following:
  [opentelemetry.io/layouts/partials/google-analytics.html] (which was setup via
  https://github.com/open-telemetry/opentelemetry.io/pull/1544)
- Set the GA4 ID as the main GA ID

### Phase 3 - switch to native Docsy or Hugo support for GA

Eventually migrate to using the Docsy or Hugo support for GA IDs (@chalin plans
to upstream changes in 22Q3).

[adding analytics]:
  https://www.docsy.dev/docs/adding-content/feedback/#adding-analytics
[analytics.js]: https://support.google.com/analytics/answer/10268458
[connect]: https://support.google.com/analytics/answer/9973999
[etcd.io issue #595]: https://github.com/etcd-io/website/issues/595
[docsy]: https://www.docsy.dev
[ga4-dev]: https://developers.google.com/analytics/devguides/migration
[ga4]: https://support.google.com/analytics/answer/10089681
[ga4+ua-dev]:
  https://developers.google.com/analytics/devguides/migration/measurement/add-ga4
[gtag.js]: https://support.google.com/analytics/answer/10220869
[issue #108]: https://github.com/cncf/techdocs/issues/108
[migration-help]: https://support.google.com/analytics/answer/10759417
[opentelemetry.io/layouts/partials/google-analytics.html]:
  https://github.com/open-telemetry/opentelemetry.io/blob/3d8a59ea508b46497500297f334a079a4f91e293/layouts/partials/google-analytics.html
[status table]:
  https://docs.google.com/spreadsheets/d/1Mx4LhdI2Un-rvGMI73SlHxQH9D2HABAJclMB3dd6lnA
[ua]: https://support.google.com/analytics/answer/11583528
