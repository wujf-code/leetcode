/**
 * 2627. 函数防抖
 * 请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 t ，并返回该函数的 函数防抖 后的结果。
 * 函数防抖 方法是一个函数，它的执行被延迟了 t 毫秒，
 * 如果在这个时间窗口内再次调用它，它的执行将被取消。
 */

const debounce = function (fn,t) {
    let timer = null
    return (...args)=> {
        if(timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(()=> {
            fn.call(this,...args)
        },t)
    }
  }

let log = ()=> {
    console.log('something');
}
let t = 500

let debounceLog = debounce(log,t)
debounceLog()
debounceLog()
debounceLog()