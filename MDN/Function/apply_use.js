// 使用apply和内置函数
const log = console.log

const arr = [2,46,67,2,23,1,662]

const max = Math.max.apply(null, arr)
console.log("max", max)

// max 662


// 倘若比较的数组非常大，需要一些优化策略

function minOfArray(arr) {
    var min = Infinity
    var QUANTUM = arr.length/4
    for(var i = 0; i< arr.length; i += QUANTUM) {
        var subMin = Math.min.apply(null, arr.slice(i, Math.min(i+QUANTUM,arr.length)))
        log(arr.slice(i, Math.min(i+QUANTUM,arr.length)))
        log(subMin)
        min = Math.min(subMin,min)
    }
    return min
}

const arr1 = [11,444,144,5,677,13,56,23,888,22,43,5634,1,23,54,65,23]

const min = minOfArray(arr1)
console.log("min", min)

// 将较大的数组进行切片处理，类似于桶排序，分多个桶进行比较大小，主要是QUANTUM这个值，根据数组大小来划分多个桶
// [ 11, 444, 144, 5 ]
// 5
// [ 677, 13, 56, 23 ]
// 13
// [ 888, 22, 43, 5634 ]
// 22
// [ 1, 23, 54, 65, 23 ]
// 1

// 结论： 该分片策略，能将效率提升多倍

