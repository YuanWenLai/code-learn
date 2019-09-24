export default (a,b) => {
  let aList = a.includes('+') ? a.split('+') : a.split('-')
  let bList = a.includes('+') ? b.split('+') : b.split('-')
  let x1 = aList[0]
  let x2 = aList[1].length>1 ? parseInt(aList[1].slice(0,aList[1].length-1)) : aList[1]
  let y1 = bList[0]
  let y2 = bList[1].length>1 ? parseInt(bList[1].slice(0,bList[1].length-1)) : bList[1]
  let ret1 = x1*y1 - x2*y2
  let ret2 = x1*y2 + y1*x2
  return ret1 + "+" + ret2+"i"
}