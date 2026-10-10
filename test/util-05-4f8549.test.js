import assert from "node:assert/strict";
import test from "node:test";
import { addOne } from "../src/util-05-4f8549.js";

test("addOne(0) returns 1", () => {
  assert.equal(addOne(0), 1);
});

test("addOne(41) returns 42", () => {
  assert.equal(addOne(41), 42);
});
