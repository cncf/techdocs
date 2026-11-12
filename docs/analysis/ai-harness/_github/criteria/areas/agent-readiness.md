# AI agent readiness - Website and Infrastructure

- Display name: AI Agent Readiness
- File stem: agent-readiness

## Questions

- Does the documentation site publish an `llms.txt` file at the site root or
  docs root?
- Does `llms.txt` follow the llmstxt.org structure (H1 title, blockquote
  summary, H2 sections of link lists)?
- Do all links in `llms.txt` resolve?
- Do links in `llms.txt` point to Markdown versions of pages?
- Is `llms.txt` generated at build time or otherwise kept in sync with the
  published site?
- Do HTML and Markdown pages include a directive near the top pointing agents to
  `llms.txt`?
- Is a Markdown version of each page served at the same URL with `.md` appended
  or substituted?
- Does the Markdown version of each page contain the same content as the HTML
  version?
- Are pages rendered server-side or statically generated rather than assembled
  by client-side JavaScript?
- Does the main content of each page start near the top of the response rather
  than behind large navigation or script payloads?
- Are pages small enough to avoid truncation in an agent's context window?
- Do tabbed components and code fences serialize cleanly to Markdown?
- Is the documentation publicly reachable without authentication gates?
- Is the documentation reachable without CDN bot challenges?
- Do pages return correct HTTP status codes?
- Do moved pages use standard HTTP redirects?
- Does the project monitor its CLOMonitor "Agent readiness" checks?
- Does the project run `afdocs check` against the site?
- Does the project run agent readiness checks in CI?

## Comment guidance

- Additional instructions: Reference sources for this area are the llms.txt
  specification (https://llmstxt.org/), the CLOMonitor agent readiness checks
  (https://clomonitor.io/docs/topics/checks/#agent-readiness), and the AFDocs
  Agent-Friendly Documentation Spec (https://afdocs.dev/). Where possible,
  verify by fetching the live site (`/llms.txt`, a page URL with `.md` appended)
  rather than relying on the repository source alone.
