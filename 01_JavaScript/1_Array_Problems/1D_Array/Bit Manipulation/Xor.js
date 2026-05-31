
/**
 * @param {number} n
 *  @param {number[]} arr
 * @return {number}
 */
var noXor = function (n, arr) {
    console.log("N ::", n, "Array ::", arr);
    let result = 0;
    for (let i = 1; i <= n; i++) {
        console.log(`${n-i} ^ ${arr[i-1]}`);
        let xor = ((n - i) ^ arr[i - 1]);
        result += xor;

    }

    return result;
}

console.log(noXor(5, [1, 2, 3, 4, 5]));        // 17
