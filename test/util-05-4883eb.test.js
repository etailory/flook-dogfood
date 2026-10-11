import assert from "node:assert/strict";
import test from "node:test";
import { double } from "../src/util-05-4883eb.js";

test("doubles 0 to 0", () => {
  assert.equal(double(0), 0);
});

test("doubles 2 to 4", () => {
  assert.equal(double(2), 4);
});

test("doubles -3 to -6", () => {
  assert.equal(double(-3), -6);
});
