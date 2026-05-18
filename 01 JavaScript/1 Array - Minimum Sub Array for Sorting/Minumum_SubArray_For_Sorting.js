/*
Example 1:
Input:[10,12,20,30,25,40,32,31,35,50,60]
Output: 6
30 25 40 32 31 35

Example 2:
Input:[0, 1, 15, 25, 6, 7, 30, 40, 50]
Output: 4
15 25 6 7
*/

function findUnsortedSubarray(arr) {
  console.log(arr);
  let length = arr.length;
  let leftBoundry = 0;
  let rightBoundry = length - 1;
  let leftMaxIndex = 0;
  let rightMinIndex = length - 1;

  for (let i = 0; i < length; i++) {
    console.log("Current Element ::", arr[i]);
    if (arr[leftMaxIndex] < arr[i]) {
      leftMaxIndex = i;
    }
    if (arr[i] > arr[i + 1]) {
      leftBoundry = i;
      break;
    }
  }
  if(leftBoundry === 0) {
    return 0;
  }
  console.log("===");

  for (let i = rightBoundry; i >= 0; i--) {
    console.log("Current Element ::", arr[i]);
    if (arr[rightMinIndex] > arr[i]) {
      rightMinIndex = i;
    }
    if (arr[i - 1] > arr[i]) {
      rightBoundry = i;
      break;
    }
  }
  console.log("===");

  console.log("Left Boundry ::", leftBoundry, arr[leftBoundry], "|||| Right Boundry ::", rightBoundry, arr[rightBoundry]);
  console.log("Left Max Index ::", leftMaxIndex, "|||| Right Min Index ::", rightMinIndex);

  let min = arr[leftBoundry];
  let max = arr[leftBoundry];
  for (let i = leftBoundry; i <= rightBoundry; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log("Middle Min ::", min, "Middle Max ::", max);

  //   expanding range
  for (let i = 0; i <= leftBoundry; i++) {
    console.log("Comparing ::", arr[i], "with ::", min);
    if (arr[i] > min) {
      leftBoundry = i;
      break;
    }
  }
  console.log("New Boundry", leftBoundry, rightBoundry);
  for (let i = length - 1; i >= rightBoundry; i--) {
    console.log("Comparing ::", arr[i], "with ::", max);
    if (arr[i] < max) {
      rightBoundry = i;
      break;
    }
  }
  console.log("New Boundry", leftBoundry, rightBoundry);
  return rightBoundry - leftBoundry + 1;
}

// let input = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]; // 6
// let input = [0, 1, 15, 25, 6, 7, 30, 40, 50]; // 4
// let input = [1, 2, 3, 4, 5]; // 0
let input = [1, 2, 7, 5, 6, 8]; // 3
console.log(findUnsortedSubarray(input));
