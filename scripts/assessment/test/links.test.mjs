import { test } from 'node:test';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildLinkReport, extractLinks } from '../lib/links.mjs';

const fixture = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'fixtures',
  'sample-project',
);

test('extractLinks finds inline links, images, references, autolinks', () => {
  const md = [
    '[a](https://x.test/a) ![i](./img.png) [r][ref] <https://x.test/auto>',
    '[anchor](#top) [rel](./doc.md)',
    '[ref]: https://x.test/ref',
  ].join('\n');
  const links = extractLinks(md);
  assert.deepEqual(links, [
    { url: '#top', kind: 'anchor' },
    { url: './doc.md', kind: 'internal' },
    { url: './img.png', kind: 'internal' },
    { url: 'https://x.test/a', kind: 'external' },
    { url: 'https://x.test/auto', kind: 'external' },
    { url: 'https://x.test/ref', kind: 'external' },
  ]);
});

test('extractLinks dedupes repeated urls', () => {
  const links = extractLinks('[a](https://x.test/a) [b](https://x.test/a)');
  assert.equal(links.length, 1);
});

test('extractLinks ignores links inside fenced code blocks', () => {
  const md = [
    'Before [real](https://x.test/real).',
    '```markdown',
    '[fenced](https://x.test/fenced)',
    '```',
    '~~~',
    '[tilde](https://x.test/tilde)',
    '~~~',
    'After.',
  ].join('\n');
  assert.deepEqual(
    extractLinks(md).map((l) => l.url),
    ['https://x.test/real'],
  );
});

test('extractLinks treats an unclosed fence as running to the end', () => {
  const md = [
    '[real](https://x.test/real)',
    '```',
    '[fenced](https://x.test/fenced)',
  ].join('\n');
  assert.deepEqual(
    extractLinks(md).map((l) => l.url),
    ['https://x.test/real'],
  );
});

test('extractLinks ignores links inside inline code spans', () => {
  const md =
    'Use `[example](https://x.test/span)` then see [real](https://x.test/real).';
  assert.deepEqual(
    extractLinks(md).map((l) => l.url),
    ['https://x.test/real'],
  );
});

test('extractLinks reads angle-bracket destinations', () => {
  const links = extractLinks('[spaced](<./my page.md>)');
  assert.deepEqual(links, [{ url: './my page.md', kind: 'internal' }]);
});

test('buildLinkReport aggregates per file and by kind', () => {
  const report = buildLinkReport(fixture, ['README.md', 'docs/guide.md']);
  assert.deepEqual(Object.keys(report.perFile), ['README.md', 'docs/guide.md']);
  assert.deepEqual(report.external, [
    'https://example.com/a',
    'https://example.com/b',
    'https://example.com/c',
  ]);
  assert.deepEqual(report.internal, ['./assets/sample.png', './docs/guide.md']);
  assert.deepEqual(report.anchors, ['#section']);
});
