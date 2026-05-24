function searchRotatedArray(arr, target) {
  console.log("Array:", arr, "Target:", target);
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    const mid = Math.floor(first + (last - first) / 2);

    console.log(
      "First:", first,
      "Mid:", mid,
      "Last:", last,
      "Value:", arr[mid]
    );

    // Target found
    if (arr[mid] === target) {
      return mid;
    }

    // Left half is sorted
    if (arr[first] <= arr[mid]) {

      // Target lies inside left half
      if (target >= arr[first] && target < arr[mid]) {
        last = mid - 1;
      } else {
        first = mid + 1;
      }

    }
    // Right half is sorted
    else {

      // Target lies inside right half
      if (target > arr[mid] && target <= arr[last]) {
        first = mid + 1;
      } else {
        last = mid - 1;
      }
    }
  }

  return -1;
}

const arr = [4,5,6,7,8,9,0,1,2,3];

console.log(searchRotatedArray(arr, 1));