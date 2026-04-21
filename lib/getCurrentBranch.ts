import { execSync } from 'node:child_process';

export default function getCurrentBranch(): string | undefined {
  const fromEnv =
    // Netlify exposes BRANCH/HEAD for deploy contexts; GitHub Actions uses
    // the GITHUB_* refs below.
    process.env.HEAD ||
    process.env.BRANCH ||
    process.env.GITHUB_HEAD_REF ||
    process.env.GITHUB_REF_NAME;
  if (fromEnv) return fromEnv;

  try {
    const branch = execSync('git branch --show-current', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return branch || undefined;
  } catch {
    return undefined;
  }
}
