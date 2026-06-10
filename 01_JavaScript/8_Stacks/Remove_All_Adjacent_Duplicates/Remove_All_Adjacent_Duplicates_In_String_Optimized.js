var removeDuplicates = function (s) {
    console.log("Input ::", s);
    let stack = [];
    
    for(let ch of s){
      if(stack.length && stack[stack.length-1] == ch){
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
   
    console.log("Final Stack ::", stack);
    return stack.join('')
};



console.log(removeDuplicates("abbaca"));//ca
// console.log(removeDuplicates("azxxzy"));// ay
// console.log(removeDuplicates("ayxxyazz"));// 
// console.log(removeDuplicates("abcse"));// abcse
// console.log(removeDuplicates("abcdeedcb"));// a