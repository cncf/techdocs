import { test } from 'node:test';
import assert from 'node:assert/strict';
import { snapshotAgentConfig } from '../lib/snapshot.mjs';

const okPayload = {
  mcp_configuration: null,
  enabled_tools: {
    codeql: true,
    copilot_code_review: true,
    secret_scanning: true,
    dependency_vulnerability_checks: true,
  },
  require_actions_workflow_approval: true,
  is_firewall_enabled: true,
  is_firewall_recommended_allowlist_enabled: true,
  custom_allowlist: [],
  is_automations_enabled: true,
  require_write_access_for_automation_triggers: true,
};

test('snapshotAgentConfig returns the configuration on 200', async () => {
  const seen = {};
  const result = await snapshotAgentConfig({
    owner: 'cncf',
    repo: 'techdocs',
    token: 'tkn',
    fetchImpl: async (url, opts) => {
      seen.url = url;
      seen.auth = opts.headers.authorization;
      return {
        status: 200,
        json: async () => okPayload,
      };
    },
  });
  assert.equal(
    seen.url,
    'https://api.github.com/repos/cncf/techdocs/copilot/cloud-agent/configuration',
  );
  assert.equal(seen.auth, 'Bearer tkn');
  assert.deepEqual(result, { ok: true, config: okPayload });
});

test('snapshotAgentConfig reports an http error explicitly', async () => {
  const result = await snapshotAgentConfig({
    owner: 'cncf',
    repo: 'techdocs',
    token: 'tkn',
    fetchImpl: async () => ({ status: 404, json: async () => ({}) }),
  });
  assert.deepEqual(result, {
    ok: false,
    error: { status: 404, message: 'HTTP 404' },
  });
});

test('snapshotAgentConfig reports a network failure explicitly', async () => {
  const result = await snapshotAgentConfig({
    owner: 'cncf',
    repo: 'techdocs',
    token: '',
    fetchImpl: async () => {
      throw new Error('no route');
    },
  });
  assert.equal(result.ok, false);
  assert.equal(result.error.status, null);
  assert.match(result.error.message, /no route/);
});
