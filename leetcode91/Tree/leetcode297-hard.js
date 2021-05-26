// 297. 二叉树的序列化与反序列化

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    if(root == null) return 'X'

    const left = serialize(root.left)
    const right = serialize(root.right)

    return root.val + ',' + left + ',' + right
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodeList = data.split(',')

    const helper = (nodeList) => {
        // 数组的第一个元素出队
        const rootVal = nodeList.shift()

        // 若,第一个值为X,代表该节点为空
        if(rootVal == 'X') return null

        // 构建该值的树节点,作为为父亲节点
        const root = new TreeNode(rootVal)  
        root.left = helper(nodeList)  // 递归创建左子树
        root.right = helper(nodeList) // 递归创建右子树
        return root
    }

    return helper(nodeList)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */