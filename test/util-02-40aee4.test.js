import test from 'node:test';
import assert from 'node:assert';
import { add } from '../src/util-02-40aee4.js';

test('add returns the sum of two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});
