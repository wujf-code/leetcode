/**
 * 给定一个整数数组 nums 和一个整数目标值 target
 * 请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */
/**
 * 哈希表实现，map()
 * @param {Array} nums 
 * @param {Number} target 
 * @returns Array
 */
const twoSum = function (nums, target) {
    let map = new Map()
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (map.has(target - element)) {

            return [index, map.get(target - element)]
        } else {
            map.set(element, index)
        }
    }

}

/**
 * 双层循环实现
 * @param {Array} nums 
 * @param {Number} target 
 * @returns Array
 */
const twoSum2 = function (nums, target) {
    let result = []
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result = [i, j]
            }
        }
    }
    return result
}
const nums = [2, 7, 11, 15], target = 9
console.log(twoSum2(nums, target));