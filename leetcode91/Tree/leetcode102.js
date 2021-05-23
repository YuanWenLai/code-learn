// 102. 二叉树的层序遍历


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const ret = []
    if(!root) return ret

    const q = []
    q.push(root)
    while(q.length !== 0) {
        const curLevelSize = q.length
        ret.push([])
        for(let i=1;i<=curLevelSize;i++) {
            const node = q.shift()
            ret[ret.length - 1].push(node.val)
            if(node.left) q.push(node.left)
            if(node.right) q.push(node.right)
        }
    }

    return ret
};


// see: https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/er-cha-shu-de-ceng-xu-bian-li-by-leetcode-solution/