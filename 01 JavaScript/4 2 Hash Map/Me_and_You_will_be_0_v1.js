/**
 * @param {number[]} arr
 * @return {boolean}
 */
var twin = function (arr) {
  console.log("Input Array ::", arr);
  let sum = 0;
  let mapping = new Map(); // sum :: index
  for (let i = 0; i < arr.length; i++) {
    console.log("Current Element :: ", arr[i]);
    sum += arr[i];
    console.log("Running Sum ::", sum);
    if(sum == 0 ){
        console.log("====Sum is Zero from Starting ===", i);
        // return i;
        return true;
    }
    if (mapping.has(sum)) {
      console.log("=================== Already Have this sum =================== ::", mapping.get(sum));
      console.log("From", mapping.get(sum)+1, "To", i);
      return true;
    }
    mapping.set(sum, i);
    console.log("Mapping ::", mapping);
  }
  return false;
};

// let input = [9, 10, -10, 9, 9, 9];
// let input = [10, -10, 9, 9, 9];
let input = [0, 10, -10, 9, 9, 9];
// let input = [5, 5, 5, 5, 5];

console.log(twin(input));
