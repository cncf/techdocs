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

### Stage 0 - preparation

In preparation for the migration, follow these steps:

1.  **Create an issue** over your project's website with the title "Migrate to
    Google Analytics 4 (GA4)", and link to [Issue #108][]. For example, see the issues
    opened for the pilot projects listed in #108.

2.  Determine which **analytics library** your project's website is using.

    - Visit your project's website.
    - View the page source of any website page.
    - Search for "`https://www.google`". Look at all instances.
    - If one of the matching URLs ends with:
      - [analytics.js][], then your site is using the older (pre 2017) analytics
        library.
      - [gtag.js][], then your site is using the library that supports both UA
        and GA4 tags.
    - Take note of which library or libraries (some sites use both) your site is
      using.

### Stage 1 - create a GA4 site tag

Objectives:

- The main objective of this stage is to **create a GA4 site tag** using the GA4
  setup assistant from your existing UA console.
- A secondary goal is ensure that the new GA4 site tag can process data along
  side the UA site tag. This won't be possible unless your project's website
  already uses or can be upgraded to use the `gtag.js` analytics library.
  Details follow.

Follow these steps:

1.  (Optional) **Switch to using the [gtag.js][]** analytics library if your
    project's website isn't already -- as determined in the previous stage.
    Doing so now will simplify the migration process by requiring fewer manual
    steps.

    How you switch will depend on the static-site generation tooling you use.
    For details, see [Stage 2][]. If you know how to switch and it is easy to do
    so, then switch your project to [gtag.js][], otherwise defer the switch to [stage
    2][].

2.  **Open the analytics console** of your project's UA property by visiting
    [analytics.google.com](https://analytics.google.com).

3.  **Create a GA4 site tag**:

    - Select **Admin** (bottom of left-nav)
    - Select **GA4 Setup Assistant**
    - Select **Get started** under **I want to create a new Google Analytics 4
      property**.
    - In the dialog that opens up, check the **Enable data collection using your
      existing global site tag(s)** checkbox if it is enabled; otherwise carry
      on. The checkbox will be enabled (selectable) only if your site uses
      [gtag.js][].
    - Select **Create property**. This will create your projects GA4 site tag.

4.  **Open the analytics console onto your GA4 site tag** and copy the
    measurement ID. Continuing from the previous step:

    - Select **Go to your GA4 property** from the **GA4 Setup Assistant** view
      of your UA property.<br> This will open an analytics console onto your GA4
      site tag. Perform the remaining steps from your GA4 console.
    - Select **Admin** > **Data stream**
    - Select the (only) data stream to view its details.
    - 📋 **Copy the **measurement ID\*\*\*\*, you'll need it later, and paste it
      into the appropriate row of the [status table][].

5.  Rename your UA property by adding the `- UA` suffix. From the UA console:

    - Select **Admin** (bottom of left-nav)
    - Select **Property Settings**
    - Change the property name (which usually matches the project name), by
      adding the following suffix, if it doesn't have one already: `- UA`.

6.  **Ensure that your GA4 site tag is connected _from_ your UA config.** You
    can skip this step if you were previously able (in step 3) to select the
    **Enable data collection using your existing global site tag(s)** option,
    since the GA4 setup assistant will then have automatically [connected][]
    your GA4 site tag from your UA config. If you aren't sure, then you can
    check as follows:

    - **Open** the analytics console for the **UA site tag**
    - Under **Admin** > **GA4 Setup Assistant**, look for your GA4 property in
      the **Connected Property** table.

    If you can't find your GA4 property, then you'll have to manually add it as
    follows:

    - Open **Admin** > **Tracking Info** > **Tracking Code**.
    - Open **Connected Site Tags**.
    - In **Enter ID of tag to connect**: enter your GA site tag (the ID starting
      with `G-`).
    - In **Nickname**, optionally add the name of the domain, for example,
      `kubernetes.io`.
    - Click **Connect**.

7.  Ensure that the new GA4 site tag is receiving data.

    If your project's site is **not** using [gtag.js][], then skip this step and
    move on to the next stage.

    From your project's GA4 console, you should see **active users** in realtime
    -- provided that there are active users. You should see roughly the same
    number and distribution of active users reported by the UA console.

### Stage 2 - configure the GA4 ID as the main analytics ID

GA4 only works when your project's website is configured using the [gtag.js][]
analytics library.

1.  Switch to using `gtag.js` if your project isn't already. How you achieve
    this will depend, in particular, on your project's site generator and setup.

    Here are some guidelines on how to switch over to `gtag.js`:

    - [Docusaurus][]:
      - v1: add a `gtag: true` site configuration parameter.
      - v2: enable the gtag plugin.
    - [Docsy][] & Hugo version 0.82.0 or later: your project will automatically
      be switched to using the `gtag` library once you complete the next step.
    - Hugo 0.82.0 or earlier (with or without use of Docsy): consider adding a
      `partial` named something like `google-analytics.html` containing the
      global tag snippet shown in [Add gtag.js to your site][], but using your
      GA4 measurement ID. Conditionally include this partial in the `<head>`
      element of your website pages, _provided that Hugo is building in a
      production environment_.

2.  Set the GA4 ID as the main GA ID. Again, how you do this will depend on your
    project's site generator and setup. Here are some guidelines:

    - [Docusaurus][]:
      - v1: set the `gaTrackingId` site configuration parameter to your
        project's GA4 measurement ID.
      - v2: see gtag-plugin configuration parameters.
    - Docsy + Hugo version 0.82.0 or later: set your project's `googleAnalytics`
      config parameter to the GA4 measurement ID.
    - Hugo 0.82.0 or earlier (with or without use of Docsy): if you've followed
      the recommendations of the previous step then you'll be using a custom
      partial. In this case, make use of the GA4 measurement ID in your partial
      or site config file, as appropriate.

### Stage 3 - switch to native support for GA

In cases where your project website (temporarily) used some custom layouts or
code (such as custom Hugo partials) to enable GA4, consider removing the custom
code in favor of the native support provided by your site-generator tooling.

For example, for [Docsy][]-based websites, all you need to do is provide your
project's GA4 measurement ID. Details are provided in [Adding Analytics][]. Of course,
this may require you to upgrade the version of [Docsy][] and/or Hugo that your project
is using.

[add gtag.js to your site]:
  https://developers.google.com/analytics/devguides/collection/gtagjs/
[adding analytics]:
  https://www.docsy.dev/docs/adding-content/feedback/#adding-analytics
[analytics.js]: https://support.google.com/analytics/answer/10268458
[connected]: https://support.google.com/analytics/answer/9973999
[etcd.io issue #595]: https://github.com/etcd-io/website/issues/595
[docsy]: https://www.docsy.dev
[docusaurus]: https://docusaurus.io/
[ga4-dev]: https://developers.google.com/analytics/devguides/migration
[ga4]: https://support.google.com/analytics/answer/10089681
[ga4+ua-dev]:
  https://developers.google.com/analytics/devguides/migration/measurement/add-ga4
[gtag.js]: https://support.google.com/analytics/answer/10220869
[issue #108]: https://github.com/cncf/techdocs/issues/108
[migration-help]: https://support.google.com/analytics/answer/10759417
[opentelemetry.io/layouts/partials/google-analytics.html]:
  https://github.com/open-telemetry/opentelemetry.io/blob/3d8a59ea508b46497500297f334a079a4f91e293/layouts/partials/google-analytics.html
[stage 2]: #stage-2---configure-the-ga4-id-as-the-main-analytics-id
[status table]:
  https://docs.google.com/spreadsheets/d/1Mx4LhdI2Un-rvGMI73SlHxQH9D2HABAJclMB3dd6lnA
[ua]: https://support.google.com/analytics/answer/11583528
