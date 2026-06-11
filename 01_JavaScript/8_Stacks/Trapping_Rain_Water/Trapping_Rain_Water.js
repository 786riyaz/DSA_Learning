/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  console.log("Input Array ::", height);
  let max = Math.max(...height);
  console.log("Max Value ::", max);
  let final = 0;
  for (let i = 1; i <= max; i++) {
    console.log("======================================");
    let temp = 0;
    console.log("Current Height ::", i);
    let start = -1;
    let end = -1;
    for (let j = 0; j < height.length; j++) {
      // console.log("Current Piller ::", j);
      console.log("-------------Comparing ::", height[j], i);
      if (height[j] < i) {
        console.log("This is Blank Space ::", j, height[j]);
        if (start != -1) {
          console.log("Increasing Temp", start);
          temp++;
          console.log("Temp ::", temp);
        }
      } else {
        console.log("[][] === This is Pillar Block", start);
        if (start == -1) {
          start = j;
          console.log("Starting ::", start);
        } else {
        }
      }
    }
    final += temp;
  }
  return final;
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
// console.log(trap([4, 2, 0, 3, 2, 5])); // 9
// console.log(trap([0, 1, 0, 2, 1])); // 1
// console.log(trap([2, 0, 1, 2])); // 3
console.log(trap([2, 0, 1, 2,1])); // 3
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
