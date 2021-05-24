// 剑指 Offer 28. 对称的二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return root == null ? true : reCur(root.left, root.right)
};

function reCur(l,r) {
    if(l == null && r == null) return true
    if(l == null || r == null || l.val != r.val) return false
    return reCur(l.left,r.right) && reCur(l.right, r.left)
}