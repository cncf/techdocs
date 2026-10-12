---
title: Fix kubevirt.io compliance, SEO, and adopter content gaps
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

The documentation analysis covered the main `kubevirt.io` website as well as the user guide, and found gaps on the website that affect documentation users: the copyright line is missing its © symbol, `robots.txt` points at the wrong sitemap and omits the user guide's, the site search indexes only blog posts, there is no root `CONTRIBUTING.md` or `CODE_OF_CONDUCT.md`, two published CNCF case studies are not linked anywhere, and the adopter use cases in `ADOPTERS.md` never reach the site.

All changes in this issue land in the `kubevirt/kubevirt.github.io` repository. The issue is filed here so the documentation work is tracked in one place; transfer it if the maintainers prefer.

## Sub-issues

### Add the © symbol and the missing root repository files

- In `_includes/footer.html`, change the copyright line to read "Copyright © KubeVirt a Series of LF Projects, LLC".
- Add a root `CONTRIBUTING.md` that points to the existing contributing content in the README and to the user guide's Contributing page.
- Add a root `CODE_OF_CONDUCT.md` that links to the `kubevirt/community` code of conduct.
- Add a note to the README naming the file to edit when the CNCF maturity statement changes.

Done when: the footer shows ©, and both files exist at the repository root.

### Fix robots.txt, gate analytics to production, and block indexing of previews

- In `robots.txt`, correct the sitemap URL to `https://kubevirt.io/sitemap.xml` and add a second `Sitemap:` line for `https://kubevirt.io/user-guide/sitemap.xml`.
- In `_includes/head.html`, wrap the `dpal.js` Adobe Analytics include in a check on `jekyll.environment == "production"`, and set `JEKYLL_ENV=production` only in the Netlify production context.
- Emit `X-Robots-Tag: noindex` for deploy previews and branch deploys from a `_headers` file or `netlify.toml` context section.

Done when: `robots.txt` lists both sitemaps, previews send no analytics, and previews return the `noindex` header.

### Link the existing CNCF case studies from the landing page

Add a "Case Studies" block beneath the End Users logo wall on the landing page that links the two published CNCF case studies (NTT Docomo Business and Swisscom). The content already exists; this is a quick win.

Done when: both case studies are reachable from the landing page.

### Show adopter use cases on the logo wall

Extend `adopters.py` and `_data/adopters.yml` to carry the "Use-Case" text from `ADOPTERS.md`, and show it as a tooltip or an expandable card on each logo. This turns the logo wall into short, attributed testimonials at no authoring cost.

Done when: hovering or expanding a logo shows that adopter's use case.

### Create an adopters page

Create a `/adopters/` or `/case-studies/` page that renders the full adopters table (type, name, since, use case) and links to the CNCF case studies, so evaluators have a single place for adoption evidence. Add it to `_data/site_nav_pages.yml`.

Done when: the page is in the site navigation and lists every adopter.

### Add a Governance section to the Community page

Add a "Governance" section to the Community page that states in two or three sentences how KubeVirt is governed (CNCF incubating project, maintainer group, SIGs and working groups, lazy consensus with maintainer votes) and links `GOVERNANCE.md`, `MAINTAINERS.md`, `membership_policy.md`, and `sig-list.md` in `kubevirt/community`.

Done when: a visitor can find the governance documents from the Community page.

### Index non-blog pages in site search and cross-link the two searches

Extend the lunr index in `_layouts/search.html` to include `site.pages` in addition to `site.posts`, so non-blog pages are searchable. Add a link from the main site's search page to the user guide search, and from the user guide's search results to the main site's, so users can find documentation from either entry point.

Done when: a search for "installation" on `kubevirt.io` returns the relevant page.

### Add blog categories beyond news and uncategorized

Add a category or tag scheme (for example release, feature, community, user story) and backfill recent posts, so the blog index can filter by type and adopter stories can be listed together.

Done when: the blog index offers category filtering and recent posts are tagged.

### Point vendor logos at KubeVirt-specific pages

For each entry in `ADOPTERS.md` whose link is a corporate homepage, ask the vendor for a URL that mentions KubeVirt support or their KubeVirt-based product, and update the link. Drop the logo from the Vendors section if no such page exists.

Done when: every vendor logo links to a page that mentions KubeVirt.

### Publish a short brand reference

Publish a brand reference, in this repository or in `kubevirt/community`, that lists the canonical logo files (icon and horizontal wordmark), the hex values of the `$kv-color--green-*` scale, and the approved typefaces. Have `docs/stylesheets/extra.css` in the user guide cite that reference in a comment so the two sites stay aligned when the palette changes.

Done when: both repositories point at the same brand reference.
