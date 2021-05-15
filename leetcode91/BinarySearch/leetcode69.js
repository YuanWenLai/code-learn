/*
 * @Author: yuanwenlai
 * @Date: 2021-03-03 18:30:21
 * @LastEditors: g05047
 * @LastEditTime: 2021-03-03 19:40:01
 * @Description: file content
 */

//  计算并返回 x 的平方根，其中 x 是非负整数。


var sqrt = function(x) {
    let l = 0
    let r =x
    let m = 0
    if(x == 1) return 1
    if(x == 0) return 0
    while(l <= r) {
        m = Math.floor((l+r+1)/2)
        if(m*m == x) return m
        if(l == m) return l
        if(m*m > x) {
            r = m -1
        }else {
            l = m
        }
    }
    return l
}

console.log(sqrt(6))
