const {
    add,
    mul,
    cover
} = require('../src/math')

const {
    should,
    expect,
    assert
} = require('chai')


describe('#math', () => {
    describe('add', () => {
        it("should return 5 when 2 + 3", () => {
            expect(add(2, 3), 5)
        })

        it("should return 0 when -1 + 1", () => {
            expect(add(-1, 1), 0)
        })
    })
    describe('mul', () => {
        it("should return 6 when 2 * 3", () => {
            expect(mul(2, 3), 6)
        })

        it("should return 0 when 0 * 1", () => {
            expect(mul(0, 1), 0)
        })
    })

    describe('cover', () => {
        it("should retrun 0 when cover(3, 2)", () => {
            expect(cover(3, 2), 0)
        })

        it("should retrun 0 when cover(2, 3)", () => {
            expect(cover(2, 3), 6)
        })
    })
})