import fs from 'node:fs';
import path from 'node:path';
import { sha256Hex, stableStringify } from './util.mjs';

export const MANIFEST_NAME = 'manifest.json';

export function buildManifest({ command, repos, sites, outputs }) {
  const hashed = {};
  for (const name of Object.keys(outputs).sort()) {
    const content = Buffer.from(outputs[name]);
    hashed[name] = { bytes: content.length, sha256: sha256Hex(content) };
  }
  return { command, sources: { repos, sites }, outputs: hashed };
}

export function writeCollection(dir, { command, repos, sites, outputs }) {
  const manifest = buildManifest({ command, repos, sites, outputs });
  for (const [name, content] of Object.entries(outputs)) {
    const target = path.join(dir, name);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  }
  fs.writeFileSync(
    path.join(dir, MANIFEST_NAME),
    stableStringify(manifest) + '\n',
  );
  return manifest;
}

export function verifyManifest(dir) {
  const manifest = JSON.parse(
    fs.readFileSync(path.join(dir, MANIFEST_NAME), 'utf8'),
  );
  const mismatched = [];
  const missing = [];
  for (const name of Object.keys(manifest.outputs).sort()) {
    const target = path.join(dir, name);
    if (!fs.existsSync(target)) {
      missing.push(name);
      continue;
    }
    if (sha256Hex(fs.readFileSync(target)) !== manifest.outputs[name].sha256) {
      mismatched.push(name);
    }
  }
  return {
    ok: mismatched.length === 0 && missing.length === 0,
    mismatched,
    missing,
  };
}
