import test from 'node:test';
import assert from 'node:assert/strict';
import { double } from '../src/util-11-2ff1bd.js';

test('double', () => {
  assert.equal(double(2), 4);
  assert.equal(double(-1), -2);
});
