/**
 * @param {number[]} arr
 * @return {number}
 */
var findPeakElement = function (arr) {
  console.log("Input array:", arr);
  let low = 0;
  let high = arr.length - 1;
  console.log("Initial low:", low, "high:", high);
  console.log("");

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    console.log("low:", low, "||| mid:", mid, "||| high:", high);
    console.log("low:", arr[low], "||| mid:", arr[mid], "||| high:", arr[high],"\n\n");

    console.log("Comparing arr[mid]:", arr[mid], "and arr[mid + 1]:", arr[mid + 1], "=>", arr[mid] < arr[mid + 1] ? "increasing slope" : "decreasing slope");
    // increasing slope
    if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    }
    // decreasing slope
    else {
      high = mid;
    }
  }

  return low;
};

// console.log(findPeakElement([1, 2, 3, 1])); // 2
console.log(findPeakElement([1, 0, 3, 5])); // 3
// console.log(findPeakElement([1, 2, 1, 3, 1])); /// 1 or 3
// console.log(findPeakElement([7, 6, 5, 4, 3, 2, 1])); // 0
