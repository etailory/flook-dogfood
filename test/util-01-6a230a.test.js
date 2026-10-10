import assert from "node:assert/strict";
import test from "node:test";
import { sumRange } from "../src/util-01-6a230a.js";

test("sums an array of numbers", () => {
  assert.equal(sumRange([1, 2, 3, 4]), 10);
});

test("returns 0 for an empty array", () => {
  assert.equal(sumRange([]), 0);
});

test("handles negative values", () => {
  assert.equal(sumRange([-1, -2, 3]), 0);
});
