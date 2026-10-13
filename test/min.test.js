import assert from "node:assert/strict";
import test from "node:test";
import { min } from "../src/min.js";

test("min of an empty array is null", () => {
  assert.equal(min([]), null);
});

test("min of positive values", () => {
  assert.equal(min([3, 1, 2]), 1);
});

test("min of negative values", () => {
  assert.equal(min([-1, -2, -3]), -3);
});

test("min of a single value is that value", () => {
  assert.equal(min([7]), 7);
});
