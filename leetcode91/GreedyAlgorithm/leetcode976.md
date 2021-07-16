### 思路


给定由一些正数（代表长度）组成的数组 A，返回由其中三个长度组成的、面积不为零的三角形的最大周长。

形成必要条件：
两边之和，大于第三边

贪心，局部最优=》全局最优
1、先排序，让数组达到从小到大
2、通过长度为3的窗口，来逐渐寻找最大的三角形


### 代码

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    nums.sort((a,b) => a-b)
    let max = 0
    for(let i=2;i<nums.length;i++) {
        if(nums[i] < (nums[i-1] + nums[i-2])) {
            max = nums[i] + nums[i-1] + nums[i-2]
        }
    }

    return max
};
```

**复杂度分析** - 时间复杂度：O(NLogN) 。 - 空间复杂度：O（1）
