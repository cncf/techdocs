---
title: Implementing etcd Doc Improvements
tags: etcd
---

# Introduction

This document provides actionable suggestions for improving the etcd technical documentaiton.  

For an analysis and general discussion of recommendations on etcd technical documentation, see [etcd-analysis.md][etcd-analysis].

## Recommendations, requirements, and best practices

Notwithstanding the fact that this analysis measures documentation against CNCF project maturity standards, in most cases there is more than one way to do things. Few recommendations here are meant to be prescriptive. Rather, recommendations are based on documentation best practices as understood by the reviewers. The recommended implementations represent the reviewers' experience with how apply those best practices. In other words, borrowing terminology from the lexicon of [RFCs][rfc-keywords], the changes described here should be understood as "recommended" or "should" at the strongest, and "optional" or "may" in many cases. Any "must" or "required" actions are clearly denoted as such, and pertain to legal requirements such as copyright and licensing issues. 

The top-level documentation recommendations for this project are:

- Complete and update instructional documentation for important use cases:
    - Describe etcd's user roles (personas).
    - Audit the documentation to ensure important use cases are covered.
    - Document Kubernetes and Linux installation procedures.
    - Update and clarify quick start and new user workflows.
    - Document important tasks as procedures rather than tutorials.
    - Clarify which user roles (personas) each task is for. 
- Reorganize the documentation.
    - Make instructional documentation (tasks and procedures) easier to find by putting them in their own section (like the tutorials currently are). Rename the "Tutorials" section to "Tasks". The tutorials in the current doc are actually granular tasks.
    - Rename the "Learning" section to something more descriptive such as "Technical Overview", and move it near the top of the table of contents.
    - Consolidate all reference information (APIs and Glossary) to a reference-specific section.
    - Remove information about old software revisions from the current version's docs if it's not necessary for a significant segment of users. This includes upgrade procedures and performance benchmarks.


# Implementation: Complete and update documentation for important use cases

Ensure that task-based documentation is complete and accurate. Common tasks should be described step-by-step in individual descriptions, each with the goal of walking the user through completion of the task. This is distinct from tutorials, which are designed to teach the user how to accomplish a more complex use case. 

Currently, the "Tutorials" section in the documentation contains tasks that should be documented as such. For example, the [How to access etcd][access-tutorial] tutorial should be two separate tasks: "Writing to etcd on the CLI" and "Reading from etcd on the CLI".

Name the tasks using gerund phrases ("-ing" form, like "Reading ..." and "Writing ..."). Eliminate "How to", which clutters the heading with a redundant phrase that the user must skip over. 

## Audit task-based documentation

We recommend that the project audit the documentation to ensure that instructions exist for all tasks required for mainstream use cases. This includes "getting started" tasks such as installation, configuration, and server tuning; maintenance tasks such as cluster reconfiguration and upgrades and dependency management; product use, including configuration with popular products; and development, especially integrating key storage and retrieval with new products using existing APIs. 

## Write installation instructions for Kubernetes

"Installation as part of Kubernetes installation" is entirely missing ("TBD–Help wanted") on the Installation page.

## Write Linux installation instructions

Linux installation instructions are missing ("TDB") from the Installation page.

## Update quickstart and new user workflows




# Reorganize the documentation

Here are specific recommendations for each section of the documentation. While these are only suggestions, if implemented they will bring the site more in line with documentation best practices.


**Quickstart**: Leave here. Rename to "Quick start" (two words). Add a "Prerequisites" section and revise the "What's next" section to focus on two separate paths, Development and Operations. For the developer path, link to the "Set up a local cluster" page rather than the install page.

**Demo**: Redundant with Operations guide > Authentication guides > Authentication. Remove from the ToC.

**Tutorials**: Rename "Tasks". Rename each task by removing "How to" and using "-ing" verb form. Make steps in each task explicit; one-step tasks are okay. Organize by user role: Developer, Operator, or both, or put each roles' tasks in the corresponding guide.

**Install**: Rename "Installation" and put each installation on a separate page, collapsible in the ToC. Each should contain Prerequisites, step-by-step instructions, and a "What's next?" section. Consider moving to the Operations guide.

**FAQ**: Move to near the end of the ToC. Longer explanations in the FAQ might be better as part of conceptual information in the system or architecture overview, for example.

**Libraries and tools**: Move to the Reference section. Consider labeling each tool or library for what user role will find it useful. 

**Metrics**: Move to the Operations Guide.

**Reporting bugs**: Combine with the "Triage" topics and move to the repo. Include references to this contributor informationin the Developer and Operations guides.

**Tuning**: Move to the Operations Guide.

**Discovery service protocol**: This page is duplicated in the Developer Guide; see the note there. Remove it from here.

**Logging conventions**: Move to the Operations Guide.

**Golang modules**: Remove from the ToC. Include this information in the architecture overview.

**Learning**: Rename/revamp as "System Overview" or "Architecture Overview" and include sections that explain the conceptual underpinnings of etcd. Move to earlier in ToC, perhaps before "Installation". Recommendations for existing subsections follow.

***Data model***: Include in architecture overview.

***etcd client design***: Include in architecture overview.

***etcd learner design***: Include in architecture overview.

***etcd v3 authentication design***: Include in architecture overview.

***etcd API***: Include in architecture overview.

***KV API guarantees***: Include in architecture overview.

***etcd versus other key-value stores***: I think this properly belongs on the webpage as an evaluation tool. Also, it needs to be updated.

***Glossary***: Move to Reference section.

**Developer guide**: This should contain instructional content (tasks, procedures, tutorials) for developers looking to use etcd in an application. Since there are such a large number of APIs and supported interfaces, it might be wise to think about organizing this information by language, at least partially.

***Discovery service protocol***: What is the use case for this information? If it's to enable a developer to programmatically discover a cluster, leave it here. It might also belong in the Operations guide (but link to the same page, don't copy it), perhaps in the Clustering Guide. 

***Set up a local cluster***: Make this the first section in the Developer guide.

***Interacting with etcd***: This page is largely redundant with the Tutorials. Make each task its own page, and consolidate with Tasks as described in "Tutorials" above.

***Why gRPC gateway***: Put the introductory material (that actually describes why you'd want to use gRPC) in the system overview. Present the rest of as its own sub-guide in the Tasks section or as a guide in the Developer Guide. A complete reference to the options should be available in the Reference section.

***gRPC naming and discovery***: This should go (heh) in a Golang-specific part of the Developer guide.

***System limits***

***etcd features***

***API reference***: Move to Reference section.

***API reference: concurrency***: Move to Reference section.

**Operations guide**: Any subsection not listed below doesn't need work. In general, though, consider rewriting sections in this guide to be step-by-step tasks; in many cases it's not immediately clear what to do, even if CLI examples are given. 

***Authentication Guides***

***Authentication***: Incomplete.

***Configuration options***: Move to Reference section.

***Transport security model***: Rename to "Setting up transport layer security".

***Clustering Guide***: Consider breaking up into one page per procedure.

***Run etcd clusters inside containers***: Put in the Clustering Guide.

***Failure modes***: Conceptual information. Consider moving to the architecture overview. What to actually do in case of a failure should be in a Troubleshooting section, like for example the following "Disaster recovery" section.

***Disaster recovery***: Consolidate with other troubleshooting procedures.

***etcd gateway***

***gRPC proxy***

***Hardware recommendations***: System prerequisite. Move to somewhere before the Cluster Installation section; maybe even put it in a Prereq heading in that section.

***Maintenance***: Maybe provide a more specific title like "Storage maintenance".

***Monitoring etcd***

***Performance***

***Design of runtime reconfiguration***: Move to architecture overview.

***Runtime reconfiguration***

***Supported platforms***: Combine with Hardware recommendations in a System Prerequisites section.

***Versioning***: Rename to "Versioning policy". Add a documentation versioning policy. Move to top of version list. Put a link to this version policy in every release notes.

***Data Corruption***: Move to Troubleshooting section.

**Benchmarks**: Mostly redundant with Benchmark section in Operations guide > Performance. Move any non-redundant info to Performance section in Operations guide. Remove benchmarks of unsupported versions. 

**Upgrading**: Move to the Operations guide. Remove old upgrade paths if they're no longer needed or relevant.

***Upgrading etcd clusters and applications***: As far as I can tell, this page just lists the upbrade pages and isn't needed.

**Triage**: Suggest putting this information for users and contributors in the repo and providing a link from the documentation to create a cleaner separation of product documentation and project documentation. Put the link in the intro to the Troubleshooting section.



<!--- References --->

[etcd-analysis]: ./etcd-analysis.md
[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
[access-tutorial]: https://etcd.io/docs/v3.5/tutorials/how-to-access-etcd/
