/**
 * @param {string} s
 * @return {array}
 */
var charFrequency = function (s) {
  console.log("Input String ::", s);
  let a = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    // a[ascii % 97] = a[ascii % 97] + 1;
    // a[ascii - 97] = a[ascii - 97] + 1;
    a[ascii - 97]++;
    // console.log(ascii, "---", ascii % 97);
  }
  return a;
};

// console.log(charFrequency("abracadabra"));
// [5, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0 ]

// console.log(charFrequency("abfahbahbfhabaxbzzhabebahfba"));

console.log(charFrequency("ababcdbfababga"));
