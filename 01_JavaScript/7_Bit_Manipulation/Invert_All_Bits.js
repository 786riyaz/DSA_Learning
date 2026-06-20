/**
 * @param {number} num - a positive integer
 * @return {number}
 */
var invertBits = function(num) {
    // console.log("Input Number ::", num);
    return (~num) >>> 0;
};


console.log(invertBits(5)); // 4294967290