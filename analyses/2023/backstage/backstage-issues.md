---
title: Backstage umbrella issue
---

# Backstage umbrella issue

## Overview

This is a master list of issues recommended in the Backstage tech doc analysis
and implementation plan.

Where possible, issues are self-contained and require a defined level of effort.
However, some issues require extended effort; for example, issues that require
reorganizing all or most of the technical documentation.

## Issues

### Rewrite technical overview

- [ ]

Rewrite a basic technical overview. Include: Purpose, features, and benefits of
Backstage (without getting too sales-y); core features; basics of architecture
including plugins. This is a conceptual document; omit how-to and reference
information. Put at top of documentation and link from product landing page.

Audience: Evaluators and users who need to find their way around the product
without modifying it.

Type: Conceptual

### Rewrite architectural overview

- [ ]

This is an in-depth overview of the Backstage product, probably in several web
pages. Include a conceptual overview of the frontend, the backend, and
plugin-based architecture. Briefly describe APIs (with links to API references,
but no syntax reference here).

Audience: Integrators and contributors. Possibly admins and developers who need
to configure plugins.

Type: Conceptual

### Rewrite standalone installation instructions

- [ ]

Rewrite the standalone installation. Make clear that this is a non-production
install that a user might want to do for one of several reasons: demo, proof of
concept, development environment, etc. Organize under _Getting Started_ in the
doc TOC.

Audience: Developer, Admin

Type: Task

### Write production installation instructions

- [ ]

Reorganize and rewrite the production-oriented installations, gathered here in
Getting Started. Start with an introduction to help select an install
configuration. Include a section for every install configuration: Kubernetes;
Heroku; distributed plugins (as in "New Backend" in existing doc); any others.
End with _Next Steps_ section with links to configuration, setup, administration
docs. Organize under _Getting Started_ in the doc TOC.

Audience: Admin

Type: Task

### Write start and stop instructions for production Backstage server

- [ ]

Write step-by-step instructions to start, restart, check status, and stop a
production Backstage server. Include a separate procedure for every install
configuration (Kubernetes, standalone, etc.). Add procedures for any other
server-related actions needed by the admin. Can also include sections on tuning
server performance in each case. Organize under _Admin Guide_ in the doc TOC.

Audience: Admin

Type: Task

### Write instructions for installing and configuring plugins

- [ ]

Write step-by-step instructions for installing and configuring a plugin. Include
how to test the plugin if there's a generic way to do that. Organize under
_Admin Guide_ in the doc TOC.

Audience: Admin

Type: Task

### Write a guide to upgrading Backstage

- [ ]

Write a guide to upgrade or downgrade the version of Backstage. Include
instructions on how to check and update dependencies. Organize under _Admin
Guide_ in the doc TOC.

Audience: Admin

Type: Task

### Write a database guide for Backstage

- [ ]

Write procedures for setting up and maintaining a database for Backstage.
Include a separate procedure for every DBMS that can be used. Organize under
_Admin Guide_ in the doc TOC.

Audience: Admin

Type: Task

### Write a Getting Started guide for developers

- [ ]

Write a short guide for developers to get started with an existing production
Backstage app (or a standalone server in a development environment). Include any
tools that need to be installed and how to access the UI. Include a _Next Steps_
section that points to the Developer User Guide. Organize under _Getting
Started_ in the doc TOC.

Audience: Developer

Type: Task

### Write a basic Developer Guide

- [ ]

Write a guide to managing a product in Backstage. Topics include adding,
updating, and releasing a a product. This might need to be expanded based on
type of product and for different code repo and CI/CD systems, but this should
provide an entry point outlining tasks that are common to all products and
environments, with links to more specific instructions. Organize under
_Developer_ in the doc TOC.

Audience: Developer

Type: Task

### Write a guide to the UI.

- [ ]

Write a guide to using the UI to find and explore products. Currently there is
no documentation to using the UI. A complete guide to the UI is probably
unnecessary, but the tasks that represent the core value prop should be
documented, including how to search for and examine products – especially
services and APIs meant to be usable by other developers. Organize under
_Developer_ in the doc TOC.

Audience: Developer

Type: Task

### Write an integrator guide

- [ ]

Write a guide to developing a basic plugin. Include step-by-step instructions to
creating and deploying a bare-bones plugin. This should provide a jumping-off
point to other integrator tasks of an increasingly advanced nature, such as
proxies, security, and integrating with specific systems. Organize under
_Integrator_ or _Getting Started_ (or both) in the doc TOC.

Audience: Integrator

Type: Task

### Reorganize TOC around user roles

- [ ]

Reorganize the documentation table of contents around user roles. A suggested
high-level organization:

- Introduction and technical overview
- Getting started (subsections organized by user role)
- Administrator Guide
- Developer Guide
- Integrator Guide
- Reference

In practice, this will have to be done gradually as material is reorganized and
rewritten within the documentation set. Much of this reorganization can be done
in the form of new sections associated with other Backstage documentation
issues. For example, the Getting Started TOC entry already exists; it can be
reorganized as the Admin and Developer "getting started" sections are completed.
Admin and Developer guides can be added with some rewritten task-based
documentation. They can contain pointers to existing documentation pages until
those pages are replaced or rewritten.

### Compile glossary

- [ ]

Compile a comprehensive Backstage glossary using definitions already found in
the documentation plus new definitions. Many proposed entries were written while
compiling the Backstage doc analysis.

Audience: All

Type: Reference

### Compile knowledge base

- [ ]

Replace the FAQ with an indexed knowledge base. The knowledge base is an
encyclopedic collection of related background, conceptual, and reference
information that doesn't fit elsewhere in the documentation.

Audience: All

Type: Conceptual

### Website: Create a logo wall

- [ ]

Create a logo wall containing a recognizable selection of organizations that use
the product. Link each logo to the organization's website.

Audience: Evaluator

Type: Marketing

### Website: Write case studies

- [ ]

Write a representative selection of case studies. Link from the product main
page.

Audience: Evaluator

Type: Marketing, conceptual

### Website: Single-source repo

- [ ]

Move the Backstage documentation out of the Backstage repo and into its own repo
within the Backstage project. Write explicit instructions for contributing to
documentation and place them in the repo README.

In the meantime, put references to the documentation contributing and build
instructions alongside the project code instructions in the contributor
documentation in the Backstage repo.

### Website: Accessibility

- [ ]

Improve compliance by providing alternative text for images.
