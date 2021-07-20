### 思路 
 
dp
 
### 代码 
 
``` js
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let dp = new Array(m).fill(0).map(item => new Array(n).fill(0))
    // 初始化dp状态,若没有遇到障碍，才默认dp为的路径为1
    for(let i=0;i<m && obstacleGrid[i][0] === 0;i++) dp[i][0] = 1
    for(let j=0;j<n && obstacleGrid[0][j] === 0;j++) dp[0][j] = 1
    for(let i= 1;i<m;i++) {
        for(let j= 1;j<n;j++) {
            if(obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i][j-1]+dp[i-1][j]
            }
        }
    }
    return dp[m-1][n-1]
};
``` 

**复杂度分析** 
- 时间复杂度：O(n*m) 
- 空间复杂度：O(n*m)


