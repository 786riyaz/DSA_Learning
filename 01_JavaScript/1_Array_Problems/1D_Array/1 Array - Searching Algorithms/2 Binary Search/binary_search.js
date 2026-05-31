function binarySearch(arr, target) {
  console.log("Input Array ::", arr, "Target ::", target);
  let first = 0;
  let last = arr.length - 1;

//   while (mid <= first || mid != last) {
  while (first <= last) {
    // let mid = Math.floor((first + last) / 2);
    let mid = Math.floor(first + (last - first) / 2)

    let ans = arr[mid];
    console.log("Mid ::", mid, "===>", ans);

    if (ans == target) {
      return mid;
    } else if (ans < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return -1;
}

let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 1;
console.log(binarySearch(input, target));
