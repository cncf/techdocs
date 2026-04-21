import { execSync } from 'node:child_process';

function normalizeGitHubUrl(remoteUrl: string): string | undefined {
  const ssh = remoteUrl.match(/^git@github\.com:([^/]+\/[^/]+?)(?:\.git)?$/);
  if (ssh) return `https://github.com/${ssh[1]}`;

  const https = remoteUrl.match(
    /^https:\/\/github\.com\/([^/]+\/[^/]+?)(?:\.git)?$/,
  );
  if (https) return `https://github.com/${https[1]}`;

  return undefined;
}

export default function getGitHubRepoUrl(
  remote = 'origin',
): string | undefined {
  const fromEnv = process.env.REPOSITORY_URL;
  if (fromEnv) {
    const normalized = normalizeGitHubUrl(fromEnv);
    if (normalized) return normalized;
  }

  try {
    const remoteUrl = execSync(`git remote get-url ${remote}`, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return normalizeGitHubUrl(remoteUrl);
  } catch {
    return undefined;
  }
}
