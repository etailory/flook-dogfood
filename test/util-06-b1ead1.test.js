import test from 'node:test';
import assert from 'node:assert';
import { identity } from '../src/util-06-b1ead1.js';

test('identity returns its argument unchanged', () => {
  assert.strictEqual(identity(42), 42);
  assert.strictEqual(identity('hello'), 'hello');
});
