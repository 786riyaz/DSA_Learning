/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  console.log("Pushing ::", pushed);
  console.log("Poping ::", popped);
  console.log("===============================================");

  let pop_pointer = -1;
  let push_pointer = -1;
  let stack = [];
  while (pop_pointer < popped.length - 1) {
    pop_pointer++;
    console.log("\n===========> Stack ::", stack);
    if (popped[pop_pointer] == stack.at(-1)) {
    console.log("Matched at starting ");
        stack.pop(); 
    continue;
    }
    console.log("Current pop_pointer ::", pop_pointer, "=====>", popped[pop_pointer]);

    while (push_pointer < pushed.length - 1) {
      push_pointer++;
      if (pushed[push_pointer] != popped[pop_pointer]) {
          console.log("Adding ===>", pushed[push_pointer]);
        stack.push(pushed[push_pointer]);
      } else {
        break;
      }
    }
    console.log("Push Pointer ::", push_pointer, pushed[push_pointer]);
    if (push_pointer >= pushed.length - 1) {
        console.log("Stack ::", stack);
      let top = stack.pop();
      console.log("Top ::",top, "Poping Element ::", popped[pop_pointer + 1]);
      if (top == popped[pop_pointer + 1]) {
        console.log("Removed");
        pop_pointer++;
      } else {
        return false;
      }
    }
  }
  //   console.log("Stack ::", stack);
  return true;
};

// console.log(validateStackSequences([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // true
// console.log(validateStackSequences([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])); // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // true
// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); // false
// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 2, 1, 3, 5])); // false
// console.log(validateStackSequences([2, 1, 0], [1, 2, 0])); // true
// console.log(validateStackSequences([3,1,0,2], [2,0,3,1])); // false