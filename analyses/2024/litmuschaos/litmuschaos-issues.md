---
title: Litmus Chaos Issue
cSpell:ignore: litmuschaos ChaoCenter
---

<!-- markdownlint-disable line-length no-duplicate-heading no-emphasis-as-heading -->

This document contains a list of issues to be entered in the Litmus Chaos
documentation repo more or less verbatim.

## Issue: Single-source documentation

### Overview

One of the CNCF guidelines for technical documentation is that it have a single
source. The Litmus Chaos technical documentation is spread over several repos,
which makes it harder to maintain. Some of the repos are obsolete; these should
be retired and archived or deleted.

Consolidate the documentation so that it is maintained in a single repo. If this
is not practical for some of the repos (it might be difficult to move the API
doc, for example, if it is generated from code), then document their location in
the README file in the main documentation repo. Make it clear which repos are
active and which are retired.

Use a single website technology stack for the entire site if possible.

Audience:

This issue concerns all users of the documentation.

Type:

This is an infrastructure issue that encompasses all the information on several
websites.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

The following repos are affected:

| Repo URL                                           | Description                                     | Recommendation                                            |
| -------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------------- |
| https://github.com/litmuschaos/litmus-website-2    | The project website repo                        | Combine with the doc repo                                 |
| https://github.com/litmuschaos/litmus-docs         | Documentation repo                              | Combine with website repo                                 |
| https://github.com/litmuschaos/v1-litmus-docs      | Another documentation repo, for docs before 2.0 | Move toward retiring and archiving.                       |
| https://github.com/litmuschaos/website-litmuschaos | Previous website repo                           | Already archived. Include new repo URL in archive banner. |
| https://github.com/litmuschaos/tutorials           | Tutorials repo                                  | Combine with documentation repo                           |

## Issue: Removed obsolete websites

A Google search turns Litmus Chaos-branded websites that are obsolete and/or
unexplained.

Remove or archive related websites that are obsolete.

For any related documentation website that cannot be integrated into the
existing doc repo, make sure there it has a clear explanation as to its purpose,
use, and which version of Litmus Chaos it is compatible with.

Audience:

This issue concerns all users of the documentation.

Type:

This is an infrastructure issue that encompasses all the information on several
websites.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

**GraphicQL API**

The following API is one of the first hits on a search of "Litmus Chaos API":
https://litmuschaos.github.io/litmus/graphql/v2.0.0/api.html.

I'm not even sure where the doc repo is (it might be in the API's repo at
https://github.com/litmuschaos/spectaql). It's clear this is a Litmus Chaos
component, but not whether this documentation is current or what it is for --
there's no introduction or explanation of the API.

**Tutorials**

The [Litmus Chaos Tutorial website](https://litmuschaos.github.io/tutorials/)
([repo](https://github.com/litmuschaos/tutorials)) seems to have been last
updated in version 2. The first tutorial, "Getting Started", was last updated in
August of 2021.

Having tutorials for the major workflows of Litmus Chaos is a great idea, but
this site looks like it's been abandoned and I'd be nervous about trying the
tutorials on it. Update the site to reassure readers that it's current, and link
to it from the main documentation page. If it's too much work to update the
whole thing, cannibalize it for the most useful workflows and delete the rest of
the site. Or archive the entire site and move on.

**Maintaining the project**

It seems as if a lot of the information about Litmus Chaos that's online was
either written by contributors not directly affiliated with the project or were
initiated by the project and then abandoned. Going forward, we recommend two
things:

1. Maintainers keep tighter control of the Litmus Chaos brand (logo and
   trademarks) so that obsolete and unofficial information does not look like
   it's a current part of the project to casual observers. Use CNCF resources to
   help manage the brand, including website registration.
2. Keep all documentation about the project up to date.

## Issue: Mark a clear "getting started" path

### Overview

There are at least four "getting started" links on the website. To avoid
confusing users, make them all point to the same place, or relabel them so they
more accurately reflect the linked content.

The idea is to funnel new users to the Getting Started page, where they can
focus uninterrupted on a streamlined procedure for installing and testing the
product.

Audience:

This issue concerns new users of Litmus Chaos.

Type:

This issue concerns instructional information.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

The following links are all labeled "Getting Started" but lead to different
pages:

1.  **The _Get Started_ button in the
    [Product landing page](https://litmuschaos.io/) banner menu** points to the
    [GitHub repo](https://github.com/litmuschaos/litmus).

        _Recommendation:_ Re-label the button "Learn more" or "Go to documentation".

2.  **The _Get Started_ button on the
    [Product landing page](https://litmuschaos.io/)** points to the
    [GitHub repo](https://github.com/litmuschaos/litmus).

        _Recommendation:_ Re-label the button "Learn more" or "Go to documentation".

3.  **The _Get Started_ button on the
    [Doc landing page](https://docs.litmuschaos.io/)** points to
    [ChaoCenter installation](https://docs.litmuschaos.io/docs/getting-started/installation).

        _Recommendation:_ Re-label the button "Learn more" or "Go to documentation". Or, remove this button since the very next section starts with a link to the installation documentation.

4.  **The _Getting Started_ link on the
    [Doc landing page](https://docs.litmuschaos.io/)** points to
    [What is Litmus?](https://docs.litmuschaos.io/docs/introduction/what-is-litmus).

        _Recommendation:_ Leave as is. But, reorganize the Installation/Getting Started section in the documentation table of contents (see the next item).

5.  **The _Get Started_ table of contents (TOC) entry in the
    [Doc page](https://docs.litmuschaos.io/docs/)** left-side menu expands the
    section's options in the TOC.

        _Recommendation:_ Remove the "Resources" section (that material is covered elsewhere, in "Architecture" and "Concepts"; add a link to that explanation instead). The "Installation" page is a good workflow for beginners to get through installation, configuration, and starting to use the product. Move the contents of the "Installation" page up so that it's a standalone entry called "Getting Started". Move that section to the top of the TOC.

6.  **The
    [Getting started tutorial](https://litmuschaos.github.io/tutorials/tutorial-getting-started/index.html#0)**
    is a standalone tutorial that provides an end-to-end path for a beginner to
    install, validate, and run Litmus and execute a chaos experiment.

        _Recommendation:_ Link to the tutorial from the main website. Also, see the issue about updating and maintaining the tutorials and other Litmus-branded websites:

        https://github.com/litmuschaos/litmus-docs/issues/296.

## Issue: Remove duplicate install instructions

### Overview

Rather than duplicating information in different scenarios (basic vs. advanced
install), rewrite the pages so that no duplication is necessary.

The same applies to anywhere documentation has been duplicated by cut-and-paste.

There are several ways to do this:

- Consolidate the pages so that the separate information is subordinate to the
  duplicated information rather than vice versa.
- Put the duplicated material on its own page and link to it. This solution
  assumes that making the user click to a common piece of information is a
  lesser liability than trying to maintain the same information in two (or more)
  places. It usually is.
- Put the duplicate information on its own page and include in-line everywhere
  it's required (not easy to do here, since Markdown doesn't have a mechanism
  for that like the Restructured Text ".. include" directive.)

Audience:

This issue concerns new users of Litmus Chaos and users re-installing Litmus
Chaos.

Type:

This issue concerns instructional information.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

The following sections (and possibly others) are duplicated between the
[Basic Install](https://docs.litmuschaos.io/docs/getting-started/installation)
and
[Advanced Install](https://docs.litmuschaos.io/docs/user-guides/chaoscenter-advanced-installation):

- Prerequisites
- Install Litmus using Helm
- Install Mongo
- Verify your installation
- Accessing the ChaosCenter
- Hosted (Beta) (information at the top of the tab)

Instead, consider consolidating the basic and advanced install onto one page
using the following outline:

- Installation (one page for both basic and advanced installation)
  - Prerequisites (the following two items could be in clickable tabs, or one
    after the other with a note to skip the one you don't use.)
  - Install Litmus using Helm
  - Install Litmus using kubectl (the following two items could be in clickable
    tabs, or one after the other with a note to skip the one you don't use.)
    - Basic install
    - Advanced install
  - Verify your installation
  - Accessing ChaosCenter

Alternatively, each main bullet item could be its own page, and each page linked
to from its predecessor's "Next steps" heading at the end of the procedure.

## Issue: - Move contributor info out of intro

Move "How to Contribute" out of the
["What is Litmus"](https://docs.litmuschaos.io/docs/introduction/what-is-litmus)
page. "What is Litmus" is introductory conceptual material; "How to Contribute"
is advanced instructional information for a different audience.

Audience:

This issue concerns new users of Litmus Chaos.

Type:

This issue concerns conceptual information.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

Remove "How to Contribute" from the
["What is Litmus"](https://docs.litmuschaos.io/docs/introduction/what-is-litmus)
page. Move it to the
[Community](https://docs.litmuschaos.io/docs/introduction/community) page, under
or near the "Contribute" section.

## Issue: Make ToC agree with content headings

The "Overview" pages in the "Concepts" guide and the User guide both contain
synopses of the content within their guides. The table of contents (TOC) on the
left displays links to those same sections. To facilitate navigation the
information in the overviews should exactly parallel the TOC.

Reorder the "Concepts" table of contents (TOC) so that the items appear in the
same order as they do on the Overview page. In cases where an item is missing
from one or the other, add it so they agree. In cases where the title of the
item is not the same (for example, "Event Triggered Chaos using GitOps" and
"Configuring GitOps"), change one so they agree.

Similarly, make the User Guides TOC agree with the User Guides Overview.

Audience:

This issue concerns all users of Litmus Chaos.

Type:

This issue concerns organizing all documentation information.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

Move, rename, and add sections in the User Guide Overview so that it has the
same sections as shown for the User Guides in the TOC:

- Advanced Installation
- Environments
- Chaos Infrastructure
- Injecting Fault
- Resilience Probes
- Account Settings
- User Management
- Managing Projects
- Teaming
- Configuring GitOps
- Using different image registries
- Uninstall Litmus

Move, rename, and add sections in the Concepts Overview so that it has the same
sections as shown for Concepts in the TOC:

- Chaos Infrastructure
- ChaosHub
- Chaos experiment
- Resilience Probes
- User management
- Projects
- Teaming
- GitOps
- Authentication in ChaosCenter

Also, make sure the TOC entries have consistent capitalization and agree with
the Overview headings. For example, "Chaos experiment" is sentence-style
capitalization; "Chaos Experiment" is title capitalization. Pick one or the
other for the site. Don't mix and match.

## Issue: Move instructional material from Concepts to User Guide

### Overview

Currently, instructional information is in the User Guide, but some procedures
have been embedded in the "Concepts" section. These procedures should be in one
place so that users can "shop" in one place for instructions on what they need
to do. You can then provide links from the procedure to the relevant Concept,
and vice versa.

Audience:

This issue concerns technical users of Litmus Chaos.

Type:

This issue concerns instructional information.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

Here's a suggested course of action for each subsection in Concepts:

| Concept                                                                                                      | Documentation change                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ChaosHub -> Prerequisites, Connecting to a Git Repository using ChaosHub                                     | Move to User Guide -> Connecting to a Git Repository                                                                                                                                                                                                      |
| ChaosHub -> Syncing a ChaosHub                                                                               | Move to User Guide -> Syncing a ChaosHub to GitHub                                                                                                                                                                                                        |
| ChaosHub -> Editing a ChaosHub                                                                               | Move to User Guide -> Editing a ChaosHub (expand these instructions)                                                                                                                                                                                      |
| ChaosHub -> Chaos experiments and experiments in a ChaosHub -> View the PreDefined Chaos Experiments         | Move to User Guide -> Viewing Predefined Chaos Experiments                                                                                                                                                                                                |
| ChaosHub -> Chaos experiments and experiments in a ChaosHub -> View the Chaos faults, View the fault details | Move to User Guide -> Viewing Chaos Faults                                                                                                                                                                                                                |
| ChaosHub -> Disconnect a ChaosHub                                                                            | Move to User Guide -> Removing a ChaosHub                                                                                                                                                                                                                 |
| Chaos experiment -> Prerequisites, Defining and executing a chaos experiment                                 | Move to User Guide -> Executing a chaos experiment                                                                                                                                                                                                        |
| Resilience Probe                                                                                             | This seems to be conceptual information, but corresponding procedures should certainly be written. Reserve the word "Prerequisites" for conditions that must be met before doing a procedure. For conceptual information, instead say "Related concepts". |
| User management                                                                                              | This section correctly provides conceptual information and points the reader to the corresponding procedures in the User Guide. Model the other sections after this.                                                                                      |
| Projects -> Prerequisites                                                                                    | Again, don't overload the term "Prerequisites"; say "Related concepts".                                                                                                                                                                                   |
| Collaborate with teams                                                                                       | Again, good conceptual overview with pointers to procedures. Don't change, but rename so that the title of the section is a noun, such as "Team collaboration" (suggesting information rather than task information).                                     |
| GitOps                                                                                                       | "Prerequisites" to "Related concepts".                                                                                                                                                                                                                    |
| Authentication                                                                                               | "Prerequisites" to "Related concepts".                                                                                                                                                                                                                    |

## Issue: Integrate the overview material

### Overview

The following reorganization is suggested:

Move the "Architecture" and "Concepts" section to follow the "Introduction"
section. Integrate Concepts and Architecture to reference each other's content
for a more complete picture of the system.

Audience:

This issue concerns all users of Litmus Chaos.

Type:

This issue concerns conceptual information.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

Concepts and Architecture could be integrated into one description of Litmus
Chaos. Both are good but separate views into the working of Litmus Chaos.
"Architecture" describes the separation of the control and execution planes and
provides sequence diagrams of the Chaos processes; "Concepts" describes the
logical entities that make up the Chaos process. It would be helpful if these
two descriptions referenced each other. For example, a section on a Concept
could point out which steps in the sequence diagram the entity is involved in.

## Issue: Consolidate community resource information

### Overview

The following reorganization is suggested:

Combine the "Community" and "More Resources" sections in the Introduction. They
are all information resources and there little value in separating them.
Consider combining all community resources under a "Community" menu item in the
website banner header and removing from the technical documentation altogether.

Audience:

This issue concerns all users of Litmus Chaos, including potential users
(evaluators) and contributors.

Type:

This issue concerns meta-information (project community resources).

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

Consider combining all community resources under a "Community" menu item in the
website banner header and removing from the technical documentation altogether.

## Issue: Update the User Guide procedures

The User Guides contain stepwise procedures, but these could be written more
clearly.

Audience:

This issue concerns all users of Litmus Chaos.

Type:

This issue concerns instructional information.

### Overview

Procedures are the heart of user documentation, so we discuss them in detail
here. Some guidelines for writing procedures:

- Ensure that tasks are complete. For complex procedures, it's OK to link to
  sub-procedures or (usually better) put preliminary tasks in the Prerequisites
  section.
  - Write instructions in second person (address the readers as "you"). Directly
    tell the reader what to do ("Save and run the experiment. You are redirected
    to the experiment execution page where the experiment execution steps are
    visualized").
- Use gerunds ("-ing" verbs) to title procedure pages; for example "Scheduling a
  chaos experiment" rather than "Schedule a chaos experiment".
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

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

See the outline in the [Overview](#overview-6).

## Issue: Remove or reduce screen shots

Audience:

This issue concerns all users of Litmus Chaos.

Type:

This issue concerns instructional information.

### Overview

There are many large screen shots in the User Guide procedures. These are
problematic for several reasons:

- They take up a lot of space, pushing the actual text far down the page and
  increasing the need to scroll.
- They're difficult to keep up to date: The screenshot should be replaced
  anytime there's a change to the menu in question. This is often neglected,
  making the documentation inaccurate and in many cases confusing the reader.
- Screen shots are more expensive and difficult to translate than the equivalent
  text.

We recommend replacing the screen shots with text-based descriptions of the user
options to be selected. If If an illustration is still required to point out a
GUI element (it usually isn't), crop the screen shot to include the minimum
required vertical height and use a drawing program to highlight the element in
question.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

Replace full-size screen shots with a description of the GUI elements being
documented. If a screen shot is necessary, include only a horizontal slice of
the relevant portion.

## Issue: Document functionality from blog posts

### Overview

There are several good articles in the Litmus Chaos blog that expand and explain
Litmus functionality. Blog posts that run through an end-to-end example would
make good tutorials. If any posts explain core functional capabilities, they
should be included in the Litmus technical documentation so they are findable by
users.

Audience:

This issue concerns all users of Litmus Chaos.

Type:

This issue concerns potentially all types of information.

### Context

This issue tracks recommended changes resulting from an analysis of the Litmus
Chaos documentation commissioned by CNCF. The analysis and supporting documents
are here: https://github.com/cncf/techdocs/tree/main/analyses under
`0013-litmuschaos`.

### Possible Implementation

Here's a list of all the blog posts. Each should be evaluated for technical
documentation content.

- https://litmuschaos.io/blog/litmuschaos-is-joining-kubecon-cloudnativecon-north-america-2024-3blg
- https://litmuschaos.io/blog/introduction-to-k6-load-chaos-in-litmuschaos-4l2k
- https://litmuschaos.io/blog/introduction-to-http-chaos-in-litmuschaos-3hn
- https://litmuschaos.io/blog/gcp-iam-integration-for-litmuschaos-with-workload-identity-2eai
- https://litmuschaos.io/blog/frontend-optimization-at-litmuschaos-1p14
- https://litmuschaos.io/blog/litmuschaos-in-2021-the-year-in-review-38cl
- https://litmuschaos.io/blog/how-to-contribute-blog-posts-for-litmuschaos-3cnp
- https://litmuschaos.io/blog/getting-started-with-litmus-2-0-in-google-kubernetes-engine-4obf
- https://litmuschaos.io/blog/part-2-a-beginner-s-practical-guide-to-containerisation-and-chaos-engineering-with-litmuschaos-2-0-253i
- https://litmuschaos.io/blog/part-1-a-beginner-s-practical-guide-to-containerisation-and-chaos-engineering-with-litmuschaos-2-0-3h5c
- https://litmuschaos.io/blog/litmuschaos-node-memory-hog-experiment-2nj6
- https://litmuschaos.io/blog/analysing-chaos-workflows-with-litmus-portal-4e67
- https://litmuschaos.io/blog/chaos-engineering-with-litmus-portal-on-okteto-cloud-3g57
- https://litmuschaos.io/blog/how-to-use-react-hooks-in-apollo-client-for-graphql-33bh
- https://litmuschaos.io/blog/declarative-approach-to-chaos-hypothesis-using-litmus-probes-5157
- https://litmuschaos.io/blog/litmuschaos-gitlab-remote-templates-6l2
