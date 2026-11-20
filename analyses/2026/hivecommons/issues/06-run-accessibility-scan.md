---
title: Run and record an accessibility scan for both sites
labels: [good first issue, documentation]
repo: https://github.com/hivecommons/hivecommons.github.io/issues
---

## Description

Audience: Project maintainers; informs a future documentation re-assessment.

Type: Task.

No scan was performed or supplied for this assessment to confirm the "Usability,
accessibility and devices" rating in [analysis.md](../analysis.md) for either
`hivecommons.dev` or `docs.hivecommons.dev`. An automated scan alone cannot
confirm the full rating: run axe-core or Lighthouse against both sites, and also
perform and record the manual checks the rubric calls for - keyboard-only
navigation, color contrast, screen-reader usability, and mobile navigation -
(for example, as a comment on the tracking issue for this analysis, or a short
doc under `src/docs/`), so that rating can move from "not assessed" to confirmed
at the next review rather than a scan-only approximation.

## Completion criteria

State the scanning tool used and record a clear pass/fail result for each manual
check above.

This issue tracks recommended changes resulting from an analysis of the Hive
Commons documentation requested in [cncf/techdocs#395][issue-395].

[issue-395]: https://github.com/cncf/techdocs/issues/395

- [ ] `https://github.com/hivecommons/hivecommons.github.io/issues/NNN`
