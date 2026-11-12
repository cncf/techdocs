import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { execFileSync } from 'node:child_process';
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
});
