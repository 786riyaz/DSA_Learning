
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // console.log("Input String ::", s);
    let reversedString = [...s].reverse().join("");
    // console.log("Reversed String ::", reversedString);

    if (s == reversedString) {
        return true;
    } else {
        return false;
    }
    
};

// =======================================================================

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};