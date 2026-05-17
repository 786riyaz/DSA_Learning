/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {

    k = k % nums.length;

    reverse(nums, 0, nums.length - 1);

    reverse(nums, 0, k - 1);

    reverse(nums, k, nums.length - 1);
};

function reverse(arr, left, right) {

    while (left < right) {

        let temp = arr[left];

        arr[left] = arr[right];

        arr[right] = temp;

        left++;
        right--;
    }
}