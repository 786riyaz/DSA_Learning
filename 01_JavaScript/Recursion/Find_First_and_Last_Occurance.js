/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var element_search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  return [findStart(nums, target, start, end), findEnd(nums, target, start, end)];
};

function findStart(nums, target, start, end) {
  // console.log("Find Start: ", start, end);
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] == target) {
      if (nums[mid - 1] == target) {
        return findStart(nums, target, start, mid - 1);
      } else {
        return mid;
      }
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function findEnd(nums, target, start, end) {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("Find End: ", start, mid, end);
    if (nums[mid] == target) {
      if (nums[mid + 1] == target) {
        return findEnd(nums, target, mid + 1, end);
      } else {
        return mid;
      }
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

let a = [5, 7, 7, 8, 8, 8, 8, 8, 10];
console.log(element_search(a, 8)); // [3, 7]
