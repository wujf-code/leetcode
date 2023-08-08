/**
 * 现给定一个函数 fn，一个参数数组 args 和一个时间间隔 t，
 * 返回一个取消函数 cancelFn。
 * 函数 fn 应该立即使用 args 调用，
 * 并且在每个 t 毫秒内再次调用，
 * 直到调用 cancelFn。
 */

/**
 * 计时器和清除计时器
 * @param {Fnction} fn 
 * @param {Array} args 
 * @param {Number} t 
 * @returns Function
 */
const cancellable = function (fn, args, t) {
    // console.log(fn(...args))
    fn(...args)
    const interval = setInterval(()=>{
        // console.log(fn(...args))
        fn(...args)
    }, t)
    return () => {
        clearInterval(interval)
    }
}
const fn = (x) => x * 2,
    args = [4],
    t = 20,
    cancelT = 110

const cancel = cancellable(fn, args, t)
setTimeout(cancel,cancelT)
