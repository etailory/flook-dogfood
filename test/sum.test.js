import assert from "node:assert/strict";
import test from "node:test";
import { sum } from "../src/sum.js";

test("sum of an empty array is zero", () => {
  assert.equal(sum([]), 0);
});

test("sum of positive values", () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test("sum of negative values", () => {
  assert.equal(sum([-1, -2, -3]), -6);
});
