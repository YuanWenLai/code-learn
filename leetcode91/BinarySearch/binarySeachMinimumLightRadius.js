// Minimum Light Radius

/* 给你一个整数 nums 列表，代表一维线上房屋的坐标。 
你有 3 盏路灯，你可以把它们放在坐标线上的任何地方，
坐标 x 处的灯照亮 [x - r, x + r] 中的房子，包括。 
返回所需的最小 r，以便我们可以放置 3 个灯并且所有房屋都被点亮。 */


class Solution {
    solve(nums) {
        // 排序
        nums.sort((a,b)=> a-b)

        const len = nums.length

        // 小于等于3的个数房子，直接返回0，因为本身就有3个灯，能全部覆盖
        if(len <= 3) return 0
        let l = 0
        let r = nums[len-1] - nums[0] //直接取坐标范围

        // 二分法能力检测
        while (l <= r) {
            const mid = Math.floor((l+r)/2)

            if(this.possible(mid,nums)) {
                r = mid - 1
            }else {
                l = mid +1
            }
        }

        return l/2
   }

   // 判断路灯在该直径距离下，是否能照耀全部房子
   possible(diameter,nums) {

    //灯光开始位置
    let start = nums[0]
    // 灯光结束位置
    let end = start + diameter
    // 遍历三个灯光
    for(let i=0;i<3;i++) {
        // 求出该灯光外的没有覆盖到的第一个灯泡的下标
        let idx = this.bright(nums,end)
        if(idx >= num.length) {
            // 若设置完灯之前，能照亮所有房子
            return true
        }
        
        // 重置状态，启示位置为该灯泡没有覆盖到的第一个下标
        start = nums[inx]
        end = start + diameter
    }
   }

   // 寻找最右值
   bright(nums, target) {
       let left = 0
       let right = nums.length - 1
       while (left <= right) {
           const mid = Math.floor((left + right)/2)
           if(num[mid] > target) {
               right = mid - 1
           }else {
               left = mid + 1
           }
       }
       return left
   }
}