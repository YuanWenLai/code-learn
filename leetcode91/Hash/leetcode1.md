### 思路

#### 两数相加
1、暴力解法
2、hash表
3、双指针

### 代码
1、暴力解法
```js
var twoSum1 = function(nums, target) {
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i] + nums[j] == target) return [i,j]
        }
    }
}
```

**复杂度分析** - 时间复杂度：O(N*N) 。 - 空间复杂度：O（1）

### 代码
2、hash表
```js
var twoSum2= function(nums, target) {
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
```

**复杂度分析** - 时间复杂度：O(N) 。 - 空间复杂度：O（N）

### 代码
3、双指针
```js
var twoSum3= function(nums, target) {
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
}
```

**复杂度分析** - 时间复杂度：O(NLogN) 。 - 空间复杂度：O（N）
