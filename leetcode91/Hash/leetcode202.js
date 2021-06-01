// 202. 快乐数

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    function getNext(n) {
        return n.toString().split('').map( i => i**2).reduce((a,b)=>a+b)
    }

    let slow = n
    let fast = getNext(n)
    while(fast !== 1 && fast !== slow) {
        slow = getNext(slow)
        fast = getNext(getNext(fast))
    }
    return fast == 1
};