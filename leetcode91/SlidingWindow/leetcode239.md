### 思路

单调递减栈+滑动窗口
1、构建单调递减栈，达到窗口时，得到栈低为最大值的下标
2、滑动窗口时，需要判断滑出的左值是否是栈低的值，是则出栈
3、每次右值入栈时，将栈内比它小的值出栈，构成单调递减栈
4、每构成一次新的窗口，获取栈低的值，为最大值的下标

### 代码

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  // 维护单调栈的下标
  let indexStack = [];

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    // 单调栈的最大值，是否是左值滑出的下标
    if (indexStack[0] < i - k + 1) {
      indexStack.shift();
    }

    // 构建单调栈，栈小的出栈
    while (
      indexStack.length &&
      nums[i] > nums[indexStack[indexStack.length - 1]]
    ) {
      indexStack.pop();
    }
    indexStack.push(i);

    if (i >= k - 1) {
      res.push(nums[indexStack[0]]);
    }
  }

  return res;
};
```

**复杂度分析** - 时间复杂度：O(KN)。 - 空间复杂度：O(N-K)
