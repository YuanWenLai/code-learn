// 889. 根据前序和后序遍历构造二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
 var constructFromPrePost = function(pre, post) {
    if(pre.length == 0) return null

    let rootVal = pre[0]

    // 获取左根节点在后续遍历中的位置
    let index = post.indexOf(pre[1])

    let root = new TreeNode(rootVal)
    root.left = constructFromPrePost(pre.slice(1,index+2),post.slice(0,index+1))
    root.right = constructFromPrePost(pre.slice(index+2),post.slice(index+1,post.length-1))

    return root
};