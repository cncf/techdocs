# Notary Project Docs Assessment

Prepared by: `Nate Waddington`
Date: `2021-07-07`
Project: [Notary Project](https://github.com/notaryproject/)

## Introduction

This document assesses the quality and completeness of a project's documentation and website (if present).

This document:

- Measures existing documentation quality against the CNCF’s standards
- Recommends specific and general improvements
- Provides examples of great documentation as reference 
- Identifies key improvements with the largest return on investment

## How this document works

The assessment is divided into three sections: 

- **Project documentation:** for end users of the project; aimed at people who intend to use it
- **Contributor documentation:** for new and existing contributors to the project
- **Website:** branding, website structure, and maintainability

Each section rates content based on different [criteria](criteria.md).

## Project documentation 

 Criteria: 
 - 1 = (Is not present or requires significant work) 
 - 3 = (is present, but needs work) 
 - 5 = (is executed extremely well or no improvement required) |

### V1

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| ---                        | --- | --- | --- | --- | --- |
| Information architecture   |     |     | ✅  |     |     |
| New user content           |     |     | ✅  |     |     |
| Content maintainability    |     | ✅  |     |     |     |
| Content creation processes |     |     | ✅  |     |     |

### V2

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| ---                        | --- | --- | --- | --- | --- |
| Information architecture   |     |     | ✅  |     |     |
| New user content           | ✅  |     |     |     |     |
| Content maintainability    | ✅  |     |     |     |     |
| Content creation processes | ✅  |     |     |     |     |

### Comments

There are two versions of notary that need to be supported with documentation.
- V1 is housed with [The Update Framework](https://github.com/theupdateframework/notary), and the docs are included as a set of markdown files in the [/docs folder](https://github.com/theupdateframework/notary/tree/master/docs)
- V2 is housed with The Notary Project (https://github.com/notaryproject/notaryproject) 

**Information Architecture**: 
- As there is no website as yet, and development is still ongoing, V2's Project Documentation is all contained within markdown files in the notaryproject repo.

**New user content**:
- What is there does a good job of explaining the project, but doesn't provide many docs focused on new users.

**Content maintainability**:
- The docs currently aren't versioned or localized, and is depending on GitHub for search.

**Content creation processes**:
- There are links to community discussions, but as there is no website yet there is no space to point to regarding docs creation.

### Recommendations

V1 Docs will likely need to be reworked once an information architecture is setup for the new site. The new site IA can likely be informed by the existing V1 docs.

The notaryproject.dev site should primarily focus on the V2 work, but V1 needs to be represented as well.
- V1 content seems quite good, but looks like it was developed for a site that no longer uses it.
- For MVP, I'd suggest focusing on V2 content, and linking out to the existing V1 documentation in the location that is currently rather than incorporating it right off the bat.

We recommend moving any relevant version 1 content to the notary project org, relieving your users of the need to bounce between two repositories to find information.

## Contributor documentation 

**Note**, as my recommendation above is to link to the V1 documentation as is for the website MVP, the remainder of this assessment will only be looking at the existing V2 documentation.

Criteria 
- 1 = (Is not present or requires significant work)
- 3 = (is present, but needs work)
- 5 = (is executed extremely well or no improvement required) |

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ---                                       | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     | ✅  |     |     |
| Beginner friendly issue backlog           |     | ✅  |     |     |     |
| “New contributor” getting started content | ✅  |     |     |     |     |
| Project governance documentation          | ✅  |     |     |     |     |

### Comments

_Provide comments for each rating above, 1-2 sentences max, bullet point list_

**Communication methods documented**
- There is a Contributing & Conversations section in the main README (tho, it is mis-linked in the table of contents)

**Beginner friendly issue backlog**
- There are "Documentation," "spec," and "good first issue" issue tags
- Most issues seem to link out to hackmd.io notes, but those note are are well written and informative

**“New contributor” getting started content**
- Same as above, there is a Contributing & Conversations section, but there are not yet any instructions for contributions.

**Project governance documentation**
- This appears to be actively being worked on, and there is a "Governance" issue tag in use. 


### Recommendations

Most of the issues in this section are a function of not having a website yet, and the project still being in a building phase.
- As the website build process starts, put together a skeleton IA that can be filled in as the project grows.

Regarding beginner friendliness, consider processes/documents for:
* Triaging docs issues
* Clearly marking a way for new contributors to make code or documentation contributions (i.e. a “good first issue” label), and define what makes a good first issue
* Maintaining issues for staleness
* New contributors/your first contribution
* Letting new users know where to get help


## Website

Criteria
- 1 = (Is not present or requires significant work)
- 3 = (is present, but needs work) 
- 5 = (is executed extremely well or no improvement required) |

| Criteria                  | 1   | 2   | 3   | 4   | 5   |
| ---                       | --- | --- | --- | --- | --- |
| Branding and design       |     | ✅  |     |     |     |
| Case studies/social proof | ✅  |     |     |     |     |
| Maintenance planning      | ✅  |     |     |     |     |

### Comments

Currently there is no website, so some of this is not applicable (as we're starting the project of building one)

**Branding and design**:
- Artwork exists https://github.com/cncf/artwork/tree/master/projects/notary
 
**Case studies/social proof**:
- I'm not sure this is applicable for V2 yet. V1 may have some of this information.

**Maintenance planning**: 
- N/A

### Recommendations

There may not be much now, but as we collect information for this site, we can ask the following questions:

**Regarding Case studies/social proof**:
* Are there case studies available for the project?
* Are there user testimonials available?
* Can we start a blog? 
* Are there community talks for the project 
* Is there a logo wall of users/participating organizations?


## Final Recommendations

Let's design an Information Architecture that can grow with the project and build a website!
- Hugo / Netlify would be a good stack. (I think that some of the original V1 docs was actually written for a hugo site, even though it's just flat files now).
- Docsy would be a good template to start with as there is a lot of CNCF knowledge and help available with this template, and it can manage both versions and internationalization when the time comes.

I see no issue with the CNCF working with the Notary Project maintainers to build a website that will serve their needs as the project grows.

https://github.com/notaryproject/notaryproject.dev
