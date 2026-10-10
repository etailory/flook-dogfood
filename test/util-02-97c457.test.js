import test from "node:test";
import assert from "node:assert";
import { add } from "../src/util-02-97c457.js";

test("add returns the sum of two numbers", () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
  assert.strictEqual(add(0, 0), 0);
});
