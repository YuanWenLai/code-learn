// 769. 最多能完成排序的块

var maxChunkToSorted = function(arr) {
    let stack = []
    for(let i=0;i<arr.length;i++) {
        let len = stack.length
        if(len == 0 || stack[len-1] <= arr[i]) {
            stack.push(arr[i])
        }else {
            const head = stack.pop()
            while(stack[stack.length-1] > arr[i]) {
                stack.pop()
            }
            stack.push(head)
        }
    }
    return stack.length
}

console.log(maxChunkToSorted([2,1,3,4,4]))