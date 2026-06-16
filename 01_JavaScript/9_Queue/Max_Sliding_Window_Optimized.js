/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const deque = [];
    let front = 0;
    const result = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove out-of-window indices
        while (front < deque.length && deque[front] <= i - k) {
            front++;
        }

        // Remove smaller elements from back
        while (
            deque.length > front &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[front]]);
        }
    }

    return result;
};