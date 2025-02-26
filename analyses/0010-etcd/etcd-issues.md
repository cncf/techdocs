---
title: etcd Umbrella Issue
cSpell:ignore: reconf
---

# Overview

Here is an outline of the recommended changes to the etcd documentation.
Proposed issues to be added to the project repo follow.

- Complete and update instructional documentation.
  - Describe etcd's user roles (personas). Split the Operator persona into two:
    For standalone etcd installations, and for Kubernetes backstore
    installations.
  - Convert tutorials to tasks. The "tutorials" as presented in the current doc
    are actually granular tasks. Document key tasks as procedures rather than
    tutorials.
  - Document or link to Kubernetes backstore installation procedures.
  - Document Linux installation procedures.
  - Update and clarify quick start and new user workflows.
  - Revise the Installation guide.
  - Make the Developer Guide task-oriented.
  - Make the Operations Guide task-oriented.
- Reorganize the documentation.
  - Make instructional documentation (tasks and procedures) easier to find by
    putting them in their own section (like the tutorials currently are).
  - Move _project_ documentation (documentation for OSS contributors) to the
    etcd GitHub repo. Move _product_ documentation (documentation for those who
    use the etcd software, in any capacity) to the technical documentation in
    the website repo.
  - Rename the "Learning" section to something more descriptive such as
    "Technical Overview", and move it near the top of the table of contents.
  - Consolidate all reference information (APIs and Glossary) to a
    reference-specific section.
  - Remove information about old software revisions from the current version's
    docs if it's not necessary for a significant segment of users. This includes
    upgrade procedures and performance benchmarks.

# Complete and update instructional documentation

## Issue: Describe etcd's user roles

In an "Overview" or "Start here" page, outline etcd's user roles or personas,
including:

- _Evaluator_: Someone trying to determine whether etcd is appropriate for their
  product, project, or organization.
- _Admin or Operator_: Someone responsible for setting up and maintaining a
  standalone (non-Kubernetes-backstore) production etcd service.
- _Kubernetes Admin_: Someone responsible for a Kubernetes cluster using etcd as
  a backstore.
- _Developer_: Someone incorporating or integrating etcd into an application or
  service.

In each user role section, provide a link to the beginning of a "getting
started" workflow, either a Quick-start or Installation instructions.

## Issue: Convert Tutorials to Tasks

Rename the "Tutorials" section "Tasks". Split this Task section by user role and
put the resulting two sections in their respective user guides: Developer and
Operations.

Rename each task by removing "How to" and using the "-ing" verb form. Make steps
in each task explicit; one-step tasks are okay.

Rewrite each Tutorial as step-by-step instructions for a single task in an
individual description. The goal is to walk the user through the completion of
the task. For example, the [How to access etcd][access-tutorial] tutorial should
be two separate tasks: "Writing to etcd on the CLI" and "Reading from etcd on
the CLI".

## Issue: Write installation instructions for Kubernetes

Write the procedure
[Installation as part of Kubernetes installation](https://etcd.io/docs/v3.5/install/#installation-as-part-of-kubernetes-installation),
or link to Kubernetes documentation that includes etcd installation as
backstore. Explain and fill in (on the etcd docs page) any gaps in the
procedure.

## Issue: Write Linux installation instructions

Write
[installation instructions for Linux](https://etcd.io/docs/v3.5/install/#linux).

## Issue: Update quickstart and new user workflows

Rename to "Quick start" (two words). Add a "Prerequisites" section and revise
the "What's next" section to focus on two separate paths, Development and
Operations. Write separate "Getting started" workflows for Developer and
Operator users. For the developer path, link to the "Set up a local cluster"
page rather than the install page.

## Issue: Revise the installation guide

In the introduction to the installation instructions, briefly describe why a
user should prefer using one installation procedure over another. Distinguish
between production installations and local clusters for development or demo
purposes. Include a link to the page for setting up a local cluster.

Consider separating the install procedures and putting each on its own separate
page.

## Issue: Make the Developer Guide task-oriented

The Developer Guide should contain instructional content (tasks, procedures,
tutorials) for developers looking to use etcd in an application. In general,
rewrite instructional sections in this guide to be step-by-step tasks. Move
reference material into an omnibus reference section or into a reference section
at the end of the Developer Guide.

Since there are such a large number of APIs and supported interfaces, consider
organizing this information by language or providing an index page to
language-specific task and reference pages.

Following are comments on the existing sections within the Developer Guide.

### Discovery service protocol

What is the use case for this information? If it's to enable a developer to
programmatically discover a cluster, leave it here. It might also belong in the
Operations guide, perhaps in the Clustering Guide (but link to the same page,
don't duplicate it).

### Set up a local cluster

Make this the first section in the Developer guide. Link from the Developer
Quick start -- this is the server install that a developer should see first, not
the (Production) Install page.

### Why gRPC gateway

This section is mostly about how to use the gRPC gateway. Put the introductory
material (that describes why you'd want to use gRPC) in the system overview.
Present the rest as a task or tasks in the Tasks section of the Developer Guide.
A complete reference to the options should be available in the Reference
section.

### gRPC naming and discovery

Include the tasks from this section in the gRPC section of the Developer tasks.
Include explanatory material in the system overview with the gRPC explanation.

### etcd features

This information is a duplicate of the
[Features](https://github.com/etcd-io/etcd/blob/main/Documentation/contributor-guide/features.md)
maturity information in the repo. Remove from the Developer guide, but reference
the repo Features article from the release notes.

## Issue: Make the Operations guide task-oriented

The Operations Guide should contain instructional content (tasks, procedures,
tutorials) for admins looking set up a production etcd service. In general,
rewrite instructional sections in this guide to be step-by-step tasks. Move
reference material into an omnibus reference section or into a reference section
at the end of the Operations Guide.

Split the Operations guide into two parts for two distinct user roles: one for
Operators of standalone installations of etcd, one for Kubernetes Admins using
etcd as a backing store. Link from/to page rather than duplicating information
common to both. Similarly, link from/to the Kubernetes project documentation in
the etcd Kubernetes Admin docs to avoid duplicating documentation if practical;
however, duplication is preferable to leaving something undocumented.

Following are comments on the existing sections within the Operations Guide.

### Issue: Authentication guides > Authentication

Incomplete. Write as a procedure.

### Configuration options

Move to Reference section.

### Transport security model

Rename to "Setting up transport layer security".

### Clustering guide

Consider breaking up into one page per procedure.

### Failure modes

This is conceptual information. Consider moving to the system overview. What to
actually do in case of a failure, for example the following "Disaster recovery"
section, should be in the Troubleshooting section.

### Disaster recovery

Move to the Troubleshooting section.

### Hardware recommendations

This is a system prerequisite. Create a Prerequisites page in the Cluster
Installation section.

### Maintenance

Consider providing a more specific, task-oriented title like "Maintaining a
cluster".

### Design of runtime reconfiguration

Move conceptual information from this page to the architecture overview. Replace
this page with a procedure ("Reconfiguring a running cluster").

### Supported platforms

Combine with [Hardware recommendations](#hardware-recommendations) in a System
Prerequisites section.

### Versioning

Rename to "Versioning policy". Move to the top of the version list. Put a link
to this version policy in every Release notes.

Add a documentation versioning policy that describes when a new version of the
documentation is written (major releases?); when documentation is updated
instead (minor releases?); when release notes are written (major and minor
releases but not patches?); and when documentation is archived.

# Reorganize the documentation

Move reference and conceptual topics out of the task-based documentation and
into their own (new, if necessary) sections. Write documentation as needed to
fill gaps in the conceptual or reference sections.

## Issue: Reorganize the documentation

Reorganize the documentation to follow this suggested outline:

- Architectural and system overview (Much of the current "Learning" section)
- "Start here" overview:
  - Explanation of user roles and use cases
  - Quick start for each user role
  - Detailed installation and configuration for each user role (Contents of
    current "Installation" page plus Local cluster install)
- Developer guide
- Operator guide
- Troubleshooting
- Reference
  - Configuration
  - CLIs
  - APIs
  - Logs and error messages
  - Glossary
- Release notes

The goal is to organize the site around the task documentation so that users can
find instructions for what they need to do quickly and navigate there directly.
Conceptual and reference information should be separate, and linked where
necessary to support this goal.

The following tables contain suggested ToC additions, page deletions, and page
moves. Conceptual and task documentation requiring writing or rewriting are
described in separate Issues.

### Add sections

Sections to be added to the table of contents.

| Section         | Description                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Reference       | A library of reference documents: APIs, CLIs, configuration options, and anything else a user might need to look up to complete a task. |
| Troubleshooting | A list of procedures for diagnosing and fixing problems.                                                                                |
| Release Notes   | The cumulative release notes for the major and minor release.                                                                           |

### Remove pages

Pages to be removed entirely or cannibalized and their contents integrated
elsewhere. Links (listed in the table) will need to be removed or updated as
well. If the page duplicates or largely overlaps information on another page,
that page is listed as "Redundant with". Page URLs are relative to
`https://etcd.io/docs/v3.5/`.

| Page                             | Links                                                                                | Redundant with                          | Suggested action                                                              |
| -------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------- | ----------------------------------------------------------------------------- |
| demo/                            |                                                                                      | op-guide/authentication/authentication/ | Remove                                                                        |
| dev-internal/discovery_protocol/ | op-guide/clustering/                                                                 | dev-guide/discovery_protocol/           | Remove                                                                        |
| /dev-guide/interacting_v3/       | dev-guide/local_cluster/                                                             | tutorials/\*.md                         | [Consolidate under "Tasks"](#issue-convert-tutorials-to-tasks)                |
| op-guide/recovery/               | op-guide/failures/, op-guide/runtime-configuration/, op-guide/runtime-reconf-design/ |                                         | Incorporate into Troubleshooting guide                                        |
| op-guide/data_corruption/        | op-guide/monitoring/                                                                 |                                         | Incorporate into Troubleshooting guide                                        |
| upgrades/                        |                                                                                      |                                         | Remove or archive old upgrade paths if they're no longer needed or supported. |
| dev-guide/features/              |                                                                                      |                                         | Remove from the Developer guide. See [etcd features](#etcd-features).         |

### Move pages

Pages to be moved as-is, usually under an organizing heading. Links (listed in
the table) will need to be updated. Page URLs are relative to
`https://etcd.io/docs/v3.5/`.

| Page                                    | Links                           | Suggested action                                                                                                                                              |
| --------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| metrics/                                |                                 | Move to the Operations Guide.                                                                                                                                 |
| learning/glossary/                      |                                 | Move to Reference section.                                                                                                                                    |
| tuning/                                 | op-guide/hardware/, quickstart/ | Move to the Operations Guide.                                                                                                                                 |
| dev-internal/logging/                   |                                 | Move to the Reference section. Link from the Operations guide.                                                                                                |
| dev-internal/modules/                   |                                 | Move to Architecture overview.                                                                                                                                |
| integrations/                           | quickstart/                     | Move to the Reference section. Consider organizing by user role , or labeling each tool or library by user role.                                              |
| integrations/#projects-using-etcd       | quickstart/                     | Move to a logo wall or at least to its own page on the website.                                                                                               |
| reporting_bugs/                         |                                 | Combine with the "Triage" topics and move to the repo's Contributor guide. Link from the Troubleshooting guide.                                               |
| faq/                                    |                                 | Move to near the end of the ToC.                                                                                                                              |
| dev-guide/api_reference_v3/             | op-guide/runtime-configuration/ | Move to the Reference section.                                                                                                                                |
| dev-guide/api_concurrency_reference_v3/ |                                 | Move to the Reference section.                                                                                                                                |
| op-guide/container/                     |                                 | Put in the Clustering Guide.                                                                                                                                  |
| op-guide/configuration/                 | quickstart/                     | Put in the Reference section.                                                                                                                                 |
| upgrades/                               |                                 | Move to the Operations guide.                                                                                                                                 |
| triage/                                 |                                 | Move to the repo and provide a link from the documentation (release notes) to create a cleaner separation of product documentation and project documentation. |

## Issue: Move release notes to user documentation

Move the release notes out of the repo and into to the user documentation.

Release notes should include:

- New and changed features
- Known issues
- Updated roadmap information
- Upgrade procedures
- All release-specific information

## Issue: Consolidate all reference information

Consolidate all reference information (APIs and Glossary) to a
reference-specific section.

Or, create user role-specific reference sections within the Developer and
Operations guides. Since some of the material overlaps, a single reference
section is probably easier.

## Issue: Revise the FAQ

Longer explanations in the FAQ might be better as part of conceptual information
-- for example, in the system or architecture overview. Retain the short answers
that don't fit elsewhere.

## Issue: Create a System Overview

Rename the "Learning" section to "System Overview" or "Conceptual Overview".
This is the place for detailed explanations of the system philosophy, design,
and architecture. Edit the content, limiting it to explaining concepts. Move
instructional and reference topics to their own areas of the documentation.

Move the section to earlier in ToC, perhaps before "Installation".

Recommendations follow for existing subsections of "Learning".

### Data model

Include in architecture overview.

### etcd client design

Include in architecture overview. Remove the Glossary and merge it into the site
wide Glossary.

### etcd learner design

Include in architecture overview. Eliminate references to previous and future
releases; describe the current release only. Put comparisons to other releases
in the release notes, if relevant.

### etcd v3 authentication design

Include in architecture overview.

### etcd API

Include in architecture overview.

### KV API guarantees

Include in architecture overview. Rename to "Key-value API guarantees".

### etcd versus other key-value stores

I think this properly belongs on the webpage as an evaluation tool, but if
there's a case for comparing etcd to other KV stores as an instructional
strategy, leave it in the system overview. In either case, it needs to be
updated.

## Issue: Relocate Benchmarks

Mostly redundant with Benchmark section in Operations guide > Performance. Move
any non-redundant info to Performance section in Operations guide.

Remove old benchmarks if they're no longer needed.

## Issue: Remove "Upgrading > Upgrading etcd clusters and applications"

If the intent of this page is to explain upgrade paths that span more than one
release, make that clear in an introduction and write an explicit procedure for
each path. If such a guide isn't needed, then remove this page.

<!--- References --->

[etcd-analysis]: ./etcd-analysis.md
[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
[access-tutorial]: https://github.com/etcd-io/website/issues/790
