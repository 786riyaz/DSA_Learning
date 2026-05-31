/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if(k > 0){

    k = k % nums.length;
    console.log("Nums ::", nums, "K ::", k);
    let subArray = nums.slice(nums.length - k);
    console.log(subArray);
    
    let result = subArray;
    result.push(...nums.slice(0, nums.length - k));
    console.log(result);
  }
};

let input = [1, 2, 3, 4, 5];
// let input = [-1, -100, 3, 99];
let k = 2;

console.log(rotate(input, k)); // 4,5,1,2,3

// =========================================================

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {

    k = k % nums.length;

    for (let i = 0; i < k; i++) {

        // store last element
        let last = nums[nums.length - 1];

        // shift all elements right
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }

        // put last element at first position
        nums[0] = last;
    }
};

// =========================================================


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
var rotate = function(nums, k) {

    k = k % nums.length;

    let subArray = nums.slice(nums.length - k);

    let result = subArray.concat(
        nums.slice(0, nums.length - k)
    );

    // modify original array in-place
    for (let i = 0; i < nums.length; i++) {
        nums[i] = result[i];
    }
};