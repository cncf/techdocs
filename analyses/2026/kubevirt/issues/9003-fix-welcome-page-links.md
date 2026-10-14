---
title: Add a Start here link and fix the Slack link on the Welcome page #9003
labels: [urgent, help wanted]
repo: https://github.com/kubevirt/user-guide/issues
---

## Description

The Welcome page lists sections but does not tell a first-time reader where to begin. It also shows the Slack channel as a raw URL (`https://kubernetes.slack.com/messages/virtualization`). Readers who are not yet in the Kubernetes Slack workspace cannot open that link, and the page does not name the channel.

Edit `docs/index.md`:

- Add a one-line "New to KubeVirt? Start here" link at the top that points to the Getting Started page.
- Replace the raw Slack URL with the channel name (`#virtualization`) and a link to the Kubernetes Slack invitation page, so readers can join the workspace first.

## What you expected

A new reader sees a "Start here" link before the section list and can reach the first-run path in one click. The Slack entry names the channel and explains how to join the workspace.

## URL

- https://kubevirt.io/user-guide/
- `docs/index.md`

## Additional context

Depends on #9001, which creates the Getting Started page that the new link targets. Link to the page's final URL once it exists.

This issue tracks recommended changes resulting from an analysis of the KubeVirt documentation commissioned by [CNCF](https://www.cncf.io/projects/kubevirt/). The assistance request is tracked in [cncf/techdocs#343](https://github.com/cncf/techdocs/issues/343).
