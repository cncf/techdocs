# AI agent readiness - Website and Infrastructure

- Display name: AI Agent Readiness
- File stem: agent-readiness

## Questions

- Does the documentation site publish an `llms.txt` file at the site or docs
  root that follows the llmstxt.org structure (H1 title, blockquote summary, H2
  sections of link lists)?
- Do all links in `llms.txt` resolve, point to Markdown versions of pages, and
  stay in sync with the published site (for example, generated at build time)?
- Do HTML and Markdown pages include a directive near the top pointing agents to
  `llms.txt`?
- Is a clean Markdown version of each page served at the same URL with `.md`
  appended or substituted, with content matching the HTML version?
- Are pages rendered server-side or statically generated, with the main content
  starting near the top of the response rather than behind large navigation or
  script payloads?
- Are pages small enough to avoid truncation in an agent's context window, and
  do tabbed components and code fences serialize cleanly to Markdown?
- Is the documentation publicly reachable without authentication gates or CDN
  bot challenges, and do pages use correct HTTP status codes and standard HTTP
  redirects?
- Does the project monitor its CLOMonitor "Agent readiness" checks or run
  `afdocs check` against the site, ideally in CI?

## Comment guidance

- Additional instructions: Reference sources for this area are the llms.txt
  specification (https://llmstxt.org/), the CLOMonitor agent readiness checks
  (https://clomonitor.io/docs/topics/checks/#agent-readiness), and the AFDocs
  Agent-Friendly Documentation Spec (https://afdocs.dev/). Where possible,
  verify by fetching the live site (`/llms.txt`, a page URL with `.md` appended)
  rather than relying on the repository source alone.
