/*
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.
Return the largest lucky integer in the array. If there is no lucky integer return -1.

Example 1:
Input: arr = [2,2,3,4]
Output: 2
Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

Example 2:
Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

Example 3:
Input: arr = [2,2,2,3,3]
Output: -1
Explanation: There are no lucky numbers in the array.

Constraints:
1 <= arr.length <= 500
1 <= arr[i] <= 500
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
  console.log("Input Array ::", arr);

  let mapping = new Map();
  let lucky = -1;
  //   Element Value :: Count
  for (let i = 0; i < arr.length; i++) {
    console.log("Current Index ::", i, "Value ::", arr[i], "Mapping ::", mapping);

    if (mapping.has(arr[i])) {
      console.log("Incrementing....");
      mapping.set(arr[i], mapping.get(arr[i]) + 1);
    } else {
      console.log("Adding Element ===> ", arr[i], 1);
      mapping.set(arr[i], 1);
    }
    console.log("=============================================");
  }
  console.log("Mapping :::", mapping);

  for (let [key, value] of mapping) {
    console.log("Key ::", key, "Value ::", value);
    if (key == value) lucky = key;
  }
  return lucky;
};

// console.log(findLucky([1, 2, 2, 3, 3])); // 2
// console.log(findLucky([1, 2, 2, 3, 3, 3])); // 3
console.log(findLucky([2, 2, 3, 4])); // 3
