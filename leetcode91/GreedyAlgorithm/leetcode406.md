### 思路


1、贪心算法,局部最优推出全局最优
- 优先按身⾼⾼的people的k来插⼊

### 代码1

```js
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
    people.sort((a,b) => {
        if(a[0] == b[0]) {
            return a[1] - b[1]
        }
        return b[0] - a[0]
    })

    let retQue = []
    for(let i=0;i<people.length;i++) {
        retQue.splice(people[i][1],0,people[i])
    }

    return retQue
};
```
时间复杂度：快排NLogN，双循环：N^2  （splice操作复杂度N）

**复杂度分析** - 时间复杂度：O(NLogN+N^2) 。 - 空间复杂度：O（N）
