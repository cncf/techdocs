const API_VERSION = '2026-03-10';

// Endpoint: GET /repos/{owner}/{repo}/copilot/cloud-agent/configuration
// (public preview). Whether it answers from inside an agent session,
// and with which credential, is unverified; a failure here is
// recorded as evidence, not hidden.
export async function snapshotAgentConfig({
  owner,
  repo,
  token,
  fetchImpl = fetch,
  apiBase = 'https://api.github.com',
}) {
  const url = `${apiBase}/repos/${owner}/${repo}/copilot/cloud-agent/configuration`;
  const headers = {
    accept: 'application/vnd.github+json',
    'x-github-api-version': API_VERSION,
  };
  if (token) headers.authorization = `Bearer ${token}`;
  try {
    const res = await fetchImpl(url, { headers });
    if (res.status !== 200) {
      return {
        ok: false,
        error: { status: res.status, message: `HTTP ${res.status}` },
      };
    }
    return { ok: true, config: await res.json() };
  } catch (err) {
    return { ok: false, error: { status: null, message: err.message } };
  }
}
