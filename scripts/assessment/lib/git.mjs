import { execFileSync } from 'node:child_process';

function defaultExec(cmd, args) {
  return execFileSync(cmd, args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

export function resolveHeadSha(dir, execImpl = defaultExec) {
  try {
    const out = execImpl('git', ['-C', dir, 'rev-parse', 'HEAD']).trim();
    return /^[0-9a-f]{40}$/i.test(out) ? out : null;
  } catch {
    return null;
  }
}
