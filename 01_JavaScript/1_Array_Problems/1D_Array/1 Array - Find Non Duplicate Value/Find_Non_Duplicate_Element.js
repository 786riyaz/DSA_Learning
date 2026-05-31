/**
 * @param {number[]} arr
 * @return {number}
 */
var single_elements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }

  return arr;
};

console.log(single_elements([1, 1, 2, 2, 3, 3, 4])); // 4