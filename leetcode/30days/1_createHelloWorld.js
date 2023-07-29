/**
 * 返回一个始终返回 'Hello WorLd'的函数
 * @returns {Function}
 */
const createHelloWorld = function () {
    return function (...args) {
        return 'Hello World'
    }
}

const f = createHelloWorld()
console.log(f());