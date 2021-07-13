

**### 代码**

```js
var Trie = function() {
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for(const c of word){
        if(!node[c]) node[c] = {};
        node = node[c];
    }
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, node = this.root) {
    
    for(const c of word){
        if(!node[c]) return false
        node = node[c];
    }

    return node.isEnd === true 
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix, node = this.root) {
    for(const c of prefix){
        if(!node[c]) return false
        node = node[c];
    }
    return true
};
```



***\*复杂度分析\****



\- 时间复杂度：`O(1) `

\- 空间复杂度：`O(N)`