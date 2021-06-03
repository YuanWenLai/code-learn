// 287. 寻找重复数

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let slow = 0
    let fast = 0
    while(true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        // 当快慢指针相遇时
        if(slow == fast) {
            // 放另外一只慢乌龟到起点  
            let _slow = 0
            // 两只慢乌龟相遇时，得到入环的节点
            while(nums[slow] != nums[_slow]) {
                slow = nums[slow]
                _slow = nums[_slow]
            }
            return nums[_slow]
        }
    }
};