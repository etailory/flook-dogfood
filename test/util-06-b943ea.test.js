import assert from "node:assert/strict";
import test from "node:test";
import { unique } from "../src/util-06-b943ea.js";

test("unique removes duplicate values preserving order", () => {
  assert.deepEqual(unique([3, 1, 3, 2, 1]), [3, 1, 2]);
});

test("unique of an empty list is empty", () => {
  assert.deepEqual(unique([]), []);
});

test("unique returns a new array without mutating the input", () => {
  const input = [1, 1, 2];
  const result = unique(input);
  assert.deepEqual(input, [1, 1, 2]);
  assert.notEqual(result, input);
});

test("unique works with string values", () => {
  assert.deepEqual(unique(["a", "b", "a"]), ["a", "b"]);
});
