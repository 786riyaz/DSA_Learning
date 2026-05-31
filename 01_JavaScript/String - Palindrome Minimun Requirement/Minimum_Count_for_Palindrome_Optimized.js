/**
 * @param {string} s
 * @return {number}
 */
var minimum_count = function (s) {
    console.log("\nInput String ::", s);
  let end = s.length - 1;

  while (end >= 0) {
    let left = 0;
    let right = end;
    let isPalindrome = true;

    while (left < right) {
        console.log(s[left], "---", s[right]);
      if (s[left] !== s[right]) {
        isPalindrome = false;
        break;
      }

      left++;
      right--;
    }

    if (isPalindrome) {
      return s.length - (end + 1);
    }

    end--;
    console.log(`End:${end} --- Left:${left} --- Right:${right} --- isPalindrome:${isPalindrome}`);
  }

  return s.length - 1;
};

// console.log(minimum_count("abc")); // 2
// console.log(minimum_count("aa")); // 0
// console.log(minimum_count("ab")); // 1
console.log(minimum_count("abffbahuxy")); // 4
console.log(minimum_count("abffbahuxhhg")); // 6
console.log(minimum_count("dcb")); // 2
console.log(minimum_count("abade")); // 2
