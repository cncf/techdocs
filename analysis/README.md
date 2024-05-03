# CNCF TechDocs Analysis for OSS Projects

## Purpose

The goals of a CNCF technical documentation analysis are to:

- Examine the current project technical documentation and website against the CNCF's analysis framework, as described in the doc analysis [criteria](./criteria.md).
- Compare the documentation against the current or proposed maturity level for the overall project.
- Recommends a program of key improvements with the largest return on investment. These improvements are documented as *recommendations* in the analysis document and expanded in a companion [implementation plan](./implementation-template.md) and [issues backlog](./umbrella-issue-template.md).

## Contents

In this directory:

- **Project Analyses**: `analysis` contains analyses of the technical documentation for selected CNCF incubating and graduated software projects. 
- **Analysis Tools**: `analysis-tools` contains instructions, templates, analysis criteria, and background information to enable a mid- to senior-level technical writer to perform an analysis independently with some support from the CNCF tech docs staff. 

### Project Analyses

Completed analyses are contained in the `analysis` directory.

There are two rounds of projects, *Round 1* and *Round 2*.

#### Round 1

Analyses **0001** - **0007** are a first round of projects completed as "assessments" through the CNCF Help Desk. The `000N-projectname.md` file is the sole artifact of the assessment in each case. The last one was added in May 2023.

#### Round 2

Subsequent analyses were commissioned starting in November 2023. Each has its own directory, `00NN-projectname`, containing three analysis artifacts:
  - `projectname-analysis.md` evaluates the project documentation and provides comments and recommendations in a manner very similar to the Round 1 tech doc assessments. This document is based on the analysis template and accompanying criteria developed for the Round 1.
  - `projectname-implementation.md` provides concrete actions that can be implemented by project contributors. Its focus is on specific, achievable work that will have a strong positive impact on document effectiveness.
  - `projectname-issues.md` is a backlog of improvement actions, meant to be entered as GitHub Issues, derived from `projectname-implementation.md`.

### Analysis Tools

Templates and instructions for doing the analyses are contained in the `analysis-tools` directory.

#### Audience

This directory is for primarily for members of the CNCF TechDocs team, including contractors or consultants, who need to conduct or assist with an analysis of a CNCF open-source project's technical documentation. Readers in other roles can also benefit from understanding the guidelines in this directory:

- **Project maintainers** can learn how improved technical documentation can increase the effectiveness of the project software, speed adoption, and improve user satisfaction.
- **CNCF Foundation members** can learn what benefits can (and cannot) be expected of a documentation improvement effort.
- **Members of other open-source software foundations** can use the analysis tools as a model, in whole or in part, for their own documentation improvement processes. (Please contact the Cloud Native Computing Foundation to discuss licensing and permission.)
- **Project contributors** can learn what factors go into improving technical documentation and what is expected of contributors who work on project documentation issues.

#### Contents

Use the guidelines and templates in this directory to perform a documentation analysis for CNCF. These materials provide:
- A relatively objective set of criteria (a "rubric") for evaluating existing documentation and website content, infrastructure, and support.
- An attempt to make the documentation analysis appropriate to the current (or proposed) maturity level for the overall project.
- Emphasis on effective documentation that serves all users associated with the project.

##### How-to

`howto.md` contains instructions for requesting, writing, and consuming an analysis.

##### Criteria

`criteria.md` describes the criteria used to evaluate a project's technical documentation and website. These criteria are also referred to as a "rubric" elsewhere in this repo. The criteria are unchanged between the first and second round of analyses.

##### Templates

These are templates for the analysis artifacts.

- **Analysis Template**: `analysis-template.md` is the main analysis template, based on the work of the original 2021-23 tech docs assessments. 
- **Implementation Plan**: The implementation plan, represented in `implementation-template.md`, is an intermediate step between the analysis and the issues backlog, meant as an aid to digesting the analysis recommendations into actionable issues. 
- **Issues**: This is the final backlog of recommended changes to the documentation, meant to be transferred directly into the GitHub Issues of the project documentation repo. There are two templates:
    - `issue-template.md` is a template for individual issues that can be use to create issues in GitHub.
    - `umbrella-issue-template.md` can be used to create an umbrella issue in GitHub, and can also be used as a template for a `_PROJECT_-issues.md` document to be included in the analysis pull request.