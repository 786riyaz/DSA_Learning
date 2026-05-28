/**
 * @param {number[]} arr
 * @return {number}
 */
var total_swaps = function (arr) {

    let sorted = [...arr].sort((a, b) => a - b);

    // value -> current index
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i);
    }

    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {

        // already correct
        if (arr[i] === sorted[i]) {
            continue;
        }

        swaps++;

        // element that should be here
        let correctValue = sorted[i];

        // where is that value currently?
        let correctIndex = map.get(correctValue);

        // current value
        let currentValue = arr[i];

        // swap
        [arr[i], arr[correctIndex]] =
            [arr[correctIndex], arr[i]];

        // update indexes in map
        map.set(currentValue, correctIndex);
        map.set(correctValue, i);
    }

    return swaps;
};