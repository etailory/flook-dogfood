const { createRequire, default: Module } = await import('node:module');
const { readFileSync } = await import('node:fs');

const defaultJsLoader = Module._extensions['.js'];
Module._extensions['.js'] = (module, filename) => {
  if (filename.endsWith('util-02-b3c508.js')) {
    module._compile(readFileSync(filename, 'utf8'), filename);
    return;
  }
  return defaultJsLoader(module, filename);
};

const require = createRequire(import.meta.url);
const test = require('node:test');
const assert = require('node:assert');
const add = require('../src/util-02-b3c508.js');

test('add returns sum', () => {
  assert.strictEqual(add(2, 3), 5);
});
