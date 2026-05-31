/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  // console.log("Input Number ::", n);
  let primes = [2];
  for (let i = 3; i < n; i += 2) {
    // console.log(i);
    let isPrime = true;
    for (let j = 3; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes.length;
};

console.log(countPrimes(10));