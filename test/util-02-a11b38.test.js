import assert from "node:assert/strict";
import test from "node:test";
import { clamp } from "../src/util-02-a11b38.js";

test("returns a value inside the range unchanged", () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test("returns min when the value is below min", () => {
  assert.equal(clamp(-3, 0, 10), 0);
});

test("returns max when the value is above max", () => {
  assert.equal(clamp(42, 0, 10), 10);
});

test("returns the boundary value at min and max", () => {
  assert.equal(clamp(0, 0, 10), 0);
  assert.equal(clamp(10, 0, 10), 10);
});
