export default (digits) => {
  /*//建立映射表
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  //将字符串变成数组。例如 ‘23’ => [2,3]
  let num = str.split('')
  //获取数字数组对应的映射数组，将其变成code数组。例如[2,3] => ['abc','def']
  let code = []
  num.forEach(item=> {
    if(map[item]){
      code.push(map[item])
    }
  })
  let comb = (arr) => {
    let tmp = []
    console.log(arr)-----------
    for(let i = 0,len1 = arr[0].length;i<len1;i++){
      for (let j = 0, len2 = arr[1].length;j<len2;j++){
        console.log(arr[0].split('')[i]+arr[1].split('')[j])
        //tmp.push(`${arr[0].split('')[i]}${arr[1].split('')[j]}`)
      }
    }
    arr.splice(0,2,tmp)
    if(arr.length > 1){
      comb(arr)
    }else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)*/

  const keyBoard = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  // 处理特殊情况，输入空和输入一个数字
  if(digits.length === 0) {
    return []
  }
  if(digits.length === 1) {
    return keyBoard[digits].split('')
  }
  // 输入字符串分解
  const inputArr = digits.split('');
  if(inputArr[0] === '') {
    inputArr.shift()
  }
  if(inputArr[inputArr.length-1] === '') {
    inputArr.pop()
  }

  let pre = keyBoard[inputArr.shift()]
  let result

  // 循环处理
  do {
    let last = keyBoard[inputArr.shift()]

    if(!pre || !last) {
      break
    }
    result = []
    for(let i = 0; i < pre.length; i++) {
      for(let j = 0; j < last.length; j++) {
        result.push(pre[i] + last[j])
      }
    }

    pre = result

  } while(inputArr.length > 0)

  return result;
};
