---
title: Notary Project Docs Assessment
cSpell:ignore: docset notaryproject celestehorgan
---

# Notary Project Docs Assessment

Date: 2021-07-31 Project: [Notary Project](https://github.com/notaryproject/)

## Introduction

This is an assessment of the Notary Project's documentation, prepared by the
CNCF techdocs team.

This document:

- Measures existing documentation quality against the CNCF’s standards
- Recommends specific and general improvements
- Provides examples of great documentation as reference
- Identifies key improvements with the largest return on investment

Since the Notary Project documentation site is just beginning, and since V2 is
still in specification stage, the content will need to be developed (or
redeveloped from V1 documentation where available/appropriate). This assessment
aims to provide a starting point for that documentation creation process.

## How this document works

This assessment is divided into two sections:

- **Project documentation:** for end users of the project; aimed at people who
  intend to use it
- **Contributor documentation:** for new and existing contributors to the
  project

Each section rates content based on different
[criteria](../docs/analysis/criteria.md).

Normally, a **website** section would also be a part of a document assessment,
but as there isn't a website for the Notary Project yet, the website assessment
section will be skipped, but there are some website recommendations in the
[Final Recommendations](#final-recommendations) section.

## Project documentation

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| -------------------------- | --- | --- | --- | --- | --- |
| Information architecture   |     | ✅  |     |     |     |
| New user content           | ✅  |     |     |     |     |
| Content maintainability    | ✅  |     |     |     |     |
| Content creation processes | ✅  |     |     |     |     |

Criteria:

- 1 = (Is not present or requires significant work)
- 3 = (is present, but needs work)
- 5 = (is executed extremely well or no improvement required) |

### Comments

#### Information Architecture

- Documentation is currently in several locations and will need to be brought
  into one repo. The current resources are:
  - [The Update Framework Notary repository docs](https://github.com/theupdateframework/notary/tree/master/docs)
  - [The Notary Project notaryproject repository](https://github.com/notaryproject/notaryproject)
  - [Notary V2 prototype cli](https://github.com/notaryproject/nv2)
- The
  [V1 Notary Overview](https://github.com/theupdateframework/notary#overview) is
  reasonable and explanatory.
- The
  [Notary V2 Overview](https://github.com/notaryproject/notaryproject#notary-v2-overview)
  provides a good explanation of the V2 project, but which is aimed at the
  specification writers/developers.

- Is the documentation feature complete, as in each product feature is
  documented?
  - As the project is in ongoing development, not every feature is completed and
    so there are some holes in the documentation.
  - The
    [https://github.com/notaryproject/nv2](https://github.com/notaryproject/nv2)
    repository contains the nv2 prototype cli as well as the documentation about
    how to use it. Again, since the project is in development it seems like
    there are some holes.

- Are there step-by-step instructions (tasks, tutorials) documented for
  features?
  - Since V2's documentation is so conceptual at this point (consisting mostly
    of specification), it may be best to leave it as is &mdash; linking to it
    directly during the development process, and planning documentation along
    side the development of the system as a whole.

- Is the “happy path”/most common use case documented?
  - The V1 Getting Started Guide is very good. Will V2 be able to draw from it?

- If the documentation does not suffice, is there a clear escalation path for
  users needing more help, such as an FAQ or Troubleshooting section?
  - This is an area for improvement on both V1 and V2 docs. Potentially consider
    reorganizing the whole docset with users in mind: dividing the content in a
    concepts, tasks, and tutorials model.

#### New user content

- Getting Started Guide is clearly labelled:
  [https://github.com/theupdateframework/notary#getting-started-with-the-notary-cli](https://github.com/theupdateframework/notary#getting-started-with-the-notary-cli)
  though notably only in v1 of their docs, not v2. How does one get started with
  v2?
- The v2 overview has getting started/CLI steps for an entirely different set of
  functions:
  [https://github.com/notaryproject/notaryproject#notary-v2-overview](https://github.com/notaryproject/notaryproject#notary-v2-overview).
  Are these in addition to or in replacement of the v1 getting started steps?
- Where do users go after the getting started steps? Is there anything else
  about the tool they need to understand?
- Sample code looks great!

#### Content maintainability

- As the documentation is in GitHub it is searchable. When setting up a website,
  we recommend using Google, Algolia, or Lunr to provide search functionality.
- Is the Notary Project planning on localization/internationalization? If so, we
  recommend starting the site with a directory structure which supports
  localization (Hugo supports this very well out of the box).

- Is any of the content from v1 relevant to v2?
  - If so, import v1 into the site, and "version" by copying the content into a
    new directory for v2 and updating only what needs to change or be added.
  - If not, upload v1 and v2 into the site as separate document sets.

#### Content creation processes

<!-- borrowed from @celestehorgan's excellent work in 0001-contour.md -->

- The following are ideas to consider going forward with a docs repo. As a
  content creator:
  - If I write documentation, who verifies that it's technically accurate?
  - If I'm not a native english speaker, who can I ask for help with grammar and
    language review?
  - If I'm a trained technical writer and want to rearrange, create new, or
    split existing topics, who do I tag in issues/on Slack for comment?
  - As a developer user, how can I ensure that content is accurate and up to
    date? Are alpha and beta features flagged? What happens when content (+
    functionality) gets deprecated or changed in a major way?
  - Who reviews documentation PRs?

### Recommendations

#### Information Architecture

The assumption is that V2 is the primary project moving forward, and that a
Minimum Viable Product (MVP) for a website/documentation will focus on Notary V2
users.

- Bring the Notary v2 CLI prototype documentation into the main documentation
  when consolidating the content on the website.
- Rework the v1 Docs once an information architecture (IA) is set up for the new
  site. Set up the new site IA based on the structure of the v1 docs unless an
  alternative is proposed.

- Separate specifications from user-centered documentation. For example, how
  [Service Mesh Interface website](https://smi-spec.io/) handles its
  specification.

## Contributor documentation

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ----------------------------------------- | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     | ✅  |     |     |
| Beginner friendly issue backlog           |     | ✅  |     |     |     |
| “New contributor” getting started content | ✅  |     |     |     |     |
| Project governance documentation          | ✅  |     |     |     |     |

Criteria

- 1 = (Is not present or requires significant work)
- 3 = (is present, but needs work)
- 5 = (is executed extremely well or no improvement required) |

### Comments & recommendations

- Most of the issues in this section are a function of not having a website yet.
  - As the website build process starts, put together a skeleton IA that can be
    filled in as the project grows.

- Communication methods are documented but could be further centralized and
  expanded during the site development process, with an end result comparable to
  https://prometheus.io/community/.

- There is no documentation for:
  - Triaging docs issues
  - Clearly marking a way for new contributors to make code or documentation
    contributions (i.e. a “good first issue” label), and define what makes a
    good first issue
  - Set up a process for maintaining/pruning stale issues
  - New contributors/your first contribution
  - Letting new users know where to get help

- Complete the governance work started here:
  https://github.com/notaryproject/specifications/issues/55
  https://github.com/notaryproject/notaryproject/pull/78, and add it to a
  governance page (or section) on the website.

## Final Recommendations

Is it possible plan documentation along side the V2 development? Will the
documentation be able to get its structure from the specifications being
developed?

### Website

- [x] Create separate documentation repository:
      https://github.com/notaryproject/notaryproject.dev
- [ ] Setup a [Hugo website](https://gohugo.io) with a
      [Docsy theme](https://www.docsy.dev/)
- [ ] Setup Netlify for hosting/CI
- [ ] Develop a
      [maintainers list](https://github.com/notaryproject/notaryproject.dev/blob/main/.github/settings.yml)
      for the documentation and its repository (this has been started
      https://github.com/notaryproject/specifications/issues/77)
- [ ] Develop a maintenance plan for the documentation and its repository
- [ ] Follow the
      [CNCF website guidelines checklist](../docs/website-guidelines-checklist.md)
      for other required elements

_Note_:
[Notary Project branding artwork](https://github.com/cncf/artwork/tree/master/projects/notary)
exists. Other branding elements, like color schemes and whatnot, will need to be
developed.

### Information Architecture

We recommend reorganizing your content in the following way:

**Site structure**

- Landing page
- Community
  - Governance
  - Community (details)
  - Contributing
    - Where to start
    - How we work
    - Filing and working on issues for the project
    - Where the community is (contacts, meetings)
    - Contributing to docs
    - Where to ask for more help contributing
    - Next steps
- About
- Blog (Get the word out about the project and how it's progressing)
- Docs
  - This section to be planned with the Notary Maintainers team
  - Getting Started
    - This section to be planned with the Notary Maintainers team

**Top nav**

- Docs/Specification (Specification initially, then Docs as development
  progresses)
- Version 1 Docs (https://github.com/theupdateframework/notary/tree/master/docs
  initially, then /docs/v1/(latest?))
- Community
- Getting started
- Specification (https://github.com/notaryproject/notaryproject initially)

### Moving and consolidating existing documentation

- We recommend moving the v1 Notary Project project from the
  [The Update Framework](https://github.com/theupdateframework/notary/) GitHub
  organization to the [Notary Project](https://github.com/notaryproject) GitHub
  organization.
- Remove any references to Docker (the original home of the documentation), for
  example "the Docker Notary documentation".
- Even if the V1 Notary repo isn't moved, the website MVP should link to V1
  notary where it is now, with no changes.
- Docs+Code combined repositories are a long-term risk. We strongly recommend
  decoupling these into their own repositories
  - As you build the website, move the existing v2 documentation from
    https://github.com/notaryproject/notaryproject to
    https://github.com/notaryproject/notaryproject.dev
    - Include the Notary v2 CLI prototype documentation
      (https://github.com/notaryproject/nv2) in this migration
  - After building the website MVP, migrate all relevant documentation from v1
    to the website/documentation repository.
