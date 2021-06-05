### 思路

#### 搜索插入位置

1、单指针，遍历判断与target值的大小，得到插入的位置
2、双指针，二分法,最左插入

### 代码
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 单指针遍历
 var searchInsert = function(nums, target) {
    const len = nums.length
    if(len == 0 || target == 0) return 0
    if(len == 1) {
        return nums[0] >= target ? 0 : 1
    }
    for(let r = 0;r<len;r++) {
        if(nums[r] >= target){
           return r 
        }
    }
    return len
};
```
**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）

```js

// 双指针，二分法,最左插入
 var searchInsert2 = function(nums, target) {
    let l = 0
    let r = 0

    while(l < r) {
        const middle = l + ((r-l) >> 1)

        if(target <= nums[middle]) {
            right = middle - 1
        }else {
            l = middle + 1
        }
    }
    return l
};
```
**复杂度分析** - 时间复杂度：O(logN) 。 - 空间复杂度：O（1）
