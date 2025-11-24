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

  it("Should output 'Fizz' when input is 9", () => {
    assert.strictEqual(Convert(9), "Fizz");
  });

  it("Should output 'Buzz' when input is 5", () => {
    assert.strictEqual(Convert(5), "Buzz");
  });

  it("Should output 'Buzz' when input is 10", () => {
    assert.strictEqual(Convert(10), "Buzz");
  });

  it("Should output 'Buzz' when input is 20", () => {
    assert.strictEqual(Convert(20), "Buzz");
  });

  it("Should return the string 'FizzBuzz' if the number is a multiple of both three and five, e.g. 15", () => {
    assert.strictEqual(Convert(15), "FizzBuzz");
  });

  it("Should return the string 'FizzBuzz' if the number is 30", () => {
    assert.strictEqual(Convert(30), "FizzBuzz");
  });

  it("Should return the string 'FizzBuzz' if the number is 45", () => {
    assert.strictEqual(Convert(45), "FizzBuzz");
  });
});

describe("acceptance test", () => {
  it("Should convert 1-15 correctly, based on example from specification", () => {
    let expectedOutput = `1
      2
      Fizz
      4
      Buzz
      Fizz
      7
      8
      Fizz
      Buzz
      11
      Fizz
      13
      14
      FizzBuzz`;

    const captureAllSequentialWhitespacesOfAnyKindRegex = /\s+/g;

    // replace White Space With New Line
    expectedOutput = expectedOutput.replace(
      captureAllSequentialWhitespacesOfAnyKindRegex,
      "\n"
    );
    let output = "";
    const outputArray = [];
    for (let i = 1; i <= 15; i++) {
      outputArray.push(Convert(i));
    }
    output = outputArray.join("\n");

    assert.strictEqual(output, expectedOutput);
  });
});
