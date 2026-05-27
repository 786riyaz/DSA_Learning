/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
  console.log("Input Number ::", n);
  if (n<=2) return 0;

  let primes = new Array(n).fill(true);

  primes[0] = primes[1] = false;

  console.log("Primes :: ", primes);

  for (let i = 2; i < n / 2; i++) {
    console.log("====================================================");
    console.log("Current Element ::", i);
    if (primes[i] == true) {
      for (let j = i * i; j < n; j = j + i) {
        console.log("Setting False on ", j);
        primes[j] = false;
      }
      console.log("Primes :: " +  primes);
    }
  }
  let count = 0;
  for(let value of primes){
    if(value) count++;
  }
  return count;
};

console.log(countPrimes(10));
