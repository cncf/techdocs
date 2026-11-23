# Contributing

Thanks for contributing to CNCF TechDocs! This page covers the project's test
suite: how to run it and how to extend it when you add code.

## Running tests

- `npm run test:unit` - runs unit tests (`node --test`) over `lib/**/*.test.mts`
  and `scripts/**/*.test.mjs`.
- `npm run test:coverage` - runs `test:unit` under c8, gated at 100%
  lines/statements/branches/functions. A drop below 100% fails the gate.
- `npm run test:e2e` - runs the end-to-end suite (`e2e/**/*.test.mjs`), which
  performs real `docusaurus build`s to exercise plugin and build-context wiring
  (for example link rewriting and `editUrl`/`url` computation).
- `npm test` - runs `check` (format/markdown/links/spelling), `test:unit`, and
  `test:e2e` together.
- `npm run typecheck` - type-checks the project with `tsc`.

## Adding tests for new code

- New files under `lib/` (`.mts`) or `scripts/` (`.mjs`) require a shared
  location with a `*.test.mts` / `*.test.mjs` file. `npm run test:coverage`
  enforces a 100% coverage gate, so an uncovered line, branch, or function fails
  that gate when you run it locally before opening a PR. CI itself only runs
  format/link/markdown/spelling checks today; it does not yet run `test:unit`,
  `test:coverage`, or `test:e2e` (see #415).
- If your change affects the production build pipeline (plugins,
  `docusaurus.config.ts`, sidebars), consider adding or extending an end-to-end
  test in `e2e/` that runs the real build, in addition to any unit tests.
