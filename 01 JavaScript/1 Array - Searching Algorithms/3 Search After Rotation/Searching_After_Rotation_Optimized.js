/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  console.log("Input ::", nums);
  console.log("Target ::", target);
  let first = 0;
  let last = nums.length - 1;
  let firstMid = Math.floor((first + last) / 2);
  let mid = firstMid;
  let ans = nums[mid];
  console.log("Answer ::", ans);

  while (ans != target) {
    mid = Math.floor((first + last) / 2);
      ans = nums[mid];
    if (ans == target) {
      return mid;
    } else if (ans < target) {
      first = mid + 1;
      console.log("Updated First ::", first);
    } else {
      last = mid - 1;
      console.log("Updated Last ::", last);
    }
  }
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 2)); // 6
