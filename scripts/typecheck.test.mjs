import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');

describe('npm run typecheck', () => {
  it('runs tsc against tsconfig.json without TS5102 (removed baseUrl option)', () => {
    const result = spawnSync('npx', ['tsc', '--noEmit'], {
      cwd: repoRoot,
      encoding: 'utf-8',
    });

    assert.equal(
      result.status,
      0,
      `tsc exited with ${result.status}:\n${result.stdout}${result.stderr}`,
    );
  });
});
