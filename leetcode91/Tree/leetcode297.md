**### 思路** 

 

`DFS`递归

1. 序列化，深度递归树，选择前序遍历，以根|左|右来打印
2. 若子节点为null、用X来表示，反序列化时需要用到这个表示来构建树

![](https://raw.githubusercontent.com/YuanWenLai/code-learn/master/leetcode91/Tree/leetcode297.png)





1. 定义构建树的函数，参数为序列化的字符
2. 将序列化的str，转化为数组
3. 前序遍历构建树，根-》左子树-》右子树
   - 遇到数值，构建该数值的树，并继续构建该值的左右子树，返回该值的树
   - 若遇到null的表示X，直接返回null

![](https://raw.githubusercontent.com/YuanWenLai/code-learn/master/leetcode91/Tree/leetcode297-2.png)

**### 代码** 

 

```js
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    if(root == null) return 'X'

    const left = serialize(root.left)
    const right = serialize(root.right)

    return root.val + ',' + left + ',' + right
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const nodeList = data.split(',')

    const helper = (nodeList) => {
        // 数组的第一个元素出队
        const rootVal = nodeList.shift()

        // 若,第一个值为X,代表该节点为空
        if(rootVal == 'X') return null

        // 构建该值的树节点,作为为父亲节点
        const root = new TreeNode(rootVal)  
        root.left = helper(nodeList)  // 递归创建左子树
        root.right = helper(nodeList) // 递归创建右子树
        return root
    }

    return helper(nodeList)
};
```

***\*复杂度分析\**** 

\- 时间复杂度：`O(N) `

\- 空间复杂度：`O(N)`