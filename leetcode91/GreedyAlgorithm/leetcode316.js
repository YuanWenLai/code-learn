/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicateLetters = function(s) {
    let hash = new Map()

    // 先用hash储存字符出现的个数
    for(let i=0;i<s.length;i++) {
        if(!hash.has(s[i])) {
            hash.set(s[i],1)
        }else {
            hash.set(s[i],hash.get(s[i])+1)
        }
    }

    // 使用单调栈来保存最小字典集
    let stack = []

    for(let i=0;i<s.length;i++) {
        if(!stack.includes(s[i])) {
            let top = stack[stack.length-1]
            while(stack.length != 0 && top > s[i]) {
                    
                if(hash.get(top) < 1) {
                    break
                }else {
                    stack.pop()
                    
                    top = stack[stack.length-1]
                }
            }
            stack.push(s[i])
        }
        // 每遍历一次，hash表对应的字符减一，需要判断字符是否最后一位，最后一位不能抛出stack中
        hash.set(s[i],hash.get(s[i])-1)
    }

    return stack.join("")
};