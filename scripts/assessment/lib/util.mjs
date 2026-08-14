import { createHash } from 'node:crypto';

export function sha256Hex(data) {
  return createHash('sha256').update(data).digest('hex');
}

function sortDeep(value) {
  if (Array.isArray(value)) return value.map(sortDeep);
  if (value && typeof value === 'object' && value.constructor === Object) {
    const out = {};
    for (const key of Object.keys(value).sort()) {
      out[key] = sortDeep(value[key]);
    }
    return out;
  }
  return value;
}

// Deterministic JSON: object keys sorted at every depth, arrays kept
// in order, two-space indent.
export function stableStringify(value) {
  return JSON.stringify(sortDeep(value), null, 2);
}
