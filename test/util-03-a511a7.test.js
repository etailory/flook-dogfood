import assert from "node:assert/strict";
import test from "node:test";
import { util03a511a7 } from "../src/util-03-a511a7.js";

test("returns a numerically sorted copy", () => {
  assert.deepEqual(util03a511a7([3, 1, 2]), [1, 2, 3]);
});

test("does not mutate the input", () => {
  const input = [3, 1, 2];
  util03a511a7(input);
  assert.deepEqual(input, [3, 1, 2]);
});
