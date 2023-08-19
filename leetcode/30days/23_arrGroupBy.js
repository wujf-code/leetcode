/**
 * 请你编写一段可应用于所有数组的代码，使任何数组调用 array. groupBy(fn) 方法时，它返回对该数组 分组后 的结果。
 * 数组 分组 是一个对象，其中的每个键都是 fn(arr[i]) 的输出的一个数组，该数组中含有原数组中具有该键的所有项。
 * 提供的回调函数 fn 将接受数组中的项并返回一个字符串类型的键。
 * 每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。
 * 请在不使用 lodash 的 _.groupBy 函数的前提下解决这个问题。
 */

/**
 * 使用forLoop遍历数组，调用fn，判断对象中是否存在该键，不存在则赋值，存在则push
 * @param {Function} fn 接受数组中的项并返回一个字符串类型的键
 * @returns Object 分组后返回的对象
 */
Array.prototype.groupBy = function (fn) {
    let result = {}
    for (let i = 0; i < this.length; i++) {
        const e = this[i];
        let temp = fn(e)
        if (!Reflect.has(result,temp)) {
            result[temp] = [e]
        } else {
            result[temp].push(e)
        }
    }
    return result
}

/**
 * reduce实现
 * @param {Function} fn 接受数组中的项并返回一个字符串类型的键
 * @returns Object 分组后返回的对象
 */
 Array.prototype.groupBy2 = function (fn) {
    return this.reduce((pre,cur)=>{
        if (Reflect.has(pre,fn(cur))) {
            pre[fn(cur)].push(cur)
        }else{
            pre[fn(cur)] = [cur]
        }
        return pre
    },{})
}

const array = [
    { "id": "1" },
    { "id": "1" },
    { "id": "2" }
],
    fn = function (item) {
        return item.id;
    }
console.log(array.groupBy2(fn))