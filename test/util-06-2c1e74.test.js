import assert from "node:assert/strict";
import test from "node:test";
import { double } from "../src/util-06-2c1e74.js";

test("exports a function", () => {
  assert.equal(typeof double, "function");
});

test("returns correct results for representative inputs", () => {
  assert.equal(double(0), 0);
  assert.equal(double(2), 4);
  assert.equal(double(-3), -6);
});

test("is pure and does not mutate its input", () => {
  const input = 5;
  const first = double(input);
  const second = double(input);
  assert.equal(first, second);
  assert.equal(input, 5);
});
