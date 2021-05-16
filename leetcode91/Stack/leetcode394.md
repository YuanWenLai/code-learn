### 思路 
 
1、遍历字符串，将数字存入numArr，非数字存入stack
2、如果不是']'，入栈
3、否则计算当前匹配括号内的字符串
 
 
### 代码 
 
 
``` js

/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    let stack = []
    let numArr = []
    for(let i=0;i<s.length;i++) {
        if(Number.isInteger(s[i]*1) && i > 0 && Number.isInteger(s[i-1]*1)) {
            numArr[numArr.length-1] += s[i]
        }else if(Number.isInteger(s[i]*1)) {
            numArr.push(s[i])
        }else if(s[i] != ']') {
            stack.push(s[i])
        }else {
            formatStack(stack,numArr)
        }
    }
    return stack.join('')
};

function formatStack(stack,numArr) {
    let str = ''
    let retStr = ''
    let num = numArr.pop()
    while(s = stack.pop(), s != '[') {
        str = s + str
    }
    retStr = str
    for(let i = 0;i<num*1 -1;i++) {
        retStr += str
    }
    stack.push(retStr)
}
 
``` 
 
**复杂度分析** 
- 时间复杂度：O(N) 
- 空间复杂度：O(N)