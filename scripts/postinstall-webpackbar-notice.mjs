/**
 * After install: if @docusaurus/bundler declares webpackbar ^7+, print that our
 * temporary package.json overrides can be removed. Otherwise stay silent.
 * @see https://github.com/facebook/docusaurus/issues/11923
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const bundlerPkgPath = path.join(
  root,
  'node_modules/@docusaurus/bundler/package.json',
);

function bundlerDeclaresWebpackbarV7Plus(range) {
  if (!range || typeof range !== 'string') return false;
  const m = range.match(/^[~^]?(\d+)/) || range.match(/>=\s*(\d+)/);
  return m ? Number(m[1]) >= 7 : false;
}

let range = '';
try {
  const pkg = JSON.parse(fs.readFileSync(bundlerPkgPath, 'utf8'));
  range = pkg.dependencies?.webpackbar ?? '';
} catch {
  process.exit(0);
}

if (!bundlerDeclaresWebpackbarV7Plus(range)) {
  process.exit(0);
}

const tag = '[techdocs] Docusaurus / webpackbar';
console.log(
  `${tag}: @docusaurus/bundler now declares webpackbar ${range}. Remove the temporary "overrides" block and the "//" comment from package.json, then run npm install.`,
);
console.log('  https://github.com/facebook/docusaurus/issues/11923');
