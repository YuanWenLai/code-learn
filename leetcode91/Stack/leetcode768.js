// 768. 最多能完成排序的块 II
class Stack{
    constructor() {
        this.list = []
    }
    push(val) {
        this.list.push(val)
    }
    pop() {
        return this.list.pop()
    }
    empty() {
        return this.list.length == 0
    }
    peek() {
        return this.list[this.list.length - 1]
    }
    size() {
        return this.list.length
    }
}

var maxChunkToSorted = function(arr) {
    const stack = new Stack()
    for(let i =0;i<arr.length;i++) {
        // 栈为空 or 栈顶小于当前值
        if(stack.empty() || stack.peek() <= arr[i]) {
            stack.push(arr[i])
        }else {
            // 保存栈顶的最大值为头，抛出大于当前值的栈内元素
            const head = stack.pop()
            while(stack.peek() > arr[i]) {
                stack.pop()
            }
            stack.push(head)
        }
    }
    return stack.size()
}

var maxChunksToSorted2 = function(arr) {
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
};

console.log(maxChunkToSorted([1,2,3,4,5]))