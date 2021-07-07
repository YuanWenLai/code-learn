### 思路

贪心，局部最优=》全局最优

### 代码

```js
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    let res = 0
    let l = 0
    let r = people.length -1
    people.sort((a, b) => a - b)
    while(l <= r) {
        if(people[l] + people[r] <= limit) {
            l++
            r--
        }else {
            r--
        }

        res ++
    }
    return res
};
```

**复杂度分析** - 时间复杂度：O(NLogN) 。 - 空间复杂度：O（LogN）
