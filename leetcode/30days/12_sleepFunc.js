/**
 * 睡眠函数
 * 请你编写一个异步函数，
 * 它接收一个正整数参数 millis ，
 * 并休眠这么多毫秒。
 * 要求此函数可以解析任何值。
 */

/**
 * 死循环实现
 * @param {Number} millis 
 * @returns Promise
 */
async function sleep(millis) {
    const now = Date.now()
    let after = Date.now()
    while(after - now < 100) {
        after= Date.now()
    }
    return millis
}

/**
 * 计时器实现
 * @param {Number} millis 
 * @returns Promise
 */
async function sleep2(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, millis)
      })
}


let t =Date.now()
sleep(100).then(millis => {
    console.log(millis);
})