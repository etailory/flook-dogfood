import assert from "node:assert/strict";
import test from "node:test";
import { identity } from "../src/util-04-b3d25d.js";

test("returns a string unchanged", () => {
  assert.equal(identity("x"), "x");
});

test("returns a number unchanged", () => {
  assert.equal(identity(42), 42);
});

test("returns null unchanged", () => {
  assert.equal(identity(null), null);
});
