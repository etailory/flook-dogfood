import assert from "node:assert/strict";
import test from "node:test";
import { clamp } from "../src/clamp.js";

test("clamps a value below the minimum up to the minimum", () => {
  assert.equal(clamp(-5, 0, 10), 0);
});

test("returns the minimum for a value at the minimum", () => {
  assert.equal(clamp(0, 0, 10), 0);
});

test("returns the value when it is within range", () => {
  assert.equal(clamp(4, 0, 10), 4);
});

test("returns the maximum for a value at the maximum", () => {
  assert.equal(clamp(10, 0, 10), 10);
});

test("clamps a value above the maximum down to the maximum", () => {
  assert.equal(clamp(42, 0, 10), 10);
});

test("clamps negative values across a negative range", () => {
  assert.equal(clamp(-12, -10, -2), -10);
  assert.equal(clamp(-10, -10, -2), -10);
  assert.equal(clamp(-6, -10, -2), -6);
  assert.equal(clamp(-2, -10, -2), -2);
  assert.equal(clamp(3, -10, -2), -2);
});

test("returns the shared bound when min equals max", () => {
  assert.equal(clamp(5, 3, 3), 3);
  assert.equal(clamp(3, 3, 3), 3);
});
