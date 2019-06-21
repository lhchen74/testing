function sumOne(a, b) {
    const c = 1
    return a + b + c
}

module.exports = {
    add: (...args) => {
        return args.reduce((prev, cur) => {
            return prev + cur
        })
    },
    mul: (...args) => {
        return args.reduce((prev, cur) => {
            return prev * cur
        })
    },
    cover: (a, b) => {
        if (a > b) {
            return a - b - 1
        } else {
            return sumOne(a, b)
        }
    }
}