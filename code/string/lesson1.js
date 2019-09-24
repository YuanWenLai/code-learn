
export default (str) => {
  // 先将字符串分割成数组
  // 将分割的数组遍历后进行反转再结合成字符串
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
