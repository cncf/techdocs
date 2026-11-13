# About this folder

This folder contains two sub-folders for Copilot to place output:

- `analysis/` — per-area and per-section output files written by the area and
  section prompts (`<project-slug>-<stem>-<type>.md`).
- `issues/` — numbered standalone and umbrella issue files written by
  `/create-issues` and `/create-umbrella-issues`.

The `/create-issues` prompt also writes `issues-coverage.md` directly in this
folder, outside `issues/`, so it is not uploaded as an issue.
