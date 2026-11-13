# AI Assisted Analysis Harness

This folder holds a reusable harness for running a CNCF TechDocs documentation
analysis with GitHub Copilot. The full overview, including the validated
toolchain, the pre-flight checklist, the step-by-step workflow, and the folder
layout, is in [`index.md`](index.md).

In short:

- `index.md` is the published overview and the entry point for writers.
- `_github/` is the template you copy into the target project's `.github/`
  folder. It contains the run-time Copilot instructions, the analysis criteria,
  the predefined prompts, and the issue templates.
- `_github/examples/kubevirt/` is a worked example of the project-specific
  section of `copilot-instructions.md`.
