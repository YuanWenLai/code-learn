/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    let n = grid.length
    let queue = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 将所有陆地加入队列，不是海洋，陆地多源扩散到海洋
            if (grid[i][j] == 1) {
                queue.push([i, j])
            }
        }
    }

    let ans = -1
    // 都是海洋或陆地，返回-1
    if (queue.length === 0 || queue.length === n * n) {
        return ans
    }

    // 陆地源点向4个方向进行，方向数组
    let locations = [[0, -1], [0, 1], [-1, 0], [1, 0]]

    while (queue.length != 0) {
        let len = queue.length

        // 对每个陆地进行4个方向的探索
        for (let k = 0; k < len; k++) {
            let [x, y] = queue.shift()
            // 对该点的四个方向进行探索
            for (let location of locations) {
                let newxI = x + location[0]
                let newxJ = y + location[1]
                // 合法的边界，并且是海洋
                if (newxI >= 0 && newxI < n && newxJ >= 0 && newxJ < n && grid[newxI][newxJ] === 0) {
                    grid[newxI][newxJ] = 1 // 变为陆地
                    queue.push([newxI, newxJ])
                }
            }
        }
        ans++
    }

    return ans
};