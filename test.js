import { test } from "node:test";
import assert from "node:assert/strict";
import { add, greet } from "./index.js";

test("add 2 + 3 = 5", () => {
  assert.equal(add(2, 3), 5);
});

test("greet returns correct message", () => {
  assert.equal(greet("Imam"), "Hello, Imam!");
});
