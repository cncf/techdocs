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
// `Config['markdown']` is typed as `DeepPartial<MarkdownConfig> | undefined`
// (only title/url/baseUrl/future are required on Config), so TS can't infer
// that this repo's docusaurus.config.ts always defines markdown.preprocessor
// without these runtime assertions narrowing the type first.
assert.ok(config.markdown, 'docusaurus.config.ts must define a markdown config');
const { preprocessor } = config.markdown;
assert.ok(preprocessor, 'docusaurus.config.ts must define markdown.preprocessor');
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

  await t.test('leaves non-README imports untouched', () => {
    const fileContent = 'See [docs](/docs/foo.md).';
    const result = preprocessor({
      fileContent,
      filePath: path.resolve('docs/other.md'),
    });

    assert.equal(result, fileContent);
  });
});
