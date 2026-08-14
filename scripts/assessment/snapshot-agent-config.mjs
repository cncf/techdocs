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
import { stableStringify } from './lib/util.mjs';

const USAGE =
  'usage: snapshot-agent-config.mjs --repo <owner/name> --out <dir>';

function parseArgs(argv) {
  const args = { repo: null, out: null };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--repo') args.repo = argv[(i += 1)];
    else if (argv[i] === '--out') args.out = argv[(i += 1)];
    else throw new Error(`unknown flag: ${argv[i]}`);
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
  const result = await snapshotAgentConfig({ owner, repo, token });
  fs.mkdirSync(args.out, { recursive: true });
  if (result.ok) {
    fs.writeFileSync(
      path.join(args.out, 'agent-config.json'),
      stableStringify({ repository: args.repo, config: result.config }) + '\n',
    );
    process.stdout.write('agent configuration captured\n');
  } else {
    fs.writeFileSync(
      path.join(args.out, 'agent-config.error.json'),
      stableStringify({ repository: args.repo, error: result.error }) + '\n',
    );
    process.stdout.write(
      `agent configuration unavailable: ${result.error.message}\n`,
    );
  }
}

await main();
