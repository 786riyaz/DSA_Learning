/**
 * @param {number[]} arr
 * @return {number}
 */
var findPeakElement = function (arr) {
//   console.log("Array :::", arr);

    for (let i = 1; i < arr.length-1; i++) {
        // console.log("i :::", i, ":::", arr[i]);
        // console.log("Comparing:", arr[i-1], arr[i], arr[i + 1], arr[i] > arr[i - 1], arr[i] > arr[i + 1]);
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            // console.log("Peak Element :::", arr[i]);
            return i;
        }
    }
    // console.log("No peak element found");
    return false;
};

// console.log(findPeakElement([1, 2, 3, 1])); // 2
// console.log(findPeakElement([1, 0, 3, 5])); // false
// console.log(findPeakElement([1, 2, 1, 3, 1])); // 1 or 3
console.log(findPeakElement([7, 6, 5, 4, 3, 2, 1])); // false
