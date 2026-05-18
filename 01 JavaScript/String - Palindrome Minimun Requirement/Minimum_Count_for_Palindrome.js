/**
 * @param {string} s
 * @return {int}
 */
var minimum_count = function (s) {
  console.log();
  // console.log("Input String ::", s);
  let reversedString = [...s].reverse().join("");
  // console.log("Reversed String ::", reversedString);
  if (s === reversedString) {
    console.log("String is Already Palindrome");
    return 0;
  } else {
    // console.log("Not Palindrome");
    for (let i = 1; i < reversedString.length; i++) {
      let subStr = reversedString.substring(0, i);
      // console.log("Sub String ::", subStr);
      let newStr = "";
      newStr = subStr.concat(s);
      // console.log("New String ::", newStr);
      if ([...newStr].reverse().join("") == newStr) {
        console.log("New String is Palindrome with Count ::");
        // console.log(i);
        return i;
      }
    }
  }
};

console.log(minimum_count("abc")); // 2
console.log(minimum_count("aa")); // 0
console.log(minimum_count("ab")); // 1
console.log(minimum_count("abffbahuxy")); // 4
console.log(minimum_count("abffbahuxhhg")); // 6
console.log(minimum_count("dcb")); // 2
console.log(minimum_count("abade")); // 2
