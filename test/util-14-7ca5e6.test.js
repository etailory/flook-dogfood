import assert from "node:assert/strict";
import test from "node:test";
import { util14_7ca5e6 } from "../src/util-14-7ca5e6.js";

test("reverses the characters of a string", () => {
  assert.equal(util14_7ca5e6("abc"), "cba");
});

test("returns the same string when reversed is identical", () => {
  assert.equal(util14_7ca5e6("level"), "level");
});

test("handles an empty string", () => {
  assert.equal(util14_7ca5e6(""), "");
});

test("transforms numbers deterministically", () => {
  assert.equal(util14_7ca5e6(12345), "54321");
});
