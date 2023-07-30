/**
 * 请你编写一个函数，它的参数为
 * 一个整数数组 nums 
 * 一个计算函数 fn 
 * 初始值 init 。
 * 返回一个数组 归约后 的值。
 * 然后应用以下操作： val = fn(init, nums[0]) ， val = fn(val, nums[1]) ， val = fn(val, nums[2]) ，... 
 * 直到数组中的每个元素都被处理完毕。返回 val 的最终值。
 * 如果数组的长度为 0，它应该返回 init 的值。
 * 请你在不使用内置数组方法的 Array.reduce 前提下解决这个问题。
 */

/**
 * 循环实现
 * @param {Array<Number>} nums 
 * @param {Function} fn 
 * @param {Number} init 
 * @returns {Number}
 */
const reduce = function (nums, fn, init) {
    if (!nums.length) return init
    nums.forEach(num => {
        init = fn(init, num)
    });
    return init
}

/**
 * 递归实现
 * @param {Array<Number>} nums 
 * @param {Function} fn 
 * @param {Number} init 
 * @returns {Number}
 */
const reduce2 = function (nums, fn, init) {
    if (!nums.length) return init
    init = fn(init, nums.shift())
    return reduce2(nums, fn, init)
    // if(nums.length) {
    //     init = fn(init, nums.shift())
    //     return reduce2(nums, fn, init)
    // }else{
    //     return init
    // }
}

const nums = [1, 2, 3, 4],
    fn = function sum(accum, curr) { return accum + curr; },
    init = 0
console.log(reduce2(nums, fn, init))