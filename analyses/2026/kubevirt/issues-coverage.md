# Issue coverage report

This report maps every recommendation in `.github/input/ai-ranked-recommendations.csv` to the issue file in `.github/output/issues/` that covers it. It is kept outside the issues directory so it is not uploaded as an issue.

## Issue files

| File | Label | Sub-issues |
|---|---|---|
| `U-create-getting-started-path.md` | urgent | 6 |
| `U-fix-navigation-gaps.md` | urgent | 7 |
| `U-mkdocs-improvements.md` | urgent | 4 |
| `U-document-v19-features.md` | high | 6 |
| `add-troubleshooting-page.md` | high | standalone |
| `U-accessibility-improvements.md` | high | 9 |
| `U-inclusive-language-updates.md` | high | 6 |
| `U-build-contributor-guide.md` | urgent | 9 |
| `U-publish-versioned-docs.md` | high | 5 |
| `U-document-community-channels.md` | urgent | 5 |
| `fix-footer-cncf-compliance.md` | urgent | standalone |
| `U-fix-kubevirt-io-gaps.md` | urgent | 10 |
| `U-enable-analytics.md` | high | 3 |
| `U-document-site-ownership.md` | high | 7 |

## Recommendation mapping

<!-- | # | Section | Area | CSV priority | Issue file | Sub-issue |
|---|---|---|---|---|---|
| 1 | Project Documentation | Information architecture | 2 - High | `U-create-getting-started-path.md` | Add a Getting Started page after Architecture |
| 2 | Project Documentation | Information architecture | 2 - High | `U-create-getting-started-path.md` | Rewrite Basic Use as "Your first VirtualMachine" |
| 3 | Project Documentation | Information architecture | 1 - Urgent | `U-fix-navigation-gaps.md` | Add the Plugins page to the navigation and delete the duplicate page |
| 4 | Project Documentation | Information architecture | 2 - High | `U-document-v19-features.md`<br>`U-document-v19-features.md`<br>`U-document-v19-features.md` | Document the VirtualMachineBackup API<br>Document the CrossArchitectureVirtualization feature gate<br>Document masquerade PortRanges and MigrationPolicy compression |
| 5 | Project Documentation | Information architecture | 2 - High | `U-document-v19-features.md` | Create a virtctl command reference |
| 6 | Project Documentation | Information architecture | 2 - High | `U-document-v19-features.md` | Add a feature-gate table |
| 7 | Project Documentation | Information architecture | 2 - High | `add-troubleshooting-page.md` | (standalone issue) |
| 8 | Project Documentation | Information architecture | 3 - Backlog | `U-fix-navigation-gaps.md` | Add a landing page to each of the Compute, Network, and Storage sections |
| 9 | Project Documentation | Information architecture | 3 - Backlog | `U-fix-navigation-gaps.md` | Rename API-centric page titles to user goals |
| 10 | Project Documentation | Information architecture | 3 - Backlog | `U-fix-navigation-gaps.md` | Group legacy workload mechanisms under a Legacy heading |
| 11 | Project Documentation | Information architecture | 2 - High | `U-fix-navigation-gaps.md` | Remove or archive legacy installation content |
| 12 | Project Documentation | Information architecture | 1 - Urgent | `U-fix-navigation-gaps.md` | Add the Plugins page to the navigation and delete the duplicate page |
| 13 | Project Documentation | Information architecture | 1 - Urgent | `U-fix-navigation-gaps.md` | Move Release Notes out of the middle of the main navigation |
| 14 | Project Documentation | New user content | 2 - High | `U-create-getting-started-path.md` | Add a Getting Started page after Architecture |
| 15 | Project Documentation | New user content | 2 - High | `U-create-getting-started-path.md` | Restructure the Installation page so the core procedure comes first |
| 16 | Project Documentation | New user content | 1 - Urgent | `U-create-getting-started-path.md` | End the Installation page with a Next steps section |
| 17 | Project Documentation | New user content | 2 - High | `U-create-getting-started-path.md` | Restructure the Installation page so the core procedure comes first |
| 18 | Project Documentation | New user content | 2 - High | `U-create-getting-started-path.md` | Expand the virtctl page and rename it "Installing virtctl" |
| 19 | Project Documentation | New user content | 2 - High | `U-create-getting-started-path.md` | Rewrite Basic Use as "Your first VirtualMachine" |
| 20 | Project Documentation | New user content | 1 - Urgent | `U-mkdocs-improvements.md` | Enable code copy and search features in the theme |
| 21 | Project Documentation | New user content | 3 - Backlog | `U-accessibility-improvements.md`<br>`U-accessibility-improvements.md` | Convert code blocks on the new-user path<br>Convert code blocks on the longest reference pages |
| 22 | Project Documentation | New user content | 3 - Backlog | `U-create-getting-started-path.md` | Point newcomers at the Getting Started page from Welcome and Quickstarts |
| 23 | Project Documentation | New user content | 1 - Urgent | `U-create-getting-started-path.md` | Point newcomers at the Getting Started page from Welcome and Quickstarts |
| 24 | Project Documentation | Content maintainability & site mechanics | 2 - High | `U-publish-versioned-docs.md` | Document the content versioning model |
| 25 | Project Documentation | Content maintainability & site mechanics | 2 - High | `U-publish-versioned-docs.md` | Publish versioned documentation with a version selector |
| 26 | Project Documentation | Content maintainability & site mechanics | 2 - High | `U-document-v19-features.md` | Standardize the feature-state admonition |
| 27 | Project Documentation | Content maintainability & site mechanics | 3 - Backlog | `U-publish-versioned-docs.md` | Document the release-notes update process |
| 28 | Project Documentation | Content maintainability & site mechanics | 1 - Urgent | `U-mkdocs-improvements.md` | Enable code copy and search features in the theme |
| 29 | Project Documentation | Content maintainability & site mechanics | 3 - Backlog | `U-publish-versioned-docs.md` | Add a localization statement |
| 30 | Project Documentation | Content maintainability & site mechanics | 2 - High | `U-publish-versioned-docs.md` | Ask about a site-wide search |
| 31 | Project Documentation | Content creation processes | 2 - High | `U-build-contributor-guide.md` | Expand CONTRIBUTING.md into a full documentation contributor guide |
| 32 | Project Documentation | Content creation processes | 2 - High | `U-build-contributor-guide.md` | Name maintainers and route reviews to subject-matter experts |
| 33 | Project Documentation | Content creation processes | 2 - High | `U-build-contributor-guide.md` | Write a documentation style guide |
| 34 | Project Documentation | Content creation processes | 1 - Urgent | `U-build-contributor-guide.md` | Add a pull request template |
| 35 | Project Documentation | Content creation processes | 2 - High | `U-build-contributor-guide.md` | Name maintainers and route reviews to subject-matter experts |
| 36 | Project Documentation | Content creation processes | 2 - High | `U-build-contributor-guide.md` | Name maintainers and route reviews to subject-matter experts |
| 37 | Project Documentation | Content creation processes | 1 - Urgent | `U-build-contributor-guide.md` | State the code-freeze requirement and a stale-PR policy, and triage open pull requests |
| 38 | Project Documentation | Content creation processes | 2 - High | `U-build-contributor-guide.md` | State the code-freeze requirement and a stale-PR policy, and triage open pull requests |
| 39 | Project Documentation | Inclusive language | 3 - Backlog | `U-inclusive-language-updates.md`<br>`U-inclusive-language-updates.md` | Reword minimizing language on the five pages with the most occurrences<br>Reword minimizing language across the remaining pages |
| 40 | Project Documentation | Inclusive language | 1 - Urgent | `U-build-contributor-guide.md` | Write a documentation style guide |
| 41 | Project Documentation | Inclusive language | 3 - Backlog | `U-inclusive-language-updates.md` | Add an automated check for minimizing language |
| 42 | Project Documentation | Inclusive language | 1 - Urgent | `U-inclusive-language-updates.md` | Update legacy branch-name links and the Presets example |
| 43 | Project Documentation | Inclusive language | 1 - Urgent | `U-inclusive-language-updates.md` | Update legacy branch-name links and the Presets example |
| 44 | Project Documentation | Inclusive language | 2 - High | `U-inclusive-language-updates.md` | Prefer "cancel" over "abort" in Live Migration prose |
| 45 | Project Documentation | Inclusive language | 3 - Backlog | `U-inclusive-language-updates.md` | Use tagged or permalink URLs for upstream project links |
| 46 | Contributor documentation | Communication methods documented | 2 - High | `U-document-community-channels.md` | Add a Community and communication page to the guide |
| 47 | Contributor documentation | Communication methods documented | 3 - Backlog | `U-document-community-channels.md` | Add a Community and communication page to the guide |
| 48 | Contributor documentation | Communication methods documented | 1 - Urgent | `U-mkdocs-improvements.md` | Add repository and social links to every page |
| 49 | Contributor documentation | Communication methods documented | 1 - Urgent | `U-document-community-channels.md` | Add a Community and communication page to the guide |
| 50 | Contributor documentation | Beginner friendly issue backlog | 1 - Urgent | `U-document-community-channels.md` | Standardize on the `good first issue` label |
| 51 | Contributor documentation | Beginner friendly issue backlog | 2 - High | `U-document-community-channels.md` | Seed and maintain a pool of beginner issues |
| 52 | Contributor documentation | Beginner friendly issue backlog | 2 - High | `U-document-community-channels.md` | Triage the open issue backlog |
| 53 | Contributor documentation | Beginner friendly issue backlog | 3 - Backlog | `U-document-community-channels.md` | Standardize on the `good first issue` label |
| 54 | Contributor documentation | Beginner friendly issue backlog | 3 - Backlog | `U-document-community-channels.md` | Triage the open issue backlog |
| 55 | Contributor documentation | Beginner friendly issue backlog | 3 - Backlog | `U-document-community-channels.md` | Seed and maintain a pool of beginner issues |
| 56 | Contributor documentation | Beginner friendly issue backlog | 2 - High | `U-document-community-channels.md` | Publish a documentation triage cadence and give documentation a SIG home |
| 57 | Contributor documentation | New contributor getting started content | 2 - High | `U-build-contributor-guide.md` | Add a "Making your first documentation change" walkthrough |
| 58 | Contributor documentation | New contributor getting started content | 2 - High | `U-build-contributor-guide.md` | Add "Where to ask for help" and direct links to beginner issues |
| 59 | Contributor documentation | New contributor getting started content | 1 - Urgent | `U-build-contributor-guide.md` | Add "Where to ask for help" and direct links to beginner issues |
| 60 | Contributor documentation | New contributor getting started content | 1 - Urgent | `U-build-contributor-guide.md` | Add "Where to ask for help" and direct links to beginner issues |
| 61 | Contributor documentation | New contributor getting started content | 3 - Backlog | `U-build-contributor-guide.md` | Add a "Contributing to the code" subsection and document mentoring |
| 62 | Contributor documentation | New contributor getting started content | 2 - High | `U-build-contributor-guide.md` | Add a "Contributing to the code" subsection and document mentoring |
| 63 | Contributor documentation | Project governance documentation | 2 - High | `U-fix-kubevirt-io-gaps.md` | Add a Governance section to the Community page |
| 64 | Contributor documentation | Project governance documentation | 1 - Urgent | `U-build-contributor-guide.md` | Explain how the project is run on the Contributing page |
| 65 | Contributor documentation | Project governance documentation | 1 - Urgent | `U-build-contributor-guide.md` | Explain how the project is run on the Contributing page |
| 66 | Contributor documentation | Project governance documentation | 2 - High | — | Not an issue — asks maintainers to audit SIG charters and `sigs.yaml` in `kubevirt/community`; a governance action outside the documentation scope. |
| 67 | Website & Infrastructure | Single-source requirement | 2 - High | `U-document-site-ownership.md` | Document where documentation lives |
| 68 | Website & Infrastructure | Single-source requirement | 3 - Backlog | `U-document-site-ownership.md` | Move user-facing content out of kubevirt/kubevirt/docs |
| 69 | Website & Infrastructure | Single-source requirement | 3 - Backlog | `U-document-site-ownership.md` | Triage the CDI documentation the guide links to |
| 70 | Website & Infrastructure | Single-source requirement | 2 - High | `U-document-site-ownership.md` | Record the repository and toolchain decisions |
| 71 | Website & Infrastructure | Single-source requirement | 1 - Urgent | `U-fix-navigation-gaps.md` | Give the API reference a visible home in the user guide |
| 72 | Website & Infrastructure | Website requirements | 2 - High | `fix-footer-cncf-compliance.md` | (standalone issue) |
| 73 | Website & Infrastructure | Website requirements | 1 - Urgent | `U-fix-kubevirt-io-gaps.md` | Add the © symbol and the missing root repository files |
| 74 | Website & Infrastructure | Website requirements | 3 - Backlog | `U-fix-kubevirt-io-gaps.md` | Point vendor logos at KubeVirt-specific pages |
| 75 | Website & Infrastructure | Website requirements | 1 - Urgent | `fix-footer-cncf-compliance.md`<br>`U-fix-kubevirt-io-gaps.md` | (standalone issue, user guide)<br>Add the © symbol and the missing root repository files (website) |
| 76 | Website & Infrastructure | Website requirements | 1 - Urgent | `U-fix-kubevirt-io-gaps.md` | Add the © symbol and the missing root repository files |
| 77 | Website & Infrastructure | Website requirements | 3 - Backlog | `fix-footer-cncf-compliance.md`<br>`U-fix-kubevirt-io-gaps.md` | (standalone issue, user guide)<br>Add the © symbol and the missing root repository files (website) |
| 78 | Website & Infrastructure | Usability, accessibility and devices | 2 - High | `U-accessibility-improvements.md` | Fix header and link contrast and align the brand color |
| 79 | Website & Infrastructure | Usability, accessibility and devices | 3 - Backlog | `U-accessibility-improvements.md` | Replace the ASCII architecture diagram with an accessible diagram |
| 80 | Website & Infrastructure | Usability, accessibility and devices | 3 - Backlog | `U-accessibility-improvements.md` | Convert code blocks on the new-user path |
| 81 | Website & Infrastructure | Usability, accessibility and devices | 1 - Urgent | `U-accessibility-improvements.md` | Verify wide tables on mobile and add table captions |
| 82 | Website & Infrastructure | Usability, accessibility and devices | 3 - Backlog | `U-accessibility-improvements.md`<br>`U-accessibility-improvements.md`<br>`U-accessibility-improvements.md` | Split Disks and Volumes by volume type<br>Split Interfaces and Networks and Live Migration<br>Split Release Notes by minor release |
| 83 | Website & Infrastructure | Usability, accessibility and devices | 1 - Urgent | `U-mkdocs-improvements.md`<br>`U-accessibility-improvements.md` | Set the logo alt text and remove unused configuration and assets<br>Verify wide tables on mobile and add table captions |
| 84 | Website & Infrastructure | Usability, accessibility and devices | 3 - Backlog | `U-accessibility-improvements.md` | Add an accessibility check to CI |
| 85 | Website & Infrastructure | Branding and design | 3 - Backlog | `U-fix-kubevirt-io-gaps.md` | Publish a short brand reference |
| 86 | Website & Infrastructure | Branding and design | 2 - High | `U-accessibility-improvements.md` | Fix header and link contrast and align the brand color |
| 87 | Website & Infrastructure | Branding and design | 1 - Urgent | `U-mkdocs-improvements.md` | Add repository and social links to every page |
| 88 | Website & Infrastructure | Branding and design | 3 - Backlog | — | Not an issue — optional logo-variant preference with minimal reader impact. |
| 89 | Website & Infrastructure | Branding and design | 1 - Urgent | `U-mkdocs-improvements.md` | Set the logo alt text and remove unused configuration and assets |
| 90 | Website & Infrastructure | Branding and design | 1 - Urgent | `U-mkdocs-improvements.md` | Set the logo alt text and remove unused configuration and assets |
| 91 | Website & Infrastructure | Case studies/social proof | 1 - Urgent | `U-fix-kubevirt-io-gaps.md` | Link the existing CNCF case studies from the landing page |
| 92 | Website & Infrastructure | Case studies/social proof | 2 - High | `U-fix-kubevirt-io-gaps.md` | Show adopter use cases on the logo wall |
| 93 | Website & Infrastructure | Case studies/social proof | 3 - Backlog | `U-fix-kubevirt-io-gaps.md` | Create an adopters page |
| 94 | Website & Infrastructure | Case studies/social proof | 2 - High | — | Not an issue — inviting adopters to write posts or talks is community outreach, not a documentation change. |
| 95 | Website & Infrastructure | Case studies/social proof | 3 - Backlog | `U-fix-kubevirt-io-gaps.md` | Add blog categories beyond news and uncategorized |
| 96 | Website & Infrastructure | Case studies/social proof | 2 - High | — | Not an issue — a publishing-cadence commitment for the blog is a process decision, not a documentation change. |
| 97 | Website & Infrastructure | Case studies/social proof | 1 - Urgent | `U-document-community-channels.md` | Add a Community and communication page to the guide |
| 98 | Website & Infrastructure | Case studies/social proof | 1 - Urgent | `U-document-community-channels.md` | Add a Community and communication page to the guide |
| 99 | Website & Infrastructure | SEO, Analytics and site-local search | 2 - High | `U-enable-analytics.md` | Enable analytics on the user guide |
| 100 | Website & Infrastructure | SEO, Analytics and site-local search | 2 - High | `U-enable-analytics.md`<br>`U-fix-kubevirt-io-gaps.md` | Load analytics only in production (user guide)<br>Fix robots.txt, gate analytics to production, and block indexing of previews (website) |
| 101 | Website & Infrastructure | SEO, Analytics and site-local search | 1 - Urgent | `U-mkdocs-improvements.md`<br>`U-fix-kubevirt-io-gaps.md` | Make preview builds reproducible and non-indexable (user guide)<br>Fix robots.txt, gate analytics to production, and block indexing of previews (website) |
| 102 | Website & Infrastructure | SEO, Analytics and site-local search | 1 - Urgent | `U-fix-kubevirt-io-gaps.md` | Fix robots.txt, gate analytics to production, and block indexing of previews |
| 103 | Website & Infrastructure | SEO, Analytics and site-local search | 1 - Urgent | `U-mkdocs-improvements.md` | Make preview builds reproducible and non-indexable |
| 104 | Website & Infrastructure | SEO, Analytics and site-local search | 3 - Backlog | `U-fix-kubevirt-io-gaps.md` | Index non-blog pages in site search and cross-link the two searches |
| 105 | Website & Infrastructure | SEO, Analytics and site-local search | 2 - High | `U-document-site-ownership.md` | Add a Site infrastructure section to the README |
| 106 | Website & Infrastructure | SEO, Analytics and site-local search | 3 - Backlog | `U-enable-analytics.md` | Set up a recurring 404 report and feed it into the redirects map |
| 107 | Website & Infrastructure | Maintenance planning | 2 - High | `U-document-site-ownership.md` | Add a Site infrastructure section to the README |
| 108 | Website & Infrastructure | Maintenance planning | 2 - High | `U-document-community-channels.md` | Publish a documentation triage cadence and give documentation a SIG home |
| 109 | Website & Infrastructure | Maintenance planning | 3 - Backlog | `U-document-site-ownership.md` | Publish a maintainer ladder and keep OWNERS_ALIASES current |
| 110 | Website & Infrastructure | Maintenance planning | 2 - High | — | Not an issue — recruiting reviewers is a people action; the starter tasks it depends on are covered by the beginner issue backlog issue. |
| 111 | Website & Infrastructure | Maintenance planning | 2 - High | `U-document-site-ownership.md` | Record the repository and toolchain decisions |
| 112 | Website & Infrastructure | Maintenance planning | 1 - Urgent | `U-mkdocs-improvements.md` | Make preview builds reproducible and non-indexable |
| 113 | Website & Infrastructure | Maintenance planning | 2 - High | `U-document-site-ownership.md` | Add a Strict-Transport-Security header or record the gap |
| 114 | Website & Infrastructure | Maintenance planning | 3 - Backlog | `U-document-site-ownership.md` | Publish a maintainer ladder and keep OWNERS_ALIASES current | -->

## Priority adjustments

Umbrella labels follow the highest-priority sub-issue, with these exceptions:

<!-- | Recommendation | CSV priority | Issue label | Reason |
|---|---|---|---|
| 42, 43 (legacy `master` links and node-name example) | 1 - Urgent | high (`U-inclusive-language-updates.md`) | Two small fixes in an umbrella whose remaining work is backlog-priority prose cleanup. They are the first sub-issue so they can be done immediately; split them out if the umbrella's label matters. |
| 81, 83 (mobile table check and captions) | 1 - Urgent | high (`U-accessibility-improvements.md`) | The logo alt-text half of 83 is in the urgent configuration issue. The remaining verification and caption work is small and sits alongside the other accessibility fixes. |
| 8, 9, 10 (landing pages, title renames, Legacy grouping) | 3 - Backlog | urgent (`U-fix-navigation-gaps.md`) | Bundled with urgent navigation fixes because they touch the same `.nav.yml` files; the sub-issues can be deferred independently. |
| 22 (Quickstarts introduction) | 3 - Backlog | urgent (`U-create-getting-started-path.md`) | Combined with the urgent Welcome "Start here" link because both are one-paragraph edits to entry pages. |
| 53, 54, 55 (`help wanted` guidance, `lifecycle/frozen`, issue checklist) | 3 - Backlog | urgent (`U-document-community-channels.md`) | Bundled into the label-standardization, triage, and seeding sub-issues they naturally belong to. |
| 74, 85, 95, 104 (vendor logos, brand reference, blog categories, site search) | 3 - Backlog | urgent (`U-fix-kubevirt-io-gaps.md`) | Grouped with the urgent website compliance fixes because all land in `kubevirt/kubevirt.github.io`; these are the last four sub-issues and can be deferred. |
| 27, 29 (release-notes process, localization) | 3 - Backlog | high (`U-publish-versioned-docs.md`) | Both are short `CONTRIBUTING.md` additions that belong next to the versioning model. |
| 106 (404 report) | 3 - Backlog | high (`U-enable-analytics.md`) | Depends on the analytics sub-issues in the same umbrella. |
| 68, 69, 109, 114 (content audits, maintainer ladder, OWNERS_ALIASES) | 3 - Backlog | high (`U-document-site-ownership.md`) | Grouped with the ownership and boundary documentation they implement. | -->

## Notes for the writer

- `U-fix-kubevirt-io-gaps.md` describes changes to `kubevirt/kubevirt.github.io`. Its `repo` is set to the user guide per the instructions; change it to `https://github.com/kubevirt/kubevirt.github.io/issues` if the upload should target the website repository directly.
- Recommendations 75, 77, 100, and 101 each have a user-guide half and a website half and appear in two files.


## Counts

- Recommendations: 114
- Covered by an issue: 109
- Not an issue: 5
- Issue files: 14 (12 umbrella, 2 standalone)
- Sub-issues: 77
