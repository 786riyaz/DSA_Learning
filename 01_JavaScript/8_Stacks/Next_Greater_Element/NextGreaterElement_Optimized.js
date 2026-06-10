/**
 * @param {number[]} nums
 * @return {number[]}
 */

var nextGreaterElements = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(-1);
  const stack = [];

  for (let i = 0; i < 2 * n; i++) {
    const idx = i % n;
    console.log("============================================================\n");
    console.log("IDX ::", idx, "||| Nums at IDX ::", nums[idx]);
    console.log("Stack Top Index ::", stack.length - 1, "||| Value ::", stack[stack.length - 1]);
    console.log("Comparing ::", nums[stack[stack.length - 1]], nums[idx], "===>", stack.length && nums[stack[stack.length - 1]] < nums[idx]);
    while (stack.length && nums[stack[stack.length - 1]] < nums[idx]) {
      console.log("True ::", nums[stack[stack.length - 1]], nums[idx]);
      let topElement = stack.pop();
      console.log("---------------------> Popping ::", topElement);
      result[topElement] = nums[idx];
      console.log("Result Updated ::", result);
    }

    if (i < n) {
      stack.push(idx);
      console.log("Pushing ::", idx, "||| Stack ::", stack);
    }
  }

  return result;
};

// console.log(nextGreaterElements([1, 2, 3, 4, 5])); // 2 3 4 5 -1
// console.log(nextGreaterElements([1, 2, 3, 4, 3])); // [2,3,4,-1,4]
console.log(nextGreaterElements([5,4,3,2,1])); // [-1,5,5,5,5]
// console.log(nextGreaterElements([1,1,1])); // [-1, -1, -1]
// console.log(nextGreaterElements([-1, -3, -4, -5, -6, -2, -7])); // -1 -2 -2 -2 -2 -1 -1
