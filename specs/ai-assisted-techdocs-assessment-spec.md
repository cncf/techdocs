---
title: AI-assisted TechDocs Assessment
---

# AI-assisted TechDocs Assessment

**What this is.** A working specification for an AI-assisted, human-supervised
CNCF TechDocs assessment workflow, in two parts. Part I is requirements: the
outcomes the system must produce and the boundaries it must never cross. Part II
is the operational specification: how those requirements bind to concrete
tooling, and the plan for building the system.

---

## Part I: Requirements

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
  weeks. This is the motivation and a pilot hypothesis, not an acceptance
  criterion (section 10): the pilot succeeds or fails on quality and safety, and
  the elapsed time simply gets reported.
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
- G-7: Produce the standard deliverables. Assessment, implementation plan, and
  an issue backlog, matching the existing methodology, including its skip path:
  small projects whose recommendations are already independent and time-bound
  may go straight from assessment to backlog ([howto]).

### Non-goals (phase one)

- NG-1: No external GitHub writes. The system does not create or modify any
  file, PR, issue, comment, or setting outside cncf/techdocs. (Hard constraint;
  see HC-1 in section 3.)
- NG-2: No auto-filing of issues. The backlog is delivered as files in
  cncf/techdocs. Filing them as real issues in project repos is future work (a
  separate, opt-in script; see section 17), explicitly out of scope now. The
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
    specific commit SHA of the methodology docs so the run is reproducible
    (P-4). "Auto-updates" means each new assessment picks up the latest
    canonical docs, not that an in-flight assessment shifts under review.
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
  instruction: the agent runs inside a write boundary scoped to cncf/techdocs,
  so a write elsewhere is impossible, not merely disallowed. Full design in
  section 8.
- HC-2: Phase gating. Each phase (assessment, implementation, backlog) is
  reviewed by a technical writer, then goes to stakeholders before the next
  begins. Sign-off separates two things. A factual-accuracy check: stakeholders
  confirm they have read the deliverable and had the chance to correct factual
  errors, which is required to advance. Agreement with the conclusions: not
  required, and a project's disagreement is recorded in the deliverable rather
  than allowed to block or soften it. Merging phase N makes phase N+1 eligible;
  a technical writer still starts it (section 5).
- HC-3: Deliverables are files in cncf/techdocs. Including the issue backlog, in
  whatever layout the methodology prescribes (section 6 proposes one file per
  issue). Nothing is filed to an external repo.
- HC-4: No unattended autonomy. Repository content the agent produces lands only
  through a human-reviewed PR, and the agent never self-merges. Deterministic
  lifecycle bookkeeping fired by a human decision, such as the merge-triggered
  workflow that opens the next phase's tracking issue (section 12), is not
  autonomy: no model runs, and the human act that fires it is an approval
  already given.
- HC-5: Provenance required. Quantitative claims (counts, link status,
  inventories) must be generated by a committed, re-runnable step and cite their
  source; no unverifiable figures in a deliverable.
- HC-6: Disclose AI involvement. The assessed project is told, up front in the
  intake and in a header on every deliverable, that the analysis was AI-drafted
  and human-reviewed. No project should discover this after the fact.
- HC-7: Findings are verified, not assumed. Qualitative findings are checked
  against the actual project sources, not accepted because they read plausibly.
  The verification method is in section 10.

## 4. Roles

Roles are defined by function. Each is filled by an actor (a person, group, or
tool), and one actor may fill more than one role. Not every role may be filled
by a tool: the drafter is expected to be one and the verifier is one by
definition, while the reviewer and approver are human-only, because they hold
the human judgment that G-3, NG-3, and HC-2 require. Machine checks may assist
them; they may not replace them.

- Requester. A stakeholder who initiates the assessment by filing the request
  (section 7); for example a maintainer, tech lead, or trusted community member.
  Filing does not start an assessment.
- Drafter. Produces the first-pass draft of each phase's deliverable as a draft
  PR, then refines it in conversation with the reviewer.
- Verifier. An agent that runs an adversarial fact-check pass over each draft
  before human review: resolving citations, checking claims against the sources
  they cite, and flagging anything unsupported. It is prompted to find
  unsupported claims, not to confirm the draft, making it less likely to inherit
  the drafter's blind spots. Its report feeds the reviewer's verification
  (HC-7); it never substitutes for it. The layering exists because a fabrication
  that reaches a project's maintainers wastes their time and costs the system
  its credibility.
- Reviewer. Accepts a request to begin work, then reviews and refines each draft
  in conversation, verifies findings against source (HC-7), and marks it ready.
  Owns the draft's quality, but does not give its final sign-off; that is
  independent (see Approver). A human role: it starts from the verifier's report
  and the machine checks (provenance lint, template conformance), but the
  verification and the readiness call are the reviewer's own.
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
- Administrator/platform owner. Owns the machine itself: the prompts, the
  operational layer, and the configuration that enforces the write boundary
  (HC-1). Sets policy and handles aborts (section 5). A central role, kept out
  of the per-assessment critical path.

## 5. Lifecycle

Each phase runs the same six steps:

1. Request. Phase A is triggered by the intake issue (section 7); the next phase
   becomes eligible once the previous one is merged (phase C directly after A
   when phase B is skipped; section 6).
2. Accept. A technical writer triages and explicitly accepts the request, for
   every phase, not just A; eligibility alone does not start work (P-1).
3. Draft. The drafter produces the deliverable as a draft PR. When the phase's
   drafter takes data-collection outputs as input (section 14), delegation
   produces them first: they are generated deterministically at session start,
   before any model runs, and committed with the draft as its evidence (HC-5).
4. Review. The verifier's fact-check pass runs first; the reviewer may skip it
   deliberately, recording why (section 12). The reviewer then refines the draft
   in conversation with the drafter, verifies findings against source (HC-7),
   and marks it ready.
5. Stakeholder review. Stakeholders confirm factual accuracy (required to
   advance) and record any disagreement with the conclusions (not required;
   HC-2).
6. Merge. The approver signs off and merges the PR into cncf/techdocs, which
   makes the next phase eligible.

Failure path: if a draft is bad enough that fixing it would cost more than
starting over, the reviewer may discard it and restart or write by hand rather
than sink time into editing. Repeated failure is escalated to the
administrator/platform owner, who may abort the run. An assessment must never
end up slower than doing it by hand.

## 6. Phases and deliverables

- Phase A: Assessment (`analysis.md`). Detailed first.
- Phase B: Implementation plan (`implementation.md`). Per the methodology, this
  phase may be skipped for a small project whose recommendations are already
  independent and time-bound; the reviewer and stakeholders make that call
  during phase A's review and record it on the phase A PR before merge. One of
  the human baselines (Knative) took this path.
- Phase C: Issue backlog. Each proposed issue is a separate file scoped to the
  methodology's time bound (a few hours to a couple of days at most for someone
  experienced with the project and comfortable writing), plus an umbrella/index
  file that lists them. Effort estimates are the agent's first pass and are
  sanity-checked by the reviewer; agent estimates are not reliable on their own.

  Proposed methodology change. The current method delivers the backlog as one
  `_PROJECT_-issues.md` file (`howto.md`, `templates/issues-list.md`,
  `templates/issue.md`). This spec proposes splitting the individual issues into
  one file each while keeping a single umbrella/index document. Rationale: a
  directory of one-issue-per-file is the natural input for the future filing
  script (NG-2, section 17), which can batch-create issues with `gh` instead of
  someone copy-pasting from a large combined file; it also keeps any single file
  readable. This is raised as a proposal for discussion; the methodology docs
  are not changed by this PR. The order matters (P-2): the agent follows the
  methodology as it stands, so until the change is accepted there, the backlog
  drafter produces the single combined file, and the split layout waits for the
  methodology, never the other way around.

Every deliverable carries a header noting it was AI-drafted and human-reviewed
(HC-6).

Scope note: phase one produces plans (assessment, implementation, backlog), not
documentation changes, and the backlog lands as files in cncf/techdocs rather
than as issues where writers work (NG-2, HC-3). Until the optional filing tool
exists (section 17), the reviewer and stakeholders route the backlog to writers
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
A request can also be filed by the assessing team rather than the project, and
HC-6's up-front promise must not depend on who filed: phase A is not delegated
until the project contacts named in the request have been notified on the intake
issue.

Open question: how this relates to the existing CNCF service desk and TechDocs
assistance-program intake, so we don't create a competing front door.

## 8. Safety and guardrails

HC-1 is guaranteed primarily by an enforced write boundary: the agent can write
only to cncf/techdocs, so writes elsewhere are impossible, not merely
disallowed. Tool allowlisting (reads and web research permitted; GitHub-write
tools constrained to the one repo) and the human review gates are defense in
depth.

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

The enforcement mechanism is an implementation choice; the required property is
that the write boundary is enforced, not advisory (P-3). The chosen binding and
its documented guarantees are specified in Part II (section 11).

## 9. Grounding in methodology

Every requirement here derives from the existing methodology, so the system
automates the current method rather than inventing a new one (P-2):

- The deliverables (G-7) and the phase order (section 5) follow the [howto]:
  analysis, then implementation plan, then issue backlog, keeping the howto's
  own skip path for the implementation plan (section 6).
- Assessment content, ratings, and criteria come from `criteria.md`.
- Each deliverable's structure comes from the templates in
  `docs/analysis/templates/` (`analysis.md`, `implementation.md`,
  `issues-list.md`, `issue.md`).
- Scope and maturity framing (section 7) come from the analysis template's
  "About" and "Scope" sections and the criteria's maturity levels.
- The independent, time-bounded issue scoping (Phase C, a few hours to a couple
  of days per issue) follows the howto and assistance-program guidance on
  backlog creation.

Prior prototyping has explored parts of this workflow; that experience will
inform implementation.

## 10. Acceptance criteria

The system is acceptable when, on a pilot assessment:

- Quality. The deliverable is scored against an assessment-quality rubric (its
  definition is an open item; section 17). Verification is not a token sample:
  for the pilot, the reviewer checks every rating-bearing finding in the
  analysis and, in the phases that carry no ratings, every claim about the
  project's current state that a recommendation stands on, biased first toward
  the highest-risk claims, and records in the deliverable which findings were
  verified (HC-7); any cheaper sampling rule is future work, set with the rubric
  (section 17). Final sign-off is given by the approver (section 4), who was
  neither the drafter nor a reviewer of that phase, to avoid signing off on
  one's own work. The bar is parity with the human baselines (Flatcar, Knative,
  Helm).
- Safety. Zero writes outside cncf/techdocs, audited from the platform's
  activity records, and no unmitigated prompt-injection incident.
- Completeness and reproducibility. Every phase's deliverable produced (all
  three, or two where the implementation plan was skipped per section 6); every
  quantitative claim reproducible from a committed step (HC-5); AI involvement
  disclosed (HC-6).

Pilot caveat: one assessment is n=1 for a quality claim. Choose the pilot
deliberately, neither a flattering easy project nor an impossibly hard one,
state the choice, and broaden before drawing general conclusions.

---

## Part II: Operational specification

Part I defines what must be true and what must never happen. Part II binds those
requirements to concrete tooling: named products, file paths, configuration, and
the plan for building the system. The layers are deliberately separate (P-3).
Requirements govern: if a binding here conflicts with Part I, Part I wins, and
the tooling can be swapped without reopening the requirements.

The binding targets the GitHub Copilot cloud agent (documented until recently as
"Copilot coding agent"). Its behavior as stated here is taken from GitHub's
public documentation as of August 2026; platform behavior we could not verify
from public documentation is treated as a build-time check (section 17), not
assumed. Part II covers, in order: the platform binding, lifecycle bindings,
components and repository layout, agent definitions, the provenance block, and
the build plan.

## 11. Platform binding

The system runs on the [GitHub Copilot cloud agent][cloud-agent-about] operating
inside cncf/techdocs. This binding is chosen because the platform's documented
containment model satisfies HC-1 as shipped, rather than requiring credential
infrastructure we build and maintain ourselves.

- The write boundary (HC-1). The cloud agent can only make changes in the
  repository where its task was started, on a single branch, using a token the
  platform issues for that run. It can open at most one pull request per task,
  and a run can also end leaving changes on its branch with no pull request at
  all, so "every change reaches main through a reviewed PR" is enforced by this
  spec's lifecycle (HC-4, section 12), not by the platform alone. The built-in
  GitHub MCP server connects with read-only access to the current repository by
  default. Together these provide the enforced write boundary Part I requires;
  we mint and manage no credential of our own. The platform does not publicly
  enumerate the agent token's exact permission scopes, so confirming them
  empirically is a build-time check (section 17), as is confirming that
  delegation reliably opens a draft pull request.
- Outbound network. The agent's internet access is governed by a [default-deny
  firewall][cloud-agent-firewall] with an allowlist. The default allowlist
  covers package registries and GitHub content domains, not the general web, so
  reading an assessed project's live documentation site requires an explicit
  allowlist entry. We treat this as a feature: the intake (section 7) collects
  the project's documentation domains, and the administrator/platform owner adds
  them at acceptance, making each assessment's external reads an explicit,
  auditable, reversible contract. Requests the firewall blocks are disclosed
  automatically in the pull request, which feeds the safety audit in section 10.
  The firewall's scope is the agent's own session: the environment-setup
  workflow (see Execution environment below) runs outside it, so what setup
  fetches is governed by review of that versioned workflow file, not by the
  firewall.
- MCP policy. The firewall does not apply to MCP servers, and MCP tools are one
  of the two documented mechanisms that can widen the agent's write reach (a
  secret is the other; see the next bullet), so [MCP
  configuration][cloud-agent-mcp] is a control surface requiring explicit
  policy. Policy: the GitHub MCP server stays at its read-only default; any
  additional MCP server must be read-only with its tools explicitly allowlisted;
  no write-capable MCP tool is permitted. MCP configuration lives in repository
  settings rather than in a versioned file, so its effective state is captured
  by the agent-configuration snapshot (section 13), and settings changes appear
  in the organization audit log.
- Secrets policy. Repository or organization secrets can be made available to
  the agent's environment during setup and execution. A secret carrying a
  credential (a personal access token, for example) would hand the agent write
  reach past HC-1's boundary. Policy: the agent's environment gets no secrets
  beyond what the platform itself requires; any exception is a recorded
  administrator/platform owner decision, like MCP changes, and a write-capable
  credential is never acceptable.
- Execution environment. The agent runs in an ephemeral [GitHub Actions-based
  environment][cloud-agent-env] with a hard session cap (currently 59 minutes).
  That cap shapes the design: deterministic data collection (section 13) runs as
  committed scripts in the session's setup steps, before the model starts, so
  the agent spends its session on judgment, not inventory. The environment,
  those steps included, is prepared by
  `.github/workflows/copilot-setup-steps.yml`.
- Delegation is permission-gated. Only users with [write access to the
  repository][cloud-agent-access] can delegate work to the agent, which lets the
  lifecycle enforce P-1 with platform permissions instead of process discipline
  (section 12). Scheduled or event-triggered agent runs are not available on
  public repositories, which costs us nothing: every run is human-started by
  design (P-1).
- Preconditions. For CNCF's GitHub organization, the cloud agent and MCP
  policies are disabled by default and must be enabled by organization
  administrators, with repository access granted for cncf/techdocs. Usage draws
  on the AI credits pooled across CNCF's Copilot Enterprise seats plus GitHub
  Actions minutes, and spending beyond the included credits is enabled by
  default at the organization level, so administrators should review the cap.
  These preconditions open the build plan (section 16).

## 12. Lifecycle bindings

Each lifecycle step (section 5) binds to a native GitHub primitive, and the
workflow keeps no state of its own: an assessment's state is always readable
from its issues and pull requests.

The human acts that move a phase are issued as slash commands (`/accept`,
`/decline`, `/verify`, `/ready`, `/confirm`, `/discard`, `/skip-implementation`)
written as ordinary comments, following [Kubernetes issue
triage][k8s-issue-triage] practice and the comment-command automation already
running in [cncf/mentoring][mentoring-commands]. An `issue_comment` workflow
parses the command, authorizes the commenter against the role bindings below,
and performs the corresponding native operations: a command is honored only from
the role the lifecycle assigns that act, so the write-gated commands grant no
power the commenter does not already hold, and `/confirm` is authorized by the
stakeholder names in the intake rather than by repository access (see
Stakeholder review below). Commands are deterministic bookkeeping fired by a
recorded human decision (HC-4); the one that starts a model run, `/verify`, is
an explicit delegation by the phase's reviewer (P-1). Labels applied by the
commands and workflows record where each assessment stands: an issue search
filtered by phase label is the portfolio view, with no dashboard to build.

- Request (step 1): an issue. Phase A's request is the intake issue (section 7);
  phase B's and C's tracking issues are opened automatically when the previous
  phase merges (see Merge below). A request issue opens labeled `needs-triage`,
  applied by the intake form or by the phase-advance workflow. An issue may sit
  unassigned indefinitely; eligibility is not work. The intake issue doubles as
  the assessment's umbrella issue, open end to end: every phase's tracking issue
  and pull request links back to it, so cross-references accumulate on its
  timeline; its labels carry the current phase; and the workflows post each
  transition to it (see Merge below). Where an assessment stands, and what has
  to happen next, is readable from that one issue. (The backlog's umbrella,
  section 6, is the same pattern applied to the resulting doc work; a different
  artifact.)
- Accept (step 2): the `/accept` command. A writer accepts by commenting
  `/accept` on the request issue: the workflow assigns the issue to them,
  recording who accepted and who acts as the phase's reviewer, and swaps
  `needs-triage` for `triage/accepted`. For phase A, the same command posts the
  mention of the named project contacts on the intake issue, so the AI
  disclosure reaches the project before drafting starts, whoever filed the
  request, and the step cannot be forgotten (HC-6, section 7). The writer then
  delegates to the agent directly, selecting the phase's drafting profile
  (section 14); the command does not start the agent, because delegation carries
  choices a comment cannot: the profile and the model picker (section 14).
  Because only users with write access can delegate (section 11), P-1 is
  enforced by repository permissions, not convention, and the workflow refuses
  `/accept` from a commenter without write access. For phases B and C, whose
  tracking issues are separate from the intake, the workflow also notes the
  acceptance on the intake issue: an unaccepted eligible phase is the stall
  mode, so the umbrella shows when work actually started and by whom. The triage
  verdict has a counterpart: a writer declines an unaccepted request with
  `/decline <reason>`, under the same authorization as `/accept`; the workflow
  labels it `triage/declined`, posts the reason, and closes the issue as not
  planned. Declining the intake means the assessment never starts. Declining a
  phase B or C tracking issue ends the assessment there, noted on the intake
  issue, which the workflow closes, so an open intake still means work in
  flight. A project's request to stop is honored the same way: the writer
  records a decline rather than leaving the request to sit unanswered.
- Draft (step 3): a draft pull request. The agent works on its own branch in
  cncf/techdocs and opens a draft PR linked to the tracking issue, carrying the
  provenance block (section 15).
- Review (step 4): PR review comments. The reviewer triggers the verifier's pass
  by commenting `/verify` on the draft PR; its report lands as a PR comment,
  part of the same public record, and the workflow applies the `verified` label
  to the PR when it does. The label means the verification this PR needs is
  satisfied, not that the agent ran: a reviewer who deliberately skips the pass
  (section 5), judging the human check sufficient or the verifier unavailable,
  applies the label by hand with the reason in a comment, and the timeline
  records who and when. The label is the gate: `/ready` refuses without it, and
  the strict provenance check fails a ready PR that lacks it (section 15). The
  reviewer refines the draft in conversation, handing revisions back by
  mentioning `@copilot` in review comments, and performs the verification
  required by section 10. Whether mention-triggered revisions require write
  access, and whether a comment-triggered workflow can start the verifier
  against an existing PR, as `/verify` requires, are build-time checks (section
  17).
- Stakeholder review (step 5): mention, not access. The reviewer comments
  `/ready`: the workflow marks the PR ready for review and mentions the
  stakeholders named in the intake, one act instead of two. The draft-to-ready
  flip carries the real-world meaning: draft while the assessing team is still
  working the deliverable over, ready when they would put it in front of the
  requesting project. cncf/techdocs is public, so stakeholders can review and
  comment without any special access; formal review requests are limited to
  collaborators, which is why the binding is a mention plus a factual-accuracy
  confirmation, recorded by the stakeholder commenting `/confirm`, which the
  workflow checks against the names in the intake, no repository access
  required, and records by applying the `confirmed` label to the PR. Any
  disagreement with the conclusions is recorded in the deliverable itself
  (HC-2).
- Merge (step 6): merge plus one workflow. The approver (section 4) merges,
  checking the `confirmed` label is present first: stakeholder confirmation is
  required to advance (step 5, HC-2), and because a ready PR awaiting
  stakeholders is a normal state rather than a failure, the check is the
  approver's duty, not CI's. A merge-triggered GitHub Actions workflow (standard
  `GITHUB_TOKEN` with `issues: write`) then opens the next phase's tracking
  issue, labeled for its phase and `needs-triage`, linking the intake and the
  merged deliverable, and assigns no one: eligible, not started (HC-2, P-1). The
  reviewer records the phase B skip decision, the joint call with stakeholders
  (section 6), with `/skip-implementation` on the phase A PR, applying the label
  the workflow reads to open phase C's tracking issue instead. The same workflow
  keeps the umbrella current: it posts the transition on the intake issue, what
  merged and what is now eligible with the command that starts it, and swaps the
  intake's phase label. The final phase's merge closes the intake issue: an open
  intake is an assessment in flight, a closed one is done. Approver independence
  cannot be natively enforced by GitHub; it is verifiable from the public PR
  record, and an advisory CI check that flags a violation is a build-plan
  candidate (section 16).
- Failure and abort leave a trail. The reviewer discards a draft (section 5)
  with `/discard <reason>`, which closes the PR with the reason recorded in the
  command comment and notes the discard on the intake issue; the tracking issue
  stays open for a restart or a hand-written phase. An administrator/platform
  owner abort closes the tracking issue and the intake with it, the rationale
  recorded on both, so an open intake still means work in flight.
- The timeline records elapsed time. Gate transitions (opened, accepted, draft
  PR, ready, approved, merged) are timestamped in issue and PR history, so how
  long a pilot took, and where the time went, can be read from the GitHub
  timeline after the fact. The intake issue aggregates the phase boundaries, so
  the reading starts from one place. This reports on G-1 without adding a log or
  an acceptance gate.

Assessments run concurrently; the lifecycle is sequential within an assessment,
never across assessments. The bindings above need no coordination between two
assessments in flight because each one resolves its assessment from the artifact
it fires on: a command from the issue or PR it is commented on, the
phase-advance workflow from the tracking issue the merged PR links. Each
assessment keeps its own namespace, the intake issue and the deliverable
directory (`analyses/<year>/<project>/`, section 13), one assessment per project
per year, with the tracking-issue link authoritative and the path the
human-readable key. Admission control is `/accept` itself: eligible issues wait
until a writer with review capacity takes one, so how many assessments run at
once is bounded by the humans available, not by a mechanism (P-1). What
concurrent assessments do share is the credit pool, watched by the
administrator/platform owner (section 11), and the small team sustaining
approver independence across them (section 17).

## 13. Components and repository layout

Everything the system is made of lives in cncf/techdocs, versioned and
reviewable like any other change; none of it exists yet. The operational layer
points at the methodology, it never restates it (P-2).

- Intake template: `.github/ISSUE_TEMPLATE/assessment-request.yml`. The
  structured request form (section 7), including the up-front AI disclosure
  (HC-6).
- Repository instructions: `.github/copilot-instructions.md`. Ground rules for
  any agent work in this repository.
- Agent profiles: `.github/agents/*.agent.md`. One per phase for drafting, plus
  one for verification: each agent's task, inputs, and constraints (section 14).
- Environment setup: `.github/workflows/copilot-setup-steps.yml`. Prepares the
  agent's ephemeral environment (section 11).
- Phase-advance workflow: `.github/workflows/assessment-phase.yml`. On merge,
  opens the next phase's tracking issue (section 12).
- Command workflow: `.github/workflows/assessment-commands.yml`, backed by a
  parser in `scripts/assessment/`. The `issue_comment` glue behind the slash
  commands (section 12): parse the comment, authorize the commenter against the
  role bindings, act. The parser is a plain unit-tested function and the
  workflow is thin glue over it, the pattern proven by the [cncf/mentoring
  automation][mentoring-commands].
- Provenance check: a workflow in `.github/workflows/` backed by
  `scripts/assessment/`. CI that fails a deliverable PR whose provenance block
  is missing or malformed (section 15).
- Data collection: `scripts/assessment/`. The deterministic inventory scripts
  behind HC-5 (section 15). The drafting session's setup steps (section 11) run
  them and leave the outputs in the workspace; the drafter commits them
  unmodified with the draft. Unmodified is checkable, not assumed: re-running
  the committed command reproduces the committed outputs or exposes the edit.
- Labels: `.github/settings.yml`. The repository's existing `Docs analysis`
  label marks assessment work, unchanged from the human-run analyses; AI
  involvement is indicated by the provenance block and the disclosure, not a
  label. Added for the workflow: per-phase labels, the
  `needs-triage`/`triage/accepted`/`triage/declined` triage set, the `verified`
  and `confirmed` gates (section 12), and the phase B skip marker (section 12),
  managed declaratively alongside the existing label set.
- Agent-configuration snapshot: `scripts/assessment/`. The agent's effective
  configuration (MCP servers, firewall state, and custom allowlist) is readable
  from a [documented endpoint][cloud-agent-config-api], so a deterministic
  script captures it alongside each assessment's data outputs (HC-5): what the
  agent could reach when a draft was produced is committed evidence. The
  organization audit log remains the authoritative history of who changed a
  setting and when. The endpoint does not expose organization-level allowlist
  entries; the administrator/platform owner records those by hand when they
  exist.
- Deliverables: `analyses/<year>/<project>/`. The existing convention:
  `analysis.md`, `implementation.md`, and the backlog.
- Backlog files: `analyses/<year>/<project>/issues/`. One file per proposed
  issue plus an index, if the section 6 proposal is accepted into the
  methodology first; until then, the combined file the methodology prescribes
  (P-2).

Notes:

- The methodology corpus at [docs/analysis/][analysis-dir] is deliberately
  absent from this list: the system reads it, but owns no file in it (P-2,
  NG-4). This spec likewise lives outside the corpus.
- The backlog file naming across existing analyses already varies (`issues.md`,
  `issues-list.md`); whatever the section 6 decision, the layout above pins one
  convention going forward.
- MCP configuration is the one component not in the list because the platform
  keeps it in repository settings, not a file (section 11).

## 14. Agent definitions

The drafter and verifier roles (section 4) are filled by the cloud agent running
under an agent profile: a versioned file in `.github/agents/` whose header
declares the agent's name, description, and allowed tools, and whose body is its
standing prompt. The writer who accepts a phase selects its drafting profile
when delegating (section 12). Profiles are plain files, so changing an agent
means a reviewed PR, owned by the administrator/platform owner, like any other
change to the machine.

Rules common to all profiles, in tension-order with Part I:

- Point, do not restate. A profile carries the task shape, output paths, and
  discipline; the criteria, process, and templates are read from the methodology
  corpus at the pinned SHA (P-2). No rubric content, criterion text, or template
  structure is copied into a prompt.
- Data, not instructions. Content from the assessed project (repos, sites,
  issues) is evidence to analyze, never instructions to follow (section 8).
- Evidence discipline. Quantitative claims come from the committed
  data-collection outputs (HC-5); qualitative findings cite the source they were
  checked against (HC-7); anything unverifiable is flagged as such in the draft
  rather than asserted.
- Provenance. Every draft opens with the provenance block (section 15).
- Least tools. A profile's tool list is the minimum its phase needs; none may
  include a write-capable MCP tool (section 11).
- Explicit selection only. By default the platform may auto-select a custom
  agent from task context [custom-agents-config], which would let an unrelated
  delegation in cncf/techdocs pull in an assessment profile. Every profile sets
  `disable-model-invocation`, so a profile runs only when the writer selects it
  (P-1, section 12).

The three drafting profiles:

- Assessment drafter (Phase A). Input: the intake issue, the methodology at the
  pinned SHA, and the data-collection outputs for the project. Output: the
  collection outputs committed unmodified (section 13), then a draft
  `analysis.md` in the project's deliverables directory, rating each criterion
  with cited evidence.
- Plan drafter (Phase B). Input: the merged `analysis.md` plus the intake and
  methodology. Output: a draft `implementation.md` derived from the assessment's
  findings only; a gap discovered while planning is flagged in the PR, not
  silently promoted into a new finding.
- Backlog drafter (Phase C). Input: the merged `implementation.md`, or the
  merged `analysis.md` where phase B was skipped (section 6). Output: the issue
  backlog in the layout the methodology prescribes (section 6), each item scoped
  to the methodology's time bound (section 6), with effort estimates marked as
  first-pass for reviewer sanity-checking.

The verification profile:

- Verifier (every phase). Input: the draft PR's deliverable and the sources it
  cites. Output: a report on the PR listing each checked claim as supported,
  unsupported, or unverifiable, with the failing ones quoted. The report is
  delivered whole: a finding tucked behind an all-clear summary line is G-2's
  fluent-but-wrong failure mode reappearing in review clothing, and the reviewer
  reads the list, not the headline. Its prompt is adversarial (find unsupported
  claims), not confirmatory (check the draft is fine), making it less likely to
  share the drafter's failure mode (G-2). Its tool list is read-only; it edits
  nothing.

Model and effort. Profiles state capability requirements, never model names:
models change faster than this spec. Drafting warrants the most capable model
and effort available to the repository; verification does not need the drafter's
configuration, and running the verifier on a different model is preferable where
the platform allows it, since two models are less likely to share one blind
spot. The platform offers model choice in two documented places: a `model`
property in the profile's front matter, which inherits the default when unset,
and a per-task picker at delegation time [custom-agents-config]. Our profiles
leave `model` unset by policy: a pinned name turns model churn into profile
churn, and the writer applies this policy through the picker when delegating.
Whether `/verify`'s workflow invocation can carry the same model choice is a
build-time check (section 17); if it cannot, the different-model preference
survives only where the verifier is delegated by hand. Whether effort level can
be pinned anywhere is a build-time check (section 17). Which models the picker
offers to cncf/techdocs is organization policy, handled with the CNCF GitHub
organization administrators by the administrator/platform owner (section 4).

## 15. The provenance block

The provenance block is where Part I's disclosure and evidence duties converge
(HC-5, HC-6, HC-7, P-2): a fixed-format section at the top of every
deliverable's body, immediately after the title. It is body content rather than
front matter because of how deliverables are published: cncf/techdocs is the
source of truth, and its content is synced at build time into the
[contribute.cncf.io site][contribute-site-sync], whose rebuild a merge to main
triggers. Body content survives that sync verbatim and renders wherever the
deliverable is read (the repository, the site, a fork); front matter is consumed
as metadata and does not reach the page. HC-6 requires that no project discover
AI involvement after the fact, so the disclosure rides in the content itself. As
plain markdown (a heading and labeled bullets) it needs nothing from any
renderer, and the fixed labels make it machine-checkable.

Its fields, each a labeled bullet:

- Disclosure. A fixed sentence with three forms matching the deliverable's state
  (HC-6). The draft form: drafted by an AI agent, human review pending. The
  final form: drafted by an AI agent, reviewed and verified by humans. Each form
  asserts only what has already happened at the moment it may appear; approval
  is not claimed in the sentence because it is evidenced by the PR record
  itself, which no body text can substitute for. The third form covers a phase
  the reviewer wrote by hand after discarding the draft (sections 5, 12):
  written by humans, with `none` in the agent fields. The block rides every
  deliverable either way, so the reader always learns how the document was
  produced, including that no agent was involved.
- Drafter. The agent profile that produced the draft, by name and ref (section
  14).
- Verifier. The verifier profile, by name and ref, and a link to its report on
  the PR (section 14); `none` when the reviewer deliberately skipped the pass,
  with the reason recorded on the PR where the `verified` label was applied by
  hand (section 12).
- Methodology. The commit SHA of the methodology corpus the draft was produced
  against (P-2), so the deliverable pins the criteria and templates it was
  measured by. A resolved SHA, not a branch or tag name: a name can move after
  the assessment and take the pin's meaning with it. The SHA is set at phase A
  and carried unchanged by every later phase's deliverable: one assessment is
  measured against one methodology.
- Data. The data-collection commands that were run and the committed paths of
  their outputs, so every quantitative claim traces to a reproducible step
  (HC-5), plus the commit SHA of each assessed repository at collection time and
  the retrieval date for each live site. The pins record which state of the
  sources each claim describes: a pinned repository lets the reviewer check out
  exactly what the drafter saw (section 10), a dated site bounds when the claim
  held, and when the sources move on, drift reads as drift rather than error.
  They promise no re-run of the assessment itself, which is judgment: two honest
  runs converge without matching.
- Verification record. Which findings the reviewer verified against source,
  satisfying the section 10 floor (HC-7): the rating-bearing findings in phase
  A, the claims grounding the recommendations in phases B and C.

The fields have owners. The drafter emits the block with everything it can know:
disclosure, its own profile, the methodology SHA, and the data paths. The
verifier field and the verification record belong to the review step: the report
link is added once the verifier's pass runs, and the record starts as a marked
placeholder that only the reviewer fills; a drafter asserting its own work
verified would be a fabrication about fabrication-checking. The disclosure's
flip from draft form to final form belongs to review for the same reason: it
happens when the PR is marked ready, at which point the review and verification
it asserts have both occurred.

The provenance check (section 13) enforces the block in CI: a deliverable PR
fails if the block is missing, a field is absent or malformed, the methodology
pin is not a resolved commit SHA, does not resolve, or differs from the SHA set
at phase A, or a listed data path is not in the tree. While the PR is a draft,
the verification record may be a placeholder and the disclosure carries its
draft form; once it is marked ready for review, the check runs strict: an
unfilled record, a draft-form disclosure, or a missing `verified` label
(section 12) fails. A hand-written deliverable carries the human-written
disclosure form with `none` in the agent fields, and the check accepts that
shape in the agent fields only: the methodology pin, the data provenance, and
the verification record still apply and are checked, because the evidence rules
bind human work the same (HC-5, HC-7). The provenance regime describes agent
work; what it does not do is block the failure path's hand-written phase for
lacking an agent (section 12). Judgment stays human: CI proves the block is
present and well-formed, the approver confirms the verification behind it was
real (section 10).

The block is defined by this spec and layered above the template body, so the
methodology corpus and its templates are not modified (P-2, NG-4).

## 16. Build plan

The system is built the way it runs. Each component in section 13 starts as a
tracking issue in cncf/techdocs, is drafted by the cloud agent where a file is
the deliverable, and lands through a human-reviewed PR: the same
issue-to-draft-to-review loop the assessments will use (section 5). Building the
system with its own loop is the point: by the time the first project is
assessed, every role has rehearsed and the platform's behavior has been observed
rather than assumed. The earliest steps run before the instructions and
environment components exist; the loop holds anyway, just with less scaffolding.

Preflight, before any build step: the administrator/platform owner works through
the preconditions in section 11: cloud agent and MCP policies enabled for
cncf/techdocs, MCP left at its read-only default, writer access confirmed, and
the credit cap reviewed. These are organization and repository settings, not
files, so this step is recorded in its tracking issue rather than a PR.

The build steps, in dependency order, each sized to one issue:

1. Labels (`.github/settings.yml`). Deliberately trivial first delegation: its
   real product is observed platform behavior: the agent's branch naming, what
   access review-comment revisions require, whether Actions runs on agent PRs
   wait for approval, and the token's effective scopes. Done when the labels
   exist and the observations are recorded against the section 17 checks.
2. Repository instructions (`.github/copilot-instructions.md`). Ground rules for
   any agent work in this repository, carrying the section 8 discipline. Done
   when merged after review against sections 8 and 14.
3. Intake template (`.github/ISSUE_TEMPLATE/assessment-request.yml`). Done when
   a dry-run request files cleanly, collecting the section 7 fields, the
   project's documentation domains for the firewall allowlist (section 11), and
   the up-front AI disclosure (HC-6).
4. Environment setup (`.github/workflows/copilot-setup-steps.yml`). Done when an
   agent session's logs show the prepared environment.
5. Data-collection scripts (`scripts/assessment/`). Done when running the
   committed command against a sample project twice yields the same committed
   outputs (HC-5), and a delegated session's draft PR contains the outputs its
   setup steps produced.
6. Provenance check (workflow plus `scripts/assessment/`). Done when a fixture
   PR with a malformed or unfilled block fails, a well-formed one passes, and
   the draft-versus-ready leniency behaves as section 15 specifies.
7. Agent profiles (`.github/agents/`, one PR per profile). The three drafters,
   then the verifier (section 14). Done when each profile, run against a
   fixture, writes only its declared outputs with the provenance block present,
   and the verifier's report correctly flags a planted unsupported claim.
8. Phase-advance workflow (`.github/workflows/assessment-phase.yml`). Done when
   a merged fixture PR opens the next phase's tracking issue, linked and
   unassigned, on both the default route and the phase B skip route, posts the
   transition on the intake issue and swaps its phase label, closes the intake
   on the final phase's merge, and, with two fixture assessments in flight,
   lands every action on the intake the merged PR links, never the other
   (section 12).
9. Command workflow (`.github/workflows/assessment-commands.yml` plus parser in
   `scripts/assessment/`). Done when each command performs its section 12
   actions for an authorized commenter, refuses an unauthorized one with a
   visible reply, `/ready` refuses without the `verified` label, `/confirm` from
   an intake-named stakeholder applies the `confirmed` label, a manually applied
   label is honored, and the parser's unit tests cover recognition, argument
   handling, and authorization decisions.
10. Approver-independence check (advisory; a build-plan candidate from section
    12). Comments when a phase's approver also drafted or reviewed it; never
    blocks. Done when it flags a staged violation, or explicitly deferred.

The build is complete when steps 1 through 9 are merged, the section 17
build-time checks have recorded answers, and one end-to-end walkthrough of the
section 5 lifecycle on a fixture project has run clean with a second fixture
assessment in flight, proving assessments do not cross (section 12). Then the
pilot is chosen, deliberately, per the caveat in section 10.

## 17. Open questions and future work

- Build-time checks. Platform behavior we could not verify from public
  documentation, to be answered by observation during the build (section 16) and
  recorded: the agent token's effective permission scopes (section 11); the
  agent's branch naming; whether review-comment revisions require write access
  (section 12); whether Actions runs on agent PRs wait for approval; whether a
  comment-triggered workflow can start the verifier against an existing PR, as
  `/verify` requires, and whether that invocation can carry the model choice the
  section 14 policy prefers (section 12); whether delegation reliably opens a
  draft pull request (section 11); whether assigning an issue to Copilot offers
  the choice of agent profile, or selection needs the Agents panel (section 12);
  how the assessment's target project reaches the setup steps that run
  collection, or whether collection needs a different trigger (section 13);
  whether a full phase A draft, with its setup-step collection sharing the
  envelope, fits the session cap or the drafting needs decomposing (section 11);
  whether effort level can be pinned in a profile or anywhere else, the one
  model-choice question the documentation leaves open (section 14); and whether
  the cloud-agent configuration read endpoint, in public preview as of this
  writing, returns the fields the snapshot needs and what credential the
  snapshot script must hold to call it (section 13).
- Filing issues into project repos. A separate, opt-in tool to create the
  backlog issues in a project's own repository (NG-2). Out of scope for phase
  one. It would be human-run with its own credential and the project's explicit
  opt-in, entirely outside the agent's trust boundary; HC-1 continues to bind
  the agent unchanged.
- Intake relationship. How the request template fits with the existing CNCF
  service desk and assistance-program intake (section 7), without a competing
  front door. Related: the contribute.cncf.io site needs a page for projects on
  requesting an assessment and what to expect, including the AI disclosure,
  updated as this process changes.
- AI-readiness criteria. Whether and how the criteria evolve for AI consumption
  (for example llms.txt), tracked in PR #357.
- Assessment-quality rubric. Define the meta-rubric that scores an assessment's
  quality, distinct from `criteria.md` (which scores a project's docs), and
  validate it by scoring the Flatcar, Knative, and Helm baselines to set a
  reference band (sections 2, 10). This work also sets any post-pilot sampling
  rule for verification, replacing the pilot's check-every-finding floor
  (section 10).
- Small-team staffing. Sustaining the approver separation (a phase's approver
  must be neither the drafter nor a reviewer of that phase; sections 4, 10) when
  the same few writers wear multiple hats, felt sooner now that assessments run
  concurrently (section 12).

---

[criteria]: https://github.com/cncf/techdocs/blob/main/docs/analysis/criteria.md
[howto]: https://github.com/cncf/techdocs/blob/main/docs/analysis/howto.md
[analysis-dir]: https://github.com/cncf/techdocs/tree/main/docs/analysis
[contribute-site-sync]:
  https://github.com/cncf/techdocs/blob/main/.github/workflows/trigger-contribute-site-netlify.yml
[copilot-blog]:
  https://contribute.cncf.io/blog/2025/12/16/github-copilot-enterprise-for-maintainers/
[cloud-agent-about]:
  https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent
[cloud-agent-firewall]:
  https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall
[cloud-agent-mcp]:
  https://docs.github.com/en/copilot/concepts/agents/cloud-agent/mcp-and-cloud-agent
[cloud-agent-env]:
  https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment
[cloud-agent-access]:
  https://docs.github.com/en/copilot/concepts/agents/cloud-agent/access-management
[cloud-agent-config-api]:
  https://docs.github.com/en/rest/copilot/copilot-cloud-agent-management
[custom-agents-config]:
  https://docs.github.com/en/copilot/reference/custom-agents-configuration
[k8s-issue-triage]: https://www.kubernetes.dev/docs/guide/issue-triage/
[mentoring-commands]:
  https://github.com/cncf/mentoring/blob/main/.github/workflows/lfx-proposal-approvals.yml
