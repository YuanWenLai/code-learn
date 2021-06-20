### 题目描述


回溯法,思考ing

### 代码

```js
let res = 0;
    const dfs = (n, row, cols, pie, na) => {
        if (row >= n) {
            res++;
            return;
        }
        let bits = ~(cols | pie | na) & ((1 << n) - 1);
        while (bits) {
            let p = bits & -bits;
            bits = bits & (bits - 1);
            dfs(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1);
        }
    };
    dfs(n, 0, 0, 0, 0);
    return res;
```
 
**复杂度分析** - 时间复杂度：O(N！)。 - 空间复杂度：O(N)
