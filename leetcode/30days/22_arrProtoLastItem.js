/**
 * 请你编写一段代码实现一个数组方法，
 * 使任何数组都可以调用 array.last() 方法，
 * 这个方法将返回数组最后一个元素。
 * 如果数组中没有元素，则返回 -1 。
 * 你可以假设数组是 JSON.parse 的输出结果。
 */

/**
 * 返回数组最后一个元素或者-1
 * @returns 
 */

Array.prototype.last = function () {
    let len = this.length
    return len ? this[len-1]:-1
  }
