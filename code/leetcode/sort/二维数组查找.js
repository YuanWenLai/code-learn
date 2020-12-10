/*
 * @Author: yuanwenlai
 * @Date: 2020-12-10 12:41:36
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-10 12:58:16
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
    let n = matrix.length-1
    let m = matrix[0].length-1
    let i = 0, j = m
    let flag = matrix[i][j]
    // console.log(" ~ findNumberIn2DArray ~ m", matrix[i][j],j)

    while(i < n || j > 0){
        if(target < flag) {
            j -= 1
            flag = matrix[i][j]
        }else if(target > flag) {
            i += 1
            flag = matrix[i][j]
        }else if(target == flag) {
            return true
        }
        console.log(i,j)
    }
    return false
    // console.log(" findNumberIn2DArray ~ n", matrix.length)
};

// findNumberIn2DArray(matrix,20)
console.log(" findNumberIn2DArray(matrix,5)", findNumberIn2DArray(matrix,20))
