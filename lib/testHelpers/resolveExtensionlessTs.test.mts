import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { resolve } from './resolveExtensionlessTs.mjs';

// This hook is only ever exercised incidentally (via
// docusaurusConfigPreprocessor.test.mts registering it to import
// docusaurus.config.ts), which only reaches its two happy-path branches.
// These tests cover the hook directly, including the rethrow branches that
// production usage never hits.

function moduleNotFoundError() {
  const err = new Error('not found');
  (err as NodeJS.ErrnoException).code = 'ERR_MODULE_NOT_FOUND';
  return err;
}

function unsupportedDirImportError() {
  const err = new Error('unsupported dir import');
  (err as NodeJS.ErrnoException).code = 'ERR_UNSUPPORTED_DIR_IMPORT';
  return err;
}

test('resolve (extensionless .ts module-resolution hook)', async (t) => {
  const dir = mkdtempSync(path.join(tmpdir(), 'resolve-extensionless-ts-'));
  writeFileSync(path.join(dir, 'foo.ts'), '');
  mkdirSync(path.join(dir, 'bar'));
  writeFileSync(path.join(dir, 'bar', 'index.ts'), '');
  const parentURL = pathToFileURL(path.join(dir, 'entry.mjs')).href;
  const context = { parentURL };

  t.after(() => rmSync(dir, { recursive: true, force: true }));

  await t.test('returns nextResolve result directly when it succeeds', () => {
    const calls: string[] = [];
    const nextResolve = (specifier: string) => {
      calls.push(specifier);
      return { url: specifier };
    };
    const result = resolve('./foo.ts', context, nextResolve);
    assert.deepEqual(result, { url: './foo.ts' });
    assert.deepEqual(calls, ['./foo.ts']);
  });

  await t.test('rethrows any error for a non-relative (bare) specifier', () => {
    const err = moduleNotFoundError();
    const nextResolve = () => {
      throw err;
    };
    assert.throws(
      () => resolve('some-package', context, nextResolve),
      (thrown: unknown) => thrown === err,
    );
  });

  await t.test(
    'falls back to <specifier>.ts when the extensionless file exists',
    () => {
      const calls: string[] = [];
      const nextResolve = (specifier: string) => {
        calls.push(specifier);
        if (specifier === './foo') throw moduleNotFoundError();
        return { url: specifier };
      };
      const result = resolve('./foo', context, nextResolve);
      assert.deepEqual(result, { url: './foo.ts' });
      assert.deepEqual(calls, ['./foo', './foo.ts']);
    },
  );

  await t.test(
    'rethrows ERR_MODULE_NOT_FOUND when no <specifier>.ts file exists',
    () => {
      const err = moduleNotFoundError();
      const nextResolve = () => {
        throw err;
      };
      assert.throws(
        () => resolve('./missing', context, nextResolve),
        (thrown: unknown) => thrown === err,
      );
    },
  );

  await t.test(
    'falls back to <specifier>/index.ts for directory imports',
    () => {
      const calls: string[] = [];
      const nextResolve = (specifier: string) => {
        calls.push(specifier);
        if (specifier === './bar') throw unsupportedDirImportError();
        return { url: specifier };
      };
      const result = resolve('./bar', context, nextResolve);
      assert.deepEqual(result, { url: './bar/index.ts' });
      assert.deepEqual(calls, ['./bar', './bar/index.ts']);
    },
  );

  await t.test(
    'rethrows ERR_UNSUPPORTED_DIR_IMPORT when the path does not exist',
    () => {
      const err = unsupportedDirImportError();
      const nextResolve = () => {
        throw err;
      };
      assert.throws(
        () => resolve('./missing-dir', context, nextResolve),
        (thrown: unknown) => thrown === err,
      );
    },
  );

  await t.test(
    'rethrows ERR_UNSUPPORTED_DIR_IMPORT when the path exists but is not a directory',
    () => {
      const err = unsupportedDirImportError();
      const nextResolve = () => {
        throw err;
      };
      assert.throws(
        () => resolve('./foo.ts', context, nextResolve),
        (thrown: unknown) => thrown === err,
      );
    },
  );
});
