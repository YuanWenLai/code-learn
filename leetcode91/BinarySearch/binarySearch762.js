// 762.Number Stream to Intervals

/**
 * @param {number[]} nums
 * @return {number}
 */
class Solution {
    solve(nums) {
        let res = 0
        for(let i=0;i<nums.length;i++) {
            for(let j=i+1;j<nums.length;j++) {
                if(nums[i] > nums[j]*3) res++
            }
        }
        return res
    }
}