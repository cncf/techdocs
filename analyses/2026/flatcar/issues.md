---
title: Flatcar Issues
tags: [Flatcar]
created: 2026-04-24
modified: 2026-04-24
author: Bruce Hamilton (@iRaindrop)
---

## Sign-off on the documentation restructure

### Overview

The recommended structure of this analysis happens to also reflect the Flatcar
team's own restructuring proposal. Both naturally arrive at a navigation
structure similar with other container and Kubernetes projects that follow a
natural progression: learn → provision → configure → deploy → other guides, etc.

Flatcar differs from a typical application or library documentation set because
it's not so much installation as is its provisioning, or creating, a container
with an immutable operating system. As such the user path, or journey,
throughout the documentation is one of tailoring an efficient first boot of the
container with the desired operating system settings and capabilities.

The recommended structure is a table of contents of just two nodes deep. While
there can be deeper nodes, only two levels is recommended and facilitates a
positive user experience by improving discoverability. With only two levels
deep, the length of the structure, from the top Getting Started to the bottom,
gets longer.

The structure should have all top-of-mind concepts and technologies in the first
and second tiers. Some of these nodes need to be buckets to group concepts and
procedures. Strategic planning should be able to arrive at a structure where new
nodes and changes can be accommodated without re-architecting the structure.

Here is the recommended structure:

| Level 1 Nodes                      | Level 2 Nodes/topics          |
| ---------------------------------- | ----------------------------- |
| Getting Started                    | Overview                      |
|                                    | Roadmap                       |
|                                    | Tutorial                      |
|                                    | CoreOS Migration              |
| First Boot & Provisioning          | Overview                      |
|                                    | Butane Config Transpiler      |
|                                    | Infrastructure as Code        |
|                                    | Image Customization           |
|                                    | OS Extensions                 |
|                                    | Virtual Machines              |
| Core OS Configuration              | Overview                      |
|                                    | Systemd & Process Management  |
|                                    | Host Configuration            |
|                                    | Networking & Remote Access    |
|                                    | Storage & File Systems        |
| Security                           | Overview                      |
|                                    | Hardening & Compliance        |
|                                    | Encryption & Storage          |
|                                    | Certificates & Authentication |
| Deployments                        | Overview                      |
|                                    | Cloud Providers               |
|                                    | Bare Metal                    |
| Orchestration & Container Runtimes | Overview                      |
|                                    | Managing Clusters             |
|                                    | Kubernetes                    |
|                                    | Container Runtimes            |
| Updates & Releases                 | Overview                      |
|                                    | Nebraska Update Manger        |
|                                    | Managing Releases             |
| Diagnostics & Fixing Issues        | Overview                      |
|                                    | Debugging Guide               |
| Reference                          | Overview                      |
|                                    | Integrations                  |
|                                    | Constants & IDs               |
|                                    | Supply Chain                  |
| Developer Guides                   | Overview                      |
|                                    | SDK                           |
| How to Contribute                  | Overview                      |
|                                    | Docs Style & Formatting       |

Notes:

The second and third nodes, "First Boot & Provisioning" and "Core OS
Configuration" are buckets of topics related to configuration and provisioning.
The difference between the two is that an argument can be made that users will
different needs and options for provisioning as well as configuring core
settings.

An argument could be made that "Orchestration & Container Runtimes" should have
Kubernetes in the title. In that case perhaps "Kubernetes & Orchestration" would
suffice.

Audience: All

Type: All

## Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

## Possible Implementation

Related material in the current doc:

https://www.flatcar.org/docs/latest

Refers to the entire left-hand navigation table of contents.

The recommended structure is available in a Google sheet, with links to the
existing content. See the Readme tab for information about using this data. This
sheet has a row for every page in the documentation, but the hierarchical
arrangement of topics under the second note is at a level of granularity beneath
the scope of the recommended restructure. As the structure evolves, the deeper
structuring should evolve.

Use this sheet, or a sheet derived from it, to arrived at a signed-off
structure:

(link to be provided)

Suggested changes:

After the Flatcar team has agreed on a structure, this issue is complete.
