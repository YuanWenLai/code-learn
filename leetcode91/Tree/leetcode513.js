// 513. 找树左下角的值

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Bfs,层序遍历

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