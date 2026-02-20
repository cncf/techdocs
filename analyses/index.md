---
title: TechDocs Analysis for CNCF Projects
---

<!-- cSpell:ignore projectname -->

# TechDocs Analysis for CNCF Projects

## Purpose

The goals of a CNCF technical documentation analysis are to:

- Examine the current project technical documentation and website against the
  CNCF's analysis framework, as described in the doc analysis
  [criteria](../docs/analysis/criteria.md).
- Compare the documentation against the current or proposed maturity level for
  the overall project.
- Recommends a program of key improvements with the largest return on
  investment. These improvements are documented as _recommendations_ in the
  analysis document and expanded in a companion
  [implementation plan](../docs/analysis/templates/implementation.md) and
  [issues backlog](../docs/analysis/templates/issues-list.md).

## Audience

Analyses are written for the purpose of improving a project's documentation and
are available for anyone to read. Among the intended benefits to project
stakeholders are these:

- **Project maintainers** can gain a critical overview of the technical
  documentation to plan work on the project's documentation. This work can
  increase the effectiveness of the project software, speed adoption, and
  improve user satisfaction.
- **Project contributors** can take on the recommended backlog issues to improve
  the documentation.

The analyses also provide information of value to organizations with an interest
in promoting open source software:

- **CNCF Foundation members** can see what benefits can (and cannot) be expected
  of a documentation improvement effort.
- **Members of other open-source software foundations** can use these analyses
  as a model for their own documentation improvement processes. (Please contact
  the Cloud Native Computing Foundation to discuss licensing and permission of
  analysis templates and tools.)

## Contents

This directory contains completed analyses of the technical documentation for
selected CNCF incubating and graduated software projects.

The analyses are in one of two formats depending on when they were written.
Earlier analyses (**2021**) have one project directory per project, and each of
those directories contains a single Markdown file as the only analysis artifact.

Subsequent analyses (**2023** onward) also use one directory per project, with
each directory containing one or more of these three artifact types:

- [analysis.md](../docs/analysis/templates/analysis.md) evaluates the project
  documentation and provides comments and recommendations in a manner very
  similar to the Round 1 tech doc assessments. This document is based on the
  analysis template and accompanying criteria developed for the Round 1.
- [implementation.md] provides concrete actions that can be implemented by
  project contributors. Its focus is on specific, achievable work that will have
  a strong positive impact on document effectiveness.
- [issues-list.md](../docs/analysis/templates/issues-list.md) is list of
  improvement actions, meant to be entered as GitHub issues, derived from
  [implementation.md].

Each directory might also contain other documents, such as CSV-formatted surveys
of documentation pages.

[implementation.md]: ../docs/analysis/templates/implementation.md
