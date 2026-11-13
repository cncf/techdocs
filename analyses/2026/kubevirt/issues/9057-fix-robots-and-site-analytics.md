---
title: Fix robots.txt and gate analytics on kubevirt.io #9057
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

This issue affects the main website, `kubevirt/kubevirt.github.io`. The
`robots.txt` file on kubevirt.io points to an incorrect sitemap URL and does not
list the user guide sitemap. The website also loads the `dpal.js` analytics
script in every build, so preview and branch deploys can pollute production
data, and nothing explicitly asks search engines to skip non-production deploys.

Make these changes in `kubevirt/kubevirt.github.io`:

1. Correct the sitemap URL in `robots.txt` to `https://kubevirt.io/sitemap.xml`,
   and add a second line, `Sitemap: https://kubevirt.io/user-guide/sitemap.xml`.
2. In `_includes/head.html`, wrap the `dpal.js` include in a check on
   `jekyll.environment == "production"`.
3. Set `JEKYLL_ENV=production` in the Prow post-submit job in
   `kubevirt/project-infra` that runs `make build` and publishes the website to
   `gh-pages`. Keep Netlify previews and local builds in `development`.
4. Emit `X-Robots-Tag: noindex` for non-production deploys from a `_headers`
   file or a `[context.deploy-preview]` and `[context.branch-deploy]` section in
   `netlify.toml`.

## What you expected

`robots.txt` lists both sitemaps, only production builds load analytics, and
deploy previews carry a `noindex` header.

## URL

- https://kubevirt.io/robots.txt
- https://github.com/kubevirt/kubevirt.github.io/blob/main/_includes/head.html
- https://github.com/kubevirt/kubevirt.github.io/blob/main/netlify.toml

## Additional context

Related: #9056 adds analytics to the user guide, and #9058 applies the `noindex`
change to the guide's `netlify.toml`.

This issue tracks recommended changes resulting from an analysis of the KubeVirt
documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/).
The assistance request is tracked in
[cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
