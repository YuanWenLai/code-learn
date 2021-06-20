### 思路 
 
 `DFS`,遍历所有岛屿，发现岛屿时，计算当前岛屿的最大值
 
### 代码 
 
``` js
var maxAreaOfIsland = function(grid) {
    let x = grid.length
    let y = grid[0].length
    let max = 0
    for(let i=0;i<x;i++) {
        for(let j=0;j<y;j++) {
            // 若遍历的岛屿为1
            if(grid[i][j] == 1) {
                // 检查计算当前的岛屿面积
                max = Math.max(max,countArea(grid,i,j,x,y))
            }
        }
    }
    return max
};

var countArea = function(grid,i,j,x,y) {
    if(i<0 || i>=x || j<0 || j>=y || grid[i][j]==0) return 0
    let num = 1
    // 判断完，重置入口为0
    grid[i][j] = 0

    // 计算岛屿上下左右连接的岛屿
    num += countArea(grid,i-1,j,x,y)
    num += countArea(grid,i+1,j,x,y)
    num += countArea(grid,i,j-1,x,y)
    num += countArea(grid,i,j+1,x,y)

    return num
}
 
``` 
 
**复杂度分析** 
- 时间复杂度：`O(MN) `
- 空间复杂度：`O(MN)`
