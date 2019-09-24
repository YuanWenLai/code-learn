//卡牌分组
export default (arr) => {
  // 对这副牌进行排序，升序、降序都可以
  if(arr.length === 0){
    return false
  }
  arr.sort((a, b) => a - b)
  //设置最小值
  let min = Number.MAX_SAFE_INTEGER
  //设置最终数组
  let dst = []
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push(arr[i])
    for (let j = i + 1; j < len+1; j++) {
      //如果相等，将这个元素也放进临时变量
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        if (min > tmp.length) {
          //判断最小的取值
          min = tmp.length
        }
        //将临时数组当作元素放进dst数组中
        //注意，不能直接把tmp放进数组，数组是引用类型
        //需要复制新的一个数组
        dst.push([].concat(tmp))
        tmp.length = 0
        //使i=j-1，因为i自身++
        i = j-1
        break
      }
    }
  }
  if(min === 1){
    //如果数组长度等于1
    return false
  }
  return dst.every(item => {
    //判断dst数组中是否每一项满足这个条件
    //有一项不满足则返回False
     return (item.length % min === 0 && min!== 1 || item.length % (min/2) === 0 && min/2 !== 1)
  })
}
