/**
 * 返回一个计时器函数，该计时器最初返回n，每次调用返回前一个值加1的值。
 * @param {Number} n 
 * @returns {Function}
 */
const createCounter = function (n) {
    return function () {
        return n++
      }
}

const counter = createCounter(10)
console.log(counter());
console.log(counter());