// 105. 从前序与中序遍历序列构造二叉树

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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if(inorder.length == 0) return null

    // 前序遍历的数组第一个值，永远都是根
    const root = new TreeNode(preorder[0])

    const mid = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid+1))
    return root
};

// time:220ms 缺点： 每次递归都需要数组切割，太耗性能


// 优化1，用双指针游走来递归
var buildTree2 = function(preorder, inorder) {
    const helper = (p_start,p_end,i_start,i_end) => {
        if(p_start > p_end) return null

        // 获取前序遍历的根节点
        let rootVal = preorder[p_start]

        // 生成树的根节点
        let root = new TreeNode(rootVal)

        // 获取根节点在中序遍历的对应位置
        let mid = inorder.indexOf(rootVal)

        // 获取左子树的节点树
        let leftNum = mid - i_start

        // 递归获取该节点root的左右子树
        root.left = helper(p_start+1, p_start+leftNum, i_start, mid - 1)
        root.right = helper(p_start+leftNum+1, p_end, mid+1, i_end)

        // 返回当前该节点
        return root

    }
    return helper(0, preorder.length -1, 0, inorder.length-1)
};


// time:110ms 缺点： 查找中序遍历的根位置，indexOf，每次递归都需要话o(N)的时间来查找

// 优化2：将中序遍历的元素和索引存在哈希表中，用空间换取时间
var buildTree3 = function(preorder, inorder) {
    const map = new Map()
    for(let i=0;i<inorder.length;i++) {
        map.set(inorder[i],i)
    }
    const helper = (p_start,p_end,i_start,i_end) => {
        if(p_start > p_end) return null

        // 获取前序遍历的根节点
        let rootVal = preorder[p_start]

        // 生成树的根节点
        let root = new TreeNode(rootVal)

        // 获取根节点在中序遍历的对应位置
        // let mid = inorder.indexOf(rootVal)
        let mid = map.get(rootVal)

        // 获取左子树的节点树
        let leftNum = mid - i_start

        // 递归获取该节点root的左右子树
        root.left = helper(p_start+1, p_start+leftNum, i_start, mid - 1)
        root.right = helper(p_start+leftNum+1, p_end, mid+1, i_end)

        // 返回当前该节点
        return root

    }
    return helper(0, preorder.length -1, 0, inorder.length-1)
};

// time: 90ms -- 100ms