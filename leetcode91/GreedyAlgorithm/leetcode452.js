/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function(points) {
    // 先对气球进行排序
    points.sort((a,b) => a[0] - b[0])

    // 气球数量不为空，至少有一箭
    let ret = 1

    // 重叠气球，用最小右边界来控制射箭的气球数量
    for(let i=1;i<points.length;i++) {
        // 若没有重合的边界，射箭数量+1
        // xstart ≤ x ≤ xend，则该气球会被引爆
        if(points[i][0] > points[i-1][1]) {
            ret++
        }else {
            // 既然是能一起爆，更新最小右边界，看下一个能不能一起在最小右边界爆
            points[i][1] = Math.min(points[i-1][1],points[i][1])
        }
    }

    return ret
};