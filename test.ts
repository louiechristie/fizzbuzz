import { it, describe } from 'node:test';
import assert from "node:assert"
import FizzBuzz from './fizzbuzz.ts';

describe("Basic tests", () => {
  it("Should output '1'", () => {
    assert.equal(FizzBuzz(), '1' );
  })

})
