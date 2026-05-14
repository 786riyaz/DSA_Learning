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

  for (let i = 0; i < length - 1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      let temp = arr[maxIndex];
      arr[maxIndex] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

console.log(sort_array([12, 11, 13, 5, 6], 5));
