/**
 * 数组排序
 */

/**
 * 数字数组排序
 * @param {Array<Number>} arr 
 * @param {Boolean} asc 
 * @returns Array
 */
const bubbleUpSort = function (arr) {
    // 冒泡排序
    const len1 = arr.length
    for (let i = 0; i < len1; i++) {
        for (let j = i + 1; j < len1; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }

    }
    return arr
}
const mySort = {
    bubbleUp: (arr) => {
        const len = arr.length
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                if (arr[i] > arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]]
                }
            }

        }
        return arr
    },
    select: (arr) => {
        const len = arr.length
        for (let i = 0; i < len - 1; i++) {
            let min = i
            for (let j = min + 1; j < len; j++) {
                if (arr[min] > arr[j]) {
                    min = j
                }
            }
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
        return arr
    }
}




const arr1 = [3, 2, 1, 5, 0]



console.log(mySort.select(arr1));