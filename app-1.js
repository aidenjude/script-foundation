//function expressions
const sum = function (a, b) {
    return a + b
}
const subtract = function (a, b) {
    return a - b
}

const operations = [sum, subtract]
for (let func of operations) {
    let result = func(40, 5)
    console.log(result)
}
const arithObj = {
    add: sum
}

const passMeFn = function (func) {
    func(1, 2)
    func(3, 4)
}
passMeFn(sum)

const multiplyBy = function (num) {
    return function (x) {
        return x * num
    }
}
 const double = multiplyBy(2)
 const triple = multiplyBy(3)