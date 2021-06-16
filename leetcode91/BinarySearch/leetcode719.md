### 题目描述

### 思路

1. 二分法

### 代码

```js
var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let left = 0,
    right = nums[len - 1] - nums[0];
  function smallestNum(num) {
    let count = 0;
    let start = 0;
    // 以 i 为终点求距离差小于 mid 的数量
    for (let i = 1; i < len; i++) {
      while (nums[i] - nums[start] > num) {
        start++;
      }
      // [start,i] 的值之差，都小于 num 了  -- 由于求的是距离差，所以 start<i 的，所以数量是 i-start
      count += i - start;
    }
    return count;
  }
  while (left <= right) {
    let mid = ((right - left) >> 1) + left; // 二分取中间值
    if (smallestNum(mid) >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
```

**复杂度分析** - 时间复杂度：O(Nlogn)。 - 空间复杂度：O(1)
