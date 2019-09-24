class Hash1 {
  constructor(){
    this.table = new Array(1000)
  }
  hash(data){
    let total = 0
    for (let i = 0;i<data.length;i++){
      total += data.charCodeAt(i)
      return total% this.table.length
    }
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
