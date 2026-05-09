"use strict";

process.stdin.setEncoding("utf-8");

/**
 * @param {number[]} arr
 * @param {number} length
 * @return {number[]}
 */
function sort_array(arr, length) {
  /*Function to sort the array in ascending order
After sorting return the sorted array */
  let sortedArray = [arr[0]];

  for (let i = 1; i < length; i++) {
    console.log("Inserting ::", arr[i]);
    for (let j = sortedArray.length - 1; j >= 0; j--) {
      console.log(
        `Comparing ${sortedArray[j]} < ${arr[i]} == ${arr[i] < sortedArray[j]}`,
      );
      if (arr[i] < sortedArray[j]) {
        console.log("Need to Move the element to right ");
        sortedArray[j + 1] = sortedArray[j];
        console.log("Moved Element to right", sortedArray);
      }
      if(j == sortedArray.length-1){
          sortedArray[j+1] = arr[i];
          console.log("Added Element to Last", sortedArray);
          break;
        } else {
            sortedArray[j] = arr[i];
            console.log("Added Element to Current", sortedArray);
        }
    }

    console.log("Sorted Till Now ::", sortedArray);
  }
  return sortedArray;
}

let input = [4, 3, 5, 2, 1];
let length = input.length;
console.log(sort_array(input, length)); // [1,2,3,4,5]
