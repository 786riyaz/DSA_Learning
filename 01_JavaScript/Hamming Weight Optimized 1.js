/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    while (n !== 0) {
        count += n & 1; // check last bit
        n = n >>> 1;    // unsigned right shift
    }

    return count;
};

console.log(hammingWeight(49));  // 3
console.log(hammingWeight(11));  // 3
console.log(hammingWeight(128)); // 1