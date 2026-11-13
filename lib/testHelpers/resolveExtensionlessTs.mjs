// Minimal Node.js module-resolution hook used only by tests.
//
// docusaurus.config.ts imports its ./lib/* helpers without file extensions
// (e.g. `./lib/getBuildContext`), which Docusaurus's own webpack bundler
// resolves fine but Node's native ESM loader does not. This hook teaches
// Node to fall back to `<specifier>.ts` (and `<specifier>/index.ts` for
// directory imports) so docusaurus.config.ts can be imported directly in
// `node --test`, without changing any production import statement.
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export function resolve(specifier, context, nextResolve) {
  try {
    return nextResolve(specifier, context);
  } catch (err) {
    if (!specifier.startsWith('.')) throw err;

    if (err.code === 'ERR_MODULE_NOT_FOUND') {
      const candidate = new URL(specifier + '.ts', context.parentURL);
      if (existsSync(fileURLToPath(candidate))) {
        return nextResolve(specifier + '.ts', context);
      }
    }

    if (err.code === 'ERR_UNSUPPORTED_DIR_IMPORT') {
      const dirPath = fileURLToPath(new URL(specifier, context.parentURL));
      if (existsSync(dirPath) && statSync(dirPath).isDirectory()) {
        return nextResolve(specifier + '/index.ts', context);
      }
    }

    throw err;
  }
}
