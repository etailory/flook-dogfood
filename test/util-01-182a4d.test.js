import assert from "node:assert/strict";
import test from "node:test";
import { util01 } from "../src/util-01-182a4d.js";

test("returns the same primitive value", () => {
  assert.equal(util01(42), 42);
  assert.equal(util01("hello"), "hello");
  assert.equal(util01(true), true);
  assert.equal(util01(null), null);
  assert.equal(util01(undefined), undefined);
});

test("returns the same object reference", () => {
  const obj = { a: 1 };
  const arr = [1, 2, 3];
  assert.equal(util01(obj), obj);
  assert.equal(util01(arr), arr);
});

test("does not mutate its input", () => {
  const obj = { a: 1, nested: { b: 2 } };
  const snapshot = JSON.stringify(obj);
  const result = util01(obj);
  assert.equal(JSON.stringify(result), snapshot);
  assert.equal(JSON.stringify(obj), snapshot);

  const arr = [1, 2, 3];
  const arrSnapshot = [...arr];
  util01(arr);
  assert.deepEqual(arr, arrSnapshot);
});
