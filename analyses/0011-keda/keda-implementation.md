---
title: Implementing KEDA Doc Improvements
tags: keda
---

# Introduction

This document provides actionable suggestions for improving the KEDA technical
documentaiton.

For an analysis and general discussion of recommendations on KEDA technical
documentation, see [keda-analysis.md][keda-analysis].

## Recommendations, requirements, and best practices

This analysis measures documentation against CNCF project maturity standards,
and suggests possible improvements. In most cases there is more than one way to
do things. Few recommendations here are meant to be prescriptive. Rather,
recommendations are based on documentation best practices as understood by the
reviewers. The recommended implementations represent the reviewers' experience
with how to apply those best practices. In other words, borrowing terminology
from the lexicon of [RFCs][rfc-keywords], the changes described here should be
understood as "recommended" or "should" at the strongest, and "optional" or
"may" in many cases. Any "must" or "required" actions are clearly denoted as
such, and pertain to legal requirements such as copyright and licensing issues.

The documentation recommendations for this project are:

- [Reorganize the table of contents (TOC)](#reorganize-the-table-of-contents-toc)
- [Write a glossary](#write-a-glossary)
- [Add "How to set up a scaler" to the Operator guide](#add-how-to-set-up-a-scaler-to-the-operator-guide)
- [Write a New User workflow](#write-a-new-user-workflow)
- [Update the doc content creation instructions](#update-the-doc-content-creation-instructions)
- [Remove non-inclusive language](#remove-non-inclusive-language)
- [Make user roles explicit](#make-user-roles-explicit)
- [Clarify documentation maintainers](#clarify-documentation-maintainers)

# Reorganize the Table of Contents

Reorganize the Table of Contents to:

- Better welcome and orient new users
- Separate user rules (personas), if there are more than one
- Improve findability and access to tasks and procedures
- Separate conceptual, task, and reference information

In general, follow these principles when reorganizing the documentation:

- Put architecture, operating principles, and other conceptual explanations in
  the technical overview.
- Write instructions (in "Using KEDA" and "Getting Started") as step-by-step
  procedures. Title each procedure using "-ing" verbs; for example
  "Integrating", "Using", "Migrating".
- Put purely reference information in the Reference section. Link to this
  information where relevant from the procedures in the "Using KEDA" and
  "Getting Started" sections.
- Separate and/or label information, especially tasks, by which user role it
  pertains to (again, if more than one).
- Include a clear starting point and ramp-up path for new users.

Here is a proposed outline for the tech doc Table of Contents:

- [KEDA Concepts](https://keda.sh/docs/2.13/concepts/)
  - What is KEDA?
  - How KEDA works
  - KEDA Architecture
  - KEDA Custom Resources (CRDs)
  - [Scaling Deployments, StatefulSets &amp; Custom Resources](https://keda.sh/docs/2.13/concepts/scaling-deployments/)
    - Overview
    - Scaling Deployments and Stateful Sets
    - Scaling Custom Resources
    - [Scaling Jobs](https://keda.sh/docs/2.13/concepts/scaling-jobs/)
    - [Authentication](https://keda.sh/docs/2.13/concepts/authentication/)
    - [External Scalers](https://keda.sh/docs/2.13/concepts/external-scalers/)
    - [Admission Webhooks](https://keda.sh/docs/2.13/concepts/admission-webhooks/)
- [Getting Started (New users start here!)](https://keda.sh/docs/2.13/) (rename
  current "KEDA Documentation" heading)
  - [Deploying KEDA](https://keda.sh/docs/2.13/deploy/)
  - Prerequisites (https://keda.sh/docs/2.13/operate/cluster/#requirements)
  - [Deploying with Helm](#helm)
    - [Installing](#install)
    - [Uninstalling](#uninstall)
  - [Deploying with Operator Hub](#operatorhub)
    - [Installing](#install-1)
    - [Uninstalling](#uninstall-1)
  - [Deploying using the deployment YAML files](#yaml)
    - [Installing](#install-2)
    - [Uninstalling](#uninstall-2)
  - [Deploying KEDA on MicroK8s](#microk8s)
    - [Installing](#install-3)
    - [Uninstalling](#uninstall-3)
  - Hello, KEDA (write a procedure for a simplest-possible use case for users to
    get started on - something like
    https://github.com/kedacore/sample-hello-world-azure-functions)
- [Using KEDA or Operator Guide](https://keda.sh/docs/2.13/operate/) (rename
  current "Operate")
  - How to set up a scaler (a more detailed procedure than the example used in
    Getting Started)
  - Usage Scenarios
    - [Scaling with RabbitMQ and Go](https://github.com/kedacore/sample-go-rabbitmq)
    - [Scaling with Azure Functions and Kafka on Openshift 4](https://github.com/kedacore/sample-azure-functions-on-ocp4)
    - ... and so on.
  - [Admission Webhooks](https://keda.sh/docs/2.13/operate/admission-webhooks/)
  - Prevention Rules
    (https://keda.sh/docs/2.13/concepts/admission-webhooks/#prevention-rules)
  - Validation Enforcement
  - [Cluster](https://keda.sh/docs/2.13/operate/cluster/) - Except sections that
    are purely reference info, for example:
  - https://keda.sh/docs/2.13/operate/cluster/#kubernetes-compatibility
  - https://keda.sh/docs/2.13/operate/cluster/#cluster-capacity
  - https://keda.sh/docs/2.13/operate/cluster/#firewall
  - [Integrating with OpenTelemetry Collector (Experimental)](https://keda.sh/docs/2.13/operate/opentelemetry/)
  - [Integrating with Prometheus](https://keda.sh/docs/2.13/operate/prometheus/)
  - [Using the KEDA Metrics Server](https://keda.sh/docs/2.13/operate/metrics-server/)
    - [Querying Metrics](https://keda.sh/docs/2.13/operate/metrics-server/#querying-metrics-exposed-by-keda-metrics-server)
    - [Getting Metric Names](https://keda.sh/docs/2.13/operate/metrics-server/#how-to-get-metric-names-from-scaledobject)
  - [Security](https://keda.sh/docs/2.13/operate/security/)
  - [Migrating to a new release](https://keda.sh/docs/2.13/migration/) (current
    "Migration Guide")
  - Caching Metrics
    (https://keda.sh/docs/2.13/concepts/scaling-deployments/#caching-metrics)
  - Pausing Autoscaling of deployments
    (https://keda.sh/docs/2.13/concepts/scaling-deployments/#pause-autoscaling)
  - Pausing Autoscaling of jobs
    (https://keda.sh/docs/2.13/concepts/scaling-jobs/#pause-autoscaling)
  - [Troubleshooting](https://keda.sh/docs/2.13/concepts/troubleshooting/,
    /docs/2.13/troubleshooting/)
- Reference
  - [Authentication Providers](https://keda.sh/docs/2.13/authentication-providers/)
    - [AWS (IRSA) Pod Identity Webhook](https://keda.sh/docs/2.13/authentication-providers/aws/)
    - ...
    - [Secret](https://keda.sh/docs/2.13/authentication-providers/secret/)
  - Scaled Object specification (from "Concepts";
    https://keda.sh/docs/2.13/concepts/scaling-deployments/#scaledobject-spec)
  - ScaledJob specification
    (https://keda.sh/docs/2.13/concepts/scaling-jobs/#scaledjob-spec)
  - [Events](https://keda.sh/docs/2.13/operate/events/)
  - [Firewall requirements](https://keda.sh/docs/2.13/operate/cluster/#firewall)
  - ...
  - [FAQ](https://keda.sh/docs/2.13/reference/faq/)
  - Glossary
- [Scalers](https://keda.sh/docs/2.13/scalers/)
  - [ActiveMQ](https://keda.sh/docs/2.13/scalers/activemq/)
  - ...
  - [Solr](https://keda.sh/docs/2.13/scalers/solr/)

Among other things, the reorganization includes these changes:

- Rename "The KEDA Documentation" to "Getting Started".
- Create a "Reference" topic at the end of the ToC.
- Move the FAQ to the Reference section.
- Add a glossary to the Reference section.
- Rename "Operate" to "Operator Guide".
- Move "Troubleshooting" to the end of the User Guide.
- Separate reference and task information that appears on the same page and move
  each to the appropriate section.

# Write a Glossary

Create a glossary of terms specific to KEDA. Add to the Reference section.

# Add "How to set up a scaler" to the Operator guide

Setting up a scaler seems to be largely a matter of installing the scaler and
providing parameters in a configuration file. While the configurations are
provided for all the various scalers, there doesn't seem to be a description of
the procedure for doing the basic setup. This should go at the top of the
Operator guide. Users should be able to follow the procedure for any (or at
least most) scalers.

Any scaler that requires special instructions other than the configuration file
should have its own procedure page, listing the extra steps required.

# Write a New User workflow

Write a task-based, step-by-step workflow for new users. Assume the new user has
no experience with KEDA and is fairly new to Kubernetes.

The current documentation assumes that users know how to deploy and use
Kubernetes Custom Resources, and that using KEDA is a matter of knowing the
right configuration parameters and deploying the right resources. This might be
true for veteran users, but new users want explicit, foolproof instructions. The
following outline, extracted from the proposed outline in
[Reorganize the Table of Contents](#reorganize-the-table-of-contents), has been
annotated to illustrate this point:

- [Getting Started (New users start here!)](https://keda.sh/docs/2.13/) (rename
  current "KEDA Documentation" heading) _Make the new user entry point obvious_
  - [Deploying KEDA](https://keda.sh/docs/2.13/deploy/) _This is analogous to
    "Install" for application software or a plugin. It's the starting point for
    a new user._
    - [Prerequisites](https://keda.sh/docs/2.13/operate/cluster/#requirements)
      _Make sure the new user has their tools gathered up before they start.
      This reduces frustration. Next, what is the advantage of one deployment
      method over another? If the choice is not completely arbitrary, explain
      the differences here to help the new user decide. Also, if prerequisites
      depend on the deployment type, you can optionally put a Prerequisites
      section in each deployment procedure rather than here._
    - [Deploying with Helm](#helm)
      - [Installing](#install)
      - [Uninstalling](#uninstall) \*
    - [Deploying with Operator Hub](#operatorhub)
      - [Installing](#install-1)
      - [Uninstalling](#uninstall-1)
    - [Deploying using the deployment YAML files](#yaml)
      - [Installing](#install-2)
      - [Uninstalling](#uninstall-2)
    - [Deploying KEDA on MicroK8s](#microk8s)
      - [Installing](#install-3)
      - [Uninstalling](#uninstall-3)
  - Hello, KEDA (write a procedure for a simplest-possible use case for users to
    get started on - something like
    https://github.com/kedacore/sample-hello-world-azure-functions) _analogous
    to a "Hello World" exercise in programming language or API guides_

# Update the doc content creation instructions

In the keda-docs
[README](https://github.com/kedacore/keda-docs/blob/main/README.md):

- Move the "Become a listed KEDA user!" and "Become a listed KEDA commercial
  offering!" sections into their own files, or move them to the bottom of the
  README, so they're not at the top of the keda-docs README.
- Combine "Adding scaler documentation" and "Writing documentation for a scaler"
  so that they're not separated by "Writing documentation for a new
  authentication provider".

Document in the repo (keda-docs, keda, or both) who the website/documentation
maintainers are.

# Remove non-inclusive language

Remove non-inclusive language throughout the documentation as recommended by the
[Inclusive Naming Initiative](https://inclusivenaming.org/).

# Make user roles explicit

KEDA seems to have only one explicit user role (or _persona_), namely, an
Operator using KEDA to scale resources on a Kubernetes installation. Regardless,
this user role should be explicitly distinguished from the project Contributor
user role. Use cases are different between the two roles. One strategy for
separating the documentation is to confine the Contributor docs to the GitHub
repo.

The definition of the Operator role could be as minimal as a "who should use
this documentation" paragraph in the product introduction.

# Clarify documentation maintainers

Create an `OWNERS.md` file to document (on the repo) the current custodian(s) of
the following accounts: analytics (GA4), site-search (Algolia).

Explicitly list and solicit maintainers and contributors for documentation,
either in the new OWNERS file or the governance MAINTAINERS file.

<!--- References --->

[keda-analysis]: ./keda-analysis.md
[rfc-keywords]: https://www.rfc-editor.org/rfc/rfc2119
