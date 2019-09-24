//是目前公布的最有效的哈希函数
class DJBHash {
  constructor(){
    this.table = new Array()
  }
  DjbHash(data){
    /*
    * 如果hash值加上data.charCodeAt(i)会变成数字，table的长度会很大，浪费内存
    * 若是data.charAt(i)，则得到的table不是array，是一个普通对象，
    * */
    /*
    * [0000177573david: "david", 000177573mike: "mike", 000177573jack: "jack", 00177573amy: "amy", 0177573kk: "kk", …]
    * */
    var hash = 5381
    for (let i=0;i<data.length;i++){
      hash = ((hash << 5)+hash) + data.charAt(i)
    }
    return hash
  }
  insert(key,val){
    let index = this.DjbHash(key)
    this.table[index] = val
    /*console.log(index)
    console.log(this.table[index] )*/
  }
  show(){
    for (let i in this.table){
      console.log(i +'-> '+ this.table[i])
    }
  }

  get(key){
    let index = this.DjbHash(key)
    return this.table[index]
  }
}