import { test } from "node:test";
import assert from "node:assert/strict";
import { util10D41286 } from "../src/util-10-d41286.js";

test("util10D41286 is a function", () => {
  assert.equal(typeof util10D41286, "function");
});

test("returns the same primitive value for strings", () => {
  assert.equal(util10D41286("hello"), "hello");
});

test("returns the same primitive value for numbers", () => {
  assert.equal(util10D41286(42), 42);
});

test("returns the same primitive value for booleans", () => {
  assert.equal(util10D41286(true), true);
  assert.equal(util10D41286(false), false);
});

test("returns the same object reference for objects", () => {
  const input = { a: 1 };
  assert.equal(util10D41286(input), input);
});

test("returns the same array reference for arrays", () => {
  const input = [1, 2, 3];
  assert.equal(util10D41286(input), input);
});

test("does not mutate the input", () => {
  const objectInput = { a: 1 };
  util10D41286(objectInput);
  assert.deepEqual(objectInput, { a: 1 });

  const arrayInput = [1, 2, 3];
  util10D41286(arrayInput);
  assert.deepEqual(arrayInput, [1, 2, 3]);
});
