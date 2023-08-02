/**
 * 请你编写一个函数，它接收一个函数数组 [f1, f2, f3，…， fn] ，
 * 并返回一个新的函数 fn ，它是函数数组的 复合函数 。
 * [f(x)， g(x)， h(x)] 的 复合函数 为 fn(x) = f(g(h(x))) 。
 * 一个空函数列表的 复合函数 是 恒等函数 f(x) = x 。
 * 你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。
 */

/**
 * reverse+reduce实现
 * @param {Array<function>} funcs 
 * @returns Number
 */
const compose = function (funcs) {
    return function (x) {
        return funcs.reverse().reduce((pre, func) => func(pre), x)
    }
}

const functions = [x => x + 1, x => x * x, x => 2 * x]
const x = 4

console.log(compose(functions)(x));