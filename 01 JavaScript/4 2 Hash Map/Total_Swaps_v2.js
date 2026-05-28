/**
 * @param {number[]} arr
 * @return {number}
 */
var total_swaps = function (arr) {
  let n = arr.length;
  console.log("Input Array ::", arr, "(", n, ")");

  // Create array with value + original index
  let temp = arr.map((value, index) => {
    return {
      value: value,
      index: index,
    };
  });

  console.log("Temp ::", temp);

  // Sort according to values
  temp.sort((a, b) => a.value - b.value);
  console.log("Temp Sorted ::", temp);

  let visited = new Array(n).fill(false);
  console.log("Visted ::", visited);

  let swaps = 0;

  for (let i = 0; i < n; i++) {
    console.log("=========================================");
    console.log("Current Index ::", i);
    // already visited OR already in correct place
    if (visited[i] || temp[i].index === i) {
      console.log("Skipping the Loop...");
      continue;
    }

    let cycleSize = 0;
    let j = i;

    // Traverse cycle
    while (!visited[j]) {
      console.log("-----------------------------------------");
      visited[j] = true;
      console.log("Setting True at Index", j);

      j = temp[j].index;

      cycleSize++;
    }
    console.log("Cycle Size ::", cycleSize);

    // If cycle has more than 1 element
    if (cycleSize > 1) {
      swaps += cycleSize - 1;
      console.log("Swap Value Updated ::", swaps);
    }
  }

  return swaps;
};

let input;
input = [10, 19, 6, 5, 3]; // 3
// input = [10, 19, 6, 3, 5]; // 2
// input = [2, 8, 5, 4]; // 1

console.log(total_swaps(input));
