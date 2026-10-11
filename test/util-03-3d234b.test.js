import assert from "node:assert/strict";
import test from "node:test";
import { util03 } from "../src/util-03-3d234b.js";

test("util03 adds two numbers", () => {
  assert.strictEqual(util03(1, 2), 3);
});

test("util03 handles negatives", () => {
  assert.strictEqual(util03(-1, 1), 0);
});
