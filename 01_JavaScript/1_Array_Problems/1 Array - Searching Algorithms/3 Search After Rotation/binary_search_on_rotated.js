function search(nums, target) {
  function binarySearch(nums, target, startIndex, lastIndex) {
    // console.log("=====================================");
    // console.log("Start ::", startIndex,"(",nums[startIndex], ") End ::", lastIndex, "(",nums[lastIndex],")");
    let mid = Math.floor((startIndex + lastIndex) / 2);
    // console.log("Mid ::", mid, "(", nums[mid], ") ||| Target :: ", target);

    if (nums[mid] == target) {
      return mid;
    }

    if (nums[startIndex] < nums[mid] && nums[startIndex] <= target && nums[mid] >= target) {
      // console.log("First Half is sorted and element may be there");
      lastIndex = mid-1;
      return binarySearch(nums, target, startIndex, lastIndex);
    } else if (nums[mid] < nums[lastIndex] && nums[mid] <= target && nums[lastIndex] >= target) {
      // console.log("Second Half is sorted and element may be there");
      startIndex = mid+1;
      return binarySearch(nums, target, startIndex, lastIndex);
    } else if (nums[startIndex] > nums[mid]) {
      // console.log("First Half is unsorted");
      lastIndex = mid-1;
      return binarySearch(nums, target, startIndex, lastIndex);
    } else if (nums[mid] > nums[lastIndex]) {
      // console.log("Second Half is unsorted");
      startIndex = mid+1;
      return binarySearch(nums, target, startIndex, lastIndex);
    } else {
      return -1;
    }
  }

  // console.log("nums ::", nums);
  // console.log("Target ::", target);
  let firstIndex = 0;
  let lastIndex = nums.length - 1;
  // console.log("======> First Index ::", firstIndex, nums[firstIndex], "||| Last Index ::", lastIndex, nums[lastIndex]);
  return binarySearch(nums, target, firstIndex, lastIndex);
}

let target;
// target = 0;
// target = 1;
// target = 2;
// target = 3;
// target = 4;
target = 5;
// target = 6;
// target = 7;
// target = 8;
// target = 9;
let nums = [];
// nums = [4, 5, 6, 7, 8, 9, 0, 1, 2, 3];
nums = [8, 9, 0, 1, 2, 3, 4, 5, 6, 7];

console.log(search(nums, target));