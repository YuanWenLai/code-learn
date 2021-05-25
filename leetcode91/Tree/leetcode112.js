// 112. 路径总和

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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    let sumArr = []
    dfs(root,0,sumArr)
    return sumArr.includes(targetSum)
};

function dfs(root,preNum,sumArr) {
    if(root == null) return 0
    const sum = preNum  + root.val
    
    // 当左右子节点都为空时，直接返回sum
    if(root.left == null && root.right == null) {
        sumArr.push(sum)
    }else {
        // 否则，继续递归相加
        return dfs(root.left,sum,sumArr) + dfs(root.right, sum,sumArr)
    }
}