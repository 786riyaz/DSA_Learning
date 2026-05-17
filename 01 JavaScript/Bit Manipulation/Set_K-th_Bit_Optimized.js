
/**
 * @param {number} n - a positive integer
 * @param {number} k - a positive integer
 * @return {number}
 */
var setBit = function (n, k) {
    console.log("N:", n, "K::", k);
    let binaryArray = [];
    let num = n;
    let count = -1;
    while (num > 0) {
        count++;
        console.log("Num ::", num, "Count ::", count);
        binaryArray[count] = num % 2;
        num = Math.floor(num / 2);
    }
    console.log("Binary Array ::",binaryArray);

    if (binaryArray[k] === 0) {
        binaryArray[k] = 1;
    }
    console.log("Binary Array ::",binaryArray);

    let result = 0;
    for (let i = 0; i < binaryArray.length; i++) {
        result += binaryArray[i] * Math.pow(2, i);
    }
    return result;
};


console.log(setBit(5, 1));        // 7



// =========================================

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var setBit = function(n, k) {
    return n | (1 << k);
};

console.log(setBit(5, 1)); // 7