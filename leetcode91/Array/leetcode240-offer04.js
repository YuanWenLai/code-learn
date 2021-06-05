// 剑指 Offer 04. 二维数组中的查找

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length == 0) return false
    let j = matrix[0].length - 1
    let i = 0
    while(j >= 0 && i < matrix.length) {
        let pointer = matrix[i][j]
        if(pointer == target) {
            return true
        } else if(pointer > target) {
            j--
        }else if(pointer < target) {
            i++
        }
        
    }

    return false
};