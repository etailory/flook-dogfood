import assert from "node:assert/strict";
import test from "node:test";
import { median } from "../src/median.js";

test("median of odd-length list is the middle element", () => {
  assert.equal(median([3, 1, 2]), 2);
});

test("median of even-length list averages the two middle elements", () => {
  assert.equal(median([1, 2, 3, 4]), 2.5);
});

test("median of a single-element list is that element", () => {
  assert.equal(median([42]), 42);
});

test("median handles an already-sorted list", () => {
  assert.equal(median([1, 2, 3, 4, 5]), 3);
});

test("median uses a numeric sort for an unsorted list", () => {
  assert.equal(median([10, 2, 1]), 2);
});

test("median of an empty list is undefined", () => {
  assert.equal(median([]), undefined);
});

test("median does not mutate its input", () => {
  const input = [10, 2, 1];
  const copy = [...input];
  median(input);
  assert.deepEqual(input, copy);
});

test("median does not validate entries: NaN propagates (current behavior)", () => {
  assert.ok(Number.isNaN(median([1, NaN, 3])));
});
