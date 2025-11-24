import { it, describe } from 'node:test';
import assert from "node:assert"
import FizzBuzzInputChecker from './FizzBuzzInputChecker.ts';

describe("Type checking", () => {
  it("Should throw error if trying to convert a number that is not an integer", () => {
    assert.throws(() => FizzBuzzInputChecker(1.1), 'Error: Number is not a Safe Integer: ${1.1}' );
  })
})
