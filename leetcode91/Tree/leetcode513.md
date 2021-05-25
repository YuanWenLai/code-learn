### 思路 
 
 `BFS`利用层序遍历，找到最后一层的第一个值，即为最左值
 
### 代码 
 
``` js
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var findBottomLeftValue = function(root) {
    if(!root) return 0
    const queue = [root]
    let mostLeftVal = 0

    while(queue.length > 0) {
        let curQueueLen = queue.length
        for(let i = 0;i<curQueueLen;i++) {
            const node= queue.shift()

            if(i == 0) mostLeftVal = node.val

            // 若还有子节点，继续递归
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return mostLeftVal
};
 
``` 
 
**复杂度分析** 
- 时间复杂度：`O(N) `
- 空间复杂度：`O(N)`
