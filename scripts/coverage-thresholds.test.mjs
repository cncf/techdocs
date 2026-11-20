import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

// Guards against the test:coverage gate quietly loosening again: this repo's
// actual coverage is 100% stmts/branch/func/line on every included file (see
// `npm run test:coverage`), so the c8 thresholds should require exactly that.
// A threshold below 100 would let a real regression (e.g. an untested branch)
// merge silently once CI runs test:coverage.
test('test:coverage enforces 100% coverage thresholds', async () => {
  const packageJsonPath = path.resolve('package.json');
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
  const script = packageJson.scripts['test:coverage'];

  assert.ok(script, 'test:coverage script must exist in package.json');

  for (const metric of ['lines', 'statements', 'branches', 'functions']) {
    const match = script.match(new RegExp(`--${metric}\\s+(\\d+)`));
    assert.ok(match, `--${metric} threshold flag must be present`);
    assert.equal(
      Number(match[1]),
      100,
      `--${metric} threshold should be 100 to match actual coverage`,
    );
  }
});

// docusaurus.config.ts is fully exercised by
// lib/docusaurusConfigPreprocessor.test.mts and
// lib/docusaurusConfigBuildContext.test.mts (both import the real file via
// testHelpers/resolveExtensionlessTs.mjs), so excluding it from the c8 gate
// is a stale blind spot: new untested code added to that file would pass
// `npm run test:coverage` silently instead of failing it.
test('test:coverage does not exclude docusaurus.config.ts from the gate', async () => {
  const packageJsonPath = path.resolve('package.json');
  const packageJson = JSON.parse(await readFile(packageJsonPath, 'utf-8'));
  const script = packageJson.scripts['test:coverage'];

  assert.ok(script, 'test:coverage script must exist in package.json');
  assert.ok(
    !script.includes('docusaurus.config.ts'),
    'test:coverage should not --exclude docusaurus.config.ts; it is unit-tested and should be gated',
  );
});
