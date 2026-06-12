/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  console.log("Input Array ::", nums);
  console.log("Window Size ::", k);

  let deque = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove elements outside window
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove smaller elements
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      console.log(nums[i], deque[deque.length - 1], nums[deque[deque.length - 1]], nums[deque[deque.length - 1]] < nums[i]);
      console.log(deque.pop());
    }

    deque.push(i);
    console.log("Pushing Index in Queue ::", i, "===>", deque);

    // Window completed
    if (i >= k - 1) {
      console.log("Pushing in Result ::", deque[0], nums[deque[0]]);
      result.push(nums[deque[0]]);
    }
  }

  return result;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // 3 3 5 5 6 7
// console.log(maxSlidingWindow([1,2,3,4,5], 3));  // 3 4 5
// console.log(maxSlidingWindow([1], 1));  // 3
// console.log(maxSlidingWindow([1, 2, 3, 1, 2, 5], 1)); // 1, 2, 3, 1, 2, 5
// console.log(maxSlidingWindow([ 3, 2, -4, -3, 1 ], 2));  // 3 2 -3 1
