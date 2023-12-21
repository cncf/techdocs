# Backstage Glossary

## API

In the Backstage [Catalog](#catalog), an API is an [entity](#entity) representing a boundary between two [compnents](#component).

https://backstage.io/docs/features/software-catalog/system-model

## Administrator

Someone responsible for installing and maintaining a Backstage [app](#app) for an organization. A [user role](#user-role).

## App

An installed instance of Backstage. An app can be local, intended for a single development group or individual developer, or organizational, for use by an entire enterprise.

## Backstage

A platform for creating and deploying [developer portals](#developer-portal), originally created at Spotify.

Backstage is an incubation-stage open source project of the [Cloud Native Computing Foundation](#cloud-native-computing-foundation).

## Catalog

An organization's portfolio of software products managed in Backstage.

## Cloud Native Computing

A set of technologies that "empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach." ([CNCF Cloud Native Definition v1.0](https://github.com/cncf/toc/blob/main/DEFINITION.md)).

## Cloud Native Computing Foundation

A foundation dedicated to the promotion and advancement of [Cloud Native Computing](#Cloud-Native-Computing). The mission of the Cloud Native Computing Foundation (CNCF) is "to make cloud native computing ubiquitous" ([CNCF Charter](https://github.com/cncf/foundation/blob/main/charter.md)).

CNCF is part of the [Linux Foundation](https://www.linuxfoundation.org/).

## CNCF

Cloud Native Computing Foundation.

## Component

A software product that is managed in the Backstage [Software Catalog](#software-catalog). A component can be a service, website, library, data pipeline, or any other piece of software managed as a single project.

https://backstage.io/docs/features/software-catalog/system-model

## Contributor

A volunteer who helps to improve an OSS product such as Backstage. This volunteer effort includes coding, testing, technical writing, user support, and other work. A [user role](#user-role).

## Developer

Someone who writes code and develops software. 

A [user role](#user-role) defined as someone who uses a Backstage [app](#app). Might or might not actually be a software developer.

## Developer Portal

A centralized system comprising a user interface and database used to facilitate and document all the software projects within an organization. Backstage is both a developer portal and (by virtue of being based on plugins) a platform for creating developer portals.

## Domain

In the Backstage Catalog, a domain is an area that relates systems or entities to a business unit. 

https://backstage.io/docs/features/software-catalog/system-model

## Entity

What is cataloged in the Backstage Software Catalog. An entity is identified by [kind](#Kind), [namespace](#Namespace), and name.

## Evaluator

Someone who assesses whether Backstage is a suitable solution for their organization. The only [user role](#user-role) with a pre-deployment [use case](#use-case).

## Integrator

Someone who develops one or more plugins that enable Backstage to interoperate with another software system. A [user role](#user-role).

## Kind

Classification of an [entity](#Entity) in the Backstage Software Catalog, for example *service*, *database*, and *team*.

## Kubernetes Plugin

A plugin enabling configuration of Backstage on a Kubernetes cluster. Kubernetes plugin has been promoted to a Backstage core feature.

## Mono-Repo

A single repository for a collection of related software projects, such as all projects belonging to an organization.

## Namespace

In the Backstage Software Catalog, an optional attribute that can be used to organize [entities](#entity).

## Objective

A high level goal of a [user role](#User-Role) interacting with Backstage. Some goals of the *administrator* user role, for example, are to maintain an instance ("app") of Backstage; to add and update functionality via plugins; and to troubleshoot issues.

## OSS

Open source software.

## Persona

Alternative term for a [User Role](#user-role).

## Plugin

A module in Backstage that adds a feature. All functionality in Backstage, even the core features, are implemented as plugins.

## Procedure

A set of actions that accomplish a goal, usually as part of a [use case](#Use-Case). A procedure can be high-level, containing other procedures, or can be as simple as a single [task](#Task).

## Resource

In the Backstage Catalog, an [entity](#entity) that represents a piece of physical or virtual infrastructure, for example a database, required by a component.

https://backstage.io/docs/features/software-catalog/system-model

## Role

See [User Role](#User-Role).

## Search

A Backstage plugin that provides a framework for searching a Backstage [app](#app), including the [Software Catalog](#Software-Catalog) and [TechDocs](#TechDocs). One of the core features of Backstage.

## Software Catalog

A centralized system that keeps track of ownership and metadata for any number and type of software [components](#component). A core feature of Backstage.

## Software Templates

A tool in Backstage with which to create [components](#component) in Backstage. A core feature of Backstage.

A "skeleton" software project created and managed in the Backstage Software Templates tool.

## System

In the Backspace Catalog, a system is a collection of [entities](#entity) that cooperate to perform a function.

https://backstage.io/docs/features/software-catalog/system-model

## Task

A low-level step-by-step [Procedure](#Procedure).

## TechDocs

A documentation solution that manages and generates a technical documentation from Markdown files stored with software component code. A core feature of Backstage.

## Use Case

A purpose for which a [user role](#User-Role) interacts with Backstage. Related to [Objective](#objective): An objective is *what* the user wants to do; a use case is *how* the user does it.

## User Role

A class of Backspace user for purposes of analyzing [use cases](#use-case). One of: evaluator; administrator; developer; integrator; and contributor.
