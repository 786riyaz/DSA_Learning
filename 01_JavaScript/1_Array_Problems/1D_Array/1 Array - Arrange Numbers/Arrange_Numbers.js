
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var arrange = function (nums) {
    // console.log(nums);
    let positiveArray = [];
    let negativeArray = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] < 0) {
            negativeArray.push(nums[i]);
        } else {
            positiveArray.push(nums[i]);
        }
    }
    return [...positiveArray, ...negativeArray];
};
