import assert from "node:assert/strict";
import test from "node:test";
import { slugify } from "../src/slugify.js";

test("slugifies a basic phrase", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("collapses hyphens and trims whitespace", () => {
  assert.equal(slugify("  Foo--Bar  "), "foo-bar");
});

test("strips diacritics", () => {
  assert.equal(slugify("Café Déjà Vu"), "cafe-deja-vu");
});

test("replaces punctuation with hyphens", () => {
  assert.equal(slugify("Node.js ESM!"), "node-js-esm");
});

test("returns empty string for empty input", () => {
  assert.equal(slugify(""), "");
});

test("returns empty string for hyphen-only input", () => {
  assert.equal(slugify("---"), "");
});

test("coerces non-string input", () => {
  assert.equal(slugify(123), "123");
});
