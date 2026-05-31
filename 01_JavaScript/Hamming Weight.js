
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    // console.log(n);
    let count = 0;
    do {
        if (n % 2 == 1) {
            count++;
        }
        n = Math.floor(n / 2);
        console.log("Number :: " + n + ", Count :: " + count);
    } while (n != 0);
    return count;
};


console.log(hammingWeight(49)); // Output: 3
console.log(hammingWeight(11)); // Output: 3
console.log(hammingWeight(128)); // Output: 1