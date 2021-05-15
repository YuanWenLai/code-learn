// 394. 字符串解码

/* 
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

*/

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


console.log("🚀 ~ ", decodeString('3[a]2[bc]'))