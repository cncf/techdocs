---
title: Implementing TUF Doc Improvements
tags: TUF
---


## Introduction

This document provides actionable suggestions for improving the **theUpdateframework (TUF)**
technical documentation.

For an analysis and general discussion of recommendations on TUF technical
documentation, see [TUF-analysis.md](TUF-analysis.md).

### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards and
suggests possible improvements. In most cases there is more than one way to do
things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. The recommended implementations represent the reviewers' experience
with how to apply those best practices. In other words, borrowing terminology
from the lexicon of [RFCs][rfc-keywords], the changes described here should be
understood as "recommended" or "should" at the strongest, and "optional" or
"may" in many cases. Any "must" or "required" actions are clearly denoted as
such, and pertain to legal requirements such as copyright and licensing issues.

The top-level documentation recommendations for this project are:
- **Reorganize documentation**
  - Align sub-sections with related sections
  - Consolidate some pages into others to avoid repetition
  - Add user roles to the  'Getting started' documentation 
  - Add a section for instructional material to website and repo documentation to make it easier to find. It can be a sub-section under 'Getting started'
  
- **Introduce instructional documentation**
  - Identify TUF user roles (personas) 
  - Develop task-based material i.e How-tos for user roles
  - Document TUF installation procedures in a separate page(At the moment it's in the spec doc)
  - Develop quick start and contribution guides for new users

- **Content maintanability and creation process**
  - Rename the docs repo to a recognizable name e.g *TUF-ReadTheDocs* or similar
  - Add search functionality to website to make it easier to find content
  - Identify maintainers for the docs repo 
  - Add labels to the docs repo 
  - Add a README to the docs repo with information about the project including links to important project repos
  - Develop a contributors' guideline for new users
  - Create procedure for developing the docs site locally
  - Include communication channels on the Docs repo README 
  - Provide information about project meetings e.g a meeting link and calendar on both the website and repo
  - Add the [TUF blog](https://theupdateframework.github.io/python-tuf/) to the website.

## Implementation

## Reorganize documentation

### Align sub-sections with related sections
Some sections listed on the menu bar have unrelated sub-sections. This structure makes information hard to find and can be confusing to new users.
 I propose the following Navbar outline. This structure includes the user roles in the documentation. 
- **About**: 
  - Overview
  - History
  - Project
  - Publications
  - Timeline
- **Getting started**: 
  - TUF security 
  - TUF specification(Roles and metadata,tutorials,videos etc)
  - TUF proposals(linked to tutorials,videos)
  - TUF implementation/Developers (linked to tutorials,videos)
  - TUF docs(Link docs repo)
  - Media(Videos and pictures of TUF events and seminars)
  - FAQ
- **Community**: 
  - Adoptions
  - Reporting issues
  - Security audits
  - Contribute-TAP, Docs
  - Chat(CNCF slack)
  - Code of conduct
- **News**: 
- **Contact**: 
  - CNCF slack, meeting links or calendar
 
### Consolidate some pages 
The specification index has been reference three times on the site despite having its own sub-section.

I propose that it remains in the project sub-section section under specification. But it be removed from the *Getting started* section.

### Add user roles to Getting started section
Structure the *Getting started* section according to user roles. See the proposed *Getting started* above. The percieved user roles for this project are:
  - **TUF specification**: Uses TUF metadata to download and verify targets
  - **TUF proposals contributor** : Proposes major changes to the specification, including new features made as TUF Augmentation Proposals (TAPs)
  - **TUF implementation/Developers** : Develops software with the TUF Python reference implementation
  - **TUF docs**: Contributes to documentation

Each role should have accompanying documentation and instructional material/tutorial to help users set up and start using TUF.

## Introduce Instructional Material

### Issue 1

### Issue 2

[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
