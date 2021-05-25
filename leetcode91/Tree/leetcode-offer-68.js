// 剑指 Offer 68 - II. 二叉树的最近公共祖先

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
     if(!root || root == p || root == q) return root
     const left = lowestCommonAncestor(root.left,p,q)
     const right = lowestCommonAncestor(root.right,p,q)
     if(!left) return right // 若左子树找不到,返回右子树
     if(!right) return left // 若右子树找不到,返回左子树
     return root // 左右各找到一个,返回根节点
};

// see: https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/solution/chao-jian-dan-di-gui-pythonjavascript-by-azl397985/