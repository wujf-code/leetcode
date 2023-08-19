/**
 * 给定一个数组 arr 和一个函数 fn，返回一个排序后的数组 sortedArr。
 * 你可以假设 fn 只返回数字，并且这些数字决定了 sortedArr 的排序顺序。
 * sortedArr 必须按照 fn 的输出值 升序 排序。
 * 你可以假设对于给定的数组，fn 不会返回重复的数字。
 */

/**
 * 直接调用Array.prototype.sort()实现
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns Array
 */
const sortBy = function (arr, fn) {
    return arr.sort((a, b) => {
        return fn(a) - fn(b)
    })
}
/**
 * 冒泡排序，不太行效率太低 O(n^2)
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns Array
 */
const sortBy2 = function (arr, fn) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (fn(arr[i]) > fn(arr[j])) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }

    }
    return arr
}
/**
 * 选择排序，不太行效率太低 O(n^2)
 * @param {Array} arr 
 * @param {Function} fn 
 * @returns Array
 */
const sortBy3 = function (arr, fn) {
    const len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let min = i
        for (let j = min + 1; j < len; j++) {
            if (fn(arr[min]) > fn(arr[j])) {
                min = j
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]]
    }
    return arr
}

const sortBy4 = function (arr, fn) {

}

const arr = [5, 4, 1, 2, 3], fn = (x) => x

console.log(sortBy3(arr, fn))