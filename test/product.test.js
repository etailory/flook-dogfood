import assert from "node:assert/strict";
import test from "node:test";
import { product } from "../src/product.js";

test("product of empty list is one", () => {
  assert.equal(product([]), 1);
});

test("product multiplies positive numbers", () => {
  assert.equal(product([1, 2, 3, 4]), 24);
});

test("product of a negative array keeps the sign", () => {
  assert.equal(product([-1, 2, 3]), -6);
  assert.equal(product([-1, -2, 3]), 6);
});
