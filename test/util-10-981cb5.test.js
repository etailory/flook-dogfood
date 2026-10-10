import assert from "node:assert/strict";
import test from "node:test";
import { square } from "../src/util-10-981cb5.js";

test("squares a positive integer", () => {
  assert.equal(square(3), 9);
});

test("squares a negative integer", () => {
  assert.equal(square(-4), 16);
});

test("squares zero", () => {
  assert.equal(square(0), 0);
});

test("squares a fractional number", () => {
  assert.equal(square(0.5), 0.25);
});
