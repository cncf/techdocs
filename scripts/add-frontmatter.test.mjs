import assert from 'node:assert/strict';
import { describe, it, mock } from 'node:test';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const scriptPath = path.join(__dirname, 'add-frontmatter.mjs');

/**
 * Run add-frontmatter.mjs against a fresh temp directory containing the
 * given docs/*.md fixtures, then return the resulting file contents.
 */
async function runOnFixture(fileContents) {
  const dir = await mkdtemp(path.join(tmpdir(), 'add-frontmatter-'));
  try {
    await mkdir(path.join(dir, 'docs'), { recursive: true });
    for (const [name, content] of Object.entries(fileContents)) {
      await writeFile(path.join(dir, 'docs', name), content);
    }

    execFileSync('node', [scriptPath], { cwd: dir });

    const results = {};
    for (const name of Object.keys(fileContents)) {
      results[name] = await readFile(path.join(dir, 'docs', name), 'utf-8');
    }
    return results;
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

describe('add-frontmatter.mjs', () => {
  it('resolves the glob dependency without crashing', () => {
    // Regression guard: the script previously threw
    // ERR_MODULE_NOT_FOUND for 'glob' immediately on startup because the
    // dependency had been dropped from package.json.
    assert.doesNotThrow(() => {
      execFileSync('node', [scriptPath], { cwd: tmpdir() });
    });
  });

  it('adds a title to a file with no frontmatter', async () => {
    const results = await runOnFixture({
      'no-frontmatter.md': '# Hello World\n\nSome content.\n',
    });
    assert.match(
      results['no-frontmatter.md'],
      /^---\ntitle: Hello World\n---\n/,
    );
    assert.match(results['no-frontmatter.md'], /Some content\./);
  });

  it('inserts a title above existing frontmatter keys when none is present', async () => {
    const results = await runOnFixture({
      'no-title.md':
        '---\ndescription: a page\n---\n\n# My Page\n\nBody text.\n',
    });
    assert.match(
      results['no-title.md'],
      /^---\ntitle: My Page\ndescription: a page\n---\n/,
    );
  });

  it('quotes a title that contains a colon', async () => {
    const results = await runOnFixture({
      'colon-title.md': '# Section: Details\n\nBody text.\n',
    });
    assert.match(
      results['colon-title.md'],
      /^---\ntitle: 'Section: Details'\n---\n/,
    );
  });

  it('leaves a file with no heading unchanged (warns instead of crashing)', async () => {
    const original = 'Just a paragraph with no heading.\n';
    const results = await runOnFixture({
      'no-heading.md': original,
    });
    assert.equal(results['no-heading.md'], original);
  });

  it('inserts a title into frontmatter that is present but empty', async () => {
    // Exercises the falsy branch of the `frontmatterWithoutTitle ? ... : ''`
    // ternary: frontmatter exists (so the title-less remainder is rebuilt
    // from it) but has no other keys to preserve alongside the new title.
    const results = await runOnFixture({
      'empty-frontmatter.md': '---\n\n---\n\n# My Page\n\nBody text.\n',
    });
    assert.match(
      results['empty-frontmatter.md'],
      /^---\ntitle: My Page\n---\n\n# My Page\n\nBody text\.\n$/,
    );
  });

  it('skips a file whose frontmatter title already matches the heading', async () => {
    const original = '---\ntitle: My Page\n---\n\n# My Page\n\nBody text.\n';
    const results = await runOnFixture({
      'matching-title.md': original,
    });
    assert.equal(results['matching-title.md'], original);
  });

  it('reports an error instead of crashing when a file cannot be read', async () => {
    const dir = await mkdtemp(path.join(tmpdir(), 'add-frontmatter-'));
    try {
      // Create a directory named "broken.md" so readFile() rejects with
      // EISDIR, exercising processFile()'s catch block.
      await mkdir(path.join(dir, 'docs', 'broken.md'), { recursive: true });

      const result = spawnSync('node', [scriptPath], {
        cwd: dir,
        encoding: 'utf8',
      });
      assert.match(result.stderr, /Error processing docs\/broken\.md/);
    } finally {
      await rm(dir, { recursive: true, force: true });
    }
  });

  it("reports an error instead of crashing when the glob dependency's call itself rejects", async () => {
    // Exercises main()'s own top-level try/catch (distinct from
    // processFile()'s per-file catch above), which is otherwise unreachable
    // because glob() never rejects for missing/unreadable directories -
    // mock the dependency to force the failure path deterministically.
    const globMock = mock.module('glob', {
      exports: {
        glob: async () => {
          throw new Error('boom');
        },
      },
    });
    const exitMock = mock.method(process, 'exit', () => {});
    const errorMock = mock.method(console, 'error', () => {});
    try {
      // Cache-bust so re-running this test file re-executes main().
      await import(`${url.pathToFileURL(scriptPath).href}?t=${Date.now()}`);
      // main()'s async body needs a tick to run past its awaited glob() call.
      await new Promise((resolve) => setTimeout(resolve, 0));

      assert.deepEqual(exitMock.mock.calls[0]?.arguments, [1]);
      assert.equal(errorMock.mock.calls[0]?.arguments[0], 'Error:');
      assert.match(errorMock.mock.calls[0]?.arguments[1]?.message, /boom/);
    } finally {
      globMock.restore();
      exitMock.mock.restore();
      errorMock.mock.restore();
    }
  });
});
