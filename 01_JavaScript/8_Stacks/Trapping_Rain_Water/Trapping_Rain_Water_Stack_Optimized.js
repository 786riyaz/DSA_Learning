var trap = function (height) {
  // console.log("Input height :::", height);
  let stack = [];
  let water = 0;

  for (let i = 0; i < height.length; i++) {
    // console.log("======================================");
    // console.log("Current Index ::", i, "===>", height[i]);

    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      // console.log("Comparing ::", height[i], height[stack[stack.length - 1]], height[i] > height[stack[stack.length - 1]]);

      let bottom = stack.pop();
      // console.log("Bottom ------------>", bottom);

      if (!stack.length) break;

      let leftWall = stack[stack.length - 1];
      let width = i - leftWall - 1;
      // console.log("Left Wall ::", leftWall, "||| Width ::", width);

      // console.log("Height-LeftWall ::", height[leftWall], "|| Height-i ::", height[i], "|| Height-Bottom ::", height[bottom]);
      let boundedHeight = Math.min(height[leftWall], height[i]) - height[bottom];
      water += width * boundedHeight;
      // console.log("Updated Water ::", water);
    }
    stack.push(i);
    // console.log("Pushing Index in Stack ::", stack);
  }

  return water;
};

// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
// console.log(trap([1, 2, 3, 2, 5])); // 1
// console.log(trap([1, 2, 3, 4, 5])); // 0
// console.log(trap([1, 2, 3, 4, 5, 2, 1])); // 0
// console.log(trap([5, 4, 3, 2, 1])); // 0
// console.log(trap([5, 4, 3, 2, 1, 5])); // 10
// console.log(trap([0, 1, 0, 2, 1])); // 1
// console.log(trap([2, 0, 1, 2])); // 3
// console.log(trap([2, 0, 1, 2, 1])); // 3
// console.log(trap([2, 0, 1, 2, 2])); // 3
