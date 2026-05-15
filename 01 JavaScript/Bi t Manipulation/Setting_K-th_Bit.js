
/**
 * @param {number} n - a positive integer
 * @param {number} k - a positive integer
 * @return {number}
 */
var setBit = function (n, k) {
    console.log();
    // console.log(n, k);
    // Converting to Binary
    let binary = [];
    while (n > 0) {
        if (n % 2 == 0) {
            binary.push(0);
        } else {
            binary.push(1);
        }
        n = Math.floor(n / 2);
    }
    console.log(binary);

    // Setting K-th bit
    binary[k] = 1;

    // Converting to Decimal
    let total = 0;
    for (let i = 0; i < binary.length; i++){
        total += (binary[i] ?? 0) * (2 ** i);
        console.log("i ::", i, "binary[i] ::", binary[i], "total ::", total);
    }
    console.log("Total ::",total);
    return total;
};


// console.log(setBit(12, 2)); // 12
// console.log(setBit(356425, 18)); // 356425
// console.log(setBit(1365, 12)); // 5461
console.log(setBit(5, 1)); // 7
// console.log(setBit(1563849, 26)); // 68672713
console.log(setBit(1254, 0)); // 1255
