var trap = function (height) {
  console.log("height", height);
  let left = 0;
  let right = height.length - 1;

  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    console.log("==========================================");
    console.log("left", left, "| right", right, " | leftMax", leftMax, "| rightMax", rightMax, "| water", water);
    console.log("Comparing ::", left, "[", height[left], "] ||||", right, "[", height[right], "] ====>", height[left] < height[right]);
    if (height[left] < height[right]) {
      console.log("Testing ::: Left :", left, height[left], "|| Left Max ::", leftMax, "===>", height[left] >= leftMax);
      if (height[left] >= leftMax) {
        leftMax = height[left];
        console.log("Updated Left Max ::", leftMax);
      } else {
        water += leftMax - height[left];
        console.log("Updated Water ::", water);
      }
      left++;
    } else {
      console.log("Testing ::: Right :", right, height[right], "|| Right Max ::", rightMax, "===>", height[right] >= rightMax);
      if (height[right] >= rightMax) {
        rightMax = height[right];
        console.log("Updated Right Max ::", rightMax);
      } else {
        water += rightMax - height[right];
        console.log("Updated Water ::", water);
      }
      right--;
    }
  }

  return water;
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
// console.log(trap([4, 2, 0, 3, 2, 5])); // 9
// console.log(trap([1, 2, 3, 2, 5])); // 1
// console.log(trap([1, 2, 3, 4, 5])); // 0
// console.log(trap([1, 2, 3, 4, 5, 2, 1])); // 0
// console.log(trap([5, 4, 3, 2, 1])); // 0
console.log(trap([5, 4, 3, 2, 1, 5])); // 10
// console.log(trap([0, 1, 0, 2, 1])); // 1
// console.log(trap([2, 0, 1, 2])); // 3
// console.log(trap([2, 0, 1, 2, 1])); // 3
// console.log(trap([2, 0, 1, 2,2])); // 3
