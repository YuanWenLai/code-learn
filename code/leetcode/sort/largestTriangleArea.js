//最大三角形面积
export default (points) =>{
  let len = points.length-1
  let arr = points.sort((a,b)=>{
    return a[0]-b[0]
  })
  let width = arr[len][0] - arr[0][0]
  let arr2 = points.sort((a,b)=>{
    return a[1]-b[1]
  })
  let height = arr2[len][1] - arr2[0][1]
  console.log([height,width])
  return height*width/2
}