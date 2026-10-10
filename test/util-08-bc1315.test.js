import assert from "node:assert/strict";
import test from "node:test";
import { add } from "../src/util-08-bc1315.js";

test("add sums two numbers", () => {
  assert.equal(add(1, 2), 3);
});

test("add handles negatives and zero", () => {
  assert.equal(add(-1, 1), 0);
});
