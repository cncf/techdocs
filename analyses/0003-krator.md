---
title: Krator Docs assessment
cSpell:ignore: Krator celestehorgan CODEOWNERS
---

# Krator Docs assessment

## Introduction

This is an assessment of your project documentation and website (if present),
prepared for you and your project by the CNCF techdocs team.

This document aims to:

- Measure existing documentation quality against the CNCF’s standards
- Recommend specific and general improvements
- Provide examples of great documentation as reference
- Identify key areas which will net the largest improvement if addressed

Since the Krator documentation site is just getting started, we'll have to
create or significantly develop the current content. This assessment provides a
starting point for articulating current state and ideas for the future.

## How this document works

The assessment is divided into three sections:

- **Project documentation:** for end users of the project; aimed at people who
  intend to use it
- **Contributor documentation:** for new and existing contributors to the
  project
- **Website:** branding, website structure, and maintainability

Within each section you receive a rating on different criteria. The full
definition of each criteria is defined in
[Criteria](../docs/analysis/criteria.md). We recommend reading each criterion’s
definition.

## Project documentation

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| -------------------------- | --- | --- | --- | --- | --- |
| Information architecture   | ✅  |     |     |     |     |
| New user content           | ✅  |     |     |     |     |
| Content maintainability    | ✅  |     |     |     |     |
| Content creation processes | ✅  |     |     |     |     |

Criteria:

- 1 = (Is not present or requires significant work)
- 3 = (is present, but needs work)
- 5 = (is executed extremely well or no improvement required)

### Comments

- **Information Architecture**:
  - Documentation is currently in several locations and will need to be brought
    into one repo. The current resources are:
    - The project [README](https://github.com/krator-rs/krator)
    - [Introduction to Krator Blog Post](https://deislabs.io/posts/introducing-krator/)
    - [A Fistful of States: More State Machine Patterns in Rust](https://deislabs.io/posts/a-fistful-of-states/)
    - [Crate Krator API Documentation](https://docs.rs/krator/0.4.0/krator/).
      This is a substantial part of the current documentation and could be
      incorporated into the main body (site/repo) of the documentation. This is
      already a great resource for users, but if we transport it to a
      documentation repo, it will take some work if it's not already in
      markdown. Is there a way extract/download these guides quickly? Another
      important consideration is that because the API documentation is
      auto-generated as a part of the Rust Crate, documenting these features is
      convenient for the developers, however, it is more challenging for
      non-developer users to contribute to the documentation. We recommend that
      the Krator team determine which path is best in the long term. If we
      choose to pull the API documentation into the docs repo, there's more up
      front work, however, the benefit is more potential community engagement.
    - [GitHub Documentation](https://github.com/krator-rs/krator/tree/main/docs).
      The Community guides teach contributing and development.
      - The
        [Developer Guide](https://github.com/krator-rs/krator/blob/main/docs/community/developers.md)
        covers prerequisites and building, which would make a good introductory
        or Getting Started entry point.
      - The
        [Release Checklist](https://github.com/krator-rs/krator/blob/main/docs/community/release-checklist.md)
        appears aimed at developers of Krator, as opposed to first-time users.
        This should ideally be separated from the entry point.

- **New user content**:
  - We'll need to create a clear entry point for the new user. Some of this info
    could be taken from the
    [Developer Guide](https://github.com/krator-rs/krator/blob/main/docs/community/developers.md)
    and includes prerequisite knowledge, configuration, and a brief step-by-step
    guide on adding Krator to your project.
- **Content maintainability**:
  - Since we'll be creating a site, search doesn't apply yet (though will be
    part of the basic site).
  - Using Hugo will add the benefit of localization support.

<!-- borrowed from @celestehorgan's excellent work in 0001-contour.md -->

- **Content creation processes**:
  - The following are ideas to consider going forward with a docs repo. As a
    content creator:
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

- **Information Architecture**: The main task with information architecture is
  conceptualization and development as the documents are currently in different
  places. The following areas would establish a foundation:
  - **About Krator:** Give a high-level view of Krator and what it solves.
    **Most common use case(s)**
  - **A Quickstart or Getting Started:** Having an obvious starting point as a
    top-level section or doc gives new visitors a sense of context. I recommend
    creating a Getting Started/Quickstart.
  - **Tutorials**
    - **Setting up Krator**
    - **Configuring your project to use Krator**
  - **Tasks:** I recommend a section with step-by-step instructions on how to
    accomplish the most common tasks in Krator. For example, if you have five
    most common tasks, you could have a document for each. Suggestions include:
    - **Using built-in operators**
    - **Creating your own operators with Krator**
    - Are there other common tasks? If so, they should go here.
  - **Best practices**
  - **Troubleshooting**
    - **Troubleshooting**
    - **Error Reference** A table with explanations and resolution steps would
      suffice
  - **Contributing to Krator**
    - **Cutting releases** (This is existing documentation)
    - **Contributing:** Include information on submitting issues and
      instructions with links on contributing to the code base and to the
      documentation.
  - **API Documentation:** If you choose to bring this into the main
    documentation repo, the copy will need to be ported. Is the content
    available in markdown already? If not, it will need to be converted.

## Contributor documentation

| Criteria                                  | 1 = (Is not present or requires significant work) | 2   | 3 = (is present, but needs work) | 4   | 5 = (is executed extremely well or no improvement required) |
| ----------------------------------------- | ------------------------------------------------- | --- | -------------------------------- | --- | ----------------------------------------------------------- |
| Communication methods documented          | ✅                                                |     |                                  |     |                                                             |
| Beginner friendly issue backlog           | ✅                                                |     |                                  |     |                                                             |
| “New contributor” getting started content | ✅                                                |     |                                  |     |                                                             |
| Project governance documentation          | ✅                                                |     |                                  |     |                                                             |

### Comments and recommendations

Communication methods will need to be determined and added to
[CONTRIBUTING.md](https://github.com/krator-rs/krator/blob/main/CONTRIBUTING.md).

While there is an issue backlog, there aren't any issues with a
`good first issue` label. As an invitation to new contributors, consider filing
issues that are easy to remedy, labeling them accordingly, posting them on
social media, and being available to help contributors through the process.

There is a brief mention of the PR review process in
[CONTRIBUTING.md](https://github.com/krator-rs/krator/blob/main/CONTRIBUTING.md),
however, giving more detail about the process, such as rounds of review, time
frame, a link to
[CODEOWNERS](https://github.com/krator-rs/krator/blob/main/CODEOWNERS), tests
that have to pass, etc. help manage contributor expectations. This, along with
linking to the Code of Conduct as you currently do, establishes a context for
new contributors.

In terms of governance, the Krator maintainers have an issue open for adopting
Open Governance. When this is complete, we'd advise bringing it into the
documentation.

## Website

| Criteria                  | 1 = (Is not present or requires significant work) | 2   | 3 = (is present, but needs work) | 4   | 5 = (is executed extremely well or no improvement required) |
| ------------------------- | ------------------------------------------------- | --- | -------------------------------- | --- | ----------------------------------------------------------- |
| Branding and design       | ✅                                                |     |                                  |     |                                                             |
| Case studies/social proof | ✅                                                |     |                                  |     |                                                             |
| Maintenance planning      | ✅                                                |     |                                  |     |                                                             |

### Comments

Note: as Krator does not have a website yet, we did not expect any of these to
be done!

- **Branding and design**: When the logo is ready, we'll be able to select
  colors, typically inspired by the logo, for backgrounds, links, and design
  elements such as borders. Sometimes Krator is capitalized, yet other times
  lowercase. I would recommend using one or the other consistently.

- **Case studies/social proof**: As you develop Krator, keep an eye out for
  companies and projects using Krator, and start working with them early to do
  things like write blog posts about their experiences. As you gather user blog
  posts over time, submit a ticket to the CNCF Service Desk and we can turn
  these into a more marketing-friendly case studies section on your site.

<!-- borrowed from @celestehorgan's excellent work in 0001-contour.md -->

- **Maintenance planning**:
  - **Monorepos**: Having a docs+code monorepo is risky in the long term, as it
    couples all docs builds with code builds and vice versa. If docs CI fails
    because Netlify is temporarily down, for example, this means that all your
    code builds can potentially fail as well. Coupling docs in a repository with
    code can also make a code repo's size expand exponentially, especially as
    projects pick up steam, write more blog posts (with images), and add other
    multimedia. For these reasons, we recommend housing the documentation in a
    separate repo.

## Final Recommendations

### Creating documentation for new users and new contributors

1. Create a landing page that distills at-a-glance how Krator makes the world a
   better place, how easy it is to use, and how supportive the community is.

1. Create an About page or blog post that tells the Krator back story.

1. One of the most important areas for a documentation site is the Getting
   Started guide. I'd recommend an introductory page that explains what Krator
   does and why it was created that a beginner developer could understand.

1. Create a document that shows, step-by-step, how to start using Krator.
   Provide prerequisites so that potential adopters can know at a glance if
   adoption is feasible for their circumstances.

1. Document common use cases and give examples, with code on the page (ideally
   from a linked, working example).

Consider a structure as in the following:

- Site landing page
  - Why Krator makes life easier
  - Ease of use
  - Community (blog link, social media, logos)
- About (origin story: who, where, when, why)
- Getting started
  - Introduction to Krator
    - Project philosophy
  - Prerequisites
  - Quickstart
- Tutorials
  - Configuring Krator
    - Next steps
  - Deploying Krator
    - Next steps
  - Where to get support when using Krator
  - Next steps
- Tasks
  - Using built-in operators
  - Creating your own operators with Krator
- Best practices
- Troubleshooting
  - Error reference if applicable
- API documentation
- Contributing
  - New contributor guide:
    - Where to start
    - How we work
    - Filing and working on issues for the project
    - Where the community is (contacts, meetings)
    - Contributing to docs
    - Where to ask for more help contributing
    - Next steps
  - Cutting releases
