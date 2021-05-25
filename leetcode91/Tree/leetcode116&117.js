// 116. 填充每个节点的下一个右侧节点指针


// Bfs,层序遍历

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
            if(i == curQueueLen -1) {
                curNode.next = null
            }else {
                curNode.next = queue[0]
            }

            if(curNode.left) queue.push(curNode.left)
            if(curNode.right) queue.push(curNode.right)
        }
    }

    return root
};