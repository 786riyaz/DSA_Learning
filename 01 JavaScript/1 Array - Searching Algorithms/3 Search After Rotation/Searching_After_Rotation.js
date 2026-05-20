
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    console.log("Input ::", nums);
    console.log("Target ::", target);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }
    return -1;
};


console.log(search([4, 5, 6, 7, 0, 1, 2], 2));      // 6
