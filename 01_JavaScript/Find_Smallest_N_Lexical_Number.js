/*
Time Limit: 2s, Memory Limit: 128000

Problem Statement:

Jerry is having yet another existential crisis. In order to keep him occupied Rick gives him a task.




F(N, K) = The position (1-indexed) of K when numbers from 1 to N are lexicographically sorted.

For example if N = 11, the lexicographically sorted order will be:

1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9. So F(11, 2) = 4, as 2 is in the 4th position.




Given K and M, find the smallest N such that F(N, K) = M.

Input:

Input contains two integers K and M.




Constraints:

1 <= K, M <= 1000000000

Output:

Return smallest N such that F(N, K)=M and if no such N exists Return 0.

Example:

Input:

2 4

Output:

11

Explanation:

When numbers from 1 to 11 are sorted lexicographically, the sequence becomes: 1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9. Here, 2 is at the 4th position, hence N=11.




Input:

2 1

Output:

0

Explanation:

For no N can 2 be at the 1st position when numbers from 1 to N are sorted lexicographically. Hence the output is 0.
*/

/**
 * @param {Number} K
 * @param {Number} M
 * @return {Number}
 */
function findSmallestN(K, M) {
  const k = BigInt(K);
  const target = BigInt(M);

  function countPrefix(N, prefix) {
    let cur = prefix;
    let next = prefix + 1n;
    let cnt = 0n;

    while (cur <= N) {
      const upper = next <= N + 1n ? next : N + 1n;
      cnt += upper - cur;
      cur *= 10n;
      next *= 10n;
    }

    return cnt;
  }

  function rank(N) {
    if (N < k) return 0n;

    const s = String(K);
    let before = 0n;

    // First digit
    let prefix = "";
    const firstDigit = Number(s[0]);

    for (let d = 1; d < firstDigit; d++) {
      before += countPrefix(N, BigInt(d));
    }

    prefix = s[0];

    // Remaining digits
    for (let i = 1; i < s.length; i++) {
      before += 1n; // ancestor prefix itself

      const digit = Number(s[i]);

      for (let d = 0; d < digit; d++) {
        const p = BigInt(prefix + d);
        before += countPrefix(N, p);
      }

      prefix += s[i];
    }

    return before + 1n;
  }

  // Check if K is a power of 10 (1,10,100,...)
  let powerOfTen = true;
  const ks = String(K);

  if (ks[0] !== "1") {
    powerOfTen = false;
  } else {
    for (let i = 1; i < ks.length; i++) {
      if (ks[i] !== "0") {
        powerOfTen = false;
        break;
      }
    }
  }

  if (powerOfTen) {
    const fixedRank = BigInt(ks.length);
    return fixedRank === target ? K : 0;
  }

  const startRank = rank(k);

  if (target < startRank) return 0;

  // Find an upper bound
  let lo = k;
  let hi = k;

  while (rank(hi) < target) {
    hi *= 2n;
  }

  // Lower bound on rank >= target
  while (lo < hi) {
    const mid = (lo + hi) >> 1n;

    if (rank(mid) >= target) {
      hi = mid;
    } else {
      lo = mid + 1n;
    }
  }

  return rank(lo) === target ? Number(lo) : 0;
}


console.log(findSmallestN(2, 4)); // 11
// 1 10 11 2

console.log(findSmallestN(2, 6)); // 13
// 1 10 11 12 13 2


console.log(findSmallestN(6, 12)); // 15
// 1 10 11 12 13 14 15 2 3 4 5 6

console.log(findSmallestN(12, 6)); // 101
// 1 10 100 101 11 12

console.log(findSmallestN(2, 1)); // 0
// 1 2