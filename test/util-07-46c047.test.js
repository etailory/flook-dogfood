import assert from "node:assert/strict";
import test from "node:test";
import { double } from "../src/util-07-46c047.js";

test("double multiplies a number by two", () => {
  assert.equal(double(21), 42);
});
