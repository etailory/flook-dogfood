import assert from "node:assert/strict";
import test from "node:test";
import { unique } from "../src/unique.js";

test("removes duplicate numbers preserving first-seen order", () => {
  assert.deepEqual(unique([3, 1, 3, 2, 1]), [3, 1, 2]);
});

test("returns an empty array for empty input", () => {
  assert.deepEqual(unique([]), []);
});

test("returns every value when there are no duplicates", () => {
  assert.deepEqual(unique([1, 2, 3]), [1, 2, 3]);
});

test("deduplicates strings and mixed primitive types", () => {
  assert.deepEqual(unique(["a", "b", "a", "c"]), ["a", "b", "c"]);
  assert.deepEqual(unique([1, "1", 1, true, true]), [1, "1", true]);
});

test("does not mutate the input array", () => {
  const input = [1, 2, 2, 3];
  const snapshot = [...input];
  unique(input);
  assert.deepEqual(input, snapshot);
});
