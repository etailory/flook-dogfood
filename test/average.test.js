import assert from "node:assert/strict";
import test from "node:test";
import { average } from "../src/average.js";

test("average of an empty array is zero", () => {
  assert.equal(average([]), 0);
});

test("average of a single value is that value", () => {
  assert.equal(average([7]), 7);
});

test("average of positive values", () => {
  assert.equal(average([1, 2, 3]), 2);
});

test("average of negative values", () => {
  assert.equal(average([-1, -2, -3]), -2);
});

test("average does not mutate its input", () => {
  const input = [2, 4, 6];
  average(input);
  assert.deepEqual(input, [2, 4, 6]);
});
