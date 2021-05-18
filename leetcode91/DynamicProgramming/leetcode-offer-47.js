/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
    for(let i = 0;i<grid.length;i++) {
        for(let j = 0;j<grid[0].length;j++) {
            if(i == 0 && j == 0) continue
            if(i == 0) {
                
                grid[i][j] += grid[i][j-1]
            }else if(j == 0) {
                grid[i][j] += grid[i-1][j]
            }else {
                grid[i][j] = Math.max(grid[i-1][j],grid[i][j-1]) + grid[i][j]
            }
        }
    }
    // 抛出记录表的最后一个元素
    return grid.pop().pop()
};

let arr = [[1,2,5],[3,2,1]]
// let arr = [
//     [1,3,1],
//     [1,5,1],
//     [4,2,1]
//   ]
console.log(maxValue(arr))