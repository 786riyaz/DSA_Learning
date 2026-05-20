/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var element_search = function (nums, target) {
  console.log("Input ::", nums);
  function findFirst() {
    let first = 0;
    let last = nums.length - 1;
    let ans = -1;

    while (first <= last) {
      let mid = Math.floor((first + last) / 2);
      console.log("First ::", first, "Mid ::", mid, "Last ::", last);

      if (nums[mid] == target) {
        ans = mid;
        last = mid - 1;
        console.log("Ans ::", ans, "Mid ::", mid, "Last ::", last);
      } else if (nums[mid] < target) {
        first = mid + 1;
        console.log("Updated First ::", first);
      } else {
        last = mid - 1;
        console.log("Updated Last ::", last);
      }
    }
    console.log("First ::", first, "Last ::", last);
    console.log("Ans ::", ans);
    console.log("================================");
    return ans;
  }

  function findLast() {
    let first = 0;
    let last = nums.length - 1;
    let ans = -1;

    while (first <= last) {
      let mid = Math.floor((first + last) / 2);
      console.log("First ::", first, "Mid ::", mid, "Last ::", last);

      if (nums[mid] == target) {
        ans = mid;
        first = mid + 1;
        console.log("Ans ::", ans, "Mid ::", mid, "Last ::", last);
      } else if (nums[mid] < target) {
        first = mid + 1;
        console.log("Updated First ::", first);
      } else {
        last = mid - 1;
        console.log("Updated Last ::", last);
      }
    }
    console.log("First ::", first, "Last ::", last);
    console.log("Ans ::", ans);
    console.log("================================");
    return ans;
  }

  return [findFirst(), findLast()];
};

console.log(element_search([5, 7, 7, 8, 8, 8, 8, 10], 8)); // [3,6]
// console.log(element_search([1,1,1,1,1], 2)); // [-1,-1]
// console.log(element_search([1,1,2,3,4], 1)); // [0,1]
