**### 思路**

​	`root` :

- 特例处理，root为空时，返回true
- 返回值：`reCur(root.left, root.right)`
- 终止条件
  - 当左右子节点都为空时，返回true
  - 当L或R只有一个为空时，不对称，返回false
  - 当节点的l值不等r值时，返回false

**### 代码**

```js
/**

 \* @param {TreeNode} root

 \* @return {boolean}

 */

var isSymmetric = function(root) {

  return root == null ? true : reCur(root.left, root.right)

};



function reCur(l,r) {

  if(l == null && r == null) return true

  if(l == null || r == null || l.val != r.val) return false

  return reCur(l.left,r.right) && reCur(l.right, r.left)

}
```



***\*复杂度分析\****



\- 时间复杂度：`O(N) `

\- 空间复杂度：`O(N)`