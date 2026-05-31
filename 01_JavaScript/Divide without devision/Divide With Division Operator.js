/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let negative = false;
  if (divisor < 0) {
    negative = true;
    divisor = Math.abs(divisor);
  }
  if (dividend < 0) {
    negative = !negative;
    dividend = Math.abs(dividend);
  }

  let count = 0;
  while (dividend >= divisor) {
    dividend -= divisor;
    count++;
  }
  if (negative) {
    return -count;
  }
  return count;
};

console.log(divide(5, 2)); // 2
console.log(divide(24, 1)); // 24
console.log(divide(-100, -3)); // 33
console.log(divide(37, 4)); // 9
console.log(divide(-100, -9)); // 11
