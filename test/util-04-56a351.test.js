import assert from "node:assert/strict";
import test from "node:test";
import { util04_56a351 } from "../src/util-04-56a351.js";

test("exports a function", () => {
  assert.equal(typeof util04_56a351, "function");
});

test("returns primitives unchanged", () => {
  assert.equal(util04_56a351(42), 42);
  assert.equal(util04_56a351("abc"), "abc");
});

test("is pure and does not mutate input", () => {
  const obj = { a: 1 };
  assert.equal(util04_56a351(obj), obj);
  assert.equal(util04_56a351(42), util04_56a351(42));
});
