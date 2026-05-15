/**
 * @param {number[]} arr
 * @return {number[]}
 */

var sortByBits = function(arr) {
    const bitCount = (num) => {
        let count = 0;

        while (num > 0) {
            count += num & 1; // check last bit
            num >>= 1;        // right shift
        }

        return count;
    };

    return arr.sort((a, b) => {
        console.log("\n=======================\nComparing ::", a, b);
        // console.log("Aray ::", "" + arr);
        let countA = bitCount(a);
        let countB = bitCount(b);
        // console.log(`Number: ${b}, Bit Count: ${countB}`);
        
        if (countA === countB) {
            console.log(`===== Number: ${a}, Bit Count: ${countA} ||||||||| Number: ${b}, Bit Count: ${countB} ===> ${a - b}`);
            return a - b;
        }
        console.log(`Number: ${a}, Bit Count: ${countA} ||||||||| Number: ${b}, Bit Count: ${countB} ===> ${countA - countB}`);

        return countA - countB;
    });
};

console.log(sortByBits([0,1,2,3,4,5,6,7,8]));
// console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1]));