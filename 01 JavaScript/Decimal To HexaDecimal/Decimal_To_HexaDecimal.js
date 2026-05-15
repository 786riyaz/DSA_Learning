/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  // Edge case
  if (num === 0) return "0";

  let hex = [];

  let hexAlpha = {
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
  };

  // Handle negative number using 2's complement
  if (num < 0) {
    // Convert to unsigned 32-bit integer
    // console.log("Before Number ::", num);
    num = num >>> 0;
    // console.log("Updated Number ::", num);
  }

  while (num > 0) {
    let remainder = num % 16;

    hex.push(hexAlpha[remainder] || remainder);

    num = Math.floor(num / 16);
  }

  let answer = "";

  for (let i = hex.length - 1; i >= 0; i--) {
    answer += hex[i];
  }

  return answer;
};

// Test cases
// console.log(toHex(26));     // "1a"
console.log(toHex(-1)); // "ffffffff"
console.log(toHex(-26)); // "ffffffe6"
console.log(toHex(26)); // "ffffffe6"
// console.log(toHex(0));      // "0"
// console.log(toHex(255));    // "ff"
// console.log(toHex(-255));   // "ffffff01"
