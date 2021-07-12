### 思路

1、hash解法，访问hash耗时
2、贪心

### 代码

```js
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
```

**复杂度分析** - 时间复杂度：O(N)) 。 - 空间复杂度：O（N）


```js
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange2 = function(bills) {
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
            // 贪心：优先消耗10美元，因为5美元的找零⽤处更⼤，能多留着就多留着
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
```

**复杂度分析** - 时间复杂度：O(N)) 。 - 空间复杂度：O（1）
