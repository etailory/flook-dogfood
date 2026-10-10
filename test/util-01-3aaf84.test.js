import test from 'node:test';
import assert from 'node:assert/strict';
import { addOne } from '../src/util-01-3aaf84.js';

test('addOne adds one', () => {
  assert.strictEqual(addOne(0), 1);
  assert.strictEqual(addOne(41), 42);
});
