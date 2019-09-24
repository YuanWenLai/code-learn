//Justin Sobel写的一个位操作的哈希函数

class JSHash {
  constructor(){
    this.table = new Array(1000)
  }
  hash(data){
    var hash = 131
    for (let i =0;i<data.length;i++){
      hash ^=((hash << 5) +data.charCodeAt(i)+(hash >> 2))
    }
    return hash
  }
  insert(key,value){
    let pos = this.hash(key)
    this.table[pos] = value
  }
  get(key){
    let pos = this.hash(key)
    return this.table[pos]
  }
  show(){
    for (let i =0;i<this.table.length;i++){
      if(this.table[i] != undefined){
        console.log(i+ ' ' +this.table[i])
      }
    }
  }
}