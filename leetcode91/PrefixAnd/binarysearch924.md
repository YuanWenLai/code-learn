### 思路

#### Delete Sublist to Make Sum Divisible By K
1、同余定理。 若 (a - b)%k = 0, 则 a%k = b%k. （等价的有 a%k - b%k = 0）
2、使用前缀和得出一个target_remainder,目标余数totalSum % k
3、前缀和：若删去的子数组起始下标分别为i, j，则delete_sum = presum[j] - presum[i-1]，结合定理得：target_remainder =  （presum[j]-presum[j-1]）%k
4、通过前缀和，记录每次遍历前缀和的余数，判断该项前面是否有记录过的余数等于现在计算得到的余数减掉目标余数。
5、若有，则获取之前对应的下标i-1，和现在的对应的下标j，二者相减即为删去的子数组的元素个数。选取最小的个数即可

### 代码

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class Solution {
    solve(nums, k) {
        let target_remainder = (nums.reduce((a,b)=>a+b)+k) % k
        // 若目标余数为0
        if(target_remainder === 0) return 0

        let n = nums.length
        let res = n
        let preSum = 0
        let hashMap  = {
            0: -1
        }

        for(let i=0;i<n;i++) {
            // 计算前缀和
            preSum += nums[i]
            // 取模
            let modulus = (preSum + k) % k
            hashMap[modulus] = i

            let key = (modulus - target_remainder +k) % k
            if(key in hashMap) {
                res = Math.min(res,i-hashMap[key])
            } 
        }

        if(res !== n) {
            return res
        }else {
            return -1
        }
    }
}
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（N）
