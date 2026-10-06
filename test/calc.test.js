import assert from "node:assert/strict";
import test from "node:test";
import { mean, sum } from "../src/calc.js";

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
