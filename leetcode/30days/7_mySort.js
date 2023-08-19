/**
 * 数组排序
 */


const mySort = {
    /**
     * 冒泡排序： 最好：O(n)；最坏：O(n^2)；平均O(n^2)；空间：O(1)；稳定
     * @param {Array} arr 
     * @returns Array
     */
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
    /**
     * 选择排序： 最好：O(n^2)；最坏：O(n^2)；平均O(n^2)；空间：O(1)；不稳定
     * @param {Array} arr 
     * @returns Array
     */
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
    },
    /**
     * 插入排序：最好：O(n)；最坏：O(n^2)；平均O(n^2)；空间：O(1)；稳定
     * @param {Array} arr 
     * @returns Array
     */
    insert: (arr) => {
        for (let i = 1; i < arr.length; i++) {
            const current = arr[i];
            let j = i - 1
            while (j >= 0 && arr[j] > current) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = current
        }
        return arr
    },
    /**
     * 希尔排序（缩小增量排序）：最好：O(n)；最坏：O(ns(1<s<2))；平均O(nlogn)；空间：O(1)；不稳定
     * @param {Array} arr 
     * @returns Array
     */
    shell: (arr) => {
        let len = arr.length
        let gap = Math.floor(len / 2)
        for (gap; gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < len; i++) {
                let current = arr[i]
                let j = i - gap
                while (j >= 0 && arr[j] > current) {
                    arr[j + gap] = arr[j]
                    j -= gap
                }
                arr[j + gap] = current
            }
        }
        return arr
    }

}




const arr1 = [3, 4, 2, 5, 0, 12, 1, -1, 2, 56, 14]


console.log(mySort.shell(arr1));