import assert from "node:assert/strict";
import test from "node:test";
import { add } from "../src/util-02-c2e5d9.js";

test("adds two positive numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("adds negative and positive numbers", () => {
  assert.equal(add(-1, 1), 0);
});
