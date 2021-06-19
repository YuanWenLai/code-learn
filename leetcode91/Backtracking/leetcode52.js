/**
 * @param {number} n
 * @return {number}
 * @param row 当前层
 * @param cols 列
 * @param pie 左斜线
 * @param na 右斜线
 */
const totalNQueens = function (n) {
    let res = 0;
    const dfs = (n, row, cols, pie, na) => {
        if (row >= n) {
            res++;
            return;
        }
        // 将所有能放置 Q 的位置由 0 变成 1，以便进行后续的位遍历
        // 也就是得到当前所有的空位
        let bits = ~(cols | pie | na) & ((1 << n) - 1);
        while (bits) {
            // 取最低位的1
            let p = bits & -bits;
            // 把P位置上放入皇后
            bits = bits & (bits - 1);
            // row + 1 搜索下一行可能的位置
            // cols ｜ p 目前所有放置皇后的列
            // (pie | p) << 1 和 (na | p) >> 1) 与已放置过皇后的位置 位于一条斜线上的位置
            dfs(n, row + 1, cols | p, (pie | p) << 1, (na | p) >> 1);
        }
    };
    dfs(n, 0, 0, 0, 0);
    return res;
};