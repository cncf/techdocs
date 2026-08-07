---
title: Site Search
sidebar: { label: Search }
---

# Site Search

<!-- markdownlint-disable no-duplicate-heading -->

This page describes some common alternatives for static site search.

- [Google search](#programmable-search-engine-by-google)
- [Pagefind](#pagefind)
- [Lunr](#lunr)
- [DocSearch by Algolia](#docsearch-by-algolia)

## Programmable Search Engine by Google

[Google’s programmable search engine](https://developers.google.com/custom-search/docs/overview)
is a search tool that crawls your **live site** and renders results on your
website.

### Pros

- Easy to configure and setup
- Multi-language support
- Support for image search
- Search across a specified collection of sites or pages
- No daily limits for queries or records.

### Cons

- Search index is completely managed and hosted on Google servers.

## Pagefind

[Pagefind](https://pagefind.app/) is an open source search tool for static
sites. It indexes your built site as a post-build step and serves search results
directly from static assets.

### Pros

- No hosted service or third-party search provider required
- Works with any static site generator (it indexes the built HTML)
- Free and open source
- Support for multi-language search
- Fetches index data on demand, which helps it scale better than fully
  in-browser indexes

### Cons

- Requires a build step to generate and update the search index
- UI customization may require some JavaScript and CSS work

## Lunr

[Lunr.js](https://lunrjs.com/) is a small, full-text search library for use in
the browser. Lunr enables you to provide a great search experience without
needing external, server-side, search services.

### Pros

- Support for offline search
- No external package dependency
- Completely free and open source
- Full power for customization
- Support for multi-language search
- Search index is completely managed and hosted by the owner.

### Cons

- Can be complex to configure and setup (If a team is already using Hugo or
  Docsy, this should be _very_ easy to setup).
- Depending on site setup, may require javascript knowledge

## DocSearch by Algolia

[DocSearch](https://docsearch.algolia.com/) is a search tool powered by the
Algolia search engine that crawls your docs and provides a dropdown search
experience on your website.

### Pros

- Provides front-end widgets out of the box: search input, dynamic positioning
  of search results, etc.
- Integrations with popular frameworks
- Support for multi-language search

### Cons

- Search index is managed and hosted on Algolia servers
- To use the free DocSearch program, you must apply and be approved
- The free DocSearch program requires displaying the "Search by Algolia" logo
- Less control over indexing and search behavior than self-hosted options

## When Is It Best To Use One Over Another?

If you are looking to create a search capability for your open source project
without having to depend on a third-party service, then you should consider
using [Pagefind](https://pagefind.app/). If you need a more custom
implementation that runs entirely in the browser, you can also consider
[Lunr](https://lunrjs.com/). You can take a look at
[this custom implementation](https://github.com/vitessio/website/pull/1119) or
[Hugo/Docsy implementation](https://github.com/etcd-io/website/pull/403) to see
the different ways we used Lunr to implement search.

If you are looking to create a search engine that not only focuses on the
contents of one website (site search), but on a particular topic from multiple
sites, then you should consider the
[Programmable Search Engine (Google search)](https://developers.google.com/custom-search/docs/overview).

