// 1001. 网格照明

/**
 * @param {number} n
 * @param {number[][]} lamps
 * @param {number[][]} queries
 * @return {number[]}
 */
 var gridIllumination = function(n, lamps, queries) {
    let qLen = queries.length
    let lLen = lamps.length
    let ret = new Array(qLen).fill(0)
    if(lLen === 0) return ret
    for(let i=0;i<qLen;i++) {
        ret[i] = check(lamps,queries[i])
        // 关灯，关掉该点周围的灯
        closeLinght(queries[i],lamps)
    }

    // 细节，检查完一个点后，需要将该点的周围的灯都关闭，即距离差值小于等于1的灯都关闭
    function closeLinght(query,lamps) {
        const delArr = []
        for(let i=0;i<lamps.length;i++) {
            let tempLamp = lamps[i]
            // 若另外一盏灯在这个点的周围，需要关闭
            if(
                Math.abs(tempLamp[0] - query[0]) <=1 &&
                Math.abs(tempLamp[1] - query[1]) <=1
            ) {
                delArr.push(i)
            }
        }
        delArr.sort((a,b) => b-a)
        for(let index of delArr) {
            lamps.splice(index,1)
        }
        return 0
    }

    // 检查是否在开灯的时候，能照亮该点
    function check(lamps,point) {
        for (let lamp of lamps) {
            if (
                point[0] === lamp[0] ||
                point[1] === lamp[1] ||
                Math.abs(point[0] - lamp[0]) === Math.abs(point[1] - lamp[1])
            ) {
                return 1
            }
        }
        return 0
    }

    return ret
};


let res = gridIllumination(5,[[0,0],[1,0]],[[1,1],[1,1]])

console.log("🚀  ~ res", res)
console.log("🚀  ~ res", res)