import test from 'node:test';
import assert from 'node:assert/strict';
import { double } from '../src/util-11-fe4e0b.js';

test('double returns its argument multiplied by 2', () => {
  assert.equal(double(2), 4);
  assert.equal(double(-3), -6);
  assert.equal(double(0), 0);
});
