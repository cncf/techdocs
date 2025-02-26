---
title: Implementing etcd Doc Improvements
tags: etcd
---

# Introduction

This document provides actionable suggestions for improving the etcd technical
documentation.

For an analysis and general discussion of recommendations on etcd technical
documentation, see [etcd-analysis.md][etcd-analysis].

## Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards,
and suggests possible improvements. In most cases there is more than one way to
do things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. The recommended implementations represent the reviewers' experience
with how to apply those best practices. In other words, borrowing terminology
from the lexicon of [RFCs][rfc-keywords], the changes described here should be
understood as "recommended" or "should" at the strongest, and "optional" or
"may" in many cases. Any "must" or "required" actions are clearly denoted as
such, and pertain to legal requirements such as copyright and licensing issues.

The top-level documentation recommendations for this project are:

- Complete and update instructional documentation:
  - Describe etcd's user roles (personas).
  - Document Kubernetes and Linux installation procedures.
  - Update and clarify quick start and new user workflows.
  - Document key tasks as procedures rather than tutorials.
  - Clarify which user roles (personas) each task is for.
  - Going forward, write release notes for each major and minor release.
- Reorganize the documentation.
  - Move _project_ documentation (documentation for OSS contributors) to the
    etcd GitHub repo. Move _product_ documentation (documentation for those who
    use the etcd software, in any capacity) to the technical documentation in
    the website repo.
  - Make instructional documentation (tasks and procedures) easier to find by
    putting them in their own section (like the tutorials currently are). Rename
    the "Tutorials" section to "Tasks". The tutorials in the current doc are
    actually granular tasks.
  - Rename the "Learning" section to something more descriptive such as
    "Technical Overview", and move it near the top of the table of contents.
  - Consolidate all reference information (APIs and Glossary) to a
    reference-specific section.
  - Remove information about old software revisions from the current version's
    docs if it's not necessary for a significant segment of users. This includes
    upgrade procedures and performance benchmarks.

# Implementation: Complete and update documentation

In general, ensure that task-based documentation is complete and accurate. Write
common tasks as step-by-step instructions in individual descriptions, each with
the goal of walking the user through completion of the task. This is distinct
from tutorials, which are designed to teach the user how to accomplish a more
complex use case.

Currently, the "Tutorials" section in the documentation contains tasks that
should be documented as such.

For example, the [How to access etcd][access-tutorial] tutorial should be two
separate tasks: "Writing to etcd on the CLI" and "Reading from etcd on the CLI".

Name the tasks using gerund phrases ("-ing" form, like "Reading ..." and
"Writing ..."). Eliminate "How to", which clutters the heading with a redundant
phrase that the user must skip over.

## Describe etcd's user roles

In an "Overview" or "Start here" page, outline etcd's user roles or personas.
These probably include:

- _Evaluator_: Someone trying to determine whether etcd is appropriate for their
  product, project, or organization.
- _Admin or Operator_: Someone responsible for setting up and maintaining a
  standalone (not installed as the backstore for Kubernetes) production etcd
  service.
- _Kubernetes Admin_: Someone responsible for installing and maintaining a
  Kubernetes cluster that uses etcd as the backstore.
- _Developer_: Someone incorporating or integrating etcd into an application or
  service.

## Write installation instructions for Kubernetes

"Installation as part of Kubernetes installation" is missing. This is a task for
the Kubernetes Admin role. The etcd install page can link to Kubernetes
documentation, especially in cases where the Kubernetes installation process
automatically includes the etcd install. The etcd documentation should include
etcd-specific instructions that aren't included in the Kubernetes doc. If in
doubt, duplicating instructions between the two products is preferable to
omitting documentation.

## Write Linux installation instructions

Linux installation instructions are missing ("TDB") from the Installation page.
Write and test a procedure for this.

## Update quickstart and new user workflows

Write separate "Getting started" workflows for Developer, Standalone Operator,
and Kubernetes Admin users. Again, the Kubernetes Admin documentation can link
to coverage in the Kubernetes documentation, but the writer should ensure that
major use cases are covered, including adding details in the etcd documentation
if necessary.

# Reorganize the documentation

## General reorganization

Reorganized the documentation to contain the following main elements:

- Architectural and system overview (Much of the current "Learning" section)
- "Start here" overview:
  - Explanation of user roles and use cases
  - Quick start for each user role
  - Detailed installation and configuration for each user role (Contents of
    current "Installation" page)
- Developer guide
- Operator guide
  - Standalone etcd installation
  - Kubernetes Admin
- Troubleshooting
- Reference
  - Configuration
  - CLIs
  - APIs
  - Logs and error messages
  - Glossary
- Release notes

Following are specific recommendations for each section of the documentation.

**Quickstart**: Rename to "Quick start" (two words). Add a "Prerequisites"
section and revise the "What's next" section to focus on three separate paths:

- Development
- Operations
- Kubernetes backstore

For the developer path, link to the "Set up a local cluster" page rather than
the install page.

**Demo**: Redundant with Operations guide > Authentication guides >
Authentication. Remove from the ToC.

**Tutorials**: Rename "Tasks". Rename each task by removing "How to" and using
"-ing" verb form. Make steps in each task explicit; one-step tasks are okay.
Organize by user role: Developer, Operator, or Kubernetes Admin, or put each
roles' tasks in the corresponding guide.

**Install**: Rename "Installation" and put each installation on a separate page,
collapsible in the ToC. Each should contain Prerequisites, step-by-step
instructions, and a "What's next?" section.

**FAQ**: Move to near the end of the ToC. Longer explanations in the FAQ might
be better as part of conceptual information -- for example, in the system or
architecture overview.

**Libraries and tools**: Move to the Reference section. Consider organizing by
user role, or labeling each tool or library by user role. Move "Projects using
etcd" to a logo wall or at least to its own page on the website.

**Metrics**: Move to the Operations Guide.

**Reporting bugs**: Combine with the "Triage" topics and move to the repo.
Include references to this contributor information in the Developer and
Operations guides.

**Tuning**: Move to the Operations Guide.

**Discovery service protocol**: This page is duplicated in the Developer Guide;
see the note there. Remove it from here.

**Logging conventions**: Move to the Operations Guide or the Reference section.

**Golang modules**: Remove from the ToC. Include this information in the
architecture overview.

**Learning**: Rename/revamp as "System Overview" or "Architecture Overview"
explaining the conceptual underpinnings of etcd. Move to earlier in ToC, perhaps
before "Installation". Recommendations for existing subsections follow.

**_Data model_**: Include in architecture overview.

**_etcd client design_**: Include in architecture overview.

**_etcd learner design_**: Include in architecture overview.

**_etcd v3 authentication design_**: Include in architecture overview.

**_etcd API_**: Include in architecture overview.

**_KV API guarantees_**: Include in architecture overview.

**_etcd versus other key-value stores_**: I think this properly belongs on the
webpage as an evaluation tool. Also, it needs to be updated.

**_Glossary_**: Move to Reference section.

**Developer guide**: This should contain instructional content (tasks,
procedures, tutorials) for developers looking to use etcd in an application.
Since there are such a large number of APIs and supported interfaces, consider
organizing this information by language, at least partially. In general,
consider rewriting sections in this guide to be step-by-step tasks.

**_Discovery service protocol_**: What is the use case for this information? If
it's to enable a developer to programmatically discover a cluster, leave it
here. It might also belong in the Operations guide (but link to the same page,
don't copy it), perhaps in the Clustering Guide.

**_Set up a local cluster_**: Make this the first section in the Developer
guide. Link from the Developer Quick start rather than sending a developer to
the Install page.

**_Interacting with etcd_**: This page is largely redundant with the Tutorials.
Make each task its own page, and consolidate with Tasks as described in
"Tutorials" above.

**_Why gRPC gateway_**: Put the introductory material (that describes why you'd
want to use gRPC) in the system overview. Present the rest of as its own
sub-guide in the Tasks section or as a guide in the Developer Guide. A complete
reference to the options should be available in the Reference section.

**_gRPC naming and discovery_**: Combine with the gRPC gateway sub-guide (See
Why gRPC gateway).

**_etcd features_**: Rename "Feature lifecycle" or "Feature maturity". This
information might belong in the system overview, but it seems relevant to
developers and admins alike. Also, reference this article from the release
notes.

**_API reference_**: Move to Reference section.

**_API reference: concurrency_**: Move to Reference section.

**Operations guide**: Split into guides for two distinct user roles: Operators
of standalone etcd installations, and Kubernetes admins using etcd as the
Kubernetes backing store. The Kubernetes Admin guide can link to the Kubernetes
technical documentation and the standalone Operations guide where necessary;
this is usually preferable to duplicating information. The Kubernetes and etcd
projects should communicate about how best to document etcd operation in
Kubernetes; as far as I can tell this has not been done. In general, consider
rewriting sections in this guide to be step-by-step tasks; in many cases it's
not immediately clear what to do, even if CLI examples are given.

**_Authentication Guides_**

**_Authentication_**: Incomplete.

**_Configuration options_**: Move to Reference section.

**_Transport security model_**: Rename to "Setting up transport layer security".

**_Clustering Guide_**: Consider breaking up into one page per procedure.

**_Run etcd clusters inside containers_**: Put in the Clustering Guide.

**_Failure modes_**: Conceptual information. Consider moving to the architecture
overview. What to actually do in case of a failure should be in a
Troubleshooting section, like for example the following "Disaster recovery"
section.

**_Disaster recovery_**: Consolidate with other troubleshooting procedures.

**_Hardware recommendations_**: System prerequisite. Move to somewhere before
the Cluster Installation section; maybe even put it in a prerequisite heading in
that section.

**_Maintenance_**: Maybe provide a more specific title like "Storage
maintenance".

**_Design of runtime reconfiguration_**: Move to architecture overview.

**_Supported platforms_**: Combine with Hardware recommendations in a System
Prerequisites section.

**_Versioning_**: Rename to "Versioning policy". Add a documentation versioning
policy. Move to top of version list. Put a link to this version policy in every
release notes.

**_Data Corruption_**: Move to Troubleshooting section.

**Benchmarks**: Mostly redundant with Benchmark section in Operations guide >
Performance. Move any non-redundant info to the Performance section in the
Operations guide. Remove benchmarks of unsupported versions.

**Upgrading**: Move to the Operations guide. Remove old upgrade paths if they're
no longer needed or relevant.

**_Upgrading etcd clusters and applications_**: As far as I can tell, this page
just lists the upgrade pages and isn't needed.

**Triage**: Suggest putting this information for users and contributors in the
repo and providing a link from the documentation to create a cleaner separation
of product documentation and project documentation. Put the link in the intro to
the Troubleshooting section.

## Move release notes

Consider moving release notes to the documentation (from the code repo) on the
basis that they are user, rather than contributor, documentation.

Release notes should include:

- New and changed features
- Known issues
- Updated roadmap information
- Upgrade procedures

<!--- References --->

[etcd-analysis]: ./etcd-analysis.md
[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
[access-tutorial]: https://github.com/etcd-io/website/issues/790
