/**
 * 给定一个数组 arr 和一个块大小 size ，返回一个 分块 的数组。
 * 分块 的数组包含了 arr 中的原始元素，但是每个子数组的长度都是 size 。
 * 如果 arr.length 不能被 size 整除，那么最后一个子数组的长度可能小于 size 。
 * 你可以假设该数组是 JSON.parse 的输出结果。换句话说，它是有效的JSON。
 * 请你在不使用 lodash 的函数 _.chunk 的情况下解决这个问题。
 */

/**
 * splice从原数组截取数组，返回截取的元素组成的数组，数组剩余长度不足时，截取剩余长度。
 * @param {Array} arr 待分块数组
 * @param {Number} size 分块后每个数组大小
 * @returns Array 包含分块数组的数组
 */
const chunk = function (arr, size) {
    let result = []
    while (arr.length > 0) {
        result.push(arr.splice(0, size))
    }
    return result
}

const arr1 = [1, 2, 3, 4, 5], size1 = 1
const arr2 = [1, 9, 6, 3, 2], size2 = 3
const arr3 = [8, 5, 3, 2, 6], size3 = 6
const arr4 = [], size4 = 2

const result1 = chunk(arr1, size1)
const result2 = chunk(arr2, size2)
const result3 = chunk(arr3, size3)
const result4 = chunk(arr4, size4)
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
