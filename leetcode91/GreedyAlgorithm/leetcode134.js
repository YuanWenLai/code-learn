/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// force
 var canCompleteCircuit = function(gas, cost) {
    for(let i=0;i<gas.length;i++) {
        let rest = gas[i] - cost[i]
        let index = (i+1) % gas.length

        while (rest > 0 && index != i) {
            rest = gas[index] - cost[index]
            index = (index+1) % gas.length
        }

        // 遍历一圈后，还有油剩
        if(rest >= 0 && index === i) return i
    }

    return -1
};

var canCompleteCircuit2 = function(gas, cost) {
    let start = 0
    let curSum = 0
    let totalSum = 0
    for(let i=0;i<gas.length;i++) {
        curSum += gas[i] - cost[i]
        totalSum += gas[i] - cost[i]

        if(curSum < 0) { // 当前累加rest[i]和 curSum⼀旦⼩于0
            curSum = 0   // 当前累加重置
            start = i+1  // 起始位置是下一位
        }
    }

    // 若totalSum总和小于0，则不能跑完一圈
    if(totalSum < 0) return -1

    return start
};