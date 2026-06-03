/**
 * @param {number[]} arr
 * @return {number}
 */
var total_swaps = function (arr) {
  let sorted = [...arr].sort((a, b) => a - b);

  console.log("Input Array ::", arr);
  console.log("Sorted Array ::", sorted);

  // value -> current index
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  console.log("Mapping ===> ", map);

  let swaps = 0;

  for (let i = 0; i < arr.length; i++) {
    // already correct
    console.log("======================================================")
    console.log("Current Index ::", i, arr[i])
    if (arr[i] === sorted[i]) {
      console.log("*** Already Correct *** ")
      continue;
    }

    swaps++;

    // element that should be here
    let correctValue = sorted[i];

    // where is that value currently?
    let correctIndex = map.get(correctValue);
    console.log("Correct Index ::", correctIndex, " || Correct Value ::", correctValue);

    // current value
    let currentValue = arr[i];

    // swap
    console.log("Before Swapping ::", arr);
    [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    console.log("After Swapping ::", arr);

    // update indexes in map
    map.set(currentValue, correctIndex);
    map.set(correctValue, i);
  }

  return swaps;
};

let input;
input = [10, 19, 6, 5, 3]; // 3
// input = [10, 19, 6, 3, 5]; // 2
// input = [2, 8, 5, 4]; // 1

console.log(total_swaps(input));
