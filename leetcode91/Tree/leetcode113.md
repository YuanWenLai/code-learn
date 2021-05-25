### 思路 
 
1、与129求根节点到叶节点数字之和的解法类似
2、dfs遍历，得到每个路径的相加和存储到数组中
3、判断路径值数组中是否有目标值
 
### 代码 
 
``` js
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let sumArr = []

    function dfs(root,preNum,sumArr) {
        if(root == null) return 0
        const sum = preNum + ',' + root.val
        
        // 当左右子节点都为空时，直接返回sum
        if(root.left == null && root.right == null) {
            let tempArr = sum.split(',')
            tempArr.shift()
            if(tempArr.reduce((pre,cur) => pre*1+cur*1) == targetSum) {
                sumArr.push(tempArr)
            }
        }else {
            // 否则，继续递归相加
            return dfs(root.left,sum,sumArr) + dfs(root.right, sum,sumArr)
        }
    }

    dfs(root,0,sumArr)
    return sumArr
};
 
``` 
 
**复杂度分析** 
- 时间复杂度：`O(N) `
- 空间复杂度：`O(N)`