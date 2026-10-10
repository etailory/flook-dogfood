import assert from "node:assert/strict";
import test from "node:test";
import { add } from "../src/util-02-be4484.js";

test("add adds numbers", () => {
  assert.equal(add(2, 3), 5);
});
