import assert from "node:assert/strict";
import test from "node:test";
import { add } from "../src/util-08-b65863.js";

test("add sums two numbers", () => {
  assert.equal(add(1, 2), 3);
});

test("add handles negatives", () => {
  assert.equal(add(-4, 6), 2);
});

test("add handles floats", () => {
  assert.equal(add(0.1, 0.2), 0.30000000000000004);
});
