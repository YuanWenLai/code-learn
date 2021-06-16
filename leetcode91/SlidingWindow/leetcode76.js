/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    let curLen = Number.MAX_VALUE
   let tLen = t.length
   let strMatch = 0
   let strHash = new Map()

   // 初始化目标字符的hash
   for(let i=0;i<tLen;i++) {
      let char = t.charAt(i)
      if(strHash.has(char)) {
          let val = strHash.get(char)
          strHash.set(char,val-1)
      }else {
          strHash.set(char,-1)
      }
  }

   // 初始化结果指针
   let curLeft = 0
   let curRight = 0

   // 初始化游动指针
   let l = 0
   let r = 0

   // 1、动态窗口滑动，右指针先行，match到t字符时，再缩小左指针
   while (r<s.length) {
       let char = s.charAt(r)
       
       if(strHash.has(char)) {
           let strVal = strHash.get(char)
           // 字符在hash表的值小于0，证明还没遍历过
           if(strVal < 0) {
               strMatch ++
           }
           // 更新字符在hash表的值
           strHash.set(char,strVal+1)
       }
       // 当满足match到t字符时，再缩小左指针
       while (strMatch === tLen) {
           let lChar = s.charAt(l)
           //比较最小满足的长度
           if(r-l+1 < curLen) {

               curLen = r-l+1
               curLeft = l
               curRight = r
           }
           // 若缩小的左指针是t的字符，需要更新状态
           if(strHash.has(lChar)) {
                
               let strVal = strHash.get(lChar)
              
               // 字符可能存在，多个，当值为-1时，该字符已经减没了
               if(strVal-1<0) {
                   strMatch--
               }
               strHash.set(lChar,strVal-1)
           }
           l++
       }

       r++
   }
   return curLen == Number.MAX_VALUE ? '' : s.substring(curLeft,curRight+1)
};