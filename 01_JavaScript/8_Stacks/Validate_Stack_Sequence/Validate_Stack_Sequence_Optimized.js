/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [];
    let popIndex = 0;

    for (let num of pushed) {
        stack.push(num);

        while (
            stack.length &&
            stack.at(-1) === popped[popIndex]
        ) {
            stack.pop();
            popIndex++;
        }
    }

    return stack.length === 0;
};

// console.log(validateStackSequences([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])); // true
// console.log(validateStackSequences([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])); // true
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])); // true
// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])); // false
// console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 2, 1, 3, 5])); // false
// console.log(validateStackSequences([2, 1, 0], [1, 2, 0])); // true
// console.log(validateStackSequences([3,1,0,2], [2,0,3,1])); // false