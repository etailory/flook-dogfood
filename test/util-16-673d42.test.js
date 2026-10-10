import test from "node:test";
import assert from "node:assert";
import add from "../src/util-16-673d42.js";

test("add", () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});
