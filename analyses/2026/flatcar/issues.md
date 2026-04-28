---
title: Flatcar Issues
tags: [Flatcar]
created: 2026-04-24
modified: 2026-04-24
author: Bruce Hamilton (@iRaindrop)
---

<!-- markdownlint-disable no-duplicate-heading -->

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

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Related material in the current doc:

https://www.flatcar.org/docs/latest

Refers to the entire left-hand navigation table of contents.

The recommended structure is available in a Google sheet, with links to the
existing content. See the README tab for information about using this data. This
sheet has a row for every page in the documentation, but the hierarchical
arrangement of topics under the second note is at a level of granularity beneath
the scope of the recommended restructure. As the structure evolves, the deeper
structuring should evolve.

Use this sheet, or a sheet derived from it, to arrived at a signed-off
structure:

(link to be provided)

Suggested changes:

After the Flatcar team has agreed on a structure, this issue is complete.

## Create the NAV.YML file

### Overview

After the Flatcar team has signed off on the recommended structure, the website
team will probably use a NAV.YML YAML file to map the structure to the folders
and files in the repository.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

The NAV.YML file can be constructed using data from the level-a, level-b, and
path columns in recommended structure sheet, columns D, E, and F, respectively.

Then create a PR to add NAV.YML to the root of the Flatcar docs repository:

https://github.com/flatcar/flatcar-website/tree/main/content/docs/latest

## Write a Roadmap topic

### Overview

This topic will be a popular one as it should guide users along a path (or
journey) for knowing what to do to get a Flatcar container going according to
their purpose and needs.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

The roadmap should be a flow-based narrative starting with the list of paths and
each path should have a checklist of prerequisites and next steps that cover
provisioning tools and deployment.

Configuration might be too granular for this roadmap.

The user paths include:

- Novice user to learn and test
- Cloud only user to work with a provider
- On-prem bare metal user
- Hybrid users

Each path should incorporate lists of needed provisioning tools such as VMs with
reference to container runtimes and orchestration. Include any pertinent notes
on configuration and deployment.

## Create or Update Overviews for Top Nodes

### Overview

Update or create the Overview pages for each of the top nodes. The overview
should be brief tour of the node's content. Also update the very top
introduction page.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Create or update Overview.md in each top nodes in the Flatcar documentation.

## Create Architectural Diagrams

### Overview

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

## Add Step Numbering to Procedures

### Overview

Add numbering or bullets Introduce code blocks with context Summarize procedures
in Overview Set content type to How-to in metadata

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

## Add Content Type to Metadata

### Overview

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

## Consolidate Concepts in Virtual Machines Overview

### Overview

The Virtual Machines node, https://www.flatcar.org/docs/latest/installing/vms/,
has a minimal overview with several complex subtopics. Each of the subtopics in
this node contain a very similar workflow that differ only by platform. To
determine the commonalities among the subtopics, you can use AI. Here is a
suggested AP prompt: "Review the subtopics in this link (link) and provide a
list of common tasks that each of the Virtual Machine topics have in common. The
aim is to make the overview page contain most of the concepts so that each of
the subtopics can be simpler How-to topics."

Here are the common steps determined by Copilot without the details. Run the
prompt for full context.

1. Select a Release Channel
1. Download the Appropriate VM Image
1. Verify the Image (GPG)
1. Prepare an Ignition (or Butane) Configuration
1. Create or Define the Virtual Machine
1. Boot the VM for the First Time
1. Access the Instance (SSH)
1. Optional: Automate Deployment (Terraform, CLI tools)

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Use AI and your own research to gather key concepts and common procedures that
each of the subtopics have so that the overview contains the conceptual guidance
and common tasks that need not be repeated by the subtopics. Copilot also
offered to write the overview draft from which good ideas could be gleaned.

## Consolidate Concepts in the Cloud Providers Overview

### Overview

The Cloud Providers node, https://www.flatcar.org/docs/latest/installing/cloud/,
has a minimal overview with several complex subtopics. Each of the subtopics in
this node contain a very similar workflow that differ only by platform. To
determine the commonalities among the subtopics, you can use AI. Here is a
suggested AI prompt: "Review the subtopics in this link (link) and provide a
list of common tasks that each of the Virtual Machine topics have in common. The
aim is to make the overview page contain most of the concepts so that each of
the subtopics can be simpler How-to topics."

Repeat this prompt for the current Community Supported Platforms node,
https://www.flatcar.org/docs/latest/installing/community-platforms/, which the
Flatcar team agrees can be combined with the Cloud Providers node as proposed in
the recommended structure.

Here are the common steps determined by Copilot without the details. Run the
prompt for full context.

1. Choose a Flatcar Release Channel
2. Obtain or Reference the Flatcar Image
3. Prepare an Ignition (or Butane) Configuration
4. Create or Launch the Instance
5. Pass Ignition to the Instance
6. Boot and Verify the Instance
7. Access the Instance (SSH)
8. Optional: Automate Deployment

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Use AI and your own research to gather key concepts and common procedures that
each of the subtopics have so that the overview contains the conceptual guidance
and common tasks that need not be repeated by the subtopics. Copilot also
offered to write the overview draft from which good ideas could be gleaned.

## Consolidate Concepts in the Cloud Providers Overview

### Overview

The Cloud Providers node, https://www.flatcar.org/docs/latest/installing/cloud/,
has a minimal overview with several complex subtopics. Each of the subtopics in
this node contain a very similar workflow that differ only by platform. To
determine the commonalities among the subtopics, you can use AI. Here is a
suggested AI prompt: "Review the subtopics in this link (link) and provide a
list of common tasks that each of the Cloud Providers topics have in common. The
aim is to make the overview page contain most of the concepts so that each of
the subtopics can be simpler How-to topics."

Here are the common steps determined by Copilot without the details. Run the
prompt for full context.

1. Choose a Flatcar Release Channel
2. Obtain or Reference the Flatcar Image
3. Prepare an Ignition (or Butane) Configuration
4. Create or Launch the Instance
5. Pass Ignition to the Instance
6. Boot and Verify the Instance
7. Access the Instance (SSH)
8. Optional: Automate Deployment

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Use AI and your own research to gather key concepts and common procedures that
each of the subtopics have so that the overview contains the conceptual guidance
and common tasks that need not be repeated by the subtopics. Copilot also
offered to write the overview draft from which good ideas could be gleaned.

## Consolidate Concepts in the Bare Metal Overview

### Overview

The Cloud Providers node,
https://www.flatcar.org/docs/latest/installing/bare-metal/, has a minimal
overview with several complex subtopics. Each of the subtopics in this node
contain a very similar workflow that differ only by platform. To determine the
commonalities among the subtopics, you can use AI. Here is a suggested AI
prompt: "Review the subtopics in this link (link) and provide a list of common
tasks that each of the Bare Metal topics have in common. The aim is to make the
overview page contain most of the concepts so that each of the subtopics can be
simpler How-to topics."

Here are the common steps determined by Copilot without the details. Run the
prompt for full context.

1. Obtain or Prepare Flatcar Artifacts
2. Understand the Boot Flow
3. Provide an Ignition (or Butane) Configuration
4. Configure the Bootloader or Boot Environment
5. Perform the Installation (Optional but Common)
6. Hardware‑Specific Considerations
7. Validate the System After Boot

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Use AI and your own research to gather key concepts and common procedures that
each of the subtopics have so that the overview contains the conceptual guidance
and common tasks that need not be repeated by the subtopics. Copilot also
offered to write the overview draft from which good ideas could be gleaned.

## Consolidate Concepts in the Community Supported Platforms overview

### Overview

Note: This node has just been renamed to "Virtualization Options".

The Community Supported Platforms node,
https://www.flatcar.org/docs/latest/installing/community-platforms/, has a
minimal overview with several complex subtopics. Each of the subtopics in this
node contain a very similar workflow that differ only by platform. To determine
the commonalities among the subtopics, you can use AI. Here is a suggested AI
prompt: "Review the subtopics in this link (link) and provide a list of common
tasks that each of the Community Supported Platform topics have in common. The
aim is to make the overview page contain most of the concepts so that each of
the subtopics can be simpler How-to topics."

Here are the common steps determined by Copilot without the details. Run the
prompt for full context.

1. Choose the Correct Flatcar Image for the Platform
2. Provide an Ignition (or Butane) Configuration
3. Understand the Platform’s Boot Mechanism
4. Pass User Data / Metadata to the VM
5. Networking Basics
6. Validate Ignition and System State After First Boot
7. Optional: Customize or Replace the Disk Image

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Use AI and your own research to gather key concepts and common procedures that
each of the subtopics have so that the overview contains the conceptual guidance
and common tasks that need not be repeated by the subtopics. Copilot also
offered to write the overview draft from which good ideas could be gleaned.
