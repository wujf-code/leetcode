/**
 * 返回包含三个函数的对象：
 * {
 *  increase：当前值加一并返回，
 *  decrease: 当前值减一并返回，
 *  reset: 重置当前值并返回
 * }
 * @param {Number} init 
 * @returns {Object}
 */
const createCounter = function (init) {
    const initBp = init
    return {
        increment: function () {
            return ++init
        },
        decrement: function () {
            return --init
        },
        reset: function () {
            init = initBp
            return init
        }
    }
}
const counter = createCounter(5)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.reset())
console.log(counter.decrement())
console.log(counter.increment())