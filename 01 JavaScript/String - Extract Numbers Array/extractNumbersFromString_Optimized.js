function extractNumbersFromString(str) {
  let numbers = [];
  let currentNumber = 0;
  let buildingNumber = false;

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);

    // digit check
    if (ascii >= 48 && ascii <= 57) {
      currentNumber = currentNumber * 10 + (ascii - 48);
      buildingNumber = true;
    } else {
      // end of current number
      if (buildingNumber) {
        numbers.push(currentNumber);
        currentNumber = 0;
        buildingNumber = false;
      }
    }
  }

  // handle number at end of string
  if (buildingNumber) {
    numbers.push(currentNumber);
  }

  return numbers;
}

console.log(extractNumbersFromString("abc334v44d"));
// [334, 44]

console.log(extractNumbersFromString("abv345fjjf123tyir45jf6th"));
// [345, 123, 45, 6]
