"use strict";

/**
 * @param {number[]} arr
 * @param {number} length
 * @return {number[]}
 */
function sort_array(arr, length) {

    for (let i = 1; i < length; i++) {
        console.log("Inserting ", arr[i]);

        let current = arr[i];
        let j = i - 1;
        console.log(`I::${i} --- J::${j} --- arr[j]::${arr[j]}`);
        // Shift larger elements to right
        while (j >= 0 && arr[j] > current) {
            
            arr[j + 1] = arr[j];
            j--;
            console.log("Moved to right ===> ", arr)

        }

        // Insert at correct position
        arr[j + 1] = current;
        console.log(`Added Element at ${j+1} ===>`, arr)
    }

    return arr;
}

let input = [4,3,5,2,1];

console.log(sort_array(input, input.length));