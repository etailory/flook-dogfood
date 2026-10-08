import test from 'node:test';
import assert from 'node:assert/strict';

import { chunk } from '../src/chunk.js';

test('chunk([], 3) === []', () => {
  assert.deepEqual(chunk([], 3), []);
});

test('chunk([1,2,3,4,5], 2) === [[1,2],[3,4],[5]]', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('chunk([1,2,3], 3) === [[1,2,3]]', () => {
  assert.deepEqual(chunk([1, 2, 3], 3), [[1, 2, 3]]);
});

test('chunk([1,2,3], 5) === [[1,2,3]]', () => {
  assert.deepEqual(chunk([1, 2, 3], 5), [[1, 2, 3]]);
});

test('throws RangeError for size 0', () => {
  assert.throws(() => chunk([1, 2, 3], 0), {
    name: 'RangeError',
    message: 'chunk size must be a positive integer',
  });
});

test('throws RangeError for negative size', () => {
  assert.throws(() => chunk([1, 2, 3], -1), {
    name: 'RangeError',
    message: 'chunk size must be a positive integer',
  });
});

test('throws RangeError for non-integer size', () => {
  assert.throws(() => chunk([1, 2, 3], 1.5), {
    name: 'RangeError',
    message: 'chunk size must be a positive integer',
  });
});

test('throws RangeError for NaN size', () => {
  assert.throws(() => chunk([1, 2, 3], NaN), {
    name: 'RangeError',
    message: 'chunk size must be a positive integer',
  });
});

test('does not mutate the input array', () => {
  const input = [1, 2, 3, 4, 5];
  const snapshot = input.slice();

  chunk(input, 2);

  assert.equal(input.length, snapshot.length);
  assert.deepEqual(input, snapshot);
});
