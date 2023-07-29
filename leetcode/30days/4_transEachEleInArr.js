/**
 * 编写一个函数，这个函数接收一个整数数组 arr 和一个映射函数  fn ，通过该映射函数返回一个新的数组。
 * 返回数组的创建语句应为 returnedArray[i] = fn(arr[i], i) 。
 */

/**
 * 使用 for...i 实现
 * @param { Array } arr 
 * @param { Function } fn 
 * @returns { Array }
 */
const map = function (arr, fn) {
    let returnedArray = []
    for (let i = 0; i < arr.length; i++) {
        returnedArray[i] = fn(arr[i], i)
    }
    return returnedArray
}
/**
 * 使用 reduce() 实现
 * @param { Array } arr 
 * @param { Function } fn 
 * @returns { Array }
 */
const map2 = function (arr, fn) {
    return arr.reduce((pre, val, index) => {
        pre.push(fn(val,index))
        return pre
    },[])
}


const arr = [1, 2, 3]
const fn = (n) => {
    return n + 1
}
const newArr = map2(arr, fn)
console.log(newArr);