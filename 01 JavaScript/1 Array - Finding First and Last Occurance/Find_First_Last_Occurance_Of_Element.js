/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var element_search = function (nums, target) {
  console.log("Input Numbers ::", nums);
  console.log("Target ::", target);
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    console.log("i ::", i, "||| nums[i] ::", nums[i]);
    if (nums[i] === target) {
      if (nums[i] === target) {
        first = i;
        break;
      }
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    console.log("i ::", i, "||| nums[i] ::", nums[i]);
    if (nums[i] === target) {
      if (nums[i] === target) {
        last = i;
        break;
      }
    }
  }

  console.log("First ::", first, "Last ::", last);
  return [first, last];
};


// console.log(element_search([1, 1, 1, 1, 1], 2)); // -1 -1
console.log(element_search([5, 7, 7, 8, 8, 8, 8, 8, 10], 8)); // 3 7
// console.log(element_search([1, 1, 2, 3, 4], 1)); // 0 1