// Test-only harness: prints the isProd-dependent fields of docusaurus.config.ts
// as JSON so tests can exercise them under different env vars via a fresh
// process (docusaurus.config.ts reads process.env once at module load time).
import { registerHooks } from 'node:module';
import { resolve } from './resolveExtensionlessTs.mjs';

registerHooks({ resolve });

const { default: config } = await import('../../docusaurus.config.ts');

console.log(
  JSON.stringify({
    url: config.url,
    docsEditUrl: config.presets[0][1].docs.editUrl,
    analysesEditUrl: config.plugins[0][1].editUrl,
  }),
);
