//无人机
export default (n,m,arr) => {
  //初始化二维空间数组
  let ret = new Array(n).fill(0)
  for(let i=0;i<ret.length;i++){
    ret[i]=[]
  }

  //遍历多行返回数据
  for (let i=0;i<arr.length;i++){
    let info = arr[i].split('')
    console.log(info)
    if(i == 0){
      ret[i][0] = info[i]
    }
  }
}


//解析多行字符
function parse() {

}


//返回地图数据
function mapData() {

}

