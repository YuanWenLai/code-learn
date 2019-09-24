//重复的子字符串
export default (s) => {
  //用正则匹配
  let re = /^(\w+)\1+$/
  return re.test(s)
}