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
of potential problems in current project documentation. A second [implementation](./implementation.md)
document, , outlines an actionable plan for improvement. A third document, the 
[issues](./issues.md) outlines issues to be added to the project documentation repository. These
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
- Documentation: https://theupdateframework.io
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

The accompanying [implementation](./implementation.md) document breaks the recommendations down into
concrete actions that can be implemented by project contributors. Its focus is
on drilling down to specific, achievable work that can be completed in
constrained blocks of time. 

Ultimately, the implementation items are decomposed
into a series of [issues](./issues.md) that can be implemented by the project maintainers.

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the **[implementation](./implementation.md) plan** and **[issues](./issues.md) list**.

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

## Project Documentation


| Criteria                  | Rating (1-5) |
| -------------------------- | -------------- |
| Information architecture   | 3 |
| New user content           | 1 |
| Content maintainability    | 3 |
| Content creation processes | 1 |
| Inclusive language         | 3 |

Scale:

1 = Not present

2 = Needs improvement

3 = Meets standards

4 = Meets or exceeds standards

5 = Exemplary

### Summary of issues
- Information is repeated throughout the site. For example, the TUF Specification file has been referenced in more than one page. Some pages can be consolidated into others.

- The website content needs restructuring to align sections with sub-sections related to their use case. For example, information in the sections should correspond with the label of the section i.e *About* should only contain introductory content about the project.

- The information available for news users and contributors is not satisfactory. There are no step-to-step guides and tutorials for new users to get started with the software, neither are there contributor guidelines.


#### Information architecture
- There is an *overview* section explaining what TUF is and its use cases. The features, the metadata and roles are well explained with examples for each metadata.

- Repetition of content on different pages makes content confusing 

- Content needs to be re-organised to make it easier to follow 

- Docs do not have tutorials for specific feature implementation. But, there are videos explaining various use cases.

- There are not specific task-based guides for features. The available guide for  implementing the specification is part of a larger document labelled [Specification(latest)](https://theupdateframework.github.io/specification/latest)

- There is a FAQ and reporting issues sections for troubleshooting.

- There is a a well detailed API reference for multiple TUF APIs

- README on [theupdateframework.io](https://github.com/theupdateframework/theupdateframework.io)
repo is empty with little information about content of the repo.


#### New user content
- There is a *Getting started* section on the website with information about main features. But there's repetition of content from other pages. For example the *Specification (latest)* and *index* include information present in the project and overview sections. This section is confusing for new users.  

- The documentation repo does not have a contributor guide for new users to get started

- There isin't any documentation labeled 'Installation guide'. Instead, installation instructions are part of a larger document labelled [The Update Framework specification](https://theupdateframework.github.io/specification/latest)

- TUF docs do not provide information about application-specific/OS functionality in system updates. Instead the documentation states that TUF provides a secure way for applications to obtain and verify files being distributed by trusted parties.  

- There is sample code in the content that can be easily copy-pasted on other platforms.

- It's not clear whether the documentation is up-to-date as there are no dates on docs or release notes published.The only document on the site with dates is the [Specification file](https://theupdateframework.github.io/specification/latest)

#### Content maintainability & site mechanics
- The documentation is not searchable. You have to go through the site to find what you are looking for. The only source of naviagation is the menu bar.

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
   - The **About section** should only have introductory information about the project in the following sequence. *Overview, History, Project and Publications, and Timeline*. The *Code of conduct* should be moved to the Community section.

   - The **Getting Started** section should contain information on how to use the software or contribute to the project. Consider the following sequence for this section:*Security,Roles and metadata,Implementations,Videos & Tutorials, and FAQs*. The *specification(latest) and Specification index* pages should be removed because they are linked in the *Project page*

   - Include *Code of conduct* in the **Community section** 
   - The *Contribute* page should include information of various areas of contribution e.g The spec, repos etc and not to a specific repo. This way users can easily find areas of interest.

- Provide step-by-step tutorials for each use case on a separate page and label it as such. At the moment all the tutorials are included in a larger document the *Specification(latest)* 

- Create a **README** on the documentation repo with information detailing the content of the repo. Also include a **contribution guide** and information of how to set up the website and run it locally for new contributors. You can include a getting started section on the README. 

#### New user content
- Include only new user content in the **Getting started** Include information about features, tutorials and guides. Remove information about the Specification as it's repeated in the *Project section*. 

- Include a **README** in the documentation repo with a contributor guide on how to get started with Docs.

- Create an *Installation guide* on a separate page. This can contain step-to-step instructions for diffent users including beginners. Installation instructions in the [The Update Framework specification](https://theupdateframework.github.io/specification/latest) can be included here.

#### Content maintainability & site mechanics
- Include a search button on the website to make it easier for users to search and find content.

- The Docs repo should be the entry point of all repos. Meaning, the Docs README should contain all the TUF project information including links to the other repos and contributor guidelines. 


#### Content creation processes
- Provide information about the Docs website such as the tools used and how to set up ad run it locally.

- Provide information about the contribution process including having contribution guides on the website and the documentation repo. You can also include contribution guidelines to avoid violations.

- Include dates on the documentation on the website and the repo to inform users of their relevance.

- Include information about verified maintainers on the documentation repo. It makes it easier for contributors to know who to contact for assistance.

#### Inclusive language
- Replace the word *Aborted* mentioned in the [Specification document](https://theupdateframework.github.io/specification/latest/#detailed-client-workflow) with recommended suggestions in the [Inclusive language documentation](https://inclusivenaming.org/word-lists/tier-1/abort)


## Contributor Documentation


| Criteria                                 | [Rating (1-5)] |
| ----------------------------------------- | -------------- |
| Communication methods documented          | 3              |
| Beginner friendly issue backlog           | 1              |
| “New contributor” getting started content | 1              |
| Project governance documentation          | 3              |

Scale:

1 = Not present

2 = Needs improvement

3 = Meets standards

4 = Meets or exceeds standards

5 = Exemplary

### Summary of Issues
- The documentation  does not contain information tailored to contributors.
- Information about TUF communication channels is not visible in the docs repo. But the information is available on the website.
- The documentation does not contain information about other project repos and their links. Making it harder for contributors to find them.
- The documentation repo issues do not appear to be maintained. There are old issues that are still open which may confuse contributors looking for issues to work on.
- Issues do not have labels making it hard for contributors to identify suitable areas of interest

#### Communication methods documented
- Information about the TUF **slack channel** is available on the website on both the Community and Contact sections. However,this information should be visible on the doc repo README for easy access.

- The repo link on the website does not point to the documentation but rather the [Python reference implementation](https://github.com/theupdateframework/python-tuf?tab=readme-ov-file)

- Information about the mailing list is included in the documentation. There's no information about project meetings. Instead the users are directed to join the #TUF channel on CNCF slack.

#### Beginner friendly issue backlog
- Issues on the docs repo are missing labels, making it hard for contributors to identify 'Docs' issues.
- New contributors will have a hard time getting started as none of the issues are marked "good first issue” label
- Most issues on the docs repo have a title and a detailed description.
- Issues are not maintained for staleness. There are issues opened in 2021 that are still open with the information on their status.

#### New contributor getting started content
- There's a community section on the website with information on how to join the community.
- No specific documentation tailored for new users to get started the software on the website or the docs repo.
- The docs provide several channels for reporting issues, contacting the maintainers, and slack community.

#### Project governance documentation
- The project governance is well documented on the website. There's sufficient informtaion about it's history including leaders,maintainers and contributors. However, this information is not visisble in the docs repo README.

### Recommendations

#### Communication methods documented
- The documentation repo link should be included on the site as an entry point for the project. The repo can then include information about other repos.
- Include communication channels on the Docs repo README for visibility.
- Provide information about project meetings e.g a meeting link and calendar.
#### Beginner friendly issue backlog
- Maintain issues, track,close and stale old issues to reduce backlog.
- Label all issues to assist new users and contributors identify areas of interest.
#### New contributor getting started content
- Include instructions on how to contribute on a CONTRIBUTING guideline e.g how to identify issues,forking,cloning, and submitting PRs.
#### Project governance documentation
- Information on project governance is well documented on the website. However, the same needs to be included in the docs repo on GitHub.


## Website and infrastructure

| Criteria                                   | [Rating (1-5)] |
| ------------------------------------------- | -------------- |
| Single-source for all files                 | 4              |
| Meets min website req. (for maturity level) | 3              |
| Usability, accessibility, and design        | 3              |
| Branding and design                         | 4              |
| Case studies/social proof                   | 5              |
| SEO, Analytics, and site-local search       | 2              |
| Maintenance planning                        | 2              |
| A11y plan & implementation                  | 3              |
| Mobile-first plan & impl.                   | 5              |
| HTTPS access & HTTP redirect                | 5              |
| Google Analytics 4 for production only      | 1              |
| Indexing allowed for production server only | 1              |
| Intra-site / local search                   | 1              |
| Account custodians are documented           | 3              |

Scale:

1 = Not present

2 = Needs improvement

3 = Meets standards

4 = Meets or exceeds standards

5 = Exemplary


### Summary of Issues
- The website repo is named *theupdateframework.io* which makes it harder to identify it. Name it according to it's content.
- There's no guideline or tutorial to assist users to generate the website from the website repo.
- The available [TUF blog](https://theupdateframework.github.io/python-tuf) page is not available on the website. It's hosted on GitHub.
- Information about the website build, tools and how to generate it are not available on the website or the docs repo.
- Intra-site search mechanism is not available from the website. The only naviagation option is a menu bar. This makes it difficult to find information.
- Alot of empty space between the Hero section and the Navbar. Due to this spacing, information is pushed out of eyelevel. You have to scroll down to find it. 

#### Single-source requirement
- All source files are in the website repo named [theupdateframework.io](https://github.com/theupdateframework/theupdateframework.io)

#### Minimal website requirements
The website docs analysis is in progess.

#### Usability, accessibility and devices
- The website follows a mobile-first design with all pages, menu's and features visible on smaller screens.
- Website pages are readable
- The website does not provide a text-to-speech option for users.

#### Branding and design
- There's a recognizable brand for the project , a logo and blue-white color scheme used througout the website.
- The website design is good and suitable for reading. However, consider reducing space between the hero section and the Navbar.

#### Case studies/social proof
- There are case studies documented on the website under the *Adoptions* page.
- There's a logo wall of users or participating organizations documented in the *Adoptions* page.
- No avaliable community talks on the website. They have however provided links to the community channel.
- The available [TUF blog](https://theupdateframework.github.io/python-tuf) page is not available on the website. It's hosted on GitHub

#### SEO, Analytics and site-local search
- It's not clear what analytics are used on the site
- Intra-site search is not available from the website
- There's no mention of custodians of analytics and search.

#### Maintenance planning
- The Website runs on Hugo and supported by
the community. 
- It's not clear who are the maintainers of the website.


#### Other
- The website is accessible via HTTPS

### Recommendations

#### Single-source requirement
- Rename the The website repo *theupdateframework.io* to a name that reflect it's content e.g *TUFwebsite.io*. It makes it easier to find.

#### Branding and design
- Reduce empty space between hero section and Navbar to bring information to eyelevel. At the moment the information is too far down, you have to scroll to find it. 

#### SEO, Analytics and site-local search
- Provide intra-site search options such as a search button to make it easier for users to search and  find information.

#### Case studies/social proof
- Add the [TUF blog](https://theupdateframework.github.io/python-tuf) to the website.

#### Maintenance planning
- Identify website maintainers on the site and their roles so users know who to contact in case issues arise.
- Provide information about the website build and how to generate on the docs repo. 






