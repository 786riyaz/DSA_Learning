/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function (s) {
  let stack = [];
  let finalString = "";

  var processStack = function () {
    // console.log("Processing Stack ::", stack);
    let ch = stack.pop();
    while (ch != "[") {
      finalString = ch + finalString;
      ch = stack.pop();
    }
    // console.log("String ::", finalString);
    let times = stack.pop();
    while (/\d/.test(stack[stack.length - 1])) {
      times = stack.pop() + times;
    }
    // console.log("Adding", times, "Times");
    stack.push(finalString.repeat(Number(times)));
    finalString = "";
  };

  // console.log("Input String ::", s);
  for (let ch of s) {
    // console.log("Current Character ::", ch);
    if (ch == "]") {
      // console.log("Process the stack ::", stack);
      // stack.push(str);
      processStack();
    } else {
      stack.push(ch);

      // console.log("Current Stack ::", stack);
    }
  }
  // console.log("Final Stack ::", stack);
  return stack.join("");
};

// console.log(decodeString("2[a3[c4[f]]]4[f]")); //acffffcffffcffffacffffcffffcffffffff
// console.log(decodeString("3[a]2[bc]")); //aaabcbc
// console.log(decodeString("30[a2[c]]")); //accaccacc
