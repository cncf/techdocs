---
title: TUF Documentation Analysis
tags: TUF
created: 2024-06-17
modified: YYYY-MM-DD
author: Sandra Dindi (@Dindihub)
---

## Introduction

This document analyzes the effectiveness and completeness of 
[The Update Framework](https://theupdateframework.io) (TUF) open source software (OSS) project's documentation
and website. It is funded by the CNCF Foundation as part of its overall effort
to incubate, grow, and graduate open source cloud native software projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

### Purpose

This document analyzes the current state of **The Update Framework (TUF)**
documentation. It provides project leaders with an informed understanding
of potential problems in current project documentation. A second [TUF-impementation.md](./TUF-implementation.md)
document, , outlines an actionable plan for improvement. A third document, the 
[TUF-issues.md](./TUF-issues.md) outlines issues to be added to the project documentation repository. These
issues can be taken up by contributors to improve the documentation.

This document:

- Analyzes the current TUF technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

### Scope of analysis

The documentation includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the TUF GitHub repository.

The TUF website and documentation are written in Markdown and compiled using the Hugo static site generator and served on the Netlify platform. The site's code is stored on the TUF GitHub
repo.

#### In scope

- Website: https://theupdateframework.io
- Documentation: https://theupdateframework.io/content
- Website configuration(Hugo): https://github.com/theupdateframework/theupdateframework.io


#### Out of scope

- The TUF community repository: https://github.com/theupdateframework/community
- TUF specification repository: https://github.com/theupdateframework/specification
- Python reference implementaion reposiroty: https://github.com/theupdateframework/python-tuf
- TUF Augmentation proposals respsitory: https://github.com/theupdateframework/taps
- TUF artwork repository: https://github.com/theupdateframework/artwork


### How this document is organized

This document is divided into three sections that represent three major areas of
concern:

- **Project documentation:** Analyzes documentation for users of the TUF project
  software.
- **Contributor documentation:** Analyzes documentation for existing and new contributors to TUF project.
- **Website:** Analyzes the mechanics of publishing the documentation, including branding, website structure, and maintainability.

Each section begins with summary ratings based on a rubric with appropriate
[criteria] for the section, then proceeds to:

- **Comments**: Observations about the existing documentation, with a focus on
  how it does or does not help TUF project users achieve their goals.
- **Recommendations**: Suggested changes that would improve the effectiveness of
  the documentation.

The accompanying [implementation](./TUF-implementation.md) document breaks the recommendations down into
concrete actions that can be implemented by project contributors. Its focus is
on drilling down to specific, achievable work that can be completed in
constrained blocks of time. 

Ultimately, the implementation items are decomposed
into a series of [issues](./TUF-issues.md) that can be implemented by the project maintainers.

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the **[implementation](./TUF-implementation.md) plan** and **[issues](./TUF-issues.md) list**.

Readers interested in the current state of the documentation and the reasoning
behind the recommendations should read the section of this document pertaining
to their area of concern:

- [Project documentation]()
- [Contributor documentation]()
- [Website and documentation infrastructure]()


#### Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards,
and suggests possible improvements. In most cases there is more than one way to
do things. Few recommendations here are meant to be prescriptive. Rather, the
recommended implementations represent the reviewers' experience with how to
apply documentation best practices. In other words, borrowing terminology from
the lexicon of [RFCs][rfc-spec], the changes described here should be understood
as "recommended" or "should" at the strongest, and "optional" or "may" in many
cases. Any "must" or "required" actions are clearly denoted as such, and pertain
to legal requirements such as copyright and licensing issues.

## Project documentation


| Criteria                  | Rating (1-5) |
| -------------------------- | -------------- |
| Information architecture   | 3 |
| New user content           | 1 |
| Content maintainability    | 3 |
| Content creation processes | 1 |
| Inclusive language         | 3 |

Scale:

- 1 = (Is not present)
- 3 = (Is present, but needs improvement)
- 5 = (Is executed extremely well or no improvement required)

### Comments
The following sections contain brief assessments of each element of the Project
documentation rubric.

#### Information architecture

- There is an overview section explaining what TUF is and its use cases. The features, the metadata and roles are well explained with examples for each metadata.

- Repetition of content on different pages makes content confusing 

- Content needs to be re-organised to make it easier to follow 

- Docs do not have tutorials for specific feature implementation. But, there are videos explaining various use cases.

- There are not specific task-based guides for features. The available guide for  implementing the specification is part of a larger document labelled [Specification(latest)](https://theupdateframework.github.io/specification/latest)

- There is a FAQ and reporting issues sections for troubleshooting.

- There is a a well detailed API reference for multiple TUF APIs

- README on [theupdateframework.io](https://github.com/theupdateframework/theupdateframework.io)
repo is empty with little information about content of the repo.


#### New user content

- There is a 'Getting started' section on the website with information about main features. But there's repetition of content from other pages. For example the *Specification (latest)* and *index* include information present in the project and overview sections. This section is confusing for new users.  

- The documentation repo does not have a contributor guide for new users to get started

- There isin't any documentation labeled 'Installation guide'. Instead, installation instructions are part of a larger document labelled [The Update Framework specification](https://theupdateframework.github.io/specification/latest)

- TUF docs do not provide information about application-specific/OS functionality in system updates. Instead it states that TUF provides a secure way for applications to obtain and verify files being distributed by trusted parties.  

- There is sample code in the content that can be easily copy-pastable on other platforms.

- It's not clear that the documentation is up-to-date as there are no dates on docs or release notes published.The only document on the site with dates is the [Specification file](https://theupdateframework.github.io/specification/latest/)

#### Content maintainability & site mechanics

- The documentation is not searchable. You have to go through the site to find what you are looking for.

- The Docs are managed through  docs-as-code site Hugo and content written in markdown. However,it appears the updates are made manually.


#### Content creation processes

- Documentation lacks contribution process guides and information on how to get started.

- Documentation lacks procedures for duplicating the documentation locally.

- It's not clear whether the code release process is synced with the documentation creation and updates.

- It's not clear who reviews and approves documentation pull requests and updates either on the website or repo.

- Information about TUF project maintainers is available on the website but not on the project documentation repo.

#### Inclusive language

- I noted one instance of use of non-recommended words as documented by the
  [Inclusive Naming Initiative](https://inclusivenaming.org) website. The word *Aborted* is used in the [Specification index tutorial](https://theupdateframework.github.io/specification/latest/#fix-time)

- There is no use of abliest language like simple,easy in the documentation.


### Recommendations

#### Information architecture
- Information should be re-organized on the website to better the workflow. For example, each section should contain only related information. Consider the following:
   - The **About section** should only have introductory information about the project in the following sequence. *Overview, History, Project and Publications, and Timeline*. The code of conduct moved to the Community section.

   - The **Getting Started** section should contain information on how to use the software or contribute to the project. That is:*Security,Roles and metadata,Implementations,Videos & Tutorials, and FAQs* The *The specification(latest) and index* should be removed because they are linked in the *Project page*

   - Include *Code of conduct* in the **Community section** 
   - The *Contribute* page should include information on various areas of contribution e.g The spec,Documentataion etc and not to a specific repo. This way users can easily find the areas of interest.

- Provide step-by-step tutorials for each use case on a separate page and label it as such. At the moment all the tutorials are included in a larger document the *Specification(latest)* 

- Create a **README** on the documentation repo with information detailing the content of the repo. Also include a **contribution guide** and information of how to set up the website and run it locally for new contributors. You can include a getting started section on the README. 

#### New user content

- Include only new user content in the **Getting started** Include information about features, tutorials and guides. Remove information about the Specification as it's repeated in the *Project section*. 

- Include a **README** in the documentation with a contributor guide on how to get started with Docs.

- Create an *Installation guide* on a separate page. This can contain step-to-step instructions for diffent users including begginers. Installation instructions in the [The Update Framework specification](https://theupdateframework.github.io/specification/latest) can be included here.

#### Content maintainability & site mechanics
- Include a search button on the website to make it easier for users to find content


#### Content creation processes

- Provide information about the Docs website such as the tools used and how to set up ad run it locally.

- Provide information on the contribution process including having contribution guides on the website and the documentaion repo. You can also include contribution guidelines to avoid violations.

- Include dates on the documentation release on the website and the repo to inform users of their relevance.

- Include information about verified maintainers on the documentation repo. It makes it easier for contributors to know who to contact for assistance.

#### Inclusive language

- Replace the word *Aborted* mentioned in the [Specification document](https://theupdateframework.github.io/specification/latest/#detailed-client-workflow) with recommended suggestions in the [Inclusive language documentation](https://inclusivenaming.org/word-lists/tier-1/abort/)









