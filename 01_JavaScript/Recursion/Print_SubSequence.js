function printSubsequences(arr) {
    generate(0, arr, []);
}

function generate(index, arr, current) {

    // Base Case
    if (index === arr.length) {

        // Ignore empty subsequence
        if (current.length > 0) {
            console.log([...current]);
        }

        return;
    }

    // Choice 1: Include current element
    current.push(arr[index]);
    generate(index + 1, arr, current);

    // Backtrack
    current.pop();

    // Choice 2: Exclude current element
    generate(index + 1, arr, current);
}

printSubsequences([1, 2, 3, 4]);