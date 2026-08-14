import fs from 'node:fs';
import path from 'node:path';

const INLINE_LINK = /!?\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const REFERENCE_DEFINITION = /^\s*\[[^\]]+\]:\s*(\S+)/gm;
const AUTOLINK = /<(https?:\/\/[^>\s]+)>/g;

function classify(url) {
  if (url.startsWith('#')) return 'anchor';
  if (/^https?:\/\//i.test(url)) return 'external';
  return 'internal';
}

export function extractLinks(markdown) {
  const urls = new Set();
  for (const pattern of [INLINE_LINK, REFERENCE_DEFINITION, AUTOLINK]) {
    for (const match of markdown.matchAll(pattern)) {
      urls.add(match[1]);
    }
  }
  return [...urls].sort().map((url) => ({ url, kind: classify(url) }));
}

export function buildLinkReport(root, markdownRelPaths) {
  const perFile = {};
  const byKind = {
    external: new Set(),
    internal: new Set(),
    anchor: new Set(),
  };
  for (const relPath of markdownRelPaths) {
    const links = extractLinks(
      fs.readFileSync(path.join(root, relPath), 'utf8'),
    );
    perFile[relPath] = links;
    for (const link of links) byKind[link.kind].add(link.url);
  }
  return {
    perFile,
    external: [...byKind.external].sort(),
    internal: [...byKind.internal].sort(),
    anchors: [...byKind.anchor].sort(),
  };
}
