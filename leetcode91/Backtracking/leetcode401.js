/**
 * @param {number} turnedOn
 * @return {string[]}
 */

 var readBinaryWatch = function(turnedOn) {
    //  时区灯最多有3个，否则超出12h，分区灯最多有5个，否则超出60
    if(turnedOn > 8) return []
    const ret = []
    const dfs = (n,start,hour,minue) => {
        if(hour > 11 || minue > 59) return
        if(n==0) {
            return ret.push(`${hour}:${minue > 9 ? minue : '0'+minue}`)
        }

        // 回溯 共有10盏灯
        for(let i=start;i<10;i++) {
            dfs(n - 1,i + 1,hour + (i > 5 ? 1 << i - 6 : 0),minute+(i>5 ? 0: 1<<i))
        }
    }
    dfs(turnedOn,0,0,0)
    return ret
};