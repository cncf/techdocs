---
title: Improve accessibility, mobile usability, and code block formatting
labels: [high, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

The guide's brand teal header and link color fall below the 4.5:1 contrast ratio that WCAG AA requires, the Architecture page's stack diagram is ASCII art that screen readers cannot interpret, wide tables may overflow on phones, and most code blocks use `$`-prefixed indented formatting that pastes badly and scrolls horizontally. Several pages exceed 500 lines, which makes them hard to navigate on any device.

The sub-issues below fix the contrast and diagram problems, modernize the code blocks starting with the new-user path, split the longest pages, and add an automated check so the fixes stay fixed. Enable `content.code.copy` first (tracked in the configuration quick-wins issue) so the code block work shows its full benefit.

## Sub-issues

### Fix header and link contrast and align the brand color with the main site

In `docs/stylesheets/extra.css`:

- Darken `--md-primary-fg-color` to a teal that gives at least 4.5:1 against white, or keep the brand teal for decorative elements only and set the header and tab text to a dark foreground.
- Replace the `filter: brightness(80%)` link rule with explicit `--md-typeset-a-color` values per color scheme, each checked against 4.5:1.
- Replace the ad hoc `#0db2b6` primary with a value from the main site's documented `$kv-color--green-*` scale, for example `#00aab2`, or ask the website maintainers to add `#0db2b6` to the scale so both properties draw from one list.

Verify both light and dark schemes with a contrast checker.

Done when: header text and links meet 4.5:1 in both schemes and the primary color matches the main site's scale.

### Replace the ASCII architecture diagram with an accessible diagram

On the Architecture page (`docs/architecture.md`), replace the ASCII stack diagram with a Mermaid diagram (enable `pymdownx.superfences` custom fences for `mermaid` in `mkdocs.yml`) or an image with descriptive alt text. Add a one-paragraph prose description of the layers so screen reader and mobile users get the same information.

Done when: the diagram renders on mobile and its content is available as text.

### Verify wide tables on mobile and add table captions

On a phone, check that the tables on `docs/cluster_admin/feature_gate_status_on_Arm64.md` and `docs/cluster_admin/device_status_on_Arm64.md` scroll horizontally rather than overflowing the page. If they overflow, remove the `display: table; width: max-content` override from `extra.css` or scope it to specific tables with `attr_list` classes. Add a short caption or introductory sentence above each wide status table stating what it shows.

Done when: no table overflows on a 375 px viewport and each status table has a caption.

### Convert code blocks on the new-user path to fenced blocks

On Installation, Installing virtctl, Basic Use, and Lifecycle, convert `$`-prefixed indented code blocks to fenced `shell` blocks without prompt characters. Place example output in a separate block or a `title="Output"` annotation so commands paste cleanly. Break commands over 100 characters across lines with `\` continuations.

Done when: every command on these pages can be copied and pasted without editing.

### Convert code blocks on the longest reference pages

Apply the same conversion to Disks and Volumes (`docs/storage/disks_and_volumes.md`), Export API (`docs/storage/export_api.md`), Interfaces and Networks (`docs/network/interfaces_and_networks.md`), and Live Migration (`docs/compute/live_migration.md`).

Done when: these four pages contain no `$`-prefixed indented code blocks.

### Split Disks and Volumes by volume type

Split `docs/storage/disks_and_volumes.md` into an overview page plus one page per volume type or group of related types. Add the new pages to `docs/storage/.nav.yml` and redirects for any anchors that external pages link to.

Done when: no resulting page exceeds about 500 lines and existing links resolve.

### Split Interfaces and Networks and Live Migration

- Split `docs/network/interfaces_and_networks.md` so binding methods and network attachment are separate pages.
- Move the migration strategies and network configuration sections of `docs/compute/live_migration.md` to sub-pages.

Update the `.nav.yml` files and add redirects.

Done when: each resulting page is under about 500 lines and existing links resolve.

### Split Release Notes by minor release

Split `docs/release_notes.md` into one page per minor release, or paginate it, and set the Release Notes navigation entry to open the newest release. Update `update_changelog.sh` so regeneration writes to the new structure.

Done when: the newest release opens first and older releases load on separate pages.

### Add an accessibility check to CI

Add an accessibility check to the Makefile and the Prow pre-submit, for example `pa11y-ci` or Lighthouse run against the built site for a sample of pages, so contrast regressions are caught in pull requests.

Done when: a pull request that lowers contrast below 4.5:1 fails the check.
