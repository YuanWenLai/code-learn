### 题目描述

### 思路

1. 二分法+dfs

### 代码

```js
const Direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function dfs(
  grid: number[][],
  isVisited: boolean[][],
  i: number,
  j: number,
  height: number
): boolean {
  isVisited[i][j] = true;
  const length = grid.length;
  let d = 0;
  while (d < 4) {
    const direction = Direction[d];
    const x = i + direction[0];
    const y = j + direction[1];
    if (
      x >= 0 &&
      y >= 0 &&
      x < length &&
      y < length &&
      !isVisited[x][y] &&
      grid[x][y] <= height
    ) {
      if (x === length - 1 && y === length - 1) {
        return true;
      }
      if (dfs(grid, isVisited, x, y, height)) {
        return true;
      }
    }
    d++;
  }
  return false;
}

function swimInWater(grid: number[][]): number {
  const length = grid.length;
  let lo = 0;
  let hi = length * length - 1;
  // b-search in [hi, lo]
  while (lo < hi) {
    const mid = Math.floor((hi + lo) / 2);
    const isVisited = new Array(length)
      .fill(false)
      .map(() => new Array(length).fill(false));
    if (grid[0][0] <= mid && dfs(grid, isVisited, 0, 0, mid)) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return hi;
}
```

**复杂度分析** - 时间复杂度：O(n^2logn)。 - 空间复杂度：O(n^2)
