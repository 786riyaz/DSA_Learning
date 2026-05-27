/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  console.log("Jewels ::", jewels);
  console.log("Stones ::", stones);

  let Jewelset = new Set(jewels);
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    let char = stones[i];
    if (Jewelset.has(char)) {
      count++;
      continue;
    }
  }
  return count;
};

let j = "aA";
let s = "aAAbbbb";
console.log(numJewelsInStones(j, s)); // 3
