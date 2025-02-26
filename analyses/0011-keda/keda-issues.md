---
title: KEDA Umbrella Issue
cSpell:ignore: externalscaler findability
---

<!-- markdownlint-disable line-length no-duplicate-heading single-title no-emphasis-as-heading -->

# Overview

This document outlines the recommended changes to the KEDA documentation. The
following issues are added to the
[project repo](https://github.com/kedacore/keda-docs).

# Issue: Reorganize the Table of Contents

Reorganize the Table of Contents to:

- Better welcome and orient new users
- Separate user roles (personas), if there are more than one
- Improve findability and access to tasks and procedures
- Separate conceptual, task, and reference information

Here is a proposed high-level outline for the tech doc Table of Contents. Work
on individual sections is broken out into sub-issues.

- [KEDA Concepts](https://keda.sh/docs/2.13/concepts/). See
  [Reorganize Concepts](#issue-reorganize-concepts).
- [Getting Started (New users start here!)](https://keda.sh/docs/2.13/) (rename
  current "KEDA Documentation" heading). See
  [Write a "Getting Started" Guide](#issue-write-a-getting-started-guide).
- [Using KEDA or Operator Guide](https://keda.sh/docs/2.13/operate/) (rename
  current "Operate"). See
  [Update the Operator Guide](#issue-update-the-operator-guide).
- Reference. See [Create a Reference](#issue-create-a-reference-topic).
- [Scalers](https://keda.sh/docs/2.13/scalers/).

## Issue: Reorganize Concepts

Remove everything that's not a conceptual overview.

Here is a proposed outline. Links are to existing pages that can be used as-is
or provide a starting point.

- [KEDA Concepts](https://keda.sh/docs/2.13/concepts/)
  - What is KEDA?
  - How KEDA works
  - KEDA Architecture
  - KEDA Custom Resources (CRDs)
  - [Scaling Deployments, StatefulSets and Custom Resources](https://keda.sh/docs/2.13/concepts/scaling-deployments/)
    - Overview
    - Scaling Deployments and Stateful Sets
    - Scaling Custom Resources
    - [Scaling Jobs](https://keda.sh/docs/2.13/concepts/scaling-jobs/)
    - [Authentication](https://keda.sh/docs/2.13/concepts/authentication/)
    - [External Scalers](https://keda.sh/docs/2.13/concepts/external-scalers/)
    - [Admission Webhooks](https://keda.sh/docs/2.13/concepts/admission-webhooks/)

## Issue: Write a "Getting Started" guide

Write a task-based, step-by-step workflow for new users. Start with the current
"KEDA Documentation" section.

Assume the new user has no experience with KEDA and is fairly new to Kubernetes.
The current documentation assumes that users know how to deploy and use
Kubernetes Custom Resources, and that using KEDA is a matter of knowing the
right configuration parameters and deploying the right resources. This might be
true for veteran users, but new users want explicit, foolproof instructions.

The following outline has been annotated to illustrate this point. Links are to
existing pages that can be used as-is or provide a starting point. Pages with
multiple procedures (for example, the "Deploying KEDA" page) should be split
into multiple pages, one for each procedure.

- [Getting Started (New users start here!)](https://keda.sh/docs/2.13/) (rename
  current "KEDA Documentation" heading) _Make the new user entry point obvious._
  - [Deploying KEDA](https://keda.sh/docs/2.13/deploy/) _This is analogous to
    "Install" for application software or a plugin. It's the starting point for
    a new user._
    - Overview _Briefly explain the differences between installation methods.
      What is the advantage of one deployment method over another? If the choice
      is not completely arbitrary, explain the differences here to help the new
      user decide._
    - [Prerequisites](https://keda.sh/docs/2.13/operate/cluster/#requirements)
      _Make sure the new user has their tools gathered up before they start.
      This reduces frustration. Also, if prerequisites depend on the deployment
      type, you can optionally put a Prerequisites section in each deployment
      procedure rather than here._
    - [Deploying with Helm](?no-link-check#helm)
      - [Installing](?no-link-check#install)
      - [Uninstalling](?no-link-check#uninstall)
    - [Deploying with Operator Hub](?no-link-check#operatorhub)
      - [Installing](?no-link-check#install-1)
      - [Uninstalling](?no-link-check#uninstall-1)
    - [Deploying using the deployment YAML files](?no-link-check#yaml)
      - [Installing](?no-link-check#install-2)
      - [Uninstalling](?no-link-check#uninstall-2)
    - [Deploying KEDA on MicroK8s](?no-link-check#microk8s)
      - [Installing](?no-link-check#install-3)
      - [Uninstalling](?no-link-check#uninstall-3)
  - Hello, KEDA (write a procedure for a simplest-possible use case for users to
    get started on - something like
    <https://github.com/kedacore/sample-hello-world-azure-functions>) _analogous
    to a "Hello World" exercise in programming language or API guides_

## Issue: Update the Operator Guide

Some guidelines:

- Can be named "Using KEDA" or "Operator Guide".
- Base the guide on the existing "Operator" section.
- Move "Troubleshooting" to the end of the Operator Guide.
- Relocate sections that are purely reference information, including these
  sections in [Cluster](https://keda.sh/docs/2.13/operate/cluster/):
  - <https://keda.sh/docs/2.13/operate/cluster/#kubernetes-compatibility>
  - <https://keda.sh/docs/2.13/operate/cluster/#cluster-capacity>
  - <https://keda.sh/docs/2.13/operate/cluster/#firewall>
- Break up long pages containing several topics. Aim for one major topic per
  page. For example, all HTTP-related headings on the
  [Cluster](https://keda.sh/docs/2.13/operate/cluster/) page could go on one
  page named "Using HTTP".

Here is a proposed outline. Links are to existing pages that can be used as-is
or provide a starting point.

- [Using KEDA or Operator Guide](https://keda.sh/docs/2.13/operate/) (rename
  current "Operate")
  - Setting up a scaler (write or adapt a more detailed procedure than the
    example used in Getting Started - see
    ["Write 'Setting Up a Scaler'"](#write-setting-up-a-scaler))
  - Usage Scenarios
    - [Scaling with RabbitMQ and Go](https://github.com/kedacore/sample-go-rabbitmq)
    - [Scaling with Azure Functions and Kafka on OpenShift 4](https://github.com/kedacore/sample-azure-functions-on-ocp4)
    - ... and so on.
  - [Admission Webhooks](https://keda.sh/docs/2.13/operate/admission-webhooks/)
  - Prevention Rules
    (<https://keda.sh/docs/2.13/concepts/admission-webhooks/#prevention-rules>)
  - Validation Enforcement
  - [Cluster](https://keda.sh/docs/2.13/operate/cluster/) - (Relocate sections
    that are purely reference info)
    - Using HTTP
      [Setting Timeouts](https://keda.sh/docs/2.13/operate/cluster/#http-timeouts)
      [Disabling Keep-alive](https://keda.sh/docs/2.13/operate/cluster/#http-connection-disable-keep-alive)
      [Using HTTP Proxies](https://keda.sh/docs/2.13/operate/cluster/#http-proxies)
      [Configuring Minimum TLS Version]
  - [Integrating with OpenTelemetry Collector (Experimental)](https://keda.sh/docs/2.13/integrations/opentelemetry/)
  - [Integrating with Prometheus](https://keda.sh/docs/2.13/integrations/prometheus/)
  - [Using the KEDA Metrics Server](https://keda.sh/docs/2.13/operate/metrics-server/)
    - [Querying Metrics](https://keda.sh/docs/2.13/operate/metrics-server/#querying-metrics-exposed-by-keda-metrics-server)
    - [Getting Metric Names](https://keda.sh/docs/2.13/operate/metrics-server/#how-to-get-metric-names-from-scaledobject)
  - [Security](https://keda.sh/docs/2.13/operate/security/)
  - [Migrating to a new release](https://keda.sh/docs/2.13/migration/) (current
    "Migration Guide")
  - Caching Metrics
    (<https://keda.sh/docs/2.13/concepts/scaling-deployments/#caching-metrics>)
  - Pausing Autoscaling of deployments
    (<https://keda.sh/docs/2.13/concepts/scaling-deployments/#pause-autoscaling>)
  - Pausing Autoscaling of jobs
    (<https://keda.sh/docs/2.13/concepts/scaling-jobs/#pause-autoscaling>)
  - [Troubleshooting](https://keda.sh/docs/2.13/concepts/troubleshooting/)
    `/docs/2.13/troubleshooting/`

## Issue: Create a "Reference" topic

- The Reference section should be at or near the end of the ToC
- Include the following information in the Reference section:
  - Move the FAQ to the Reference section.
  - Add a glossary to the Reference section.

Here is a proposed outline. Links are to existing pages that can be used as-is
or provide a starting point.

- Reference
  - [Authentication Providers](https://keda.sh/docs/2.13/authentication-providers/)
    - [AWS (IRSA) Pod Identity Webhook](https://keda.sh/docs/2.13/authentication-providers/aws/)
    - ...
    - [Secret](https://keda.sh/docs/2.13/authentication-providers/secret/)
  - Scaled Object specification (from "Concepts";
    <https://keda.sh/docs/2.13/concepts/scaling-deployments/#scaledobject-spec>)
  - ScaledJob specification
    (<https://keda.sh/docs/2.13/concepts/scaling-jobs/#scaledjob-spec>)
  - [Events](https://keda.sh/docs/2.13/operate/events/)
  - [Firewall requirements](https://keda.sh/docs/2.13/operate/cluster/#firewall)
  - ...
  - [FAQ](https://keda.sh/docs/2.13/reference/faq/)
  - Glossary

# Separate reference and task information

A common practice that reduces documentation effectiveness is mixing conceptual
and task information. _Conceptual_ discussion can be thought of as _How it
works_; a _Task_ is _How you use it_. Tasks should be described step-by-step as
explicitly as possible.

Reference information is also embedded sometimes, but in general is easy to
extract.

In pages where conceptual, reference, and/or task info appears on the same page,
separate and move each to the appropriate section.

Here is a list of some of the KEDA pages containing more than one type of
information. Some of these pages might appear in other issues suggesting that
they be revised or relocated. If this creates contradictory recommendations,
some judgement might be required to rearrange things.

| Page Title                                             | URL                                                       | Notes                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deploying KEDA                                         | <https://keda.sh/docs/2.13/deploy/>                       | Page is all install and uninstall tasks, but put each install procedure on its own page. Make this page an intro and index.                                                                                                                                                     |
| Scaling Deployments, StatefulSets and Custom Resources | <https://keda.sh/docs/2.13/concepts/scaling-deployments/> | The "ScaledObject spec" is reference information. "Transfer ownership of an existing HPA" is a task.                                                                                                                                                                            |
| Scaling Jobs                                           | <https://keda.sh/docs/2.13/concepts/scaling-jobs/>        | "ScaledJob spec" is reference information.                                                                                                                                                                                                                                      |
| Authentication                                         | <https://keda.sh/docs/2.13/concepts/authentication/>      | Deliberately discuss the three patterns listed at the top of the page. This entire page might be better written as a task-based how-to guide.                                                                                                                                   |
| External Scalers                                       | <https://keda.sh/docs/2.13/concepts/external-scalers/>    | "Implementing KEDA external scaler GRPC interface" is a series of tasks. The steps after the first 2 are choices -- Describe the task of downloading `externalscaler.proto` and preparing the project, then offer steps 3 - 6 as sub-tasks that can be performed independently. |
| Troubleshooting                                        | <https://keda.sh/docs/2.13/concepts/troubleshooting/>     | Remove this troubleshooting information and combine it with the troubleshooting section under "The KEDA Documentation".                                                                                                                                                         |
| Cluster                                                | <https://keda.sh/docs/2.13/operate/cluster/>              | See the "Update the Operator Guide" issue                                                                                                                                                                                                                                       |
| Events                                                 | <https://keda.sh/docs/2.13/operate/events/>               | This is reference information.                                                                                                                                                                                                                                                  |
| Integrate with Prometheus                              | <https://keda.sh/docs/2.13/integrations/prometheus/>      | Split this into a task ("Integrating with Prometheus" and a reference "Metrics Exported to Prometheus".                                                                                                                                                                         |

# Write a Glossary

Create a glossary of terms specific to KEDA. It wouldn't hurt to include some
key Kubernetes terms as well, especially acronyms. Add to the Reference section.

Here is a partial list of terms to include:

- Admission Webhook
- Agent
- Cluster
- CRD
- Event
- Event Source
- Grafana
- GRPC
- HPA
- KEDA
- Metrics
- OpenTelemetry
- Operator
- Prometheus
- Scaled Object
- Scaled Job
- Scaler
- Stateful Set
- TLS
- Webhook

For an example from another CNCF project, see the
[glossary in the Backstage documentation](https://backstage.io/docs/references/glossary/).

# Write "Setting Up a Scaler"

Setting up a scaler seems to be largely a matter of installing the scaler and
providing parameters in a configuration file. While the configurations are
provided for all the various scalers, there doesn't seem to be a description of
the procedure for doing the basic setup. This should go at the top of the
Operator guide.

Users should be able to follow the procedure for any (or at least most) scalers.
Any scaler that requires special instructions other than the configuration file
should have its own procedure page, listing the extra steps required.

# Make user roles explicit

KEDA seems to have only one explicit user role (or _persona_), namely, an
Operator using KEDA to scale resources on a Kubernetes installation. Regardless,
this user role should be explicitly distinguished from the project Contributor
user role. Use cases are different between the two roles. One strategy for
separating the documentation is to confine the Contributor docs to the GitHub
repo.

The definition of the Operator role could be as minimal as a "who should use
this documentation" paragraph in the product introduction.

# Update the doc content creation instructions

Make the following changes to improve the effectiveness of the KEDA
documentation contributor instructions.

In the keda-docs
[README](https://github.com/kedacore/keda-docs/blob/main/README.md):

- Move the "Become a listed KEDA user!" and "Become a listed KEDA commercial
  offering!" sections into their own files, or move them to the bottom of the
  README, so they're not at the top of the keda-docs README.
- Combine "Adding scaler documentation" and "Writing documentation for a scaler"
  so that they're not separated by "Writing documentation for a new
  authentication provider".

# Clarify the KEDA website and documentation maintainers

Create an `OWNERS.md` file to document (on the kedacore/keda-docs repo) the
current custodian(s) of the following accounts: analytics (GA4), site-search
(Algolia).

Explicitly document in the repo (keda-docs, keda, or both) who the
website/documentation maintainers are. Solicit maintainers and contributors for
documentation, either in the new OWNERS file or the governance MAINTAINERS file.

# Remove non-inclusive language

Remove non-inclusive language throughout the documentation as recommended by the
[Inclusive Naming Initiative](https://inclusivenaming.org/). Some examples of
non-inclusive language in KEDA:

- In
  [concepts/scaling-deployments.md](https://keda.sh/docs/2.13/concepts/scaling-deployments/):
  "This value can be used to easily distinguish this specific trigger and its
  metrics ..."
- The use of "master" (as in "sentinelMaster") in
  [scalers/redis-sentinel-lists.md](https://keda.sh/docs/2.13/scalers/redis-sentinel-lists/).
  This might be impossible to change without changing the Redis scaler as well.)
- In [deploy.md](https://keda.sh/docs/2.13/deploy/): "Deploying KEDA with Helm
  is very simple".
