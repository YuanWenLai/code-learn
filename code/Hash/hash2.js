/*
* 采用的是平方取中法构建哈希函数
* 开放地址法线性探测法进行解决冲突
* */

class Hash2 {
  constructor(){
    this.table = new Array(1000)
  }
  hash(data){
    var total = 0
    for (let i=0;i<data.length;i++){
      //获得字符的码长
      total += data.charCodeAt(i)

    }
    var s = total * total + ''
    //保留中间2位
    var index = s.charAt(s.length/2 -1)*10+s.charAt(s.length/2)*1
    console.log("hash value :" +data + '-> '+index)
    return index
  }
  solveClash(index,value){
    var table = this.table
    console.log(index)
    //开放线性地址法解决冲突
    for (let i =0;index+i<1000;i++){
      if(table[index+i] === undefined){
        alert(111)
        table[index+i] = value
        break
      }
    }
  }
  insert(key,val){
    var index = this.hash(key)
    //取中当哈希表中索引
    if(this.table[index] === undefined){
      this.table[index] = val
    }else {
      //如果该位置有值，开放线性地址法解决冲突
      this.solveClash(index,val)
    }
  }

  get(key){
    var pos = this.hash(key)
    return this.table[pos]
  }

  show(){
    for (let i=0;i<this.table.length;i++){
      if(this.table[i] != undefined){
        console.log(i + ': ' +this.table[i])
      }
    }
  }
}