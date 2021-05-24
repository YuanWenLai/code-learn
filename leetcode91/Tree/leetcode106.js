// 106. 从中序与后序遍历序列构造二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    let post_index
    const idx_map = new Map()

    const helper = function(in_left, in_right) {
        
        // 若左指针越过右指针，就结束了
        if(in_left > in_right) return null
        
        // 选择后续遍历的最后一个元素post_index，作为根节点
        const root_val = postorder[post_index]
        const root = new TreeNode(root_val)

        // 获取该根节点root在中序遍历的位置，分成左右两个树
        const index = idx_map.get(root_val)

        // 数组的下标减一
        post_index --

        // 构造右子树？
        root.right = helper(index+1,in_right)

        // 构造左子树？
        root.left = helper(in_left,index-1)
        return root
    }

    post_index = postorder.length -1

    // 通过中序遍历建立（元素，下标）的键值对的哈希表
    inorder.forEach((val,index) => {
        idx_map.set(val,index)
    })

    return helper(0, inorder.length-1)

};