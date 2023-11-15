# Documentation Issues 

These issues identify and classify tasks that contributors can undertake to establish a set of organized and navigable documents on the in-toto public website.

## Create **Doc home page** 

   The landing page for the [read-the-docs site](https://in-toto.readthedocs.io/en/latest/), which currently lands on the auto-generated Python reference doc, could be expanded and repurposed as the new overall **Doc home page**.

   - [ ] To be immediately useful, the landing page should provide a *top-level roadmap* to existing docs. See [Survey of existing doc](https://github.com/jbogarthyde/CNCF-techdocs/main/assessments/0009-in-toto/survey-of-existing-doc.md)

      This is a necessary step in raising the maturity level of this project. The roadmap should initially describe and provide access to:
      - Specification
      - Basic demo
      - Python reference implementation along with its reference docs (which need to move into a sub-directory) 
      - Overview of the git repo structure.

   - [ ] Move the Description and pointer to the Python Reference implementation to an Implementations section, and move the RTD reference docs for it into this section.

   - [ ] Create a doc contributors policy requiring that the Doc home page be updated to reflect any changes to the doc locations and structure. 

## Expose new-user information 

   - [ ] Move the content of the [README for the main repo](https://github.com/in-toto/in-toto) to a separate **"Getting Started" document**, with a prominent pointer on the in-toto home page, such as the top menu item in the "Get Started" menu. Replace the README  with brief introductory notes that link to the documentation.

   - [ ] As a stop-gap, add a top-level TOC for the existing Specification to show what is in it.  

   - [ ] Move important sections out of the spec into separate documents, and add them to the Doc home-page TOC. 
      - Evaluate the depth of the [System Overview](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#2-system-overview) and decide which user population it is most suitable for, or adapt it to new tailored versions.
      - Expose [Glossary](https://github.com/in-toto/docs/blob/master/in-toto-spec.md#17-terminology) as a separate document, formatted in an alphabetized table for easy reference.
      - Expose [Workflow Description](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.md#51-workflow-description), which identifies the different user roles. Adapt this to a separate document that also points to the appropriate doc for each role, which would be particularly helpful to new users.

## Create **High-level technical overviews** of increasing depth

    
  Arrange and choose content from existing overviews to create a set of overviews addressed to specific audiences:
  evaluators and new users/adopters, experienced users and administrators, contributors of different types (ITE proposers, doc writers and editors...).
  
  A basic intro, possibly suitable for evaluators, is already linked directly from the [home page About tab](https://in-toto.io/in-toto/).
  The short intro links to the [latest spec in GitHub](https://github.com/in-toto/docs/blob/master/in-toto-spec.md), which contains a more comprehensive overview.
  (NOTE: The [PDF link to the stable spec](https://github.com/in-toto/docs/blob/v1.0/in-toto-spec.pdf) is broken. This should be fixed or removed.)

   - [ ] Initially, transfer the tech overview content from the Specification into a top-level Technical Overview document in RTD, and link as "Read more..." from the basic one. 

   - [ ] Determine whether the Tech Overview currently in the spec is suitable for new users or for contributors, and adapt or create another version of suitable depth for the other audience. 

   - [ ] The most in-depth overview should also point to academic papers for further architectural detail:
      https://www.usenix.org/system/files/sec19-torres-arias.pdf, https://www.usenix.org/conference/usenixsecurity19/presentation/torres-arias 

## Sort the layered technical overviews by increasing depth, and use that as a guide to create the overall doc architecture.

   - [ ] Add overviews as text-only pages to RTD.

   - [ ] Make each tech overview the introductory page to a section aimed primarily at the appropriate user role or roles.
   
   - [ ] In each section, include an index to current doc (mostly in GitHub Readme files) relevant to the audience. For example, the [ITE spec](https://github.com/in-toto/ITE/blob/master/ITE/1/README.adoc) that describes the ITE process, which is two levels down from main in the [ITE repo](https://github.com/in-toto/ITE/). The document should be referenced in the section for Contributors, and possibly a subsection sepecifically intended for ITE proposers and developers.

   - [ ] As documents are transfered from GitHub into the Doc web site, update the index accordingly and adjust the doc architecture as needed.

## Establish policy for reference material

   - [ ] Decide where reference docs for different implementations should live in the doc structure and where their sources live in the repo structure.
      The doc roadmap should clearly identify and link to the existing generated pages as *reference* doc for the Python reference implementation. It should also list and link to reference docs for other implementations. 

   - [ ] Publish the policy and procedures for developers to document their implementations.
  
   - [ ] Develop a documentation policy for implementers.
        For example, the auto-generated doc for the [Go implementation](https://pkg.go.dev/github.com/in-toto/in-toto-golang) is not at all parallel with the Python RTD reference doc - it is all in GitHub, and has no introductory or explanatory content, or navigational aids.

## Define content creation process

   - [ ] The [read-the-docs site](https://in-toto.readthedocs.io/en/latest/) has an [Edit the Doc button](https://github.com/in-toto/in-toto/blob/develop/doc/source/index.rst). Instead of pointing directly to the source files, make the button point to a page with instructions for [doc contributors](https://github.com/in-toto/community/blob/main/CONTRIBUTING.md), and a link to the [governance policies](https://github.com/in-toto/community/blob/main/GOVERNANCE.md).

   - [ ] Decide on a structure for documentation directories and source files in the project doc repo.

   - [ ] Make sure the policy pages include or link to:
        - Contact info for maintainer/reviewer for documentation contributions.
        -  Available doc style guides/templates (as well as code standards)
        - Usage guidelines for RTD (or other doc tool) and any project-specific usage standards.
        - Current doc architecture plan.
        - Map to documentation source files.
