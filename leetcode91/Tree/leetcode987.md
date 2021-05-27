### 思路 
 
 1、`DFS`，前序遍历存储树节点的坐标和值
 2、对遍历的值，进行x 升序 or y 升序 or val 升序
 3、对排序后的结果以x进行分组，得出结果
 
 
### 代码 
 
``` js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    if(!root) return null

    let preOrderList = []
    let helper = function(root,x,y) {
        if(!root) return null
        preOrderList.push([x,y,root.val])
        helper(root.left,x-1,y+1)
        helper(root.right,x+1,y+1)
    }

    // 进行前序遍历，获取每个节点的坐标和值
    helper(root,0,0)

    // 对获取的遍历值进行排序
    preOrderList.sort((a,b) => {
        // x升序,y升序，val升序
        if(a[0] != b[0]) {
            return a[0] - b[0]
        }else if(a[1] != b[1]) {
            return a[1] - b[1]
        }
        return a[2] - b[2]
    })

    // 对排序好的数组进行同类归并
    let res = [preOrderList[0][2]]
    let curX = preOrderList[0][0]
    for(let i=0;i<preOrderList.length;i++) {
        let curItem = preOrderList[i]
        let itemX = curItem[0]

        // 判断itemX是否与当前的x相同
        if(curX == itemX) {
            // 结果二维数组的最后一个元素数组放入一个同类值
            res[res.length-1].push(curItem[2])
        }else {
            // 否则，这是一个新的x坐标，移动当前curX
            curX = x
            res.push(curItem[2])
        }
    }

    return res
};
 
``` 
 
**复杂度分析** 
- 时间复杂度：`O(N) `
- 空间复杂度：`O(N)`
