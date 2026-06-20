/**
 * @param {number} n - a positive integer
 * @param {number} k - a positive integer
 * @return {boolean}
 */
var isBitSet = function (num, k) {
    // Approach 1
    // let count = 0;
    // while (num > 0) {
    //     let rem = num % 2;
    //     if (count == k && rem == 1) {
    //         return true;
    //     }
    //     num = Math.floor(num / 2);
    //     count++;
    // }
    // return false;

    // Approach 2
    console.log(num);   // 13
    console.log(num >> k);   // 3
    console.log((num >> k) & 1);   // 3
    return ((num >> k) & 1) == 1;
};

console.log(isBitSet(13,2));