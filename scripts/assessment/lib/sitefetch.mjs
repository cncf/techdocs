import { sha256Hex } from './util.mjs';

function isoDate(now) {
  return now().toISOString().slice(0, 10);
}

export async function fetchSites(
  urls,
  { fetchImpl = fetch, now = () => new Date() } = {},
) {
  const results = [];
  for (const url of [...new Set(urls)].sort()) {
    try {
      const res = await fetchImpl(url);
      const body = Buffer.from(await res.arrayBuffer());
      results.push({
        url,
        status: res.status,
        retrievedDate: isoDate(now),
        sha256: sha256Hex(body),
        body,
      });
    } catch (err) {
      results.push({
        url,
        status: null,
        retrievedDate: isoDate(now),
        error: err.message,
      });
    }
  }
  return results;
}

export async function checkLinks(urls, { fetchImpl = fetch } = {}) {
  const results = [];
  for (const url of [...new Set(urls)].sort()) {
    try {
      const res = await fetchImpl(url, { method: 'HEAD', redirect: 'follow' });
      results.push({ url, status: res.status });
    } catch (err) {
      results.push({ url, status: null, error: err.message });
    }
  }
  return results;
}
