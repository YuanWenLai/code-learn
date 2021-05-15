### 思路 
 
数组的遍历(正向遍历和反向遍历)
1、先得到一个反向的字符串
2、获取正向反向目标字符的下标
3、正向遍历和反向遍历获取对应距离的数组
4、正向遍历和反向遍历的数组间比较最小值返回
 
 
### 代码 
 
 
``` js
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    if(s.length === 1) return [0]
    let antiS = s.split('').reverse().join('')
    let antiArr = []
    let arr = []
    let index = s.indexOf(c)
    let antiIndex = antiS.indexOf(c)
    for(let i=0;i<s.length;i++) {
        // 正序数组遍历
        if(s[i] !=c){
            arr.push(Math.abs(i - index))
        }else {
            arr.push(0)
            index = i
        }

        // 反序数组遍历
        if(antiS[i] != c ){
            antiArr.unshift(Math.abs(i - antiIndex))
        }else {
            antiArr.unshift(0)
            antiIndex = i
        }
    }
    return arr.map((item,index) => Math.min(item,antiArr[index]))
};
``` 
 
**复杂度分析** - 时间复杂度：O(N)，其中 N 为数组⻓度。 - 空间复杂度：O（N）