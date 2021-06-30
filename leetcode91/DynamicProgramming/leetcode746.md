### 思路 
 
dp 
 
### 代码 
 
``` js
 var knightProbability = function (N, K, r, c) {
    let keyValue = {};
    let getTimes = function (N, K, r, c) {
        if (r < 0 || r >= N || c < 0 || c >= N) {
            return 0;
        }
        if (K == 0)
            return 1;
        let key = K + "|" + r + "|" + c
        if (keyValue[key])
            return keyValue[key];
        //8种跳法
        let times = getTimes(N, K - 1, r + 2, c + 1)
            + getTimes(N, K - 1, r + 2, c - 1)
            + getTimes(N, K - 1, r - 2, c + 1)
            + getTimes(N, K - 1, r - 2, c - 1)
            + getTimes(N, K - 1, r + 1, c + 2)
            + getTimes(N, K - 1, r - 1, c + 2)
            + getTimes(N, K - 1, r + 1, c - 2)
            + getTimes(N, K - 1, r - 1, c - 2);
        keyValue[key] = times;
        return times;
    }
    return getTimes(N, K, r, c) / Math.pow(8, K);
};
``` 



