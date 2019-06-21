const {add, mul} = require('../src/math')
const {should, expect, assert} = require('chai')
// const assert = require('assert')



// assert.equal(add(2, 3), 5)
// assert.equal(mul(2, 3), 6) 

// should()

// BDD
add(2, 3).should.equal(5)
expect(add(2, 3)).to.equal(5)

// TDD
assert.equal(add(2, 3), 5)