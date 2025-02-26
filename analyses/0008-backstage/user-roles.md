# Backstage User Roles for Doc

This document provides recommendations for user roles, or personas, for
Backstage. The goal here is to identify a working set of distinct user roles
around which to organize the Backstage documentation.

The documentation should ultimately be task-oriented, with tasks organized
around users and their objectives. A process for creating this type of
documentation set is under development in the CNCF Tech Doc GitHub project.

## Summary of Proposed User Roles

The following table summarizes Backstage user roles proposed by the Backstage
OSS community\*. The roles assume the following:

- An organization has software objectives that cannot be met without a
  centralized solution, and has resolved to commit resources to solving those
  problems.
- The organization adopts Backstage, setting up a single, central Backstage
  server instance ("app").
- The organization contains many development groups. These groups can be
  organized in any manner, but this document assumes a flat organization of
  small development groups.
- "Development group" refers to any group that produces a software product
  manageable in Backstage, including but not limited to internal and external
  toolkits and APIs; components; databases; and web-based and standalone
  applications.
- The organization has ties to the Backstage open source software project,
  specifically:
  - One or more engineers who contribute to the project.
  - Developer users who ask questions and participate in discussions,
    newsgroups, and other community forums.

\*Ultimately. This document is a work in progress to be revised by consensus.

| User Role             | Org Level     | Description                                                                                                                                                                                                                                                                                |
| --------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Champion              | Organization  | A combination evangelist/implementer/coordinator dedicated to driving adoption of Backstage at an organization. The champion is vital to removing barriers to developer adoption by, among other things, making the developer experience a delight and by demonstrating Backstage's value. |
| Administrator         | Organization  | An IT or DevOps professional responsible for setting up and maintaining an organization's Backstage app. The administrator might or might not also be the Backstage champion.                                                                                                              |
| Internal Integrator   | Group or Org  | An engineer within an organization who creates or modifies the org's Backstage app (typically by writing or modifying a plugin) to add functionality required by the org. This modification might or might not then be contributed back to the Backstage OSS project.                      |
| Group maintainer      | Group         | A member of a software group responsible for keeping the group's Backstage entries up to date.                                                                                                                                                                                             |
| End-user developer    | Group         | The "bread and butter" user of Backstage, an end-user developer is part of a group within an organization that uses Backstage to both learn about and use software components within the org and to publish and document its own software.                                                 |
| Contributor developer | Backstage OSS | A contributor to the Backstage open-source project. Many if not most contributors develop plugins to extend the functionality and integration capabilities of Backstage.                                                                                                                   |
| Integrator            | Backstage OSS | A contributing developer who develops a plugin that enables Backstage to interoperate with another system.                                                                                                                                                                                 |

These roles might overlap; or, in some cases, especially in small organizations,
the same person might fill two or more roles. For example, the champion might be
the Backstage administrator, and/or might also be responsible for internal
integration projects. Or, an integration project might fall to an end-user
developer in a group that requires functionality not yet available in Backstage.
