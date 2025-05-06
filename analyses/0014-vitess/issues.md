---
title: Vitess Issues
tags: Vitess
---


<!-- TEMPLATE ======================================================== -->


## Issue 5

### Overview

xyz

Audience:

Type:

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955) listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- xyz

Suggested changes:

Use the following outline to write a procedure for each task:

- Prerequisites (bullet list of prerequisite conditions, if any)
- Procedure
  1. Step 1 (keep steps discrete and atomic. Put command-line input and expected
     output in a code block.)
  2. Step 2 ...
- Result (optional; describe output or side effects if they're notable or
  unexpected.)

## Remove "topo_flags" notification

### Overview

Remove an erroneous notification on the 
[Global TopoServer](https://vitess.io/docs/21.0/user-guides/configuration-basic/global-topo/)
page:
"To avoid repetition we will use <topo_flags> in our examples to signify the
above flags."

If there are others like this in the documentation, remove them.
In general, such shortcuts are more trouble than they're worth, especially if
the reader has to navigate to a different page to see the information that the
variable is standing in for.

Audience: Admin

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Global TopoServer](https://vitess.io/docs/21.0/user-guides/configuration-basic/global-topo/)

Suggested changes:

This information is on the
[Global TopoServer](https://vitess.io/docs/21.0/user-guides/configuration-basic/global-topo/)
page:

> The following command line options are required for every Vitess component:
>
> ````--topo_implementation=etcd2 --topo_global_server_address=<comma_separated_addresses>
>   --topo_global_root=/vitess/global
> ````
>
> To avoid repetition we will use <topo_flags> in our examples to signify the above
>   flags.

Remove the notification: "To avoid repetition ...".
The "<topo_flags>" placeholder does not seem to have been implemented.
There are no mentions of "<topo_flags"> elsewhere in the documentation, and in
any case each would have to refer back to this page.


## Write a "Get Started" introduction

### Overview

The documentation should provide an easy-to-follow onboarding path for
new users. Start by writing an introduction on the
[Get Started](https://vitess.io/docs/21.0/get-started/) landing page.

Audience: New users

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Get Started](https://vitess.io/docs/21.0/get-started/)

Suggested changes:

The "Get Started" page should outline an installation > configuration >
orientation path for new users something like the following:

1. Install test environment
2. Configure test environment
3. Test Vitess

This test environment should serve the initial needs of most user roles,
including:
- Evaluators who want to try Vitess out in a low-effort environment
- Administrators who want to familiarize themselves with Vitess basics before
moving on to a production install
- Developers who want a test environment

Use the "Next steps" section to point readers to more advanced setup and
learning materials.


## Write a "What's Next" roadmap

### Overview

Write a roadmap enabling new users to find instructions that they want.

Audience: All users

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Get Started](https://vitess.io/docs/21.0/get-started/)
- [Local install](https://vitess.io/docs/21.0/get-started/local/)
- [Local Install via source for Mac](https://vitess.io/docs/21.0/get-started/local-mac/)
- [Vttestserver Docker Image](https://vitess.io/docs/21.0/get-started/vttestserver-docker-image/)
- [Vitess Operator for Kubernetes](https://vitess.io/docs/21.0/get-started/operator/)
- [Planning](https://vitess.io/docs/21.0/user-guides/configuration-basic/planning/)
- [Running in Production](https://vitess.io/docs/21.0/user-guides/configuration-basic/)
- [VSchema and Query Serving](https://vitess.io/docs/21.0/user-guides/vschema-guide/)

Suggested changes:

After a "getting started" familiarization process, include a pointer
to User Guide processes that walk the reader through the product's "happy path"
in a more or less linear path (a series of tasks). That might look something
like this:

1. Plan production installation
2. Install production version
3. Configure production environment
4. Populate databases
5. Run queries
6. Maintain and add cells/shards/databases.

The "Next steps" section on the production installation page should point users
to whatever is next in the User Guide documentation. This can be more than one
path. Make it conditional based on the user role, and which task a reader might
want to accomplish after installation: Test the installation? Plan a cluster?
Something else?


## Clarify "What Is Vitess"

### Overview

Clarify the beginning of the Overview, the
["What is Vitess"](https://vitess.io/docs/21.0/overview/whatisvitess/) page.

The introduction to the Overview should describe the nature and purpose of the
product. Readers should be able to guess the components and basic operation
based on the introductory description. The current description (a "database
solution") is vague.

Audience: All

Type: Conceptual

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [What Is Vitess](https://vitess.io/docs/21.0/overview/whatisvitess/)

Suggested changes:

Rewrite the introductory paragraph of the
["What is Vitess"](https://vitess.io/docs/21.0/overview/whatisvitess/) page.

There are already good descriptions elsewhere that would be appropriate.
For example, the introduction from the README in the
[code repository][project-website] is pretty good:

> Vitess is a cloud-native horizontally-scalable distributed database system
> that is built around MySQL.

Or the introduction that this replaced:

> Vitess is a database clustering system for horizontal scaling of MySQL through
> generalized sharding.


## Rename tasks

The User Guides landing page is subtitled
"Task-based guides for common usage scenarios".

This conceptualization as task-based is exactly the right approach to the User
Guide. The execution, however, needs some improvement.  The User Guides require
three types of changes to maximize their effectiveness: renaming, rewriting, and
reorganization.

Each of these is dealt with in a different issue. This is the one for renaming.

### Overview

Of the three types of changes, renaming provides the most cost-effective
improvement to documentaton usability. That's because headings that are
descriptive and consistent greatly enhance findability of information in
on the doc website, both when scanning the table of contents and when doing
a search.

Pages in the User Guide should name the tasks that are described on them.
This will vastly improve users' abillity to find procedures:

- Users will be able to scan the table of contents for tasks
- The site-wide Search more often yields the task that the user is looking for

Audience: All

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

All headings on the doc website should be evaluated, but I suggest using these
strategies:

1. Start with high-level headings and work down. Being by renaming page titles
if necessary, then H1 headings, then H2, etc.
2. In general, rename task information first, then references, then conceptual
information.
3. Reevaluate heading names as the documentation is reorganized. The goal should
be to iteratively make the doc more efficient by eliminating redundant headings,
making the remaining headings more descriptive, and moving related information
together on the website.

Suggested changes:

For tasks, use verbs ending in "-ing" (along with a noun that describes
the object of the task, if applicable).

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


## Rewrite tasks

The User Guides landing page is subtitled
"Task-based guides for common usage scenarios".

This conceptualization as task-based is exactly the right approach to the User
Guide. The execution, however, needs some improvement.  The User Guides require
three types of changes to maximize their effectiveness: renaming, rewriting, and
reorganization.

Each of these is dealt with in a different issue. This is the one for rewriting.

### Overview

A reader typically consults the User Guide for _task_ information -- to find out
how to do something. The User Guides should consist primarily of this type of
information. It should be a procedure guide.

There are some Vitess features for which the User Guide gives a description but
does not provide adequate instructions for their use.


Audience: All

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [User Guides](https://vitess.io/docs/21.0/user-guides/)

Suggested changes:

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

Consider this page from the current guide:

[Creating a Backup](https://vitess.io/docs/21.0/user-guides/operating-vitess/backup-and-restore/creating-a-backup/)

This page appears to be well named ("Creating a Backup" is a descriptive task
title) and properly placed (it resides in a logical location in the User Guide).
However, the page itself buries the lead (it doesn't provide the procedure until
far down the page, if at all): There is no actual command line given.
The "how to" procedure should be prominently featured in a section labeled
"Procedure" or something similar.

Further down the page, another backup option, _Using mysqlshell_, has the same
shortcomings: No actual command is apparent.

Instead, write these pages as step-by-step descriptions of how to perform a
task. Each step should be a concise instruction, with any required instruction
or text illustrated and explained (much of the time, this is a monospace
code/CLI block displaying the command-line instruction to use). This can be an
example, but only if it is obvious how the reader should use the command. Other
times, it means showing the required form of the command, with placeholders for
parameters, and explaining those parameters in the following text.

Write separate procedures, complete with prerequisites, for all variations:
using `xtrabackup`, using `builtin`, using `vtctl`, using `mysqlshell`, and
partial vs full backup. There might be eight different combinations of backup
types here. They might not all need to be documented, especially if some of
them are rarely used or deprecated. But it's confusing to readers that these
procedures are all intermixed on the same page. Again, the goal is to _explain
what the options are and then to write a clear, linear procedure for each
option that the user can follow step by step_.

Here's how I'd rewrite one procedure on this page. Notes are in
angle brackets ("<>"):

  # Creating a Backup

  <This is the "Context" information. It can go at the top of the page under
  the title without a second-level heading of its own.>

  As described in [Backup types](overview/#backup-types), you can run a full
  backup (the default) or an incremental backup.

  Full backups use the backup engine chosen in the tablet's configuration.
  Incremental backups always copy MySQL's binary logs, regardless of the
  configured backup engine.

  The default backup engine is `builtin`. However, we strongly recommend using
  the `xtrabackup` engine as it is more robust and allows for non-blocking
  backups. Restores are always done with whichever engine was used to create
  the backup.

  This procedure describes how to back up using `xtrabackup`.

  ### Prerequisites

  <It's good practice to number the prerequisites so that the user
  doesn't miss one.>

  1. Compatible versions of
    [xtrabackup](https://www.percona.com/doc/percona-xtrabackup/latest/index.html)
    and
    [xbstream](https://docs.percona.com/percona-xtrabackup/8.0/xtrabackup_bin/backup.streaming.html)
    are present in your `$PATH`.

  2. This backup procedure supports
    [MySQL 8.0](https://www.percona.com/doc/percona-xtrabackup/8.0/index.html#installation).

  3. To use `xtrabackup` with `Vtbackup`, `VTTablet` or `Vtctld`, the following
    flags must be set:

      * `--backup_engine_implementation=xtrabackup`
      * `--xtrabackup_user string`
        * The user that xtrabackup will use to connect to the database server.
          This user must have the
          [necessary privileges](https://www.percona.com/doc/percona-xtrabackup/2.4/using_xtrabackup/privileges.html#permissions-and-privileges-needed).
          * This user must be authorized to connect to `mysql` locally without
          a password using
          [auth_socket](https://dev.mysql.com/doc/refman/8.0/en/socket-pluggable-authentication.html).
      * `--xtrabackup_stream_mode=xbstream`

  ## Procedure

  <The page does not describe how to do a backup. Either write the procedure
  here, or explain how to configure automatic backups using xtrabackup. If this
  is something that MySQL users universally know how to do, at least provide a
  reference to the information here.>

  ## Next Steps

  <If the procedure described the commands to actually perform the backup,
  then the logical thing for "Next Steps" to contain might be a link to the
  procedure for setting up periodic automatic backups. >


<!-- Limit Reference section to reference information ====================================== -->


## Limit the Reference section to reference information

### Overview

The Reference section of the documentation should contain only reference
information. There is a wide array of information in the Reference section.
Much of what's in the Vitess Reference documentation is instructional and
conceptual information.

Audience: All

Type: Reference

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Reference](https://vitess.io/docs/21.0/reference/)
- [Features](https://vitess.io/docs/21.0/reference/features/)
- [Query Serving](https://vitess.io/docs/21.0/reference/query-serving/)
- [VReplication](https://vitess.io/docs/21.0/reference/vreplication/)
- [Programs](https://vitess.io/docs/21.0/reference/programs/)
- [Compatibility](https://vitess.io/docs/21.0/reference/compatibility/)
- [Errors](https://vitess.io/docs/21.0/reference/errors/)
- [VTAdmin](https://vitess.io/docs/21.0/reference/vtadmin/)
- [vtctldclient Transition](https://vitess.io/docs/21.0/reference/vtctldclient-transition/)
- [VTOrc](https://vitess.io/docs/21.0/reference/vtorc/)
- [Backup and Restore](https://vitess.io/docs/21.0/reference/backup-and-restore/)
- [Viper](https://vitess.io/docs/21.0/reference/viper/)

Suggested changes:

The reference section is extensive. Weeding out non-reference material is not
something that can realistically be done by one contributor as a single project.
Instead, we suggest adopting the following strategies and practices.

#### Remove duplicate information

Where information in the reference section duplicate the same information
elsewhere, remove the redundant source. In the case of  tasks or conceptual
text, this will mean removing the informtion from the reference section.
If reference material is duplicated elsewhere, remove it and replace it with
a link to the reference info.

#### Move tasks to a user guide

In cases where a task is described in the Reference section, move the task to
a User Guide. Remember to rename the section, if necessary, to describe the
task.

#### Move conceptual information to a concepts overview

High-level descriptions of functionality belong in a conceptual discussion,
usually in a technical overview or an architecture guide. This is background
information that helps the user understand the underlying system without
being cluttered with implementation details.

#### Break up pages containing more than one topic

Many of the Reference pages contain more than one topic. Don't be afraid to
create entirely new pages for sections, especially when those sections are of
different types (task, reference, concept) or serve different purposes.

#### Rename sections where appropriate

As throughout the documentation, many pages and sections within pages have
headings that don't accurately describe the content or function of the text.
Rename these to make information more findable in the table of contents and
in searches:
- Name tasks using "-ing" verbs and an object: "Creating a cell".
- Name conceptual information by what component or function it describes:
"Keyspaces"; "Topology service".
- Name reference information after the information it contains: "The VTAdmin
API"; "mysqlctl command reference".

#### Example: revising a reference page

As an example of these techniques, consider the
[VSchema reference page](https://vitess.io/docs/22.0/reference/features/vschema/).

The following table provides the following:
- The section name and a link to the section in the current documentation.
- Which information type (conceptual, task, reference) the section represents.
In many cases the information is a mix of info types. The table lists which
type the section seemes to function as.
- A suggested renaming of the section, if needed.
- A suggestion of the most appropriate place for this information. In many
cases, there is a link to the Concept section from the Reference section.
In these cases it would make sense to incorporate the reference information
into the conceptual section so that all the information is in one place.

| Section | Info type | Rename to | Move to |
| :--     | :--       | :--       | :--     |
| [Overview](https://vitess.io/docs/22.0/reference/features/vschema/#overview) |  |  |  |
| [Architecture](https://vitess.io/docs/22.0/reference/features/vschema/#architecture) | Conceptual | VSchema architecture | [Concepts > VSchema](https://vitess.io/docs/22.0/concepts/vschema/) |
| [Database Access Model](https://vitess.io/docs/22.0/reference/features/vschema/#database-access-model) | Task | Connecting to a database |  |
| [Tablet Types](https://vitess.io/docs/22.0/reference/features/vschema/#tablet-types)  | Task | Accessing tablet types |  |
| [Unspecified Mode](https://vitess.io/docs/22.0/reference/features/vschema/#unspecified-mode)  | Task | -- | Make part of previous |
| [Sharded keyspaces require a VSchema](https://vitess.io/docs/22.0/reference/features/vschema/#sharded-keyspaces-require-a-vschema)  | Task | Accessing unsharded keyspaces |  |
| [Sharding Model](https://vitess.io/docs/22.0/reference/features/vschema/#sharding-model)  | Conceptual | Keyspace IDs | [Keyspace ID](https://vitess.io/docs/22.0/concepts/keyspace-id/) |
| [Vindexes](https://vitess.io/docs/22.0/reference/features/vschema/#vindexes)  | Conceptual |  | [VIndexes](https://vitess.io/docs/22.0/reference/features/vindexes) |
| [Sequences](https://vitess.io/docs/22.0/reference/features/vschema/#sequences)  | Conceptual |  | [Sequences](https://vitess.io/docs/22.0/reference/features/vitess-sequences/) |
| [Reference tables](https://vitess.io/docs/22.0/reference/features/vschema/#reference-tables)  | Conceptual |  |  |
| [Per-Keyspace VSchema](https://vitess.io/docs/22.0/reference/features/vschema/#per-keyspace-vschema)  | Conceptual |  |  |
| [Commands](https://vitess.io/docs/22.0/reference/features/vschema/#commands)  | Reference |  |  |
| [Unsharded Table](https://vitess.io/docs/22.0/reference/features/vschema/#unsharded-table)  | Task |  |  |
| [Sharded Table With Simple Primary Vindex](https://vitess.io/docs/22.0/reference/features/vschema/#sharded-table-with-simple-primary-vindex)  | Task |  |  |
| [Specifying A Sequence](https://vitess.io/docs/22.0/reference/features/vschema/#specifying-a-sequence)  | Task |  |  |
| [Specifying A Secondary Vindex](https://vitess.io/docs/22.0/reference/features/vschema/#specifying-a-secondary-vindex)  | Task |  |  |
| [The columns field](https://vitess.io/docs/22.0/reference/features/vschema/#the-columns-field)  | Task |  |  |
| [Advanced usage](https://vitess.io/docs/22.0/reference/features/vschema/#advanced-usage)  |  |  |  |

For example, the following two sections are essentially duplicates. Both

    https://vitess.io/docs/22.0/reference/features/vschema/#sharded-table-with-simple-primary-vindex
    https://vitess.io/docs/22.0/user-guides/vschema-guide/sharded/

## Reorganize tasks

The User Guides landing page is subtitled
"Task-based guides for common usage scenarios".

This conceptualization as task-based is exactly the right approach to the User
Guide. The execution, however, needs some improvement.  The User Guides require
three types of changes to maximize their effectiveness: renaming, rewriting, and
reorganization.

Each of these is dealt with in a different issue. This is the one for
reorganizing.

### Overview

The goals of this issue are to:
1. Ensure that the various sections of the User Guide cover all usage scenarios.
2. Make the instructions for these scenarios easily findable.

These goals are embodied in these strategies:
1. Eliminate redundant information so that searches lead directly to the correct
   information.
2. Organize the remaining instructional information to be use-case oriented.

Reorganize the User Guide:

First, organize by user role, if there are distinct roles.
User roles traditionally are the basis for a "User Guide":

- Admin Guide
- DBA Guide
- Programmer's Guide
- etc.

As I understand it, there are basically three user roles in Vitess:

- Vitess admin
- Database admin
- Application developer

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
ifthey're different.)

Audience: All

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

Following is a top-level outline of the User Guides section of the ducmentation.
Obviously Vitess is a complex product with many moving parts. Nonetheless, this
table of contents (TOC) could be reorganized and reduced to make information
easier to find. Some suggestions follow.

 - [VSchema and Query Serving](https://vitess.io/docs/21.0/user-guides/vschema-guide/)
     - [Overview](https://vitess.io/docs/21.0/user-guides/vschema-guide/overview/)
     - [Sharding Guidelines](https://vitess.io/docs/21.0/user-guides/vschema-guide/sharding-guidelines/)
     - [Unsharded Keyspace](https://vitess.io/docs/21.0/user-guides/vschema-guide/unsharded/)
     - [Sharded Keyspace](https://vitess.io/docs/21.0/user-guides/vschema-guide/sharded/)
     - [Sequences](https://vitess.io/docs/21.0/user-guides/vschema-guide/sequences/)
     - [Shared Vindexes and Foreign Keys](https://vitess.io/docs/21.0/user-guides/vschema-guide/shared-vindexes/)
     - [Foreign Keys in Vitess](https://vitess.io/docs/21.0/user-guides/vschema-guide/foreign-keys/)
     - [Unique Lookup Vindexes](https://vitess.io/docs/21.0/user-guides/vschema-guide/unique-lookup/)
     - [Non-Unique Lookup Vindexes](https://vitess.io/docs/21.0/user-guides/vschema-guide/non-unique-lookup/)
     - [Lookup as Primary Vindex](https://vitess.io/docs/21.0/user-guides/vschema-guide/lookup-as-primary/)
     - [Backfill Lookup Vindexes](https://vitess.io/docs/21.0/user-guides/vschema-guide/backfill-vindexes/)
     - [Subsharding Vindex](https://vitess.io/docs/21.0/user-guides/vschema-guide/subsharding-vindex/)
     - [Advanced VSchema Properties](https://vitess.io/docs/21.0/user-guides/vschema-guide/advanced-vschema/)
     - [Vindex Hints in Vitess](https://vitess.io/docs/21.0/user-guides/vschema-guide/vindex-hints/)
     - [Pictorial Summary](https://vitess.io/docs/21.0/user-guides/vschema-guide/pictorial/)
     - [VSchema DDL](https://vitess.io/docs/21.0/user-guides/vschema-guide/vschema_ddl/)
     - [Running in Production](https://vitess.io/docs/21.0/user-guides/configuration-basic/)
     - [Migration](https://vitess.io/docs/21.0/user-guides/migration/)
     - [SQL Statement Analysis](https://vitess.io/docs/21.0/user-guides/sql/)
     - [Advanced Configuration](https://vitess.io/docs/21.0/user-guides/configuration-advanced/)
     - [Operational](https://vitess.io/docs/21.0/user-guides/operating-vitess/)
     - [Making Schema Changes](https://vitess.io/docs/21.0/user-guides/schema-changes/)

 - [Running in Production](https://vitess.io/docs/21.0/user-guides/configuration-basic/)
     - [Collations and Character sets](https://vitess.io/docs/21.0/user-guides/configuration-basic/collations/)
     - [Planning](https://vitess.io/docs/21.0/user-guides/configuration-basic/planning/)
     - [Global TopoServer](https://vitess.io/docs/21.0/user-guides/configuration-basic/global-topo/)
     - [vtctld](https://vitess.io/docs/21.0/user-guides/configuration-basic/vtctld/)
     - [Creating a cell](https://vitess.io/docs/21.0/user-guides/configuration-basic/create-cell/)
     - [Keyspaces and Shards](https://vitess.io/docs/21.0/user-guides/configuration-basic/keyspaces-shards/)
     - [VTOrc](https://vitess.io/docs/21.0/user-guides/configuration-basic/vtorc/)
     - [VTTablet and MySQL](https://vitess.io/docs/21.0/user-guides/configuration-basic/vttablet-mysql/)
     - [Initialize Shard Primary](https://vitess.io/docs/21.0/user-guides/configuration-basic/initialize-shard-primary/)
     - [Durability Policy](https://vitess.io/docs/21.0/user-guides/configuration-basic/durability_policy/)
     - [vtgate](https://vitess.io/docs/21.0/user-guides/configuration-basic/vtgate/)
     - [Backups and Restores](https://vitess.io/docs/21.0/user-guides/configuration-basic/backups-restores/)
     - [Reparenting](https://vitess.io/docs/21.0/user-guides/configuration-basic/reparenting/)
     - [Delete a Keyspace](https://vitess.io/docs/21.0/user-guides/configuration-basic/delete-keyspace/)
     - [Add or Delete a Cell](https://vitess.io/docs/21.0/user-guides/configuration-basic/add-delete-cell/)
     - [Monitoring](https://vitess.io/docs/21.0/user-guides/configuration-basic/monitoring/)
     - [Ports](https://vitess.io/docs/21.0/user-guides/configuration-basic/ports/)
     - [Troubleshooting](https://vitess.io/docs/21.0/user-guides/configuration-basic/troubleshooting/)
     - [Exporting data from Vitess](https://vitess.io/docs/21.0/user-guides/configuration-basic/exporting-data/)

 - [Migration](https://vitess.io/docs/21.0/user-guides/migration/)
     - [Migrating Data Into Vitess](https://vitess.io/docs/21.0/user-guides/migration/migrate-data/)
     - [Move Tables](https://vitess.io/docs/21.0/user-guides/migration/move-tables/)
     - [Materialize](https://vitess.io/docs/21.0/user-guides/migration/materialize/)
     - [Troubleshooting](https://vitess.io/docs/21.0/user-guides/migration/troubleshooting/)

 - [SQL Statement Analysis](https://vitess.io/docs/21.0/user-guides/sql/)
     - [Analyzing a SQL statement using VEXPLAIN](https://vitess.io/docs/21.0/user-guides/sql/vexplain/)
     - [Analyzing a SQL statement using VTEXPLAIN](https://vitess.io/docs/21.0/user-guides/sql/vtexplain/)
     - [Analyzing SQL statements in bulk using VTEXPLAIN](https://vitess.io/docs/21.0/user-guides/sql/vtexplain-in-bulk/)

 - [Advanced Configuration](https://vitess.io/docs/21.0/user-guides/configuration-advanced/)
     - [User Management and Authentication](https://vitess.io/docs/21.0/user-guides/configuration-advanced/user-management/)
     - [File based authentication](https://vitess.io/docs/21.0/user-guides/configuration-advanced/static-auth/)
     - [LDAP authentication](https://vitess.io/docs/21.0/user-guides/configuration-advanced/ldap_auth/)
     - [Authorization](https://vitess.io/docs/21.0/user-guides/configuration-advanced/authorization/)
     - [Read Query Load Balancing](https://vitess.io/docs/21.0/user-guides/configuration-advanced/query-load-balancing/)
     - [VTGate Buffering Scenarios](https://vitess.io/docs/21.0/user-guides/configuration-advanced/buffering-scenarios/)
     - [Resharding](https://vitess.io/docs/21.0/user-guides/configuration-advanced/resharding/)
     - [Reparenting](https://vitess.io/docs/21.0/user-guides/configuration-advanced/reparenting/)
     - [Region Based Sharding](https://vitess.io/docs/21.0/user-guides/configuration-advanced/region-sharding/)
     - [Creating a LookupVindex](https://vitess.io/docs/21.0/user-guides/configuration-advanced/createlookupvindex/)
     - [Comment Directives](https://vitess.io/docs/21.0/user-guides/configuration-advanced/comment-directives/)
     - [Tracing](https://vitess.io/docs/21.0/user-guides/configuration-advanced/tracing/)
     - [Unmanaged Tablet](https://vitess.io/docs/21.0/user-guides/configuration-advanced/unmanaged-tablet/)
     - [Query Consolidation](https://vitess.io/docs/21.0/user-guides/configuration-advanced/query-consolidation/)
     - [Shard Isolation and Atomicity Model](https://vitess.io/docs/21.0/user-guides/configuration-advanced/shard-isolation-atomicity/)
     - [Securing Vitess Using TLS](https://vitess.io/docs/21.0/user-guides/configuration-advanced/transport-security-model/)
     - [Troubleshooting Distributed Atomic Transactions](https://vitess.io/docs/21.0/user-guides/configuration-advanced/troubleshooting-atomic-transactions/)
     - [Integration with Orchestrator](https://vitess.io/docs/21.0/user-guides/configuration-advanced/integration-with-orchestrator/)

 - [Operational](https://vitess.io/docs/21.0/user-guides/operating-vitess/)
     - [Backup and Restore](https://vitess.io/docs/21.0/user-guides/operating-vitess/backup-and-restore/)
     - [Upgrading Vitess](https://vitess.io/docs/21.0/user-guides/operating-vitess/upgrading-vitess/)

 - [Making Schema Changes](https://vitess.io/docs/21.0/user-guides/schema-changes/)
     - [Unmanaged Schema Changes](https://vitess.io/docs/21.0/user-guides/schema-changes/unmanaged-schema-changes/)
     - [Managed, Online Schema Changes](https://vitess.io/docs/21.0/user-guides/schema-changes/managed-online-schema-changes/)
     - [Online DDL strategies](https://vitess.io/docs/21.0/user-guides/schema-changes/ddl-strategies/)
     - [ddl_strategy flags](https://vitess.io/docs/21.0/user-guides/schema-changes/ddl-strategy-flags/)
     - [Table lifecycle](https://vitess.io/docs/21.0/user-guides/schema-changes/table-lifecycle/)
     - [Applying, auditing, and controlling Online DDL](https://vitess.io/docs/21.0/user-guides/schema-changes/audit-and-control/)
     - [Declarative migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/declarative-migrations/)
     - [Postponed migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/postponed-migrations/)
     - [Recoverable, failover agnostic migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/recoverable-migrations/)
     - [Revertible migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/revertible-migrations/)
     - [INSTANT DDL migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/instant-ddl-migrations/)
     - [Concurrent migration execution](https://vitess.io/docs/21.0/user-guides/schema-changes/concurrent-migrations/)
     - [Validating schema migrations using `VDiff`](https://vitess.io/docs/21.0/user-guides/schema-changes/validating-migrations/)
     - [Advanced usage](https://vitess.io/docs/21.0/user-guides/schema-changes/advanced-usage/)

Suggested changes:

This is not going to be a quick fix. I'd suggest the following strategies to
reorganize the documentation. This should not be considered a complete list,
and contributors should look for opportunities to make instructional information
more findable.

**Suggestion 1: Eliminate redundant information**

Here are some sections that seem (based on their titles, mostly) to contain the
same or similar information. It might be possible to consolidate topics with
similar information:

| Topic | Main TOC entry | Section title |
| :-- | :-- | :-- |
| Keyspace and sharding | [VSchema and Query Serving](https://vitess.io/docs/21.0/user-guides/vschema-guide/) | [Unsharded Keyspace](https://vitess.io/docs/21.0/user-guides/vschema-guide/unsharded/), [Sharded Keyspace](https://vitess.io/docs/21.0/user-guides/vschema-guide/sharded/) |
|                       | [Running in Production](https://vitess.io/docs/21.0/user-guides/configuration-basic/) | [Keyspaces and Shards](https://vitess.io/docs/21.0/user-guides/configuration-basic/keyspaces-shards/) |
| Lookup Vindex | [VSchema and Query Serving](https://vitess.io/docs/21.0/user-guides/vschema-guide/) | [Unique Lookup Vindexes](https://vitess.io/docs/21.0/user-guides/vschema-guide/unique-lookup/), [Non-Unique Lookup Vindexes](https://vitess.io/docs/21.0/user-guides/vschema-guide/non-unique-lookup/) |
|               | [Advanced Configuration](https://vitess.io/docs/21.0/user-guides/configuration-advanced/) | [Creating a LookupVindex](https://vitess.io/docs/21.0/user-guides/configuration-advanced/createlookupvindex/) |
| DDL           | [VSchema and Query Serving](https://vitess.io/docs/21.0/user-guides/vschema-guide/) | [VSchema DDL](https://vitess.io/docs/21.0/user-guides/vschema-guide/vschema_ddl/) |
|               | [Making Schema Changes](https://vitess.io/docs/21.0/user-guides/schema-changes/) | [Online DDL strategies](https://vitess.io/docs/21.0/user-guides/schema-changes/ddl-strategies/), [ddl_strategy flags](https://vitess.io/docs/21.0/user-guides/schema-changes/ddl-strategy-flags/), [Applying, auditing, and controlling Online DDL](https://vitess.io/docs/21.0/user-guides/schema-changes/audit-and-control/) |
| Reparenting |  - [Running in Production](https://vitess.io/docs/21.0/user-guides/configuration-basic/) | [Reparenting](https://vitess.io/docs/21.0/user-guides/configuration-basic/reparenting/) |
| | [Advanced Configuration](https://vitess.io/docs/21.0/user-guides/configuration-advanced/) | [Reparenting](https://vitess.io/docs/21.0/user-guides/configuration-advanced/reparenting/) |
| Migrations | [Making Schema Changes](https://vitess.io/docs/21.0/user-guides/schema-changes/) | [Declarative migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/declarative-migrations/), [Postponed migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/postponed-migrations/), [Recoverable, failover agnostic migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/recoverable-migrations/), [Revertible migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/revertible-migrations/), [INSTANT DDL migrations](https://vitess.io/docs/21.0/user-guides/schema-changes/instant-ddl-migrations/), [Concurrent migration execution](https://vitess.io/docs/21.0/user-guides/schema-changes/concurrent-migrations/), [Validating schema migrations using `VDiff`](https://vitess.io/docs/21.0/user-guides/schema-changes/validating-migrations/) |
| | [Migration](https://vitess.io/docs/21.0/user-guides/migration/) | Entire user guide |

The following are links that appear both as top-level TOC entries for User
Guides and as sub-headings in the  
[VSchema and Query Serving](https://vitess.io/docs/21.0/user-guides/vschema-guide/)
User Guide. There is probably no need to reference them from two plaaces in the
TOC:

- [Running in Production](https://vitess.io/docs/21.0/user-guides/configuration-basic/)
- [Migration](https://vitess.io/docs/21.0/user-guides/migration/)
- [SQL Statement Analysis](https://vitess.io/docs/21.0/user-guides/sql/)
- [Advanced Configuration](https://vitess.io/docs/21.0/user-guides/configuration-advanced/)
- [Operational](https://vitess.io/docs/21.0/user-guides/operating-vitess/)
- [Making Schema Changes](https://vitess.io/docs/21.0/user-guides/schema-changes/)

**Suggestion 2: Look for similar tasks as sections are renamed**

As pages are renamed (see
[Rename tasks](https://github.com/vitessio/website/issues/1974)), redundant
information should come to light, especially in topic searches. More reduntant
pages (especially ones that describe the same task) can then be consolidated
and/or eliminated.

**Suggestion 3: Move related information closer together**

This is especially true of related tasks. Here are some examples of task
descriptions that seem to be separated by unrelated information within a user
guide:

- [Creating a cell](https://vitess.io/docs/21.0/user-guides/configuration-basic/create-cell/) and [Add or Delete a Cell](https://vitess.io/docs/21.0/user-guides/configuration-basic/add-delete-cell/)
- [Keyspaces and Shards](https://vitess.io/docs/21.0/user-guides/configuration-basic/keyspaces-shards/) and [Delete a Keyspace](https://vitess.io/docs/21.0/user-guides/configuration-basic/delete-keyspace/)
- [Read Query Load Balancing](https://vitess.io/docs/21.0/user-guides/configuration-advanced/query-load-balancing/) and [Query Consolidation](https://vitess.io/docs/21.0/user-guides/configuration-advanced/query-consolidation/)


### Overview

Remove the FAQ from the documentation site.

A FAQ is only useful as a small repository of commonly needed information.
The Vitess FAQ has outgrown this function and is now a separate de facto
technical documentation set. Furthermore, it is outside the versioned
documentation, which can cause it to go out of date and contain erroneous
information.

Move all of the FAQ topics and information into the versioned documentation
and remove the FAQ from the table of contents (TOC).

Audience: All

Type: Reference

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [FAQ](https://vitess.io/docs/faq/)

Suggested changes:

Merge the FAQ information with existing sections and/or move FAQ topics to the
documentation intact, as appropriate. For example, much of the FAQ amounts to a
good conceptual overview of the product; it should be part of the conceptual
overview. In its current form it is unversioned and hard to find.

Rename the FAQ-style questions into concise headings when you consolidate the
FAQ into the versioned documentation
(see [Renaming tasks](https://github.com/vitessio/website/issues/1974)
and [Reorganizing tasks](https://github.com/vitessio/website/issues/1980)).

Get rid of the 
[VReplication FAQ](https://vitess.io/docs/21.0/reference/vreplication/faq/)
in the reference section and put the information in a troubleshooting section.

## Consolidate troubleshooting

### Overview

Consolidate all troubleshooting information into a single troubleshooting guide
or one troubleshooting guide per user guide/user role, whichever makes more
sense for Vitess.

Audience: All

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Troubleshooting](https://vitess.io/docs/troubleshoot/)
- [FAQ > Troubleshooting](https://vitess.io/docs/faq/troubleshooting/)


Suggested changes:

Consolidate all troubleshooting information into a single troubleshooting guide
or one troubleshooting guide per user guide/user role.

In either case, create an escalation path for any problems with a task. For
example, the escalation path might be:
*troubleshooting procedure > Slack Channel > project Issue*

Here's a suggested introduction to a troubleshooting guide (modify as
needed):

  These troubleshooting procedures are intended to provide a first tier of
  assistance when a procedure described in this User Guide does not work
  as described. If you cannot find a remedy in these procedures, or if
  the proposed remedies do not work, you can escalate the problem using
  community resources:

  - Contact the Vitess community on the Vitess Slack channel. For more
    information, see the <Vitess community resources page link>.
  - Submit an Issue in the Vitess GitHub repository. For more information,
    see <Vitess repo "submitting an issue" page link>.

Locate the troubleshooting guide or guides within the versioned technical
documentation. Changes to the product affect troubleshooting procedures as well
as other types of information, and the documentation structure should reflect
that.

## Add a glossary

### Overview


Add a glossary of terms to the documentation site.

Audience: All

Type: Reference

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Concepts](https://vitess.io/docs/21.0/concepts/)

Suggested changes:

Add a glossary. This is different from the "Concepts" page – the explanations
of terms is less in-depth. The glossary contains not just key terms but any word
or phrase that the reader might not know: abbreviations and acronyms,
definitions of Vitess-specific terms, and explanations of jargon used in Vitess
("topo", for example).

You can locate the glossary in the main doc table of contents (TOC), or in the
Reference section of the doc website.

See these other CNCF projects for examples of glossaries:

- [etcd](https://etcd.io/docs/v3.5/learning/glossary/)
- [KEDA](https://keda.sh/docs/2.17/reference/glossary/)


## Make CLI references more findable

### Overview

Vitess has a lot of command-line tools. The references for these
tools should be more easily findable; `Reference > Programs` is
not an intuitive name for a collection of command references. At
the least, the library should have `CLI` in the title.

Audience: All

Type: Reference

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: <https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess> under
0014-Vitess.

See the [umbrella issue](https://github.com/vitessio/website/issues/1955)
listing all issues identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Programs](https://vitess.io/docs/21.0/reference/programs/)

Suggested changes:

Rename ["Reference > Programs"](https://vitess.io/docs/21.0/reference/programs/)
to "Command line references". Consider organizing the CLIs by function (client,
daemon, agent, etc.) or some other taxonomy that reflects the needs of the
roles of whoever uses the tools.

## Explain installation options

### Write documentation on how to contribute documentation

### Overview

There is no documentation for website and tech doc content creation.

Audience: Documentation contributors

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess.

See the https://github.com/vitessio/website/issues/1955 listing all issues
identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Vitess website repo](https://github.com/vitessio/website)
- [Vitess documentation](https://vitess.io/docs)

Suggested changes:

Write procedures for contributors to add and update information on
the product website and in the technical documentation. Such
procedures could include:

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

These processes should address documentation-specific concerns, not just repeat
the code release procedures (although there may be many of the same steps).

## Remove non-inclusive language

### Overview

Search the document for non-inclusive terms, especially tier-1 and tier-2 terms
per the [Inclusive Naming Initiative](https://inclusivenaming.org/). Replace
with recommended language where possible.

Audience: Documentation contributors

Type: Task

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess.

See the https://github.com/vitessio/website/issues/1955 listing all issues
identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Vitess website repo](https://github.com/vitessio/website)
- [Vitess documentation](https://vitess.io/docs)

Suggested changes:

Search the document for non-inclusive terms, especially tier-1 and tier-2 terms
per the [Inclusive Naming Initiative](https://inclusivenaming.org/). Replace
with recommended language where possible.


## Clean up GitHub issues

Improve documentation issue handling by making issues consistent.

### Overview

Audience: Documentation contributors

Type: All

### Context

This issue tracks recommended changes resulting from an analysis of the Vitess
documentation commissioned by CNCF. The analysis and supporting documents are
here: https://github.com/cncf/techdocs/tree/main/analyses/0014-vitess.

See the https://github.com/vitessio/website/issues/1955 listing all issues
identified in the analysis.

### Possible Implementation

Related material in the current doc:

- [Vitess website repo](https://github.com/vitessio/website)
- [Vitess documentation](https://vitess.io/docs)

Suggested changes:

- Create an issue template to ensure that issue descriptions are consistent and
complete.
- Go through the issues backlog and close or update old issues.
- Write a "new contributors" document. Post prominently.
