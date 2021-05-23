### 思路

1、`DFS`,递归树
2、`DFS`的判断下，看两个树的结点是否一致

### 代码

```js
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  else if (p == null || q == null) return false;
  else if (p.val != q.val) return false;
  else return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

**复杂度分析**

- 时间复杂度：`O(N) `
- 空间复杂度：`O(N)`
