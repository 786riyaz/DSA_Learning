function findUnsortedSubarray(arr) {
    let n = arr.length;
    let left = -1;
    let right = -1;
    console.log("Array: ", arr, "\nLength: ", n);
    console.log("Starting left and right boundaries: ", left, right);
    // find left boundary
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            left = i;
            break;
        }
    }
    console.log("Left boundary: ", left);

    // already sorted
    if (left === -1) return 0;

    // find right boundary
    for (let i = n - 1; i > 0; i--) {
        if (arr[i - 1] > arr[i]) {
            right = i;
            break;
        }
    }
    console.log("Right boundary: ", right);

    // find min/max in middle region
    let min = Infinity;
    let max = -Infinity;

    for (let i = left; i <= right; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i]);
    }
    console.log("Min in middle region: ", min, "\nMax in middle region: ", max);

    // expand left
    while (left > 0 && arr[left - 1] > min) {
        left--;
    }

    // expand right
    while (right < n - 1 && arr[right + 1] < max) {
        right++;
    }
    console.log("Expanded left boundary: ", left, "\nExpanded right boundary: ", right);
    return right - left + 1;
}


let input = [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60]; // 6
// let input = [0, 1, 15, 25, 6, 7, 30, 40, 50]; // 4
// let input = [1, 2, 3, 4, 5]; // 0
// let input = [1, 2, 7, 5, 6, 8]; // 3
console.log(findUnsortedSubarray(input));
