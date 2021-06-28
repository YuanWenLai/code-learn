### 题目描述


朴素BFS带参
### 代码

```js
class Solution {
    solve(graph, target) {
        if(graph[target].length == 0) return -1
        
        const visited = new Set
        const queue = []
        
        for(const start of graph[target]){
            queue.push([start, 1])
        }

        while(queue.length){
            const [node, dis] = queue.shift()
            if(node == target) return dis
            if(visited.has(node)) continue
            visited.add(node)

            if(!graph[node]) continue
            for(const nei of graph[node]){
                queue.push([nei, dis + 1])
            }
        }

        return -1
    }
}
```
 
**复杂度分析** - 时间复杂度：O(V+ E)。 - 空间复杂度：O(N^2)
