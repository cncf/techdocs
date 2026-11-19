import { readFile } from 'node:fs/promises';
import path from 'node:path';

const METRICS = ['lines', 'statements', 'branches', 'functions'];

/**
 * Render a `c8 --reporter=json-summary` report
 * (default path: coverage/coverage-summary.json) as a Markdown table, so a
 * future CI step can post it as a PR comment without re-parsing istanbul's
 * JSON shape inline in a workflow file.
 */
function toMarkdownTable(summary, cwd) {
  const rows = [];
  for (const [file, metrics] of Object.entries(summary)) {
    const label = file === 'total' ? '**Total**' : path.relative(cwd, file);
    rows.push([label, ...METRICS.map((metric) => `${metrics[metric].pct}%`)]);
  }

  const header = [
    'File',
    ...METRICS.map((m) => m[0].toUpperCase() + m.slice(1)),
  ];
  const lines = [
    `| ${header.join(' | ')} |`,
    `| ${header.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.join(' | ')} |`),
  ];
  return lines.join('\n');
}

export async function buildCoverageSummary(summaryPath, cwd = process.cwd()) {
  let raw;
  try {
    raw = await readFile(summaryPath, 'utf-8');
  } catch (error) {
    throw new Error(
      `Could not read coverage summary at ${summaryPath} (run 'npm run test:coverage' first): ${error.message}`,
    );
  }

  let summary;
  try {
    summary = JSON.parse(raw);
  } catch (error) {
    throw new Error(
      `Coverage summary at ${summaryPath} is not valid JSON: ${error.message}`,
    );
  }

  if (!summary.total) {
    throw new Error(
      `Coverage summary at ${summaryPath} has no "total" entry; is it a json-summary report?`,
    );
  }

  return toMarkdownTable(summary, cwd);
}

async function main() {
  const summaryPath = path.resolve(
    process.argv[2] || 'coverage/coverage-summary.json',
  );

  try {
    console.log(await buildCoverageSummary(summaryPath));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
