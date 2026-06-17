
/**
 * @param {number} n - a positive integer
 * @param {number} k - a positive integer
 * @return {number}
 */
var unsetBit = function (n, k) {
    // console.log("N ::", n);
    // console.log("K ::", k);
    // console.log("And With ::", 15 - 2 ** k);
    // return n & (255 - (2 ** k));
    // console.log(~5);
    console.log(1 << 1);
    console.log(1 << 2);
    console.log(1 << 3);
    console.log(1 << 4);
    console.log(1 << 5);
    // return n & ~(1 << k)
};


console.log(unsetBit(13, 2)); // 11
// console.log(unsetBit(15, 1)); // 13
// console.log(unsetBit(15, 0)); // 14
// console.log(unsetBit(15, 2)); // 11