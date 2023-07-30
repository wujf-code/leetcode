/**
 * 给定一个整数数组 arr 和一个过滤函数 fn，并返回一个过滤后的数组 filteredArr 。
 * fn 函数接受一个或两个参数：
 * arr[i] - arr 中的数字
 * i - arr[i] 的索引
 * filteredArr 应该只包含使表达式 fn(arr[i], i) 的值为 真值 的 arr 中的元素。真值 是指 Boolean(value) 返回参数为 true 的值。
 * 请在不使用内置的 Array.filter 方法的情况下解决该问题。
 */

/**
 * 循环遍历实现
 * @param {Array<Number>} arr 
 * @param {Function} fn 
 * @returns {Array<Number>}
 */
const filter = function (arr, fn) {
    let returnedArray = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            returnedArray.push(arr[i])
        }
    }
    return returnedArray
}

/**
 * reduce()实现
 * @param {Array<Number>} arr 
 * @param {Function} fn 
 * @returns {Array<Number>}
 */
const filter2 = function (arr, fn) {
    return arr.reduce((pre, cur, i) => {
        if (fn(cur, i)) pre.push(cur)
        return pre
    }, [])
}

const arr = [0, 10, 20, 30]
const fn = (n) => {
    return n > 10
}
console.log(filter(arr, fn));