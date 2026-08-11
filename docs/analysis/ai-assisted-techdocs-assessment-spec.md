---
title: AI-assisted TechDocs Assessment
---

# AI-assisted TechDocs Assessment

**What this is.** A working specification for an AI-assisted, human-supervised
CNCF TechDocs assessment workflow. It is requirements-first: it defines the
outcomes the system must produce and the boundaries it must never cross, then
lets tooling follow.

---

## 1. Background and problem

A CNCF TechDocs assessment evaluates a project's documentation against the
TechDocs [criteria] and produces a prioritized improvement plan. It is valuable
and in demand, but each assessment takes 6–8 weeks of a skilled technical
writer's time, and that expertise is scarce. Throughput is the constraint: more
projects want assessments than the expert pool can serve.

Two things make now the moment to change that:

- The method is sound; the throughput isn't. The existing methodology
  ([criteria], the [howto], and the analysis, implementation, and issues
  deliverables) is well-established. The problem to solve is speed and scale,
  not what a good assessment is.
- Maintainers now have agentic AI. GitHub has granted CNCF maintainers [Copilot
  Enterprise][copilot-blog]. That lets us put an AI agent on the mechanical and
  first-draft work, supervised by a human expert, to compress the cycle. We
  treat the roughly 2-week figure as a pilot hypothesis, not a fixed target
  (G-1).

Thesis: keep the methodology and the human judgment; use an AI agent to compress
the labor. AI drafts, humans decide, all in the open.

## 2. Goals and non-goals

### Goals

- G-1: Compress the cycle. Reduce the 6–8 week assessment toward roughly 2
  weeks, a pilot hypothesis to validate rather than a commitment (section 10).
- G-2: Hold quality. Output meets or exceeds the current human baseline
  (Flatcar, Knative, Helm), verified by the method in section 10, not asserted.
  AI drafts fail by being fluent, well-formatted, and generically wrong, a mode
  that survives a readability pass, so catching it is an explicit requirement.
- G-3: Human in the loop throughout. The agent proposes; a technical writer and
  project stakeholders dispose. Every phase is reviewed before it advances.
- G-4: Work in the open. The whole process happens on cncf/techdocs via issues
  and PRs, and the deliverables are public. Assessments can be candid about a
  project's documentation gaps; publishing in the open is deliberate and shapes
  how sign-off works (HC-2).
- G-5: Repeatable and project-agnostic. The same workflow serves any CNCF
  project with minimal per-project setup.
- G-6: Lower the request barrier. A structured intake lets a project (or the
  TechDocs team) request an assessment with all needed context up front.
- G-7: Produce the three standard deliverables. Assessment, implementation plan,
  and an issue backlog, matching the existing methodology.

### Non-goals (phase one)

- NG-1: No external GitHub writes. The system does not create or modify any
  file, PR, issue, comment, or setting outside cncf/techdocs. (Hard constraint;
  see HC-1 in section 3.)
- NG-2: No auto-filing of issues. The backlog is delivered as files in
  cncf/techdocs. Filing them as real issues in project repos is future work (a
  separate, opt-in script; see section 11), explicitly out of scope now. The
  per-file backlog format proposed in section 6 is chosen partly to make that
  future script straightforward.
- NG-3: Not a replacement for human judgment. No unattended, end-to-end
  autonomous assessments; no bypassing writer review or stakeholder sign-off.
- NG-4: Not a change to the criteria or evaluation method. We automate the
  existing assessment method; the criteria and how a project is evaluated are
  unchanged. Evolving the criteria (for example AI-readiness) is tracked
  separately (see PR #357). This spec does propose one deliberate, limited
  structural change to the methodology: the issue-backlog file layout (section
  6), framed as a proposal for discussion, not a silent change. Editorial
  changes to keep the methodology docs machine-consumable (P-2) are also
  allowed.
- NG-5: Not a public self-serve tool. Scope is CNCF projects assessed through
  the defined process, not arbitrary external users.

## 3. Principles and hard constraints

### Principles

- P-1: AI proposes, humans dispose. Every state change that matters is gated by
  a human.
- P-2: Methodology as the single source of truth. The methodology docs at
  [docs/analysis/][analysis-dir] (`criteria.md`, `howto.md`, and `templates/`)
  are canonical. The agent reads and applies them at run time; it does not
  reinvent them or copy them into a separate prompt corpus. A single source of
  truth means updating the methodology automatically updates the system's
  behavior, and no parallel copy can drift. This addresses the
  criteria-duplication concern raised in PR #357 review.
  - Reproducibility pin. For a given assessment run, the agent binds to a
    specific ref (commit or tag) of the methodology docs so the run is
    reproducible (P-4). "Auto-updates" means each new assessment picks up the
    latest canonical docs, not that an in-flight assessment shifts under review.
  - Consumability is a contract. Because the docs are the interface, an
    operational layer may add how-to-run guidance (output format, file naming,
    orchestration) but must reference the canonical content, never restate it.
    Any methodology edits for machine-consumability are editorial (formatting,
    structure), never changes to the criteria themselves (NG-4).
- P-3: Requirements before tools. Define the required outcomes and hard
  boundaries first; choose tools (agent surface, credentials, scripts, prompts)
  afterward to satisfy them, so tools can change without changing the spec. When
  a boundary needs a tool to enforce it, require the property (an enforced write
  boundary), not a named product.
- P-4: Reproducible and auditable. Every claim in a deliverable traces to a
  cited, committed source. Prompts, configuration, and any data-generating steps
  are versioned and re-runnable.

### Hard constraints (the "never" list)

- HC-1: No writes outside cncf/techdocs. Agents may read and do external
  research (web, public repos), but must never write to any GitHub resource
  outside cncf/techdocs: no files, PRs, issues, comments, reviews, labels,
  releases, or workflow runs. This is enforced architecturally, not by
  instruction: the agent runs with a credential scoped to cncf/techdocs only, so
  a write elsewhere is impossible, not merely disallowed. Full design in
  section 8.
- HC-2: Phase gating. Each phase (assessment, implementation, backlog) is
  reviewed by a technical writer, then goes to stakeholders before the next
  begins. Sign-off separates two things. A factual-accuracy check: stakeholders
  confirm they have read the deliverable and had the chance to correct factual
  errors, which is required to advance. Agreement with the conclusions: not
  required, and a project's disagreement is recorded in the deliverable rather
  than allowed to block or soften it. Merging phase N makes phase N+1 eligible;
  a technical writer still starts it (section 5). A reviewer/stakeholder dispute
  is arbitrated by the platform owner (section 4).
- HC-3: Deliverables are files in cncf/techdocs. Including the issue backlog
  (one file per proposed issue). Nothing is filed to an external repo.
- HC-4: No unattended autonomy. Any change to repository state lands through a
  human-reviewed PR. The agent never self-merges.
- HC-5: Provenance required. Quantitative claims (counts, link status,
  inventories) must be generated by a committed, re-runnable step and cite their
  source; no unverifiable figures in a deliverable.
- HC-6: Disclose AI involvement. The assessed project is told, up front in the
  intake and in a header on every deliverable, that the analysis was AI-drafted
  and human-reviewed. No project should discover this after the fact.
- HC-7: Findings are verified, not assumed. Qualitative findings are checked
  against the actual project sources, not accepted because they read plausibly.
  The verification method is in section 10.

---

## 4. Roles

Roles are defined by function. Each is filled by an actor (a person, group, or
tool), and one actor may fill more than one role.

- Requester. A stakeholder who initiates the assessment by filing the request
  (section 7); for example a maintainer, tech lead, or trusted community member.
  Filing does not start an assessment.
- Drafter. Produces the first-pass draft of each phase's deliverable as a draft
  PR, then refines it in conversation with the reviewer.
- Reviewer. Accepts a request to begin work, then reviews and refines each draft
  in conversation, verifies findings against source (HC-7), and marks it ready.
  Owns the draft's quality, but does not give its final sign-off; that is
  independent (see Approver).
- Stakeholders. The project party with a stake in its documentation and
  direction: maintainers, tech leads, trusted community members, and others.
  They set priorities, provide project-level context, and confirm factual
  accuracy at each phase gate. They do not hold a veto over the conclusions;
  disagreement is recorded, not used to block or soften a deliverable (HC-2).
- SMEs (subject-matter experts). Supply and verify technical ground truth for
  the areas under assessment: answering detailed questions and checking findings
  and recommendations for accuracy. Often maintainers or experienced
  contributors, but the role is knowledge, not authority; an SME need not have
  sign-off.
- Writers. The audience for the issue backlog: community members who take up the
  resulting issues and do the documentation work.
- Approver. Gives each phase its independent quality sign-off and merges the PR.
  A qualified technical writer who was neither the drafter nor a reviewer of
  that phase, so no one signs off on work they produced or refined, and the role
  spreads across the team instead of bottlenecking. Confirms the verification in
  section 10 was done.
- Platform owner. Owns the machine itself: the prompts, the operational layer,
  and the scoped credential (HC-1). Sets policy, handles aborts (section 5), and
  arbitrates a reviewer/stakeholder dispute (HC-2). A central role, kept out of
  the per-assessment critical path.

## 5. Lifecycle

Each phase runs the same six steps:

1. Request. Phase A is triggered by the intake issue (section 7); phases B and C
   become eligible once the previous phase is merged.
2. Accept. A technical writer triages and explicitly accepts the request, for
   every phase, not just A; eligibility alone does not start work (P-1).
3. Draft. The agent produces the deliverable as a draft PR.
4. Review. The reviewer refines the draft in conversation with the agent,
   verifies findings against source (HC-7), and marks it ready.
5. Stakeholder review. Stakeholders confirm factual accuracy (required to
   advance) and record any disagreement with the conclusions (not required;
   HC-2).
6. Merge. The approver signs off and merges the PR into cncf/techdocs, which
   makes the next phase eligible.

Failure path: if a draft is bad enough that fixing it would cost more than
starting over, the reviewer may discard it and restart or write by hand rather
than sink time into editing. Repeated failure is escalated to the platform
owner, who may abort the run. An assessment must never end up slower than doing
it by hand.

## 6. Phases and deliverables

- Phase A: Assessment (`analysis.md`). Detailed first.
- Phase B: Implementation plan (`implementation.md`).
- Phase C: Issue backlog. Each proposed issue is a separate file scoped to
  roughly 4 hours for someone experienced with the project and comfortable
  writing, plus an umbrella/index file that lists them. Effort estimates are the
  agent's first pass and are sanity-checked by the reviewer; agent estimates are
  not reliable on their own.

  Proposed methodology change. The current method delivers the backlog as one
  `_PROJECT_-issues.md` file (`howto.md`, `templates/issues-list.md`,
  `templates/issue.md`). This spec proposes splitting the individual issues into
  one file each while keeping a single umbrella/index document. Rationale: a
  directory of one-issue-per-file is the natural input for the future filing
  script (NG-2, section 11), which can batch-create issues with `gh` instead of
  someone copy-pasting from a large combined file; it also keeps any single file
  readable. This is raised as a proposal for discussion; the methodology docs
  are not changed by this PR.

Every deliverable carries a header noting it was AI-drafted and human-reviewed
(HC-6).

Scope note: phase one produces plans (assessment, implementation, backlog), not
documentation changes, and the backlog lands as files in cncf/techdocs rather
than as issues where writers work (NG-2, HC-3). Until the optional filing tool
exists (section 11), the reviewer and stakeholders route the backlog to writers
by hand. The pilot therefore measures output, not documentation outcomes, a
distinction we state so we don't mistake one for the other.

## 7. Inputs: the assessment request

The process starts from a GitHub issue in cncf/techdocs, filed with a request
template (`.github/ISSUE_TEMPLATE/`) that collects the context an assessment
needs. The specific fields are deferred for now; they will derive from what the
methodology already requires (the analysis template's "About" and "Scope"
sections, plus maturity and contacts).

Filing a request does not start an assessment: it gathers context, and a
technical writer triages and explicitly accepts it to begin Phase A (NG-5, P-1).

Open question: how this relates to the existing CNCF service desk and TechDocs
assistance-program intake, so we don't create a competing front door.

## 8. Safety and guardrails

HC-1 is guaranteed primarily by credential scoping: the agent runs under a
credential (fine-grained token or GitHub App) that can write only to
cncf/techdocs, so writes elsewhere are impossible, not merely disallowed. Tool
allowlisting (reads and web research permitted; GitHub-write tools constrained
to the one repo) and the human review gates are defense in depth.

Threat cases:

1. Prompt injection (primary threat). The agent's core job is ingesting
   untrusted content from assessed repositories, which may contain instructions
   aimed at the agent. Scoping blocks writes outside cncf/techdocs, but
   injection can still try to (a) plant poisoned or misleading content into a
   deliverable inside cncf/techdocs, or (b) trigger outbound web requests to
   exfiltrate or fetch. Mitigations: treat all repo and web content as data,
   never instructions; human review of every deliverable before merge (HC-4);
   constrain outbound network access; and keep secrets out of the agent's reach.
2. Write outside cncf/techdocs. Blocked architecturally by the scoped credential
   (HC-1).
3. Unverified content in a deliverable. Qualitative findings must be checked
   against source (HC-7); quantitative claims must be reproducible (HC-5).
4. Self-merge or unattended change. Prevented by human-reviewed PRs; the agent
   never merges (HC-4).

The credential mechanism (fine-grained PAT versus GitHub App, both scoped to
cncf/techdocs) is an implementation choice; the required property is that the
write boundary is enforced, not advisory (P-3).

## 9. Grounding in methodology

Every requirement here derives from the existing methodology, so the system
automates the current method rather than inventing a new one (P-2):

- The three deliverables (G-7) and the phase order (section 5) follow the
  [howto]: analysis, then implementation plan, then issue backlog.
- Assessment content, ratings, and criteria come from `criteria.md`.
- Each deliverable's structure comes from the templates in
  `docs/analysis/templates/` (`analysis.md`, `implementation.md`,
  `issues-list.md`, `issue.md`).
- Scope and maturity framing (section 7) come from the analysis template's
  "About" and "Scope" sections and the criteria's maturity levels.
- The 4-hour, independent, time-bounded issue scoping (Phase C) follows the
  howto and assistance-program guidance on backlog creation.

Prior prototyping has explored parts of this workflow; that experience will
inform implementation.

## 10. Acceptance criteria

The system is acceptable when, on a pilot assessment:

- Quality. The deliverable is scored against an assessment-quality rubric (its
  definition is an open item; section 11). Verification is not a token sample:
  the reviewer checks every rating-bearing finding, or at minimum a set number
  per criterion, biased toward the highest-risk claims, and records in the
  deliverable which findings were verified (HC-7). Final sign-off is given by
  the approver (section 4), who was neither the drafter nor a reviewer of that
  phase, to avoid signing off on one's own work. The bar is parity with the
  human baselines (Flatcar, Knative, Helm).
- Cycle time. Measured against the time decomposition from G-1 (writer working
  time versus waiting on people). The roughly 2-week target is evaluated as a
  hypothesis; missing it prompts a look at which gates or waits dominate, not a
  quiet redefinition.
- Safety. Zero writes outside cncf/techdocs, audited from the scoped
  credential's activity, and no unmitigated prompt-injection incident.
- Completeness and reproducibility. All three deliverables produced; every
  quantitative claim reproducible from a committed step (HC-5); AI involvement
  disclosed (HC-6).

Pilot caveat: one assessment is n=1 for a quality claim. Choose the pilot
deliberately, neither a flattering easy project nor an impossibly hard one,
state the choice, and broaden before drawing general conclusions.

## 11. Open questions and future work

- Filing issues into project repos. A separate, opt-in tool to create the
  backlog issues in a project's own repository (NG-2). Out of scope for phase
  one, and it must preserve HC-1.
- Intake relationship. How the request template fits with the existing CNCF
  service desk and assistance-program intake (section 7), without a competing
  front door.
- AI-readiness criteria. Whether and how the criteria evolve for AI consumption
  (for example llms.txt), tracked in PR #357.
- Pilot measurement. How we capture the G-1 time decomposition and cycle-time
  data to test the 2-week hypothesis (section 10).
- Assessment-quality rubric. Define the meta-rubric that scores an assessment's
  quality, distinct from `criteria.md` (which scores a project's docs), and
  validate it by scoring the Flatcar, Knative, and Helm baselines to set a
  reference band (sections 2, 10).
- Small-team staffing. Sustaining the approver separation (a phase's approver
  must be neither the drafter nor a reviewer of that phase; sections 4, 10) when
  the same few writers wear multiple hats.
- Scaling. Running assessments for several projects concurrently.

---

[criteria]: https://github.com/cncf/techdocs/blob/main/docs/analysis/criteria.md
[howto]: https://github.com/cncf/techdocs/blob/main/docs/analysis/howto.md
[analysis-dir]: https://github.com/cncf/techdocs/tree/main/docs/analysis
[copilot-blog]:
  https://contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers/
