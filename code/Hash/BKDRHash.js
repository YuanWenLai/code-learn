class BKDRHash {
  constructor(){
    this.table = new Array()
  }

  BkdrHash(data){
    let seed = 131
    let hash = 0
    for (let i =0;i<data.length;i++){
      hash = (hash * seed)+data.charAt(i)
    }
    return hash
  }

  insert(key,val){
    let index = this.BkdrHash(key)
    console.log(index)
    this.table[index] = val
  }

  show(){
    console.log(this.table)
    for (let i in this.table){
      console.log(i + "->" +this.table[i])
    }
  }
}