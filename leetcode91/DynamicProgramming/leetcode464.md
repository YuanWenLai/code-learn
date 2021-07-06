### 思路 
 
dp
 
### 代码 
 
 
``` js

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */

 var canIWin = function(maxChoosableInteger, desiredTotal) {
    let sum = 0;
    for (let i = 1; i <= maxChoosableInteger; i++) sum += i;
    if (sum < desiredTotal) return false;
    if (desiredTotal <= 0) return true;
    let m = new Map();
    
    function canWin(M, T, state) {
      if (T <= 0) return false;
      if (m.has(state)) return m.get(state) == 1;
      for (let i = 1; i <= M; i++) {
        if (state & (1 << i)) continue;
        if (!canWin(M, T - (i), state | (1 << i))) {
          return m.set(state, 1);
        }
      }
      m.set(state, -1);
      return false;
    }
    
    return canWin(maxChoosableInteger, desiredTotal, 0);
  };

  ``` 


