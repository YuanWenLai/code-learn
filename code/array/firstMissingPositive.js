// 缺失的第一个正数
export default (nums) => {
  //方式1,速度较慢
  /*let min =1;
  nums.sort(function (a,b) {
    return a-b
  })
  for (let i =0;i<nums.length;i++){
    if(nums[i]>0){
      if(min===nums[i]){
        ++min
      }
    }
  }
  return min*/

  //方式2，速度较快
  var n = nums.length;
  //处理负数
  //可以不处理超出 length+1 的值， 因为js数组没有越界问题
  //多出了后面两个位置
  //例如数组arr=[1,2,3]
  //第一个for后，变成arr = [1,2,3,4,5]
  for (var i = 0; i <= n + 1; i++) {
    if (nums[i] <= 0 || !nums[i]) nums[i] = n + 1;
  }
  //如果出现正整数 a，将第 a 项的值转成负数，标记 a 出现过
  //第二for后，变成arr = ['',-1,-2,-3,5]
  for (var i = 0; i < n; i++) {
    var a = Math.abs(nums[i])
    nums[a] = - Math.abs(nums[a]);
  }
  //如果第 i 项为正整数，则说明 i 没有出现过（负数说明出现过），即为答案
  //第三个for，arr的第四个位为5整数，即返回4
  for (var i = 1; i <= n + 1; i++) {
    if (nums[i] > 0) return i
  }
}