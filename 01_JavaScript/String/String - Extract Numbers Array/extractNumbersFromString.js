function extractNumbersFromString(str) {
  //   console.log("Input string:", str);
  let numbers = [];
  let digits = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i], "------", str[i].charCodeAt());
    if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
      //   console.log("Character is number ::", str[i]);
      digits += str[i];
      numbers[count] = parseInt(digits);
    } else {
      if (digits !== "") {
        count++;
      }
      //   console.log(digits);
      digits = "";
    }
  }
  //   console.log(numbers);
  return numbers;
}

console.log(extractNumbersFromString("abc334v44d")); // Output: [334, 44]
console.log(extractNumbersFromString("abv345fjjf123tyir45jf6th")); // Output: [345, 123, 45, 6]
