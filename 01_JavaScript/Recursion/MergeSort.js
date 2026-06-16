/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(left, right) {
        if (left >= right) return;

        const mid = Math.floor((left + right) / 2);

        mergeSort(left, mid);
        mergeSort(mid + 1, right);

        merge(left, mid, right);
    }

    function merge(left, mid, right) {
        const temp = [];
        let i = left;
        let j = mid + 1;

        while (i <= mid && j <= right) {
            if (nums[i] <= nums[j]) {
                temp.push(nums[i++]);
            } else {
                temp.push(nums[j++]);
            }
        }

        while (i <= mid) {
            temp.push(nums[i++]);
        }

        while (j <= right) {
            temp.push(nums[j++]);
        }

        for (let k = 0; k < temp.length; k++) {
            nums[left + k] = temp[k];
        }
    }

    mergeSort(0, nums.length - 1);
    return nums;
};