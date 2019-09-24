//9.回文数

/**
 * @param {number} str
 * @return {boolean}
 */
/*export default (str) => {
  let str2  =  str.toString().split('').reverse().join('')
  return str == str2
}*/

/*//方法二
export default (str) => {
  let str1 = str.toString()
  let len = str1.length
  let ret = ''
  for (let i = len-1;i>=0;i--){
    ret += str1[i]
  }
  return ret == str1
}*/

//方法三
export default (str) => {
  let str1 = str.toString()
  let len = str1.length
  for (let i=0;i<len;i++){
    if(str1[i] != str1[len-1-i]){
      return false
    }
  }
  return true
}