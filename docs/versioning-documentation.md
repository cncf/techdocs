# Technical Documentation Versioning with Hugo & Netlify

Technical Documents Versioning is an intersection of:

**Changes** + **Language** + **Navigation** + **Search**

For small to medium sized sites using one language/location, a folder based method is likely the best method to balance these considerations.

Things discussed in this article:

- Things to consider when thinking about versioning documentation
- 2 viable schemes available (for Hugo/Netlify)
- Dropdown menu navigation code examples
- Trade offs

## Versioning Considerations

What are the main concerns when versioning technical documentation in a website?

**Readers**
- Ease of navigation/understanding

**Maintainers / Writers**
- How hard is it to update when it's time to cut a new version?

**Necessity**
- Does the documentation need versioning yet?
- YAGNI (You aren't gonna need it - Don't implement things before you actually need them)

**Navigation**
- Differences between versions (how do you deal with pages that have been added, removed, or moved between releases?)

**Searchability**
- Does the duplication of pages affect search results? How do you manage result priority between versions?

**Localization / Internationalization**
- How does the added complexity of language/locale versions affect the version system?

**Compartmentalization**
- Does all of the site need to be versioned?
- How do we avoid versioning the entire site if only Documentation versions are the goal?

**Switchability**
- How easy is it to change versioning schemes?

## Versioning Schemes

For a Hugo / Netlify setup:

| friendly schemes     | unfriendly schemes |
| :---                 | :---               |
| None (don't version) |                    |
| Folder based         | Query Strings      |
| Subdomain based      | Cookies            |

Because Hugo is a static site generator, and Netlify abstracts a lot of the server away Query Strings and Cookies don't really work for a Hugo / Netlify site.

### Folder based

![Folder based](./images/folder-based-etcd.png)

Each version of the documentation is placed in its own folder. This is probably the easiest way to start versioning.

```
content
└── docs
    ├── _index.md
    ├── v1
    ├── v2.2
    │   ⋮
    └── v3.4.0
```

Scores high on: - Maintainer ease of updates - Compartmentalization
Scores low on: - Localization / Internationalization

#### Folder based navigation code example

The folder based method of versioning can make the website code more complex.

One of the things that make this an interesting example is how Batard (2020, L8-L18)<sup>[2](#footnote2)</sup> manages the navigation in the `/site/layouts/docs/versions.html` file, particularly the use of the `replace` function to ensure that when the links in the dropdown menu are built, the versioned links reflect the currently loaded page:

[velero.io](https://velero.io/) `/site/layouts/docs/versions.html`
```html
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    {{ $original_version := printf "/%s/" .CurrentSection.Params.version }}
    {{ $latest_url := replace .Params.url .CurrentSection.Params.version .Site.Params.latest | relURL }}
    {{ $currentUrl := .Permalink }}

    {{ range .Site.Params.versions }}
        {{ $new_version := printf "/%s/" . }}
        <a class="dropdown-item"
           href="{{ replace $currentUrl $original_version $new_version | relURL }}">{{ . }}</a>
    {{ end }}
</div>
```
Batard (2020, L8-L18)<sup>[2](#footnote2)</sup>

Folder based versioning can make site *configuration* less complex.

velero.io `velero/site/config.yaml`
```yaml
  versioning: true
  latest: v1.5
  versions:
    - main
    - v1.5
    - v1.4
    - v1.3.2
    ⋮
```
Brubaker et al. (2020, L14-L20)<sup>[3](#footnote3)</sup>

### Subdomain based

The subdomain scheme uses some simpler template code to generate links, only having to update the `.url`, but the Hugo config file is made more complex.

![Subdomain based](./images/subdomain-based-k8s.png)

Each version of the documentation is its own site
- Uses git feature branches rather than folders to organize versions
- Separate site in Netlify for each version supported
- Simpler template code, more complex config

Scores high on:
- Localization / Internationalization
Scores low on:
- Compartmentalization
- Maintenance, each version is its own site

#### Subdomain based navigation code example

Same style of dropdown function as above, but made simpler because of the configuration:

https://kubernetes.io `website/layouts/partials/navbar-version-selector.html`

```html
<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
	{{ $p := . }}
	{{ range .Site.Params.versions }}
	<a class="dropdown-item" href="{{ .url }}{{ $p.RelPermalink }}">{{ .version }}</a>
	{{ end }}
</div>
```
Pursley et al. (2020, L4-L9)<sup>[4](#footnote4)</sup>

The dropdown example is made simpler because the config is more complex and because the server setup is more complex.

https://kubernetes.io `website/config.toml`
```toml
[[params.versions]]
fullversion = "v1.20.0"
version = "v1.20"
githubbranch = "v1.20.0"
docsbranch = "master"
url = "https://kubernetes.io"

[[params.versions]]
fullversion = "v1.19.4"
version = "v1.19"
githubbranch = "v1.19.4"
docsbranch = "release-1.19"
url = "https://v1-19.docs.kubernetes.io"
```

Bannister et al. (2020, L180-L192)<sup>[1](#footnote1)</sup>

## Summary

Version using `folders` if:

- maintainer ease of updates is a priority
- localization / internationalization not a priority
- it is important that only the documentation is versioned (and not, for instance, the blog)

Version using `subdomains` if:

- localization / internationality is planned
- compartmentalization not a priority

For small to medium sized sites using one language/location, a folder based method is likely the best method to balance versioning considerations.

## References / Credits

<a name="footnote1">1</a>: [Bannister, T.](https://github.com/sftim) et al. (2020, December 23). kubernetes/website. GitHub. Retrieved February 2, 2021 from [https://github.com/kubernetes/website/blob/ 7462297ee388332a7b0d27625929fbf44d0c1ea9/config.toml](https://github.com/kubernetes/website/blob/7462297ee388332a7b0d27625929fbf44d0c1ea9/config.toml)

<a name="footnote2">2</a>: [Batard, T.](https://github.com/tbatard) (2020, August 13). _vmware-tanzu/velero_. GitHub. Retrieved January 19, 2021 from [https://github.com/vmware-tanzu/velero/blob/ db403c6c54b0048fada2b5db628c44be4ac0fd79/site/layouts/docs/versions.html](https://github.com/vmware-tanzu/velero/blob/db403c6c54b0048fada2b5db628c44be4ac0fd79/site/layouts/docs/versions.html)


 <a name="footnote3">3</a>: [Brubaker, N.](https://github.com/nrb), [Rosland, J.](https://github.com/jonasrosland), [Thompson, C.](https://github.com/carlisia), [Batard, T.](https://github.com/tbatard) (2020, September 16). _vmware-tanzu/velero_. GitHub. Retrieved February 2, 2021 from [https://github.com/vmware-tanzu/velero/blob/1fd49f4fd66ecf6cd959ce258efbd9a549d8902b/site/config.yaml](https://github.com/vmware-tanzu/velero/blob/1fd49f4fd66ecf6cd959ce258efbd9a549d8902b/site/config.yaml)

 <a name="footnote4">4</a>: [Pursley, B.](https://github.com/brianpursley), [Horgan, C.](https://github.com/celestehorgan), Takahashi, S. (2020, July 21). _kubernetes/website_. GitHub.  Retrieved February 2, 2021 from [https://github.com/kubernetes/website/blob/072d4b41b45f5311538c24d375432a755f9e3f4c/layouts/partials/navbar-version-selector.html](https://github.com/kubernetes/website/blob/072d4b41b45f5311538c24d375432a755f9e3f4c/layouts/partials/navbar-version-selector.html)

---

This page has been adapted from the [Technical Documentation Versioning slide show](https://technical-documentation-versioning.netlify.app/), its source can be found here: [https://github.com/nate-double-u/technical-documentation-versioning](https://github.com/nate-double-u/technical-documentation-versioning).

