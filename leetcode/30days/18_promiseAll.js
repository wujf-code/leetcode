/**
 * 手写promise.all()
 * @param {Array} funcs 
 * @returns Array | String
 */
const promiseAll = async function (funcs) {
    let result = []
    let count = 0
    let len = funcs.length
    return new Promise((resolve, reject) => {
        funcs.forEach((p,i) => {
            p().then(data => {
                result[i] = data
                if (++count === len) {
                    resolve(result)
                }
            }).catch(e => {
                reject(e)
            })
        })
    })
}

functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
promiseAll(functions).then(data => {
    console.log(data)
}).catch(e => {
    console.log(e);
})
