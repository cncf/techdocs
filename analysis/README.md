# CNCF TechDocs Analysis for OSS Projects

This directory contains:

- Analyses of the technical documentation for selected CNCF incubating and graduated software projects. 
- Tools (templates, analysis criteria, background information) to enable a mid- to senior-level technical writer to perform an analysis independently with some support from the CNCF tech docs staff. 

## Project Analyses

There are two rounds of projects:

1. Analyses **0001** - **0007** are a first round of projects completed as "assessments" through the CNCF Help Desk. The file `000N-projectname.md` file is the sole artifact of the assessment in each case. The last one was added in May 2023.
2. Subsequent analyses were commissioned starting in November 2023. Each has its own directory, `00NN-projectname`, containing three analysis artifacts:
  - `projectname-analysis.md` evaluates the project documentation and provides comments and recommendations in a manner very similar to the first round of tech doc assessments. This document is based on the analysis template and accompanying criteria developed for the first round.
  - `projectname-implementation.md` provides concrete actions that can be implemented by project contributors. Its focus is on specific, achievable work that will have a strong positive impact on document effectiveness.
  - `projectname-issues.md` is a backlog of improvement actions, meant to be entered as GitHub Issues, derived from `projectname-implementation.md`.

## Analyst Tools

Read and follow the guidelines in the `analyst-tools` directory to perform a documentation analysis for CNCF. These guidelines provide:
- A relatively objective set of criteria (a "rubric") for evaluating technical documentation.
- An attempt the documentation analysis to the current (or proposed) maturity level for the overall project.
- A consistent set of criteria on which to evaluate existing documentation and website content, infrastructure, and support.
- Emphasis on effective documentation that serves all users associated with the project.

### How-to

This document contains a general discussion of the CNCF Tech Docs analysis program and instructions for requesting, writing, and consuming an analysis.

### Criteria

This document describes the criteria used to evaluate a project's technical documentation and website. These criteria are also referred to as a "rubric" elsewhere in this repo.

### Templates

These are templates for the analysis artifacts.

#### Analysis Template

This is the main analysis template, based on the work of the original 2021-23 tech docs assessments. 

#### Implementation Plan

The implementation plan is an intermediate step between the analysis and the issues backlog, meant as an aid to digesting the analysis recommendations into actionable issues. 

#### Issues

This is the final backlog of recommended changes to the documentation, meant to be transferred more or less directly into the GitHub Issues of the project documentation repo.