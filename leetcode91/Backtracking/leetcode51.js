// 51. N 皇后

/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    let arr = new Array(n).fill(0)
    let ret = []

    // 从第一行往前推进
    function dfs(row) {
        // 若遍历到最后一行，则代表有解，返回
        if(row === n+1) {
            let strArr = new Array(n).fill(".")
            let tempArr = []
            for(let i=1;i<=n;i++) {
                strArr[arr[i]-1] = "Q"
                tempArr.push(strArr.join(""))
                strArr[arr[i]-1]  = "."
            }
            ret.push(tempArr)
            return
        }
        for(let i=1;i<=n;i++) {
            if(check(row,i)) {
                arr[row] = i
                dfs(row+1)
                // 检查完后，值清零
                arr[row] = 0
            }
        }
    }

    // 检查对应的行列
    function check(x,y) {
        for(let i=1;i<=x;i++) {
            // 在同一y列上，错误
            if(arr[i] ==y) return false
            // 在同一斜上边上，错误
            if(i+arr[i] == x+y) return false
            // 在同一斜下边上，错误
            if(arr[i] - i == y-x) return false
        }
        return true
    }
    // 从第一行开始遍历
    dfs(1)
    return ret
};

let res = solveNQueens(8)
console.log("  res", res)
