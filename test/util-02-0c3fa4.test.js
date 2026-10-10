import assert from "node:assert/strict";
import test from "node:test";
import { double } from "../src/util-02-0c3fa4.js";

test("double adds a number to itself", () => {
  assert.equal(double(3), 6);
});

test("double of zero is zero", () => {
  assert.equal(double(0), 0);
});
