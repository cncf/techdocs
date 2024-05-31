# Assessment: Project Tremor

Prepared by: Celeste Horgan Date: July 2021

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
| Information architecture   |     | ✅  |     |     |     |
| New user content           |     | ✅  |     |     |     |
| Content maintainability    |     | ✅  |     |     |     |
| Content creation processes | ✅  |     |     |     |     |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

**Comments**

- **Information Architecture:** Project Tremor's documentation makes a number of
  individually small IA choices that culminate in a confusing experience for the
  user.

  - The [Getting Started](https://www.tremor.rs/getting-started/) section covers
    a number of seemingly random topics, with some appearing to be focused on
    selling the project to new users (i.e.
    [Good User Experience](https://www.tremor.rs/getting-started/tooling/)),
    more traditional "getting started" content
    ([Quick Install](https://www.tremor.rs/getting-started/install/)), and
    high-level conceptual documentation
    ([Understanding Data](https://www.tremor.rs/getting-started/codecs/)).
  - Tremor has ample high-level conceptual overview information, but it's
    somewhat scattered.
    - The
      [Architecture Overview - Goodness of fit](https://docs.tremor.rs/overview/)
      section is probably the best overview for brand new users available,
      however the rest of the page gets very detailed very quickly, and feels
      like a collection of semi-random topics that someone felt the need to
      write down, with no real direction. This page probably needs to be broken
      up into many pages within a section, with some of the more esoteric topics
      currently under "Getting Started" included.
    - Low-level task content often gets buried in
      [Recipes](https://docs.tremor.rs/tremor-query/recipes/), generically
      titled
      [Walkthrough](https://docs.tremor.rs/operations/configuration-walkthrough/)
      pages, and the extremely helpful but poorly named
      [Workshops](https://docs.tremor.rs/workshop/examples/00_passthrough/)
      section. This makes it hard for a user with a specific query ("How do I
      do....") to know, at a glance, if the documentation contains the answer to
      their question or not.
    - [The Configuration walkthrough](https://docs.tremor.rs/operations/configuration-walkthrough/)
      was the single most useful page in terms of understanding the overall
      'picture' of what Tremor is and how a developer needs to move through the
      documentation. But it's buried in the Configuration section, and I
      wouldn't think to look there until I was much further in the process.
    - Given how valuable the
      [Workshops](https://docs.tremor.rs/workshop/examples/00_passthrough/)
      section is, it needs a better name. "Recipes", "Tutorials", "How to" would
      all be clearer.
  - Some specific comments about the Tremor Query and Script sections:
    - The [Tremor Query Overview](https://docs.tremor.rs/tremor-query/) and
      [Tremor Script Overview](https://docs.tremor.rs/tremor-script/) would
      benefit from splitting the "Language" topic and subtopics into their own
      page in the section.
    - As someone unfamiliar with the project, I'm not sure how
      [Tremor Query](https://docs.tremor.rs/tremor-query/) and
      [Tremor Script](https://docs.tremor.rs/tremor-script/) are different based
      purely on their overviews. I'm also not sure if they work together or not,
      or if I as a user need to use one language versus another.
    - Given the complexity of Tremor's various query methods, I think focusing
      on producing more [Recipes](https://docs.tremor.rs/tremor-script/recipes/)
      would be a helpful next step for the team.
  - [History](https://docs.tremor.rs/history/) probably doesn't belong as a
    top-level section.
  - [Development](https://docs.tremor.rs/development/) and
    [Governance](https://docs.tremor.rs/CodeOfConduct/) are targeted at
    contributor users rather than end users, and should be in a different
    section of the site if possible.

- **New user content:** Project Tremor has a Getting Started section but it's a
  little disorganized as mentioned above. This makes it difficult for an actual
  new user to understand.

  - [Starting Tremor for the first time](https://www.tremor.rs/getting-started/starting/)
    is the best part of the getting started guide. However, it mentions that
    there are "many ways" to install Tremor - it would be good to point users to
    documentation on those other ways of installing.
    - Is the
      [Quick developer install](https://www.tremor.rs/getting-started/install/)
      the "other methods"? There's no introduction to this page, so I can't
      tell.
  - [Talking to other systems](https://www.tremor.rs/getting-started/connectivity/)
    is definitely a foundational concept for Tremor (as an events processing
    system) but the style in which it's written isn't appropriate for a getting
    started guide. This goes for
    [Understanding Data](https://www.tremor.rs/getting-started/codecs/),
    [Scripting](https://www.tremor.rs/getting-started/scripting/) and
    [Specialize Tremor Pipelines](https://www.tremor.rs/getting-started/specialize/).
    - These topics should be under Docs in their own section, perhaps titled
      "Overview".
  - Ensuring that all pages, like
    [The Tremor CLI tool](https://docs.tremor.rs/operations/cli/), have
    overviews goes a long way in ensuring the docs are user friendly for new
    users.
  - I like the [FAQ](https://www.tremor.rs/faq/) as new user content, but FAQs
    often become a catch-all and get messy quickly. Proceed with caution.

- **Content maintainability:**
  - Docs are mostly separated into their own repository,
    https://github.com/tremor-rs/tremor-www-docs, though as the maintainers note
    there are many other repositories with docs available in them. These need to
    be consolidated for easier maintenance.
  - The
    [scripts](https://github.com/tremor-rs/tremor-www-docs/tree/main/python_scripts)
    which generate certain pieces of documentation introduce fragility into the
    system: if the location of files, names of repos, etc. change then the
    documentation pipeline breaks. This also makes it hard for non-"technical"
    users to make changes to these pages, and to reorganize these pages if
    needed.
    - The automation benefits might be worth it however.
  - Your
    [release process](https://github.com/tremor-rs/tremor-www-docs/blob/main/RELEASE_PROCESS.md)
    is documented, which is great to see!
  - Your site is only partially searchable, with sections not within /docs
    inaccessible by search.
- **Content creation processes:** There are no content creation processes
  documented and no CONTRIBUTING.md file for the main docs repository. Some
  things to think about:
  - If I write documentation, who verifies that it's technically accurate?
  - If I'm not a native English speaker, who can I ask for help with grammar and
    language review?
  - If I'm a trained technical writer and want to rearrange, create new, or
    split existing topics, who do I tag in issues/on Slack for comment?
  - As a developer user, how can I ensure that content is accurate and up to
    date? Are alpha and beta features flagged? What happens when content (+
    functionality) gets deprecated or changed in a major way?
  - Who reviews documentation PRs?

**Recommendations**

- **Get specific about your Getting Started:** Getting Started Guides contain a
  very predictable set of content:

  - In one paragraph or less, what is this piece of software
  - What prerequisite software (i.e. Kubernetes) and knowledge (i.e., Go) do I
    need on my system to launch this?
    - What special features does this piece of software have that other similar
      software might not have?
  - What are the installation instructions?
  - Is there a sample application I can set up and execute basic commands on?

- **Reorganize the Operations section and retitle it "Using Tremor"**:
  Additionally, move some topics from the existing Getting Started section:

  - [Configuring Tremor](https://docs.tremor.rs/operations/configuration-walkthrough/)
    - [Walkthrough: Configure a Tremor Deployment](https://docs.tremor.rs/operations/configuration-walkthrough/)
  - [Connectivity: Onramps and Offramps](https://www.tremor.rs/getting-started/connectivity/)
    - Link to the [Onramps](https://docs.tremor.rs/artefacts/onramps/) and
      [Offramps](https://docs.tremor.rs/artefacts/offramps/) sections to point
      users to their next steps
    - [Guaranteed Delivery](https://docs.tremor.rs/operations/gdcb/) (Note: this
      topic needs revision as it is not user friendly)
    - [Linked Transports](https://docs.tremor.rs/operations/linked-transports/)
  - Pipelines (Overview: what are pipelines? You can probably borrow content
    from the [Pipeline Model](https://docs.tremor.rs/overview/#pipeline-model)
    section of the architecture overview)
    - Create a Tremor Pipeline
    - [Specialize Tremor Pipelines](https://www.tremor.rs/getting-started/specialize/)
    - [Processing Data](https://www.tremor.rs/getting-started/scripting/)
    - Recipes/Examples
  - [Monitoring](https://docs.tremor.rs/operations/monitoring/)
  - [Tremor CLI Tool](https://docs.tremor.rs/operations/cli/)
  - [IDE Add-ons](https://www.tremor.rs/getting-started/tooling/)

- **Reorganize [Overview](https://docs.tremor.rs/overview/) with
  user-centeredness in mind**: I suggest creating a new section with the
  following content:

  - The information on [The docs index](https://docs.tremor.rs/) as a page
    titled "Overview", with subpages:
    - [Architecture Overview](https://docs.tremor.rs/overview/) (note: you could
      break out each of the "Model" sections into their own subpages)
    - [History](https://docs.tremor.rs/history/), and I would consider titling
      this "Release log" or something similar
    - [Understanding Data](https://www.tremor.rs/getting-started/codecs/)

- **Audit for colloquial/casual language, abbreviations, and other "basic"
  English:**

  - This recommendation has less to do with casual language or abbreviations
    being _bad_, and more to do with the perception of professionalism for the
    project.
  - Review _all_ documentation for the following:
    - Unnecessary abbreviations (for example
      [This page](https://docs.tremor.rs/operations/gdcb/)).
    - Casual language or colloquialisms, for example:
      [A short "canned" synopsis](https://docs.tremor.rs/operations/gdcb/),
      referring to processes either as
      [painless](https://www.tremor.rs/getting-started/starting/#requirements)
      (on the same page: "let's be real"), etc.
    - Spelling, consistent capitalization of titles, consistent verbiage in
      titles:
      - In general when it comes to page titles, prefer either proper nouns
        (Good examples of this:
        [Lexical Preprocessor](https://docs.tremor.rs/tremor-script/pp/),
        [Linked Transports](https://docs.tremor.rs/operations/linked-transports/)),
        or verb-based phrases for tasks (For example,
        [Debugging with LLDB](https://docs.tremor.rs/development/debugging/)).

- **Rename Workshops section to "Recipes" or "Examples"**

- **Create a CONTRIBUTING.md file for the docs repository**

## Contributor documentation

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ----------------------------------------- | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     |     |     | ✅  |
| Beginner friendly issue backlog           |     |     |     |     | ✅  |
| “New contributor” getting started content |     |     |     | ✅  |     |
| Project governance documentation          |     |     |     |     |     |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

**Comments**

- **Communication methods documented:**
  [Contributing](https://docs.tremor.rs/Contributing/) documents these, but it
  would be useful to pull these up to the Community page

- **Beginner friendly issue backlog:** You document your
  [GitHub best practices](https://docs.tremor.rs/Contributing/#pull-requests)
  and
  [issues for new users are tagged](https://github.com/tremor-rs/tremor-www-docs/issues?q=is%3Aissue+is%3Aclosed).
  Great work!

  - One thing to note is when tagging an issue
    [as a good first issue](https://github.com/tremor-rs/tremor-www-docs/issues/101),
    assume the reader knows nothing and must be hand-held through the entire
    process. [This issue](https://github.com/kubernetes/website/issues/28621) is
    a great example of the granularity needed by a first time contributor.

- **New contributor getting started content:** The
  [Community](https://www.tremor.rs/community/) page exists but doesn't provide
  much guidance for new users. How do I get involved? When do community meetings
  happen? Where do I find the team on Discord or Slack?

  - As mentioned above, [Development](https://docs.tremor.rs/development/) and
    [Governance](https://docs.tremor.rs/CodeOfConduct/) are targeted at
    contributor users and should be under the community section.

- **Governance documentation:** Your
  [Project Governance](https://www.tremor.rs/governance/) is linked front and
  center, which I love! The only critique I have is that as a new user I am
  unlikely to click through to all of the links available. It would be lovely to
  distill these documents into something Tremor maintains at some point in the
  future.

**Recommendations**

- **Turn the Community page into a subsection and house Governance and
  Development documentation under it:**

  - Specifically, move [Development](https://docs.tremor.rs/development/) to
    /community/development
  - Move
    [The entire governance section](https://docs.tremor.rs/Contributing/#pull-requests)
    as well
  - Consider moving [RFCs](https://rfcs.tremor.rs/) under community as well

- **Pull meeting and contact information out of contributing and onto the
  community page:** people cannot join a meeting or chat that they can't find a
  link to.

## Website

| Criteria                  | 1   | 2   | 3   | 4   | 5   |
| ------------------------- | --- | --- | --- | --- | --- |
| Branding and design       |     |     |     | ✅  |     |
| Case studies/social proof | ✅  |     |     |     |     |
| Maintenance planning      |     | ✅  |     |     |     |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

**Comments**

- **Branding and design:**

  - On the whole, the Tremor docs site looks professional, if a little plain.
  - Because of the way the site deploys (from different repositories via GitHub
    pages), navigation is disjointed: if you're in the RFCs, you don't have the
    full site's navigation available to you and clicking the logo takes you back
    to https://rfcs.tremor.rs, with similar behavior occurring in the docs. This
    is a bad user experience.
  - Tremor could do a bit more selling on its homepage:
    - What are the project's key features that make it different from other
      event processing systems?
    - Are there any known use cases you can talk about or use the logos of?
    - Have you given any talks on Tremor, or is there other (particularly video)
      content you can showcase about the project?

- **Case studies/social proof**: None available.

  - Case studies/talks/generally showing that other projects use Tremor is one
    of the most powerful ways to gain new users. People love real-world examples
    of a codebase in action.
  - Because Tremor was developed by Wayfair, we suggest documenting Wayfair's
    use as a "use case" or case study, and then adding a section on the website
    which allows people to submit their own use cases!

- **Maintenance planning:** In general, we recommend that projects keep their
  documentation all in one repository. Tremor's documentation currently deploys
  from https://github.com/tremor-rs/tremor-www-main,
  https://github.com/tremor-rs/tremor-rfcs, and
  https://github.com/tremor-rs/tremor-www-docs.
  - It's confusing for contributors who don't know where to file issues, open
    pull requests, or whom to tag for reviews (and where).
  - The easiest fix for this pain point is to deploy everything using and Hugo.
  - In general, we prefer sites to deploy via Netlify.

**Recommendations**

- Develop a case study or other content around Wayfair's use of Tremor, to give
  users a tangible example of what they can do with the project.

- Fix navigation and improve site maintainability by putting all your
  documentation in one repository.

## Recommendations

**Reorganize your documentation's information architecture:** In addition to the
suggestions above, I recommend an overall reorganization of the documentation,
along the lines of:

- Docs
  - Overview (renamed from Architecture Overview)
  - Using Tremor
    - subpages as described previously
  - Artifacts
  - Tremor Query
  - Tremor Script
  - Examples (renamed from Workshops)
  - API Reference
  - Glossary
  - FAQ (moved from top level navigation)

**Reorganize the top-level navigation of the site:** once again, as mentioned
previously:

- Getting Started
- Docs
  - subsections as described above
- Community
  - RFCs
  - Contributing (moved from Docs section)
  - Governance (moved from Docs section)
- Community Chat
- Blog

**Consolidate documentation into one repository, and document contributing
guidelines for users:** I recommend collapsing everything into
https://github.com/tremor-rs/tremor-www-main, barring any technical difficulties
doing so, and switching deploys over to Netlify to access Deploy previews and
other useful features.
