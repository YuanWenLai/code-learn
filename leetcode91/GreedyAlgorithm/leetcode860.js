
// 使用hash记录钱币的张数
// 消耗hash表的操作时间
/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange1 = function(bills) {
    if(bills[0] != 5) return false
    let hashMap = new Map()

    for(let i=0;i<bills.length;i++) {
        if(bills[i] == 5) {
            hashMap.set(5,(hashMap.get(5) || 0)+1)
        }else if(bills[i] == 10) {
            if(!hashMap.get(5)) return false
            hashMap.set(10,(hashMap.get(10) || 0)+1)
            hashMap.set(5,(hashMap.get(5) || 0)-1)
        }
        else if(bills[i] == 20) {
            console.log(hashMap)
            if( (hashMap.get(5) < 3 && !hashMap.get(10)) || hashMap.get(5)<=0) return false
            hashMap.set(20,(hashMap.get(20) || 0)+1)
            if(hashMap.get(10)) {
                hashMap.set(10,(hashMap.get(10) || 0)-1)
                hashMap.set(5,(hashMap.get(5) || 0)-1)
            }else {
                hashMap.set(5,(hashMap.get(5) || 0)-3)
            }
            
            
        }
    }

    return true
};



// 直接用单一变量来记录纸币的张数
// 消耗空间为1
/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let five = 0
    let ten = 0
    for(let i=0;i<bills.length;i++) {
        if(bills[i] == 5) {
            five++
        }else if(bills[i] == 10) {
            if(five<=0) return false
            ten++
            five--
        }
        else if(bills[i] == 20) {
            if(ten > 0 && five>0) {
                ten--
                five--
            }else if(five >= 3) {
                five -= 3
            }else {
                return false
            }
        }
    }
    return true
};