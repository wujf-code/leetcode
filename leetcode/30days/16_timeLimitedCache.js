/**
 * 编写一个类，它允许获取和设置键-值对，并且每个键都有一个 过期时间 。
 * 该类有三个公共方法：
 * set(key, value, duration) ：
 *  接收参数为整型键 key 、整型值 value 和以毫秒为单位的持续时间 duration 。
 *  一旦 duration 到期后，这个键就无法访问。
 *  如果相同的未过期键已经存在，该方法将返回 true ，否则返回 false 。
 *  如果该键已经存在，则它的值和持续时间都应该被覆盖。
 * get(key) ：
 *  如果存在一个未过期的键，它应该返回这个键相关的值。否则返回 -1 。
 * count() ：
 *  返回未过期键的总数。
 */

/**
 * 原型链和obj实现
 */
const TimeLimitedCache = function () {
    this.obj = {}
    this.timers = {}
}

/**
 * 设置键值和过期时间
 * @param {Number} key 
 * @param {Number} value 
 * @param {Number} duration (ms)
 * @returns Boolean
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    if (Reflect.has(this.obj, key)) {
        this.obj[key] = value
        if (Reflect.has(this.timers, key)) {
            clearTimeout(this.timers[key])
        }
        this.timers[key] = setTimeout(() => {
            Reflect.deleteProperty(this.obj, key)
        }, duration)
        return true
    } else {
        this.obj[key] = value
        this.timers[key] = setTimeout(() => {
            Reflect.deleteProperty(this.obj, key)
        }, duration)
        return false
    }
}

/**
 * 获取键对应的值
 * @param {Number} key 
 * @returns Number  (vlaue|-1)
 */
TimeLimitedCache.prototype.get = function (key) {
    return Reflect.has(this.obj, key) ? Reflect.get(this.obj, key) : -1
}
/**
 * 当前缓存键值对数量
 * @returns Number
 */
TimeLimitedCache.prototype.count = function () {
    return Reflect.ownKeys(this.obj).length
}

/**
 * 类和map实现
 */
class TimeLimitedCache2 {
    constructor() {
        this.map = new Map()
        this.timers = new Map()
    }

    set(key, value, duration) {
        if (this.map.has(key)) {
            clearTimeout(this.map.get(key))
            this.map.set(key, value)
            let timer = setTimeout(() => {
                this.map.delete(key)
            }, duration)
            this.timers.set(key, timer)
            return true
        } else {
            this.map.set(key, value)
            let timer = setTimeout(() => {
                this.map.delete(key)
            }, duration)
            this.timers.set(key, timer)
            return false
        }
    }
    get(key) {
        return this.map.has(key) ? this.map.get(key) : -1
    }
    count() {
        return this.map.size
    }
}


const obj = new TimeLimitedCache2()
console.log(obj.set(1, 42, 500)) // false
console.log(obj.get(1)); // 42
console.log(obj.set(1, 50, 500)) // true
console.log(obj.get(1)); // 50
console.log(obj.count()); // 1
