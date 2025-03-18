---
cSpell:ignore: Uchechukwu Obasi
---

<!-- markdownlint-disable no-duplicate-heading -->

# Porter Docs Analysis

Prepared by:

- [Uchechukwu Obasi](https://github.com/thisisobate/)
- [Nate W.](https://github.com/nate-double-u/)

Date: 2023-04-07

Resources:

- [Meeting notes](https://docs.google.com/document/d/12OGtSaUtlc7OA_iPnUvmVaiKg8yM7_QBzFnMgoHvnLw?no-link-check)
- Website: https://getporter.org
- Repos:
  - Main site: https://github.com/getporter/porter. Content is in `docs`.
  - [Operator site](https://getporter.org/operator):
    https://github.com/getporter/operator

## Introduction

This document assesses the quality and completeness of a project's documentation
and website (if present).

This document:

- Measures existing documentation quality against the CNCF’s standards
- Recommends specific and general improvements
- Provides examples of great documentation as reference
- Identifies key improvements with the largest return on investment

## How this document works

The assessment is divided into three sections:

- **Project documentation:** for end users of the project; aimed at people who
  intend to use it
- **Contributor documentation:** for new and existing contributors to the
  project
- **Website:** branding, website structure, and maintainability

Each section rates content based on different
[criteria](../docs/analysis/criteria.md).

## Project documentation

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| -------------------------- | --- | --- | --- | --- | --- |
| Information architecture   |     |     | ✅  |     |     |
| New user content           |     |     |     | ✅  |     |
| Content maintainability    | ✅  |     |     |     |     |
| Content creation processes |     |     |     | ✅  |     |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Information architecture

- Good nav on landing page
- There appear to be two different operator quick starts (or is it the
  difference between desired state and operator? maybe the operator one needs to
  be in Get Started)

  - https://getporter.org/quickstart/desired-state/
  - https://getporter.org/operator/quickstart/

- Mixins & Plugins sections duplicated in sidebar (and could potentially be
  organized under Concepts?)
- Current info architecture

  - root
    - Get started
    - Contribute
    - Tasks
    - Concepts
    - Mixins
    - Plugins
    - Troubleshooting
    - Best practices
    - References

- Judging by the git history, content is up to date.
- There is versioning on the site (it is easily missed though) - is there a
  process to help decide when content is stale?
- Lots of great examples, but there is no clear "happy path" through the
  content. I'm a new Porter user, what's considered a "basic" Porter setup, and
  how can I get there?

### New User content

- Porter's installation process is very well documented and well detailed in a
  step-by-step basis.
- Multiple OSes are well documented too.
- The onboarding and contributing guides are well documented making it easy for
  new users to understand and kickstart.
- Porter's sample code can be copy-pasted.
- "What is Porter?" is a good overview or 'about' section.
- Items listed under "When to use Porter?" are inconsistent with the way they're
  linked: some are linked while others are not.
- One can easily mistake Porter for Docker; it's hard to tell the difference
  between the two.

- Main quick start links to Quickstart: Bundles
  - is this the first thing a Porter user who wants to try out the system needs
    to see?
  - quick start bundles feels more like a concepts page than a quick start

### Content maintainability

- The project's website is located in the same repository as the project's
  source code. The maintainers argue it was done on purpose to encourage
  developers to write docs. I think it's a fair point. My only issue with this
  convention is that it makes it difficult for a new contributor to find the
  website's sourcefile. A contributor expects the "docs" directory to only
  contain nothing but actual documentation files not website source files.
- There's no way to search the documentation
- Hard to locate the different versions on smaller screens

### Content creation processes

- The Contributing Guide contains really thorough documentation on contributing
  to both docs and the project itself!
- Maintainers are clearly documented as well as where to find them.
- There are no docs for the release process. Same for docs creation and updates.

### Information Architecture

- Overall, Porter's documentation is well organized:
  - some pages seem misplaced (quick start for operator, ...)
  - Some pages appear at the top level of the docs nav that may not need to be
    there -- search may help with discoverability
    - Best practices could be under reference
    - Mixins Plugins -- should these be top level?

### New User content

- Document (or highlight) a new user's "happy path." Is there a particular
  config or deployment that most users would use? How could we highlight it?
- All the items listed under "When to use Porter?" section should maintain a
  consistent behavior; either make all items linkable or not.
- Create a docs detailing the difference between Porter and other bundling tools
  like Docker.
- The concept, Bundles, needs to be explained or defined at the top of the
  quickstart page.

### Content maintainability

- Move the website sourcefile to a separate "website" directory. That way, we
  create a good separation of concern. A good example is
  https://github.com/thanos-io/thanos.
- The porter's docs should be searchable.
- Create a version picker (dropdown) to make search easily discoverable for
  users.
- Make version picker visible on smaller screens.

### Content Creation Process

- Create a doc detailing the code release process. This document should account
  for documentation creation & updates.

## Contributor documentation

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ----------------------------------------- | --- | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     |     |     | ✅  | NW  |
| Beginner friendly issue backlog           |     |     |     |     | ✅  |
| “New contributor” getting started content |     |     |     | ✅  |     |
| Project governance documentation          |     |     |     |     | ✅  |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Communication methods documented

- Communication methods are clearly documented, as well as how (and where) to
  get calendar invites for meetings

### Beginner friendly issue backlog

- Porter's issue templates are very good and helpful
- The issue backlog is very beginner friendly and well groomed
- Issue labels are very good, engaging and friendly.
- There seems to be no documentation around triage process (both for code issues
  and documentation issues that come up).

### “New contributor” getting started content

- Porter docs have a very good "new contributor" getting started content

### Project governance documentation

- Project governance is clearly documented

### Beginner friendly issue backlog

- Create documentation around issue triage process.

### “New contributor” getting started content

- Make the new contributor guide to be easily accessible for new users on the
  website. A good idea is to link the "contribute" page from the homepage.

### Project governance documentation

- Link governance docs from the website- a quick link on the community page
  would be helpful.

## Website

| Criteria                                    | 1   | 2   | 3   | 4   | 5   |
| ------------------------------------------- | --- | --- | --- | --- | --- |
| Single-source for all files                 |     |     | ✅  |     |     |
| Meets min website req. (for maturity level) |     |     |     | ✅  |     |
| Branding and design                         |     |     |     |     | ✅  |
| Case studies/social proof                   |     |     |     | ✅  |     |
| Maintenance planning                        |     |     |     |     | ✅  |
| A11y plan & implementation                  |     |     | ✅  |     |     |
| Mobile-first plan & impl.                   |     |     |     |     | ✅  |
| HTTPS access & HTTP redirect                |     |     |     |     | ✅  |
| Google Analytics 4 for production only      | ✅  |     |     |     |     |
| Indexing allowed for production server only |     |     |     |     | ✅  |
| Intra-site / local search                   | ✅  |     |     |     |     |
| Account custodians are documented           |     |     |     |     | ✅  |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

Comments:

- Porter meets and exceeds the website requirements for its maturity level.
- Branding is consistently applied throughout the site
- Site is keyboard-navigable
- website is mobile responsive
- Website is accessible via HTTPS
- Site is well-indexed on Google
- Account custodians are well documented

### Single-source for all files

- Rename the "docs" directory to "website".

### Meets min website req. (for maturity level)

- Copyright and trademark footer should be present on all pages, not just home
  page.

### Case studies/social proof

- create either a testimonial page or logo wall containing a list of adopters

### A11y plan & implementation

- Elements must have sufficient color contrast; case in point is the date class
  in the blog's page. Try increasing the contrast of the text color a little
  bit.
- Images must have an alt text
- Ensure every id attribute value is unique

### Google Analytics 4 for production only

- Setup Google Analytics 4 for website. We advise you consult the CNCF to assist
  with this.

### Intra-site / local search

- Setup site-wide search for website.
