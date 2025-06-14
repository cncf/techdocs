---
title: Docs assessment
cSpell:ignore: Horgan celestehorgan hashlinks
---

# Docs assessment

## Introduction

Prepared by: Celeste Horgan ([@celestehorgan](https://github.com/celestehorgan))
Date: March 2021

This is an assessment of your project documentation and website (if present),
prepared for you and your project by the CNCF techdocs team.

This document aims to:

- Measure existing documentation quality against the CNCF’s standards
- Recommend specific and general improvements
- Provide examples of great documentation as reference
- Identify key areas which will net the largest improvement if addressed

## How this document works

The assessment is divided into three sections:

- **Project documentation:** for end users of the project; aimed at people who
  intend to use it
- **Contributor documentation:** for new and existing contributors to the
  project
- **Website:** branding, website structure, and maintainability

Within each section you receive a rating on different criteria. The full
definition of each criteria is defined in
[the criteria](../docs/analysis/criteria.md). We recommend reading each
criterion’s definition.

## Project documentation

| Criteria                   | 1 = (Is not present or requires significant work) | 2   | 3 = (is present, but needs work) | 4   | 5 = (is executed extremely well or no improvement required) |
| -------------------------- | ------------------------------------------------- | --- | -------------------------------- | --- | ----------------------------------------------------------- |
| Information architecture   |                                                   |     |                                  | ✅  |                                                             |
| New user content           |                                                   |     |                                  | ✅  |                                                             |
| Content maintainability    |                                                   |     | ✅                               |     |                                                             |
| Content creation processes |                                                   | ✅  |                                  |     |                                                             |

### Comments

- **Information Architecture**:

  - Documentation is feature complete!
  - A clear "About" or "What is Contour?" page is missing. It partially exists
    on [Architecture](https://projectcontour.io/docs/v1.13.1/architecture) and
    [Philosophy](https://projectcontour.io/resources/philosophy), but it's hard
    to navigate for a new user.
  - Task and concept documentation for individual features (configurations and
    deployment options) are both feature complete.
    - Because documentation for this project involves long examples, it might be
      useful to have a reference table of different config options and the
      expected data types for each value.
  - There's lots of great examples for different configuration and deployment
    options, but there's no clear "happy path" through the content. I'm a new
    user and I've decided I want to use Contour. What's considered a "basic"
    Contour setup and how can I get there?
  - Your API reference looks great, but some internal navigation on the
    reference page (hashlinks and a submenu) would be helpful.
  - Judging purely by the git commit history, content is up to date. To further
    you as a team, it might be useful to figure out a quarterly/yearly "stale
    content" checking cycle.
  - The only place troubleshooting is mentioned is (in the getting started
    guide)[https://projectcontour.io/getting-started/#troubleshooting]. It's
    worth emphasizing this elsewhere (i.e. a page in the docs or a mention on
    the docs landing page). This will help as the project grows and people start
    using GitHub as a support portal :)

- **New user content**:
  - You have a great, clearly labelled
    [Getting Started](https://projectcontour.io/getting-started/) page, which is
    awesome! However the getting started guide is fairly high level and doesn't
    answer some of the following questions:
    - What else do I need aside from Contour (i.e. the expectation is that the
      cluster is running Envoy as well)
    - What's the next doc I should read _after_ this to understand Contour and
      how to customize it for my use case?
- **Content maintainability**:

  - Your documentation is searchable, which is great!
    - However, because there are docs on your site that live _outside_ of the
      docs directory, the entire site needs to be searchable.
  - Moving to Hugo is a huge win if you decide to localize (translate) your
    content, as it has localization support built in. If you do ever decide to
    localize your content, it would be best to move the docs out of the code
    repo.

- **Content creation processes**:
  - Because Contour maintains a Docs+Code monorepo, the
    [CONTRIBUTING.md](https://github.com/projectcontour/contour/blob/main/CONTRIBUTING.md),
    [Contributing](https://projectcontour.io/docs/v1.13.1/start-contributing/),
    and [How we work](https://projectcontour.io/resources/how-we-work/) pages
    are all centered around code processes. As a content creator:
    - If I write documentation, who verifies that it's technically accurate?
    - If I'm not a native english speaker, who can I ask for help with grammar
      and language review?
    - If I'm a trained technical writer and want to rearrange, create new, or
      split existing topics, who do I tag in issues/on Slack for comment?
    - As a developer user, how can I ensure that content is accurate and up to
      date? Are alpha and beta features flagged? What happens when content (+
      functionality) gets deprecated or changed in a major way?
    - Who reviews documentation PRs?

### Recommendations

- **Information Architecture**:

  - The main issue with information architecture is titling.
  - **The guides section:** Having "Guides" as a top-level section which appears
    in the nav before documentation is a bit confusing. I recommend having
    documentation as the second link beside Getting Started.
    - **Guide titles**: The content in this section seems to be task/tutorial
      topics – as such I recommend titling them all using action (-ing) verb
      phrases.
      - Good: "Using Gateway API with Contour"
      - Not good: "External Authorization Support"
    - **Titles alone are not enough**: I also recommend providing a short
      description of the content in each guide on the /guides root, to help
      users decide if the content is relevant to their interests without
      clicking in.
  - **Resources**: There is a resources subsection in the docs and one in the
    top nav. Both have different content. Either rename the top nav resources
    section "Videos" or rename the Resources section in the docs something else.
  - **Documenting the most common use case**: Either as a tutorial or otherwise,
    clearly documenting the most common use cases – what's the configuration
    that _most_ people will use, i.e.? Would be helpful for new users.
  - **Reference(s) of YAML key/value pairs in the configuration section:** The
    [annotations reference](https://projectcontour.io/docs/v1.13.1/config/annotations/)
    is a good example. Do this for each configuration page, similar to the note
    at the bottom of the
    [CORS example](https://projectcontour.io/docs/v1.13.1/config/cors/). This is
    a small win and a great first issue.

- **New user content**:

  - Work with a technical writer to revise your getting started page to provide
    a bit more background information about Contour for the true new learner and
    provide more "next steps" documentation.
  - **About Contour**: As mentioned above, working with a technical writer to
    revise/move some of the content to create a clearer "What is Contour?"
    section for beginners would be useful.

- **Content creation processes**:
  - Document your content creation processes, answering the questions outlined
    above. This is a great first issue for a new contributor!

## Contributor documentation

| Criteria                                  | 1 = (Is not present or requires significant work) | 2   | 3 = (is present, but needs work) | 4   | 5 = (is executed extremely well or no improvement required) |
| ----------------------------------------- | ------------------------------------------------- | --- | -------------------------------- | --- | ----------------------------------------------------------- |
| Communication methods documented          |                                                   |     |                                  |     | ✅                                                          |
| Beginner friendly issue backlog           |                                                   |     |                                  | ✅  |                                                             |
| “New contributor” getting started content |                                                   |     |                                  | ✅  |                                                             |
| Project governance documentation          |                                                   |     |                                  |     | ✅                                                          |

### Comments

On the whole, Project Contour does an excellent job of documenting things for
new contributors and making the process as smooth as possible. No major feedback
in this area, but some minor suggestions to improve an already good process.

Project governance is clearly documented in the community repo, new contributor
documentation is clearly signposted on the website, in the docs section of the
website, and in the repo. Great job team!

- This is another area where a Docs+Code monorepo might prove difficult to
  maintain. Because docs issues are interspersed with code issues, it's easy for
  it to look like there's no code issues.

### Recommendations

- Update
  [SITE_CONTRIBUTION.md](https://github.com/projectcontour/contour/blob/main/SITE_CONTRIBUTION.md)
  to Hugo when ready.
- Do a backlog clean of `kind/documentation` and ensure that all issues are
  still valid. Close any which are not. For example
  [this issue](https://github.com/projectcontour/contour/issues/2053) was opened
  in 2019.
- Improve stub issue descriptions
  [like this one](https://github.com/projectcontour/contour/issues/2183). A
  great example of how to write an issue like this without providing too much
  detail is [this one](https://github.com/kubernetes/website/issues/13864): walk
  someone new through the steps of thinking through the problem.

## Website

| Criteria                  | 1 = (Is not present or requires significant work) | 2   | 3 = (is present, but needs work) | 4   | 5 = (is executed extremely well or no improvement required) |
| ------------------------- | ------------------------------------------------- | --- | -------------------------------- | --- | ----------------------------------------------------------- |
| Branding and design       |                                                   |     |                                  |     | ✅                                                          |
| Case studies/social proof |                                                   |     |                                  | ✅  |                                                             |
| Maintenance planning      |                                                   |     | ✅                               |     |                                                             |

### Comments

- **Branding and design**: The Project Contour website looks very professional
  and consistently branded! No major improvements needed.

- **Case studies/social proof**: Project Contour's
  [resources page](https://projectcontour.io/resources/) lists a number of great
  talks given on the project and shows that it's an active member of the cloud
  native community. While ideally we would see a logo wall of users or case
  studies, for a project of contour's size this is a great addition to the site.

- **Maintenance planning**:
  - **Monorepos**: Having a docs+code monorepo is risky in the long term, as it
    couples all docs builds with code builds and vice versa. If docs CI fails
    because Netlify is temporarily down, for example, this means that all your
    code builds can potentially fail as well. Coupling docs in a repository with
    code can also make a code repo's size expand exponentially, especially as
    projects pick up steam, write more blog posts (with images), and add other
    multimedia.

### Recommendations

- **Branding and design**: one extremely small styling suggestion which would
  make a great first issue:

  - for `<h2>` elements on documentation pages, change the margin from
    `margin-bottom: 2rem` to `margin-top: 1rem; margin-bottom: 1rem` or
    (preferred) `margin-top: 1.5rem; margin-bottom: 0.5rem;`. In general it's
    better to have padding above an h2 rather than below it, as this helps
    separate each section of a page.

- **Maintenance planning**: Unless you have very good reasons for staying in a
  docs+code monorepo, we strongly suggest migrating documentation to its own
  repository and maintaining it separately.

## Final Recommendations

### Revamping documentation for new users and new contributors

1. Revise the [docs landing page](https://projectcontour.io/docs/v1.13.1/) to
   explain the project to a brand new user who has no context on Envoy, Project
   Contour, or the concept of an ingress controller.

2. Revise the
   [getting started page](https://projectcontour.io/getting-started/). Ensure
   that there is a proper prerequisites list and that new users know where to go
   next.

3. Document (or otherwise highlight) a new user's "happy path". Is there a
   particular configuration or deployment that you think most users will use?
   How can we highlight this?

4. Either revise
   [SITE_CONTRIBUTION.md](https://github.com/projectcontour/contour/blob/main/SITE_CONTRIBUTION.md),
   [CONTRIBUTING.md](https://github.com/projectcontour/contour/blob/main/CONTRIBUTING.md),
   [Contributing](https://projectcontour.io/docs/v1.13.1/start-contributing/),
   and [How we work](https://projectcontour.io/resources/how-we-work/) or create
   a new section for documentation guidelines.

5. Develop an escalation path for documentation: who approves, who reviews for
   language, and where can writers ask for help?

6. Revise or otherwise use the content on
   [Contour Philosophy](https://projectcontour.io/resources/philosophy/) as a
   part of a new getting started guide.

The revised content could have the following structure, if desired:

- Getting started guide:

  - Introduction to Project Contour
    - Project philosophy
    - Why choose Contour over another (less opinionated) ingress controller
  - Prerequisites
  - Quickstart (getting up and running)
    - Setting up a kind cluster
  -
  - Configuring Contour (in a nutshell)
    - Next steps
  - Deploying Contour (in a nutshell)
    - Next steps
  - Where to ask for more help with using Contour
  - Next steps

- New contributor guide:
  - Where to start
  - How we work
  - Filing and working on issues for the project
  - Where the community is (contacts, meetings)
  - Contributing to docs
  - Where to ask for more help contributing
  - Next steps

### Moving the website into its own repository

Docs+Code combined repositories are a long-term risk. We strongly recommend
decoupling these into their own repositories.

1. Figure out any code-related dependencies, i.e. API documentation that might
   be autogenerated, and figure out how to decouple this.

2. Create a separate documentation repository and move the Netlify configuration
   & docs code into it.

3. Develop a maintainers list/maintenance plan for the documentation and its
   repository.
