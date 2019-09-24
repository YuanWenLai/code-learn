export default (str1,str2) => {
  let arr1 = str1.split('')
  let arr2 = str2.split('')
  let ret1 = arr1.map(item =>{
    if(/^[0-9]/.test(item)){
      return item*1+1
    }else if(/^[a-z]/.test(item)){
      if(item == 'z'){
        return 'A'
      }
      let strNum = item.charCodeAt()
      return String.fromCharCode(strNum*1+1).toUpperCase()
    }else if(/^[A-Z]/.test(item)){
      if(item == 'Z'){
        return 'a'
      }
      let str = item.toLowerCase()
      let strNum2 = str.charCodeAt()
      return String.fromCharCode(strNum2*1+1)
    }else {
      return item
    }
  })
  let ret2= arr2.map(item =>{
    if(/^[0-9]/.test(item)){
      return item*1-11
    }else if(/^[a-z]/.test(item)){
      if(item == 'a'){
        return 'Z'
      }
      let strNum = item.charCodeAt()
      return String.fromCharCode(strNum*1-1).toUpperCase()
    }else if(/^[A-Z]/.test(item)){
      if(item == 'A'){
        return 'z'
      }
      let str = item.toLowerCase()
      let strNum2 = str.charCodeAt()
      return String.fromCharCode(strNum2*1-1)
    }else {
      return item
    }
  })
  return [ret1.join(''),ret2.join('')]
}