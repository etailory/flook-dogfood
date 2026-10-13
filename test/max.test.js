import assert from "node:assert/strict";
import test from "node:test";
import { max } from "../src/max.js";

test("max of an empty array is null", () => {
  assert.equal(max([]), null);
});

test("max returns the largest value", () => {
  assert.equal(max([1, 2, 3]), 3);
  assert.equal(max([-1, -2, -3]), -1);
  assert.equal(max([3, 1, 2]), 3);
});
