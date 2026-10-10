import assert from "node:assert/strict";
import test from "node:test";
import { identity } from "../src/util-15-093ba4.js";

test("returns the number unchanged", () => {
  assert.equal(identity(42), 42);
});

test("returns the string unchanged", () => {
  assert.equal(identity("x"), "x");
});

test("repeated calls with the same input return the same result", () => {
  assert.equal(identity(42), identity(42));
  assert.equal(identity("x"), identity("x"));
});
