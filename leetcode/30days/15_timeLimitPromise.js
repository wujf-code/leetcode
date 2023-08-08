/**
 * 
 * 请你编写一个函数，它接受一个异步函数 fn 和一个以毫秒为单位的时间 t。
 * 它应根据限时函数返回一个有 限时 效果的函数。函数 fn 接受提供给 限时 函数的参数。
 * 限时 函数应遵循以下规则：
 *  如果 fn 在 t 毫秒的时间限制内完成，限时 函数应返回结果。
 *  如果 fn 的执行超过时间限制，限时 函数应拒绝并返回字符串 "Time Limit Exceeded" 。
 */

/**
 * promise方案
 * @param {Function} fn 
 * @param {Number} t 
 * @returns Promise
 */
const timeLimit = (fn, t) => {
    return async (...args) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject('Time Limit Exceeded'), t)
            fn(...args).then(data => resolve(data))
        })
    }
}
/**
 * promise.race()方案
 * @param {Function} fn 
 * @param {Number} t 
 * @returns Promise
 */
const timeLimit2 = (fn, t) => {
    return async (...args) => {
        const p1 = new Promise((resolve,reject)=> {
            setTimeout(()=> {
                reject('Time Limit Exceeded')
            },t)
        }),
        PromiseArr = [p1,fn(...args)]
        return Promise.race(PromiseArr)
    }
}


const fn = async (n) => {
    await new Promise(res => setTimeout(res, 100));
    return n * n;
},
    inputs = [5]
t = 50

const timeLimitFunc = timeLimit2(fn, t)
timeLimitFunc(inputs).then(data => {
    console.log(data)
}).catch(reson => { console.log(reson) })