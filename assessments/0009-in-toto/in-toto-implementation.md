# Implementation

## Organizational principles
Review [the CNCF website design guidelines](https://github.com/cncf/techdocs/blob/main/docs/website-guidelines-checklist.md) for project home page and architecture recommendations. Consult with CNCF TechDocs or other technical documentation specialists to develop an appropriate information architecture based on different user roles and their specific tasks and information needs.

To efficiently transfer relevant information to the people who need it, organize documentation with the product users' roles in mind. For example:

- End-users with specific roles should be clearly directed to instructional material for performing specific tasks.
- Administrators who are configuring the tool have a different set of tasks, and require different instructions and reference material.
- Spec implementors are another reader population who need information on how to provide reference doc for their implementations.
- Contributors should be pointed to the contribution and governance rules, and be able to find good first issues to get started on.

Similarly, the depth and detail of introductory conceptual material should be clearly addressed to and tailored to:

- *Evaluators* who are deciding whether to adopt the tools and methodology. This could be on the main website, with a marketing slant.
- *New users* who will need to either integrate or configure the tools. This could be the intro that is on or linked prominently from the Doc Home Page.
- *Potential contributors* who are planning to extend the tools or implement the specification. These readers require more depth of information about the architectural intentions and decision criteria, which would just be confusing and unnecessary to other reader populations. 

See a more detailed analysis of reader roles and their documentation needs below.

### User roles
To get the right information to the right reader, each page should be explicitly addressed to a specific audience, and the organization and navigation for the site should explicitly direct users of different types to relevant sections.

- The website (both the in-toto home page and the doc home page) should clearly identify and name the user roles, and what users in those roles need and can reasonably expect from in-toto documentation.
- The documentation should be organized into sections that are clearly aimed at users in specific roles with similar goals and information needs.
- If a page is useful for users with different roles, it should be linked from the section overviews for all relevant roles.

Users with the following roles are potential audiences for in-toto project documentation.

| User Role | Doc needs |
| ---                     | --- |
| **Evaluators** determine whether in-toto meets their needs and can be implemented in their organization. | High-level technical overview with a marketing slant, analysis of business benefits, adoption and success stories, and a workflow overview. |
| **End users**  can be *Project owners* and *Functionaries*. | End users can be new or experienced. New users need a clear learning path and general examples. Experienced users need reference docs and use-case examples. |
| **Project owners** define the layout to be followed when, e.g., using the in-toto CLI tools. When doing so, they specify who is intended to sign for every piece of link metadata, any sublayouts that may exist, and how to further verify accompanying metadata. | New users need an overview, demos, templates, and basic instructions. Experienced users need deeper architectural info, use cases, and examples. |
| **Functionaries** perform the intended actions and produce link metadata for each step. | *?? do these users read in-toto doc at all, or is the project owner responsible for instructing them in how to sign and verify their steps??* |
| **Contributors** can be contributors to the *code* base and to the *documentation* of the OSS project itself. | Contributors need project standards and instructions, community guidelines, and GitHub instructions specific to the project. This information is often in the repo, and not in the project or product documentation.  |
| **Code contributors**  are members of the community who: *make code changes*, *submit changes to specifications*, *create new integrations*, and *submit issues, feature requests and more* | These contributors need to understand the GitHub repo structure, the contribution policies and procedures, coding and naming standards and conventions. ITE developers and integrators need direction on how and where to document their own additions. |
| **Doc contributors**  (to be added) are members of the community who use the **Edit** button to make changes to published documents, or create new documentation. | These contributors need clear doc contribution standards, naming and style conventions, and clear instructions on how to create or edit existing doc, and where documents should go (that is, what should go on the website or in GitHub, where a subject fits in the doc architecture) |

 

## General doc plan
To begin achieving the goal of documentation that meets the needs of different user populations and is discoverable by the intended readers, we recommend the following general plan.

1. Initial tasks:
Create a Documentation home page on the [project web site](https://in-toto.io), linked prominently from the About menu. 

Create a **Getting Started** page on the web site from the existing README content in the [main repo](https://github.com/in-toto/in-toto.README.md).

Link **Getting Started** as the first menu item in the **Get started** menu (currently the first item is a link to a demo).

Expose parts of the product specification as separate named documents on the website, as:
   - [System Overview](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview)  (compare content to https://in-toto.io/in-toto/README and current website About - create versions of increasing depth to address to specific audiences)
   - [Glossary](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#17-terminology) (convert to alphabetized table) 
   - [Workflow/Personas](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview) (clearly identify user types and point to relevant doc sections)
2. Create a high-level technical overview on the project home page suitable for evaluators (see [User Roles](#user-roles)). This might be one of the existing overviews, or can be adapted from them.
3. Create an index or map to existing docs as a temporary guide, preparatory to moving that information into RTD and integrating it into a doc architecture.
4. Encourage documentation contributions:
   - Add Documentation as a contribution area, and clarify the process. Contributor docs should: 
      - List reviewers/approvers for doc changes and additions.
      - Encourage the use of Documentation and Good First Issue tags for issues and PRs.
      - Make doc contributors responsible for updating doc roadmaps/ToCs, to reflect any changes they make to the doc structure (adding or moving documents). 
   - Specify a documentation "champion" to review and approve doc PRs, decide doc issue priorities -- Justin Cappos?
   - Develop doc standards (style guide, page templates, locations)
   - Develop doc architecture
   - Develop and document a doc versioning/update process that includes updating the Doc home page as locations change and doc is added.

## Actionable items

1. Create **Doc home page** 

  The landing page for the [read-the-docs site](https://in-toto.readthedocs.io/en/latest/), which currently lands on the auto-generated Python reference doc, could be expanded and repurposed as the new overall **Doc home page**.

   1.1 To be immediately useful, the landing page should provide a *top-level roadmap* to existing docs. See [Survey of existing doc](https://github.com/jbogarthyde/CNCF-techdocs/main/assessments/0009-in-toto/survey-of-existing-doc.md)

      This is a necessary step in raising the maturity level of this project. The roadmap should initially describe and provide access to:
   - Specification
   - Basic demo
   - Python reference implementation along with its reference docs (which need to move into a sub-directory) 
   - Overview of the git repo structure.

   1.2 Move the Description and pointer to the Python Reference implementation to an Implementations section, and move the RTD reference docs for it into this section.

   1.3 Create a doc contributors policy requiring that the Doc home page be updated to reflect any changes to the doc locations and structure. 

2. Expose new-user information 

   2.1 Move the content of the [README for the main repo](https://github.com/in-toto/in-toto) to a separate **"Getting Started" document**, with a prominent pointer on the in-toto home page, such as the top menu item in the "Get Started" menu. Replace the README  with brief introductory notes that link to the documentation.

   2.2 As a stop-gap, add a top-level TOC for the existing Specification to show what is in it.  

   2.3 Move important sections out of the spec into separate documents, and add them to the Doc home-page TOC. 
    - Evaluate the depth of the [System Overview](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview) and decide which user population it is most suitable for, or adapt it to new tailored versions.
   - Expose [Glossary](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#17-terminology) as a separate document, formatted in an alphabetized table for easy reference.
   - Expose [Workflow Description](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.md#51-workflow-description), which identifies the different user roles. Adapt this to a separate document that also points to the appropriate doc for each role, which would be particularly helpful to new users.

3. Arrange and choose content from existing overviews to create **High-level technical overviews** of increasing depth, addressed to specific audiences (evaluators, new users/adopters, experienced users and administrators, contributors of different types (ITE proposers, doc writers and editors...).
   
   A basic intro, possibly suitable for evaluators, is already linked directly from the [home page About tab](https://in-toto.io/in-toto/). The short intro links to the [latest spec in GitHub](https://github.com/in-toto/docs/blob/master/in-toto-spec.md), which contains a more comprehensive overview.  (NOTE: The [PDF link to the stable spec](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.pdf) is broken. This should be fixed or removed.)

   3.1 Initially, transfer the tech overview content from the Specification into a top-level Technical Overview document in RTD, and link as "Read more..." from the basic one. 

   3.2 Determine whether the Tech Overview currently in the spec is suitable for new users or for contributors, and adapt or create another version of suitable depth for the other audience. 

   3.3 The most in-depth overview should also point to academic papers for further architectural detail:
      https://www.usenix.org/system/files/sec19-torres-arias.pdf, https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias 

4. Sort the layered technical overviews by increasing depth, and use that as a guide to create the overall doc architecture.

   4.1 Add overviews as text-only pages to RTD.

   4.2 Make each tech overview the introductory page to a section aimed primarily at the appropriate user role or roles.
   
   4.3 In each section, include an index to current doc (mostly in GitHub Readme files) relevant to the audience. For example, the [ITE spec](https://github.com/in-toto/ITE/blob/master/ITE/1/README.adoc) that describes the ITE process, which is two levels down from main in the [ITE repo](https://github.com/in-toto/ITE/). The document should be referenced in the section for Contributors, and possibly a subsection sepecifically intended for ITE proposers and developers.

   4.4 As documents are transfered from GitHub into the Doc web site, update the index accordingly and adjust the doc architecture as needed.

5. Reference material

   5.1 Decide where reference docs for different implementations should live in the doc structure and where their sources live in the repo structure.
      The doc roadmap should clearly identify and link to the existing generated pages as *reference* doc for the Python reference implementation. It should also list and link to reference docs for other implementations. 

   5.2 Publish the policy and procedures for developers to document their implementations.
      - Develop a documentation policy for implementers.
        For example, the auto-generated doc for the [Go implementation](https://pkg.go.dev/github.com/in-toto/in-toto-golang) is not at all parallel with the Python RTD reference doc - it is all in GitHub, and has no introductory or explanatory content, or navigational aids.

6. Content creation process

   6.1 The [read-the-docs site](https://in-toto.readthedocs.io/en/latest/) has an [Edit the Doc button](https://github.com/in-toto/in-toto/blob/develop/doc/source/index.rst). Instead of pointing directly to the source files, make the button point to a page with instructions for [doc contributors](https://github.com/in-toto/community/blob/main/CONTRIBUTING.md), and a link to the [governance policies](https://github.com/in-toto/community/blob/main/GOVERNANCE.md).

   6.2 Decide on a structure for documentation directories and source files in the project doc repo.

   6.3 Make sure the policy pages include or link to:
     - Contact info for maintainer/reviewer for documentation contributions.
     -  Available doc style guides/templates (as well as code standards)
     - Usage guidelines for RTD (or other doc tool) and any project-specific usage standards.
     - Current doc architecture plan.
     - Map to documentation source files.
