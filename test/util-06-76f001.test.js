import assert from "node:assert/strict";
import test from "node:test";
import add from "../src/util-06-76f001.js";

test("add sums two positive numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("add handles a negative and positive pair", () => {
  assert.equal(add(-1, 1), 0);
});
