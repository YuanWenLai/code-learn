### 思路 
 
数组的数值操作
1、倒序遍历数组
2、用一个进位数来保存溢出状态carryNum
3、k值每次使用后剔除个位数的值
 
 
### 代码 
 
 
``` js
 
 let len = num.length - 1
    // 用一个进位数来保存上一位的溢出情况
    let carryNum = 0
    let number = []
    while(len >= 0 || k!=0) {
        let sum = carryNum
        if(len >= 0) {
            sum += num[len]
            len--
        }
        if(k!=0) {
            sum += k%10
            // 剔除k的个位
            k = Math.floor(k/10)
        }
        // 保存新的进位数
        carryNum = Math.floor(sum/10)
        number.unshift(sum % 10)
    }
    if(carryNum > 0) {
        number.unshift(carryNum)
    }
    return number
 
``` 
 
**复杂度分析** - 时间复杂度：O(N)，其中 N 为数组⻓度。 - 空间复杂度：O（N）