// leetcode 11-盛最多水的容器

/* 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。 */

export default (arr) => {
    let max = 0
    for(let i = 0;i<arr.length;i++) {
        for(let j=i+1;j<arr.length;j++) {
            let height = arr[i]
            let aera = (j-i)*height
            if(aera > max ) {
                max = height
            }
        }
    }
    return max
}