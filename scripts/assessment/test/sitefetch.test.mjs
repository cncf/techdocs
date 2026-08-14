import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkLinks, fetchSites } from '../lib/sitefetch.mjs';

function response(status, body = '') {
  return {
    status,
    arrayBuffer: async () => new TextEncoder().encode(body).buffer,
  };
}

test('fetchSites records status, hash, body, and date per url', async () => {
  const results = await fetchSites(['https://x.test/'], {
    fetchImpl: async () => response(200, '<html>ok</html>'),
    now: () => new Date('2026-08-14T00:00:00Z'),
  });
  assert.equal(results.length, 1);
  const r = results[0];
  assert.equal(r.url, 'https://x.test/');
  assert.equal(r.status, 200);
  assert.equal(r.retrievedDate, '2026-08-14');
  assert.match(r.sha256, /^[0-9a-f]{64}$/);
  assert.equal(Buffer.from(r.body).toString(), '<html>ok</html>');
});

test('fetchSites records a failed fetch as an error entry', async () => {
  const results = await fetchSites(['https://down.test/'], {
    fetchImpl: async () => {
      throw new Error('connect refused');
    },
    now: () => new Date('2026-08-14T00:00:00Z'),
  });
  assert.equal(results[0].status, null);
  assert.match(results[0].error, /connect refused/);
});

test('checkLinks reports status per url, sorted, errors captured', async () => {
  const results = await checkLinks(
    ['https://x.test/b', 'https://x.test/a', 'https://x.test/err'],
    {
      fetchImpl: async (url) => {
        if (url.endsWith('/err')) throw new Error('boom');
        return response(url.endsWith('/a') ? 200 : 404);
      },
    },
  );
  assert.deepEqual(results, [
    { url: 'https://x.test/a', status: 200 },
    { url: 'https://x.test/b', status: 404 },
    { url: 'https://x.test/err', status: null, error: 'boom' },
  ]);
});
