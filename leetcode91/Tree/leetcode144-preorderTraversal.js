// 144. 二叉树的前序遍历 

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let res = []
    preorder(root,res)
    return res

};

// 前序遍历
function preorder(node,res) {
    if(node == null) return
    res.push(node.val)
    preorder(node.left,res)
    preorder(node.right,res)
}

// 中序遍历
function preorder2(node,res) {
    if(node == null) return
    preorder(node.left,res)
    res.push(node.val)
    preorder(node.right,res)
}

// 后序遍历
function preorder3(node,res) {
    if(node == null) return
    preorder(node.left,res)
    preorder(node.right,res)
    res.push(node.val)
}