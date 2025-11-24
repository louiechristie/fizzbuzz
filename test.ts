import { it, describe } from 'node:test';
import assert from "node:assert"
import Convert from './fizzbuzz.ts';

describe("Basic tests", () => {
  it("Should output '1' when input is 1", () => {
    assert.equal(Convert(1), '1' );
  })
})
