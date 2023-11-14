# Introduction
This document characterizes the effectiveness and completeness of the in-toto open source software (OSS) project's documentation and website as of September 2023. Documentation is analyzed with respect to CNCF criteria for completeness, discoverability, and usability.

The analysis forms the basis for the recommendations and doc plan presented in the companion document, [(../in-toto-implementation.md)].

## Scope of analysis
The documentation discussed here includes the contents of the website at https://in-toto.io and https://in-toto.readthedocs.io/, the in-toto Specification, and the documentation for contributors and users in the various GitHub repositories at https://github.com/in-toto. See [Survey of existing documentation](#survey-of-existing-documentation) below.

### How this document is organized

Recommendations are based on an analysis of the existing documentation. The analysis is divided into three sections that represent three major areas of concern:

- User documentation: concerns documentation for users of the in-toto framework; aimed at people who intend to implement or integrate the framework locally, and people who intend to use the local implementation.

- Contributor documentation: concerns documentation for new and existing contributors to the project.

- Website: concerns the mechanics of publishing the documentation; includes branding, website structure, and maintainability.

Each section begins with a summary of current status based on a rubric with appropriate criteria for the section, then proceeds to:

- Comments: observations about the existing documentation, with a focus on how it does or does not help in-toto users achieve their goals.

- Recommendations: suggested changes that would improve the effectiveness of the documentation.

This document attempts to break down the recommendations into concrete actions that can be implemented by project contributors. 
The intention is to drill down to specific, achievable work that can be completed in constrained blocks of time. 

Ultimately, the implementation items should be tracked as a series of Github documentation issues that can be undertaken by contributors.

## How to use this document

Readers interested only in actionable improvements can skip to the [implementation recommendations](../in-toto-implementation.md). For more context, read the recommendations for each of the three areas of analysis:

- [Project documentation recommendations](./assessments#recommendations)

- [Contributor documentation recommendations](./assessments#recommendations-1)

- [Website recommendations](./assessments#recommendations-2)

Readers interested in the current state of the documentation and the reasoning behind the recommendations should start with the analyses:

- [Project documentation](./assessments#project-documentation-analysis)

- [Contributor documentation](./assessments#contributor-documentation-analysis)

- [Website](./assessments#website-analysis)

# Analysis and Recommendations

## Project documentation analysis

| Criteria                   | 1   | 2   | 3   | 4   | 5   |
| ---                        | --- | --- | --- | --- | --- |
| Information architecture   |     |     |  x  |     |     |
| New user content           |     |     |  x  |     |     |
| Content maintainability    |     |     |  x  |     |     |
| Content creation processes |     |     |  x  |     |     |

Scale: 

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

**Information Architecture**: 

Content is well-written, clear, and fairly complete, but scattered among the Specification, GitHub READMEs, and read-the-docs. 
Almost all doc content is in GitHub (in README files, the Specification, or comments in demos). 
The purpose of specific GitHub repos and folders is not obvious and doesn't seem to be described anywhere. This makes it difficult to find doc and doc sources.
Repo naming and organization need to be reconsidered.
 - The docs repo contains the spec, which is a very good spec, but is also apparently standing in for user documentation. The README for this repo does not (despite the name) say anything explicitly about documentation, or explain what is supposed to go in the repo.
 - The in-toto/in-toto/in-toto folder contains the Python reference implementation, and the doc subfolder  contains the source for the generated API Reference docs for that implementation. This organization and naming is unhelpful and confusing. There needs to be a policy for how different implementations are located, named, and documented.
- Much documentation, addressed to different audiences, is in READMEs throughout the many repos. It is often difficult to figure out the purpose of a given repo and the intended users.

**New user content**:

There are a lot of of good intro topics and get-started demos, but they are not immediately discoverable or identifiable. 
- The Specification has an excellent high-level overview that includes the expected workflow, identifies user roles, and provides a Glossary. It would be very helpful for new users to separate out and clearly label these components.
- A decent Getting Started guide for beginners is currently contained in the README for the main repo.The Get Started menu on the home page currently points to demos and the spec, but not to this content.
  
**Content maintainability**: 

The scattered docs make specific info hard to find, and lead to duplication that can complicate maintenance. 
High-level overviews are provided in several places, and mostly embedded in other documents. These are hard to compare and keep in sync.

**Content creation processes**: 

The Contributing and Governance files do not mention changes or additions to documentation as potential areas of contribution.

### Recommendations

**Information Architecture**

A combination of renaming and restructuring can resolve some of the discoverability problems. A comprehensive repo map and documentation guide can do more.
 - Move most of the documentation into the website. 
 - Create a Documentation Home Page and link it to a Docs or Documentation button on the in-toto home page.
 - On the Doc home page itself, provide an index or TOC that shows the organizational structure of the documentation, with a link to and short description of every section. 

The Read-the-Docs (RTD) site,  https://in-toto.readthedocs.io/ currently has the reference docs for the Python reference implementation. 
If you use the same tool to create web pages for the rest of the documentation, that URL can be repurposed as the Doc home page (and eliminate a too-general URL for the reference implementation). 
The current Python reference doc can be moved into a "Reference Documentation" subsection, whose home page can also include or point to references for other implementations.
Include a map to the GitHub repos, with links and descriptions of the intended usage. Revisit this after any restructuring and renaming of repos.

**New user content**

Extract information for the Specification to create a high-level overview aimed explicitly at evaluators and new users that describes the expected workflow, identifies user roles, and provides a Glossary. Label those sections or put them on separate pages to that they can be more easily found.
Turn the README for the main repo content into a Get Started document and make that the first menu item in the Get Started menu (wherever that ends up).

**Content maintainability**

Almost all doc content is in GitHub (in README files, the Specification, or comments in demos). 
Most of it should be exposed as indexed documents on the website to make it versionable, editable, and localizable.
 - Move most of the documentation into read-the-docs (RTD) so that it can properly indexed and maintained. 
 - Repurpose the README files in GitHub to provide a quick summary of what is in the repo, and link to the Doc home page (or directly into a relevant section of the web doc) for detailed information.
 - Offer a single overview page with increasing layers of depth to help different audiences (evaluators, new users, experienced users, contributors).
This will consolidate overviews currently found in several places and make revising and maintaining the overviews easier. A single source for some of the text would help.

**Content creation processes**

Material explicitly addressed to documentation contributions and standards should be added and made accessible from the top-level doc roadmap as well as from the existing contributor pages.
- Procedures for creating and maintaining docs need to be documented.
   - The process should include a policy for where reference docs live in the repo structure and how docs for different implementations are distinguished and identified.
- Policy and procedures for documenting implementations need to be decided and published for contributors.
   - Reference documentation for additional implementations should be actively solicited from the contributor community.

## Contributor documentation analysis

| Criteria                                  | 1   | 2   | 3   | 4   | 5   |
| ---                                       | --- | --- | --- | --- | --- |
| Communication methods documented          |     |     |     |  x  |     |
| Beginner friendly issue backlog           |     |  x  |     |     |     |
| “New contributor” getting started content |     |  x  |     |     |     |
| Project governance documentation          |     |     |     |  x  |     | 

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

**Communication methods documented**: A Contact channels list is available from home page under Community > Contact.

**Beginner friendly issue backlog**: A "Good First Issue" label is available and used for PRs for specific implementations. Not in much general use.

**“New contributor” getting started content**: The Community README points to "Good First Issues" list for specific repos. I couldn’t find explicit instructions for new contributors, or any first issues for other kinds of contribution (such as docs).

**Project governance documentation**: Clearly described and discoverable on GOVERNANCE page.

### Recommendations

**Communication methods documented**

   Since most of the documentation is currently in GitHub, rather than on the web site, the Contact channels list could be usefully added to the READMEs for the main and community repos.
   Contact info, which is unlikely to change, can  be linked from a clearly labeled section of the new Docs website.

**Beginner friendly issue backlog**

   Documentation would benefit from a backlog of issues labeled with both "Good First Issue" and "Documentation". 
   Use of these labels would have to be strongly encouraged in getting-started content for contributors.

CNCF has developed a new tool, CLOTributor, that can help orient new contributors: see https://clotributor.dev/ and https://github.com/cncf/clotributor.

  One of its goals is to surface interesting opportunities for potential contributors to Cloud Native projects, allowing them to find those that suit their skills and interests best. 
  To achieve this, CLOTributor scans periodically hundreds of repositories, indexing issues that match certain criteria:

- Contain the help wanted label
- Their state is OPEN
- They are unassigned
- Updated within the last year
  
**“New contributor” getting started content**

   The CONTRIBUTING page should have much more explicit instructions for how to submit PRs and how to find good first issues.

**Project governance documentation**

- The governance policies call out the Contributors and Maintainers project roles, and mention that doc changes require one maintainer approval. 
They should also define Doc Contributors as a role, with information on documentation standards, and who should review such changes.
- The CONTRIBUTING page should explicitly mention documentation changes as distinct from "making code changes" as an area of contribution.
- The CONTRIBUTING page needs explicit information for how to submit issues and feature requests for documentation, since documentation does not have a single "corresponding GitHub repository".

## Website analysis

| Criteria                                    | 1   | 2   | 3   | 4   | 5   |
| ---                                         | --- | --- | --- | --- | --- |
| Single-source for all files                 |     |     |     |  x  |     |
| Meets min website req. (for maturity level) |     |  x  |     |     |     |
| Branding and design                         |     |     |     |  x  |     |
| Case studies/social proof                   |     |     |  x  |     |     |
| Maintenance planning                        |     |     |  x  |     |     |
| A11y plan & implementation                  |     |     |  x  |     |     |
| Mobile-first plan & impl.                   |     |     |     |     |  x  |
| HTTPS access & HTTP redirect                |     |     |     |     | x   |
| Google Analytics 4 for production only      |  x  |     |     |     |     |
| Indexing allowed for production server only |     |     |     |     |  x  |
| Intra-site / local search                   |     |  x  |     |     |     |
| Account custodians are documented           |  x  |     |     |     |     |

Scale:

- 1 = (Is not present or requires significant work)
- 3 = (Is present, but needs work)
- 5 = (Is executed extremely well or no improvement required)

### Comments

**Single-source for all files**: Source is in in-toto.io repo.

**Meets min website req. (for Incubating)**: Doc assessment is in progress. Very little documentation is published directly on the website. Most docs are in GitHub, only a few of those are directly linked from the website.

**Branding and design**: Brand is evident across the website but the button component is an exception; it does not conform to the in-toto design/brand.

**Case studies/social proof**: Menu item About > Adoptions & Integrations links to a GitHub repo with folders created and maintained by adopters. No icons or listing of adopters appear on the web site.

**Maintenance planning**: The Website runs on Hugo, which is well supported by the community. It’s hard to tell who maintains what. In other words, there are no custodians for website maintenance.

**A11y plan & implementation**: The in-toto website is accessible but lacks in some vital areas such as element naming, color contrast, and internationalization.

**HTTPS access & HTTP redirect**: HTTPS is the default, HTTP redirects correctly.

**Intra-site / local search**: There is no site map or search mechanism; the only navigation is through a minimal menu bar.

### Recommendations

**Meets min website req. (for Incubating)**, **Intra-site / local search**

Reassess these areas after adopting recommendation to transfer most of the documentation to the website.

**A11y plan & implementation**

The following changes will improve accessibility for all users:
- Images: Image elements must have an alt attribute.
- Color contrast: Button background and foreground colors do not have enough contrast.
Primary recommendation is to use a darker color as background and lighter color as foreground.
The background color should match with the project's brand color.
- Internationalization: The HTML tag must have a lang attribute set.

**Analytics for production-only website**

Add analytics added to help monitor site traffic and diagnose issues like 404. 
CNCF recommends you use the Google Analytics 4 (GA4) tool; note that the project must be added to the CNCF's GA4 account. 
Feel free to reach out to the CNCF team via the Service Desk platform for further assistance.

**Maintenance planning**

Document account custodians by setting up an OWNERS.md file listing each maintainer and their respective area of ownership.
