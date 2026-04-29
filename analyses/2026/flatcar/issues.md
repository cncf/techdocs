---
title: Flatcar Issues
tags: [Flatcar]
created: 2026-04-24
modified: 2026-04-29
author: Bruce Hamilton (@iRaindrop)
---

<!-- markdownlint-disable no-duplicate-heading -->

## Sign-off and create the documentation restructure

### Overview

The recommended structure of this analysis happens to also reflect the Flatcar
team's own restructuring proposal. Both naturally arrive at a navigation
structure similar with other container and Kubernetes projects that follow a
natural progression: learn → provision → configure → deploy → other guides, etc.

Flatcar differs from a typical application or library documentation set because
it's not so much installation as is its provisioning, or creating, a container
with an immutable operating system. As such the user path, or journey,
throughout the documentation is one of tailoring an efficient first boot of the
container with the desired OS settings and capabilities.

The recommended structure is a table of contents of just two nodes deep. While
there can be deeper nodes, only two primary levels is recommended and
facilitates a positive user experience by improving discoverability.

The structure should have all top-of-mind concepts and technologies in the first
and second tiers. Some of these nodes need to be broader categories to group
concepts and procedures. Strategic planning should be able to arrive at a
structure where naming changes can be accommodated without re-architecting the
structure.

Here is the recommended structure summary of the top two nodes.

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

The recommended detailed and summary structures are available in this
spreadsheet:

(link)

The detailed sheet has a row for each of the current files in the repository.
The files under node level 2 are not listed in the summary sheet. These
recommended structure does not map the hierarchical sequence of these files on
the website and is assumed there will be churn in this granularity. As the
structure evolves, the deeper structuring should also evolve.

At this writing, there is initial approval of the recommended structure and
after a final approval from the team the structure would be ready to
incorporate. A repository restructure is preferred over using a mapping file
like Nav.yaml.

The sheet has columns of `old path` and `new path`. The team needs to determine
the names of the directories that correspond to the names of the nodes, e.g. the
"First Boot & Provisioning" could have 'provisioning' as the name of the
directory (folder).

After approval from the team, a bash script could be coded from the values of
`old path` and `new path` with the `git mv` command to create the new
repository.

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
each path should have a checklist of prerequisites and high-level steps that
cover provisioning tools and deployment.

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

Update or create the overview pages for each of the top two tiers of nodes. The
overview should be brief tour of the node's content. Also update the very top
introduction page.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Create or update Overview.md in each top nodes in the Flatcar documentation. If
the node contains several subtopics you can use AI to glean content for an
effective overview. See
[Consolidate Concepts in Virtual Machines Overview](#consolidate-concepts-in-virtual-machines-overview)
issue for an example.

## Create Architectural Diagrams

### Overview

An architectural flow diagram will optimize the documentation. At least one is
needed for the top page and others where applicable and helpful.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

The writer should propose a diagram when the architectural and technical flow is
understood for a subject area or precise process. Use Mermaid Chart to create
the Mermaid code that renders on the web and in Visual Studio Code.

Prompt AI with a description of the flow to create the code that you can refine
in Mermaid Chart.

## Add Step Numbering and Context to Procedures

### Overview

Add numbering or bullets to introduce code blocks with context of where the code
is run.

The Flatcar team already has an issue to add code block capabilities with a copy
button. When this is in place, you can add Markdown fencing syntax with the
language in all pages with code.

Currently few if any of the procedural how-to topics have numbered steps. While
in some cases the casual tone is appreciated, it detracts from being able to
reference exact steps and users expect numbering. Use bullets for one or
two-step procedures.

New users may be confused as to where a particular code block is run. Is it on
the client machine, in a VM, in a CLI? So introduce code blocks with verbiage
such as "In the VM window in a container, run the following command...". No need
to do it for every block if it's obvious.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Make these change every time you edit a page with code.

## Add Content Type and make other updates to metadata

### Overview

The current metadata at the top of Flatcar Markdown files has values for
`title`, `link title`, and `weight`.

Adding a `content-type` or `type` value to the metadata will be great for
managing the repository and achieving consistency in the content.

Apparently the `weight` value is no longer of benefit for the team and there's
discussion of removing it.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

After the restructured repository has stabilized, a Python or other script could
walk the repository and update each Markdown file's metadata.

## Add indexing file to repository to assist AI agents

The CTO of CNCF just suggested that all CNCF doc maintainers run a 'sanity
check' with this tool that measures how well AI agents can read, navigate, and
use a documentation site using this tool: https://afdocs.dev/

One of the main ways to improve AI capabilities is by creating an index file to
reside at the root of the repository that contains links to key sections,
essentially a high level index. AI agents look for this file to navigate the
site.

### Context

This issue tracks recommended changes resulting from an analysis of the Flatcar
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses under `2026/Flatcar`.

### Possible Implementation

Visit https://llmstxt.org to learn about the index file. Consult with the
Flatcar team to determine key sections and check in the file.

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

Use AI and your own research to gather key concepts and common procedures that
each of the subtopics have so that the overview contains the conceptual guidance
and common tasks that need not be repeated by the subtopics. Copilot also
offered to write the overview draft from which good ideas could be gleaned.
