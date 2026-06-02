/**
 * @param {number[]} nums
 * @return {number[]}
 */
var arrange = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    // Passed student
    if (nums[right] >= 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];

      left++;
    }
  }

  return nums;
};

console.log(arrange([1, -1, 3, 2, -7, -5, 11, 6])); // 1 3 2 11 6 -1 -7 -5
