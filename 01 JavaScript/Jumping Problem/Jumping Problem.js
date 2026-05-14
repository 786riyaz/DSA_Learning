
/**
 * @param {number} n
 * @return {String)
**/
function ramanJumping(n) {

    //your code here
    // console.log(n)
    let stepsLength = [1, 2, 3];
    let initial = 0;
    let total = 0;
    let count = 0;

    while (total <= n) {
        console.log("-------------Initial: ", initial, "Total: ", total, "Count: ", count);
        if (total == n) {
            return "YES";
        }
        total += stepsLength[count % 3];
        count++;
        console.log("Initial: ", initial, "Total: ", total, "Count: ", count);
    }
    return "NO";
}


console.log("For 0 ::", ramanJumping(0),"\n");       // YES
console.log("For 1 ::", ramanJumping(1),"\n");    // YES
console.log("For 2 ::", ramanJumping(2),"\n");    // NO
console.log("For 3 ::", ramanJumping(3));
console.log("For 4 ::", ramanJumping(4));
