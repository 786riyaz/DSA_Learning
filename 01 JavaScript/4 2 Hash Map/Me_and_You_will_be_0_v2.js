/**
 * @param {number[]} arr
 * @return {boolean}
 */
var twin = function (arr) {
  console.log("Input Array ::", arr);

  let prefixSum = 0;

  // To store seen prefix sums
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    console.log("Index ::", i, "Value ::", arr[i], "Prefix Sum ::", prefixSum);

    // Case 1:
    // Prefix sum itself becomes 0
    if (prefixSum === 0) {
      return true;
    }

    // Case 2:
    // Prefix sum already exists
    if (set.has(prefixSum)) {
      return true;
    }

    // Store current prefix sum
    set.add(prefixSum);
  }

  return false;
};

let input = [0, 10, -10, 9, 9, 9];
// let input = [5, 5, 5, 5, 5];

console.log(twin(input));
