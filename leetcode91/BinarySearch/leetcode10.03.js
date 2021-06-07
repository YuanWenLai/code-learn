/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
 var search = function(arr, target) {
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