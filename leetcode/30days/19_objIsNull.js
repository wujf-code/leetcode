/**
 * 判断对象是否为空
 * 给定一个对象或数组，判断它是否为空。
 *  一个空对象不包含任何键值对。
 *  一个空数组不包含任何元素。
 * 你可以假设对象或数组是通过 JSON.parse 解析得到的。
 */

/**
 * 使用isArray判断是否数组，之后判断数组长度或对象自身键组成的数组的长度
 * @param {Object|Array} obj 
 * @returns Boolean
 */
const isEmpty = function (obj) {
    if (Array.isArray(obj)) {
        return !obj.length
    } else {
        return !Reflect.ownKeys(obj).length
    }
}

/**
 * 由于题目假设对象由JSON.parse()转换而来，故可以使用该方法
 * @param {Object|Array} obj 
 * @returns Boolean
 */
const isEmpty2 = function (obj) {
    return JSON.stringify(obj).length === 2
  }

/**
 * object类型使用 for in
 * @param {Object|Array} obj 
 * @returns Boolean
 */
const isEmpty3 = function (obj) {
    for (const key in obj) {
        return false
    }
    return true
  }


const obj = {'x':5,'y':41}
const arr = [null,false,0]
console.log(isEmpty3(arr));