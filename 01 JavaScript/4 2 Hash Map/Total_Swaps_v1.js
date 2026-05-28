/**
 * @param {number[]} arr
 * @return {number}
 */
var total_swaps = function (arr) {
  const checkSorted = function (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
       return false;
      }
    }
    return true;
  };

  console.log("Input Array ::", arr);
  let output = [...arr];
  arr.sort((a, b) => a - b);
  console.log("Sorted Array ::", arr);
  let isSorted = checkSorted(arr, output);
  let swapCount = 0;
  console.log("Sorted ??", isSorted);

  while (!isSorted) {
    for (let i = 0; i < arr.length; i++) {
      console.log("Current Element ::", arr[i]);
      if (arr[i] != output[i]) {
        let pointer = output.indexOf(arr[i]);
        console.log("Need Swapping at", i, "and", pointer);
        let temp = output[i];
        output[i] = output[pointer];
        output[pointer] = temp;
        swapCount++;
        break;
        // console.log("Place ::",output.indexOf(arr[i]));
      }
    }
    console.log("After Swapping ::", output, "(", swapCount, ")");
    isSorted = checkSorted(arr, output);
  }

  return swapCount;
};

let input;
// input = [10, 19, 6, 5, 3]; // 3
input = [10, 19, 6, 3, 5]; // 2
// input = [2, 8, 5, 4]; // 1

console.log(total_swaps(input));
