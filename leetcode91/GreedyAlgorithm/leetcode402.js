/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function(num, k) {
    let arr = (num+'').split('')
    let statck = []

    for(let i=0;i<arr.length;i++) {
        if(statck.length == 0) {
            statck.push(arr[i])
        }
        else if(statck.length < k) {
            let top = statck[statck.length-1]
            while (statck.length != 0 && arr[i] > top) {
                statck.pop()
                top = statck[statck.length-1]
            }
            statck.push(arr[i])

            if(statck.length == k) return statck.join("")
        }
    }
    return statck.join("")
};