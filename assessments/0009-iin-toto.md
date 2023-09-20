# Assessment of in-toto documentation

Prepared by: \@jbogarthyde ([@add-link-to-your-github-id](https://github.com/cncf/techdocs))<br>
Date: 2023-08-29

## Introduction

This document assesses the quality and completeness of the [in-toto project's](https://in-toto.io/) documentation and website.

This document:

- Measures existing documentation quality against the CNCF’s standards
- Recommends specific and general improvements
- Provides examples of great documentation as reference
- Identifies key improvements with the largest return on investment

## How this document works

- The **Recommendation Summary** provides a summary of the direction the documentation  organization and architecture should take to improve its effectiveness.
- The **Recommended Actions** section lists suggested steps for achieving the recommended goals.

Detailed **Assessments** rate the maturity state of current content based on different [criteria](criteria.md), and provides some corresponding specific recommendations.
Assessments are divided into three sections:

- **Project documentation:** for end users of the project; aimed at people who intend to use it
- **Contributor documentation:** for new and existing contributors to the project
- **Website:** branding, website structure, and maintainability

## Recommendation Summary

The maturity level of the project requires that the documentation be available from the in-toto website. We recommend **moving most of the documentation onto the website** so that it can properly indexed and maintained, and adding a **Documentation home page**, accessed from the project home page and a top-level menu or menu-item in the About menu.

The documentation currently living in the various GitHub repos should be brought into the explicit Docs website, as the "source of truth" set of documentation. We recommend moving most of the documentation content into a documentation tool so that it can properly indexed and maintained. Generally, the CNCF TechDocs team suggests a stack of: Hugo - Netlify - Docsy.

- Because the reference material for the Python reference implementation is already in read-the-docs (RTD) and available online at https://in-toto.readthedocs.io/, you could continue using that tool. The existing https://in-toto.readthedocs.io/ location can be turned into a Docs home page, and linked prominently under a Documentation button on the home page. The reference material should be a clearly labeled section within that site. The existing site can be expanded to include the conceptual and instructional material that is now scattered around GitHub and PDF white papers. 

To transfer relevant information to the people who need it as efficiently as possible, documentation should be organized with the reader audience in mind. For example:
- End-users with specific roles should be clearly directed to instructional material for performing specific tasks.
- Administrators who are configuring the tool have a different set of tasks, and require different instructions and reference material.
- Spec implementors are another reader population who need information on how to provide reference doc for their implementations.
- Contributors should be pointed to the contribution and governance rules, and be able to find good first issues to get started on.

Similarly, the depth and detail of introductory conceptual material should be clearly addressed to and tailored to:

- *Evaluators* who are deciding whether to adopt the tool. This could be on the main website, with a marketing slant.
- *New users* who will need to either use or configure the tool. This could be the intro that is on or linked prominently from the Doc Home Page.

Readers planning to extend the tools or implement the specification require more depth of information about the architectural intentions and decision criteria, which would just be confusing and unnecessary to other reader populations. See a more detailed analysis of **Reader Roles** and their documentation needs below, following the list of specific actionable items.
  
## Recommended Actions 

Primary recommendation is to move as much documentation as possible from GitHub onto the project website, index the rest.
The goal is to move all the docs to a single platform like read-the-docs (RTD) and organize it with a good ToC, conceptual material that introduces information in context, and where appropriate, indexes for specific audiences or subject areas. That will take some time to accomplish, and in the meantime, we recommend that a guide to existing docs be created on the new Doc home page.

To begin achieving this goal, we recommend the following general plan.

1. Initial tasks:
   - Create a Documentation home page on web site, linked prominently from About menu
   - Include link to Reference Doc (already in read-the-docs) and clarify that it is for the Python reference implementation 
   - Create a **Getting Started** page on web site from README content for the main repo (https://github.com/in-toto/in-toto.README.md)
   -- Link as first menu item in Get started menu (currently 1st item is link to demo)
   - Surface parts of spec as separate named documents on website, as:
   -- **Technical Overview** 
(compare content to https://in-toto.io/in-toto/README and current website About - create versions of increasing depth to address to specific audiences)
   -- [Glossary](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#17-terminology) (convert to alphabetized table) 
   -- [Workflow/Personas](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview) (clearly identify user types and point to relevant doc sections)

2. Create a high-level technical overview on the project home page suitable for evaluators. See "Reader roles" below".
3. Create an index or map to existing docs in GitHub as a temporary guide, preparatory to moving that information into RTD and integrating it into the doc architecture.
4. Contributor doc priorities 
   - Add Documentation as a contribution area, clarify process.
   - Specify a documentation "champion" to review and approve doc PRs, decide doc issue priorities -- Justin Cappos?
   - Develop doc standards (style guide, page templates, locations)
   - Develop and document a doc versioning/update process  
5. Clearly identify and name the populations of readers and what they need and can reasonably expect from in-toto documentation.
   The documentation should be organized into sections that are clearly aimed at specific reader types with similar goals and information needs.
   Every page should be explicitly addressed to a specific audience. 
 
### Specific actionable items

1. To be immediately useful, the new **Doc home page** should provide a **top-level roadmap** to existing docs. This is a necessary step in raising the maturity level of this project. 

   Review [CNCF website design guidelines](https://github.com/cncf/techdocs/blob/main/docs/website-guidelines-checklist.md) for the project home page and architecture. Consult with CNCF TechDocs or other professional technical documentation specialists to develop an appropriate information architecture based on the different user populations and their specific tasks and information needs.

- The new **Doc home page** should probably be the landing page for the [read-the-docs site](https://in-toto.readthedocs.io/en/latest/), which currently lands on the auto-generated Python reference doc. Tech overviews addressed to specific audiences should be added to RTD as text-only pages, organized by intended audience. 

- The new **Doc home page** should initially describe and provide access to the Specification, the basic demo, and the read-the-docs reference material, and provide an overview of the git repo structure.
  
   -  As a stop-gap, add a top-level TOC for the Spec to show what is in it, and also point to the [read-the-docs site](https://in-toto.readthedocs.io/en/latest/) for detailed reference information for the Python reference implementation.
   
   - A more comprehensive fix is to move important sections out of the spec into separate documents, and add them to the Doc home-page TOC. More on that in the New Users section below.

   - The doc-update standard should mandate that the Doc home page be updated to reflect any changes to the doc locations and structure. 

2. A **doc index** on the Doc home page should identify information aimed at particular audiences, much of which is currently in READMEs. For instance, the [ITE spec](https://github.com/in-toto/ITE/blob/master/ITE/1/README.adoc) that describes the ITE process is two levels down from main in the [ITE repo](https://github.com/in-toto/ITE/).

3. **High-level technical overviews** of increasing depth are needed, addressed to specific audiences; evaluators, new users, experienced users and administrators, contributors of different types (ITE proposers, doc writers and editors...).

- A basic intro, possibly suitable for evaluators, is already surfaced directly on the [home page About tab](https://in-toto.io/in-toto/).
- The About page has a link to the [latest spec in GitHub](https://github.com/in-toto/docs/blob/master/in-toto-spec.md), which contains a more comprehensive overview. This intro should immediately be surfaced as a Technical Overview document in RTD. It could be linked to the basic one as "Read more...".
   (The [PDF link to the stable spec](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.pdf) is broken. This should be fixed or removed.)
  
- Determine whether the Tech Overview currently in the spec is suitable for new users or for contributors, and adapt or create another version of suitable depth for the other audience. The most in-depth overview should also point to academic papers for further architectural detail:
https://www.usenix.org/system/files/sec19-torres-arias.pdf 
https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias 

4. **Reference material**

The reference material currently in RTD is complete and well-structured. However, it is not immediately discoverable, and it is not clear that it applies only to the Python reference implementation. This can be made clear with proper indexing and labeling. 

   - The doc roadmap should clearly identify and link to the existing generated pages as *reference* doc for the Python reference implementation. It should also list and link reference docs for other implementations, such as auto-generated docs for the Go implementation: https://pkg.go.dev/github.com/in-toto/in-toto-golang. (This doc is not at all parallel with the Python RTD reference doc - it is all in GitHub, and has no introductory or explanatory content, or navigational aids.)

There seems to be no plan for supplying similar reference doc for other implementations (such as auto-generated but very differently presented reference docs for the Go implementation: https://pkg.go.dev/github.com/in-toto/in-toto-golang). A documentation policy for implementers should be developed.

   - Decide where reference docs for different implementations should live in the doc structure and where their sources live in the repo structure. Publish the policy and procedures for developers to document their implementations.

5. **New user content**

- The [README for the main repo](https://github.com/in-toto/in-toto) looks like the intended starting place. This content should be surfaced as a separate **"Getting Started" document**, with a prominent pointer on the home page, such as the top menu item in the "Get Started" menu. We recommend moving all of this the doc to a documentation platform such as RTD. Put some brief introductory notes in the README that points the user to the documentation.

- The Getting Started content should explicitly point new users to, for example, a [Glossary](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#17-terminology), [System Overview](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview), and [Workflow Description](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.md#51-workflow-description) which are currently embedded in the Specification, as well as the basic [demo](https://github.com/in-toto/demo).

- Include a [System Overview](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview) tailored to new users as the intro to new users.

- The [Glossary](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#17-terminology) should be surfaced as a separate document and formatted in an alphabetized table for easy reference.

- The [Workflow Description](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.md#51-workflow-description) in the spec identifies the different user roles. Adapt this to a separate document that also points to the appropriate doc for each role, which would be particularly helpful to new users.

6. **Content creation process**

- The [read-the-docs site](https://in-toto.readthedocs.io/en/latest/) has an [Edit the Doc button](https://github.com/in-toto/in-toto/blob/develop/doc/source/index.rst). Instead of pointing directly to the source files, it should point to a page with instructions for [doc contributors](https://github.com/in-toto/community/blob/main/CONTRIBUTING.md), and a link to the [governance policies](https://github.com/in-toto/community/blob/main/GOVERNANCE.md).

### Reader roles

To get the right information to the right reader, each page should be explicitly addressed to a specific audience, and the organization and navigation for the site should explicitly direct users of different types to relevant sections.

Readers with the following roles are potential audiences for project documentation. 
- **Evaluators** determine whether in-toto meets their needs and can be implemented in their organization.  
   - DOC NEEDS: Good high-level technical overview w/marketing slant, analysis business benefits, adoption and success stories, and workflow overview.
- **End users**  new and experienced 
   - *Project owner* defines the layout to be followed by, e.g. using the in-toto CLI tools. When doing so, they specify who is intended to sign for every piece of link metadata, any sublayouts that may exist, and how to further verify accompanying metadata.
      - DOC NEEDS: New users need overview, demo, templates, basic instructions. Experienced users need deeper architectural info, use cases, examples
   - *Functionaries* perform the intended actions and produce link metadata for each step.
      - DOC NEEDS:  *?? do these users read in-toto doc at all, or is the project owner responsible for
          instructing them in how to sign and verify their steps??* 
   
- **Contributors** : *code*
   - These are members of the community who:

        - *make code changes*: these can be for feature additions or bug fixes to in-toto implementations 
        - *submit changes to specifications*: these can be direct changes if they are trivial or as new in-toto Enhancements (ITEs)
        - *create new integrations*: in these cases, other projects are updated to generate or use in-toto metadata as appropriate, and these integrations are noted in in-toto/friends 
        - *submit issues, feature requests and more*: these are typically implementation or sub-project specific, and can be submitted to the corresponding GitHub repositories

   DOC NEEDS: 
      These contributors need to understand the GitHub repo structure, the contribution policies and procedures, coding and naming standards and conventions.
      ITE developers and integrators need direction on how and where to document their own additions.

- **Contributors** : *doc* (to be added)\
   - These are members of the community who use the **Edit** button to make changes to published documents, or create new documentation. 
        
   DOC NEEDS: 
   These contributors need clear doc contribution standards, naming and style conventions, and clear instructions on how to create or edit existing doc, and where documents should go (that is, what should go on the website or in GitHub, where a subject fits in the doc architecture)
  
  Contributor docs should:
  
   - List reviewers/approvers for doc changes and additions.
   - Encourage the use of Documentation and Good First Issue tags for issues and PRs.
   - Make doc contributors responsible for updating doc roadmaps/ToCs, to reflect any changes they make to the doc structure (adding or moving documents).

## Project documentation assessment

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

**Comments**

- **Information Architecture:** Content is well-written, clear, and fairly complete, but scattered among the Specification, GitHub READMEs, and read-the-docs. Almost all doc content is in GitHub (in README files, the Specification, or comments in demos). Most of it should be surfaced to indexed documents on the website to make it versionable, editable, and localizable. The README files can then provide a quick summary of what is in the repo, and link to the Doc home page (or directly into a relevant section of the web doc) for detailed information.

- **New user content:** Lots of good intro material and get-started demos, but not immediately discoverable or identifiable. The Specification has an excellent high-level overview that includes the expected workflow, identifies user roles, and provides a Glossary. The Get Started menu on the home page points to demos and the spec, but not to the [README for the main repo](https://github.com/in-toto/in-toto), which looks like the intended starting place specifically addressed to new users.

- **Content maintainability:** The scattered docs make specific info hard to find, and lead to duplication that can complicate maintainance. Consolidating the docs into a separate, well-structured web site will allow you to have a single "source of truth". and enable versioning and maintenance.

- **Content creation processes:** The [Contributing](https://github.com/in-toto/community/blob/main/CONTRIBUTING.md) and [Governance](https://github.com/in-toto/community/blob/main/GOVERNANCE.md) do not mention changes or additions to documentation as a potential area of contribution.

**RECOMMENDATIONS**

**Information Architecture**

The purpose of specific GitHub repos and folders is not obvious and doesn't seem to be described anywhere. This makes it difficult to find doc and doc sources.
   - The [docs repo](https://github.com/in-toto/docs) contains the spec, which is a very good spec, but is also apparently standing in for user documentation. The README for this repo does not (despite the name) say anthing explicitly about documentation, or explain what is supposed to go in the repo. 
   - The  [in-toto/in-toto folder](https://github.com/in-toto/in-toto/tree/develop/in_toto) contains the Python reference implementation, but that is not obvious from the name or placement.
   - The reference-doc sources are not in the docs repo, but are instead in a [doc folder](https://github.com/in-toto/in-toto/tree/develop/doc/source) along with the Python implementation. Is this going to be the policy for reference doc sources?
   - Much documentation is in READMEs for the many repos. 

  A combination of renaming and restructuring can resolve some of the discoverability problems. A comprehensive repo map and documentation guide can do more. 

**Content maintainability**

Almost all doc content is in GitHub (in README files, the Specification, or comments in demos). Most of it should be surfaced to indexed documents on the website to make it versionable, editable, and localizable.
- We recommend moving most of the documentation into read-the-docs (RTD) so that it can properly indexed and maintained.

High-level overviews are provided in several places, and mostly embedded in other documents. These are hard to compare and keep in sync. 
- Overviews with increasing depth should be offered explicitly to different audiences (evaluators, new users, experienced users, contributors)
- A single source for some of the text would help. 

**Content creation processes**

Material explicitly addressed to documentation contributions and standards should be added, and accessible from the top-level doc roadmap as well as from the existing contributor pages.
- Procedures for creating and maintaining docs need to be documented.
   - The process should include a policy for where reference docs live in the repo structure and how docs for different implementations are distinguished and identified.
- Policy and procedures for documenting implementations need to be decided and published for contributors.
   - Reference documentation for additional implementations should be actively solicited from the contributor community.

## Contributor documentation

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

**Comments**

- **Communication methods documented:** [Contact channels list](https://in-toto.io/contact/) available from home page under **Community > Contact**.

- **Beginner friendly issue backlog:** "Good First Issue" label is available and used for PRs for specific implementations. Not in much general use.

- **“New contributor” getting started content:** [Community README](https://github.com/in-toto/community/blob/main/README.md) points to "Good First Issues" list for specific repos. Can't find explicit instructions for new contributors, or any first issues for other kinds of contribution (such as docs).

- **Project governance documentation:** Clearly described and discoverable on [GOVERNANCE page](https://github.com/in-toto/community/blob/main/GOVERNANCE.md).

**RECOMMENDATIONS**

**Communication methods documented**

- Since most of the documentation is currently in GitHub, rather than on the web site, the [Contact channels list](https://in-toto.io/contact/) could be usefully added to the READMEs for the [main](https://github.com/in-toto/in-toto) and [community](https://github.com/in-toto/community) repos.
- Contact info, which is unlikely to change, can also be duplicated in a clearly labeled section of the new Docs website.

**Beginner friendly issue backlog**

- Documentation would benefit from a backlog of issues labeled with both "Good First Issue" and "Documentation". Use of these labels would have to be strongly encouraged in getting-started content for contributors.
- CNCF has developed a new tool that can help: https://clotributor.dev/, https://github.com/cncf/clotributor
   
   One of the CLOTributor's goals is to surface interesting opportunities for potential contributors to Cloud Native projects, allowing them to find those that suit their skills and interests best. To achieve this, CLOTributor scans periodically hundreds of repositories, indexing issues that match certain criteria:

   - Contain the help wanted label
   - Their state is OPEN
   - They are unassigned
   - Updated within the last year

**“New contributor” getting started content**

- The [CONTRIBUTING page](https://github.com/in-toto/community/blob/main/CONTRIBUTING.md) should have much more explicit instructions for how to submit PRs and how to find good first issues.

**Project governance documentation**

- The [governance policies](https://github.com/in-toto/community/blob/main/GOVERNANCE.md) call out the Contributors and Mantainers project roles, and mention that doc changes require one maintainer approval. They should also define *Doc Contributors* as a role, with information on documentation standards, and who should review such changes.

- The  [contributing page](https://github.com/in-toto/community/blob/main/CONTRIBUTING.md) should explicitly mention documentation changes as distinct from "making code changes" as an area of contribution. 

- The  [contributing page](https://github.com/in-toto/community/blob/main/CONTRIBUTING.md) needs explicit information for how to submit issues and feature requests for documentation, since documentation does not have a single "corresponding GitHub repository".


## Website

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

**Comments**

- **Single-source for all files:** Source is in [in-toto.io repo](https://github.com/in-toto/in-toto.io/blob/master/content/in-toto.md). 

- **Meets min website req. (for Incubating):** Doc assessment in progress. Very little documentation is published directly on the website. Most docs are in GitHub, only a few of those are directly linked from the website.

- **Branding and design:** Brand is evident across the website but the button component is an exception; it does not conform to the in-toto design/brand.

- **Case studies/social proof:** Menu item **About > Adoptions & Integrations** links to GitHub repo with folders created and maintained by adopters. No icons or listing of adopters on the web site.

- **Maintenance planning:** Website runs on Hugo, which is well supported by the community. Hard to tell who maintains what. Inotherwords, there are no custodians for website maintenance.

- **A11y plan & implementation:** The in-toto website is accessible but lacks in some vital areas such as: element naming, color contrast, and internationalization.

- **HTTPS access & HTTP redirect:** HTTPS is the default, HTTP redirects correctly.

- **Intra-site / local search:** No site map or search mechanism, only navigation is through a minimal menu bar.

_Provide comments for each rating above, 1-2 sentences max, bullet point list_
_Include a list of the top 404s, as reported through analytics or a search console._

**Recommendations for website-specific issues**

_Provide a list of recommendations to improve in this area_
// should we include status of maturity-level requirements? Like this one:
// https://hackmd.io/@cncf-tech-docs/S1-7wvcah#Minimal-website-requirements

**A11y plan & implementation**
The following needs to be improved:
1. Images: Image elements must have an `alt` attribute.
2. Color contrast: Button background and foreground colors does not have enough contrast. Primary recommendation is to use a darker color as background and lighter color as foreground. Please note that background color must match with the project's brand color.
3. Internationalization: The `HTML` tag must have a `lang` attribute set.

**Google Analytics 4 for production only**
Website must have analytics added to it to help monitor site traffic and diagonise issues like 404. We recommend you use the [Google Analytics 4 (GA4)](https://github.com/cncf/techdocs/blob/main/docs/analytics.md) tool. Please note that project must be added to the CNCF's GA4 account. Feel free to reach out to the CNCF team via the Servicedesk platform for further assistance.

**Account custodians are documented**
Setup an `OWNERS.md` document outlining each maintainer and their respective area of ownership.
