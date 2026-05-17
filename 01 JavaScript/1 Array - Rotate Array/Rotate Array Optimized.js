/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function (nums, k) {
  k = k % nums.length;

  if (false) {
    let subArray = nums.slice(nums.length - k);
    let result = subArray.concat(nums.slice(0, nums.length - k));
    // modify original array in-place
    for (let i = 0; i < nums.length; i++) {
      nums[i] = result[i];
    }
    return nums;
  }

  console.log(`Nums: ${nums}, k: ${k}`);
  console.log(nums.slice(nums.length - k));
  console.log(nums.slice(0, nums.length - k));
  //   nums = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));
  //   console.log(nums);

  let result = nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));

  for (let i = 0; i < nums.length; i++) {
    nums[i] = result[i];
  }
  return nums;
};

// let input = [1, 2, 3, 4, 5];        // 4,5,1,2,3
let input = [-1, -100, 3, 99]; // 3,99,-1,-100
let k = 2;

rotate(input, k);
// console.log(rotate(input, k));
console.log(input);
