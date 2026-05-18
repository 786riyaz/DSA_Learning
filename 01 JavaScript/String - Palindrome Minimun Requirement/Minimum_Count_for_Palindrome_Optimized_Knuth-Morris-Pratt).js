/**
 * @param {string} s
 * @return {number}
 */
var minimum_count = function (s) {
  console.log("Input string:", s);
  let reversed = [...s].reverse().join("");
  console.log("Reversed string:", reversed);
  let combined = s + "#" + reversed;
  console.log("Combined string for LPS computation:", combined);

  let lps = new Array(combined.length).fill(0);
  console.log("LPS array initialized:", lps);

  let len = 0;
  let i = 1;
  console.log("================================")

  while (i < combined.length) {
    console.log(`Comparing combined[${i}] (${combined[i]}) with combined[${len}] (${combined[len]})`);
    if (combined[i] === combined[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      console.log(`------Mismatch found at combined[${i}] and combined[${len}]`);
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return s.length - lps[combined.length - 1];
};

// console.log(minimum_count("abc")); // 2
// console.log(minimum_count("aa")); // 0
// console.log(minimum_count("ab")); // 1
console.log(minimum_count("abffbahuxy")); // 4
// console.log(minimum_count("abffbahuxhhg")); // 6
// console.log(minimum_count("dcb")); // 2
// console.log(minimum_count("abade")); // 2
