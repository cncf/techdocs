import fs from 'node:fs';
import path from 'node:path';
import { sha256Hex } from './util.mjs';

const MARKDOWN_EXTENSIONS = new Set(['.md', '.mdx', '.markdown']);
const SKIPPED_DIRECTORIES = new Set(['.git', 'node_modules']);

function walk(root, rel, { files, symlinks, exclude }) {
  const entries = fs.readdirSync(path.join(root, rel), {
    withFileTypes: true,
  });
  for (const entry of entries) {
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (exclude.has(relPath)) continue;
    if (entry.isSymbolicLink()) {
      // Recorded, never followed: the link target string is the
      // content, so links pointing outside the repository cannot pull
      // outside bytes into the inventory.
      symlinks.push(relPath);
    } else if (entry.isDirectory()) {
      if (!SKIPPED_DIRECTORIES.has(entry.name)) {
        walk(root, relPath, { files, symlinks, exclude });
      }
    } else if (entry.isFile()) {
      files.push(relPath);
    }
  }
}

export function buildInventory(root, { exclude = [] } = {}) {
  const filePaths = [];
  const symlinkPaths = [];
  walk(root, '', {
    files: filePaths,
    symlinks: symlinkPaths,
    exclude: new Set(exclude),
  });
  filePaths.sort();
  symlinkPaths.sort();
  const files = filePaths.map((relPath) => {
    const content = fs.readFileSync(path.join(root, relPath));
    return { path: relPath, bytes: content.length, sha256: sha256Hex(content) };
  });
  const symlinks = symlinkPaths.map((relPath) => {
    const target = fs.readlinkSync(path.join(root, relPath));
    return {
      path: relPath,
      target,
      bytes: Buffer.byteLength(target),
      sha256: sha256Hex(target),
    };
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
    symlinks,
    totals: {
      fileCount: files.length,
      symlinkCount: symlinks.length,
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
