/**
 * 给定一个函数 fn ，它返回一个新的函数，返回的函数与原始函数完全相同，只不过它确保 fn 最多被调用一次。
 * 第一次调用返回的函数时，它应该返回与 fn 相同的结果。
 * 第一次后的每次调用，它应该返回 undefined 。
 */

/**
 * 闭包保持对allow的引用，apply()改变this指向，箭头函数
 * @param {Function} fn 
 * @returns Function
 */
const useOnce = function (fn) {
    let allow = true
    return (...args) => {
        if (!allow) {
            return undefined
        }
        allow = false
        return fn.apply(this, args)

    }
}

const fn = (a, b, c) => (a + b + c),
    calls = [[1, 2, 3], [2, 3, 6]]

const once = useOnce(fn)
console.log(once(1, 2, 3))
console.log(once(2, 2, 3))