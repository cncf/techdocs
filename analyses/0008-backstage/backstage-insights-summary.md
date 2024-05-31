# Backstage Insights

This document briefly summarizes the research, branded "Backstage Insight," done
at Spotify in 2022 to identify ways to drive adoption of Backstage.

## Why Backstage Adoption is Hard

Backstage is a complex system that must be adopted universally throughout an
organization in order to reap its full benefits.

### Definition of "Adoption"

Adoption here means:

1. An organization-wide instance ("app") of Backstage must be installed, run,
   maintained, and actively updated with new capabilities via plugins;
2. All development groups in the organization must use Backstage to, at the
   least, catalog their projects. Additional benefits accrue if groups also:
   1. Manage documentation in Backstage;
   2. Use templates in Backstage to create new software artifacts; and
   3. Automate development using Backstage, including integrating Backstage with
      other development support systems.
3. Backstage must be recognized throughout the organization as the "source of
   truth" about all software development within the organizaiton.

### Barriers to Adoption

Backstage Insights identifies three types of barriers to adoption: technical,
cultural, and combination.

_Technical_ barriers are the effort required for groups to adopt Backstage for
software projects, including writing or adapting plugins for features unique to
a particular project or group.

Backstage is a very flexible product with vast potential to adapt to variations
in organizational infrastructure and workflows. The flipside is that Backstage
is complex, and almost always requires significant investment of talent and
resources to implement fully.

_Cultural_ barriers are institutional resistance to adopting Backstage due to:

- Unwillingness to devote resources to adopting and maintaining Backstage;
- Skepticism of the value of Backstage;
- General resistance to change, which is always present in an organization.

Cultural barriers are typically more difficult to overcome than technical ones.

_Technical and Cultural_ were described as barriers that exhibit a combination
of technical and cultural elements.

## The Backstage Adoption Model

Backstage Insights looked for commonalities in the adoption path of a number of
surveyed organizations. The following five-step model was found to be commonly,
if not universally, descriptive of the adoption path of the organizations
surveyed.

1. **Problem identification, definition, and alignment**: Identify the problem
   or problems that require a software solution like Backstage. Recruit the
   people necessary to pursue a solution.
2. **Finding the right solution**: The identified participants frame the problem
   and search for solutions. In some cases Backstage had already been identified
   as a likely or potential solution.
3. **Demo proof of concept**: Set up a limited demo to determine that: Backstage
   can solve the problem(s); Backstage fits with the organization's
   infrastructure; resources are available, with the right skill sets, to
   implement Backstage; Backstage provides value.
4. **Full proof of concept**: Build out functionality and get feedback from
   users. Gather more rigorous metrics regarding perceived value. This stage is
   characterized by some hard-to-reverse implementation decisions, so due
   diligence is advised.
5. **Driving full adoption**: This stage involves committing resources to full
   adoption. In some cases, expensive mistakes might need to be corrected,
   despite due diligence in step 4. Resources need to be devoted to shifting the
   culture to one that values and relies on Backstage.

### The Problem To Be Solved: A Note on Desired Outcomes

_Outcomes_ are organizational results of adopting Backstage. Desired outcomes
are ones that alleviate the problems identified in (1), above.

Backstage Insights surveyed both internal (Spotify) Backstage adopters and
external organizations to determine the outcomes adopters hoped to achieve. The
number one outcome for both internal and external users was to **maintain clear
ownership of software**.

For external adopters, other top outcomes were consistent with _improving the
maturity level of their development practices_, for example standarizing
software development practices and increasing collaboration. For internal
adopters, other top outcomes were goals that relied on already-mature
development practices, for example improving monitoring and tracking costs. The
authors hypothesized that this difference was a function of the maturity level
of the Backstage implementation at the surveyed organization: already high (for
Spotify, where Backstage has been used for years) or low and still developing
(for other organizations).

## Necessity of a Champion

The authors of Backstage Insights were clear that implementing Backstage in an
organization requires a _champion_. This champion is dedicated at least part
time to evangelizing, implementing, and driving adoption of Backstage throughout
the organization.

Champions varied in their job titles, skill sets, and "everyday" roles. However,
some characteristics were common to all Backstage champions:

- Champions were dedicated to changing the status quo to make the professional
  lives of developers better throughout the organization.
- Champions believed that Backstage was the right platform for positive change.
- Champions were typically leaders (managers or technical leads) before taking
  on the champion role.
- Champions used a wide variety of technical, leadership, and interpersonal
  skills to drive the adoption of Backstage.

### Champion Job Titles

This is a list of job titles held by Backstage champions in surveyed
organizations:

- DevEx Engineering Manager (2)
- Staff Engineer
- Software Architect
- QA Manager
- Technical PM
- IT Engineering Manager
- Engineering Manager
- Site Reliability Engineer
