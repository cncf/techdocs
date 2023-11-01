# Introduction
This document analyzes the effectiveness  and completeness of the in-toto open source software (OSS) project's documentation and website. It is funded by the CNCF Foundation as part of its overall effort to incubate, grow, and graduate open source cloud native software projects.
According to CNCF best practices guidelines, effective documentation is a prerequisite for program graduation. The documentation analysis is the first step of a CNCF process aimed at assisting projects with their documentation efforts.
## Purpose
This document was written to analyze the current state of in-toto documentation. It aims to provide project leaders with an informed understanding of their project documentation and to outline an actionable plan for improvement. This document:

- Analyzes the existing documentation with respect to CNCF criteria for completeness, discoverability, and usability.
- Recommends a program of key improvements with the largest return on investment
- Provides guidance to implementing the recommended improvements

## Scope of analysis
The documentation discussed here includes the contents of the website at https://in-toto.io and https://in-toto.readthedocs.io/, the in-toto Specification, and the documentation for contributors and users in the various GitHub repositories at https://github.com/in-toto. See [Survey of existing documentation](#survey-of-existing-documentation) below.

### How this document is organized

The document has two parts, [Analysis and recommendations](./assessments#analysis-and-recommendations-1)
 and [Implementation](./assessments#implementation).

### Analysis and recommendations

Recommendations are based on an analysis of the existing documentation. The analysis is divided into three sections that represent three major areas of concern:

- User documentation: concerns documentation for users of the in-toto framework; aimed at people who intend to implement or integrate the framework locally, and people who intend to use the local implementation.

- Contributor documentation: concerns documentation for new and existing contributors to the project.

- Website: concerns the mechanics of publishing the documentation; includes branding, website structure, and maintainability.

Each section begins with a summary of current status based on a rubric with appropriate criteria for the section, then proceeds to:

- Comments: observations about the existing documentation, with a focus on how it does or does not help in-toto users achieve their goals.

- Recommendations: suggested changes that would improve the effectiveness of the documentation.

### Implementation

The Implementation section of this document attempts to break down the recommendations into concrete actions that can be implemented by project contributors. 
The intention is to drill down to specific, achievable work that can be completed in constrained blocks of time. 

Ultimately, the implementation items should be tracked as a series of Github documentation issues that can be undertaken by contributors.

## How to use this document

Readers interested only in actionable improvements can skip to the implementation recommendations. For more context, read the recommendations for each of the three areas of analysis:

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

# Implementation

## Organizational principles
Review [CNCF website design guidelines](https://github.com/cncf/techdocs/blob/main/docs/website-guidelines-checklist.md) for the project home page and architecture. Consult with CNCF TechDocs or other professional technical documentation specialists to develop an appropriate information architecture based on the different user populations and their specific tasks and information needs.

To transfer relevant information to the people who need it as efficiently as possible, documentation should be organized with the reader audience in mind. For example:

- End-users with specific roles should be clearly directed to instructional material for performing specific tasks.
- Administrators who are configuring the tool have a different set of tasks, and require different instructions and reference material.
- Spec implementors are another reader population who need information on how to provide reference doc for their implementations.
- Contributors should be pointed to the contribution and governance rules, and be able to find good first issues to get started on.

Similarly, the depth and detail of introductory conceptual material should be clearly addressed to and tailored to:

- *Evaluators* who are deciding whether to adopt the tools and methodology. This could be on the main website, with a marketing slant.
- *New users* who will need to either integrate or configure the tools. This could be the intro that is on or linked prominently from the Doc Home Page.
- *Potential contributors* who are planning to extend the tools or implement the specification. These readers require more depth of information about the architectural intentions and decision criteria, which would just be confusing and unnecessary to other reader populations. 
See a more detailed analysis of reader roles and their documentation needs below.

### Reader roles
To get the right information to the right reader, each page should be explicitly addressed to a specific audience, and the organization and navigation for the site should explicitly direct users of different types to relevant sections.

- The website (both the in-toto home page and the doc home page) should clearly identify and name the populations of readers, and what they need and can reasonably expect from in-toto documentation.
- The documentation should be organized into sections that are clearly aimed at specific reader types with similar goals and information needs.
- Every page should be explicitly addressed to a specific audience.

Readers with the following roles are potential audiences for project documentation.

| Reader Role | Doc needs |
| ---                     | --- |
| **Evaluators** determine whether in-toto meets their needs and can be implemented in their organization. | Good high-level technical overview w/marketing slant, analysis business benefits, adoption and success stories, and workflow overview. |
| **End users**  can be *Project owners* and *Functionaries*. | End users can be new or experienced. New users need a clear learning path and general examples. Experienced users need reference docs and use-case examples. |
| **Project owner** defines the layout to be followed by, e.g. using the in-toto CLI tools. When doing so, they specify who is intended to sign for every piece of link metadata, any sublayouts that may exist, and how to further verify accompanying metadata. | New users need overview, demo, templates, basic instructions. Experienced users need deeper architectural info, use cases, examples. |
| **Functionaries** perform the intended actions and produce link metadata for each step. | *?? do these users read in-toto doc at all, or is the project owner responsible for instructing them in how to sign and verify their steps??* |
| **Contributors** can be contributing to the *code* base or to the *documentation*. | |
| **Code contributors**  are members of the community who: *make code changes*, *submit changes to specifications*, *create new integrations*, and *submit issues, feature requests and more* | These contributors need to understand the GitHub repo structure, the contribution policies and procedures, coding and naming standards and conventions. ITE developers and integrators need direction on how and where to document their own additions. |
| **Doc contributors**  (to be added) are members of the community who use the **Edit** button to make changes to published documents, or create new documentation. | These contributors need clear doc contribution standards, naming and style conventions, and clear instructions on how to create or edit existing doc, and where documents should go (that is, what should go on the website or in GitHub, where a subject fits in the doc architecture) |

 

## General doc plan
To begin achieving the goal of documentation that meets the needs of different user populations and is discoverable by the intended readers, we recommend the following general plan.

1. Initial tasks:
Create a Documentation home page on web site, linked prominently from About menu. 

   Create a **Getting Started** page on web site from README content for the main repo (https://github.com/in-toto/in-toto.README.md)

   Link as first menu item in Get started menu (currently 1st item is link to demo)

   Expose parts of spec as separate named documents on website, as:
   - [System Overview](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview)  (compare content to https://in-toto.io/in-toto/README and current website About - create versions of increasing depth to address to specific audiences)
   - [Glossary](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#17-terminology) (convert to alphabetized table) 
   - [Workflow/Personas](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview) (clearly identify user types and point to relevant doc sections)
2. Create a high-level technical overview on the project home page suitable for evaluators (see Reader Roles). This might be one of the existing overviews, or can be adapted from them.
3. Create an index or map to existing docs as a temporary guide, preparatory to moving that information into RTD and integrating it into a doc architecture.
4. Encourage documentation contributions:
   - Add Documentation as a contribution area, clarify process. Contributor docs should:  
      - List reviewers/approvers for doc changes and additions.
      - Encourage the use of Documentation and Good First Issue tags for issues and PRs.
      - Make doc contributors responsible for updating doc roadmaps/ToCs, to reflect any changes they make to the doc structure (adding or moving documents). 
   - Specify a documentation "champion" to review and approve doc PRs, decide doc issue priorities -- Justin Cappos?
   - Develop doc standards (style guide, page templates, locations)
   - Develop doc architecture
   - Develop and document a doc versioning/update process that includes updating the Doc home page as locations change and doc is added.

## Actionable items

1. Create **Doc home page** 

   The new **Doc home page** can be the landing page for the [read-the-docs site](https://in-toto.readthedocs.io/en/latest/), which currently lands on the auto-generated Python reference doc. 

   1.1 To be immediately useful, the landing page should provide a *top-level roadmap* to existing docs. This is a necessary step in raising the maturity level of this project. 
   The roadmap should initially describe and provide access to:
   - Specification
   - Basic demo
   - Python reference implementation along with its reference docs (which need to move into a subdir) 
   - Overview of the git repo structure.

   1.2 Move the Description and pointer to the Python Reference implementation to an Implementations section, and move the RTD reference docs for it into this section.

   1.3 Create a doc contributors policy requiring that the Doc home page be updated to reflect any changes to the doc locations and structure. 

2. Expose new-user information 

   2.1 Move the content of the [README for the main repo](https://github.com/in-toto/in-toto) to a separate **"Getting Started" document**, with a prominent pointer on the in-toto home page, such as the top menu item in the "Get Started" menu. Replace the README  with brief introductory notes that link to the documentation.

   2.2 As a stop-gap, add a top-level TOC for the existing Specification to show what is in it.  

   2.3 Move important sections out of the spec into separate documents, and add them to the Doc home-page TOC. 
    - Evaluate the depth of the [System Overview](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview) and decide which user population it is most suitable for, or adapt to new tailored versions.
   - Expose [Glossary](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#17-terminology) as a separate document, formatted in an alphabetized table for easy reference.
   - Expose [Workflow Description](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.md#51-workflow-description), which identifies the different user roles. Adapt this to a separate document that also points to the appropriate doc for each role, which would be particularly helpful to new users.

3. Sort technical overviews by increasing depth

   A basic intro, possibly suitable for evaluators, is already linked directly from the [home page About tab](https://in-toto.io/in-toto/). The short intro links to the [latest spec in GitHub](https://github.com/in-toto/docs/blob/master/in-toto-spec.md), which contains a more comprehensive overview.  (NOTE: The [PDF link to the stable spec](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.pdf) is broken. This should be fixed or removed.)

   3.1 Initially, transfer the tech overview content from the Specification into a top-level Technical Overview document in RTD, and link as "Read more..." from the basic one. 

   3.2 Determine whether the Tech Overview currently in the spec is suitable for new users or for contributors, and adapt or create another version of suitable depth for the other audience. 

   3.3 The most in-depth overview should also point to academic papers for further architectural detail:
      https://www.usenix.org/system/files/sec19-torres-arias.pdf, https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias 

4. Stub in doc architecture  

   Arrange and choose content from existing overviews to create **High-level technical overviews** of increasing depth, addressed to specific audiences (evaluators, new users/adopters, experienced users and administrators, contributors of different types (ITE proposers, doc writers and editors...).  

   4.1 Add overviews as text-only pages to RTD.

   4.2 Make each tech overview the introductory page to a section aimed at a specific audience.
      Include an index to current doc (mostly in GitHub Readme files) relevant to the audience. For example, the [ITE spec](https://github.com/in-toto/ITE/blob/master/ITE/1/README.adoc) that describes the ITE process, which is two levels down from main in the [ITE repo](https://github.com/in-toto/ITE/).

5. Reference material

   5.1 Decide where reference docs for different implementations should live in the doc structure and where their sources live in the repo structure.
      The doc roadmap should clearly identify and link to the existing generated pages as *reference* doc for the Python reference implementation. It should also list and link to reference docs for other implementations. 

   5.2 Publish the policy and procedures for developers to document their implementations.
      - Develop a documentation policy for implementers.
        For example, the auto-generated doc for the [Go implementation](https://pkg.go.dev/github.com/in-toto/in-toto-golang) is not at all parallel with the Python RTD reference doc - it is all in GitHub, and has no introductory or explanatory content, or navigational aids.

6. Content creation process

   6.1 The [read-the-docs site](https://in-toto.readthedocs.io/en/latest/) has an [Edit the Doc button](https://github.com/in-toto/in-toto/blob/develop/doc/source/index.rst). Instead of pointing directly to the source files, make the button point to a page with instructions for [doc contributors](https://github.com/in-toto/community/blob/main/CONTRIBUTING.md), and a link to the [governance policies](https://github.com/in-toto/community/blob/main/GOVERNANCE.md).

   6.2 Decide on a structure for documentation source files in the project doc repo.

   6.3 Make sure the policy pages include or link to:
     - Contact info for maintainer/reviewer for documentation contributions.
     -  Available doc style guides/templates (as well as code standards)
     - Usage guidelines for RTD (or other doc tool) and any project-specific usage standards.
     - Current doc architecture plan.
     - Map to documentation source files.

# Survey of existing documentation

The following links are loosely sorted into conceptual categories.
 
**Doc issue from contributor**: https://github.com/in-toto/community/issues/9

**Home page** https://in-toto.io/

**GitHub repo for home page**: https://github.com/in-toto/in-toto.io 

**Specifications**  
    https://github.com/in-toto/docs/blob/master/in-toto-spec.md 
(also contains most of the user doc)

 https://github.com/in-toto/attestation 

+ language-specific implementations of spec

   https://github.com/in-toto/in-toto-java

   https://github.com/in-toto/in-toto-rs

   https://github.com/in-toto/in-toto-golang

+ GitHub repo READMEs

   https://github.com/in-toto/in-toto

   https://github.com/in-toto/demo

+ Doc generation repo: https://github.com/in-toto/docs

   + Generated (read-the-docs) for Python reference implementation

   + Installation https://in-toto.readthedocs.io/en/latest/installing.html 

   + CLI  https://in-toto.readthedocs.io/en/latest/command-line-tools/index.html

   + API https://in-toto.readthedocs.io/en/latest/api.html 

   + Metadata model https://in-toto.readthedocs.io/en/latest/model.html

   + Configuration https://in-toto.readthedocs.io/en/latest/configuration.html

   + Layout example https://in-toto.readthedocs.io/en/latest/layout-creation-example.html (+ ptr to demo, not in read-the-docs)

+ ITE = in-toto Enhancements (additions to specification)   

   https://github.com/in-toto/ITE/blob/master/README.md

   https://github.com/in-toto/ITE/blob/master/ITE/1/README.adoc#abstract

+ Contributor and Community

   https://github.com/in-toto/community/blob/main/README.md

   https://github.com/in-toto/community/blob/main/CONTRIBUTING.md

   https://github.com/in-toto/community/blob/main/CODE-OF-CONDUCT.md

   https://github.com/in-toto/friends (ongoing & complete integrations)

+ Academic papers (PDFs)

   https://www.usenix.org/system/files/sec19-torres-arias.pdf 

   https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias 
