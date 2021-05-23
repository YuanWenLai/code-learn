// 144. 二叉树的前序遍历 

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let res = []
    inorderorder(root,res)
    return res

};



// 中序遍历
function inorderorder(node,res) {
    if(node == null) return
    inorderorder(node.left,res)
    res.push(node.val)
    inorderorder(node.right,res)
}

