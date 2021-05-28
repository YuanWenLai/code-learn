// 1. 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 爆破解法
 var twoSum1 = function(nums, target) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i] + nums[j] == target) return [i,j]
        }
    }
}

// hash法，用空间兑换时间
var twoSum2 = function(nums, target) {
    let hashMap = new Map()
    for(let i=0;i<nums.length;i++) {
        const subNum = target- nums[i]
        if(hashMap.has(subNum)) {
            return [hashMap.get(subNum),i]
        }else {
            hashMap.set(nums[i],i)
        }
    }
}

var twoSum = function(nums, target) {
    let sortNums = [...nums].sort((a,b) => a- b )
    let l =0,
        r = sortNums.length-1
    while(l<r) {
        const subNum = target- sortNums[l] - sortNums[r]
        if(subNum == 0) {
            break
        }else if(subNum > 0) {
            l++
        }else {
            r--
        }
    }
    console.log("🚀  ", sortNums[l],sortNums[r])

    let ret = []
    for(let i=0;i<nums.length;i++) {
        if([sortNums[l],sortNums[r]].includes(nums[i])) {
            ret.push(i)
        }
    }

    return ret
}


twoSum([3,2,4],6)