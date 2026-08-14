#!/usr/bin/env node
// Deterministic data collection for documentation assessments.
// Inventories one or more repository checkouts, extracts markdown
// links, optionally fetches sites and checks external links, and
// writes a content-hash manifest so every quantitative claim traces
// to a committed, re-runnable step and post-collection edits are
// detectable.
//
//   node scripts/assessment/collect.mjs --repo <path> [--repo <path>]
//     [--site <url>] [--check-links] --out <dir>
//   node scripts/assessment/collect.mjs verify --out <dir>

import path from 'node:path';
import process from 'node:process';
import { buildInventory, markdownPaths } from './lib/inventory.mjs';
import { buildLinkReport } from './lib/links.mjs';
import { resolveHeadSha } from './lib/git.mjs';
import { checkLinks, fetchSites } from './lib/sitefetch.mjs';
import { verifyManifest, writeCollection } from './lib/manifest.mjs';
import { stableStringify } from './lib/util.mjs';

const USAGE =
  'usage: collect.mjs [verify] --repo <path> [--site <url>] [--check-links] --out <dir>';

function takeValue(argv, i, flag) {
  const value = argv[i + 1];
  if (value == null || value.startsWith('--')) {
    throw new Error(`missing value for ${flag}`);
  }
  return value;
}

function parseArgs(argv) {
  const args = {
    verify: false,
    repos: [],
    sites: [],
    checkLinks: false,
    out: null,
  };
  let i = 0;
  if (argv[0] === 'verify') {
    args.verify = true;
    i = 1;
  }
  while (i < argv.length) {
    const flag = argv[i];
    if (flag === '--repo') {
      args.repos.push(takeValue(argv, i, flag));
      i += 2;
    } else if (flag === '--site') {
      args.sites.push(takeValue(argv, i, flag));
      i += 2;
    } else if (flag === '--out') {
      args.out = takeValue(argv, i, flag);
      i += 2;
    } else if (flag === '--check-links') {
      args.checkLinks = true;
      i += 1;
    } else throw new Error(`unknown flag: ${flag}`);
  }
  if (!args.out) throw new Error('missing --out');
  if (!args.verify && args.repos.length === 0 && args.sites.length === 0) {
    throw new Error('nothing to collect: pass --repo or --site');
  }
  for (const repoPath of args.repos) {
    if (outputRelPath(repoPath, args.out) === '') {
      throw new Error('--out must not be a repository root');
    }
  }
  return args;
}

// Relative posix path of the output directory inside a repository, so
// a rerun never inventories its own previous outputs; null when the
// output directory lives outside the repository.
function outputRelPath(repoPath, out) {
  const rel = path.relative(path.resolve(repoPath), path.resolve(out));
  if (rel === '') return '';
  if (rel.startsWith('..') || path.isAbsolute(rel)) return null;
  return rel.split(path.sep).join('/');
}

// The manifest records the command without --out: the output location
// is wherever the manifest lives, and omitting it keeps two runs into
// different directories byte-identical.
function commandLine(args) {
  const parts = ['collect.mjs'];
  for (const repo of args.repos) parts.push('--repo', repo);
  for (const site of args.sites) parts.push('--site', site);
  if (args.checkLinks) parts.push('--check-links');
  return parts.join(' ');
}

async function collect(args) {
  const outputs = {};
  const repos = [];
  const repoReports = [];
  const linkReports = [];
  for (const repoPath of args.repos) {
    const excludeRel = outputRelPath(repoPath, args.out);
    const inventory = buildInventory(repoPath, {
      exclude: excludeRel ? [excludeRel] : [],
    });
    const report = buildLinkReport(repoPath, markdownPaths(inventory));
    repos.push({ path: repoPath, sha: resolveHeadSha(repoPath) });
    repoReports.push({ path: repoPath, ...inventory });
    linkReports.push({ path: repoPath, ...report });
  }
  outputs['inventory.json'] = stableStringify({ repos: repoReports }) + '\n';
  outputs['links.json'] = stableStringify({ repos: linkReports }) + '\n';

  const sites = [];
  if (args.sites.length > 0) {
    const fetched = await fetchSites(args.sites);
    fetched.forEach((entry, index) => {
      const { body, ...meta } = entry;
      if (body) {
        // A body implies the fetch succeeded, so the URL parses; on
        // failure the entry (including an unparseable URL) is written
        // through as evidence untouched.
        const host = new URL(entry.url).host;
        const name = `sites/${String(index + 1).padStart(3, '0')}-${host}.body`;
        outputs[name] = body;
        meta.bodyFile = name;
      }
      sites.push(meta);
    });
    outputs['site-fetches.json'] = stableStringify({ sites }) + '\n';
  }

  if (args.checkLinks) {
    const external = [
      ...new Set(linkReports.flatMap((report) => report.external)),
    ].sort();
    outputs['link-status.json'] =
      stableStringify({ checked: await checkLinks(external) }) + '\n';
  }

  writeCollection(args.out, {
    commands: [commandLine(args)],
    repos,
    sites,
    outputs,
  });
  process.stdout.write(`collected into ${args.out}\n`);
}

function verify(args) {
  const result = verifyManifest(args.out);
  if (result.ok) {
    process.stdout.write('manifest ok\n');
    return;
  }
  for (const name of result.mismatched) {
    process.stderr.write(`mismatched: ${name}\n`);
  }
  for (const name of result.missing) {
    process.stderr.write(`missing: ${name}\n`);
  }
  for (const name of result.unexpected) {
    process.stderr.write(`unexpected: ${name}\n`);
  }
  process.exit(1);
}

async function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (err) {
    process.stderr.write(`${err.message}\n${USAGE}\n`);
    process.exit(2);
  }
  if (args.verify) verify(args);
  else await collect(args);
}

await main();
