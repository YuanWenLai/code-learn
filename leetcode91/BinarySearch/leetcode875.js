// 875. 爱吃香蕉的珂珂


/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


 function canEatAllBananas(piles,H,mid) {
    let h=0
    for(let pile of piles) {
        h += Math.ceil(pile/mid)
    }

    return h <= H
}

 var minEatingSpeed = function(piles, h) {

    let low = 1
    let hight = Math.max(...piles)
    let H = h
    while (low <= hight) {
        let mid = low + ((hight - low) >> 1);
        if (canEatAllBananas(piles, H, mid)) {
            hight = mid - 1;
        } else {
            low = mid + 1;
        }
      }

    return low
};


// see： https://leetcode-solution.cn/solutionDetail?url=https%3A%2F%2Fapi.github.com%2Frepos%2Fazl397985856%2Fleetcode%2Fcontents%2Fthinkings%2Fbinary-search-2.md&type=1



