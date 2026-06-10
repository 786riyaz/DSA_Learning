/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  // console.log("Input Numbers ::", nums);
  let final = [];

  for (let i = 0; i < nums.length; i++) {
    // console.log("===========================================");
    // console.log("Current Index ::", i, "Element ::", nums[i]);

    let j = (i + 1) % nums.length;
    let flag = true;
    while (j != i) {
      // console.log("Comparing :: ", i, nums[i], j, nums[j]);
      // console.log("Comparing :: ", nums[i], nums[j]);
      if (nums[i] < nums[j]) {
        // console.log("Pushing :", nums[j]);
        final.push(nums[j]);
        flag = false;
        break;
      }

      j++;
      if (j == nums.length) {
        j = 0;
      }
    }
    if (flag) final.push(-1);
  }
  return final;
};

// console.log(nextGreaterElements([1, 2, 3, 4, 5])); // 2 3 4 5 -1
// console.log(nextGreaterElements([1, 2, 3, 4, 3])); // [2,3,4,-1,4]
// console.log(nextGreaterElements([5,4,3,2,1])); // [-1,5,5,5,5]
// console.log(nextGreaterElements([1,1,1])); // [-1, -1, -1]
console.log(nextGreaterElements([-1, -3, -4, -5, -6, -2, -7])); // -1 -2 -2 -2 -2 -1 -1
