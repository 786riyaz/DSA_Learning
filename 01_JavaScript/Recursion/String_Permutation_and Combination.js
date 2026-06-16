function permutations(str) {
  let result = [];
  generate("", str, result);
  return result;
}

function generate(current, remaining, result) {
  console.log("===========>", current, remaining, [...result]);

  // Base Case
  if (remaining.length === 0) {
    result.push(current);
    return;
  }

  // Recursive Case
  for (let i = 0; i < remaining.length; i++) {
    let chosen = remaining[i];
    console.log("Choosen ::", chosen);

    let left = remaining.substring(0, i);
    let right = remaining.substring(i + 1);
    console.log(left, "+", right);
    let newRemaining = left + right;

    generate(current + chosen, newRemaining, result);
  }
}

console.log(permutations("abc"));
// console.log(permutations("abcd"));
