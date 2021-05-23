// 144. 二叉树的前序遍历 

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    let res = []
    postorder(root,res)
    return res

};



// 后序遍历
function postorder(node,res) {
    if(node == null) return
    postorder(node.left,res)
    postorder(node.right,res)
    res.push(node.val)
}

