import assert from "node:assert/strict";
import test from "node:test";
import { util15_7047c3 } from "../src/util-15-7047c3.js";

test("util15_7047c3 returns a primitive unchanged", () => {
  assert.equal(util15_7047c3(42), 42);
});

test("util15_7047c3 returns a string unchanged", () => {
  assert.equal(util15_7047c3("hello"), "hello");
});
