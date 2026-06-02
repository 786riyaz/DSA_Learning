/**
 * @param {number[]} arr
 * @return {number[]}
 */

let binaryCount = {};
var sortByBits = function (arr) {
  let sortedByBits = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    // console.log("Current ::", curr,)
    let count = 0;
    while (curr > 0) {
      if (binaryCount[curr] !== undefined) {
        count += binaryCount[curr];
        break;
      }
      if (curr % 2 == 1) {
        count++;
      }
      curr = Math.floor(curr / 2);
    }
    binaryCount[arr[i]] = count;
    // console.log(count);
    if (sortedByBits[count] === undefined) {
      sortedByBits[count] = [];
    }
    // console.log("Pushing ::", arr[i], "Count ::", count);
    sortedByBits[count].push(arr[i]);
  }
  //   console.log("Sorted by bits ::", sortedByBits);

  for (let i = 0; i < sortedByBits.length; i++) {
    if (sortedByBits[i] !== undefined) {
      sortedByBits[i].sort((a, b) => a - b);
    }
  }

  // console.log("Binary Count ::", binaryCount);
  return [sortedByBits].flat(2);
};

// console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])); //  [0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])); //  [1,2,4,8,16,32,64,128,256,512,1024]
