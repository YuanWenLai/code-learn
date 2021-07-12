### 思路

1、暴力方法
2、贪心算法,局部最优推出全局最优
- 当总油量小于消耗量，一定不能走完一圈，返回-1
- 若能跑完一圈，当前i的curSum小于0时，起始点一定是下一位i+1

### 代码1

```js
var canCompleteCircuit = function(gas, cost) {
    for(let i=0;i<gas.length;i++) {
        let rest = gas[i] - cost[i]
        let index = (i+1) % gas.length

        while (rest > 0 && index != i) {
            rest = gas[index] - cost[index]
            index = (index+1) % gas.length
        }

        // 遍历一圈后，还有油剩
        if(rest >= 0 && index === i) return i
    }

    return -1
};
```

**复杂度分析** - 时间复杂度：O(N^2) 。 - 空间复杂度：O（1）

### 代码1

```js
var canCompleteCircuit2 = function(gas, cost) {
    let satrt = 0
    let curSum = 0
    let totalSum = 0
    for(let i=0;i<gas.length;i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]

        if(curSum < 0) {
            curSum = 0
            start = i+1
        }
    }

    // 若totalSum总和小于0，则不能跑完一圈
    if(totalSum < 0) return -1

    return -1
};
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（1）
