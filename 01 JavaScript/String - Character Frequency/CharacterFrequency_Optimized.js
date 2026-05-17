/**
 * @param {string} s
 * @return {number[]}
 */
var charFrequency = function (s) {
    let freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }

    return freq;
};

console.log(charFrequency("ababcdbfababga"));