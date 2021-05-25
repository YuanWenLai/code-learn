### 思路 
 
`BFS`，太爱层序遍历的模板，通过层序遍历，构建完全二叉树的关联
 
### 代码 
 
``` js
/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    if(!root) return null

    const queue = [root]

    while(queue.length) {
        let curQueueLen = queue.length
        for(let i=0;i<curQueueLen;i++) {
            const curNode = queue.shift()
            // 判断是否是最后一个值，若是，指向空
            if(i == curQueueLen -1) {
                curNode.next = null
            }else {
                // 若不是，next指向下一个值
                curNode.next = queue[0]
            }

            if(curNode.left) queue.push(curNode.left)
            if(curNode.right) queue.push(curNode.right)
        }
    }

    return root
};
 
``` 
 
**复杂度分析** 
- 时间复杂度：`O(N) `
- 空间复杂度：`O(N)`