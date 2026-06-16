function fibonacci(n) {
  /* Function to return the nth fibonacci number*/
  console.log("Calling for ", n - 1, n - 2);
  let sum = fibo(n);
  console.log("Sum ::", sum);
}
function fibo(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(10)); // 55

fibonacci(25);
