# Best Practices for Documentation Search
Documentation (docs) search is an important part of developer experience. It makes life so easy for developers by enabling them narrow down to sections they’re looking for in the documentation. Choosing the right tool for docs search can be a hassle. 

Here at CNCF,we’ve explored different search tools and we’ve decided to narrow our options to this 3:

1. Lunr
1. Google search
1. Docsearch by Algolia

# Pros And Cons

## Docsearch by Algolia
[DocSearch](https://docsearch.algolia.com/) is a search tool powered by the Algolia search engine that crawls your docs and provides a dropdown search experience on your website.

### Pros
- Provides Front-end widgets out of the box: search input, dynamic positioning of search results, etc.
- Easy to configure and setup
- Integrations with popular frameworks
- Support for multi-language search.

### Cons
- Search index is completely managed and hosted on Algolia servers
- Hard to customize search
- Not entirely free- Limited to 10k records
- Limited access to features.


## Programmable Search Engine by Google
[Google’s programmable search engine](https://developers.google.com/custom-search/docs/overview) is a search tool that crawls your **live site** and renders results on your website.


### Pros
- Easy to configure and setup
- Multi-language support
- Support for image search
- Search across a specified collection of sites or pages
- No daily limits for query or records.


### Cons
- Google search [does not work in various countries](https://techcrunch.com/2010/04/19/google-censorship/).
- Shows ads in between search results
- Works only on deployed, production version of your site
- Hard to customize
- Search index is completely managed and hosted on Google servers.

## Lunr
[Lunr.js](https://lunrjs.com/) is a small, full-text search library for use in the browser. Lunr enables you to provide a great search experience without the need for external, server-side, search services.


### Pros
- Support for offline search
- No external package dependency
- Completely free and open source
- Full power for customization
- Search index is completely managed and hosted by the owner.


### Cons
- Can be difficult to configure and setup (If a team is already using hugo/docsy, this should be *very* easy to setup).
- Requires javascript knowledge

# When Is It Best To Use One Over Another?
If you are looking to create a search capability for your open source project without having to depend on a 3rd party service, then you should consider using [Lunr](https://lunrjs.com/). You can take a look at [this](https://github.com/vitessio/website/pull/1119) pull request to see how we used Lunr to implement search in Vitess docs website.  

If you are looking to setup search without caring too much about cost, customization, and 3rd party dependency, then you should consider going for [Docsearch by Algolia](https://docsearch.algolia.com/).  

If you are looking to create a search for documentation irrespective of where it’s hosted (separate site), then you should consider the [Programmable Search Engine (Google search)](https://developers.google.com/custom-search/docs/overview).
