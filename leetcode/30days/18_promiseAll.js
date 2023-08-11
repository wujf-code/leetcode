
const promiseAll = async function (funcs) {
    let result = []
    
}
functions = [
    () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
promiseAll(functions).then(data=>console.log(data)).catch(e => {
    console.log(e);
})
