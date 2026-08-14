import fs from 'node:fs';
import path from 'node:path';
import { sha256Hex } from './util.mjs';

const MARKDOWN_EXTENSIONS = new Set(['.md', '.mdx', '.markdown']);
const SKIPPED_DIRECTORIES = new Set(['.git', 'node_modules']);

function walk(root, rel, paths) {
  const entries = fs.readdirSync(path.join(root, rel), {
    withFileTypes: true,
  });
  for (const entry of entries) {
    if (entry.isSymbolicLink()) continue;
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (!SKIPPED_DIRECTORIES.has(entry.name)) walk(root, relPath, paths);
    } else if (entry.isFile()) {
      paths.push(relPath);
    }
  }
}

export function buildInventory(root) {
  const paths = [];
  walk(root, '', paths);
  paths.sort();
  const files = paths.map((relPath) => {
    const content = fs.readFileSync(path.join(root, relPath));
    return { path: relPath, bytes: content.length, sha256: sha256Hex(content) };
  });
  const byExtension = {};
  let markdownCount = 0;
  for (const file of files) {
    const ext = path.posix.extname(file.path).toLowerCase();
    if (ext) byExtension[ext] = (byExtension[ext] ?? 0) + 1;
    if (MARKDOWN_EXTENSIONS.has(ext)) markdownCount += 1;
  }
  return {
    files,
    totals: {
      fileCount: files.length,
      byteCount: files.reduce((n, f) => n + f.bytes, 0),
      markdownCount,
      byExtension,
    },
  };
}

export function markdownPaths(inventory) {
  return inventory.files
    .map((f) => f.path)
    .filter((p) =>
      MARKDOWN_EXTENSIONS.has(path.posix.extname(p).toLowerCase()),
    );
}
