"use strict";

process.stdin.setEncoding("utf-8");

/**
 * @param {number[]} arr
 * @param {number} length
 * @return {number[]}
 */
function sort_array(arr, length) {
  /*Function to sort the array in descending order
After sorting return the sorted array */
  //   console.log(length);
  //   console.log(arr);

  for (let i = 0; i < length; i++) {
    let swapped = false;
    for (let j = 0; j < length-1-i; j++) {
        console.log("Comparing", arr[j], arr[j+1], arr[j+1] > arr[j] ? "swapped" : "")
      if (arr[j+1] > arr[j]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
        break;
    }
    console.log("Array ::", arr)
  }

  return arr;
}
let input = [1, 4, 2, 5, 3];
let length = input.length;
let output = sort_array(input, length);
console.log(output);
