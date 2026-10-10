import test from 'node:test';
import assert from 'node:assert/strict';
import { identity } from '../src/util-09-80d16e.js';

test('identity returns its argument', () => {
  assert.equal(identity(42), 42);
});
