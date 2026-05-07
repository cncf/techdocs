---
title: Implementing Flatcar Doc Improvements
created: 2026-05-05
modified: 2026-05-05
author: Bruce Hamilton (@iRaindrop)
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document provides actionable suggestions for improving the Flatcar
technical documentation.

For an analysis and general discussion of recommendations on Flatcar technical
documentation, see [analysis.md](analysis.md). See [issues.md](issues.md) for
details on addressing and implementing suggested changes.

### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards and
suggests possible improvements. In most cases there is more than one way to do
things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. The recommended implementations represent the reviewers' experience
with how to apply those best practices. In other words, borrowing terminology
from the lexicon of [RFC Keywords](https://www.rfc-editor.org/rfc/rfc2119), the
changes described here should be understood as "recommended" or "should" at the
strongest, and "optional" or "may" in many cases. Any "must" or "required"
actions are clearly denoted as such, and pertain to legal requirements such as
copyright and licensing issues.

The top-level documentation recommendations for this project are:

## Sign off and create the documentation restructure

The Flatcar team initially approved the documentation restructure provided by
the analysis in a spreadsheet. See the team for that link.

For better housekeeping, the team prefers to restructure the repository (or
create a new branch) instead of using a mapping file such as a Nav.yaml file.

The spreadsheet contains names for the destination directories as well as topic
titles. To aid in restructuring, a bash script of `git mv` commands could move
files and create directories accordingly.

As files are being moved into or created in their new locations is a good time
to implement suggestions based upon the following issues.

### Create or update overviews for top sections

Each overview page for a section needs to assure the reader they're in the right
place and provide brief and concise guidance about its subsections. If the
subsections are complex and technical, ascertain common concepts in the overview
and if practical consolidate common procedures into one topic. As an example,
see
[Update concepts in Virtual Machines Overview](issues.md#consolidate-concepts-in-virtual-machines-overview).

### Add step numbering and context to procedures

The current Flatcar topics with code blocks have a conversational and procedural
flow, but there is no numbering to the procedures and their steps. Not only will
adding numbering add value by being able to refer to specific steps, but will
differentiate conceptual content from procedural content.

Also, where appropriate, introduce a code block with verbiage of where there
code is being run. See
[Add step numbering and context to procedures](issues.md#add-step-numbering-and-context-to-procedures).

### Add Content Type to metadata

For content health and maintenance, effective metadata is key. As topics are
being updated or moved, or as global task using a script, adding the content
type would be great for consistency and reporting. For more information, see
[Add content type and make other updates to metadata](issues.md#add-content-type-and-make-other-updates-to-metadata).

### Write a roadmap topic

In the documentation restructure spreadsheet, there's a placeholder for the
Roadmap topic in the Getting Started section. This topic can be an effective and
popular topic in guiding users to ascertain what they need to know to create a
container hosting the Flatcar operating system.

After the structure is in place would be a good time to create this topic. For
more information, see [Write a roadmap topic](issues.md#write-a-roadmap-topic).

## Create architectural diagrams

At a minimum, the top overview page should have an architectural diagram
depicting a Flatcar container, a Flatcar app, and its orchestration in the
cluster.

Ideally each top section overview could have a diagram depicting that area of
provisioning and deployment.

Store the images in Mermaid code for easier maintenance and updates. AI is an
effective tool to generate Mermaid code based on a prompt.
