/**
 * 两个promise对象，返回两个解析结果的和
 * 给定两个 promise 对象 promise1 和 promise2，返回一个新的 promise。
 * promise1 和 promise2 都会被解析为一个数字。
 * 返回的 Promise 应该解析为这两个数字的和。
 */

/**
 * promise.allSettle()实现 / 也可以使用Promise.all()
 * @param {Promise} p1 
 * @param {Promise} p2 
 * @returns Promise
 */
const addTwoPromises = async function (p1, p2) {
    const promises = [p1, p2]
    const [res1,res2] = await Promise.allSettled(promises)
    return res1.value + res2.value
}

/**
 * 分别兑现实现
 * @param {Promise} p1 
 * @param {Promise} p2 
 * @returns Promise
 */
const addTwoPromises2 = async function (p1, p2) {
    const res1 = await p1,
        res2 = await p2
    return res1 + res2
}


const p1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
    p2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(p1, p2).then(data => {
    console.log(data);
})