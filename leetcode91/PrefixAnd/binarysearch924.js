// Delete Sublist to Make Sum Divisible By K


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
        let preSum = 0
        let hashMap  = {
            0: -1
        }
        let res = n

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


function test(nums,k) {
        let target_remainder = (nums.reduce((a,b)=>a+b)+k) % k

        // 若目标余数为0
        if(target_remainder === 0) return 0

        let n = nums.length
        let preSum = 0
        let hashMap  = {
            0: -1
        }
        let res = n

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

// test([1,8,6,4,5],7)
console.log("🚀 ~ file: ", test([1,8,6,4,5],7))
