# CNCF TechDocs Analysis How-To

## Audience

This document is for members of the CNCF TechDocs team and others who wish to
conduct or assist with an analysis of a CNCF open-source project's technical
documentation.

## Purpose

The goals of a CNCF technical documentation analysis are to:

- Examine the current project technical documentation and website against the
  CNCF's analysis [criteria].
- Compare the documentation against the current or proposed [project maturity
  level].
- Recommend a program of key documentation improvements with the largest return
  on investment. These improvements are documented as _recommendations_ in the
  analysis document, and expanded in a companion
  [implementation plan](./templates/implementation.md) and
  [issues list](./templates/issues-list.md).

## Doing a Tech Docs Analysis

The tech docs analysis consists of some repository bookkeeping (prerequisites),
then of three overall tasks:

1. Write the analysis document: evaluate the existing project documentation with
   respect to the [project maturity level] or proposed maturity level, if the
   analysis is associated with a project upgrade request. Identify gaps with
   CNCF [criteria]. Write general recommendations to close the largest and most
   important identified issues.
2. Write a implementation plan: decompose recommendations in to specific
   improvement suggestions. These can be additions or revisions to the docs;
   reorganization; website infrastructure changes; or any other work that will
   close address issues. Make suggestions specific enough (for example, if you
   propose reorganizing a section then provide an outline) without being overly
   constraining so that a contributor could solve the problem differently if
   they have a different solution. For example, make it clear that your proposed
   outline is only one possible reorganization.
3. Write an issue backlog.

Finally, there are follow-up steps including:

- Creating GitHub issues and a pull request
- Getting approval from project maintainers

### Prerequisites

This section assumes you are familiar with GitHub repositories and pull requests
(PRs). If you need a refresher, see
[Get started](https://docs.github.com/en/get-started) from the GitHub docs.

Project analyses are kept in the
[CNCF tech docs repository](https://github.com/cncf/techdocs). Clone and prepare
for

1. Clone the [CNCF tech docs repository](https://github.com/cncf/techdocs).
2. Create a branch for the analysis.
3. In the new branch, create a directory for the analysis in the CNCF tech docs
   [analyses] directory. Name the directory `00NN-_PROJECT_`, where _NN_ is the
   next index available in the directory (check for PRs as well, if someone else
   is working on tech doc analyses), and where _PROJECT_ is a short but not
   abbreviated project name. For example, for Kubernetes _PROJECT_ would be
   _kubernetes_, not _k8s_.
4. Copy all the doc analysis [templates].

### Writing the Analysis document

Follow the steps outlined below as a part of writing the project's analysis
document. Record your findings in the project's
[analysis.md](./templates/analysis.md) file.

1. Define the **scope** of the analysis. Edit "Scope of analysis" to reflect
   URLs and repositories included and excluded from the analysis.
2. Review the in-scope URLs and repositories for compliance with the rubric
   criteria. Note any gaps, as well as any areas that exceed criteria or are
   exceptionally well executed. I find it easiest to do this separately for each
   of the three areas of concern (project doc, contributor doc, website), making
   a pass through the documentation once for each section (Information
   architecture, New user content, Content maintainability, etc.). Don't worry
   about a numerical score during this step; instead, note how the documentation
   complies, or not, with each criterion with respect to the project maturity
   level (or proposed maturity level, if the analysis is part of a petition for
   upgrade). Write comments to note the most important gaps and best-executed
   features of the documentation.
3. Assign ratings to each criterion based on your comments and compliance with
   the maturity level expectations in the rubric. The ratings are
   self-explanatory. Keep in mind that "needs improvement" or "meets standards"
   is with respect to the current (or proposed) maturity level.
4. Write recommendations. The template implies that you'll do this for every
   criterion; the "Recommendations" headings mirror the "Comments" headings.
   However, if some alternative framework makes more sense, use that. For
   example, it might be that two or three of the product documentation criteria
   are improved by reorganizing the documentation. In this case, rather than
   repeat the recommendation to reorganize in each section, write a single
   recommendation and explain how it improves all the areas. This is the first
   step in moving from the analysis to specific, actionable, time-bound backlog
   items.

#### General tips

Things to keep in mind while doing the analysis:

- Look for:
  - Quick wins – low-effort changes that would have a major impact.
  - Large, systemic issues that you can organize a number of issues around.
  - The two or three most important issues that impede documentation
    effectiveness.
  - Anything the project does exceptionally well. We can call these out as
    examples in other evaluations!
- Don't get bogged down in detail when writing comments. Include enough detail
  that you can describe how to implement a suggested solution. A sentence or two
  is sufficient for most issues.
- Keep in mind the overall goal of the technical documentation: to make its
  users more effective. Focus on issues that get in the way of that goal.
- It is not necessary to come up with a recommendation in every case, especially
  for elements that are satisfactory or if a recommendation would result in
  minimal improvement.
- Don't worry about grammar and style if they don't affect documentation
  effectiveness. If writing style impedes understanding, make a note; otherwise
  move on. An exception: Insist that tasks and procedures be written as clear,
  step-by-step instructions.
- Some of the criteria, especially around contributor documentation, project
  governance, and website infrastructure, are essentially check-boxes. These you
  can quickly investigate, note, and move on. Spend more time analyzing the
  effectiveness of the project documentation.

#### Common issues

Many common issues seem to come about because open-source software documentation
is written by software developers while they are writing the software. This
results in documentation that:

1. Is organized around features, not users and use cases.
2. Explains technical concepts well, including architecture and design
   decisions.
3. Contains complete reference information for APIs, CLIs, and configuration
   parameters.
4. Has missing or incomplete user-oriented "how-to" explanations and operational
   procedures.

You may or may not find the following issues in your analysis, but it's worth
keeping them in mind:

- Ambiguity around user roles.
- Missing or unclear task-based documentation.
- Assumptions about the reader's level of knowledge.
- Organization that buries or scatters important information, especially tasks
  and procedures.
- Missing or unclear new-user workflows.

### Writing the implementation plan

Write the implementation plan. Edit the `_PROJECT_-implementation.md` file.

The gist of the implementation plan is to break down the recommendations in the
analysis document. This is an intermediate stage between general recommendations
and the issues backlog. For small projects and where the recommendations are
independent and time-bound, an implementation plan might not be necessary and
you can move straight to writing the backlog.

If you do write an implementation plan, start with recommendations in the
analysis document. Rewrite the recommendations, making them more specific, with
a suggested (but not mandatory) implementation. For example, if you recommend
reorganizing the documentation, provide a suggested outline, along with an
explanation of the reason for the reorg.

### Writing an issues backlog

Write an issues backlog. Edit `_PROJECT_-issues.md`.

The goal of writing an issues backlog is to offer project contributors the
opportunity to make the recommended changes.

Rewrite each action in the implementation plan. If possible, break large actions
into smaller issues. Each issue should be:

- Independent. As much as possible, no issue should have another issue as a
  prerequisite. A contributor should be able to choose an issue, resolve it, and
  close it without reference to any other issue.
- Time-bound. A contributor should be able to complete an issue in a reasonably
  short time, say a few hours or a couple of days at most.

Make the suggested solution even more specific. At this point, the issue should
almost be a recipe for making the doc improvement, with the caveat that a
contributor is not required to implement the solution as suggested in the issue.

## Next Steps

### Including supporting documentation

If you have supporting material that might be helpful to a contributor working
on the documentation issues, include them in the directory with the other
documents. For example, you might inventory the existing tech doc pages in a
spreadsheet; in this case, include a CSV file of the inventory.

### Creating a pull request

If you have not created a pull request with the analysis documents, do so now.
Tag project maintainers and CNCF documentation staff, and ask for comments.

### Getting contributor feedback

If you haven't met with the project's maintainers yet, do so before you create
the issues in GitHub. Ideally you'd like to have a Zoom meeting with any
interested parties to get feedback on the analysis and implementation plan.

### Creating GitHub issues

Create issues in the project documentation GitHub repository for:

- Each issues in the [issues list].
- An umbrella issue that provides a context for the previously created
  individual issues.

[analyses]: ../../analyses/
[criteria]: ./criteria.md
[project maturity level]: https://www.cncf.io/project-metrics
[templates]: ./templates/
[issues list]: ./templates/issues-list.md
