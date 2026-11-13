import { registerHooks } from 'node:module';
import path from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from './testHelpers/resolveExtensionlessTs.mjs';

// docusaurus.config.ts imports its ./lib/* helpers without file extensions,
// which only Docusaurus's own webpack bundler resolves. Register a
// test-only hook (see testHelpers/resolveExtensionlessTs.mjs) so this file
// can import the real docusaurus.config.ts directly, instead of duplicating
// its markdown.preprocessor logic.
registerHooks({ resolve });

const { default: config } = await import('../docusaurus.config.ts');
const { preprocessor } = config.markdown;
const importedReadmePath = path.resolve('README.md');

test('markdown.preprocessor (root README.md import)', async (t) => {
  await t.test('strips .md from /docs and /analyses links', () => {
    const result = preprocessor({
      fileContent:
        'See [docs](/docs/foo.md) and [analyses](/analyses/bar.md#section).',
      filePath: importedReadmePath,
    });

    assert.equal(
      result,
      'See [docs](/docs/foo/) and [analyses](/analyses/bar/#section).',
    );
  });

  await t.test('strips .md from reference-style link definitions', () => {
    const result = preprocessor({
      fileContent: 'See [docs][1].\n\n[1]: /docs/foo.md',
      filePath: importedReadmePath,
    });

    assert.equal(result, 'See [docs][1].\n\n[1]: /docs/foo/');
  });

  await t.test('leaves non-README imports untouched', () => {
    const fileContent = 'See [docs](/docs/foo.md).';
    const result = preprocessor({
      fileContent,
      filePath: path.resolve('docs/other.md'),
    });

    assert.equal(result, fileContent);
  });
});
