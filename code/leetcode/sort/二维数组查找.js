/*
 * @Author: yuanwenlai
 * @Date: 2020-12-10 12:41:36
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-10 14:00:08
 * @Description: file content
 */

let matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
]

var findNumberIn2DArray = function(matrix, target) {
    if( matrix == null ||
        matrix.length == 0 || 
        matrix[0].length == 0){
            return false
    }
    let row = 0, colum  = matrix[0].length-1
    while(row < matrix.length && colum >= 0){
        if(target < matrix[row][colum]) {
            colum--
        }else if(target >  matrix[row][colum]) {
            row++
        }else if(target ==  matrix[row][colum]) {
            return true
        }
    }
    return false
};

// findNumberIn2DArray(matrix,20)
console.time()
console.log(" findNumberIn2DArray(matrix,5)", findNumberIn2DArray(matrix,5))
console.timeEnd()
