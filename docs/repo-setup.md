---
cSpell:ignore: cncf
---

# Repository setup

We recommend that CNCF projects separate docs into their own repository, away
from code. This has the following advantages:

- Docs contributors don't need to know the full code build pipeline
- It simplifies repo management/continuous integration setup

For more information:

- The [`cncf/project-template`](https://github.com/cncf/project-template)
  repository contains many of the files needed to set up a new repository

## CLA/DCO

CLA/DCO should be set up for a project as a part of their project onboarding.

## License files

Unless otherwise specified, documentation for CNCF projects is licensed under
[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/). Code is licensed
under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).

Most CNCF documentation repositories are a mix of code (website code) and
documentation itself, so they need two license files.

For documentation this means you must:

1. Add copyright notices for both the code and the docs to the repository's
   `README` and the website's footer

   For the repository:

   ```markdown
   # License

   $PROJECT_NAME is licensed under an [Apache 2.0 license](./LICENSE).

   The #PROJECT_NAME documentation is licensed under a
   [CC-BY-4.0 license](./LICENSE-docs).
   ```

2. Add both the CC-BY-4.0 `LICENSE-docs` and Apache 2.0 `LICENSE` files to the
   root directory of the documentation. For a plain text versions of both, see
   [cncf/project-template](https://github.com/cncf/project-template)

For more information, see:

- [CNCF's project copyright guidelines](https://github.com/cncf/foundation/blob/master/copyright-notices.md)
- [IP Policy](https://github.com/cncf/foundation/blob/master/charter.md#11-ip-policy)

## README

All docs repositories should have a README file that includes build
instructions. Look at [Longhorn's](https://github.com/longhorn/website) for an
example, and the
[cncf/project-template](https://github.com/cncf/project-template) for
boilerplate.
