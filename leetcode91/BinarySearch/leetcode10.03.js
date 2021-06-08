// 面试题 10.03. 搜索旋转数组

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var search = function(arr, target) {
    let len = arr.length
    let l = 0
    let r = len - 1
    let mid = 0
    while (l <= r) {
        // key1: 当左指针的值等于target的值，直接返回，因为左指针的值，是重复的值的最小索引
        if(arr[l] === target) return l

        mid = Math.floor((l+r)/2)

        //key2: 当中间值等于目标，右指针等于中间指针，因为要获取最小索引值
        if(arr[mid] === target) {
            r = mid
        }else if(arr[l] < arr[mid]) {
            // 左区域单调递增序列
            if(arr[l] <= target && target <= arr[mid]) {
                r = mid - 1
            }else {
                l = mid + 1
            }
        }else if(arr[l] >arr[mid]) {
            if(arr[l] <= target || target < arr[mid]) {
                r = mid - 1
            }else {
                l = mid + 1
            }
        }else {
            if(arr[l] != target) {
                l++
            }else {
                r = l -1
            }
        }
    }
    return -1
};

 var search2 = function(arr, target) {
    let l = 0
    let r = arr.length - 1
    let mid

    while (l <= r) {
        mid = Math.floor((r+l)/2)

        if(arr[l] < arr[mid]) {
            if(arr[l] <= target && target <= arr[mid]) {
                r = mid - 1
            }else {
                l = mid + 1
            }
        }else if(arr[l] > arr[mid]) {
            if(arr[l] <= target || target <= arr[mid]) {
                r = mid - 1
            }else {
                l = mid + 1
            }
        }else if (arr[l] === arr[mid]) {
            if(arr[l] != target) {
                l++
            }else {
                r = l -1
            }
        }
    }

    if(l < arr.length && arr[l] === target) {
        return l
    }else {
        return -1
    }
};