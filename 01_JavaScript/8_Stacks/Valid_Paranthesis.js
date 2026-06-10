
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    console.log("Input ::", s);
    let stack = [];
    let brackets = new Map([
        ["{", "}"],
        ["[", "]"],
        ["(", ")"]
    ]);
    console.log("Openings ::", brackets);
    for (let i = 0; i < s.length; i++){
        console.log("\n===========> Stack ::", stack);
        // console.log("Character ::", s[i]);
        if (brackets.has(s[i])) {
            console.log("Opening Bracket ::", s[i]);
            stack.push(s[i]);
        } else {
            console.log("Closing Brakcet ::", s[i]);
            let topElement = stack.at(-1);
            let correctClosingBrakcet = brackets.get(topElement);
            console.log("Element at top of stack ::", topElement, "====>", correctClosingBrakcet);
            if(s[i] == correctClosingBrakcet){
                console.log("Correct Matching");
                stack.pop();
                console.log("Stack After Correct Matching::", stack);
            } else {
                console.log("Incorrect Matching");
                return false;
            }

        }
    }
    if (stack.length > 0) return false;
    return true;
};


// console.log(isValid("()"));         // true
// console.log(isValid("{[]}(){[{()}]}"));         // true
// console.log(isValid("[{[]}]"));         // true
// console.log(isValid("(]"));         // false
// console.log(isValid("()[]{}"));     // true
// console.log(isValid("({[{]})}"));         // false
// console.log(isValid("({}]"));         // false
// console.log(isValid("({"));         // false
console.log(isValid("("));         // false