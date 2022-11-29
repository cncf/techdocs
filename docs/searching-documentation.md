# Documentation Search
This page describes some common alternatives for static site search.

* [Lunr](#lunr)
* [Google search](#programmable-search-engine-by-google)
* [Docsearch by Algolia](#docsearch-by-algolia)

# Docsearch by Algolia
[DocSearch](https://docsearch.algolia.com/) is a search tool powered by the Algolia search engine that crawls your docs and provides a dropdown search experience on your website.

## Pros
- Provides Front-end widgets out of the box: search input, dynamic positioning of search results, etc.
- Integrations with popular frameworks
- Support for multi-language search.

## Cons
- Not entirely free- Limited to 10k records
- Limited access to features.


# Programmable Search Engine by Google
[Google’s programmable search engine](https://developers.google.com/custom-search/docs/overview) is a search tool that crawls your **live site** and renders results on your website.


## Pros
- Easy to configure and setup
- Multi-language support
- Support for image search
- Search across a specified collection of sites or pages
- No daily limits for queries or records.


## Cons
- Search index is completely managed and hosted on Google servers.

# Lunr
[Lunr.js](https://lunrjs.com/) is a small, full-text search library for use in the browser. Lunr enables you to provide a great search experience without needing external, server-side, search services.


## Pros
- Support for offline search
- No external package dependency
- Completely free and open source
- Full power for customization
- Support for multi-language search
- Search index is completely managed and hosted by the owner.


## Cons
- Can be complex to configure and setup (If a team is already using hugo/docsy, this should be *very* easy to setup).
- Depending on site setup, may require javascript knowledge

# When Is It Best To Use One Over Another?
If you are looking to create a search capability for your open source project without having to depend on a 3rd party service, then you should consider using [Lunr](https://lunrjs.com/). You can take a look at [this custom implementation](https://github.com/vitessio/website/pull/1119) or [Hugo/Docsy implementation](https://github.com/etcd-io/website/pull/403) to see the different ways we used Lunr to implement search.  

If you are looking to create a search engine that not only focuses on the contents of one website (site search), but on a particular topic from multiple sites, then you should consider the [Programmable Search Engine (Google search)](https://developers.google.com/custom-search/docs/overview).
