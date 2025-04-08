---
title: Vitess Documentation Analysis
tags: Vitess
created: 2025-02-19
modified: 2025-02-19
author: Dave Welsch (dwelsch-esi)
# prettier-ignore
cSpell:ignore: Welsch dwelsch vitess topo pasteable mysqlshell vtctldclient lede
---

<!-- markdownlint-disable no-duplicate-heading -->

## Introduction

This document analyzes the effectiveness and completeness of the
[Vitess][project-website] open source software (OSS) project's documentation and
website. It is funded by the CNCF Foundation as part of its overall effort to
incubate, grow, and graduate open source cloud native software projects.

According to CNCF best practices guidelines, effective documentation is a
prerequisite for program graduation. The documentation analysis is the first
step of a CNCF process aimed at assisting projects with their documentation
efforts.

### Purpose

This document was written to analyze the current state of Vitess documentation.
It aims to provide project leaders with an informed understanding of potential
problems in current project documentation. A second [implementation] document
outlines an actionable plan for improvement. A third document is a [list of
issues][issues list] to be added to the project documentation repository. These
issues can be taken up by contributors to improve the documentation.

This document:

- Analyzes the current Vitess technical documentation and website
- Compares existing documentation against the CNCF’s standards
- Recommends a program of key improvements with the largest return on investment

### Scope of analysis

The documentation discussed here includes the entire contents of the website,
the technical documentation, and documentation for contributors and users on the
Vitess GitHub repository.

The Vitess website and documentation are written in Markdown and are compiled
using the Hugo static site generator with the [Bulma] CSS framework and
apparently served from Netlify. The site does not appear to use a theme, or uses
a default theme (there is no theme given in the configuration file.) The site's
code is stored in its own repository in the Vitess GitHub project.

#### In scope

- Website: <https://vitess.io/>
- Documentation: <https://vitess.io/docs/>
- Website repo: <https://github.com/vitessio/website>
- Project repo (for reference): <https://github.com/vitessio>

#### Out of scope

- Other Vitess repos: <https://github.com/vitessio/*> (In general, other Vitess
  code repos are out of scope)

### How this document is organized

This document is divided into three sections that represent three major areas of
concern:

- **Project documentation:** concerns documentation for users of the Vitess
  software, aimed at people who intend to use the project software
- **Contributor documentation:** concerns documentation for new and existing
  contributors to the Vitess OSS project
- **Website:** concerns the mechanics of publishing the documentation, and
  includes branding, website structure, and maintainability

Each section begins with summary ratings based on a rubric with appropriate
[criteria] for the section, then proceeds to:

- **Comments**: observations about the existing documentation, with a focus on
  how it does or does not help Vitess users achieve their goals.
- **Recommendations**: suggested changes that would improve the effectiveness of
  the documentation.

The accompanying [implementation] document breaks the recommendations down into
concrete actions that can be implemented by project contributors. Its focus is
on drilling down to specific, achievable work that can be completed in
constrained blocks of time. Ultimately, the implementation items are decomposed
into a series of [issues] and entered as GitHub issues in the website
[repository][project-doc-website].

### How to use this document

Readers interested only in actionable improvements should skip this document and
read the **[implementation] plan** and **[issues list]**.

Readers interested in the current state of the documentation and the reasoning
behind the recommendations should read the section of this document pertaining
to their area of concern:

- [Project documentation](#project-documentation)
- [Contributor documentation](#contributor-documentation)
- [Website and documentation infrastructure](#website-and-infrastructure)

Examples of CNCF documentation that demonstrate the analysis criteria are linked
from the [criteria] specification.

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

Vitess is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

| Criterion                  | [Rating (1-5)]                |
| -------------------------- | ----------------------------- |
| Information architecture   | 2. Needs improvement          |
| New user content           | 2. Needs improvement          |
| Content maintainability    | 4. Meets or exceeds standards |
| Content creation processes | 1. Not present                |
| Inclusive language         | 2. Needs improvement          |

### Comments

The following sections contain brief assessments of each element of the Project
Documentation rubric.

#### Information architecture

**Conceptual content**: Is there high level conceptual (“About”) content?

Yes, the site contains conceptual material explaining what Vitess is and how it
works, in both the [Overview](https://vitess.io/docs/21.0/overview/) and
[Concepts](https://vitess.io/docs/21.0/concepts/) sections.

The introduction to the Overview could be more helpful to new users.

There is an extensive FAQ that contains much information of all types, but
especially conceptual information. The overview introduction in the FAQ is
actually more descriptive and succinct than the one on the main web page:

> Vitess is a database solution for deploying, scaling and managing large
> clusters of database instances.

The FAQ is outside the versioned documentation.

**Feature complete**: Is the documentation feature complete? (i.e., each product
feature is documented)?

Yes, the documentation seems to cover all features of Vitess (as far as I can
tell). However, see the following regarding task instructions.

**Task instructions**: Are there step-by-step instructions (tasks, tutorials)
documented for features?

Yes, there are task instructions covering all major classes of tasks required to
use Vitess:

- [Installation](https://vitess.io/docs/21.0/get-started/)
- Setup and use
- Administration

Except for Installation, all task documentation is in one of two places:

- The [User Guides](https://vitess.io/docs/21.0/user-guides/).
- An extensive FAQ that contains task instructions.

Despite being labeled "Task-based guides," the task instructions in the User
Guide are written from a feature-oriented perspective, which lessens the
documentation's efficiency.

**No features missing tasks**: Is the documentation free of any key features
which are documented but missing task documentation?

It looks like there are features that don't have adequate task descriptions.
Features are represented, but often the task descriptions are not written as
procedures. For examples, see
[Information architecture](#information-architecture-1) in
[Recommendations](#recommendations).

**Happy path**: Is the “happy path”/most common use case documented?

Vitess is a complex system with many configuration options. That said, I believe
that setting up and running a production server in Kubernetes is the main use
case, and is covered.

**Isolated, atomic tasks**: Does task and tutorial content demonstrate atomicity
and isolation of concerns? (Are tasks clearly named according to user goals?)

No, tasks are not isolated. The User Guide has the following issues:

- Tasks are intermingled with discussion of the features
- Multiple tasks are presented per page
- Task names are often not present in table of contents (TOC) headings
- Where present, task names are ambiguous or misleading

Titles of pages and sections are often feature-based, making it hard to find
procedures to complete tasks.

**Escalation path**: If the documentation does not suffice, is there a clear
escalation path for users needing more help? (FAQ, Troubleshooting)

No clear escalation path exists. There are Troubleshooting guides in the
following sections:

- Running in Production
- Advanced > Distributed Atomic Transactions
- Migration

There is a troubleshooting section outside the versioned documentation.

There is a lengthy troubleshooting section in the FAQ.

There is a separate special-purpose FAQ, for VReplication, in the Reference.

There is no glossary.

There is a Vitess Community page on the product website. This is accessible from
the documentation as well. It has headings for Contributing, Monthly Meetings,
Governance, Code of Conduct, etc. It lists channels (Slack, Stack Overflow,
Issue tracker) but does not prominently feature a “Support” or “Getting Help”
heading.

**Complete API reference**: If the product exposes an API, is there a complete
reference?

Not applicable. Vitess does not have an exposed API.

However, Vitess does have several command-line interface to servers and
utilities, and these are documented in the Reference.

**Accurate and up-to-date**: Is content up to date and accurate?

Yes, documentation is versioned and prominently includes the latest Stable and
Development versions.

However, there are several important sections that are maintained outside the
versioned documentation:

- Troubleshooting
- FAQ
- Information about the release procedure

#### New user content

**Getting started entry**: Is “getting started” clearly labeled? (“Getting
started”, “Installation”, “First steps”, etc.)

Yes, the Get Started section contains instructions to install, set up, and run
Vitess in four different environments (OSes and container solutions).

The Get Started guide has better written instructions than the User Guide, but
procedures could still be clearer. There is no meta-text explaining when you
would want to use each install option (the test installs are based on platform,
but a discussion of development, test, and production environments would still
help).

**Installation**: Is installation documented step-by-step?

No, instructions are not documented step-by-step, strictly speaking.
Instructions are generally sequential down the page but not numbered. As with
the User Guide procedures, steps could be rewritten so that they're more
explicit.

**Multiple OS**: If needed, are multiple OSes documented?

Yes, multiple OSes (and container platforms) are documented. Instructions are
given for a Kubernetes (production) install, and three local installs: Linux,
Mac, and Docker. The local (non-Kubernetes) installs are "for test purposes,"
but no further details are provided. The default local install for pre-compiled
binaries does not explicitly list what OSes are supported.

**Getting started next steps**: Do users know where to go after reading the
getting started guide?

Yes, there is a Next Steps section at the end of each install except the Docker
local install. However, the Next Steps section is perfunctory, pointing in all
cases to the Move Tables page in the Migration guide.

**New user signpost**: Is your new user content clearly signposted on your
site’s homepage or at the top of your information architecture?

No, there is no clear entry path for new users. They'll probably make their way
through the install and then try to figure out how to implement their migration
case (which probably fits one of the documented scenarios, but there is no clear
way for them to find it).

**Sample code**: Is there easily copy-pasteable sample code or other example
content?

Yes, command-line examples are plentiful. There is no click-to-copy, however.
Users must highlight and copy manually.

#### Content maintainability & site mechanics

**Searchability**: Is your documentation searchable?

Yes, there is a text Search feature that is limited to the currently displayed
version. It seems to work very well.

Search is full-text, so common search terms can result in an unwieldy number of
results.

**Localization & i18n directories**: Are you planning for
localization/internationalization with regard to site directory structure?

Yes, there are full versions of the documentation in both English and Chinese.

The Chinese versions are reportedly not up to date with the latest software
version.

**Localization framework**: Is a localization framework present?

Yes, there seems to be some infrastructure for multiple languages. I'm not sure
how translation is done in Hugo.

**Versioning**: Do you have a clearly documented method for versioning your
content?

Yes, releasing a new version is scripted. The repository contains instructions.
The latest three released versions are available on the website.

#### Content creation processes

**Content creation process**: Is there a clearly documented (ongoing)
contribution process for documentation?

There are instructions for building and releasing the documentation, as well as
detailed instructions for contributing instructional videos. However, there are
no instructions for contributing technical documentation or fixing documentation
issues.

Presumably a contributor can submit a pull request on the website repo to amend
or add to the documentation, but there is no procedure documented. There is a
notice that no grammar or typo fixes are accepted from accounts less than a year
old.

**Release process**: Does your code release process account for documentation
creation & updates?

No, neither the [Contribute](https://vitess.io/docs/contributing/) documentation
nor the
[CONTRIBUTING.md](https://github.com/vitessio/vitess/blob/main/CONTRIBUTING.md)
file in the product repo describes how to contribute documentation. There is no
Contribution section in the website repo.

**Review and approval**: Who reviews and approves documentation pull requests?

Unknown. The Governance document gives detailed descriptions of the User,
Contributor, and Maintainer roles. It does not mention documentation explicitly
except as one of the contributor tasks.

**Site owner and maintainer**: Does the website have a clear owner/maintainer?

No, the main project repo lists maintainers, along with areas of expertise. None
of them lists documentation as an area of expertise. There is no owner
information on the website repo.

#### Inclusive language

**Non-inclusive phrases**: Are customer-facing utilities, endpoints, class
names, or feature names free of non-recommended words as documented by the
[Inclusive Naming Initiative](https://inclusivenaming.org) website?

Not entirely, but there have clearly been attempts to correct non-inclusive
language on the site. For example, “primary” replaces “master” to describe the
database of record in the Vitess product. Some non-inclusive language remains.
Examples: “sanity check”; “master database” (these can be found using the
website's Search function).

Of course, some of this language exists in product command elements and outputs
that cannot be changed in the documentation without first eliminating them in
code (command line options, for example).

**Ableist language**: "Is the project free of language like 'simple', 'easy',
etc.?"

No. A few examples exist. These should be evaluated and replaced on a case by
case basis.

### Recommendations

#### Information architecture

##### Get Started

Write an introduction on the
[Get Started](https://vitess.io/docs/21.0/get-started/) landing page. This
introduction should outline a path for new users something like the following:

1. Install test environment
2. Configure test environment
3. Test Vitess

After this familiarization process, there should be a a pointer to a User Guide
processes that walk the reader through the product's "happy path" in a more or
less linear path (a series of tasks). That might look something like this:

1. Plan production installation
2. Install production version
3. Configure production environment
4. Populate databases
5. Run queries
6. Maintain and add cells/shards/databases.

The "Next steps" sections on the test installation pages should point readers to
new-user configuration and testing procedures.

The "Next steps" section on the production installation page should point users
to whatever is next in the User Guide documentation. This can be more than one
path. Make it conditional based on the task a reader might want to accomplish
after installation: Test the installation? Plan a cluster? Something else?

##### Conceptual Info

Clarify the beginning of the
[Overview](https://vitess.io/docs/21.0/overview/whatisvitess/) ("What is ...")
The introduction from the README in the [code repository][project-website] is
pretty good:

> Vitess is a cloud-native horizontally-scalable distributed database system
> that is built around MySQL.

Or the introduction that this replaced:

> Vitess is a database clustering system for horizontal scaling of MySQL through
> generalized sharding.

###### Tasks

The User Guides page _says_ "Task-based guides for common usage scenarios".
That's the right idea, but implementation must be improved if readers are to
find and carry out the documented tasks.

The User Guides require three types of changes to maximize their effectiveness:

- Rename
- Rewrite
- Reorganize

###### Rename

Rename the individual pages in the User Guides to reflect the tasks that are
described there. Use verbs ending in "-ing" (along with a noun that describes
the object of the task, if applicable). This helps readers find the right
content in at least two ways:

- Makes the TOC more coherent
- Gives meaningful results in the site-wide Search

Here are three examples from the
[same page](https://vitess.io/docs/21.0/user-guides/configuration-basic/global-topo/)
(the content of these sections is not considered here):

- _Choosing a TopoRoot_: A good title. Describes the task ("choosing") and the
  object of the task ("TopoRoot").
- _Moving to a different TopoServer_: A good title. Describes the task
  ("moving"). Normally I'd recommend a more direct reference to the object --
  "Moving TopoServers" -- but in this case the phrase ".. to a different
  TopoServer" removes ambiguity.
- _Backups_: Not a helpful title. It's not clear or what you're backing up or
  what what aspect of the backups you're talking about. I'd change this to
  "Backing up TopoServer data".

Also on the Global TopoServer page, by the way:

<!-- markdownlint-disable fenced-code-language -->

> The following command line options are required for every Vitess component:
>
> ```
>   --topo_implementation=etcd2 --topo_global_server_address=<comma_separated_addresses>
>   --topo_global_root=/vitess/global
> ```
>
> To avoid repetition we will use <topo_flags> in our examples to signify the
> above flags.

Remove this. The `<topo_flags>` placeholder does not seem to have been
implemented. There are no mentions of `<topo_flags>` elsewhere in the
documentation, and in any case each would have to refer back to this page.

In the FAQ: Rename the questions into concise headings when you consolidate the
FAQ into the versioned documentation (see _Reorganize_ below).

###### Rewrite

A reader typically consults the User Guide to find out how to do something. The
User Guides should consist primarily of procedures.

There are some Vitess features for which the User Guide gives a description but
does not provide adequate instructions for their use.

For example, look at
[Creating a Backup](https://vitess.io/docs/21.0/user-guides/operating-vitess/backup-and-restore/creating-a-backup/)

This page appears to be well named ("Creating a Backup" is a descriptive task
title) and properly placed (it resides in a logical location in the User Guide).
However, the page itself buries the lede (it doesn't provide the procedure until
far down the page): There is no actual command line given between
_Configuration_ and _Common Errors and Resolutions_ The "how to" procedure
should be prominently featured.

Further down the page, another backup option, _Using mysqlshell_, has the same
shortcomings: No actual command is apparent.

Instead, write these pages as step-by-step descriptions of how to perform a
task. Each step should be a concise instruction, with any required instruction
or text illustrated and explained (much of the time, this is a monospace
code/CLI block displaying the command-line instruction to use). This can be an
example, but only if it is obvious how the reader should use the command. Other
times, it means showing the required form of the command, with placeholders for
parameters, and explaining those parameters in the following text.

The
[Creating a cell](https://vitess.io/docs/21.0/user-guides/configuration-basic/create-cell/)
page shows a CLI command:

> ```bash
> vtctldclient AddCellInfo \
>   --root /vitess/cell1 \
>   --server-address <cell_topo_address> \
>   cell1
> ```

It's not clear if `/vitess/cell1` is a user-definable parameter or not. The
server address placeholder, `<cell_topo_address>`, is not defined in the text.

Here's how I'd rewrite it, defining placeholders for the parameters:

> ```bash
> vtctldclient AddCellInfo \
>   --root <root_dir> \
>   --server-address <cell_topo_addr> \
>   cell1
> ```
>
> where:
>
> - <root_dir> is the root directory of the server installation
> - <cell_topo_addr> is the IP address of the topo server

(or whatever the actual descriptions of the parameters are.)

Here's an outline for a one-page procedure writeup:

- Title ("ABCing XYZ")
  - Context (Describe where the procedure fits in the overall use case)
  - Prerequisites (Hardware and software requirements, dependencies, procedures
    that must be completed first)
  - Procedure ("To ABC an XYZ, do the following.")
    - Step 1 (_One_ CLI command, or action. Don't combine actions.)
    - Step 2 (etc.)
  - Result (Optional - include only if there's something remarkable about the
    outcome.)
  - Next Steps (What procedure or use case typically follows this. If it depends
    on context, explain the options.)

###### Reorganize

Ensure that the various sections of the User Guide cover all usage scenarios.
Reorganize the User Guide:

First, organize by user role, if there are distinct roles. As I understand it,
there are basically three user roles in Vitess:

- Vitess admin
- Database admin
- Application developer

User roles traditionally are the basis for a "User Guide":

- Admin Guide
- DBA Guide
- Programmer's Guide
- etc.

Within roles, organize the tasks around use cases. Don't be afraid to split up
tasks that use the same tool (CLI or other). In other words, pick and choose
commands and actions that server a use case rather than trying to document
everything you can do with the command in one place. (There is a place to
exhaustively document a tool, but that's in the Reference, not a User Guide.)

The existing Vitess User Guides are already partially organized around user
roles, but they can be regrouped. In any case, make the user roles explicit:

_Vitess admin_:

- Configuration
- Running in production
- Operational
- Migration

_DBA_:

- VSchema and Query Serving
- SQL statement analysis
- Making schema changes

_Application programmer_:

- Query serving
- Making schema changes (don't duplicate the section here. Instead provide links
  to any tasks that are identical)
- Query optimization

(Again, these are my understanding of the Vitess user roles. Adjust the details
if they're different.)

Get rid of the FAQ. This FAQ has apparently grown from a repository for common
questions into a separate de facto technical documentation set. Move all of the
FAQ topics and information into the versioned documentation.

Merge information with existing sections and/or move FAQ topics to the
documentation intact, as appropriate. For example, much of the FAQ amounts to a
good conceptual overview of the product; it should be part of the conceptual
overview. In its current form it is unversioned and hard to find.

###### Troubleshooting

Consolidate all troubleshooting information into a Troubleshooting Guide. Or,
create one troubleshooting guide per user guide/user role. In either case,
create an escalation path for any problems with a task (the escalation path
might be: _troubleshooting procedure > Slack Channel > project Issue_). Get rid
of the
[VReplication FAQ](https://vitess.io/docs/21.0/reference/vreplication/faq/) in
the reference section and put the information in a troubleshooting section.

Locate the troubleshooting guide or guides within the versioned technical
documentation. Changes to the product affect troubleshooting procedures as well
as other types of information, and the documentation structure should reflect
that.

###### Glossary

Write a glossary. This is different from the "Concepts" page – the explanations
of terms is less in-depth. The glossary contains not just key terms but any word
or phrase that the reader might not know: abbreviations and acronyms,
definitions of Vitess-specific terms, and explanations of jargon used in Vitess
("topo", for example).

###### Other recommendations

Rename ["Reference > Programs"](https://vitess.io/docs/21.0/reference/programs/)
to "Command line reference" or "Tools reference". Consider splitting into two or
more sections by type of application: by function or user role. CLIs should be
labeled as such and separated from GUI tools.

#### New user content

Is there an alternative to Kubernetes for running in production? Explain. Give
an explicit list of supported OSes. This can be done by expanding the Get
Started landing page (see
[Information Architecture > Get Started](#information-architecture)).

Rewrite installation instructions as step by step procedures.

Expand the production install
[Next Step](https://vitess.io/docs/21.0/get-started/operator/#next-steps)
section to accommodate different configurations (conversion, green field, etc.).
Differentiate between Next Steps for test/development installations and
production installation.

Put enough information on the Get Started landing page to orient new users as
described in
[Information Architecture > Get Started](#information-architecture).

Rename sections so that it's easier to find the right page in Search:

- Use "-ing" verbs for task pages as previously described
- Use the word "reference" in CLI references
- Use nouns for architectural components, features, and concepts

#### Content maintainability & site mechanics

No recommendations. Technical aspects of infrastructure and maintenance seem
excellent.

#### Content creation processes

There is no documentation for website and tech doc content creation. Such
documentation could include:

- Instructions for documenting tasks associated with new features
- Instructions for fixing documentation issues
- Templates for task write-ups and command references
- Guidelines for amending conceptual information with new features
- A style manual
- A review and approval process, separate from the code process
- A link from the code contribution instructions to the doc instructions
- A maintainer designated to be responsible for website maintenance and for
  documentation changes and updates
- Getting started instructions for new documentation contributors

In practice, open source projects rarely contain all this information. At a
minimum, document the following processes for contributors:

- Documenting a new release
  - Generating, testing, and deploying the new release docs, including how to
    publish release notes
  - Demoting, archiving, or deleting down-level releases
- Creating a doc issue
- Fixing and closing a doc issue
- How to contact the website and documentation maintainer with questions
- Getting started instructions for new documentation contributors

These processes should address documentation-specific concerns, not just parrot
the code release procedures (although there may be many of the same steps).

#### Inclusive language

Search the document for non-inclusive terms, especially tier-1 and tier-2 terms
per the [Inclusive Naming Initiative](https://inclusivenaming.org/). Replace
with recommended language where possible.

## Contributor documentation

Vitess is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

| Criterion                                 | [Rating (1-5)]                |
| ----------------------------------------- | ----------------------------- |
| Communication methods documented          | 3. Meets standards            |
| Beginner friendly issue backlog           | 2. Needs improvement          |
| “New contributor” getting started content | 2. Needs improvement          |
| Project governance documentation          | 4. Meets or exceeds standards |

### Comments

The following sections contain brief assessments of each element of the
Contributor Documentation rubric.

#### Communication methods documented

**Text communication channel**: Is there a Slack/Discord/Discourse/etc.
community and is it prominently linked from your website?

Yes, the community page lists a Slack channel.

**Repository link**: Is there a direct link to your GitHub
organization/repository?

Yes, the community page and the footer list the GitHub page for the product.

**Project meetings**: Are weekly/monthly project meetings documented? Is it
clear how someone can join those meetings?

Yes, the community page lists the monthly community meetings.

**Mailing lists**: Are mailing lists documented?

No, there does not appear to be an email list.

#### Beginner friendly issue backlog

**Issue triage**: Are docs issues well-triaged?

No, there does not appear to be any mechanism for prioritizing issues in the
GitHub repo.

**Good first issues**: Is there a clearly marked way for new contributors to
make code or documentation contributions (i.e. a “good first issue” label)?

Yes, there is a “good first issue” label in the website repo issues list.

**Issue documentation**: Are issues well-documented (i.e., more than just a
title)?

Yes, issues seem to have at least a paragraph description. However, there is no
issues template or guidelines for documenting issues, so the quality of the
descriptions is inconsistent.

**Issue freshness**: Are issues maintained for staleness?

No, the oldest open issue is over 6 years old.

#### New contributor getting started content

**Community featured on website**: Do you have a community repository or section
on your website?

Yes, there is a Community link in the site’s menu bar, leading to the Community
page.

**New contributor document**: Is there a document specifically for new
contributors/your first contribution?

No, I could not find a new contributor's document.

**New user help**: Do new users know where to get help?

There is no prominent document to guide new users.

#### Project governance documentation

**Governance documentation**: Is project governance clearly documented?

Yes, there are Governance and Code of Conduct documents in the project repo.

### Recommendations

#### Communication methods documented

No recommendations.

#### Beginner friendly issue backlog

Create an issue template to ensure that issue descriptions are consistent and
complete.

Go through the issues backlog and close or update old issues.

#### New contributor getting started content

Write a "new contributors" document. Post prominently.

#### Project governance documentation

No recommendations.

## Website and infrastructure

Vitess is a **graduated** project of CNCF. This means that the project should
have [_very high_][criteria] standards for documentation.

| Criterion                                   | [Rating (1-5)]                |
| ------------------------------------------- | ----------------------------- |
| Single-source for all files                 | 5. Exemplary                  |
| Meets min website req. (for maturity level) | 2. Needs improvement          |
| Usability, accessibility, and design        | 3. Meets standards            |
| Branding and design                         | 4. Meets or exceeds standards |
| Case studies/social proof                   | 2. Needs improvement          |
| SEO, Analytics, and site-local search       | out of scope                  |
| Maintenance planning                        | 2. Needs improvement          |
| HTTPS access & HTTP redirect                | 5. Exemplary                  |

### Comments

The following sections contain brief assessments of each element of the Website
and documentation infrastructure rubric.

#### Single source

**Single source for docs**: Does the project have a single source for
documentation? If not, is there a reason?

Yes, the website and tech doc content are all in one GitHub repo.

#### Minimal website requirements

**Website guidelines**: Are all guidelines satisfied?

Yes, the website mostly meets all criteria for a CNCF graduated website,
including hosting, copyright, CNCF branding, and trademark.

**Docs analysis**: Are all follow-up actions addressed?

Pending: There is no reason to believe the Vitess team won’t follow through on
recommendations in this analysis.

**Project doc: stakeholders**: Are all stakeholder needs identified?

No, roles are not explicitly defined in the documentation. There is some
differentiation among roles implicit in the docs (admin permissions, RBAC
support, etc.), but it is not used to organize the content.

**Project doc: hosting**: Hosted directly.

Yes, the site is hosted on Netlify.

**Project doc: user docs**: Fully addresses needs of key stakeholders?

Yes, the documentation probably addresses all stakeholder needs, but is not
organized so that users can find the docs efficiently.

#### Usability, accessibility and devices

**Mobile**: Is the website usable from mobile?

Yes, the site seems to adapt well to small screen use.

**Readability**: Are doc pages readable?

Yes, documentation pages are readable on all tested platforms and screen sizes.

**Mobile navigability**: Are all / most website features accessible from mobile
-- such as the top-nav, site search and in-page table of contents?

Most website features are accessible from mobile.

**Mobile-first design**: Might a [mobile-first] design make sense for your
project?

No, this project might occasionally be accessed on mobile but it doesn't seem
likely to be the main use case.

**Color contrast**: Are color contrasts significant enough for color-impaired
readers?

Yes, text is black on white. Font is a very legible sans serif.

**Keyboard-only**: Are most website features usable using a keyboard only?

Yes, most features are usable. However, tab navigation is awkward and
time-consuming.

**Text-to-speech**: Does text-to-speech offer listeners a good experience?

Text-to-speech was not tested.

#### Branding and design

**Recognizable brand**: Is there an easily recognizable brand for the project
(logo + color scheme) clearly identifiable?

Yes, the site has a consistent design. The orange “layered sheets” logo is
recognizable.

**Consistent branding**: Is the brand used across the website consistently?

Yes, branding is used consistently.

**Typography**: Is the website’s typography clean and well-suited for reading?

Yes, the font is a little small in places, but overall legible. Font scales
gracefully when magnified in the browser.

#### Case studies & social proof

**Case studies**: Are there case studies available for the project and are they
documented on the website?

No, I did not see any case studies. Some of the many videos might contain case
studies, though.

**Testimonials**: Are there user testimonials available?

No, there do not seem to be testimonials available on the site. The logo wall
does not have live links.

**Active blog**: Is there an active project blog?

Yes, there is a blog. The last entry was two months ago, but it seems to be
updated semi-regularly.

**Community talks listed**: Are there community talks for the project and are
they present on the website?

Yes, there are many videos on the “Learning Resources” page, containing a
variety of topics including community talks.

**Logo wall**: Is there a logo wall of users/participating organizations?

Yes, there is a substantial logo wall on the product landing page.

#### Maintenance planning

**Well supported website tooling**: Is your website tooling well supported by
the community (i.e., Hugo with the Docsy theme) or commonly used by CNCF
projects (our recommended tech stack?)

Yes, the site is implemented using Hugo, CNCF's recommended site generator, and
hosted on Netlify.

**Cultivating website maintainers**: Are you actively cultivating website
maintainers from within the community?

Unknown. There is no documented evidence of recruitment on the website or in the
repository.

**Site build times**: Are site build times reasonable?

I did not try building the site but have no reason to believe that the build
time is excessive.

**Maintainer permissions**: Do site maintainers have adequate permissions?

Unknown.

#### Other

**HTTPS**: Is your website accessible via HTTPS?

Yes, all site pages use HTTPS.

**HTTP redirect**: Does HTTP access, if any, redirect to HTTPS?

Yes, pages requested using HTTP are redirected to existing HTTPS pages
seamlessly.

### Recommendations

#### Single-source requirement

No recommendations.

#### Minimal website requirements

Identify stakeholder and user roles. Organize task documentation around user
roles (see [Information architecture](#information-architecture)).

#### Usability, accessibility and devices

No recommendations.

#### Branding and design

No recommendations.

#### Case studies/social proof

Include case studies and testimonials on the product website. If these are
already among the video content, tag them and feature them on the landing page.

Update blog content at least monthly.

#### Maintenance planning

TBD

#### Other

No recommendations.

## References and notes

### Rating values

The numeric rating values used in this document are as follows:

1. Not present
2. Needs improvement
3. Meets standards
4. Meets or exceeds standards
5. Exemplary

### References

[criteria]: ../../docs/analysis/criteria.md
[implementation]: ./implementation.md?no-link-check
[issues list]: ./issues-list.md?no-link-check
[project-doc-website]: https://vitess.io/docs/
[project-website]: https://vitess.io/
[Rating (1-5)]: #rating-values
[rfc-spec]: https://www.rfc-editor.org/rfc/rfc2119
[Bulma]: https://bulma.io/
