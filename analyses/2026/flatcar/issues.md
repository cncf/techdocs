---
title: Flatcar Issues
tags: [Flatcar]
created: 2026-04-24
modified: 2026-04-30
author: Bruce Hamilton (@iRaindrop)
---

<!-- markdownlint-disable no-duplicate-heading -->

The issues described in this document follow the recommendations for Flatcar in
the [analysis](analysis.md) document. Not all recommendations become issues.

Teams are encouraged to create GitHub issues based on this document.

## Sign-off and create the documentation restructure

### Overview

The recommended structure of this analysis agrees with the Flatcar team's own
restructuring proposal. Both arrive at a navigation structure similar with other
container and Kubernetes projects that follow a natural progression: learn →
provision → configure → deploy → other guides, and so on.

Flatcar's processes differ from those of a typical application because they are
less about installation and more about provisioning a container by installing an
operating system image. As such, the user path throughout the documentation has
the goal of enabling an efficient first boot of the container with a set of
desired OS capabilities.

The recommended structure is a table of contents (TOC) two nodes deep. While
deeper heading levels exist in the documentation, two levels are recommended for
the TOC to improve discoverability.

The structure should have all the most important concepts and technologies in
the first and second tiers. Some of these nodes need to be broader categories to
group concepts and procedures. Contributors should arrive at a consensus on a
structure that features the important information without extensive
re-architecting of the structure.

Here is the recommended TOC.

| Level A                            | Level B                       |
| ---------------------------------- | ----------------------------- |
| Flatcar Container Linux            | Top intro/overview            |
| Getting Started                    | Overview                      |
|                                    | Roadmap                       |
|                                    | Quickstart                    |
|                                    | Learning Series               |
|                                    | Minecraft Flatcar Apps        |
| First Boot & Provisioning          | Overview                      |
|                                    | Butane Config Transpiler      |
|                                    | Ignition                      |
|                                    | Infrastructure as Code        |
|                                    | Image Customization           |
|                                    | Virtual Machines              |
| OS Configuration                   | Overview                      |
|                                    | Systemd & Process Management  |
|                                    | Host Configuration            |
|                                    | Networking & Remote Access    |
|                                    | Storage & File Systems        |
| System Extensions                  | Overview                      |
|                                    | Ready to Use Extensions       |
| Deployments                        | Overview                      |
|                                    | Cloud Providers               |
|                                    | Virtualization Options        |
|                                    | Bare Metal                    |
| Orchestration & Container Runtimes | Overview                      |
|                                    | Managing Clusters             |
|                                    | Kubernetes                    |
|                                    | Container Runtimes            |
| Nebraska Update Manager & Releases | Overview                      |
|                                    | Nebraska Update Manager       |
|                                    | Managing Releases             |
| Security                           | Overview                      |
|                                    | Hardening & Compliance        |
|                                    | Encryption & Storage          |
|                                    | Certificates & Authentication |
|                                    | Supply Chain                  |
|                                    | Integrations                  |
|                                    | Constants & IDs               |
| Diagnostics & Fixing Issues        | Overview                      |
|                                    | Debugging Guide               |
| CoreOS Migration                   | Overview                      |
|                                    | Updating from CoreOS          |
| Developer Guides                   | Overview                      |
|                                    | SDK                           |
| How to Contribute                  | Overview                      |
|                                    | Docs Style & Formatting       |

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

The recommended detailed and summary structures are available in the "Flatcar
Analysis" Google sheet made available to the team.

The detailed sheet has a row for each of the current files in the repository.
The files under node level 2 are not listed in the summary tab of spreadsheet
(but are on the detailed tab), because the recommended structure does not
prescriptively map the hierarchical positions of these files on the website. We
assume that lower-level files will move around the structure, including up and
down the hierarchy.

At this writing, there is initial approval of the recommended structure and
after a final approval from the team the structure would be ready to
incorporate. A repository restructure is preferred over using a mapping file
like Nav.yaml.

The spreadsheet has `old path` and `new path` columns. The team needs to
determine the names of the directories that correspond to the names of the
nodes, e.g. the "First Boot & Provisioning" could have 'provisioning' as the
name of the directory (folder).

## Write a Roadmap topic

### Overview

This topic is needed to guide users along a role-determined learning path and
workflow to set up a Flatcar container based on their operational needs.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

The roadmap should be a narrative starting with the list of paths and each path
should have a checklist of prerequisites and high-level steps that cover
provisioning tools and deployment.

The user paths include:

- Novice user to learn and test
- Cloud only user to work with a provider
- On-premises bare metal user
- Hybrid users

Each path should incorporate lists of needed provisioning tools such as VMs with
reference to container runtimes and orchestration. Include any pertinent notes
on configuration and deployment.

## Create or Update Overviews for Top Nodes

### Overview

Update or create the overview pages for each of the top two tiers of nodes. The
overview should be a brief tour of the node's content. Also update the very top
introduction page.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Create or update Overview.md in each top node in the Flatcar documentation. See
[Consolidate Concepts in Virtual Machines Overview](#consolidate-concepts-in-virtual-machines-overview)
issue for an example.

## Create Architectural Diagrams

### Overview

An architectural flow diagram will optimize the documentation with a visual
representation of the technology. At least one is needed for the top page and
others where applicable and helpful.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

The writer should propose a diagram to illustrate the provisioning process flow.

## Add Step Numbering and Context to Procedures

### Overview

Add numbering to introduce code blocks with context of where the code is run.

Currently few of the procedural how-to topics have numbered steps. Users expect
numbering. Use a bullet rather than a number for a one-step procedure.

New users may be confused as to where a particular code block is run. Is it on
the client machine, in a VM, in a CLI? Introduce code blocks with verbiage such
as "In the VM window in a container, run the following command...". This can be
omitted for commands that are clearly a continuation of a command-line session
in the same series of steps.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

This implementation requires a global approach of working with an inventory of
all topics with code blocks to make these changes.

## Add Content Type and make other updates to metadata

### Overview

The current metadata at the top of Flatcar Markdown files has values for
`title`, `link title`, and `weight`.

Adding a `content-type` or `type` value to the metadata will help with managing
the repository and achieving consistency in the content. For example, getting
all the files whose `content-type` equals `how-to` would aid in the adding
numbering to procedures task.

Apparently the `weight` value is no longer of benefit for the team and there's
discussion of removing it.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

This requires a global approach to update each Markdown file. Here's a short
list of common content types that apply to most files:

- tutorial
- how-to
- explanation
- reference

## Consolidate Concepts in Virtual Machines Overview

### Overview

The Virtual Machines topic, https://www.flatcar.org/docs/latest/installing/vms/,
has a minimal overview with several complex subtopics. Each of the subtopics in
this topic contain a similar workflow that differ only by platform.

Here are the common steps determined by Copilot without the details.

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

Document key concepts that are common to each subtopic in the topic overview.
Consider consolidating common procedures into one procedure that works for all
the subtopics.

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

Document key concepts that are common to each subtopic in the topic overview.
Consider consolidating common procedures into one procedure that works for all
the subtopics.

## Consolidate Concepts in the Bare Metal Overview

### Overview

The Cloud Providers node,
https://www.flatcar.org/docs/latest/installing/bare-metal/, has a minimal
overview with several complex subtopics. Each of the subtopics in this node
contain a very similar workflow that differ only by platform.

To determine the commonalities among the subtopics, you can use AI. Here is a
suggested AI prompt: "Review the subtopics in this link (link) and provide a
list of common tasks that each of the Bare Metal topics have in common. The aim
is to make the overview page contain most of the concepts so that each of the
subtopics can be simpler How-to topics."

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

Document key concepts that are common to each subtopic in the topic overview.
Consider consolidating common procedures into one procedure that works for all
the subtopics.

## Consolidate Concepts in the Community Supported Platforms overview

### Overview

Note: This node will be renamed to "Virtualization Options".

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

Document key concepts that are common to each subtopic in the topic overview.
Consider consolidating common procedures into one procedure that works for all
the subtopics.
