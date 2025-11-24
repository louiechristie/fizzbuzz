import { it, describe } from 'node:test';
import assert from "node:assert"
import Convert from './fizzbuzz.ts';

describe("Basic tests", () => {
  it("Should output '1' when input is 1", () => {
    assert.equal(Convert(1), '1' );
  })
  it("Should output '2' when input is 2", () => {
    assert.equal(Convert(2), '2' );
  })
  it("Should output '4' when input is 4", () => {
    assert.equal(Convert(4), '4' );
  })
})

describe("Type checking", () => {
  it("Should throw error if trying to convert a number that is not an integer", () => {
    assert.throws(() => Convert(1.1), 'Error: Number is not a Safe Integer: ${1.1}' );
  })
})
