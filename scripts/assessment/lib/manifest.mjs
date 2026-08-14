import fs from 'node:fs';
import path from 'node:path';
import { sha256Hex, stableStringify } from './util.mjs';

export const MANIFEST_NAME = 'manifest.json';

function hashEntry(content) {
  const buf = Buffer.from(content);
  return { bytes: buf.length, sha256: sha256Hex(buf) };
}

export function buildManifest({ commands, repos, sites, outputs }) {
  const hashed = {};
  for (const name of Object.keys(outputs).sort()) {
    hashed[name] = hashEntry(outputs[name]);
  }
  return { commands, sources: { repos, sites }, outputs: hashed };
}

function writeManifest(dir, manifest) {
  fs.writeFileSync(
    path.join(dir, MANIFEST_NAME),
    stableStringify(manifest) + '\n',
  );
}

export function writeCollection(dir, { commands, repos, sites, outputs }) {
  const manifest = buildManifest({ commands, repos, sites, outputs });
  for (const [name, content] of Object.entries(outputs)) {
    const target = path.join(dir, name);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  }
  writeManifest(dir, manifest);
  return manifest;
}

// Adds one output produced by a separate step (for example the agent
// configuration snapshot) to an existing collection, seeding a fresh
// manifest when none exists. Commands are kept sorted and unique so
// repeated runs stay byte-identical; names in `remove` lose both
// their file and their manifest entry, keeping superseded evidence
// out of the record.
export function upsertOutput(dir, { command, name, content, remove = [] }) {
  const manifestPath = path.join(dir, MANIFEST_NAME);
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
    : { commands: [], sources: { repos: [], sites: [] }, outputs: {} };
  manifest.commands = [...new Set([...manifest.commands, command])].sort();
  for (const staleName of remove) {
    delete manifest.outputs[staleName];
    fs.rmSync(path.join(dir, staleName), { force: true });
  }
  const target = path.join(dir, name);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
  manifest.outputs[name] = hashEntry(content);
  writeManifest(dir, manifest);
  return manifest;
}

function walkFiles(dir, rel, found) {
  for (const entry of fs.readdirSync(path.join(dir, rel), {
    withFileTypes: true,
  })) {
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) walkFiles(dir, relPath, found);
    else found.push(relPath);
  }
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
  const present = [];
  walkFiles(dir, '', present);
  const listed = new Set([...Object.keys(manifest.outputs), MANIFEST_NAME]);
  const unexpected = present.filter((name) => !listed.has(name)).sort();
  return {
    ok:
      mismatched.length === 0 &&
      missing.length === 0 &&
      unexpected.length === 0,
    mismatched,
    missing,
    unexpected,
  };
}
