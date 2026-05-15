/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    // Edge case
    if (dividend === 0) return 0;

    // Determine sign
    let negative = (dividend < 0) !== (divisor < 0);

    // Convert to positive
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    let result = 0;
    
    while (dividend >= divisor) {
        let temp = divisor;
        let multiple = 1;
        console.log(dividend, divisor, result, temp, multiple);

        // Keep doubling
        while (dividend >= (temp << 1)) {
            temp = temp << 1;
            multiple = multiple << 1;
                console.log("------->", dividend, divisor, result, temp, multiple);
        }

        dividend -= temp;
        result += multiple;
    }

    return negative ? -result : result;
};

// console.log(divide(5, 2));       // 2
// console.log(divide(24, 1));      // 24
console.log(divide(-100, -3));   // 33
// console.log(divide(37, 4));      // 9
// console.log(divide(-100, -9));   // 11