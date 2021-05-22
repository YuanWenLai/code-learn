### 思路 
 
1、`DFS`,递归树
 
### 代码 
 
``` js
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if(root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
 
``` 
 
**复杂度分析** 
- 时间复杂度：`O(N) `
- 空间复杂度：`O(N)`