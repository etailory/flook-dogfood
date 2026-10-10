import assert from "node:assert/strict";
import test from "node:test";
import { add } from "../src/util-05-29a8cd.js";

test("add sums two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("add handles negative and positive operands", () => {
  assert.equal(add(-1, 1), 0);
});

test("add is deterministic for repeated calls", () => {
  assert.equal(add(2, 3), add(2, 3));
});
