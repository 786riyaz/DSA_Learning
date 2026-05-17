/**
 * @param {number[]} arr
 * @return {number[]}
 */
var missing_elements = function (arr) {
  let i = 0;

  // Place elements at correct indexes
  while (i < arr.length) {
    console.log("\nCurrent Index ::", i, "Element ::", arr[i]);
    let correctIndex = arr[i] - 1;
    // console.log("Correct Index ::", correctIndex, "Element ::", arr[i]);
    // swap only if element is not already correct
    // and duplicate is not causing infinite loop
    console.log("Before :: ", arr+"");
    if (arr[i] !== arr[correctIndex]) {
        [arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]];
    } else {
        i++;
    }
    console.log("After :: ", arr+"");
  }
  console.log("Array after placing elements at correct indexes ::", arr+"");

  // Find missing numbers
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      result.push(i + 1);
    }
  }

  return result;
};

console.log(missing_elements([4, 3, 7, 2, 8, 2, 3, 1])); // [5,6]
