---
title:
  Document community channels in the guide and maintain a beginner-friendly
  issue backlog
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Overview

Readers who stay inside the user guide see only a raw Slack URL on the Welcome
page; the channels, mailing list, and community meetings are documented on
`kubevirt.io/community` but not in the guide. On the contributor side, the
repository uses two spellings of the good-first-issue label, so beginner issues
do not appear in GitHub's "Contribute" tab, and unlabeled issues reach
`lifecycle/rotten` and close without triage.

The sub-issues below bring the community information into the guide and set up
the labels, triage habits, and cadence that keep a small pool of beginner issues
available. Documentation also needs a formal home in the community SIG list so
newcomers know where to volunteer.

## Sub-issues

### Add a Community and communication page to the guide

Add a page, or a section on the Contributing page, that consolidates the Slack
channels, the `kubevirt-dev` mailing list, community meetings, and social
accounts in one place. Give each channel a one-line description of its purpose:
`#virtualization` for usage questions, `#kubevirt-dev` for contributor
discussion, the mailing list for announcements and longer threads. State the
meeting cadence and times and include the public calendar link
(`kubevirt@cncf.io`). Keep the content consistent with `kubevirt.io/community`.

On the Welcome page, replace the raw Slack URL with the channel name and a link
to the Kubernetes Slack invitation page. Add a short "Community and adoption"
block to `docs/index.md` that links to the `kubevirt.io` blog, videos, Summit,
adopters page, and Slack. On `docs/contributing.md`, where readers are invited
to submit case studies, link the existing adopters list and CNCF case studies so
contributors can see the format they are being asked to follow.

Done when: a reader can find every channel and the meeting schedule without
leaving the guide.

### Standardize on the `good first issue` label

Standardize on the GitHub-native `good first issue` label (spaced) and retire or
alias the hyphenated `good-first-issue`, so beginner issues appear in GitHub's
"Contribute" tab and discovery tooling. Relabel existing issues and update the
reference on the Contributing page to match. Reference both `good first issue`
and `help wanted` on the Contributing page and explain the difference:
`help wanted` marks slightly larger but still approachable tasks.

Done when: only one spelling of the label is in use and the Contributing page
explains both labels.

### Triage the open issue backlog

Apply `kind/*` and `sig/documentation` labels to unlabeled open issues, and
apply `triage/accepted` to issues that are ready to be worked on. Apply
`lifecycle/frozen` to still-relevant enhancements and documentation requests so
they do not reach `lifecycle/rotten` and close for inactivity alone.

Done when: every open issue has a `kind/*` label and a triage state.

### Seed and maintain a pool of beginner issues

Identify documentation gaps, typos, and small feature-doc updates and file them
as `good first issue`, aiming for five to ten open at any time. Add a short
"good first issue" checklist to the issue templates (affected page, expected
outcome, pointers to relevant docs) so each beginner issue is self-contained.

Done when: at least five `good first issue` items are open and each follows the
checklist.

### Publish a documentation triage cadence and give documentation a SIG home

Publish a lightweight triage cadence, for example a periodic documentation-issue
triage during a SIG or community meeting, so labeling, acceptance, and staleness
decisions stay consistent. Populate the `sig/documentation` entry in the
community `sig-list.md` with chairs, a meeting cadence or async channel, and a
charter that covers both the user guide and the website.

Done when: the cadence is written down on the Contributing page and
`sig-list.md` has a complete documentation entry.
