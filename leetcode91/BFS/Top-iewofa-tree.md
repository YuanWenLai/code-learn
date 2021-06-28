### 题目描述

BFS
### 代码

```js
class Solution {
    solve(root) {
        if(!root) return []
        const view = new Map
        view.set(0, root.val)
        const queue = [[root,0]]

        while(queue.length){
            const [node, cor] = queue.shift()
            if(!view.has(cor)) view.set(cor, node.val)
            node.left && queue.push([node.left, cor -1])
            node.right && queue.push([node.right, cor + 1])
        }

        const res = [...view.entries()].sort((a,b) => a[0] -b[0])
        return res.map(([k,v]) => v)
    }
}
```
 
**复杂度分析** - 时间复杂度：O(nlogn)。 - 空间复杂度：O(N)
