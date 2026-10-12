import assert from "node:assert/strict";
import test from "node:test";
import { mean, median, sum } from "../src/calc.js";

test("sum adds numbers", () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test("sum of empty list is zero", () => {
  assert.equal(sum([]), 0);
});

test("mean averages numbers", () => {
  assert.equal(mean([2, 4, 6]), 4);
});

test("mean of empty list is zero", () => {
  assert.equal(mean([]), 0);
});

test("median of odd-length list is middle value", () => {
  assert.equal(median([3, 1, 2]), 2);
});

test("median of even-length list averages middle values", () => {
  assert.equal(median([4, 2, 1, 3]), 2.5);
});

test("median does not mutate input", () => {
  const values = [3, 1, 2];
  median(values);
  assert.deepEqual(values, [3, 1, 2]);
});

test("median of empty list is zero", () => {
  assert.equal(median([]), 0);
});
