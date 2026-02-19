---
title: Implementing LitmusChaos Doc Improvements
tags: [LitmusChaos]
created: 2024-10-24
author: Dave Welsch (@dwelsch-esi)
cSpell:ignore: Welsch dwelsch
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document provides actionable suggestions for improving the LitmusChaos
technical documentation.

For an analysis and general discussion of recommendations on LitmusChaos
technical documentation, see [the analysis](./litmuschaos-analysis.md).

### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards and
suggests possible improvements. In most cases there is more than one way to do
things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. The recommended implementations represent the reviewers' experience
with how to apply those best practices. In other words, borrowing terminology
from the lexicon of [RFCs][], the changes described here should be understood as
"recommended" or "should" at the strongest, and "optional" or "may" in many
cases. Any "must" or "required" actions are clearly denoted as such, and pertain
to legal requirements such as copyright and licensing issues.

## Implementation

### Overview

The top-level documentation recommendations for this project are:

[Consolidate the documentation](#consolidate-documentation-websites)

- Combine the website and all documentation in one repository
- Create a site map
- If there are elements that cannot be moved to the single repository, link to
  their locations in the website repository README file
- Use one website stack for the entire documentation site
- Remove, archive, or annotate obsolete repos and documents so that potential
  contributors don't waste time with them
- Update or deprecate the tutorials
- Retire the obsolete website and documentation repos
- Remove notifications of past events

[Organize the documentation](#organize-the-documentation)

- Combine similar information so that the user doesn't have to search for it in
  more than one place.
- Write an end-to-end Getting Started workflow.
- Clearly identify a single Getting Started landing page from which the Getting
  Started workflows begins
- Link all "Getting Started" buttons to the Getting Started landing page
- Combine the conceptual information into one section

[Clarify writing](#clarify-the-writing)

- Review format and writing of step-by-step instructions
- Break tasks down into sub-tasks if necessary
- Removed copy-pasted instructions and make them sub-tasks, especially in the
  installation sections
- Be clear about what OSes the installs are for

[Other improvements](#other-improvements)

- Fix search so that it brings up results only from the current version
- Add documentation to the contributing process in the main repo
- Remove non-inclusive language where possible
- Update the contributor information to clearly point to instructions and
  resources.
- Update all the website pages to have the same look and feel -- use the same
  fonts, colors, and layouts
- Consider modifying the color scheme for greater contrast
- Fix broken links
- Provide a template or instructions for writing issues so that incomplete
  issues are not accepted

### Consolidate documentation websites

Consolidate the documentation so that it is maintained in a single repo.
Ideally, this includes:

- The project website
- The documentation
- The APIs
- Tutorials

Archive and retire repos that are no longer in use so that they don't appear in
web searches. If it's necessary to generate or host documentation separately
(for example, maybe the API documentation because it's generated using OpenAPI),
then provide a roadmap on the documentation landing page that describes and
links to each part.

Use a single website technology stack for the entire site.

If it's not possible to consolidate these sites immediately, at least document
the satellite repos and provide links to them in the README.md file for the
project website.

### Organize the documentation

Reorganize the documentation so that like information appears with like.

- Combine the conceptual information (from "Introduction" and "Concepts") into a
  single technical overview. Alternatively, use the "Concepts" as the basis for
  a glossary.
- The existing Glossary is an explanation of the types of chaos resources and
  the changes in terminology from Litmus Chaos 2 to 3.0. These changes are
  already documented in "Features" in the Introduction. They should be
  incorporated into the glossary as well, by making notes in the individual
  terms' entries.
- Move the "How to Contribute" section out of "What is Litmus" -- "What is
  Litmus" is introductory material and it makes no sense to look for contributor
  information there. Put "How to Contribute" at the end of the Developer Guide
  or remove it from the doc entirely and put it in the code repo.

Fix the "Teaming" link in Concepts -> Overview in the table of contents. It
clicks through to "Resilience Probes" rather than the "Teaming" section.

Fix the broken link on the blog page.

There are at least four "getting started" links on the website.

<!-- markdownlint-disable line-length -->

| Link                        | Location                                                     | Refers to                                                                                                 |
| --------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| _Get Started_ button        | [Product landing page](https://litmuschaos.io/)              | [GitHub repo](https://github.com/litmuschaos/litmus)                                                      |
| _Get Started_ button        | [Doc landing page](https://docs.litmuschaos.io/)             | [ChaosCenter installation](https://docs.litmuschaos.io/docs/getting-started/installation)                 |
| _Getting Started_ link      | [Doc landing page](https://docs.litmuschaos.io/)             | [What is Litmus?](https://docs.litmuschaos.io/docs/introduction/what-is-litmus)                           |
| _Getting Started_ TOC entry | [Doc page](https://docs.litmuschaos.io/docs/) left-side menu | [ChaosCenter installation](https://docs.litmuschaos.io/docs/getting-started/installation)                 |
| _Getting started_ tutorial  | Tutorial site                                                | [Getting started tutorial](https://litmuschaos.github.io/tutorials/tutorial-getting-started/index.html#0) |

<!-- markdownlint-enable line-length -->

Make all "Getting Started" links point to the same place. This should be a
landing page that describes the main user roles or user scenarios and links to a
separate getting-started workflow for each one. For example, self-hosted and
hosted installs are probably appropriate for developer and admin user roles,
respectively. Explain the usage scenario at the top of each procedure.

Here's an example outline for deciding how to install. Each bullet item should
be its own page.

- **Installation**: Choose hosted Litmus service or install to local Kubernetes
  cluster
  - **Hosted**: Use a hosting service such as
    [Harness](https://app.harness.io/auth/#/signin).
  - **Local** (self-hosted): Use _Helm_ or `kubectl`
    - **Helm**: One-page install procedure.
    - **kubectl** (with a YAML spec file) Prerequisite: install MongoDB
      - **Basic installation**: One-page install procedure.
      - **Advanced installation**: One-page install procedure.
    - **Verify your installation**: One-page procedure. Next steps: Access the
      ChaosCenter.

Ensure that installation, setup, and verification have a clear workflow. If
these instructions vary significantly between user roles, write a separate
workflow for each user role. See
[New user content](litmuschaos-analysis.md#new-user-content). Rename "Learn
more" at the end of procedures and tasks to "Next steps". Explain who would want
to do each item and why in a short paragraph.

Limit on-site search to the current version of the documentation.

### Clarify the writing

Update the API reference to include semantic information and examples. Consider
writing an introduction to the API reference that explains the underlying model,
or provide a link to the Architecture section from the API introduction.

The User Guides contain stepwise procedures, but these could be written more
clearly. Procedures are the heart of user documentation, so we discuss them in
detail here. Some guidelines for writing procedures:

- Ensure that tasks are complete. For complex procedures, it's OK to link to
  sub-procedures or (usually better) put preliminary tasks in the Prerequisites
  section.
- Be consistent when writing similar sections, especially procedures. Using a
  template can make this easier.
- Use gerunds ("-ing" verbs) to title procure pages; for example "Scheduling a
  chaos experiment" rather than "Schedule a chaos experiment".
- Rather than duplicating information in different scenarios (basic vs. advanced
  install, for example), write single sub-procedures and link to them from the
  main procedure or include them as prerequisites.
- Explicitly state which operating systems and platform the installation is for.
  This can be done in the Prerequisites section.
- In all cases, use consistent naming for the sections as an aid to navigation.
  For example, the current documentation uses "Prerequisites" and "Before you
  begin" for the same information.
  - Similarly, retitle "Learn More" as "Next Steps", and write explanations for
    each option
- A basic outline for a procedure should include:
  1. Introduction - provide context for the task.
  2. Prerequisites: System requirements, operating systems, network, databases -
     anything that needs to be in place before the installation.
  3. Step by step instructions: Number the steps. Provide only one action per
     step. An action is a CLI command, GUI action -- anything that must be done
     before moving on to the next step. For CLI commands, file contents, and so
     on, provide copyable text. Don't combine steps, especially when they must
     be done in sequence.
  4. Results (optional; not needed if the results are obvious): What happens
     when the procedure is successful. Can include an instruction for how to
     verify results.
  5. Next steps: Links to one or more procedures that the user might reasonably
     want to do next. This might be a link to the next step in a larger
     procedure, or to options that are available now that the task is finished.

Expand the glossary. Make the glossary purely a reference that defines terms.

### Other improvements

Add documentation as a step in the project release process. Link to the
CONTRIBUTING.md doc in the docs repo.

Update the wiki in the main project repo to indicate that the documentation SIG
is no longer active, and provide a link so that users can find monthly meetings
or whatever the closest replacement is.

Ensure that the documentation maintainers listed in the MAINTAINERS.md file in
the main project repo are up to date.

Audit the documentation and replace instances of non-recommended words from the
[Inclusive Naming Initiative](https://inclusivenaming.org) website, especially
tier 1 and tier 2 words, where possible. Similarly, audit the site for words and
phrases like "simple", "easy", and "just have to ..." where they imply actions
that might be difficult for disabled users.

Clean up the backlog of documentation issues.

Make sure documentation issues have complete descriptions.

- Update the CONTRIBUTING.md file to reflect current community practices.
- Update the website to meet the following [Website guidelines]:
- Put the CNCF branding label in the site's footer.
- Similarly for the trademark usage info and link on all pages.
- Update notice on the project page to "We are a CNCF Graduated Project" when
  that happens.

Either fix the command-K search functionality or remove the command-K icon from
the search input.

Audit the look and feel so that the logo, colors, fonts, and layouts are
consistent throughout the project, community, blog, and doc websites. Consider
revising the site look and feel to include more contrasting color choices.

Consider adding links from the graphic elements on the project landing page.

Update or remove the CNCF announcement in the banner menu Community drop-down.

Implement analytics.

[RFCs]: https://www.rfc-editor.org/rfc/rfc2119
