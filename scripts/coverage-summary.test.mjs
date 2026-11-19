import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { execFileSync } from 'node:child_process';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const scriptPath = path.join(__dirname, 'coverage-summary.mjs');

const SAMPLE_SUMMARY = {
  total: {
    lines: { total: 10, covered: 10, skipped: 0, pct: 100 },
    statements: { total: 10, covered: 10, skipped: 0, pct: 100 },
    functions: { total: 2, covered: 2, skipped: 0, pct: 100 },
    branches: { total: 4, covered: 3, skipped: 0, pct: 75 },
  },
  '/repo/lib/example.ts': {
    lines: { total: 10, covered: 10, skipped: 0, pct: 100 },
    statements: { total: 10, covered: 10, skipped: 0, pct: 100 },
    functions: { total: 2, covered: 2, skipped: 0, pct: 100 },
    branches: { total: 4, covered: 3, skipped: 0, pct: 75 },
  },
};

async function withFixtureDir(fn) {
  const dir = await mkdtemp(path.join(tmpdir(), 'coverage-summary-'));
  try {
    await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

describe('coverage-summary.mjs', () => {
  it('renders a Markdown table with a Total row and per-file rows', async () => {
    await withFixtureDir(async (dir) => {
      await mkdir(path.join(dir, 'coverage'), { recursive: true });
      const summaryPath = path.join(dir, 'coverage', 'coverage-summary.json');
      const summary = {
        ...SAMPLE_SUMMARY,
        [path.join(dir, 'lib', 'example.ts')]:
          SAMPLE_SUMMARY['/repo/lib/example.ts'],
      };
      delete summary['/repo/lib/example.ts'];
      await writeFile(summaryPath, JSON.stringify(summary));

      const output = execFileSync(
        'node',
        [scriptPath, 'coverage/coverage-summary.json'],
        { cwd: dir, encoding: 'utf-8' },
      );

      assert.match(
        output,
        /\| File \| Lines \| Statements \| Branches \| Functions \|/,
      );
      assert.match(output, /\*\*Total\*\* \| 100% \| 100% \| 75% \| 100%/);
      assert.match(
        output,
        /lib[\\/]example\.ts \| 100% \| 100% \| 75% \| 100%/,
      );
    });
  });

  it('defaults to coverage/coverage-summary.json when no path is given', async () => {
    await withFixtureDir(async (dir) => {
      await mkdir(path.join(dir, 'coverage'), { recursive: true });
      await writeFile(
        path.join(dir, 'coverage', 'coverage-summary.json'),
        JSON.stringify(SAMPLE_SUMMARY),
      );

      const output = execFileSync('node', [scriptPath], {
        cwd: dir,
        encoding: 'utf-8',
      });
      assert.match(output, /\*\*Total\*\*/);
    });
  });

  it('reports a clear error instead of a raw stack trace when the file is missing', async () => {
    await withFixtureDir((dir) => {
      assert.throws(
        () =>
          execFileSync('node', [scriptPath, 'coverage/missing.json'], {
            cwd: dir,
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'pipe'],
          }),
        (error) => {
          assert.match(error.stderr, /Could not read coverage summary/);
          return true;
        },
      );
    });
  });

  it('reports a clear error when the file is not valid JSON', async () => {
    await withFixtureDir(async (dir) => {
      await mkdir(path.join(dir, 'coverage'), { recursive: true });
      await writeFile(
        path.join(dir, 'coverage', 'coverage-summary.json'),
        'not json',
      );

      assert.throws(
        () =>
          execFileSync('node', [scriptPath], {
            cwd: dir,
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'pipe'],
          }),
        (error) => {
          assert.match(error.stderr, /is not valid JSON/);
          return true;
        },
      );
    });
  });

  it('reports a clear error when the JSON has no "total" entry', async () => {
    await withFixtureDir(async (dir) => {
      await mkdir(path.join(dir, 'coverage'), { recursive: true });
      await writeFile(
        path.join(dir, 'coverage', 'coverage-summary.json'),
        JSON.stringify({ '/repo/lib/example.ts': SAMPLE_SUMMARY.total }),
      );

      assert.throws(
        () =>
          execFileSync('node', [scriptPath], {
            cwd: dir,
            encoding: 'utf-8',
            stdio: ['ignore', 'pipe', 'pipe'],
          }),
        (error) => {
          assert.match(error.stderr, /has no "total" entry/);
          return true;
        },
      );
    });
  });
});
