// 435. 无重叠区间

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
    // 将二维数组排序
    //  [ [1,2], [2,3], [1,3] , [3,4] ]
    intervals.sort((x,y) => x[1] - y[1])

    let count = 1
    let end = intervals[0][1]

    for(let i=1;i<intervals.length;i++) {
        if(end <= intervals[i][0]) {
            end = intervals[i][1]
            count++
        }
    }

    return intervals.length - count
};