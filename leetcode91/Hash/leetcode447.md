### 思路

#### 回旋镖的数量

哈希表,两点距离

### 代码

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  const hashMaps = new Array(points.length).fill(0).map(() => ({}));

  let boomerangeCount = 0;

  points.forEach((a, i) => {
    const map = hashMaps[i];

    points.forEach((b, j) => {
      if (a != b) {
        const dist = calcSquare(a, b);
        map[dist] = (map[dist] || 0) + 1;
      }
    });

    for (const dist in map) {
      const num = map[dist];
      if (num > 1) boomerangeCount += num * (num - 1);
    }
  });

  return boomerangeCount;

  function calcSquare(a, b) {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
  }
};
```

**复杂度分析** - 时间复杂度：O(N^2) - 空间复杂度：O（N^2）
