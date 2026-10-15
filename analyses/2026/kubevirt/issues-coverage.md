# Issue coverage report

This report maps every recommendation in
`.github/input/ai-ranked-recommendations.csv` to the numbered issue files in
`.github/output/issues/`. It is kept outside the issues directory so it is not
uploaded as an issue.

## Issues

<!-- markdownlint-disable MD013 -->

| Issue | Title                                                                                    | Label   | File                                           |
| ----- | ---------------------------------------------------------------------------------------- | ------- | ---------------------------------------------- |
| #9001 | Add a Getting Started page after Architecture                                            | high    | `9001-add-getting-started-page.md`             |
| #9002 | Rewrite Basic Use as "Your first VirtualMachine"                                         | high    | `9002-rewrite-basic-use.md`                    |
| #9003 | Add a Start here link and fix the Slack link on the Welcome page                         | urgent  | `9003-fix-welcome-page-links.md`               |
| #9004 | Restructure the Installation page around the core procedure                              | urgent  | `9004-restructure-installation-page.md`        |
| #9005 | Create an Installing virtctl page                                                        | high    | `9005-create-installing-virtctl-page.md`       |
| #9006 | Enable code copy and search features in mkdocs.yml                                       | urgent  | `9006-enable-code-copy-search.md`              |
| #9007 | Convert shell code blocks to fenced blocks                                               | backlog | `9007-convert-shell-code-blocks.md`            |
| #9008 | Fix orphaned pages and Release Notes placement in navigation                             | urgent  | `9008-fix-navigation-orphans.md`               |
| #9009 | Add landing pages to Compute, Network, and Storage                                       | backlog | `9009-add-section-landing-pages.md`            |
| #9010 | Rename API-centric titles and group legacy workload pages                                | backlog | `9010-rename-api-page-titles.md`               |
| #9011 | Remove or archive legacy installation content                                            | high    | `9011-remove-legacy-installation-content.md`   |
| #9012 | Document the VirtualMachineBackup API                                                    | high    | `9012-document-virtual-machine-backup-api.md`  |
| #9013 | Document the CrossArchitectureVirtualization gate, PortRanges, and migration compression | high    | `9013-document-v19-features.md`                |
| #9014 | Create a virtctl command reference                                                       | high    | `9014-create-virtctl-reference.md`             |
| #9015 | Add a feature-gate table                                                                 | high    | `9015-add-feature-gate-table.md`               |
| #9016 | Add a user-facing Troubleshooting page                                                   | high    | `9016-add-troubleshooting-page.md`             |
| #9017 | Standardize the feature-state admonition                                                 | high    | `9017-standardize-feature-state-admonition.md` |
| #9018 | Document the content versioning model, release-notes process, and localization           | high    | `9018-document-versioning-model.md`            |
| #9019 | Publish versioned documentation with a version selector                                  | high    | `9019-publish-versioned-docs.md`               |
| #9020 | Expand CONTRIBUTING.md into a documentation contributor guide                            | high    | `9020-expand-contributing-guide.md`            |
| #9021 | Add a documentation style guide                                                          | urgent  | `9021-add-style-guide.md`                      |
| #9022 | Add a pull request template                                                              | urgent  | `9022-add-pull-request-template.md`            |
| #9023 | Add per-directory OWNERS files                                                           | high    | `9023-add-owners-files.md`                     |
| #9024 | Give documentation a SIG home and clarify SIG meeting mechanics                          | high    | `9024-give-docs-sig-home.md`                   |
| #9025 | Triage open pull requests and add a stale-PR policy                                      | high    | `9025-triage-open-prs.md`                      |
| #9026 | Add MAINTAINERS.md and a maintainer ladder                                               | high    | `9026-add-maintainers-file.md`                 |
| #9027 | Reword minimizing language and cancel terminology                                        | high    | `9027-reword-minimizing-language.md`           |
| #9028 | Add accessibility and language checks to CI                                              | backlog | `9028-add-ci-doc-checks.md`                    |
| #9029 | Fix legacy master links and the node-name example                                        | urgent  | `9029-fix-legacy-master-references.md`         |
| #9030 | Add a Community and communication page to the guide                                      | high    | `9030-add-community-page.md`                   |
| #9031 | Add a Community and adoption block to the index and Contributing page                    | urgent  | `9031-add-community-adoption-links.md`         |
| #9032 | Add repository and social links to the footer                                            | urgent  | `9032-add-footer-social-links.md`              |
| #9033 | Fix logo alt text and remove unused assets and config                                    | urgent  | `9033-fix-logo-and-unused-assets.md`           |
| #9034 | Add a project overview and resource descriptions to the Contributing page                | urgent  | `9034-add-contributing-overview.md`            |
| #9035 | Add where-to-ask-help and the VEP docs deadline to the Contributing page                 | urgent  | `9035-add-help-and-vep-guidance.md`            |
| #9036 | Link filtered issue lists and explain labels on the Contributing page                    | urgent  | `9036-link-issue-lists.md`                     |
| #9037 | Add a first documentation change walkthrough to the Contributing page                    | high    | `9037-add-first-change-walkthrough.md`         |
| #9038 | Standardize the good first issue label                                                   | urgent  | `9038-standardize-good-first-issue.md`         |
| #9039 | Triage the issue backlog and publish a triage cadence                                    | high    | `9039-triage-issue-backlog.md`                 |
| #9040 | Add a Governance section to the kubevirt.io Community page                               | high    | `9040-add-governance-section.md`               |
| #9041 | Document where documentation lives                                                       | high    | `9041-document-content-boundary.md`            |
| #9042 | Add an API reference entry to the guide navigation                                       | urgent  | `9042-add-api-reference-link.md`               |
| #9043 | Audit kubevirt/kubevirt docs for user-facing content                                     | backlog | `9043-audit-kubevirt-docs.md`                  |
| #9044 | Audit CDI documentation for storage pages                                                | backlog | `9044-audit-cdi-docs.md`                       |
| #9045 | Decide whether to converge the website and user guide                                    | high    | `9045-decide-converge-toolchains.md`           |
| #9046 | Bring the user guide footer into compliance                                              | high    | `9046-fix-guide-footer.md`                     |
| #9047 | Fix the website footer and add community health files                                    | urgent  | `9047-fix-website-footer.md`                   |
| #9048 | Fix header and link contrast and align brand colors                                      | high    | `9048-fix-contrast-and-colors.md`              |
| #9049 | Fix mobile tables and replace the Architecture diagram                                   | urgent  | `9049-fix-mobile-tables.md`                    |
| #9050 | Split the Disks and Volumes and Interfaces and Networks pages                            | backlog | `9050-split-disks-networks-pages.md`           |
| #9051 | Split the Live Migration and Release Notes pages                                         | backlog | `9051-split-migration-release-notes.md`        |
| #9052 | Publish a brand reference                                                                | backlog | `9052-publish-brand-reference.md`              |
| #9053 | Add an adopters page and link CNCF case studies                                          | urgent  | `9053-add-adopters-page.md`                    |
| #9054 | Show adopter use cases and KubeVirt-specific vendor links                                | high    | `9054-show-adopter-use-cases.md`               |
| #9055 | Add blog categories and tags                                                             | backlog | `9055-add-blog-categories.md`                  |
| #9056 | Enable production-only analytics and a 404 report on the user guide                      | high    | `9056-enable-guide-analytics.md`               |
| #9057 | Fix robots.txt and gate analytics on kubevirt.io                                         | urgent  | `9057-fix-robots-and-site-analytics.md`        |
| #9058 | Make guide preview builds reproducible and non-indexable                                 | urgent  | `9058-fix-guide-preview-builds.md`             |
| #9059 | Unify search across the guide and the website                                            | high    | `9059-unify-search.md`                         |
| #9060 | Document site infrastructure ownership                                                   | high    | `9060-document-site-infrastructure.md`         |
| #9061 | Create a new-user getting started path                                                   | urgent  | `U-9061-create-getting-started-path.md`        |
| #9062 | Fix navigation gaps and reorganize information architecture                              | urgent  | `U-9062-fix-navigation-gaps.md`                |
| #9063 | Fill feature and reference coverage gaps                                                 | high    | `U-9063-fill-feature-coverage-gaps.md`         |
| #9064 | Publish versioned docs and standardize feature states                                    | high    | `U-9064-publish-versioned-docs.md`             |
| #9065 | Build a documentation contributor guide                                                  | urgent  | `U-9065-build-contributor-guide.md`            |
| #9066 | Improve the Contributing page for new contributors                                       | urgent  | `U-9066-improve-contributing-page.md`          |
| #9067 | Document community channels and governance                                               | urgent  | `U-9067-document-community-channels.md`        |
| #9068 | Apply inclusive language and legacy naming updates                                       | urgent  | `U-9068-inclusive-language-updates.md`         |
| #9069 | Apply accessibility and branding improvements                                            | urgent  | `U-9069-accessibility-improvements.md`         |
| #9070 | Fix website compliance and adopter content                                               | urgent  | `U-9070-fix-website-compliance.md`             |
| #9071 | Enable analytics and fix SEO configuration                                               | urgent  | `U-9071-enable-analytics-seo.md`               |
| #9072 | Document site ownership and content boundaries                                           | high    | `U-9072-document-site-ownership.md`            |

## Umbrella issues

| Umbrella                                                          | Label  | Sub-issues                                      |
| ----------------------------------------------------------------- | ------ | ----------------------------------------------- |
| #9061 Create a new-user getting started path                      | urgent | #9006, #9004, #9005, #9001, #9002, #9003, #9007 |
| #9062 Fix navigation gaps and reorganize information architecture | urgent | #9008, #9042, #9011, #9009, #9010, #9050, #9051 |
| #9063 Fill feature and reference coverage gaps                    | high   | #9012, #9013, #9014, #9015, #9016               |
| #9064 Publish versioned docs and standardize feature states       | high   | #9017, #9018, #9019                             |
| #9065 Build a documentation contributor guide                     | urgent | #9022, #9021, #9020, #9023, #9026, #9025        |
| #9066 Improve the Contributing page for new contributors          | urgent | #9038, #9034, #9036, #9035, #9037, #9039        |
| #9067 Document community channels and governance                  | urgent | #9032, #9030, #9031, #9040, #9024               |
| #9068 Apply inclusive language and legacy naming updates          | urgent | #9029, #9027, #9028                             |
| #9069 Apply accessibility and branding improvements               | urgent | #9033, #9049, #9048, #9052                      |
| #9070 Fix website compliance and adopter content                  | urgent | #9047, #9046, #9053, #9054, #9055               |
| #9071 Enable analytics and fix SEO configuration                  | urgent | #9058, #9057, #9056, #9059                      |
| #9072 Document site ownership and content boundaries              | high   | #9041, #9060, #9045, #9043, #9044               |

Standalone issues outside any umbrella: none. Each umbrella takes the highest
label among its sub-issues.

## Recommendation mapping

| #   | Section                   | Area                                     | CSV priority | Issue(s)                                                                                                      |
| --- | ------------------------- | ---------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| 1   | Project Documentation     | Information architecture                 | 2 - High     | #9001                                                                                                         |
| 2   | Project Documentation     | Information architecture                 | 2 - High     | #9002                                                                                                         |
| 3   | Project Documentation     | Information architecture                 | 1 - Urgent   | #9008                                                                                                         |
| 4   | Project Documentation     | Information architecture                 | 2 - High     | #9012, #9013                                                                                                  |
| 5   | Project Documentation     | Information architecture                 | 2 - High     | #9014                                                                                                         |
| 6   | Project Documentation     | Information architecture                 | 2 - High     | #9015                                                                                                         |
| 7   | Project Documentation     | Information architecture                 | 2 - High     | #9016                                                                                                         |
| 8   | Project Documentation     | Information architecture                 | 3 - Backlog  | #9009                                                                                                         |
| 9   | Project Documentation     | Information architecture                 | 3 - Backlog  | #9010                                                                                                         |
| 10  | Project Documentation     | Information architecture                 | 3 - Backlog  | #9010                                                                                                         |
| 11  | Project Documentation     | Information architecture                 | 2 - High     | #9011                                                                                                         |
| 12  | Project Documentation     | Information architecture                 | 1 - Urgent   | #9008                                                                                                         |
| 13  | Project Documentation     | Information architecture                 | 1 - Urgent   | #9008                                                                                                         |
| 14  | Project Documentation     | New user content                         | 2 - High     | #9001                                                                                                         |
| 15  | Project Documentation     | New user content                         | 2 - High     | #9004                                                                                                         |
| 16  | Project Documentation     | New user content                         | 1 - Urgent   | #9004                                                                                                         |
| 17  | Project Documentation     | New user content                         | 2 - High     | #9004                                                                                                         |
| 18  | Project Documentation     | New user content                         | 2 - High     | #9005                                                                                                         |
| 19  | Project Documentation     | New user content                         | 2 - High     | #9002                                                                                                         |
| 20  | Project Documentation     | New user content                         | 1 - Urgent   | #9006                                                                                                         |
| 21  | Project Documentation     | New user content                         | 3 - Backlog  | #9007                                                                                                         |
| 22  | Project Documentation     | New user content                         | 3 - Backlog  | #9001                                                                                                         |
| 23  | Project Documentation     | New user content                         | 1 - Urgent   | #9003                                                                                                         |
| 24  | Project Documentation     | Content maintainability & site mechanics | 2 - High     | #9018                                                                                                         |
| 25  | Project Documentation     | Content maintainability & site mechanics | 2 - High     | #9019                                                                                                         |
| 26  | Project Documentation     | Content maintainability & site mechanics | 2 - High     | #9017                                                                                                         |
| 27  | Project Documentation     | Content maintainability & site mechanics | 3 - Backlog  | #9018                                                                                                         |
| 28  | Project Documentation     | Content maintainability & site mechanics | 1 - Urgent   | #9006                                                                                                         |
| 29  | Project Documentation     | Content maintainability & site mechanics | 3 - Backlog  | #9018                                                                                                         |
| 30  | Project Documentation     | Content maintainability & site mechanics | 2 - High     | #9059                                                                                                         |
| 31  | Project Documentation     | Content creation processes               | 2 - High     | #9020                                                                                                         |
| 32  | Project Documentation     | Content creation processes               | 2 - High     | #9026                                                                                                         |
| 33  | Project Documentation     | Content creation processes               | 2 - High     | #9021                                                                                                         |
| 34  | Project Documentation     | Content creation processes               | 1 - Urgent   | #9022                                                                                                         |
| 35  | Project Documentation     | Content creation processes               | 2 - High     | #9023                                                                                                         |
| 36  | Project Documentation     | Content creation processes               | 2 - High     | #9024                                                                                                         |
| 37  | Project Documentation     | Content creation processes               | 1 - Urgent   | #9035                                                                                                         |
| 38  | Project Documentation     | Content creation processes               | 2 - High     | #9025                                                                                                         |
| 39  | Project Documentation     | Inclusive language                       | 3 - Backlog  | #9027                                                                                                         |
| 40  | Project Documentation     | Inclusive language                       | 1 - Urgent   | #9021                                                                                                         |
| 41  | Project Documentation     | Inclusive language                       | 3 - Backlog  | #9028                                                                                                         |
| 42  | Project Documentation     | Inclusive language                       | 1 - Urgent   | #9029                                                                                                         |
| 43  | Project Documentation     | Inclusive language                       | 1 - Urgent   | #9029                                                                                                         |
| 44  | Project Documentation     | Inclusive language                       | 2 - High     | #9027                                                                                                         |
| 45  | Project Documentation     | Inclusive language                       | 3 - Backlog  | #9029                                                                                                         |
| 46  | Contributor documentation | Communication methods documented         | 2 - High     | #9030                                                                                                         |
| 47  | Contributor documentation | Communication methods documented         | 3 - Backlog  | #9030                                                                                                         |
| 48  | Contributor documentation | Communication methods documented         | 1 - Urgent   | #9032                                                                                                         |
| 49  | Contributor documentation | Communication methods documented         | 1 - Urgent   | #9003                                                                                                         |
| 50  | Contributor documentation | Beginner friendly issue backlog          | 1 - Urgent   | #9038                                                                                                         |
| 51  | Contributor documentation | Beginner friendly issue backlog          | 2 - High     | #9039                                                                                                         |
| 52  | Contributor documentation | Beginner friendly issue backlog          | 2 - High     | #9039                                                                                                         |
| 53  | Contributor documentation | Beginner friendly issue backlog          | 3 - Backlog  | #9036                                                                                                         |
| 54  | Contributor documentation | Beginner friendly issue backlog          | 3 - Backlog  | #9038                                                                                                         |
| 55  | Contributor documentation | Beginner friendly issue backlog          | 3 - Backlog  | #9039                                                                                                         |
| 56  | Contributor documentation | Beginner friendly issue backlog          | 2 - High     | #9039                                                                                                         |
| 57  | Contributor documentation | New contributor getting started content  | 2 - High     | #9037                                                                                                         |
| 58  | Contributor documentation | New contributor getting started content  | 2 - High     | #9035                                                                                                         |
| 59  | Contributor documentation | New contributor getting started content  | 1 - Urgent   | #9034                                                                                                         |
| 60  | Contributor documentation | New contributor getting started content  | 1 - Urgent   | #9036                                                                                                         |
| 61  | Contributor documentation | New contributor getting started content  | 3 - Backlog  | #9037                                                                                                         |
| 62  | Contributor documentation | New contributor getting started content  | 2 - High     | #9035                                                                                                         |
| 63  | Contributor documentation | Project governance documentation         | 2 - High     | #9040                                                                                                         |
| 64  | Contributor documentation | Project governance documentation         | 1 - Urgent   | #9034                                                                                                         |
| 65  | Contributor documentation | Project governance documentation         | 1 - Urgent   | #9034                                                                                                         |
| 66  | Contributor documentation | Project governance documentation         | 2 - High     | #9024                                                                                                         |
| 67  | Website & Infrastructure  | Single-source requirement                | 2 - High     | #9041                                                                                                         |
| 68  | Website & Infrastructure  | Single-source requirement                | 3 - Backlog  | #9043                                                                                                         |
| 69  | Website & Infrastructure  | Single-source requirement                | 3 - Backlog  | #9044                                                                                                         |
| 70  | Website & Infrastructure  | Single-source requirement                | 2 - High     | #9045                                                                                                         |
| 71  | Website & Infrastructure  | Single-source requirement                | 1 - Urgent   | #9042                                                                                                         |
| 72  | Website & Infrastructure  | Website requirements                     | 2 - High     | #9046                                                                                                         |
| 73  | Website & Infrastructure  | Website requirements                     | 1 - Urgent   | #9047                                                                                                         |
| 74  | Website & Infrastructure  | Website requirements                     | 3 - Backlog  | #9054                                                                                                         |
| 75  | Website & Infrastructure  | Website requirements                     | 1 - Urgent   | #9047                                                                                                         |
| 76  | Website & Infrastructure  | Website requirements                     | 1 - Urgent   | #9047                                                                                                         |
| 77  | Website & Infrastructure  | Website requirements                     | 3 - Backlog  | #9047                                                                                                         |
| 78  | Website & Infrastructure  | Usability, accessibility and devices     | 2 - High     | #9048                                                                                                         |
| 79  | Website & Infrastructure  | Usability, accessibility and devices     | 3 - Backlog  | #9049                                                                                                         |
| 80  | Website & Infrastructure  | Usability, accessibility and devices     | 3 - Backlog  | #9007                                                                                                         |
| 81  | Website & Infrastructure  | Usability, accessibility and devices     | 1 - Urgent   | #9049                                                                                                         |
| 82  | Website & Infrastructure  | Usability, accessibility and devices     | 3 - Backlog  | #9050, #9051                                                                                                  |
| 83  | Website & Infrastructure  | Usability, accessibility and devices     | 1 - Urgent   | #9033, #9049                                                                                                  |
| 84  | Website & Infrastructure  | Usability, accessibility and devices     | 3 - Backlog  | #9028                                                                                                         |
| 85  | Website & Infrastructure  | Branding and design                      | 3 - Backlog  | #9052                                                                                                         |
| 86  | Website & Infrastructure  | Branding and design                      | 2 - High     | #9048                                                                                                         |
| 87  | Website & Infrastructure  | Branding and design                      | 1 - Urgent   | #9032                                                                                                         |
| 88  | Website & Infrastructure  | Branding and design                      | 3 - Backlog  | Not an issue — optional logo-variant preference with minimal reader impact.                                   |
| 89  | Website & Infrastructure  | Branding and design                      | 1 - Urgent   | #9033                                                                                                         |
| 90  | Website & Infrastructure  | Branding and design                      | 1 - Urgent   | #9033                                                                                                         |
| 91  | Website & Infrastructure  | Case studies/social proof                | 1 - Urgent   | #9053                                                                                                         |
| 92  | Website & Infrastructure  | Case studies/social proof                | 2 - High     | #9054                                                                                                         |
| 93  | Website & Infrastructure  | Case studies/social proof                | 3 - Backlog  | #9053                                                                                                         |
| 94  | Website & Infrastructure  | Case studies/social proof                | 2 - High     | Not an issue — inviting adopters to write posts or talks is community outreach, not a documentation change.   |
| 95  | Website & Infrastructure  | Case studies/social proof                | 3 - Backlog  | #9055                                                                                                         |
| 96  | Website & Infrastructure  | Case studies/social proof                | 2 - High     | Not an issue — a blog publishing-cadence commitment is a process decision, not a documentation change.        |
| 97  | Website & Infrastructure  | Case studies/social proof                | 1 - Urgent   | #9031                                                                                                         |
| 98  | Website & Infrastructure  | Case studies/social proof                | 1 - Urgent   | #9031                                                                                                         |
| 99  | Website & Infrastructure  | SEO, Analytics and site-local search     | 2 - High     | #9056                                                                                                         |
| 100 | Website & Infrastructure  | SEO, Analytics and site-local search     | 2 - High     | #9056, #9057                                                                                                  |
| 101 | Website & Infrastructure  | SEO, Analytics and site-local search     | 1 - Urgent   | #9057, #9058                                                                                                  |
| 102 | Website & Infrastructure  | SEO, Analytics and site-local search     | 1 - Urgent   | #9057                                                                                                         |
| 103 | Website & Infrastructure  | SEO, Analytics and site-local search     | 1 - Urgent   | #9058                                                                                                         |
| 104 | Website & Infrastructure  | SEO, Analytics and site-local search     | 3 - Backlog  | #9059                                                                                                         |
| 105 | Website & Infrastructure  | SEO, Analytics and site-local search     | 2 - High     | #9060                                                                                                         |
| 106 | Website & Infrastructure  | SEO, Analytics and site-local search     | 3 - Backlog  | #9056                                                                                                         |
| 107 | Website & Infrastructure  | Maintenance planning                     | 2 - High     | #9060                                                                                                         |
| 108 | Website & Infrastructure  | Maintenance planning                     | 2 - High     | #9024                                                                                                         |
| 109 | Website & Infrastructure  | Maintenance planning                     | 3 - Backlog  | #9026                                                                                                         |
| 110 | Website & Infrastructure  | Maintenance planning                     | 2 - High     | Not an issue — recruiting reviewers is a people action; the starter tasks it depends on are covered by #9039. |
| 111 | Website & Infrastructure  | Maintenance planning                     | 2 - High     | #9045                                                                                                         |
| 112 | Website & Infrastructure  | Maintenance planning                     | 1 - Urgent   | #9058                                                                                                         |
| 113 | Website & Infrastructure  | Maintenance planning                     | 2 - High     | #9060                                                                                                         |
| 114 | Website & Infrastructure  | Maintenance planning                     | 3 - Backlog  | #9026                                                                                                         |

## Priority adjustments

No issue takes a label lower than its highest-ranked recommendation. Each issue
takes the highest ranking among its recommendations, so these recommendations
were raised by bundling with higher-ranked work on the same pages or files:

| Issue | Label  | Recommendations raised (original ranking) | Reason                                                                      |
| ----- | ------ | ----------------------------------------- | --------------------------------------------------------------------------- |
| #9001 | high   | 22 (backlog)                              | The Quickstarts introduction links to the new Getting Started page.         |
| #9004 | urgent | 15, 17 (high)                             | Same page edit as the urgent "Next steps" section.                          |
| #9018 | high   | 27, 29 (backlog)                          | Short `CONTRIBUTING.md` additions that belong next to the versioning model. |
| #9021 | urgent | 33 (high)                                 | The style guide carries the urgent minimizing-language rule.                |
| #9026 | high   | 109, 114 (backlog)                        | Maintainer documentation belongs with the `MAINTAINERS.md` work.            |
| #9027 | high   | 39 (backlog)                              | Shares prose edits with the high-ranked cancel terminology question.        |
| #9029 | urgent | 45 (backlog)                              | Same legacy-branch link cleanup as the urgent `master` links.               |
| #9030 | high   | 47 (backlog)                              | Meeting details belong on the same community page.                          |
| #9035 | urgent | 58, 62 (high)                             | Same Contributing page section as the urgent VEP deadline.                  |
| #9036 | urgent | 53 (backlog)                              | Label explanation sits beside the urgent filtered issue links.              |
| #9037 | high   | 61 (backlog)                              | Same walkthrough section of the Contributing page.                          |
| #9038 | urgent | 54 (backlog)                              | Same label and lifecycle policy as the urgent label consolidation.          |
| #9039 | high   | 55 (backlog)                              | The issue checklist supports the triage cadence.                            |
| #9047 | urgent | 77 (backlog)                              | Same footer file edits as the urgent copyright fix.                         |
| #9049 | urgent | 79 (backlog)                              | Both fix content that fails on mobile or for screen readers.                |
| #9053 | urgent | 93 (backlog)                              | The adopters page is where the urgent case study links live.                |
| #9054 | high   | 74 (backlog)                              | Same `ADOPTERS.md` data work.                                               |
| #9056 | high   | 106 (backlog)                             | Depends on the analytics setup in the same issue.                           |
| #9057 | urgent | 100 (high)                                | Same `robots.txt` and head template changes on the website.                 |
| #9059 | high   | 104 (backlog)                             | Same search index work as the high-ranked question.                         |

<!-- markdownlint-enable MD013 -->

## Counts

- Recommendations: 114
- Recommendations turned into issues: 110
- Recommendations skipped as not an issue: 4 (88, 94, 96, 110)
- Standalone issue files written: 60 (9001–9060)
- Umbrella issue files written: 12 (9061–9072)
- Standalone issues not in an umbrella: 0
