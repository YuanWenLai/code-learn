// 705. 设计哈希集合

/**
 * Initialize your data structure here.
 */
 var MyHashSet = function() {
    this.BASE = 731
    this.table = new Array(this.BASE).fill(0).map(()=>new Array())
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    const h = this.hash(key)
    for(const ele of this.table[h]) {
        if(ele === key) return
    }
    this.table[h].push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    const h = this.hash(key)
    const hashArr = this.table[h]
    for(let i=0;i<hashArr.length;i++) {
        if(hashArr[i] === key) {
            hashArr.splice(i,1)
            return
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    const h = this.hash(key)
    for(const ele of this.table[h]) {
        if(ele === key) return true
    }
    return false
};

MyHashSet.prototype.hash = function(key) {
    return key % this.BASE
};
