function sumOfMultiples(n, x) {
  // console.log("Input ::", n);
  // console.log("Multiplier ::", x);

  // Approach 1
  // let sum = 0;
  // let num = 0;
  // while (num < n) {
  //     num += x;
  //     sum += num;
  //     // console.log("Num ::", num);
  // }
  // // console.log("Final Sum ::", sum - x);
  // return sum - num;

  // Approach 2
  const k = Math.floor((n - 1) / x);
  // console.log("K ::", k);
  return (x * k * (k + 1)) / 2;
}

console.log(sumOfMultiples(10, 3)); // 3+6+9 = 18
console.log(sumOfMultiples(12526, 2365)); // 2365 + 4730 + 7095 + 9460  + 11825 = 35475
