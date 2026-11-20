import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

// Guards against `npm test` quietly dropping the e2e suite again: `test:e2e`
// has no CI workflow invoking it (tracked separately in #415-#417, which are
// blocked on workflow-file write permission), so the package.json `test`
// script is the only thing that currently exercises it at all. If `test`
// stopped calling `test:e2e`, a regression in the real `docusaurus build`
// wiring (e.g. the link-rewrite plugins) could merge silently even when a
// maintainer runs `npm test` locally, since nothing else would ever invoke
// e2e/*.test.mjs.
test('npm test invokes the e2e suite', async () => {
  const packageJsonPath = path.resolve('package.json');
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
  const script = packageJson.scripts['test'];

  assert.ok(script, 'test script must exist in package.json');
  assert.match(
    script,
    /\bnpm run test:e2e\b/,
    'test script must invoke "npm run test:e2e" so the e2e suite runs whenever "npm test" does',
  );
});
