var removeDuplicates = function (s) {
    console.log("Input ::", s);
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        console.log("Current Element ::", currentChar);
        stack.push(s[i]);
        console.log("Comparing ::", stack[stack.length - 1], stack[stack.length - 2]);
        if (stack[stack.length - 1] == stack[stack.length - 2]) {
            console.log("Same ::", stack.pop(), stack.pop());
            // stack.pop();stack.pop();
        }
    }
    console.log("Final Stack ::", stack);
    return stack.join('')
};



console.log(removeDuplicates("abbaca"));//ca
console.log(removeDuplicates("azxxzy"));// ay
console.log(removeDuplicates("ayxxyazz"));// 
console.log(removeDuplicates("abcse"));// abcse
console.log(removeDuplicates("abcdeedcb"));// a