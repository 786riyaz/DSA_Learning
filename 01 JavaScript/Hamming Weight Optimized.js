/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    while (n !== 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
};

console.log(hammingWeight(49));  // 3
console.log(hammingWeight(11));  // 3
console.log(hammingWeight(128)); // 1