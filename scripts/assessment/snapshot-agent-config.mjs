#!/usr/bin/env node
// Captures the Copilot cloud agent configuration for a repository
// (MCP servers, firewall state, custom allowlist) as committed
// evidence alongside an assessment's data outputs: what the agent
// could reach when a draft was produced.
//
//   GITHUB_TOKEN=... node scripts/assessment/snapshot-agent-config.mjs \
//     --repo owner/name --out <dir>
//
// On success writes agent-config.json; on failure writes
// agent-config.error.json and still exits 0: the failure record is
// the evidence, and setup steps should not abort on it.

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { snapshotAgentConfig } from './lib/snapshot.mjs';
import { upsertOutput } from './lib/manifest.mjs';
import { stableStringify } from './lib/util.mjs';

const USAGE =
  'usage: snapshot-agent-config.mjs --repo <owner/name> --out <dir>';

function takeValue(argv, i, flag) {
  const value = argv[i + 1];
  if (value == null || value.startsWith('--')) {
    throw new Error(`missing value for ${flag}`);
  }
  return value;
}

function parseArgs(argv) {
  const args = { repo: null, out: null };
  let i = 0;
  while (i < argv.length) {
    const flag = argv[i];
    if (flag === '--repo') {
      args.repo = takeValue(argv, i, flag);
      i += 2;
    } else if (flag === '--out') {
      args.out = takeValue(argv, i, flag);
      i += 2;
    } else throw new Error(`unknown flag: ${flag}`);
  }
  if (!args.repo || !args.repo.includes('/')) {
    throw new Error('missing --repo owner/name');
  }
  if (!args.out) throw new Error('missing --out');
  return args;
}

async function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (err) {
    process.stderr.write(`${err.message}\n${USAGE}\n`);
    process.exit(2);
  }
  const [owner, repo] = args.repo.split('/');
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN ?? '';
  const apiBase = process.env.GITHUB_API_URL || 'https://api.github.com';
  const result = await snapshotAgentConfig({ owner, repo, token, apiBase });
  fs.mkdirSync(args.out, { recursive: true });
  // Whichever way the call went, the opposite record from an earlier
  // run is removed and the manifest updated, so a directory never
  // carries both a configuration and an error for the same step.
  const command = `snapshot-agent-config.mjs --repo ${args.repo}`;
  if (result.ok) {
    upsertOutput(args.out, {
      command,
      name: 'agent-config.json',
      content:
        stableStringify({ repository: args.repo, config: result.config }) +
        '\n',
      remove: ['agent-config.error.json'],
    });
    process.stdout.write('agent configuration captured\n');
  } else {
    upsertOutput(args.out, {
      command,
      name: 'agent-config.error.json',
      content:
        stableStringify({ repository: args.repo, error: result.error }) + '\n',
      remove: ['agent-config.json'],
    });
    process.stdout.write(
      `agent configuration unavailable: ${result.error.message}\n`,
    );
  }
}

await main();
