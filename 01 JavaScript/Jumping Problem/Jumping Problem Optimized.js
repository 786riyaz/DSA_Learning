/**
 * @param {number} n
 * @return {string}
 */
function ramanJumping(n) {

    const rem = n % 6;

    if (rem === 0 || rem === 1 || rem === 3) {
        return "YES";
    }

    return "NO";
}



console.log("For 0 ::", ramanJumping(0),"\n");       // YES
console.log("For 1 ::", ramanJumping(1),"\n");    // YES
console.log("For 2 ::", ramanJumping(2),"\n");    // NO
console.log("For 3 ::", ramanJumping(3));
console.log("For 4 ::", ramanJumping(4));
