/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  console.log("Numbers Array ::", nums);
  console.log("Target ::", target);

  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor(low + (high - low) / 2);
  console.log(`Initial Low: ${low}, Mid: ${mid}, High: ${high}`);

  while (!(mid == low && mid == high)) {
    console.log(`Low: ${low}, Mid: ${mid}, High: ${high}`);
    console.log(`nums[mid]: ${nums[mid]}`);
    if (nums[mid] == target) {
      return mid;
    }
    if (nums[mid] < target) {
      low = mid;
    } else {
      high = mid;
    }
    mid = Math.floor(low + (high - low) / 2);
  }
  return -1;
};

// console.log(search([1, 2, 3, 4, 5, 5], 5)); // 4
console.log(search([1, 2, 3, 4, 5, 5], 6)); // -1
// console.log(search([1, 2, 3, 4, 5, 5], 1)); // 0
// console.log(search([-1, 0, 3, 5, 9, 12], 9));       // 4
