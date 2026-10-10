import assert from "node:assert/strict";
import test from "node:test";
import { util0898393a } from "../src/util-08-98393a.js";

test("exports a function", () => {
  assert.equal(typeof util0898393a, "function");
});

test("returns its argument for representative values", () => {
  assert.equal(util0898393a(42), 42);
  assert.equal(util0898393a(-1.5), -1.5);
  assert.equal(util0898393a("hello"), "hello");
  assert.equal(util0898393a(true), true);
  assert.equal(util0898393a(null), null);
  const obj = { a: 1 };
  assert.equal(util0898393a(obj), obj);
});
