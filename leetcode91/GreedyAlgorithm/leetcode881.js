// 881. 救生艇

/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
    let res = 0
    let l = 0
    let r = people.length -1
    people.sort((a, b) => a - b)
    while(l <= r) {
        if(people[l] + people[r] <= limit) {
            l++
            r--
        }else {
            r--
        }

        res ++
    }
    return res
};