/**
 * 返回一个包含以下两个函数的对象。
 * {
 *  toBe: 相等时返回true，否则抛出异常
 *  notToBe: 不相等时返回true，否则抛出异常
 * }
 * @param {*} val 
 * @returns {Object}
 */
const createExpect = function (val) {
    return {
        toBe: function (antherVal) {
            if (val === antherVal) {
                return val === antherVal
            }
            throw ('Not Equal')
        },
        notToBe: function (antherVal) {
            if (val !== antherVal) {
                return true
            }
            throw ('Equal')
        }
    }
}
const expect = createExpect(5)
console.log(expect.notToBe(6))