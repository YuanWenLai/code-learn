### 思路 
 
1、`DFS`
 
### 代码 
 
``` js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    return dfs(root,0)
};

function dfs(root,preNum) {
    if(root == null) return 0

    // 每次向下验收，旧值需要向前进一位
    const sum = preNum * 10 + root.val
    
    // 当左右子节点都为空时，直接返回sum
    if(root.left == null && root.right == null) {
        return sum
    }else {
        // 否则，继续递归相加
        return dfs(root.left,sum) + dfs(root.right, sum)
    }
}
 
``` 
 
**复杂度分析** 
- 时间复杂度：`O(N) `
- 空间复杂度：`O(N)`



2、`BFS`
 
### 代码 
 
``` js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if(!root) return 0
    const queue = [[root,root.val]]
    let sum = 0

    while(queue.length > 0) {
        const [node, curSum] = queue.shift()
        // 若没有左右节点，直接相加当前的值
        if(!node.left && !node.right) {
            sum += curSum
        }else {
            // 若还有子节点，继续递归，拼接新的值
            if(node.left) queue.push([node.left, curSum*10 + node.left.val])
            if(node.right) queue.push([node.right, curSum*10 + node.right.val])
        }
    }

    return sum
};
 
``` 
 
**复杂度分析** 
- 时间复杂度：`O(N) `
- 空间复杂度：`O(N)`