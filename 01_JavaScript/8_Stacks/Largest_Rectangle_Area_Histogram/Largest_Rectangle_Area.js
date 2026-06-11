var largestRectangleArea = function (heights) {
  let stack = [];
  let maxArea = 0;

  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    console.log("Index ::", i, "||| Value ::", heights[i]);
    console.log("Stack ::", stack);
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      // console.log(heights[i], heights[stack[stack.length - 1]], "===>", heights[i] < heights[stack[stack.length - 1]]);
      console.log("** Current Element", heights[i], "is smaller then stack top :", heights[stack[stack.length - 1]]);

      let top = stack.pop();
      let height = heights[top];
      let width;

      if (stack.length === 0) {
        width = i;
      } else {
        console.log("Calculating ===>",i , stack[stack.length - 1]);
        width = i - stack[stack.length - 1] - 1;
      }
      console.log("Top ::", top, "||| Height ::", height, "||| Width ::", width, "===>", height * width);

      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
    console.log("Pushed Index ::", i);
    console.log("==================================");
  }

  return maxArea;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
// console.log(largestRectangleArea([10, 2, 4, 6, 12])); // 12
// console.log(largestRectangleArea([2, 3, 8, 7, 5])); // 15
// console.log(largestRectangleArea([2, 4])); // 4
// console.log(largestRectangleArea([1, 2, 3, 4, 5])); // 9
// console.log(largestRectangleArea([2, 4, 6, 8, 10])); // 18
