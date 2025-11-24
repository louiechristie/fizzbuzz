import { it, describe } from "node:test";
import assert from "node:assert";
import Convert from "./FizzBuzz.ts";

describe("Basic tests", () => {
  it("Should output '1' when input is 1", () => {
    assert.strictEqual(Convert(1), "1");
  });
  it("Should output '2' when input is 2", () => {
    assert.strictEqual(Convert(2), "2");
  });
  it("Should output '4' when input is 4", () => {
    assert.strictEqual(Convert(4), "4");
  });

  it("Should output 'Fizz' when input is 3", () => {
    assert.strictEqual(Convert(3), "Fizz");
  });

  it("Should output 'Fizz' when input is 6", () => {
    assert.strictEqual(Convert(6), "Fizz");
  });
});
