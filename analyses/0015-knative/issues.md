---
title: Knative Issues
tags: Knative
created: 2025-07-28
modified: 2025-07-28
author: Dave Welsch (@dwelsch-esi)
---

<!-- markdownlint-disable no-duplicate-heading -->

# Separate technical documentation from the project page

## Overview

The Knative project [landing page] redirects to the doc page:
`https://knative.dev/docs/`. The project landing page contains all the elements
you'd expect on an open-source software page, including case studies, user
endorsements, and links to the community.

It also includes the technical documentation in the banner menu. This
arrangement conflates the project and the technical documentation, mixing
marketing and technical information.

It's helpful to users if there's a clear separation between technical
documentation and other information. The technical documentation is goal-driven
and should be factual, specific, and purposeful.

The request: Separate the technical documentation from the project landing page.

Audience: All

Type: All

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/
- https://github.com/knative/docs/

Suggested changes:

The simplest solution to untangling the documentation from the landing page is
probably to:

- Reconfigure the site to use the base URL `https://knative.dev` as the project
  landing page.
- Add a "Documentation" tab on the right alongside "Blog," "About," and
  "Community" on the project page that links to the docs page,
  `https://knative.dev/docs`.
- Move the tech docs items from the banner to the left-hand sidebar (LHS) on the
  tech docs page.
- Remove the version drop-down from the project landing page (and the other
  non-documentation project pages).

# Rename pages

## Overview

Well named pages and headings help users quickly find the right information.
Consistent naming aids in scanning the table of contents, and accurate names
make search more effective.

Audit page and heading titles for consistency and accuracy.

Audience: All

Type: All

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/docs/
- https://knative.dev/docs/client/
- https://knative.dev/docs/getting-started/tutorial/
- https://knative.dev/docs/serving/
- https://knative.dev/docs/eventing/

Suggested changes:

- Remove "About" from titles:
  - "About Installing Knative" > "Installing Knative"
  - "About Eventing Features" > "Eventing Features"
  - and so on.
- Rename "Tutorial" to "Tutorials" (there is more than one tutorial here).
- Make verb tense consistent in procedure titles. Use "-ing" verbs to title
  tasks and processes (this is already done in the majority of cases!):
  - [Configure Broker defaults] > "Configuring Broker defaults"
  - [Install Knative using quickstart] > "Installing Knative using quickstart"
  - and so on.
- In [Serving] and [Eventing], rename "Developer Topics" and "Admin Topics" to
  "Developer Tasks" and "Admin Tasks" to cue readers.
- Retitle this page: [Knative Eventing - The Event-driven application platform
  for Kubernetes] to "Eventing".
- Rename "Knative CLI" to "CLI tools".
- Make TOC titles agree with page titles. Some examples (not a complete list):
  - Change "Install the Knative CLI" in the TOC to match the page title:
    [Installing the Knative CLI].
  - Change the page title: [Metrics] to match "Configuring metrics" in the TOC.
  - Change "About Apache Kafka Broker" in the TOC to match the page title:
    [Knative Broker for Apache Kafka].
- Rename "About" in the landing page banner to something less misleading: "Why
  Knative?", "Testimonials and Case Studies", or "Endorsements".

# Update technical overview

## Overview

Write a conceptual overview of Knative. This should go where the "Concepts"
section is in the current documentation, but be much more comprehensive.

This conceptual overview serves two purposes:

1. It helps potential users evaluate whether Knative is the right solution to
   their problem;
2. It provides all users with enough background information to understand the
   instructional and reference material later in the documentation. User don't
   have to read it all before proceeding, but they will refer to it when they
   don't understand how the product's pieces fit together.

Audience: All

Type: Conceptual

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://knative.dev/docs/concepts/
- https://knative.dev/docs/serving/
- https://knative.dev/docs/serving/architecture/
- https://knative.dev/docs/serving/request-flow/
- Almost any page currently titled "About (something)"

Suggested changes:

Update the "Concepts" page to be a comprehensive conceptual overview of the
entire system. Start with an introduction that explains what the product is and
what problems it is designed to solve. This information should be accessible to
someone who is not an expert container developer or admin. If some background
knowledge is required to understand the concepts, state what that knowledge is.

Follow with a description of the product architecture that explains its
components and how they interoperate. From the CNCF website:

Knative is a developer-focused serverless application layer which is a great
complement to the existing Kubernetes application constructs. Knative consists
of three components: an HTTP-triggered autoscaling container runtime called
“Knative Serving”, a CloudEvents-over-HTTP asynchronous routing layer called
“Knative Eventing”, and a developer-focused function framework which leverages
the Serving and Eventing components, called "Knative Functions".

Finally, explain essential but tangential topics like authentication and
authorization, still at a conceptual level.

# Update Installation to better orient users

## Overview

The installation instructions are generally very good, but there are a few speed
bumps to finding and performing the right installation procedure.

Add "roadmap" information to orient readers in the Installation section of the
documentation.

Audience: Admins and developers

Type: Instructional

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/install

Suggested changes:

On the [Installing Knative] page, provide a roadmap at the top to direct users
to the correct installation. Aside from installing the different components
(Eventing and Serving) using different modalities (YAML, Kubernetes Operator,
and upgrading), disclose what operating systems are supported, and differentiate
between local and server installations.

# Reorganization issues

## Overview

This issue suggests several changes to the documentation's organization to
improve usability and consistency. For example, several pages appear as
"orphans" (single subordinate headings) in the table of contents (TOC). This is
usually avoidable with better organization.

Audience: All

Type: All

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/eventing
- https://knative.dev/docs/eventing/event-mesh/
- https://knative.dev/docs/reference/relnotes/

Suggested changes:

- In the [Eventing] section, move "Event Mesh" under "Concepts".
- Move the [Release Notes] to the top level of the TOC (and change the URL to
  https://knative.dev/docs/relnotes/).
- Make the "Explore Knative" button the landing page link to the conceptual
  overview. Or, change the button label to "Quick Start". Its current label is
  misleading.
- Remove the Eventing FAQ. It has only one entry, and that topic is covered
  elsewhere in the documentation.
- Are [Revisions] the only Knative Resource? Roll this menu up:
  `Serving > Resources > Revisions > About Revisions` to
  `Serving > Revisions > About Revisions`.

# Document the kn CLI on the site

## Overview

The `kn` CLI documentation is maintained in the [/knative/kn] repo, except for
the install instructions, which are on the doc site.

Consolidate the `kn` CLI documentation so that it's maintained in one place.

Audience: Admin and developer

Type: Reference

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/

Suggested changes:

Document the `kn` CLI on the documentation website rather than linking to the
[/knative/kn] repo documentation.

# Revise the Security and threat disclosure page

## Overview

The [Knative Security and Disclosure Information] page has some misleading and
confusing elements. Rewrite the introduction to this page so that it's clear
what procedures and information are available.

Audience: Admin

Type: Instructional

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://knative.dev/docs/reference/security/

Suggested changes:

In [Reference]:

Rewrite the introduction at the top of the page, including the bullet point link
to to the threat model, to:

"This page describes how to validate code and report security vulnerabilities in
Knative. For a complete description of the Knative threat model, see the
[Knative security working group repo]." Then change headings: "Verifying code
signature" and "Reporting a vulnerability."

Rename the heading "Code Signature Verification" to "Verifying a code
signature".

Rename the heading "Report a vulnerability" to "Reporting a vulnerability".

# Add a glossary

## Overview

A software product like Knative typically uses many terms specific to the
product and to its knowledge domain. Users, especially those new to the
software, need help making sense of these terms while reading the documentation.

Add a glossary of terms to the technical documentation.

Audience: All

Type: Reference

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/

Suggested changes:

Add a glossary to the reference section of the documentation. Include terms that
are essential concepts in related software domains (containerization, server and
event architecture, etc.) as well as terms that are specific to Knative. A few
such terms: Custom resource, Eventing, func (CLI), kn (CLI), Operator, Serving,
Sink, Source, Webhook.

A glossary entry should provide readers with a definition of the term, but not
try to explain it in detail. A sentence or two is usually enough. It's OK to
refer to other glossary entries in the definition.

Order the entries alphabetically.

# Review graphics

## Overview

Graphics should enhance understanding by illustrating concepts and processes.
Many graphics on the Knative site detract from, rather than enhance, the
usability of documentation.

Review the graphics on the site to make sure they meet these criteria:

- Does the graphic enhance understanding? Does it add information that can't be
  conveyed in a few words?
- Is the graphic placed in context by the surrounding text?
- Does the graphic's size and aspect ratio enable proper placement and text flow
  on a variety of screens sizes?
- Is the graphic maintainable: Will it require frequent updating for
  localization, software updates, or interface changes?

Review the graphics that are on the site. Remove graphics that don't justify the
space they take up. Scale the graphics to a more appropriate size if necessary.

Audience: All

Type: Conceptual

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://knative.dev/docs/concepts/
- https://knative.dev/docs/concepts/eventing-resources/brokers/
- https://knative.dev/docs/getting-started/tutorial/
- https://knative.dev/docs/getting-started/next-steps/
- https://knative.dev/docs/bookstore/page-0/welcome-knative-bookstore-tutorial/
- https://knative.dev/docs/bookstore/disclaimer/
- https://knative.dev/docs/bookstore/* (all bookstore pages)
- https://knative.dev/docs/serving/architecture/
- https://knative.dev/docs/serving/request-flow/
- https://knative.dev/docs/serving/encryption/encryption-overview/

Suggested changes:

- Briefly introduce the system diagram in the [Concepts overview]. This can be a
  single phrase added to the sentence below the graphic: "The primary Knative
  Serving resources are Services, Routes, Configurations, and Revisions, as
  shown in the previous figure:".
- Similarly for other conceptual graphics on the site: Refer to them from the
  text.

# Edit for conformance to style guide

## Overview

Edit the website for conformance to the [Knative style guide].

Audience: All

Type: All

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/

Suggested changes:

Specific Knative style rules that will have the biggest impact:

- _Use imperatives for headings of procedures._ Technical writing best practice
  has traditionally been to use gerunds ("-ing" verbs), but this is okay as
  well. More important is to be consistent. Use the same form for all procedure
  headings.
- _Use simple and direct language._ To the extent possible, follow the "Voice
  and language" guidelines in the style guide. For example, there are 50
  instances of the word "please" in the Knative documentation. Remove these and
  use simple imperative sentences for instructions.
- _Avoid statements that will soon be out of date._ This addresses
  maintainability. See the [example] in the style guide. There are many
  instances of the word "currently" in the Knative documentation.
- Spell out words to avoid abbreviations. For example: Replace "E2E" with "end
  to end".
- _Use simple and direct language._ For example, from [Concepts]: "The
  documentation in this section explains commonly referenced Knative concepts
  and abstractions, and helps to provide you with a better understanding of how
  Knative works" could be: "This documentation explains what Knative is for and
  how it works."

# Improve troubleshooting

## Overview

Troubleshooting instructions are too terse in Knative. They provide commands for
diagnosing issues, but do not explain a procedure.

Improve troubleshooting by adding explanations.

Audience: All

Type: Instructional

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://knative.dev/docs/install/troubleshooting/
- https://knative.dev/docs/bookstore/page-0.5/environment-setup/#troubleshooting
- https://knative.dev/docs/install/installing-backstage-plugins/#troubleshooting
- https://knative.dev/docs/serving/troubleshooting/debugging-application-issues/
- https://knative.dev/docs/bookstore/page-1/send-review-comment-to-broker/#step-2-create-broker
- https://knative.dev/docs/bookstore/page-2/sentiment-analysis-service-for-bookstore-reviews/#prerequisite-1-install-knative-func-cli

Suggested changes:

Two possible approaches:

1. Expand each troubleshooting step to explain what the step is trying to
   diagnose. (Many of the current troubleshooting steps are no more than "use
   this command to diagnose ..."). Make sure that there are links to each step
   from the procedure where the issue can be encountered.
2. Consolidate all the troubleshooting procedures to a single troubleshooting
   guide, organized by component. Again, provide links to the relevant points in
   the guide from each procedure. Exception: The end-to-end tutorial example has
   a lot of troubleshooting information. As is the case currently, it should
   have its own troubleshooting guide or guides.

# Fill out the Eventing API

## Overview

The Eventing API contains no explanatory or introductory text, and many
descriptions of functions and fields are missing, rudimentary, or tautological.

Improve the explanations in the Eventing API.

Audience: Developers

Type: Reference

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://knative.dev/docs/eventing/reference/eventing-api/

Suggested changes:

Add a brief introduction to the Eventing API, explaining what the API is for,
what kind of API it is (REST, presumably), where to find it, and how to include
it.

Provide semantic information in descriptions about endpoints and fields. Do not
only restate information available from the element name. For example, the
`BackoffPolicyType` option has no explanation. It would be helpful to know what
the backoff is for: "Backoff is the delay before trying to reconnect after
failing to deliver an event" (or whatever). The description of its first value,
"exponential", reads: "Exponential backoff policy". More helpful would provide
more information: "Retry after an exponentially increasing number of seconds (1,
2, 4, 8, and so on)".

# Write a Getting Started page

The Quickstart tutorial is useful, but it doesn't fully orient new users. A
getting started page would help, with meta information about what to expect and
where to go on the documentation site.

## Overview

Audience: New users

Type: Instructional

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/
- https://knative.dev/docs/getting-started/

Suggested changes:

Add a "Getting Started" page at the top level of the documentation. This page
should map a reader's user role and goals to content that helps them install,
evaluate, or learn about the product, depending on their goal. For example,
direct new users to the Quickstart tutorial, evaluators or potential buyers to
the conceptual overview, and so on.

See, for example, getting started pages for:

- [Kubernetes]
- [The Update Framework] (a little unusual because it's a specification, not a
  software product)
- [Python] (a kitchen-sink approach, to be sure)

# Make install downloads findable

Currently the binary install download links in the Installing section redirect
to the release notes, where the list of download files is far down the page.
Move and relabel the download file section so that the files are easy to find.

## Overview

Audience: All

Type: Instructional

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://knative.dev/docs/install/quickstart-install/#__tabbed_1_2
- https://knative.dev/docs/client/install-kn/#__tabbed_1_2
- https://knative.dev/docs/install/operator/knative-with-operator-cli/#__tabbed_1_1
- https://knative.dev/docs/install/operator/knative-with-operator-cli/#__tabbed_1_2
- https://github.com/knative/client/releases

Suggested changes:

Move the install download links to the top of the Release Notes or clearly link
to them from the top of the Release Notes. Or, put them on their own Downloads
page.

Rename the heading for the download files from "Assets" to "Downloads" or
"Install files".

# Truncate search results

## Overview

Audience: All

Type: All

The Search function does not truncate results. For example, the "Puppet" entry
when searching "getting started" displays the page's entire 900 words.

Configure the Search to truncate results after 100 characters or so. Displaying
the entire page text of each result hinders users' ability to find their result.

## Context

This issue tracks recommended changes resulting from an analysis of the Knative
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `0015-knative`.

## Possible Implementation

Related material in the current doc:

- https://github.com/knative/
- https://github.com/knative/docs/blob/main/mkdocs.yml

Suggested changes:

Search result entries are too long. The most straightforward solution is
probably to cut off each search result after a number of characters, say 100 or
so.

This change probably has to be implemented in the `mkdocs` configuration. I'd
start by looking at the [mkdocs config file].

[/knative/kn]: https://github.com/knative/client
[Concepts]: https://knative.dev/docs/concepts/
[Concepts overview]: https://knative.dev/docs/concepts/
[Configure Broker defaults]:
  https://knative.dev/docs/eventing/configuration/broker-configuration/
[Eventing]: https://knative.dev/docs/eventing/
[example]:
  https://github.com/knative/docs/blob/main/contribute-to-docs/style-guide/voice-and-language.md#avoid-statements-that-will-soon-be-out-of-date
[Install Knative using quickstart]:
  https://knative.dev/docs/install/quickstart-install/
[Installing Knative]: https://github.com/knative/install
[Installing the Knative CLI]: https://knative.dev/docs/client/install-kn/
[Knative Broker for Apache Kafka]:
  https://knative.dev/docs/eventing/brokers/broker-types/kafka-broker/
[Knative Eventing - The Event-driven application platform for Kubernetes]:
  https://knative.dev/docs/eventing/
[Knative Security and Disclosure Information]:
  https://knative.dev/docs/reference/security/
[Knative security working group repo]:
  https://github.com/knative/community/blob/main/working-groups/security/threat-model.md
[Knative style guide]:
  https://github.com/knative/docs/tree/main/contribute-to-docs/style-guide
[Kubernetes]: https://kubernetes.io/docs/setup/
[landing page]: https://knative.dev/
[Metrics]: https://knative.dev/docs/serving/autoscaling/autoscaling-metrics/
[mkdocs config file]: https://github.com/knative/docs/blob/main/mkdocs.yml
[Python]: https://wiki.python.org/moin/BeginnersGuide
[Reference]: https://knative.dev/docs/reference/
[Release Notes]: https://knative.dev/docs/reference/relnotes/
[Revisions]: https://knative.dev/docs/serving/revisions/
[Serving]: https://knative.dev/docs/serving/
[The Update Framework]: https://theupdateframework.io/docs/getting-started/
