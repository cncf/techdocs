# CNCF sandbox project documentation primer

This document is a quick primer for CNCF project maintainers and contributors who need to document their projects but don't know where to start. It provides a framework for thinking about user documentation that will enable the project contributors to write effective documentation from the very beginning and to get the most out of documentation efforts as the project matures.

## What is "good" documentation?

Documentation quality is ultimately measured by how *effective* it is.

The purpose of documentation is to help the user of a product achieve their objectives. The scope of these objectives ranges from individual tasks (use a command correctly, connect to a database) to large-scale goals (write a software product or module; configure a server farm). Objectives also vary by [user role](https://docs.google.com/document/d/1jEM4P\_VT\_jvkGbvKpZXz5DYvKW4AiIWk7Vw1X-NGpWs/edit\#product-users) (new developer; software architect; IT administrator).

Documentation effectiveness, therefore, is defined by *how well it enables a user to succeed in achieving their objectives*, within every range of scope and for all users.

### An information model for user documentation

This discussion uses the following [model](https://www.lios.ca/en/blogue/concept-task-reference/) to categorize types of technical documentation.

A documentation topic is one of these three types, depending on its purpose:

* *Conceptual* information describes one or more aspects of the project or its products: its structure, purpose, motivation, architecture – almost anything. Examples include:  
  * architectural overviews  
  * product histories  
  * technical white papers  
  * design discussions  
* *Task-based* information describes how to do something. Examples include:  
  * procedure documentation, from individual task instructions to full instruction manuals  
  * code "recipes" for creating particular software components  
  * specialized instructions such as troubleshooting guides  
  * learning materials such as tutorials  
* *Reference* information is the "lookup" material specific to a product. Examples include:  
  * API specifications  
  * command references  
  * knowledge bases  
  * user interface references  
  * error code lookups  
  * glossaries

### Descriptive vs. instructional documentation

No type of information is "better" than any other. All three types are necessary to good technical documentation and should be present in the docs for any software product.

That said, however, documentation writers involved with product development tend to write *descriptive* documentation: they emphasize conceptual and reference information at the expense of task-based information.

It's important, especially when developing a product, to describe what the product is designed to do. But in general, this does not make good user documentation. Descriptive documentation forces the user to search the documentation for a combination of features that will accomplish their goal, rather than being able to pursue that goal directly.

Good software documentation is primarily *instructional*. The core of the documentation set aims to help users efficiently accomplish their goals. A traditional documentation set might contain a *getting started guide* to help the user set up their workspace; *tutorials* to teach skills and techniques; a *user guide* (or *developer guide*) to explain and illustrate tools and workflows; and a *reference guide* (often built into an IDE) to look up APIs, commands, or other toolkit components.

Of course it's important that the documentation be feature-complete – that every capability of the product be documented. But it's equally important that every task that a user would reasonably want to perform be documented. A good cookbook doesn't just list ingredients, it tells you how to use them.

## A process for developing user documentation

So if starting with design documentation and expanding on the product's functionality isn't the best way to write user documentation, what is?

Answer: To develop effective documentation it is necessary to describe the product's users and their objectives. This might seem like unnecessary extra work, but it will pay off very quickly in documentation quality.

The rest of this document is a very brief description of a system for writing effective documentation for all of a product's users.

### Product users

First, define your product's *user roles*. A user role (also called a *persona*), is a type of user with a particular set of tasks they need to perform.

As an example, consider a hypothetical product that consists of a REST API frontend to a server-based relational database. The user roles are:

* *Developer*: Uses the REST API to list data records and perform CRUD operations on the database.  
* *Administrator*: Sets up and maintains the product on one or more servers, including a production server.

For any OSS project, there are also these roles:

* *Contributor*: A member of the project community who contributes code or other labor to the project itself.  
* *Evaluator*: Someone who is considering using the product and needs to find out more about it.	

One person can have multiple roles. For example, a contributor is often also a user (developer or admin, in this case).

### Write goals

Next, determine the goals of each user role that are served by the product. For the developer in the database example, a goal is probably to integrate the database into an end-user application.

For the admin, a goal is to set up, say, a production and a test server and to populate them with identical data.

### Develop tasks

Analyze larger goals down to smaller ones. Ultimately, you want to get to the most basic unit of task-based documentation: discrete step-by-step tasks.

#### Write for new users

Pay special attention to the goals of new users.

For example, new-user goals for developers always include:

* Installing dependencies and software  
* Configuring a development environment  
* Running a "hello world" example or a similar simple task to verify the product

When writing for new users (or indeed, any user who isn't part of the contributor community), try not to assume that the user knows anything about the product. This is especially true when writing task documentation.

In the database example, say that configuring the server consists of copying the config file template to the config directory, setting permissions on the file, and editing the file to include the server IPs and some other parameters. Time and again we've seen configuration documentation that consists only of which config parameters to set. An effective configuration task, though, would walk through these steps:

1. Copy the template from folder X to folder Y.  
1. Name the file Z.  
1. Set permissions on the file to ABC.  
1. Edit the file to set parameters Q, R, S and T. (And include a link to the config reference\!)

Don't worry about giving too much information. Novice users need it, and expert users will ignore it.

### Support the task documentation

Finally, support the task documentation with conceptual and reference documentation. The developer, for example, will need a complete reference for the REST API. The admin will need a complete description of every server configuration option. Both will need a reference for the CLI, if there is one.

Conceptual information should always include a technical overview. This includes the product's purpose, architecture, and design rationales. This helps prospective users decide whether it's a solution for their problem, and helps advanced users reason about how to use or even extend its advanced features.

## Nuts and bolts: deliverables and infrastructure

### Required documentation

A minimal documentation set varies by product, but some documents are (almost) always required to make the product usable:

* A technical overview  
* A getting started guide  
* Reference manual(s)

### Where to put it

At the sandbox stage, making the documentation available in some form is more important than hosting it in any particular place. That said, CNCF TechDocs has a [number of resources](https://github.com/cncf/techdocs/tree/main/docs) for creating web-based documentation.

Even if you don't use the CNCF recommended tools, it's worth reading the recommendations to preview the sorts of issues you'll encounter as the documentation matures. These issues parallel those facing the code infrastructure, and include things like scaling, hosting, versioning, indexing, SEO, and finding contributing writers.

### What’s next

For a thorough preparation in working with technical documentation, the following resources are available:

[Open Source Documentation Essentials](https://training.linuxfoundation.org/training/open-source-technical-documentation-essentials-lfc111/)  
[Creating Effective Documentation for Developers](https://training.linuxfoundation.org/training/creating-effective-documentation-for-developers-lfc112/)  
(both are free courses offered by CNCF and the Linux Foundation).

[Docs for Developers](https://docsfordevelopers.com/) is a guide to writing user-oriented documentation for software engineers.

For advice and next steps with documentation for a CNCF sandbox project, contact the [CNCF TechDocs team](https://github.com/cncf/techdocs/blob/main/README.md).

