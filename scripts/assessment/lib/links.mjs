import fs from 'node:fs';
import path from 'node:path';

// Deliberate limitations, documented rather than hidden: destinations
// with unescaped parentheses need the angle-bracket form to be seen,
// and indented (non-fenced) code blocks are still scanned. A markdown
// AST would lift both at the cost of a new dependency.
const INLINE_LINK = /!?\[[^\]]*\]\(([^)\s<][^)\s]*)(?:\s+"[^"]*")?\)/g;
const ANGLE_LINK = /!?\[[^\]]*\]\(<([^>]+)>(?:\s+"[^"]*")?\)/g;
const REFERENCE_DEFINITION = /^\s*\[[^\]]+\]:\s*(\S+)/gm;
const AUTOLINK = /<(https?:\/\/[^>\s]+)>/g;

const FENCE = /^ {0,3}(`{3,}|~{3,})/;

// Blanks out fenced code blocks and inline code spans so example
// links inside them (common in documentation about documentation) do
// not pollute the inventory.
function stripCodeRegions(markdown) {
  const out = [];
  let fence = null;
  for (const line of markdown.split('\n')) {
    const opener = line.match(FENCE);
    if (fence) {
      if (
        opener &&
        opener[1][0] === fence[0] &&
        opener[1].length >= fence.length
      ) {
        fence = null;
      }
      out.push('');
    } else if (opener) {
      fence = opener[1];
      out.push('');
    } else {
      out.push(line.replace(/(`+)[^`]*\1/g, ' '));
    }
  }
  return out.join('\n');
}

function classify(url) {
  if (url.startsWith('#')) return 'anchor';
  if (/^https?:\/\//i.test(url)) return 'external';
  return 'internal';
}

export function extractLinks(markdown) {
  const source = stripCodeRegions(markdown);
  const urls = new Set();
  for (const pattern of [
    INLINE_LINK,
    ANGLE_LINK,
    REFERENCE_DEFINITION,
    AUTOLINK,
  ]) {
    for (const match of source.matchAll(pattern)) {
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
